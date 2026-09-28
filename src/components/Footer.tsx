import { site, navLinks } from "@/lib/site-data";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else if (window.location.pathname !== "/") {
        window.location.href = `/${href}`;
      }
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src={site.logo}
              alt="CSD Engineering"
              width={52}
              height={52}
              style={{
                borderRadius: "8px",
                background: "white",
                padding: "2px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            <p className="footer-brand-name">CSD Engineering Consultants</p>
            <p className="footer-brand-desc">{site.description}</p>
            <div className="footer-social">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`}>Email</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <a href={`tel:${site.phone}`} className="footer-contact-text">
                {site.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <a href={`mailto:${site.email}`} className="footer-contact-text">
                {site.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">{site.address}</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">🕐</span>
              <span className="footer-contact-text">{site.hours}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 CSD Engineering Consultants. All Rights Reserved.
          </p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
