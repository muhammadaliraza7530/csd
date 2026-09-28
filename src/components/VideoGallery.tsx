import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { videoGallery } from "@/lib/site-data";

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
    <section className="py-20 lg:py-28 bg-[#0a0f1a] border-t border-white/10">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span
            className="section-label"
            style={{ display: "inline-flex", justifyContent: "center" }}
          >
            Video gallery
          </span>
          <h2 className="section-title">Four films from our sites</h2>
          <p className="section-subtitle">
            Tap any frame to play — starting one clip stops the others.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-6xl mx-auto">
          {videoGallery.map((v, i) => (
            <div key={v.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div
                onClick={() => play(i)}
                className="lit-panel group relative cursor-pointer overflow-hidden bg-black rounded-xl border border-white/10 transition-all duration-300 hover:border-[#f97316]"
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
                    <p className="mt-0.5 truncate text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-[#f97316]">
                      {v.caption}
                    </p>
                  </div>

                  <span className="grid size-8 sm:size-10 md:size-11 shrink-0 place-items-center rounded-full border border-[#f97316]/70 bg-[#f97316]/20 text-[#f97316] backdrop-blur transition-transform group-hover:scale-110">
                    {active === i ? (
                      <Pause className="size-3.5 sm:size-4 md:size-5 fill-current" />
                    ) : (
                      <Play className="size-3.5 sm:size-4 md:size-5 translate-x-px fill-current" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
