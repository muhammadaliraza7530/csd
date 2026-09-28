import { posts } from "@/lib/site-data";
import { AutoScroller } from "@/components/AutoScroller";

/**
 * Branded social posts. Images are shown complete (object-contain) inside a
 * fixed portrait frame so nothing is ever cropped or cut.
 */
export function PostsRail() {
  return (
    <AutoScroller speed={180}>
      {posts.map((p, i) => (
        <article
          key={`${p.image}-${i}`}
          className="lit-panel flex h-full w-[260px] shrink-0 flex-col overflow-hidden bg-card sm:w-[320px]"
        >
          <div className="aspect-[4/5] w-full overflow-hidden bg-black/60">
            <img
              src={p.image}
              alt={`${p.title}, ${p.location}`}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col p-4 sm:p-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-primary">{p.tag}</span>
            <h3 className="mt-2 line-clamp-2 text-sm font-bold sm:text-base">{p.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{p.location}</p>
          </div>
        </article>
      ))}
    </AutoScroller>
  );
}
