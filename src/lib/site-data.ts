/**
 * Single source of truth for all site content.
 * Every media file lives in /public and is referenced with an absolute path,
 * so it works identically on the preview, on Lovable hosting and on Vercel.
 */

export const img = {
  logo: "/logo.jpg",

  // Photoreal hero / feature photography
  spanishVilla: "/homes/hero-spanish.jpg",
  luxuryVilla: "/homes/hero-villa.jpg",
  luxuryHouse: "/homes/hero-luxury.jpg",
  courtyard: "/homes/hero-courtyard.jpg",

  // Real house photography
  modernVilla: "/homes/home-1.jpg",
  classicMansion: "/homes/home-2.jpg",
  greyClassic: "/homes/home-3.jpg",
  completedVilla: "/homes/home-4.jpg",
  brickFront: "/homes/home-5.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "Aspiring Homes",
  short: "Aspiring",
  fullName: "Aspiring Homes — Architecture, Interior & Construction",
  tagline: "Making Quality Houses Since 2019",
  logo: img.logo,
  address: "DHA Phase 6, Lahore, Punjab, Pakistan",
  addressShort: "New Super Town, Lahore",
  email: "aspiringtalks@gmail.com",
  phone: "0306 0221896",
  phoneTel: "+923060221896",
  facebook: "https://facebook.com/AspiringHomes",
  instagram: "https://instagram.com/aspiringhomesofficial",
  youtube: "https://youtube.com/@AspiringHomes",
  whatsapp:
    "https://wa.me/923060221896?text=Hello%20Aspiring%20Homes%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.",
  hours: [
    { day: "Monday to Thursday", time: "9am to 7pm" },
    { day: "Friday", time: "9am to 12pm & 3pm to 7pm" },
    { day: "Saturday", time: "9am to 5pm" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    title: "We design and build the home you keep imagining",
    highlight:
      "Architecture, interiors and full construction — planned, drawn and executed by one team from concept to handover.",
    image: img.luxuryVilla,
  },
  {
    title: "Spanish, classical and modern homes",
    highlight:
      "Arched colonnades, terracotta roofs or sharp contemporary lines — we build the language your family loves.",
    image: img.spanishVilla,
  },
  {
    title: "Making quality houses since 2019",
    highlight:
      "From the first 2D plan to the final coat of paint, our designers and site teams turn your plot into a home.",
    image: img.luxuryHouse,
  },
  {
    title: "Concept to creation, under one roof",
    highlight:
      "Grey structure, finishing, interiors and 3D visualisation delivered across Lahore, Faisalabad and Sialkot.",
    image: img.courtyard,
  },
];

export const stats = [
  { value: "2019", label: "Building since" },
  { value: "50+", label: "Homes designed & built" },
  { value: "3", label: "Cities served" },
];

/** Branded social posts — shown full-frame, never cropped. */
export const posts = [
  { image: "/posts/post-1.jpg", title: "Modern Facade Residence", location: "Sialkot", tag: "Coming Soon" },
  { image: "/posts/post-2.jpg", title: "Crafting Classic Beauty", location: "Lahore", tag: "In Progress" },
  { image: "/posts/post-3.jpg", title: "Concept to Creation", location: "Lahore", tag: "In Progress" },
  { image: "/posts/post-4.jpg", title: "Classical Grand Residence", location: "Faisalabad", tag: "Coming Soon" },
  { image: "/posts/post-5.jpg", title: "Classic Villa Handover", location: "Lahore", tag: "Completed" },
  { image: "/posts/post-6.jpg", title: "Building Dreams", location: "Lahore", tag: "Under Construction" },
  { image: "/posts/post-7.jpg", title: "Constructing Excellence", location: "Lahore", tag: "Under Construction" },
  { image: "/posts/post-8.jpg", title: "The Reflection — Night", location: "Sialkot", tag: "Coming Soon" },
  { image: "/posts/post-9.jpg", title: "The Reflection — Duplex", location: "Sialkot", tag: "Coming Soon" },
];

export const videoGallery = [
  { src: "/videogrally/video1.mp4", poster: img.luxuryVilla, title: "Project Showreel", caption: "Design to handover" },
  { src: "/videogrally/video2.mp4", poster: img.spanishVilla, title: "Spanish Villa Walkthrough", caption: "Elevation study" },
  { src: "/videogrally/video3.mp4", poster: img.luxuryHouse, title: "Site Progress Film", caption: "Grey structure" },
  { src: "/videogrally/video4.mp4", poster: img.courtyard, title: "Interior Reveal", caption: "Finishing stage" },
];

export const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Homeowner · DHA Phase 6, Lahore",
    quote:
      "They handled drawings, material and labour themselves. I never had to chase three different people — the house looks exactly like the 3D they showed me.",
  },
  {
    name: "Sana Iqbal",
    role: "Homeowner · Citi Housing, Faisalabad",
    quote:
      "The elevation work is beautiful and the finishing is clean. Weekly site photos meant I always knew what was happening on my plot.",
  },
  {
    name: "Bilal Hussain",
    role: "Developer · Sialkot",
    quote:
      "Professional team, honest quantities and on-time slabs. We handed them a second duplex before the first one was even finished.",
  },
  {
    name: "Hira Nadeem",
    role: "Homeowner · Model Town, Lahore",
    quote:
      "Interiors were designed and installed by the same team that built the structure, so nothing had to be broken and redone.",
  },
  {
    name: "Usman Tariq",
    role: "Homeowner · Johar Town, Lahore",
    quote:
      "Renovation of a 20-year-old house — new facade, new layout, finished in time and within the range they quoted.",
  },
];

