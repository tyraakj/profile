import { useEffect, useState } from "react";
import { useConstellation } from "../../hooks/useConstellation";
import { meta } from "../../data/portfolio";

export default function Hero() {
  const canvasRef = useConstellation("hero-ui");
  const [clock, setClock] = useState("—");

  useEffect(() => {
    const tick = () => {
      const ist = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      const h = String(ist.getHours()).padStart(2, "0");
      const m = String(ist.getMinutes()).padStart(2, "0");
      const s = String(ist.getSeconds()).padStart(2, "0");
      setClock(`${h}:${m}:${s} IST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero">
      <canvas id="constellation-canvas" ref={canvasRef} />
      <div className="hero-ui" id="hero-ui">
        <div className="hero-bottom">
          <div className="hero-left">
            <div className="hero-name">{meta.name}</div>
            <div className="hero-role">
              {meta.title} · {meta.subtitle}
            </div>
            <p className="hero-desc">
              Building distributed systems, AI-integrated platforms, and Web3
              infrastructure — backend-first, product-minded. Based in Mumbai.
              {meta.available && " Available for internships."}
            </p>
            <div className="hero-cta-wrap">
              <a href="#projects" className="btn btn-filled">View Work</a>
              <a href="#contact" className="btn btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-right">
            <h2>{meta.coords}</h2>
            <h2>{meta.location}</h2>
            <h2>{clock}</h2>
            <div className="hero-scatter-hint">
              <h2>Click canvas to scatter</h2>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          Scroll
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
