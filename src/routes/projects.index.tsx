import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/site-data";
import { ProjectCard } from "@/components/ProjectCard";
import { PageHero, CtaBand } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";
import { img } from "@/lib/site-data";

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

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Luxury villas, plazas & modern residences"
        intro="The projects we have completed, the ones currently under construction, and our elevation studies."
        image={img.hero1}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Featured Works"
            title="Engineered to the highest standards"
            intro="Browse our portfolio of completed and active construction and elevation projects."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Planning a building or villa in Pakistan?"
        body="From surveying and soil testing to 3D elevation and complete structural drawings — let's build your dream project."
      />
    </>
  );
}
