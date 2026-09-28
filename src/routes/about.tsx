import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/lib/site";
import { img, registrations, stats } from "@/lib/site-data";
import { PageHero, CtaBand, Prose } from "@/components/PageBits";
import { Counter, Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aspiring Homes — Design & Construction Firm, Pakistan" },
      {
        name: "description",
        content:
          "Aspiring Homes has been making quality houses since 2019 — an architecture, interior and construction firm working across Lahore, Faisalabad and Sialkot.",
      },
      { property: "og:title", content: "About Aspiring Homes" },
      {
        property: "og:description",
        content: "Making quality houses since 2019, from Lahore across Punjab, Pakistan.",
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
        intro="One in-house team for architecture, 3D visualisation, interiors and site execution."
        image={img.courtyard}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Who we are" title="A firm built around one accountable team" />
            <div className="mt-8">
              <Prose>
                <p>
                  Aspiring Homes is a design and construction firm working across Lahore, Faisalabad and Sialkot. We
                  started in 2019 with a simple idea: a family building their home should not have to chase three
                  different people for drawings, material and labour.
                </p>
                <p>
                  So we kept everything in-house — architecture, 3D visualisation, interior design and site execution.
                  Our own supervisors manage the crews, our own designers answer your questions, and the drawing you
                  approve is the house that gets built.
                </p>
                <p>
                  From Spanish-style courtyards to sharp contemporary facades, we build the language your family loves —
                  detailed properly and finished honestly.
                </p>
              </Prose>
            </div>
          </div>

          <Reveal>
            <div className="lit-panel overflow-hidden bg-card">
              <img
                src={img.luxuryVilla}
                alt="Completed luxury villa by Aspiring Homes"
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-card/30 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 text-center sm:grid-cols-3 lg:px-8">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <Counter value={s.value} className="ember-text text-4xl font-extrabold sm:text-5xl" />
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="How we work" title="Three promises we keep on every site" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Honest site work",
                b: "Approved material, measured quantities and regular photo updates from your site.",
              },
              {
                t: "Design you approve first",
                b: "Nothing is cast on site until the plan and elevation are signed off by you.",
              },
              {
                t: "One accountable team",
                b: "Design, structure and finishing all sit with us — so nobody passes the blame.",
              },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 90}>
                <div className="lit-panel h-full bg-card p-7">
                  <h3 className="text-lg font-bold">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.b}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {registrations.map((r) => (
              <span
                key={r}
                className="reg-chip rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
