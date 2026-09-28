import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/lib/site-data";
import { PageHero } from "@/components/PageBits";
// import { Reveal, SectionHeading } from "@/components/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aspiring Homes — Call 0306 0221896, Lahore" },
      {
        name: "description",
        content:
          "Talk to Aspiring Homes about your house design or construction project. Call 0306 0221896, message us on WhatsApp or email aspiringtalks@gmail.com.",
      },
      { property: "og:title", content: "Contact Aspiring Homes" },
      {
        property: "og:description",
        content: "Call 0306 0221896 or message us on WhatsApp to start your project.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Coming Soon"
        intro="Our contact experience and support details are being updated. Please check back soon for the latest information."
        image={img.luxuryVilla}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <div className="rounded-3xl border border-dashed border-primary/40 bg-primary/10 p-10 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Under Construction</p>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">We are preparing our contact section</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              You will soon be able to reach us easily through phone, WhatsApp, email and office details.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
