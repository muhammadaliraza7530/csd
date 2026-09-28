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
    <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
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
            Tap any frame to play — uncropped full view with audio.
          </p>
        </div>

        {/* 4-column reel layout for portrait videos with zero cropping */}
        <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {videoGallery.map((v, i) => (
            <div key={v.title} className="reveal" style={{ transitionDelay: `${i * 90}ms` }}>
              <div
                onClick={() => play(i)}
                className="lit-panel group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 hover:border-[#f97316] hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
              >
                {/* 9:16 vertical ratio with object-contain ensures 100% full frame is visible with NO crop */}
                <div className="relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden bg-black">
                  <video
                    ref={(el) => {
                      refs.current[i] = el;
                    }}
                    src={v.src}
                    playsInline
                    preload="metadata"
                    muted
                    onEnded={() => setActive(null)}
                    className="block size-full object-contain"
                  />

                  {/* Gradient Overlay (subtle, fades when playing) */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 ${
                      active === i ? "opacity-40" : "opacity-85 group-hover:opacity-95"
                    }`}
                  />

                  {/* Play / Pause button indicator */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span
                      className={`grid size-12 place-items-center rounded-full border border-[#f97316] bg-[#f97316]/30 text-[#f97316] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f97316]/50 ${
                        active === i ? "scale-90 opacity-0 group-hover:opacity-100" : "opacity-90"
                      }`}
                    >
                      {active === i ? (
                        <Pause className="size-5 fill-current" />
                      ) : (
                        <Play className="size-5 translate-x-0.5 fill-current" />
                      )}
                    </span>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-xs font-bold text-white sm:text-sm">
                        {v.title}
                      </h3>
                      <p className="mt-0.5 truncate text-[10px] font-semibold uppercase tracking-wider text-[#f97316]">
                        {v.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
