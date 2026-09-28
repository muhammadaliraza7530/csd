import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Continuously moving rail that can also be dragged with a finger or the mouse.
 * Children are duplicated once so the loop is seamless.
 */
export function AutoScroller({
  children,
  speed = 60,
  className,
}: {
  children: ReactNode;
  /** pixels per second */
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const paused = useRef(false);
  
  // Agar user drag kare toh click na ho, iske liye
  const startX = useRef(0);
  const moved = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let prev = performance.now();

    const half = () => track.scrollWidth / 2 || 1;

    const tick = (now: number) => {
      const dt = (now - prev) / 1000;
      prev = now;
      if (!paused.current && !dragging.current) offset.current -= speed * dt;
      const h = half();
      if (offset.current <= -h) offset.current += h;
      if (offset.current > 0) offset.current -= h;
      track.style.transform = `translate3d(${offset.current}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    lastX.current = e.clientX;
    startX.current = e.clientX;
    moved.current = false; // Reset drag state
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    
    const diff = e.clientX - lastX.current;
    offset.current += diff;
    lastX.current = e.clientX;

    // Agar user 5px se zyada move kare, toh hum usko drag samjhenge
    if (Math.abs(e.clientX - startX.current) > 5) {
      moved.current = true;
    }
  };

  const onUp = (e: React.PointerEvent) => {
    dragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  // Agar user drag karke chhoda hai, toh Link ka click roko
  const onClickCapture = (e: React.MouseEvent) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      onClickCapture={onClickCapture}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      // pan-y se mobile par vertical scroll chalti rahegi, horizontal scroll iss component handle karega
      style={{ touchAction: "pan-y" }} 
    >
      <div ref={trackRef} className="flex w-max gap-6 will-change-transform select-none">
        {children}
        {children}
      </div>
    </div>
  );
}