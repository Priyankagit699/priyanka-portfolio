import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <h2 className="logo">PK</h2>

      <div className={`links ${open ? "show" : ""}`}>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="resumeBtn"
        >
          Resume
        </a>
      </div>

      <div className="menuBtn" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}