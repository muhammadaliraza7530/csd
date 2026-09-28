import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function VideoPlayer({
  src,
  poster,
  className,
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    // خود بخود باآواز پلے کرنے کی کوشش
    const tryPlayWithSound = async () => {
      video.muted = false;
      video.volume = 1;

      try {
        await video.play();
      } catch {
        // اگر براؤزر باآواز اٹومیٹک ویڈیو پلے کی اجازت نہ دے تو خاموشی سے پلے کریں
        video.muted = true;
        try {
          await video.play();
        } catch {
          /* ignore error */
        }
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            void tryPlayWithSound();
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.45 }
    );
    io.observe(wrap);

    // یوزر کے پہلے انٹریکشن (کلک/ٹیپ) پر آواز ان-میوٹ کر دیں
    const unlockAudio = () => {
      if (video.muted) {
        video.muted = false;
        void video.play().catch(() => undefined);
      }
    };

    window.addEventListener("pointerdown", unlockAudio, { passive: true });
    window.addEventListener("keydown", unlockAudio);

    return () => {
      io.disconnect();
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "group relative mx-auto flex items-center justify-center bg-transparent p-2",
        className
      )}
    >
      <div className="relative inline-block overflow-hidden rounded-3xl border-2 border-orange-500/80 shadow-2xl">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          playsInline
          loop
          preload="metadata"
          className="block h-auto max-h-[70vh] w-auto max-w-full rounded-3xl"
        />
      </div>
    </div>
  );
}
