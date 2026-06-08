import { about } from "../../data/portfolio";

export default function About() {
  const domains = [
    { text: "Agentic AI Systems", pos: { top: "15%", left: "5%" } },
    { text: "Distributed Architecture", pos: { top: "40%", left: "35%" } },
    { text: "Application Security", pos: { top: "75%", left: "15%" } },
    { text: "Data Automation", pos: { top: "85%", left: "50%" } },
  ];

  const satellites = [
    { top: "10%", left: "60%", size: "4px", opacity: 0.3, delay: "0s" },
    { top: "30%", left: "15%", size: "6px", opacity: 0.5, delay: "1s" },
    { top: "55%", left: "75%", size: "3px", opacity: 0.2, delay: "2s" },
    { top: "80%", left: "85%", size: "5px", opacity: 0.4, delay: "1.5s" },
    { top: "60%", left: "5%", size: "4px", opacity: 0.3, delay: "0.5s" },
  ];

  return (
    <section id="about">
      <div className="section-label">About</div>
      <div className="about-grid">
        <div>
          <div className="about-heading">
            {about.headline.map((line, i) =>
              line === about.accent
                ? <span key={i} className="accent">{line}<br /></span>
                : <span key={i} className="normal-text">{line}<br /></span>
            )}
          </div>
          <div className="about-body">
            {about.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
        <div className="about-stats-constellation">
          <svg className="constellation-lines" width="100%" height="100%">
            <line x1="5%" y1="15%" x2="35%" y2="40%" />
            <line x1="35%" y1="40%" x2="15%" y2="75%" />
            <line x1="35%" y1="40%" x2="50%" y2="85%" />
            <line x1="15%" y1="75%" x2="50%" y2="85%" />
            
            {/* 3D Depth Lines */}
            <line x1="5%" y1="15%" x2="15%" y2="75%" strokeDasharray="4 4" className="faint" />
            <line x1="5%" y1="15%" x2="60%" y2="10%" className="faint-bg" />
            <line x1="35%" y1="40%" x2="60%" y2="10%" className="faint-bg" />
            <line x1="35%" y1="40%" x2="75%" y2="55%" className="faint-bg" />
            <line x1="50%" y1="85%" x2="85%" y2="80%" className="faint-bg" />
            <line x1="15%" y1="75%" x2="5%" y2="60%" className="faint-bg" />
            <line x1="5%" y1="60%" x2="15%" y2="30%" className="faint-bg" />
          </svg>

          {/* Background Satellites */}
          {satellites.map((sat, i) => (
            <div 
              key={`sat-${i}`} 
              className="satellite-node" 
              style={{ 
                top: sat.top, left: sat.left, 
                width: sat.size, height: sat.size, 
                opacity: sat.opacity,
                animationDelay: sat.delay
              }}
            ></div>
          ))}

          {/* Primary Nodes */}
          {domains.map((d, i) => (
            <div 
              key={d.text} 
              className="constellation-node" 
              style={{ top: d.pos.top, left: d.pos.left, animationDelay: `${i * 0.2}s` }}
            >
              <div className="node-dot"></div>
              <div className="node-content">
                <div className="node-text">{d.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