export const services = [
  {
    slug: "architecture",
    title: "Architecture Design",
    image: img.luxuryHouse,
    short: "2D planning, 3D elevation design and complete working drawings for your plot.",
    body: "2D planning, 3D elevation design and complete working drawings tailored to your plot size and family needs. Every drawing is developed until you approve each detail, so nothing is left to guesswork on site.",
  },
  {
    slug: "construction",
    title: "Construction",
    image: img.brickFront,
    short: "Grey structure and finishing packages with quality material and trained labour.",
    body: "Grey structure and finishing packages with quality material, trained labour and transparent site reporting. Our own supervised crews cast columns, beams and slabs strictly to the approved drawings.",
  },
  {
    slug: "interior",
    title: "Interior Design",
    image: img.greyClassic,
    short: "Living, bedroom, kitchen and ceiling design with lighting and furniture detail.",
    body: "Living, bedroom, kitchen and ceiling design with lighting layouts, furniture detail and execution — designed and installed by the same team that built your structure.",
  },
  {
    slug: "renovation",
    title: "Renovation",
    image: img.completedVilla,
    short: "Facade upgrades, layout changes and full renovation of existing spaces.",
    body: "Facade upgrades, layout changes and full renovation of existing homes and commercial spaces — re-elevated, remodelled and finished without you leaving the neighbourhood you love.",
  },
  {
    slug: "visualisation",
    title: "3D Visualisation",
    image: img.classicMansion,
    short: "Photoreal exterior and interior renders before a single brick is laid.",
    body: "Photoreal exterior and interior renders so you can see your home before a single brick is laid. Materials, lighting and landscaping are all visualised so approvals are quick and confident.",
  },
  {
    slug: "marketing",
    title: "Marketing & Media",
    image: img.spanishVilla,
    short: "Photography, reels and brand content for developers and builders.",
    body: "Photography, reels and brand content for developers and builders who want their work seen — the same media team that produces our own project films.",
  },
];

export const registrations = [
  "Lahore",
  "Faisalabad",
  "Sialkot",
  "Architecture Design",
  "Interior Design Studio",
  "Construction Company",
];

export const process = [
  { step: "01", title: "Consultation", body: "We discuss your plot, budget and requirements — in person or on WhatsApp." },
  { step: "02", title: "Design", body: "Floor plans and 3D elevations are developed until you approve every detail." },
  { step: "03", title: "Execution", body: "Grey structure and finishing delivered by our own supervised site teams." },
  { step: "04", title: "Handover", body: "Final finishing, cleaning and a walk-through before your keys are handed over." },
];

export const galleryImages = [
  img.luxuryVilla,
  img.spanishVilla,
  img.luxuryHouse,
  img.courtyard,
  img.modernVilla,
  img.classicMansion,
  img.greyClassic,
  img.completedVilla,
  img.brickFront,
];
