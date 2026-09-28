import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  site,
  heroSlides,
  stats,
  whyChooseUs,
  processSteps,
  showreelUrl,
  showreelSources,
} from "@/lib/site-data";
import { ProjectsRail } from "@/components/ProjectsRail";
import { VideoGallery } from "@/components/VideoGallery";
import { ServicesRail } from "@/components/ServicesRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CSD Engineering Consultants | Engineering Solutions for Your Dream Projects",
      },
      {
        name: "description",
        content: site.description,
      },
      {
        property: "og:title",
        content: "CSD Engineering Consultants | Engineering Solutions for Your Dream Projects",
      },
      {
        property: "og:description",
        content: site.description,
      },
      { property: "og:image", content: site.logo },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showreelSource, setShowreelSource] = useState(showreelUrl);

  // Hero auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-slides">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`hero-slide ${idx === slideIndex ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-eyebrow">{site.since}</p>
          <h1 className="hero-brand">{site.short}</h1>
          <p className="hero-brand-sub">{site.brandSub}</p>
          <h2 className="hero-tagline">
            Engineering Solutions for
            <br />
            Your Dream Projects
          </h2>
          <p className="hero-desc">{site.heroDesc}</p>

          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View Our Work →
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === slideIndex ? "active" : ""}`}
              onClick={() => setSlideIndex(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. ABOUT / SHOWREEL SECTION */}
      <section id="about" className="showreel">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Showreel</span>
            <h2 className="section-title">See how we build</h2>
            <p className="section-subtitle">
              A short film of our sites, elevations and finished projects across Swat and KPK.
            </p>
          </div>

          <div className="showreel-video-wrap reveal" style={{ transitionDelay: "0.15s" }}>
            <video
              src={showreelSource}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => {
                const fallback = showreelSources.find((source) => source !== showreelSource);
                if (fallback) {
                  setShowreelSource(fallback);
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. STATS BAR */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="stat-item reveal"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="services">
        <div className="container">
          <div className="services-header reveal">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Everything under
              <br />
              one roof
            </h2>
            <p className="section-subtitle">
              One accountable team from the first sketch to the final survey peg.
            </p>
          </div>
        </div>

        <ServicesRail />
        <div className="container mt-10 text-center">
          <Link to="/services" className="btn-secondary">
            Explore All Engineering Services →
          </Link>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="projects-header reveal">
            <span className="section-label">Our Projects</span>
            <h2 className="section-title">
              Luxury villas, plazas and
              <br />
              modern residences
            </h2>
            <p className="section-subtitle">
              Images move automatically — hover or drag to control, click any project to open it,
              zoom in and read the details.
            </p>
          </div>
        </div>

        <ProjectsRail />
        <div className="container mt-10 text-center">
          <Link to="/projects" className="btn-primary">
            View Full Portfolio (12 Projects) →
          </Link>
        </div>
      </section>

      {/* VIDEO GALLERY SECTION (LIKE ASPIRING-SIX) */}
      <VideoGallery />

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="why-us">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Accuracy, experience
              <br />
              and reliability
            </h2>
          </div>

          <div className="why-grid">
            {whyChooseUs.map((w, idx) => (
              <div key={w.label} className={`why-card reveal reveal-delay-${idx + 1}`}>
                <div className="why-icon">{w.icon}</div>
                <div className="why-number">{w.num}</div>
                <div className="why-label">{w.label}</div>
                <p className="why-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR PROCESS SECTION */}
      <section className="process">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Our Process</span>
            <h2 className="section-title">Four clear stages</h2>
            <p className="section-subtitle">
              A transparent process from first call to final handover.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={step.num} className={`process-card reveal reveal-delay-${idx + 1}`}>
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section id="contact" className="cta-section">
        <div className="container">
          <div className="reveal">
            <h2 className="section-title">Ready to start your project?</h2>
            <p className="section-subtitle">
              Share your plot size, location and requirements — our team will prepare a free
              consultation and estimate.
            </p>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "40px",
              }}
            >
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                REQUEST A CONSULTATION →
              </a>
              <a href={`tel:${site.phone}`} className="btn-secondary">
                📞 {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
