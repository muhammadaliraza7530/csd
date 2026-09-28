import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { site, img, services, faqs } from "@/lib/site-data";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [plotSize, setPlotSize] = useState("10 Marla");
  const [selectedService, setSelectedService] = useState("Complete Engineering Package");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !location.trim()) {
      setError("Please enter your full name, phone/WhatsApp number, and plot location.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  const whatsappPrefillUrl = `https://wa.me/923441297256?text=${encodeURIComponent(
    `Assalam-o-Alaikum CSD Engineering,\n\nName: ${name || "Client"}\nPhone: ${phone || "N/A"}\nPlot Location: ${location || "Swat/KPK"}\nPlot Size: ${plotSize}\nService Needed: ${selectedService}\nDetails: ${details || "Please share consultation & quotation."}`,
  )}`;

  return (
    <div className="px-[5px]">
      <PageHero
        eyebrow="Contact CSD Engineering"
        title="Ready to start your project?"
        intro="Share your plot size, location, and requirements — our PEC-certified engineers will prepare a free consultation and cost estimate."
        image={img.heroLuxury}
      />

      {/* 1. DIRECT CONTACT CHANNELS */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Speak directly with our engineering team"
            intro="Visit our office in Swat Matta or reach out via phone, WhatsApp, or email for local and online consultancy across Pakistan."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                  Phone & Direct Call
                </p>
                <a
                  href={`tel:${site.phone}`}
                  className="mt-3 block font-mono text-xl font-bold tabular-nums text-white transition-colors hover:text-[#f97316]"
                >
                  {site.phone}
                </a>
                <p className="mt-2 text-xs text-gray-400">
                  Direct line to our engineering & surveying desk ({site.hours})
                </p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                  WhatsApp Consultation
                </p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-xl font-bold text-white transition-colors hover:text-[#f97316]"
                >
                  Chat on WhatsApp →
                </a>
                <p className="mt-2 text-xs text-gray-400">
                  Share plot location pins, rough sketches, or ask for sample drawings
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                  Official Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-3 block break-all text-sm font-bold text-white transition-colors hover:text-[#f97316]"
                >
                  {site.email}
                </a>
                <p className="mt-2 text-xs text-gray-400">
                  For tender documents, CAD files, and institutional inquiries
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="h-full rounded-2xl border border-white/10 bg-[#111827] p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                  Head Office
                </p>
                <p className="mt-3 text-sm font-bold text-white">{site.address}</p>
                <p className="mt-2 text-xs text-gray-400">{site.hours}</p>
              </div>
            </Reveal>
          </div>

          {/* 2. PROJECT ESTIMATE & CONSULTATION FORM + COVERAGE */}
          <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-8 sm:p-10">
              <h2 className="text-2xl font-extrabold text-white">
                Request a Free Project Estimate
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Fill in your plot details below to receive a customized architectural, structural,
                or land surveying quotation.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-[#f97316]/40 bg-[#0f172a] p-6">
                  <div className="flex items-center gap-3 text-[#f97316]">
                    <CheckCircle2 className="size-6 shrink-0" />
                    <h3 className="text-lg font-bold text-white">
                      Consultation Request Prepared
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Thank you, <strong className="text-white">{name}</strong>. Your inquiry for a{" "}
                    <strong className="text-white">{plotSize}</strong> project in{" "}
                    <strong className="text-white">{location}</strong> ({selectedService}) has been
                    recorded. You can also send this summary immediately to our lead engineer on
                    WhatsApp for a fast response:
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={whatsappPrefillUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Send Directly on WhatsApp →
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  {error && (
                    <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-3.5 text-xs font-medium text-red-300">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Engr. Tariq Khan"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#f97316] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0344-1297256"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#f97316] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Plot City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. Swat Matta, Mingora, Islamabad"
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-[#f97316] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                        Plot Size / Area
                      </label>
                      <select
                        value={plotSize}
                        onChange={(e) => setPlotSize(e.target.value)}
                        className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] px-4 py-3 text-sm text-white focus:border-[#f97316] focus:outline-none"
                      >
                        <option value="5 Marla">5 Marla</option>
                        <option value="7 Marla">7 Marla</option>
                        <option value="10 Marla">10 Marla</option>
                        <option value="1 Kanal">1 Kanal (20 Marla)</option>
                        <option value="2 Kanal+ Estate">2 Kanal+ Luxury Estate</option>
                        <option value="Commercial Plaza Plot">Commercial Plaza / Market</option>
                        <option value="Hospital / Institutional">Hospital / Institutional</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Required Engineering Service
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] px-4 py-3 text-sm text-white focus:border-[#f97316] focus:outline-none"
                    >
                      <option value="Complete Engineering Package (2D + 3D + Structure + BOQ)">
                        Complete Engineering Package (2D + 3D + Structure + BOQ)
                      </option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300">
                      Project Requirements (Number of Floors, Style, Survey Needs)
                    </label>
                    <textarea
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Tell us about your required bedrooms, commercial floors, architectural style (Classical, Spanish, Modern), or surveying requirements..."
                      className="mt-2 w-full rounded-xl border border-white/15 bg-[#0f172a] p-4 text-sm text-white placeholder-gray-500 focus:border-[#f97316] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button type="submit" className="btn-primary cursor-pointer">
                      <Send className="size-4" /> Prepare My Estimate
                    </button>
                    <a
                      href={whatsappPrefillUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Instant WhatsApp Chat →
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* REGIONAL COVERAGE & OFFICE INFO */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                <img
                  src={img.project3}
                  alt="CSD Engineering Commercial & Residential Consultancy"
                  referrerPolicy="no-referrer"
                  className="aspect-16/9 w-full object-cover"
                />
                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#f97316]">
                    Service Coverage
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white">
                    On-Site in Swat & KPK · Online Across Pakistan
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Our field surveying and site supervision teams operate daily across Swat Matta,
                    Mingora, Kabal, Khwazakhela, Bahrain, Chakdara, Dir, and Malakand Division,
                    while our design studio delivers complete 2D/3D architectural and structural
                    packages nationwide.
                  </p>

                  <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-xs text-gray-300">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Head Office:</span>
                      <span className="font-semibold text-white">Swat Matta, KPK (19130)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Working Hours:</span>
                      <span className="font-semibold text-white">{site.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Overseas Consultations:</span>
                      <span className="font-semibold text-[#f97316]">
                        Available via WhatsApp Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="border-t border-white/10 bg-[#0a0f1a] py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Common Questions"
            title="Frequently asked engineering questions"
            intro="Clear answers regarding architectural packages, seismic structural calculations, and land surveying."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-white/10 bg-[#111827] p-7"
              >
                <h3 className="text-base font-bold text-white">{faq.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
