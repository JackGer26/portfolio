import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import usePageMeta from "../hooks/usePageMeta";

const categories = [
  { key: "all", label: "All Projects" },
  { key: "freelance", label: "Freelance" },
  { key: "passion", label: "Passion Projects" },
  { key: "learning", label: "Learning" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  usePageMeta({
  title: "Projects | Jack Germain",
  description: "A selection of frontend, backend, and full-stack projects including React and Node applications.",
});

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={{ display: "grid", gap: 16, paddingTop: 18 }}>
      <h1 style={{ margin: 0 }}>Projects</h1>
      <p style={{ color: "var(--muted)", margin: 0, maxWidth: 750 }}>
        Curated case studies. Full technical details are available on GitHub.
      </p>

      <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            className={`btn ${activeFilter === category.key ? 'primary' : ''}`}
            style={{ fontSize: 14 }}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gap: 14, marginTop: 10 }}>
        {filteredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
