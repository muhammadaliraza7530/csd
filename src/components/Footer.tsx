import { Link } from "@tanstack/react-router";
import { site, navLinks, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="inline-block">
              <img
                src={site.logo}
                alt="CSD Engineering"
                width={52}
                height={52}
                referrerPolicy="no-referrer"
                style={{
                  borderRadius: "8px",
                  background: "white",
                  padding: "2px",
                  objectFit: "contain",
                  marginBottom: "16px",
                }}
              />
            </Link>
            <p className="footer-brand-name">CSD Engineering Consultants</p>
            <p className="footer-brand-desc">{site.description}</p>
            <div className="footer-social">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`}>Email</a>
              <a href={`tel:${site.phone}`}>Call {site.phone}</a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/services">All Engineering Services</Link>
              </li>
              <li>
                <Link to="/projects">Completed Portfolio</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contact & Office</h4>
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
            <div className="mt-4 flex flex-wrap gap-1.5 text-xs text-gray-400">
              {services.slice(0, 4).map((s, idx) => (
                <span key={s.id}>
                  {s.title}
                  {idx < 3 ? " · " : ""}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} CSD Engineering Consultants. All Rights Reserved.
          </p>
          <p className="footer-tagline">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
