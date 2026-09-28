import { img, showreelUrl as reelUrl, process as processSteps, services as serviceList } from "@/lib/site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;

export const company = {
  name: "Aspiring Homes",
  tagline: "Architecture · Interior · Construction",
  since: "Making Quality Houses Since 2019",
  phoneDisplay: "0306 0221896",
  phoneTel: "+923060221896",
  whatsapp:
    "https://wa.me/923060221896?text=Hello%20Aspiring%20Homes%2C%20I%20would%20like%20to%20discuss%20a%20construction%20project.",
  email: "aspiringtalks@gmail.com",
  addressShort: "New Super Town, Lahore",
  address: "DHA Phase 6, Lahore, Punjab, Pakistan",
  hours: "Mon–Sat, 9am to 7pm",
  socials: [
    { label: "Instagram", href: "https://instagram.com/aspiringhomesofficial" },
    { label: "Facebook", href: "https://facebook.com/AspiringHomes" },
    { label: "YouTube", href: "https://youtube.com/@AspiringHomes" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  status: "Completed" | "Under Construction" | "Upcoming";
  category: "Modern" | "Classic" | "Spanish" | "Grey Structure";
  image: string;
  gallery: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    slug: "the-reflection-sialkot",
    title: "The Reflection — Duplex",
    location: "Sialkot",
    status: "Upcoming",
    category: "Modern",
    image: img.luxuryVilla,
    gallery: [img.luxuryVilla, img.luxuryHouse, img.modernVilla],
    blurb:
      "A contemporary duplex with a travertine-and-graphite elevation, layered facade lighting and glass balustrades.",
  },
  {
    slug: "spanish-courtyard-villa",
    title: "Spanish Courtyard Villa",
    location: "Lahore",
    status: "Under Construction",
    category: "Spanish",
    image: img.spanishVilla,
    gallery: [img.spanishVilla, img.courtyard, img.classicMansion],
    blurb:
      "White stucco walls, terracotta roof tiles and an arched colonnade wrapped around a private landscaped courtyard.",
  },
  {
    slug: "classical-grand-residence",
    title: "Classical Grand Residence",
    location: "Citi Housing, Faisalabad",
    status: "Upcoming",
    category: "Classic",
    image: img.classicMansion,
    gallery: [img.classicMansion, img.courtyard, img.completedVilla],
    blurb:
      "Columns, arched glazing and a double-height entrance foyer designed for a landmark corner plot.",
  },
  {
    slug: "modern-luxury-house",
    title: "Modern Luxury House",
    location: "Lahore",
    status: "Completed",
    category: "Modern",
    image: img.luxuryHouse,
    gallery: [img.luxuryHouse, img.modernVilla, img.brickFront],
    blurb:
      "Travertine and dark stone facade with a double-height entrance, black-framed glazing and a glass balcony.",
  },
  {
    slug: "grey-modern-residence",
    title: "Grey Modern Residence",
    location: "Lahore",
    status: "Completed",
    category: "Modern",
    image: img.modernVilla,
    gallery: [img.modernVilla, img.greyClassic, img.brickFront],
    blurb:
      "A crisp grey-and-black elevation with full-height glazing, a covered carport and a minimal front garden.",
  },
  {
    slug: "corner-plot-residence",
    title: "Corner Plot Residence",
    location: "Sialkot",
    status: "Under Construction",
    category: "Modern",
    image: img.brickFront,
    gallery: [img.brickFront, img.greyClassic, img.luxuryHouse],
    blurb:
      "Two-storey corner house with large glass panels, a shaded carport and a warm stone-and-graphite palette.",
  },
];

export const services = serviceList.map((s) => ({ title: s.title, body: s.body }));
export const process = processSteps;
