import { createFileRoute } from "@tanstack/react-router";
import { site, img } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
import { SectionHeading, Reveal } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact CSD Engineering Consultants — Swat Matta, KPK",
      },
      {
        name: "description",
        content:
          "Contact CSD Engineering Consultants. Call 0344-1297256, message on WhatsApp or email csdengineering12@gmail.com for engineering solutions across Pakistan.",
      },
      {
        property: "og:title",
        content: "Contact CSD Engineering Consultants",
      },
      {
        property: "og:description",
        content: "Call 0344-1297256 or WhatsApp us to discuss your project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Ready to start your project?"
        intro="Share your plot size, location and requirements — our certified engineers will prepare a free consultation and estimate."
        image={img.hero2}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="We are here to help you build"
            intro="Visit our office in Swat Matta or reach out via phone, WhatsApp, or email."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#f97316]/15 text-2xl text-[#f97316]">
                  📞
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Call Us
                </h3>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-2 block text-lg font-bold text-white hover:text-[#f97316]"
                >
                  {site.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#f97316]/15 text-2xl text-[#f97316]">
                  💬
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-gray-400">
                  WhatsApp
                </h3>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-lg font-bold text-[#f97316] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#f97316]/15 text-2xl text-[#f97316]">
                  ✉️
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Email Us
                </h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block text-sm font-bold text-white hover:text-[#f97316]"
                >
                  {site.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-8 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-[#f97316]/15 text-2xl text-[#f97316]">
                  📍
                </div>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-gray-400">
                  Office Location
                </h3>
                <p className="mt-2 text-sm font-bold text-white">{site.address}</p>
                <p className="mt-1 text-xs text-gray-400">{site.hours}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              REQUEST A CONSULTATION →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
