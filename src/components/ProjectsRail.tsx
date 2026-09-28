import { useState, useRef, useEffect, useCallback } from "react";
import { projects, type ProjectItem } from "@/lib/site-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProjectsRail() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const didDragRef = useRef(false);

  // Duplicated list for infinite seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects];

  // Fast auto-scroll loop
  useEffect(() => {
    let animId: number;
    const track = trackRef.current;
    if (!track) return;

    // Fast scroll speed matching the services section (~1.8px per frame)
    const speed = 1.8;

    const step = () => {
      if (track && isAutoScrolling && !isDragging) {
        track.scrollLeft += speed;

        // Smooth infinite seamless wrap
        const singleSetWidth = track.scrollWidth / 4;
        if (track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isAutoScrolling, isDragging]);

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeProjectIndex === null) return;
      if (e.key === "Escape") {
        setActiveProjectIndex(null);
      } else if (e.key === "ArrowLeft") {
        setZoom(1);
        setActiveProjectIndex((prev) => (prev! - 1 + projects.length) % projects.length);
      } else if (e.key === "ArrowRight") {
        setZoom(1);
        setActiveProjectIndex((prev) => (prev! + 1) % projects.length);
      }
    },
    [activeProjectIndex],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    if (activeProjectIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeProjectIndex, handleKeyDown]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    didDragRef.current = false;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const distance = Math.abs(x - startXRef.current);
    if (distance > 5) {
      didDragRef.current = true;
    }
    const walk = (x - startXRef.current) * 2; // Fast scroll multiplier
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    didDragRef.current = false;
    startXRef.current = e.touches[0].pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const distance = Math.abs(x - startXRef.current);
    if (distance > 5) {
      didDragRef.current = true;
    }
    const walk = (x - startXRef.current) * 2;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Fast manual scroll buttons
  const scrollFast = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const distance = 360;
    trackRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const activeProject: ProjectItem | undefined =
    activeProjectIndex !== null ? projects[activeProjectIndex] : undefined;

  return (
    <>
      <div className="projects-track-wrap relative">
        {/* Quick navigation arrows */}
        <div className="container mb-4 flex items-center justify-end gap-2">
          <button
            onClick={() => scrollFast("left")}
            aria-label="Scroll projects left"
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#111827] text-gray-300 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={() => scrollFast("right")}
            aria-label="Scroll projects right"
            className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#111827] text-gray-300 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <div
          className={`projects-track ${isDragging ? "dragging" : ""}`}
          ref={trackRef}
          style={{ paddingRight: 24, paddingLeft: 24 }}
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => {
            setIsAutoScrolling(true);
            handleMouseLeave();
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {duplicatedProjects.map((item, idx) => {
            const originalIndex = idx % projects.length;
            return (
              <button
                key={`${item.id}-${idx}`}
                type="button"
                className="project-card select-none"
                onClick={() => {
                  if (didDragRef.current) return;
                  setZoom(1);
                  setActiveProjectIndex(originalIndex);
                }}
                aria-label={`Open ${item.title}`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  width={320}
                  height={260}
                  draggable={false}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "260px",
                    pointerEvents: "none",
                  }}
                />
                <span className="project-zoom-hint">Click to zoom</span>
                <div className="project-card-body">
                  <p className="project-badge">{item.badge}</p>
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-location">{item.location}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          className="lightbox"
          onClick={() => setActiveProjectIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setActiveProjectIndex(null)}
              aria-label="Close"
            >
              ✕
            </button>

            <button
              className="lightbox-nav prev"
              onClick={() => {
                setZoom(1);
                setActiveProjectIndex((prev) => (prev! - 1 + projects.length) % projects.length);
              }}
              aria-label="Previous project"
            >
              ‹
            </button>

            <button
              className="lightbox-nav next"
              onClick={() => {
                setZoom(1);
                setActiveProjectIndex((prev) => (prev! + 1) % projects.length);
              }}
              aria-label="Next project"
            >
              ›
            </button>

            <div className="lightbox-stage">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                style={{ transform: `scale(${zoom})` }}
                onDoubleClick={() => setZoom((z) => (z > 1 ? 1 : 2))}
              />
            </div>

            <div className="lightbox-info">
              <p className="project-badge">{activeProject.badge}</p>
              <h3 className="lightbox-title">{activeProject.title}</h3>
              <p className="lightbox-location">{activeProject.location}</p>
              <p className="lightbox-desc">{activeProject.desc}</p>

              <div className="lightbox-zoom">
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                  aria-label="Zoom out"
                >
                  −
                </button>
                <span>{Math.round(zoom * 100)}%</span>
                <button
                  type="button"
                  onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button type="button" className="reset" onClick={() => setZoom(1)}>
                  Reset
                </button>
              </div>

              <div style={{ marginTop: "28px" }}>
                <a
                  href={`https://wa.me/923441297256?text=Hello%20CSD%20Engineering%2C%20I%20am%20interested%20in%20${encodeURIComponent(activeProject.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Inquire About This Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
