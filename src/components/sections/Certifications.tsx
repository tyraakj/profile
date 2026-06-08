import { useConstellation } from "../../hooks/useConstellation";
import { certifications } from "../../data/portfolio";

export default function Certifications() {
  const canvasRef = useConstellation("certs-ui");

  return (
    <section id="certifications" style={{ position: "relative", overflow: "hidden" }}>
      <canvas 
        ref={canvasRef} 
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", zIndex: 0 }} 
      />
      
      <div id="certs-ui" style={{ position: "relative", zIndex: 1, pointerEvents: "none", width: "100%", opacity: 0 }}>
        <div className="section-label" style={{ pointerEvents: "auto" }}>Certifications</div>
        <div className="certs-grid" style={{ pointerEvents: "auto" }}>
          {certifications.map((c) => (
            <div key={c.name} className="cert-card">
              <div className="cert-name">{c.name}</div>
              <div className="cert-issuer">{c.issuer}</div>
              <div className="cert-date">{c.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
