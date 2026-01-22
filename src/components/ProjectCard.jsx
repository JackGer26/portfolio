import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="card" style={{ display: "grid", gap: 10 }}>
      <div style={{ display: "grid", gap: 4 }}>
        <div style={{ fontWeight: 700, fontSize: 18 }}>{project.title}</div>
        <div style={{ color: "var(--muted)", fontSize: 14 }}>{project.subtitle}</div>
      </div>

      <div>{project.summary}</div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <Link className="btn" to={`/projects/${project.slug}`}>Case Study</Link>
        {project.githubUrl && (
          <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a className="btn" href={project.liveUrl} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
}
