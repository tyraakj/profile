import { certifications } from "../../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="section-label">Certifications</div>
      <div className="certs-grid">
        {certifications.map((c) => (
          <div key={c.name} className="cert-card">
            <div className="cert-name">{c.name}</div>
            <div className="cert-issuer">{c.issuer}</div>
            <div className="cert-date">{c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
