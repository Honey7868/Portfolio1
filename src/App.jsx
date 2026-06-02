import { useState } from "react";
import profile from "./assets/profile.png";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./App.css";

const profileLinks = {
  github: "https://github.com/Honey7868",
  linkedin: "https://www.linkedin.com/in/nikhithakyatham/",
  email: "mailto:nikhithakyatham64@gmail.com",
  resume: "/resume.pdf",
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "React Native Basics", "JavaScript", "HTML5", "CSS3", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Python", "Java Basics", "C", "RESTful APIs", "OOP", "Operating Systems"],
  },
  {
    title: "Database",
    skills: ["SQL", "MySQL", "DBMS", "Data Modeling", "CRUD Systems"],
  },
  {
    title: "AI and Tools",
    skills: ["Artificial Intelligence", "Generative AI", "Machine Learning Basics", "Git", "GitHub", "Docker Basics", "Azure Basics", "Selenium Basics"],
  },
];

const experience = [
  {
    role: "Virtual AI Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 - Jan 2026",
    points: [
      "Developed a modular AI-driven archaeological site mapping solution in Python following SDLC practices.",
      "Structured clean and maintainable code using Git version control.",
      "Integrated data preprocessing pipelines for scalable model deployment.",
    ],
  },
  {
    role: "AI Transformative Learning Intern",
    company: "AICTE Internship: Microsoft-SAP",
    period: "Jan 2025 - Mar 2025",
    points: [
      "Developed an AI-based plant disease detection system for sustainable agriculture.",
      "Used image processing and machine learning to identify crop diseases accurately.",
      "Helped farmers improve crop health and reduce agricultural losses through early disease detection.",
    ],
  },
];

const featuredProjects = [
  {
    name: "Archaeological Site Mapping",
    description:
      "An AI-based mapping system that uses satellite images, machine learning, and image processing to detect historical structures.",
    language: "Python",
    html_url: "https://github.com/Honey7868/Archaeological-Site-Mapping.git",
    topics: ["ai", "machine-learning", "image-processing"],
  },
  {
    name: "WorkTrack Project Task Management System",
    description:
      "A web-based task management system for task creation, tracking, deadlines, progress monitoring, and team collaboration.",
    language: "Full Stack",
    html_url: "https://github.com/Honey7868/WorkTrack-Project-Task-Management-System.git",
    topics: ["task-management", "web-app", "collaboration"],
  },
  {
    name: "Plant Disease Detection for Sustainable Agriculture",
    description:
      "An AI-based plant disease detection system using image processing and machine learning to support healthier crop decisions.",
    language: "Python",
    html_url: "https://github.com/Honey7868/Plant-Disease-Detection-for-Sustainable-Agriculture.git",
    topics: ["ai", "agriculture", "machine-learning"],
  },
  {
    name: "Food Delivery Complete",
    description:
      "A complete food delivery web application project focused on modern user flows, product browsing, ordering, and full-stack implementation practice.",
    language: "MERN",
    html_url: "https://github.com/Honey7868/food_delivery_complete.git",
    topics: ["mern", "food-delivery", "full-stack"],
  },
];

const achievements = [
  "Bachelor of Technology in Computer Science and Engineering at Malla Reddy College of Engineering for Women with GPA 8.3.",
  "Completed Full Stack Web Development with AI Tools under the Next Gen Employability Program.",
  "Completed Web Development certification from Internshala.",
  "Completed Building Modern Web Applications with MERN Stack certification from Edunet Foundation.",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <Navbar menuOpen={menuOpen} navLinks={navLinks} setMenuOpen={setMenuOpen} />
      <main>
        <Hero profile={profile} profileLinks={profileLinks} />

        <section className="metrics-band" aria-label="Portfolio highlights">
          <Metric value="8.3" label="B.Tech GPA" />
          <Metric value="2026" label="Graduation year" />
          <Metric value="100%" label="Responsive layout" />
          <Metric value="AI + Web" label="Career focus" />
        </section>

        <Section id="about" eyebrow="About" title="A fresher profile built around web, backend, and AI">
          <div className="about-grid">
            <div className="about-copy">
              <p>
                I have recently completed my B.Tech in Computer Science and Engineering at
                Malla Reddy College of Engineering for Women, with a GPA of 8.3
                graduation year of 2026. My work combines web
                development fundamentals with backend logic, databases, Python,
                and AI-based problem solving.
              </p>
              <p>
                I have worked on task management, hospital appointment systems,
                archaeological site mapping, and plant disease detection. I am
                especially interested in full-stack roles where I can build
                useful products and keep growing in MERN, APIs, and AI-assisted
                development.
              </p>
            </div>
            <div className="focus-panel">
              <h3>Current Focus</h3>
              <ul>
                <li>Full-stack web development with React and RESTful APIs</li>
                <li>Python-based backend and AI application workflows</li>
                <li>Database design using SQL, MySQL, and DBMS concepts</li>
                <li>Modern deployment workflow with GitHub and Vercel</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" eyebrow="Skills" title="Technology stack">
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Experience and learning timeline">
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div>
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Projects" title="Recent and featured work">
          <div className="section-intro-row">
            <p>
              Four selected projects from my GitHub, focused on AI, full-stack
              development, task management, agriculture technology, and MERN
              application practice.
            </p>
            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              Open GitHub
            </a>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.id || project.name}>
                <div className="project-topline">
                  <span>{project.language || "Web"}</span>
                  <a href={project.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    View
                  </a>
                </div>
                <h3>{formatProjectName(project.name)}</h3>
                <p>
                  {project.description ||
                    "A development project from GitHub. Add a repository description to make this card stronger."}
                </p>
                <div className="project-tags">
                  {(project.topics?.length ? project.topics : ["react", "full-stack", "portfolio"])
                    .slice(0, 4)
                    .map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="achievements" eyebrow="Achievements" title="Highlights">
          <div className="achievement-grid">
            {achievements.map((achievement, index) => (
              <article className="achievement-card" key={achievement}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{achievement}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to fresher opportunities.</h2>
            <p>
              Reach out for full-stack developer roles, AI internship
              opportunities, MERN projects, or entry-level software engineering
              openings.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={profileLinks.email}>
              Email Me
            </a>
            <a className="button secondary" href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn
            </a>
            <a className="button secondary" href={profileLinks.resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section className="content-section" id={id}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <article>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}

function formatProjectName(name) {
  return name.replaceAll("-", " ").replaceAll("_", " ");
}

export default App;
