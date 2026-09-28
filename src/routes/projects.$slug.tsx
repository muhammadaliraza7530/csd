import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/site-data";
import { site } from "@/lib/site-data";
import { Reveal } from "@/components/ui-bits";
import { CtaBand } from "@/components/PageBits";

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
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <article className="pb-4 pt-28 lg:pt-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 transition-colors hover:text-[#f97316]"
        >
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <Reveal className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
            <img
              src={project.img}
              alt={`${project.title} in ${project.location}`}
              className="aspect-16/9 w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
              {project.badge}
            </span>
            <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{project.title}</h1>
            <p className="mt-2 text-base text-gray-400">{project.location}</p>
            <p className="mt-6 text-base leading-relaxed text-gray-300">{project.desc}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/923441297256?text=Hello%20CSD%20Engineering%2C%20I%20am%20interested%20in%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Inquire on WhatsApp →
              </a>
              <a href={`tel:${site.phone}`} className="btn-secondary">
                📞 {site.phone}
              </a>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-bold text-white">Project Gallery</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {project.gallery.map((g, i) => (
                    <div key={i} className="overflow-hidden rounded-xl border border-white/10">
                      <img
                        src={g}
                        alt={`${project.title} gallery ${i + 1}`}
                        className="aspect-4/3 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#f97316]">
                Project Details
              </h3>
              <dl className="mt-6 divide-y divide-white/10 text-sm">
                <div className="flex justify-between py-3">
                  <dt className="text-gray-400">Location</dt>
                  <dd className="font-semibold text-white">{project.location}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-gray-400">Status</dt>
                  <dd className="font-semibold text-[#f97316]">{project.badge}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-gray-400">Consultant</dt>
                  <dd className="font-semibold text-white">{site.name}</dd>
                </div>
                <div className="flex justify-between py-3">
                  <dt className="text-gray-400">Scope</dt>
                  <dd className="font-semibold text-white">Full Package</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-24 border-t border-white/10 pt-16">
            <h2 className="text-2xl font-bold text-white">More Projects</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden rounded-xl border border-white/10 bg-[#111827] transition-all hover:border-[#f97316]"
                >
                  <div className="aspect-4/3 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#f97316]">
                      {p.badge}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-white">{p.title}</h3>
                    <p className="text-xs text-gray-400">{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <CtaBand
          title="Ready to build something like this?"
          body="Reach out to CSD Engineering Consultants today for architectural planning and structural calculations."
        />
      </div>
    </article>
  );
}
