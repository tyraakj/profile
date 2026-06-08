import { meta } from "../../data/portfolio";

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-label">Get in Touch</div>
      <div className="contact-heading">
        LET'S<br /><span className="outline">BUILD.</span>
      </div>
      <div className="contact-boxes">
        <a href={`mailto:${meta.email}`} className="contact-box">
          <div className="contact-box-label">Email</div>
          {meta.email}
        </a>
        <a href={meta.github} target="_blank" rel="noreferrer" className="contact-box">
          <div className="contact-box-label">GitHub</div>
          /tyraakj
        </a>
        <a href={meta.linkedin} target="_blank" rel="noreferrer" className="contact-box">
          <div className="contact-box-label">LinkedIn</div>
          /in/tyraakj
        </a>
        <a href={meta.portfolio} target="_blank" rel="noreferrer" className="contact-box">
          <div className="contact-box-label">Portfolio</div>
          tyrakj.vercel.app
        </a>
      </div>
    </section>
  );
}
