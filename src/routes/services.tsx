import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import {
  services,
  specializedCapabilities,
  servicePackages,
  processSteps,
  img,
  site,
} from "@/lib/site-data";
import { PageHero, CtaBand } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Services — Architecture, Structural & Surveying | CSD Engineering Consultants",
      },
      {
        name: "description",
        content:
          "Architectural design, earthquake-resistant structural engineering, GPS & Total Station land surveying, interior and on-site project management across Pakistan.",
      },
      {
        property: "og:title",
        content: "Services — CSD Engineering Consultants",
      },
      {
        property: "og:description",
        content:
          "Everything under one roof: architecture, structural design, land surveying and project management.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="px-[5px]">
      <PageHero
        eyebrow="Our Engineering Services"
        title="Everything under one roof"
        intro="One accountable team from the first topographical survey peg to complete 2D/3D architectural plans, seismic RCC structural engineering, and on-site QA/QC management."
        image={img.hero1}
      />

      {/* 1. SIX CORE DISCIPLINES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Six integrated engineering & design disciplines"
            intro="Every drawing set and site survey is prepared by certified specialists to ensure structural safety, aesthetic refinement, and budget accuracy."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 60}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all duration-200 hover:border-[#f97316]">
                  <div className="relative aspect-16/10 overflow-hidden bg-[#0a0f1a]">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-75" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="font-mono font-bold text-[#f97316]">{s.num}</span>
                        <span aria-hidden="true">·</span>
                        <span>{s.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{s.timeline}</span>
                      </div>

                      <h3 className="mt-2.5 text-xl font-bold text-white">
                        {s.num}. {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>

                      <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                        <p className="text-xs font-semibold text-gray-300">Key Deliverables:</p>
                        {s.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-[#f97316]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      <a
                        href={`https://wa.me/923441297256?text=Hello%20CSD%20Engineering%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(s.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f97316] transition-colors hover:text-[#fb923c]"
                      >
                        Inquire on WhatsApp <ArrowRight className="size-3.5" />
                      </a>
                      <Link
                        to="/contact"
                        className="text-xs font-medium text-gray-400 transition-colors hover:text-white"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SPECIALIZED REGIONAL & TECHNICAL CAPABILITIES */}
      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="Specialized Consultancy"
                title="Tailored for KPK terrain, TMA bylaws & overseas clients"
                intro="Beyond standard blueprints, we solve practical site, cost, and regulatory challenges before construction begins."
              />

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {specializedCapabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="rounded-2xl border border-white/10 bg-[#111827] p-6"
                  >
                    <p className="font-mono text-xs font-bold text-[#f97316]">{cap.num}</p>
                    <h3 className="mt-2 text-base font-bold text-white">{cap.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-gray-400">{cap.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                <img
                  src={img.heroLuxury}
                  alt="Luxury Residence Architectural Rendering"
                  referrerPolicy="no-referrer"
                  className="aspect-3/4 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#f97316]">3D Exterior & Interior</p>
                  <p className="mt-1 text-sm font-bold text-white">Day & Night Lighting Studies</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] sm:mt-8">
                <img
                  src={img.heroCourtyard}
                  alt="Courtyard & Hilly Terrain Engineering"
                  referrerPolicy="no-referrer"
                  className="aspect-3/4 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#f97316]">Precision Execution</p>
                  <p className="mt-1 text-sm font-bold text-white">Total Station & Seismic RCC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONSULTANCY PACKAGES */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Service Packages"
            title="Choose the right engineering scope for your project"
            intro="Flexible drawing and supervision packages for residential plots, luxury villas, commercial plazas, and healthcare buildings."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between rounded-2xl border p-8 ${
                  pkg.featured
                    ? "border-[#f97316] bg-[#111827]"
                    : "border-white/10 bg-[#111827]/80"
                }`}
              >
                <div>
                  <p className="text-xs font-bold text-[#f97316]">{pkg.tag}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-gray-400">{pkg.subtitle}</p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#f97316]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={`https://wa.me/923441297256?text=Hello%20CSD%20Engineering%2C%20I%20want%20a%20quote%20for%20the%20${encodeURIComponent(pkg.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      pkg.featured
                        ? "btn-primary w-full justify-center"
                        : "btn-secondary w-full justify-center"
                    }
                  >
                    Request Package Quote →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOUR STAGE WORKFLOW */}
      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How your project moves from concept to reality"
            intro="A transparent four-step engineering workflow."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-white/10 bg-[#111827] p-7">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#f97316] font-mono text-sm font-bold text-white">
                  {step.num}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need an estimate for your plot or construction?"
        body={`Call ${site.phone} or message our engineers on WhatsApp with your plot dimensions for a custom quotation.`}
      />
    </div>
  );
}
