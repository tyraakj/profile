import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-label">Project Work</div>
      <div className="projects-list">
        {projects.map((p) => (
          <div
            key={p.index}
            className="project-row"
            onClick={() => p.link && window.open(p.link, "_blank")}
          >
            <div className="project-index">{p.index}</div>
            <div>
              <div className="project-title">{p.title}</div>
              <div className="project-tag">{p.tag}</div>
            </div>
            <div className="project-meta">
              <div className="project-desc">{p.desc}</div>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </div>
        ))}
      </div>
    </section>
  );
}
