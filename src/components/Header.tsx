import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { site, navLinks } from "@/lib/site-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const isLinkActive = (to: string) => {
    if (to === "/") {
      return location.pathname === "/";
    }
    return location.pathname === to || location.pathname.startsWith(`${to}/`);
  };

  return (
    <>
      <nav className={`navbar ${scrolled || location.pathname !== "/" ? "scrolled" : ""}`}>
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img
            src={site.logo}
            alt="CSD Engineering Logo"
            width={44}
            height={44}
            referrerPolicy="no-referrer"
            style={{
              borderRadius: "8px",
              background: "white",
              padding: "2px",
              objectFit: "contain",
            }}
          />
          <span className="nav-logo-text">CSD Engineering</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => {
            const active = isLinkActive(link.to);
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={active ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <a href={`tel:${site.phone}`} className="nav-cta">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
          {site.phone}
        </a>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {navLinks.map((link) => {
          const active = isLinkActive(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              style={active ? { color: "var(--orange)" } : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          );
        })}
        <a
          href={`tel:${site.phone}`}
          style={{ color: "var(--orange)", borderBottom: "none" }}
          onClick={() => setOpen(false)}
        >
          📞 {site.phone}
        </a>
      </div>
    </>
  );
}
