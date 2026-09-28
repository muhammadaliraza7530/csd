import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block overflow-hidden rounded-sm border border-border bg-surface"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title}, ${project.location}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-sm bg-background/80 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold">{project.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
      </div>
    </Link>
  );
}
