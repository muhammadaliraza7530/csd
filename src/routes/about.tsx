import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { company } from "@/lib/site";
import {
  img,
  registrations,
  stats,
  whyChooseUs,
  processSteps,
  engineeringTools,
  testimonials,
  site,
} from "@/lib/site-data";
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
    <div className="px-[5px]">
      <PageHero
        eyebrow="About CSD Engineering"
        title={company.since}
        intro="One accountable in-house team for architectural planning, earthquake-resistant RCC structural engineering, Total Station & GPS land surveying, interior design, and on-site project supervision."
        image={img.hero3}
      />

      {/* 1. WHO WE ARE & VISUAL GALLERY */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Our Story & Mission"
              title="A consultancy built around one accountable engineering team"
            />
            <div className="mt-8">
              <Prose>
                <p>
                  Founded in 2018 in Swat Matta, Khyber Pakhtunkhwa,{" "}
                  <strong className="text-white">CSD Engineering Consultants</strong> was
                  established to solve a common challenge faced by homeowners and commercial
                  developers in Pakistan: the disconnect between architects, structural engineers,
                  land surveyors, and site contractors.
                </p>
                <p>
                  When separate teams work in isolation, 3D elevations often clash with structural
                  beams, plot boundaries are miscalculated on sloped terrain, and budgets overrun
                  during grey-structure execution. At CSD Engineering, we bring every engineering
                  and design discipline under a single roof.
                </p>
                <p>
                  Whether you are planning a 10-Marla family residence, a 2-Kanal classical luxury
                  villa, a multi-storey commercial plaza in Matta Bazaar, or a specialized
                  healthcare complex, our PEC-registered engineers and surveyors guide your project
                  from the first topographical peg to final turnkey handover.
                </p>
              </Prose>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "PEC Registered Civil & Structural Engineers",
                  "Seismic Zone-3 & Zone-4 Compliant RCC Design",
                  "Dual-Frequency RTK GPS & Total Station Survey",
                  "Dedicated Overseas Client Video Site Reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-gray-200">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f97316]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  Explore Our Portfolio <ArrowRight className="size-4" />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View Engineering Services
                </Link>
              </div>
            </div>
          </div>

          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  <img
                    src={img.hero1}
                    alt="Classical Luxury Villa by CSD Engineering"
                    referrerPolicy="no-referrer"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#f97316]">Architectural Design</p>
                    <p className="mt-0.5 text-xs text-gray-300">Classical & Modern Villas</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  <img
                    src={img.service1}
                    alt="Healthcare & Institutional Engineering"
                    referrerPolicy="no-referrer"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#f97316]">Healthcare & Commercial</p>
                    <p className="mt-0.5 text-xs text-gray-300">Code-Compliant Structures</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  <img
                    src={img.heroSpanish}
                    alt="Spanish Villa Design in Swat Valley"
                    referrerPolicy="no-referrer"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#f97316]">3D Visualization</p>
                    <p className="mt-0.5 text-xs text-gray-300">Spanish & Heritage Estates</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                  <img
                    src={img.project6}
                    alt="On-Site Supervision & Plazas"
                    referrerPolicy="no-referrer"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#f97316]">Project Management</p>
                    <p className="mt-0.5 text-xs text-gray-300">Full On-Site QA/QC</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. KEY METRICS BAR */}
      <section className="border-y border-white/10 bg-[#1e293b]/60 py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-[#111827] p-6 text-center"
              >
                <p className="font-mono text-3xl font-extrabold tabular-nums text-[#f97316] sm:text-4xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CREDENTIALS & ENGINEERING SOFTWARE/EQUIPMENT */}
      <section className="bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Credentials & Technology"
            title="Certified engineering standards & modern instrumentation"
            intro="We combine Pakistan Engineering Council (PEC) compliance with industry-leading structural analysis software and field surveying hardware."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {registrations.map((r, i) => (
              <Reveal key={r.authority} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="font-bold text-[#f97316]">{r.authority}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{r.number}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{r.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringTools.map((tool) => (
              <div
                key={tool.category}
                className="rounded-2xl border border-white/10 bg-[#111827]/70 p-6"
              >
                <p className="text-xs font-semibold text-[#f97316]">{tool.category}</p>
                <h4 className="mt-2 text-base font-bold text-white">{tool.tools}</h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{tool.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US & OUR 4-STAGE PROCESS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose CSD Engineering"
            title="Accuracy, experience, and complete accountability"
            intro="From initial land demarcation in Swat Valley to structural design for clients across Pakistan."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w) => (
              <div
                key={w.label}
                className="rounded-2xl border border-white/10 bg-[#111827] p-7 transition-colors hover:border-[#f97316]"
              >
                <p className="font-mono text-3xl font-extrabold tabular-nums text-[#f97316]">
                  {w.num}
                </p>
                <h3 className="mt-2 text-base font-bold text-white">{w.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading
              eyebrow="How We Work"
              title="Four clear stages from plot to handover"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-white/10 bg-[#111827] p-7"
                >
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#f97316] font-mono text-sm font-bold text-white">
                    {step.num}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS */}
      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Client Feedback"
            title="Trusted by homeowners & commercial developers"
            intro="Real outcomes from residential villas, commercial plazas, and overseas consultancy projects."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111827] p-8"
              >
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">“{t.quote}”</p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-base font-bold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs text-[#f97316]">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to discuss your residential or commercial project?"
        body={`Call us at ${site.phone} or share your plot size and requirements for a comprehensive engineering consultation.`}
      />
    </div>
  );
}
