import { useState } from "react";
import { meta } from "../../data/portfolio";

type ContactMethod = "email" | "github" | "linkedin";

export default function Contact() {
  const [terminalState, setTerminalState] = useState<"idle" | "executing">("idle");
  const [activeCommand, setActiveCommand] = useState<string>("");

  const executeCommand = (method: ContactMethod, url: string) => {
    if (terminalState === "executing") return;
    setActiveCommand(`> tyra.contact --method ${method}`);
    setTerminalState("executing");

    // Instantaneous redirect as requested
    if (method === "email") {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }

    // Reset terminal state
    setTimeout(() => {
      setTerminalState("idle");
      setActiveCommand("");
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="section-label">Contact Me</div>

      {/* Handshake Map */}
      <div className="handshake-network">
        <svg className="handshake-lines" preserveAspectRatio="none" viewBox="0 0 300 100">
          <path d="M 50,50 L 150,50 L 250,50" className="hs-wire" />
          <path d="M 150,50 L 150,100" className="hs-wire" />
        </svg>
        <div className="handshake-nodes">
          <button className="hs-node" onClick={() => executeCommand("email", `mailto:${meta.email}`)}>
            <div className="hs-dot"></div>
            <span className="hs-label">Email</span>
          </button>
          <button className="hs-node" onClick={() => executeCommand("github", meta.github)}>
            <div className="hs-dot"></div>
            <span className="hs-label">GitHub</span>
          </button>
          <button className="hs-node" onClick={() => executeCommand("linkedin", meta.linkedin)}>
            <div className="hs-dot"></div>
            <span className="hs-label">LinkedIn</span>
          </button>
        </div>
      </div>

      {/* Executable Terminal */}
      <div className="cli-terminal">
        <div className="cli-header">
          <div className="cli-dots">
            <span className="cli-dot red"></span>
            <span className="cli-dot yellow"></span>
            <span className="cli-dot green"></span>
          </div>
          <span className="cli-title">tyra@server:~/contact</span>
        </div>
        <div className="cli-body">
          {terminalState === "idle" ? (
            <div className="cli-idle">
              <div className="cli-output">Available endpoints. Click to execute:</div>
              <button className="cli-cmd-btn" onClick={() => executeCommand("email", `mailto:${meta.email}`)}>
                <span className="cli-caret">&gt;</span> tyra.contact --method email
              </button>
              <button className="cli-cmd-btn" onClick={() => executeCommand("github", meta.github)}>
                <span className="cli-caret">&gt;</span> tyra.contact --method github
              </button>
              <button className="cli-cmd-btn" onClick={() => executeCommand("linkedin", meta.linkedin)}>
                <span className="cli-caret">&gt;</span> tyra.contact --method linkedin
              </button>
              <div className="cli-prompt">
                <span className="cli-caret">&gt;</span> <span className="cli-cursor">_</span>
              </div>
            </div>
          ) : (
            <div className="cli-executing">
              <div className="cli-command">{activeCommand}</div>
              <div className="cli-log">Resolving target DNS... <span className="ok">[OK]</span></div>
              <div className="cli-log">Establishing secure connection... <span className="ok">[OK]</span></div>
              <div className="cli-log success">Handshake complete. Routing...</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
