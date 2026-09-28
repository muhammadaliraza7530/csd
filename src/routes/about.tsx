import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { img, registrations, stats } from "@/lib/site-data";
import { PageHero, CtaBand, Prose } from "@/components/PageBits";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About CSD Engineering Consultants — Engineering Solutions Since 2018",
      },
      {
        name: "description",
        content:
          "CSD Engineering Consultants has been delivering complete engineering solutions since 2018 — architecture, structural design, interior, landscape and precision land surveying across Swat Matta and KPK, Pakistan.",
      },
      {
        property: "og:title",
        content: "About CSD Engineering Consultants",
      },
      {
        property: "og:description",
        content:
          "Engineering Solutions for Your Dream Projects since 2018, based in Swat Matta, KPK.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={company.since}
        intro="One in-house team for architecture, structural engineering, precision land surveying, interior and project management."
        image={img.hero3}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Who we are" title="A firm built around one accountable team" />
            <div className="mt-8">
              <Prose>
                <p>
                  CSD Engineering Consultants is an engineering and architectural consultancy based
                  in Swat Matta, KPK, serving clients across Pakistan. We started in 2018 with a
                  clear principle: clients embarking on dream projects should not have to coordinate
                  between separate architects, structural engineers, land surveyors, and site
                  contractors.
                </p>
                <p>
                  We bring every discipline under one roof — 2D planning, 3D elevations,
                  earthquake-resistant RCC structural calculations, Total Station & GPS land
                  surveying, and rigorous on-site QA/QC supervision.
                </p>
                <p>
                  From classical luxury villas and heritage havelis to multi-storey commercial
                  plazas and hospital complexes, we turn your plot into an enduring reality with
                  precision and integrity.
                </p>
              </Prose>
            </div>
          </div>

          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-[#111827] p-8">
                  <p className="text-3xl font-extrabold text-[#f97316] sm:text-4xl">
                    <Counter value={s.value} />
                  </p>
                  <p className="mt-2 text-sm text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="Certified engineering standards"
            intro="Our team follows Pakistan Engineering Council and international building code guidelines."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrations.map((r, i) => (
              <Reveal key={r.authority} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                    {r.authority}
                  </span>
                  <p className="mt-3 font-mono text-sm text-gray-400">{r.number}</p>
                  <h3 className="mt-3 text-lg font-bold text-white">{r.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to discuss your project?"
        body="Share your plot size, location and requirements — our engineers will prepare a consultation and estimate."
      />
    </>
  );
}
