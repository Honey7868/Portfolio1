function Hero({ profile, profileLinks }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Available for fresher full-stack roles</p>
        <h1>
          Nikhitha Kyatham
          <span>Full Stack and AI-focused developer.</span>
        </h1>
        <p className="hero-summary">
          Computer Science engineering student with strong foundations in
          full-stack web development, Python, OOP, DBMS, and AI. I build
          backend-driven applications, responsive React interfaces, and
          practical AI solutions with clean, scalable thinking.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a className="button primary" href="#projects">
            View Work
          </a>
          <a className="button secondary" href={profileLinks.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <a className="button secondary" href={profileLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="button secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-label="Profile highlight">
        <div className="floating-badge badge-top">AI Intern</div>
        <div className="floating-badge badge-right">JavaScript</div>
        <div className="floating-badge badge-mid">Python</div>
        <div className="floating-badge badge-left">MERN Stack</div>
        <div className="profile-card">
          <img src={profile} alt="Nikhitha Kyatham" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
