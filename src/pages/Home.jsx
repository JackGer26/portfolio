import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
      title: "Jack Germain | Software Engineer",
      description: "Software engineer building full-stack applications with React, Node, and modern JavaScript.",
    });

  return (
    <div className="page">
      <section className="hero">
        <h1 className="h1">Hi, I’m Jack 👋</h1>
        <p className="lead">
          Software Engineer building practical frontend and full-stack applications with React and Node.
        </p>
        <p style={{ color: "var(--muted)", fontSize: 16, margin: 0 }}>
          From freelance client work to full-stack personal projects.
        </p>

        <div className="actions">
          <Link className="btn primary" to="/projects">
            View Projects
          </Link>
          <a className="btn" href="https://github.com/JackGer26" target="_blank" rel="noreferrer">
            View GitHub
          </a>
        </div>
      </section>

      <hr />

      <section className="page" style={{ gap: 14, paddingTop: 0 }}>
        <h2 className="sectionTitle">Selected Projects</h2>
        <p style={{ color: "var(--muted)", margin: 0, fontSize: 16 }}>
          A mix of frontend, full-stack, and client work.
        </p>
        <div className="cards">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <hr />

      <section className="card">
        <h3 style={{ marginTop: 0 }}>Tech I work with</h3>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          React · JavaScript · Node · Express · MongoDB · HTML · CSS · Git/GitHub
        </p>
      </section>

      <hr />

      <section className="card">
        <h3 style={{ marginTop: 0 }}>About</h3>
        <p style={{ margin: 0 }}>
          I'm a University of York graduate and self-taught software engineer who began building projects and freelance solutions while working as a restaurant manager. I've successfully delivered production-ready solutions for local businesses and built a diverse portfolio of frontend and full-stack applications.
        </p>
        <p style={{ margin: "8px 0 0 0" }}>
          My restaurant management experience provided unique insights into operational challenges, which recently inspired my latest project — a full-stack employee onboarding system that addresses genuine training inefficiencies I observed firsthand. This represents my approach to building solutions for real-world business problems.
        </p>
        <p style={{ margin: "8px 0 0 0" }}>
          I enjoy translating real-world problems into clean, efficient code and am currently seeking software engineer opportunities where I can contribute to meaningful projects while continuing to grow alongside experienced developers.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <Link className="btn primary" to="/contact">Get In Touch</Link>
          <Link className="btn" to="/about">Learn More</Link>
          <a className="btn" href="https://github.com/JackGer26" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/jack-germain/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href="https://jackgermainresume.tiiny.site/" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </section>
    </div>
  );
}
