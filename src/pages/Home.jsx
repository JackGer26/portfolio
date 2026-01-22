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
          I enjoy building real-world projects and turning ideas into working, maintainable software.
        </p>
        <p style={{ margin: "8px 0 0 0" }}>
          Currently looking for backend, frontend, or full-stack roles.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          <a className="btn" href="https://github.com/JackGer26" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/jack-germain/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn primary" href="https://jackgermainresume.tiiny.site/" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </section>
    </div>
  );
}
