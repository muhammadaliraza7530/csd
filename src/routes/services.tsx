import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
// import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Construction & Interiors | Aspiring Homes" },
      {
        name: "description",
        content:
          "Architecture design, grey structure and finishing construction, interior design, renovation and 3D visualisation by Aspiring Homes, Lahore.",
      },
      { property: "og:title", content: "Services — Aspiring Homes" },
      {
        property: "og:description",
        content: "Design, construction, interiors and renovation delivered by one team.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Coming Soon"
        intro="Our service details and booking experience are being prepared. Please check back soon for updates."
        image={img.spanishVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">New services pages are on the way</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We are updating this section with clearer offerings, timelines and consultation options.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Tell us your plot size and budget"
        body="We will come back with a plan, a timeline and an honest cost range."
      />
    </>
  );
}
