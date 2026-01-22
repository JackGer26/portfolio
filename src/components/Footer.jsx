export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <span style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Jack Germain
        </span>
        <div className="nav">
          <a href="https://github.com/JackGer26" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jack-germain/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
