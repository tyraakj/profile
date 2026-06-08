import { useEffect, useRef } from "react";

declare const gsap: any;

export function useConstellation(heroUiId: string) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W: number, H: number;
    let nodes: any[] = [], edges: any[] = [], bgStars: any[] = [];
    let rotY = 0, tiltX = 0, camAngle = 0;
    let scattered = false;
    let allArrived = false;
    let mouse = { x: 0, y: 0 };
    let t = 0, edgeFadeIn = 0;
    let animId: number;

    const FOV = 600;
    const ROT_SPEED = 0.0018;

    function project(x: number, y: number, z: number) {
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      let rx = x * cosY - z * sinY;
      let ry = y;
      let rz = x * sinY + z * cosY;
      const cosX = Math.cos(tiltX), sinX = Math.sin(tiltX);
      const ry2 = ry * cosX - rz * sinX;
      const rz2 = ry * sinX + rz * cosX;
      ry = ry2; rz = rz2;
      rx += Math.cos(camAngle) * 30;
      rz += Math.sin(camAngle) * 40 + 400;
      const scale = FOV / Math.max(rz, 1);
      return { sx: rx * scale + W / 2, sy: ry * scale + H / 2, scale, rz };
    }

    function sampleLetters() {
      const off = document.createElement("canvas");
      const size = Math.min(W * 0.40, 360);
      off.width = W; off.height = H;
      const c = off.getContext("2d")!;
      c.fillStyle = "#fff";
      c.font = `900 ${size}px 'Bebas Neue'`;
      c.textAlign = "center";
      c.textBaseline = "middle";
      c.fillText("TYRA", W / 2, H / 2);
      const data = c.getImageData(0, 0, W, H).data;
      const step = Math.max(Math.floor(W / 88), 4);
      const pts: { x: number; y: number }[] = [];
      for (let y = 0; y < H; y += step)
        for (let x = 0; x < W; x += step)
          if (data[(y * W + x) * 4 + 3] > 128)
            pts.push({ x: x - W / 2, y: y - H / 2 });
      while (pts.length > 340)
        pts.splice(Math.floor(Math.random() * pts.length), 1);
      return pts;
    }

    function init() {
      if (!canvas) return;
      const hero = canvas.parentElement!;
      W = canvas.width = hero.clientWidth || window.innerWidth;
      H = canvas.height = hero.clientHeight || window.innerHeight;

      const pts = sampleLetters();
      nodes = pts.map((p, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.max(W, H) * (0.55 + Math.random() * 0.5);
        const tz = (Math.random() - 0.5) * 80;
        return {
          tx: p.x, ty: p.y, tz,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          z: (Math.random() - 0.5) * dist,
          vx: 0, vy: 0, vz: 0,
          delay: i / pts.length * 1.8,
          arrived: false,
          breathPhase: Math.random() * Math.PI * 2,
          orbitR: Math.random() * 2.5,
          orbitSpd: (Math.random() * 0.4 + 0.1) * (Math.random() > 0.5 ? 1 : -1),
          orbitAng: Math.random() * Math.PI * 2,
        };
      });

      edges = [];
      const thresh = Math.min(W, H) * 0.058;
      for (let i = 0; i < nodes.length; i++)
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].tx - nodes[j].tx;
          const dy = nodes[i].ty - nodes[j].ty;
          if (Math.sqrt(dx * dx + dy * dy) < thresh)
            edges.push({ a: i, b: j });
        }

      bgStars = Array.from({ length: 300 }, () => ({
        x: (Math.random() - 0.5) * W * 3,
        y: (Math.random() - 0.5) * H * 3,
        z: Math.random() * 600 + 100,
        bright: Math.random() * 0.5 + 0.3,
        twinkle: Math.random() * Math.PI * 2,
      }));

      allArrived = false;
      scattered = false;
    }

    function draw() {
      animId = requestAnimationFrame(draw);
      t += 0.016;
      rotY += ROT_SPEED;
      camAngle += 0.0008;
      tiltX += (mouse.y / H * 0.3 - tiltX) * 0.04;

      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
      bg.addColorStop(0, "rgba(10,4,28,1)");
      bg.addColorStop(1, "rgba(0,0,0,1)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      [
        { x: W * 0.20, y: H * 0.30, r: W * 0.18, c: "rgba(80,0,120,0.07)" },
        { x: W * 0.75, y: H * 0.60, r: W * 0.15, c: "rgba(0,40,120,0.07)" },
        { x: W * 0.50, y: H * 0.80, r: W * 0.12, c: "rgba(120,0,40,0.05)" },
      ].forEach((n) => {
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        g.addColorStop(0, n.c);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      bgStars.forEach((s) => {
        s.twinkle += 0.02;
        const alpha = s.bright * (0.6 + 0.4 * Math.sin(s.twinkle));
        const p = project(s.x * 0.15, s.y * 0.15, s.z);
        if (p.sx < 0 || p.sx > W || p.sy < 0 || p.sy > H) return;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, Math.max(0.5, p.scale * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,220,255,${alpha})`;
        ctx.fill();
      });

      let arrivedCount = 0;
      nodes.forEach((n) => {
        if (t < n.delay && !scattered) return;
        if (!scattered && !n.arrived) {
          n.vx += (n.tx - n.x) * 0.052;
          n.vy += (n.ty - n.y) * 0.052;
          n.vz += (n.tz - n.z) * 0.052;
          n.vx *= 0.82; n.vy *= 0.82; n.vz *= 0.82;
          if (Math.abs(n.tx - n.x) < 1.5 && Math.abs(n.ty - n.y) < 1.5) n.arrived = true;
        } else if (scattered) {
          n.vx *= 0.91; n.vy *= 0.91; n.vz *= 0.91;
        } else {
          n.orbitAng += n.orbitSpd * 0.01;
        }
        n.x += n.vx; n.y += n.vy; n.z += n.vz;
        if (n.arrived) arrivedCount++;
      });

      if (!allArrived && arrivedCount === nodes.length && !scattered) {
        allArrived = true;
        const ui = document.getElementById(heroUiId);
        if (ui) gsap.to(ui, { opacity: 1, duration: 0.5 });
      }

      if (allArrived && !scattered) edgeFadeIn = Math.min(1, edgeFadeIn + 0.008);
      else if (scattered) edgeFadeIn = Math.max(0, edgeFadeIn - 0.04);

      if (edgeFadeIn > 0) {
        edges.forEach((e: any) => {
          const na = nodes[e.a], nb = nodes[e.b];
          if (!na.arrived || !nb.arrived) return;
          const pa = project(na.tx + Math.cos(na.orbitAng) * na.orbitR, na.ty + Math.sin(na.orbitAng) * na.orbitR, na.tz);
          const pb = project(nb.tx + Math.cos(nb.orbitAng) * nb.orbitR, nb.ty + Math.sin(nb.orbitAng) * nb.orbitR, nb.tz);
          const grad = ctx.createLinearGradient(pa.sx, pa.sy, pb.sx, pb.sy);
          grad.addColorStop(0, `rgba(80,140,255,${0.35 * edgeFadeIn})`);
          grad.addColorStop(1, `rgba(80,140,255,${0.15 * edgeFadeIn})`);
          ctx.beginPath();
          ctx.moveTo(pa.sx, pa.sy);
          ctx.lineTo(pb.sx, pb.sy);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        });
      }

      nodes.forEach((n) => {
        if (!n.arrived && !scattered && t < n.delay) return;
        const drawX = n.arrived ? n.tx + Math.cos(n.orbitAng) * n.orbitR : n.x;
        const drawY = n.arrived ? n.ty + Math.sin(n.orbitAng) * n.orbitR : n.y;
        const p = project(drawX, drawY, n.z);
        const size = Math.max(0.8, 2 * p.scale);
        const breath = 0.7 + 0.3 * Math.sin(t * 1.2 + n.breathPhase);
        const glow = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, size * 4);
        glow.addColorStop(0, `rgba(160,200,255,${0.25 * breath})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,248,255,${0.85 * breath})`;
        ctx.fill();
      });
    }

    function onMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    }

    function onClick() {
      if (!scattered) {
        scattered = true;
        nodes.forEach((n) => {
          const angle = Math.random() * Math.PI * 2;
          const spd = 6 + Math.random() * 6;
          n.vx = Math.cos(angle) * spd;
          n.vy = Math.sin(angle) * spd;
          n.vz = (Math.random() - 0.5) * spd;
          n.arrived = false;
        });
        allArrived = false;
        edgeFadeIn = 0;
        const ui = document.getElementById(heroUiId);
        if (ui) gsap.to(ui, { opacity: 0, duration: 0.3 });
      } else {
        scattered = false;
        nodes.forEach((n) => { n.delay = 0; });
        const ui = document.getElementById(heroUiId);
        if (ui) gsap.to(ui, { opacity: 1, duration: 0.8, delay: 1.5 });
      }
    }

    function onResize() { init(); }

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    document.fonts.ready.then(() => { init(); draw(); });

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [heroUiId]);

  return canvasRef;
}
