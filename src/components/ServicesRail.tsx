import { useRef, useEffect, useState, useCallback } from "react";
import { services } from "@/lib/site-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServicesRail() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  // Triple the list for smooth infinite scroll
  const duplicatedServices = [...services, ...services, ...services, ...services];

  // Fast auto-scroll loop
  useEffect(() => {
    let animId: number;
    const el = scrollRef.current;
    if (!el) return;

    // Fast scroll speed (approx 1.8px per frame at 60fps ~ 110px/sec)
    const speed = 1.8;

    const step = () => {
      if (el && !isPaused && !isDragging) {
        el.scrollLeft += speed;

        // One full set width calculation
        const singleSetWidth = el.scrollWidth / 4;
        if (el.scrollLeft >= singleSetWidth * 2) {
          el.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isDragging]);

  // Drag handlers for mouse
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2; // Fast scroll multiplier
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startXRef.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  // Arrow buttons for manual fast jump
  const scrollFast = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const distance = 340;
    scrollRef.current.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative w-full">
      {/* Quick navigation controls */}
      <div className="container mb-4 flex items-center justify-end gap-2">
        <button
          onClick={() => scrollFast("left")}
          aria-label="Scroll services left"
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#111827] text-gray-300 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => scrollFast("right")}
          aria-label="Scroll services right"
          className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#111827] text-gray-300 transition-colors hover:border-[#f97316] hover:text-[#f97316]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* Horizontal scrolling track */}
      <div
        ref={scrollRef}
        className={`services-scroll ${isDragging ? "dragging" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        style={{
          paddingLeft: "max(24px, calc((100vw - 1280px)/2 + 24px))",
          paddingRight: "24px",
        }}
      >
        {duplicatedServices.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="service-card select-none"
            style={{ flexShrink: 0 }}
          >
            <img
              src={item.img}
              alt={item.title}
              width={280}
              height={220}
              loading="lazy"
              draggable={false}
              className="service-card-img"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "220px",
                pointerEvents: "none",
              }}
            />
            <div className="service-card-body">
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.desc}</p>
            </div>
            <div className="service-card-accent" />
          </div>
        ))}
      </div>
    </div>
  );
}
