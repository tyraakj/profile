import { meta } from "../data/portfolio";

export default function Nav() {
  return (
    <nav>
      <div className="nav-brand">
        <div className="nav-logo-3d">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
          <div className="cube-node n1"></div>
          <div className="cube-node n2"></div>
          <div className="cube-node n3"></div>
          <div className="cube-node n4"></div>
          <div className="cube-node n5"></div>
          <div className="cube-node n6"></div>
          <div className="cube-node n7"></div>
          <div className="cube-node n8"></div>
        </div>
        <span className="nav-logo-text">{meta.name}</span>
      </div>
      <div className="nav-links">
        <a href="#projects">Work</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="wallet-connect">
        <div className="wallet-dot"></div>
        <span className="wallet-address">tyra.eth</span>
      </div>
    </nav>
  );
}
