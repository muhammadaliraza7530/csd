/**
 * CSD Engineering Consultants - Site Data
 * Single source of truth for all site content, media, services, and projects.
 * Matches https://csd-engineers.vercel.app/ with 100% fidelity.
 */

export const img = {
  logo: "/media/logo.jpg",
  hero1: "/media/hero1.jpg",
  hero2: "/media/hero2.jpg",
  hero3: "/media/hero3.jpg",
  service1: "/media/service1.jpg",
  service2: "/media/service2.jpg",
  project1: "/media/project1.jpg",
  project2: "/media/project2.jpg",
  project3: "/media/project3.jpg",
  project4: "/media/project4.jpg",
  project5: "/media/project5.jpg",
  project6: "/media/project6.jpg",

  // Aliases for compatibility
  luxuryVilla: "/media/hero1.jpg",
  spanishVilla: "/media/hero2.jpg",
  luxuryHouse: "/media/hero3.jpg",
  courtyard: "/media/project1.jpg",
  modernVilla: "/media/project2.jpg",
  classicMansion: "/media/project3.jpg",
  greyClassic: "/media/project4.jpg",
  completedVilla: "/media/project5.jpg",
  brickFront: "/media/project6.jpg",
};

export const showreelUrl = "/video/showreel.mp4";

export const site = {
  name: "CSD Engineering Consultants",
  short: "CSD",
  brandSub: "Engineering Consultants",
  fullName: "CSD Engineering Consultants | Engineering Solutions for Your Dream Projects",
  tagline: "Engineering Solutions for Your Dream Projects",
  since: "Engineering Solutions Since 2018",
  estYear: "2018",
  logo: img.logo,
  address: "Swat Matta, Matta, Pakistan, 19130",
  addressShort: "Swat Matta, KPK, Pakistan",
  email: "csdengineering12@gmail.com",
  phone: "0344-1297256",
  phoneTel: "+923441297256",
  whatsapp: "https://wa.me/923441297256",
  hours: "Mon–Sat: 9 AM – 6 PM",
  description:
    "Engineering Solutions for Your Dream Projects since 2018. Architecture, structural design, interior, landscape and precision land surveying across Pakistan.",
  heroDesc:
    "From the first sketch to the final survey peg, our certified engineers and surveyors in Swat Matta, KPK deliver complete engineering solutions for residential, commercial and infrastructure projects.",
};

export const navLinks = [
  { href: "#home", to: "/", label: "Home" },
  { href: "#about", to: "/about", label: "About" },
  { href: "#services", to: "/services", label: "Services" },
  { href: "#projects", to: "/projects", label: "Projects" },
  { href: "#contact", to: "/contact", label: "Contact" },
];

export const heroSlides = [
  {
    image: img.hero1,
    title: "CSD Engineering Consultants",
    highlight: "Engineering Solutions for Your Dream Projects",
    alt: "CSD Engineering - Architectural Masterpiece",
  },
  {
    image: img.hero2,
    title: "Neo-Classical & Modern Residences",
    highlight: "Earthquake-resistant RCC design and luxury elevations across KPK.",
    alt: "CSD Engineering - Neo-Classical Residence",
  },
  {
    image: img.hero3,
    title: "Precision Surveying & Project Management",
    highlight: "From the first sketch to the final survey peg, 100% under one roof.",
    alt: "CSD Engineering - Grand Heritage Architecture",
  },
];

export const stats = [
  { value: "2018", label: "Est. Year" },
  { value: "100+", label: "Projects Completed" },
  { value: "5+", label: "Years Experience" },
  { value: "6", label: "Core Services" },
];

export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  image?: string;
  category?: string;
}

