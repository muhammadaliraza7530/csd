import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/site";
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
      return { meta: [{ title: "Project not found — Aspiring Homes" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title}, ${project.location} — Aspiring Homes`;
    return {
      meta: [
        { title },
        { name: "description", content: project.blurb },
        { property: "og:title", content: title },
        { property: "og:description", content: project.blurb },
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
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" /> All projects
        </Link>

        <Reveal className="mt-6">
          <div className="lit-panel overflow-hidden bg-card">
            <img
              src={project.image}
              alt={`${project.title} in ${project.location}`}
              className="aspect-16/9 w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{project.status}</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-5xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.blurb}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {project.gallery.map((g: string, i: number) => (
                <Reveal key={`${g}-${i}`} delay={i * 80}>
                  <div className="lit-panel overflow-hidden bg-card">
                    <img src={g} alt={project.title} loading="lazy" className="aspect-4/3 w-full object-cover" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <dl className="lit-panel h-fit bg-card p-7 text-sm">
            {[
              ["Location", project.location],
              ["Status", project.status],
              ["Style", project.category],
              ["Scope", "Design & construction"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-border/60 py-3 last:border-0">
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-semibold">{v}</dd>
              </div>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen-on-hover mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Discuss a similar home <ArrowRight className="size-4" />
            </a>
          </dl>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-extrabold">More projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="lit-panel block overflow-hidden bg-card"
                >
                  <img src={p.image} alt={p.title} loading="lazy" className="aspect-4/3 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-base font-bold">{p.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.location}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <CtaBand />
      </div>
    </article>
  );
}
