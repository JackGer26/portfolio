import usePageMeta from "../hooks/usePageMeta";

export default function Contact() {
  usePageMeta({
  title: "Contact | Jack Germain",
  description: "Get in touch with Jack Germain for software engineering roles, collaborations, or opportunities.",
});


  return (
    <div style={{ display: "grid", gap: 12, paddingTop: 18, maxWidth: 800 }}>
      <h1 style={{ margin: 0 }}>Contact</h1>
      <p style={{ margin: 0, color: "var(--muted)" }}>
        The best way to reach me is by email or LinkedIn.
      </p>

      <div className="card" style={{ display: "grid", gap: 10 }}>
        <div>
          <strong>Email:</strong>{" "}
          <a href="mailto:jackgermainbusiness@gmail.com">jackgermainbusiness@gmail.com</a>
        </div>
        <div>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://www.linkedin.com/in/jack-germain/" target="_blank" rel="noreferrer">linkedin.com/in/jack-germain</a>
        </div>
        <div>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/JackGer26" target="_blank" rel="noreferrer">github.com/JackGer26</a>
        </div>
      </div>
    </div>
  );
}
