import { useState } from "react";

const stack = [
  {
    id: "frontend",
    label: "Client Edge",
    index: "01",
    color: "#38BDF8",
    primary: ["React", "Next.js", "React Native"],
    supporting: ["TypeScript", "JavaScript", "Vercel"],
  },
  {
    id: "backend",
    label: "API Layer",
    index: "02",
    color: "#C2255C",
    primary: ["Spring Boot", "FastAPI"],
    supporting: ["Java", "Python", "Spring Security"],
  },
  {
    id: "ai",
    label: "AI & Data",
    index: "03",
    color: "#A78BFA",
    primary: ["LangChain", "LangGraph", "watsonx.ai"],
    supporting: ["FAISS", "PostgreSQL", "Supabase", "NeonDB"],
  },
  {
    id: "infra",
    label: "Infrastructure",
    index: "04",
    color: "#0D9488",
    primary: ["Apache Kafka", "Redis", "Docker"],
    supporting: ["AWS S3", "Railway"],
  },
  {
    id: "blockchain",
    label: "Web3",
    index: "05",
    color: "#34D399",
    primary: ["Solidity", "Base L2"],
    supporting: ["ethers.js", "OpenZeppelin", "ERC-3009"],
  },
];

export default function Skills() {
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);

  return (
    <section id="skills">
      <div className="section-label">Tech Stack</div>

      {/* Signal Flow Line */}
      <div className="stack-signal">
        <div className="signal-line" />
        <div className="signal-dot d1" />
        <div className="signal-dot d2" />
        <div className="signal-dot d3" />
      </div>

      <div className="stack-grid">
        {stack.map((cat, i) => (
          <div
            key={cat.id}
            className={`stack-card${hoveredCat === cat.id ? " active" : ""}${hoveredCat && hoveredCat !== cat.id ? " dimmed" : ""}`}
            style={{ "--cat-color": cat.color, "--card-i": i } as React.CSSProperties}
            onMouseEnter={() => setHoveredCat(cat.id)}
            onMouseLeave={() => setHoveredCat(null)}
          >
            <div className="stack-card-glow" />
            <div className="stack-card-header">
              <div className="stack-card-dot" />
              <span className="stack-card-index">{cat.index}</span>
              <span className="stack-card-label">{cat.label}</span>
            </div>
            <div className="stack-primary-nodes">
              {cat.primary.map((tech) => (
                <div key={tech} className="stack-node">
                  {tech}
                </div>
              ))}
            </div>
            <div className="stack-supporting">
              {cat.supporting.map((tag) => (
                <span key={tag} className="stack-stag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
