import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "Page Not Found | Jack Germain",
    description: "The page you're looking for doesn't exist. Return to the portfolio homepage.",
  });

  return (
    <div style={{ display: "grid", gap: 24, paddingTop: 48, textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
      <div style={{ display: "grid", gap: 16 }}>
        <h1 style={{ fontSize: 72, margin: 0, color: "var(--muted)" }}>404</h1>
        <h2 style={{ fontSize: 32, margin: 0 }}>Page Not Found</h2>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 18 }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div className="card" style={{ textAlign: "left" }}>
        <h3 style={{ marginTop: 0 }}>Here's what you can do:</h3>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>Check the URL for typos</li>
          <li>Go back to the homepage</li>
          <li>Browse my projects</li>
          <li>Get in touch if you think this is an error</li>
        </ul>
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Link className="btn primary" to="/">
          Back to Home
        </Link>
        <Link className="btn" to="/projects">
          View Projects
        </Link>
        <Link className="btn" to="/contact">
          Contact Me
        </Link>
      </div>
    </div>
  );
}