export const services: ServiceItem[] = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    desc: "Complete 2D plans, 3D elevations, and working drawings for residential and commercial projects.",
    img: img.hero1,
    image: img.hero1,
  },
  {
    id: "structural-engineering",
    title: "Structural Engineering",
    desc: "Earthquake-resistant RCC design, foundation design, and steel detailing as per building codes.",
    img: img.project1,
    image: img.project1,
  },
  {
    id: "interior-design",
    title: "Interior Design",
    desc: "Complete 3D visualization, false ceiling, lighting layout, and furniture planning.",
    img: img.project4,
    image: img.project4,
  },
  {
    id: "landscape-design",
    title: "Landscape Design",
    desc: "Garden planning, driveway design, and exterior space beautification.",
    img: img.project5,
    image: img.project5,
  },
  {
    id: "land-surveying",
    title: "Land Surveying",
    desc: "GPS, Total Station & Auto Level for plot demarcation, contour and topographic surveys.",
    img: img.service1,
    image: img.service1,
  },
  {
    id: "project-management",
    title: "Project Management",
    desc: "Quality Control, Quality Assurance and full on-site project management.",
    img: img.service2,
    image: img.service2,
  },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  badge: "COMPLETED" | "UNDER CONSTRUCTION";
  status: "COMPLETED" | "UNDER CONSTRUCTION";
  category?: string;
  desc: string;
  blurb?: string;
  img: string;
  image: string;
  gallery: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "p1",
    slug: "classical-luxury-villa",
    title: "Classical Luxury Villa",
    location: "Swat, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Classic",
    desc: "A double-height classical villa with hand-detailed cornices, arched fenestration and a symmetrical front elevation. Complete architectural, structural and interior package delivered by our in-house team.",
    blurb:
      "A double-height classical villa with hand-detailed cornices and arched fenestration in Swat.",
    img: img.hero1,
    image: img.hero1,
    gallery: [img.hero1, img.hero2, img.hero3],
  },
  {
    id: "p2",
    slug: "neo-classical-residence",
    title: "Neo-Classical Residence",
    location: "Matta, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "Neo-classical family residence combining a traditional facade with a modern, open internal layout. Earthquake-resistant RCC frame designed as per building codes.",
    blurb:
      "Neo-classical family residence combining a traditional facade with a modern open layout.",
    img: img.hero2,
    image: img.hero2,
    gallery: [img.hero2, img.hero1, img.project1],
  },
  {
    id: "p3",
    slug: "grand-heritage-home",
    title: "Grand Heritage Home",
    location: "Swat Valley",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Classic",
    desc: "Heritage-inspired home set in Swat Valley with stone plinth, deep verandas and a landscaped forecourt. Site supervised end-to-end with full QA/QC reporting.",
    blurb: "Heritage-inspired home in Swat Valley with stone plinth and deep verandas.",
    img: img.hero3,
    image: img.hero3,
    gallery: [img.hero3, img.project4, img.project5],
  },
  {
    id: "p4",
    slug: "traditional-haveli",
    title: "Traditional Haveli",
    location: "Matta, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Spanish",
    desc: "Courtyard-centred haveli planning with traditional proportions, jali screens and a private family wing. Includes structural detailing and interior finishing schedules.",
    blurb: "Courtyard-centred haveli planning with traditional proportions and jali screens.",
    img: img.project1,
    image: img.project1,
    gallery: [img.project1, img.hero1, img.project2],
  },
  {
    id: "p5",
    slug: "modern-residential-plaza",
    title: "Modern Residential Plaza",
    location: "Swat",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "Multi-unit residential plaza with efficient circulation cores, parking layout and services coordination across all floors.",
    blurb: "Multi-unit residential plaza with efficient circulation cores and parking layout.",
    img: img.project2,
    image: img.project2,
    gallery: [img.project2, img.project3, img.project6],
  },
  {
    id: "p6",
    slug: "mixed-use-commercial",
    title: "Mixed-Use Commercial",
    location: "Matta Bazaar",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "Ground-floor retail with residential and office floors above. Designed for maximum frontage exposure with a durable, low-maintenance facade.",
    blurb: "Ground-floor retail with residential and office floors above in Matta Bazaar.",
    img: img.project3,
    image: img.project3,
    gallery: [img.project3, img.project2, img.project6],
  },
  {
    id: "p7",
    slug: "luxury-villa-night-view",
    title: "Luxury Villa — Night View",
    location: "Swat, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Classic",
    desc: "Facade lighting study and night-time render for a luxury villa — accent lighting on columns, cornices and landscape features.",
    blurb: "Facade lighting study and night-time render with column and landscape illumination.",
    img: img.project4,
    image: img.project4,
    gallery: [img.project4, img.hero1, img.project5],
  },
  {
    id: "p8",
    slug: "multi-storey-residence",
    title: "Multi-Storey Residence",
    location: "Swat",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "Multi-storey family residence with separate floors per family unit, shared roof terrace and an optimised RCC structural grid.",
    blurb: "Multi-storey family residence with separate units and optimized RCC grid.",
    img: img.project5,
    image: img.project5,
    gallery: [img.project5, img.project4, img.hero2],
  },
  {
    id: "p9",
    slug: "commercial-plaza-block",
    title: "Commercial Plaza Block",
    location: "Matta",
    badge: "UNDER CONSTRUCTION",
    status: "UNDER CONSTRUCTION",
    category: "Modern",
    desc: "Commercial block currently under construction with ongoing site supervision, quality control and progress reporting from our project management team.",
    blurb: "Commercial block currently under construction with ongoing site supervision.",
    img: img.project6,
    image: img.project6,
    gallery: [img.project6, img.project3, img.service1],
  },
  {
    id: "p10",
    slug: "hospital-complex-design",
    title: "Hospital Complex Design",
    location: "KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "Healthcare complex planning with departmental zoning, patient and service circulation separation, and code-compliant structural design.",
    blurb: "Healthcare complex planning with departmental zoning and code-compliant design.",
    img: img.service1,
    image: img.service1,
    gallery: [img.service1, img.service2, img.project6],
  },
  {
    id: "p11",
    slug: "hospital-elevation-3d",
    title: "Hospital Elevation 3D",
    location: "KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Modern",
    desc: "3D elevation visualisation for the hospital complex — material palette, glazing rhythm and entrance canopy detailing.",
    blurb: "3D elevation visualization for the hospital complex and entrance canopy.",
    img: img.service2,
    image: img.service2,
    gallery: [img.service2, img.service1, img.project6],
  },
];

