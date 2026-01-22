import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import usePageMeta from "../hooks/usePageMeta";

export default function Project() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  usePageMeta({
    title: project ? `${project.title} | Jack Germain` : "Project | Jack Germain",
    description: project ? project.summary : "Project details by Jack Germain",
  });

  const [activeShot, setActiveShot] = useState(null); // { src, alt } | null

  // Close on Escape + prevent background scroll while modal open
  useEffect(() => {
    if (!activeShot) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") setActiveShot(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeShot]);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="page">
      <div>
        <h1 style={{ margin: 0 }}>{project.title}</h1>
        <p style={{ color: "var(--muted)", marginTop: 6 }}>{project.subtitle}</p>
      </div>

      <section className="card" style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Overview</h2>
        <p style={{ margin: 0 }}>{project.overview}</p>
      </section>

      <section className="card" style={{ display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Key Highlights</h2>
        <ul className="list">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </section>

      {project.screenshots?.length > 0 && (
        <section className="card" style={{ display: "grid", gap: 12 }}>
          <h2 style={{ margin: 0, fontSize: 20 }}>Screenshots</h2>

          <div className="gallery">
            {project.screenshots.map((shot) => (
              <div
                key={shot.src}
                className="shot"
                role="button"
                tabIndex={0}
                aria-label={`Open screenshot: ${shot.alt}`}
                onClick={() => setActiveShot(shot)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveShot(shot);
                }}
              >
                <img src={shot.src} alt={shot.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {project.githubUrl && (
          <a className="btn" href={project.githubUrl} target="_blank" rel="noreferrer">
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a className="btn" href={project.liveUrl} target="_blank" rel="noreferrer">
            View Live
          </a>
        )}
      </section>

      {/* Modal */}
      {activeShot && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onMouseDown={(e) => {
            // close only if clicking the overlay (not the modal content)
            if (e.target === e.currentTarget) setActiveShot(null);
          }}
        >
          <div className="modal">
            <div className="modalHeader">
              <div className="modalTitle">{activeShot.alt}</div>
              <button className="modalClose" onClick={() => setActiveShot(null)}>
                ✕
              </button>
            </div>

            <div className="modalBody">
              <img className="modalImg" src={activeShot.src} alt={activeShot.alt} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
