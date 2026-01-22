import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import usePageMeta from "../hooks/usePageMeta";

export default function Projects() {
  usePageMeta({
  title: "Projects | Jack Germain",
  description: "A selection of frontend, backend, and full-stack projects including React and Node applications.",
});


  return (
    <div style={{ display: "grid", gap: 16, paddingTop: 18 }}>
      <h1 style={{ margin: 0 }}>Projects</h1>
      <p style={{ color: "var(--muted)", margin: 0, maxWidth: 750 }}>
        Curated case studies. Full technical details are available on GitHub.
      </p>

      <div style={{ display: "grid", gap: 14, marginTop: 10 }}>
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
