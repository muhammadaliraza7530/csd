import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects, site } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";
import { CtaBand } from "@/components/PageBits";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — CSD Engineering Consultants" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    const title = `${project.title}, ${project.location} — CSD Engineering Consultants`;
    return {
      meta: [
        { title },
        { name: "description", content: project.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: project.desc },
        { property: "og:image", content: project.img },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [selectedImage, setSelectedImage] = useState(project.img);

  useEffect(() => {
    setSelectedImage(project.img);
  }, [project.slug, project.img]);

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="px-[5px] pb-4 pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 transition-colors hover:text-[#f97316]"
        >
          <ArrowLeft className="size-4" /> Back to All Projects
        </Link>

        {/* Main Image & Interactive Gallery */}
        <Reveal className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
            <img
              src={selectedImage}
              alt={`${project.title} in ${project.location}`}
              referrerPolicy="no-referrer"
              className="aspect-16/9 w-full object-cover"
            />
          </div>

          {project.gallery && project.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6">
              {project.gallery.map((g, i) => (
                <button
                  key={`${g}-${i}`}
                  type="button"
                  onClick={() => setSelectedImage(g)}
                  className={`overflow-hidden rounded-xl border transition-all ${
                    selectedImage === g
                      ? "border-[#f97316] ring-2 ring-[#f97316]/40"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={g}
                    alt={`${project.title} view ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="aspect-4/3 w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
              <span className="font-bold text-[#f97316]">{project.badge}</span>
              <span aria-hidden="true">·</span>
              <span>{project.category}</span>
              {project.style && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{project.style} Architecture</span>
                </>
              )}
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
            </div>

            <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base leading-relaxed text-gray-300">{project.desc}</p>

            {/* Engineering Deliverables */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-[#111827]/70 p-6">
              <h2 className="text-base font-bold text-white">
                Engineering & Design Scope Delivered
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/923441297256?text=Hello%20CSD%20Engineering%2C%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Inquire About Similar Project →
              </a>
              <a href={`tel:${site.phone}`} className="btn-secondary">
                📞 Call {site.phone}
              </a>
            </div>
          </div>

          {/* Technical Fact Sheet */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#f97316]">
                Technical Fact Sheet
              </h3>
              <dl className="mt-6 divide-y divide-white/10 text-sm">
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Location</dt>
                  <dd className="text-right font-semibold text-white">{project.location}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Category</dt>
                  <dd className="text-right font-semibold text-white">{project.category}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Plot / Covered Area</dt>
                  <dd className="text-right font-mono font-semibold tabular-nums text-white">
                    {project.area}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Storeys / Configuration</dt>
                  <dd className="text-right font-semibold text-white">{project.floors}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Structural System</dt>
                  <dd className="text-right font-semibold text-white">
                    {project.structuralSystem}
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Project Status</dt>
                  <dd className="text-right font-semibold text-[#f97316]">{project.badge}</dd>
                </div>
                <div className="flex justify-between gap-4 py-3.5">
                  <dt className="text-gray-400">Lead Consultant</dt>
                  <dd className="text-right font-semibold text-white">{site.name}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-16">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">More Engineered Projects</h2>
              <Link
                to="/projects"
                className="text-xs font-bold uppercase tracking-wider text-[#f97316] hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <CtaBand
          title="Ready to build something like this?"
          body="Reach out to CSD Engineering Consultants today for architectural planning, 3D elevation, and structural calculations."
        />
      </div>
    </article>
  );
}