export const whyChooseUs = [
  {
    icon: "📐",
    num: "5+",
    label: "Years Experience",
    desc: "Half a decade of engineering excellence across Pakistan.",
  },
  {
    icon: "🏗️",
    num: "100+",
    label: "Projects Completed",
    desc: "From villas to commercial plazas, delivered on time.",
  },
  {
    icon: "🛡️",
    num: "100%",
    label: "Under One Roof",
    desc: "Architecture, structure, interior, surveying — all in one team.",
  },
  {
    icon: "🌐",
    num: "PKT",
    label: "Online Consultancy",
    desc: "Design and consultancy services across all of Pakistan.",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your plot, budget and requirements — in person or online, across Pakistan.",
  },
  {
    num: "02",
    title: "Design",
    desc: "2D plans, 3D elevations and structural drawings developed until you approve every detail.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "On-site project management with full QA/QC supervision and progress reporting.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "Final quality check, documentation and handover — ensuring every standard is met.",
  },
];

export const process = processSteps;

export const registrations = [
  {
    authority: "PEC",
    number: "Certified",
    title: "Pakistan Engineering Council Registered Professional Engineers",
  },
  {
    authority: "Survey",
    number: "GPS / Total Station",
    title: "Precision Topographical & Contour Land Surveying Team",
  },
  {
    authority: "Code",
    number: "IBC / BCP",
    title: "Building Code of Pakistan Earthquake Resistant RCC Structures",
  },
];

export const videoGallery = [
  {
    src: "/videogrally/video1.mp4",
    poster: img.hero1,
    title: "Project Showreel",
    caption: "Design to handover",
  },
  {
    src: "/videogrally/video2.mp4",
    poster: img.hero2,
    title: "Spanish Villa Walkthrough",
    caption: "Elevation study",
  },
  {
    src: "/videogrally/video3.mp4",
    poster: img.hero3,
    title: "Site Progress Film",
    caption: "Grey structure",
  },
  {
    src: "/videogrally/video4.mp4",
    poster: img.project4,
    title: "Interior Reveal",
    caption: "Finishing stage",
  },
];

export const posts = [
  {
    image: img.hero1,
    title: "Classical Luxury Villa Elevation",
    location: "Swat, KPK",
    tag: "Completed",
  },
  {
    image: img.hero2,
    title: "Neo-Classical Residence Construction",
    location: "Matta, KPK",
    tag: "Completed",
  },
  {
    image: img.project6,
    title: "Commercial Plaza Block Supervision",
    location: "Matta Bazaar",
    tag: "Under Construction",
  },
  {
    image: img.service1,
    title: "Hospital Complex Structural & Survey",
    location: "KPK",
    tag: "Completed",
  },
];

export const testimonials = [
  {
    quote:
      "CSD Engineering handled everything from the initial land survey to the complete structural design and 3D elevation. Their team was professional, accurate, and always on site.",
    name: "Dr. Tariq Khan",
    role: "Villa Owner · Swat Valley",
  },
  {
    quote:
      "The convenience of having architecture, earthquake-proof RCC structure, and land surveying under one roof in Matta made all the difference. Delivered on schedule.",
    name: "Muhammad Usman",
    role: "Commercial Plaza Developer · Matta",
  },
  {
    quote:
      "Precision and transparent communication from day one. Their online consultancy and drawings were so detailed that construction proceeded without a single hitch.",
    name: "Engr. Sohail Ahmad",
    role: "Residence Client · KPK",
  },
];
