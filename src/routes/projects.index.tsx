import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects, posts, img } from "@/lib/site-data";
import { ProjectCard } from "@/components/ProjectCard";
import { VideoGallery } from "@/components/VideoGallery";
import { PageHero, CtaBand } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      {
        title:
          "Projects — Luxury Villas, Commercial Plazas & Hospitals | CSD Engineering Consultants",
      },
      {
        name: "description",
        content:
          "Completed and under construction projects by CSD Engineering Consultants across Swat, Matta, and KPK — luxury villas, neoclassical homes, commercial plazas, and hospital complexes.",
      },
      {
        property: "og:title",
        content: "Projects — CSD Engineering Consultants",
      },
      {
        property: "og:description",
        content:
          "Explore luxury villas, plazas, and modern residences designed and managed by CSD Engineering Consultants.",
      },
    ],
  }),
  component: ProjectsPage,
});

const FILTER_TABS = [
  { id: "ALL", label: "All Projects" },
  { id: "Residential", label: "Residential & Villas" },
  { id: "Commercial", label: "Commercial Plazas" },
  { id: "Healthcare", label: "Healthcare & Institutional" },
  { id: "UNDER CONSTRUCTION", label: "Under Construction" },
] as const;

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "UNDER CONSTRUCTION") return p.status === "UNDER CONSTRUCTION";
    return p.category === activeFilter;
  });

  return (
    <div className="px-[5px]">
      <PageHero
        eyebrow="Engineering Portfolio"
        title="Luxury villas, plazas & modern residences"
        intro="Explore our completed residences, commercial plazas, healthcare complexes, and active construction sites across Swat, Matta, and KPK."
        image={img.hero2}
      />

      {/* 1. FILTERABLE PORTFOLIO GRID */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Featured Works"
              title="Engineered to the highest standards"
              intro="Click any project to inspect architectural elevations, covered area specifications, structural systems, and project galleries."
            />

            {/* Interactive Segmented Filter */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#111827] p-1.5">
              {FILTER_TABS.map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-[#f97316] text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 40}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. VIDEO WALKTHROUGHS */}
      <VideoGallery />

      {/* 3. SITE HIGHLIGHTS & ELEVATION STUDIES */}
      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Site & Elevation Archive"
            title="Recent architectural renders & site updates"
            intro="A visual archive of our residential elevations, commercial facades, and on-site engineering supervision."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <div
                key={`${post.title}-${idx}`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]"
              >
                <div className="aspect-4/3 overflow-hidden bg-black/40">
                  <img
                    src={post.image}
                    alt={`${post.title} — ${post.location}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="size-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="font-semibold text-[#f97316]">{post.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.location}</span>
                  </div>
                  <h3 className="mt-1.5 text-base font-bold text-white">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a building or villa in Pakistan?"
        body="From Total Station surveying and soil assessment to 3D elevation and complete seismic RCC structural drawings — let's build your project."
      />
    </div>
  );
}
