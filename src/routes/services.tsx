import { createFileRoute } from "@tanstack/react-router";
import { services, img, site } from "@/lib/site-data";
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
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything under one roof"
        intro="One accountable team from the first sketch to the final survey peg. Accurate, compliant and reliable."
        image={img.hero1}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Comprehensive engineering & design capabilities"
            intro="Six core engineering disciplines executed by certified specialists."
          />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition-all hover:border-[#f97316]">
                  <div className="aspect-16/10 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#f97316] transition-colors hover:text-[#fb923c]"
                      >
                        Inquire Service →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need an estimate for your plot or construction?"
        body="Share your requirements and location. Our team will prepare a detailed consultation."
      />
    </>
  );
}
