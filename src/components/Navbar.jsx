import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="headerInner">
          <NavLink to="/" className="brand">
            Jack Germain
          </NavLink>

          {/* Desktop nav (hidden via CSS on mobile) */}
          <nav className="nav" aria-label="Primary">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>

          {/* Mobile menu button (shown via CSS on mobile) */}
          <button
            className="btn menuBtn"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile dropdown (only renders when open) */}
        {open && (
          <nav id="mobile-nav" className="mobileMenu" aria-label="Mobile Primary">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
