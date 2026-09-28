import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/lib/site-data";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all duration-200 hover:-translate-y-1 hover:border-[#f97316]"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-[#0a0f1a]">
        <img
          src={project.image}
          alt={`${project.title}, ${project.location}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-65" />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
            <span className="font-semibold text-[#f97316]">{project.status}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <h3 className="mt-2.5 text-xl font-bold text-white transition-colors group-hover:text-[#f97316]">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-400">
            {project.blurb || project.desc}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-gray-400">
          <span className="truncate pr-2 font-mono tabular-nums">{project.area}</span>
          <span className="inline-flex shrink-0 items-center gap-1 font-semibold text-white transition-colors group-hover:text-[#f97316]">
            View Project <ArrowUpRight className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
