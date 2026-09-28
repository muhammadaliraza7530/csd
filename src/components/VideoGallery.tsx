import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { videoGallery } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";

export function VideoGallery() {
  const refs = useRef<Array<HTMLVideoElement | null>>([]);
  const [active, setActive] = useState<number | null>(null);

  const play = (i: number) => {
    refs.current.forEach((v, idx) => {
      if (!v) return;
      if (idx !== i) {
        v.pause();
        v.currentTime = 0;
      }
    });
    const video = refs.current[i];
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      void video.play().catch(() => {
        video.muted = true;
        void video.play().catch(() => undefined);
      });
      setActive(i);
    } else {
      video.pause();
      setActive(null);
    }
  };

  return (
    <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 w-full">
      {videoGallery.map((v, i) => (
        <Reveal key={v.title} delay={i * 90}>
          <div
            onClick={() => play(i)}
            className="lit-panel group relative cursor-pointer overflow-hidden bg-black rounded-xl"
          >
            {/* Mobile: Tall height | Desktop: Normal video height */}
            <div className="aspect-[3/4] md:aspect-video w-full overflow-hidden bg-black">
              <video
                ref={(el) => {
                  refs.current[i] = el;
                }}
                src={v.src}
                poster={v.poster}
                playsInline
                preload="metadata"
                muted
                onEnded={() => setActive(null)}
                className="block h-full w-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

            {/* Controls & Text Overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-5">
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-bold sm:text-base md:text-lg text-white">
                  {v.title}
                </h3>
                <p className="mt-0.5 truncate text-[9px] sm:text-xs uppercase tracking-wider text-primary">
                  {v.caption}
                </p>
              </div>

              <span className="grid size-8 sm:size-10 md:size-11 shrink-0 place-items-center rounded-full border border-primary/70 bg-primary/15 text-primary backdrop-blur transition-transform group-hover:scale-110">
                {active === i ? (
                  <Pause className="size-3.5 sm:size-4 md:size-5" />
                ) : (
                  <Play className="size-3.5 sm:size-4 md:size-5 translate-x-px" />
                )}
              </span>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}