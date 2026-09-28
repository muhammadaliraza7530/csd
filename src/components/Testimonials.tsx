import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { AutoScroller } from "@/components/AutoScroller";

export function TestimonialsRail() {
  return (
    <AutoScroller speed={180}>
      {testimonials.map((t, i) => (
        <blockquote
          key={`${t.name}-${i}`}
          className="lit-panel flex w-[300px] shrink-0 flex-col justify-between bg-card p-7 sm:w-[380px]"
        >
          <div>
            <Quote className="size-7 text-primary" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">“{t.quote}”</p>
          </div>
          <footer className="mt-7 border-t border-border pt-5">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm font-bold">{t.name}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
          </footer>
        </blockquote>
      ))}
    </AutoScroller>
  );
}
