import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta({
  title: "About | Jack Germain",
  description: "Learn more about Jack Germain, a software engineer focused on building practical full-stack applications.",
});


  return (
    <div style={{ display: "grid", gap: 24, paddingTop: 18, maxWidth: 800 }}>
      <div style={{ display: "grid", gap: 12 }}>
        <h1 style={{ margin: 0 }}>About</h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6 }}>
          I'm Jack — a software engineer who enjoys learning by building real-world projects and solving practical problems. I'm passionate about creating clean, efficient code and delivering solutions that make a meaningful impact.
        </p>
      </div>

      <section className="card" style={{ display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Professional Background</h2>
        <p style={{ margin: 0 }}>
          As a self-taught developer, I've built my expertise through hands-on project development and continuous learning. My journey has taken me from foundational web technologies to modern full-stack development, with experience spanning both client work and personal projects.
        </p>
        <p style={{ margin: 0 }}>
          I've successfully delivered freelance projects for local businesses, including a bakery website and airport transfer service, demonstrating my ability to work directly with clients, gather requirements, and deliver production-ready solutions within deadlines.
        </p>
        <p style={{ margin: 0 }}>
          My current role as a restaurant manager has provided unique insight into operational challenges, which inspired my latest project — a full-stack onboarding system for new restaurant employees. This application addresses real training inefficiencies I've observed firsthand and represents my approach to building solutions for genuine business problems.
        </p>
      </section>

      <section className="card" style={{ display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Technical Expertise</h2>
        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <strong>Frontend Development:</strong>
            <p style={{ margin: "4px 0 0 0", color: "var(--muted)" }}>
              React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, responsive design, component architecture, state management
            </p>
          </div>
          <div>
            <strong>Backend Development:</strong>
            <p style={{ margin: "4px 0 0 0", color: "var(--muted)" }}>
              Node.js, Express.js, RESTful APIs, MVC architecture, authentication (Passport.js), server-side templating (EJS)
            </p>
          </div>
          <div>
            <strong>Database & Tools:</strong>
            <p style={{ margin: "4px 0 0 0", color: "var(--muted)" }}>
              MongoDB, Mongoose, Git/GitHub, Vite, npm, command line, deployment (Render, Netlify)
            </p>
          </div>
        </div>
      </section>

      <section className="card" style={{ display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What I Bring to Teams</h2>
        <ul className="list" style={{ margin: 0 }}>
          <li><strong>Problem-solving mindset:</strong> I approach challenges systematically and enjoy breaking down complex problems into manageable solutions</li>
          <li><strong>Self-directed learning:</strong> Proven ability to quickly pick up new technologies and adapt to changing requirements</li>
          <li><strong>Client communication:</strong> Experience working directly with business stakeholders to translate requirements into technical solutions</li>
          <li><strong>Code quality focus:</strong> I write clean, maintainable code with clear documentation and follow best practices</li>
          <li><strong>Full-stack perspective:</strong> Understanding of both frontend user experience and backend architecture</li>
        </ul>
      </section>

      <section className="card" style={{ display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>What I'm Looking For</h2>
        <p style={{ margin: 0 }}>
          I'm seeking a software engineer position where I can contribute to meaningful projects while continuing to grow my technical skills. I'm particularly interested in roles that offer:
        </p>
        <ul className="list" style={{ margin: 0 }}>
          <li>Opportunities to work with modern JavaScript frameworks and tools</li>
          <li>Collaborative team environment with experienced developers I can learn from</li>
          <li>Projects that involve both frontend and backend development</li>
          <li>Code review practices and mentorship opportunities</li>
          <li>Chance to contribute to product decisions and user experience improvements</li>
        </ul>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          I'm open to <strong>remote, hybrid, or in-person</strong> opportunities and willing to relocate for the right role.
        </p>
      </section>

      <section className="card" style={{ display: "grid", gap: 14 }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Beyond Code</h2>
        <p style={{ margin: 0 }}>
          When I'm not coding, I enjoy staying current with technology trends, contributing to open-source projects when possible, and building side projects that solve real-world problems. I believe in continuous learning and regularly explore new technologies and development practices.
        </p>
        <p style={{ margin: 0 }}>
          Outside of tech, I'm passionate about football and enjoy following the sport closely — particularly as a devoted Leeds United fan. This interest in analyzing strategies, team dynamics, and performance patterns has actually helped sharpen my analytical thinking skills that I apply to problem-solving in development. When I'm not watching matches or coding, I love spending time with my two dogs, Boycie and Dolly, who keep me grounded and remind me to take breaks from the screen.
        </p>
      </section>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
        <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        <a className="btn" href="https://github.com/JackGer26" target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/jack-germain/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}
