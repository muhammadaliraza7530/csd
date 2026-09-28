/**
 * CSD Engineering Consultants - Site Data
 * Single source of truth for all site content, media, services, and projects.
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

  // Homes collection
  heroCourtyard: "/homes/hero-courtyard.jpg",
  heroLuxury: "/homes/hero-luxury.jpg",
  heroSpanish: "/homes/hero-spanish.jpg",
  heroVilla: "/homes/hero-villa.jpg",
  home1: "/homes/home-1.jpg",
  home2: "/homes/home-2.jpg",
  home3: "/homes/home-3.jpg",
  home4: "/homes/home-4.jpg",
  home5: "/homes/home-5.jpg",

  // Posts collection
  post1: "/posts/post-1.jpg",
  post2: "/posts/post-2.jpg",
  post3: "/posts/post-3.jpg",
  post4: "/posts/post-4.jpg",
  post5: "/posts/post-5.jpg",
  post6: "/posts/post-6.jpg",
  post7: "/posts/post-7.jpg",
  post8: "/posts/post-8.jpg",
  post9: "/posts/post-9.jpg",

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

export const showreelSources = ["/video/showreel.mp4", "/media/showreel.mp4"];
export const showreelUrl = showreelSources[0];

export const site = {
  name: "CSD Engineering Consultants",
  short: "CSD",
  brandSub: "Engineering Consultants",
  fullName: "CSD Engineering Consultants | Engineering Solutions for Your Dream Projects",
  tagline: "Engineering Solutions for Your Dream Projects",
  since: "Engineering Solutions Since 2018",
  estYear: "2018",
  logo: img.logo,
  address: "Main Bazaar Road, Swat Matta, District Swat, KPK, Pakistan, 19130",
  addressShort: "Swat Matta, KPK, Pakistan",
  email: "csdengineering12@gmail.com",
  phone: "0344-1297256",
  phoneTel: "+923441297256",
  whatsapp: "https://wa.me/923441297256",
  hours: "Mon–Sat: 9:00 AM – 6:00 PM",
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
  { value: "2018", label: "Established Year" },
  { value: "100+", label: "Projects Completed" },
  { value: "6+", label: "Years Experience" },
  { value: "6", label: "Core Disciplines" },
];

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  img: string;
  image?: string;
  category?: string;
  deliverables: string[];
  timeline: string;
}

export const services: ServiceItem[] = [
  {
    id: "architectural-design",
    num: "01",
    title: "Architectural Design",
    desc: "Complete 2D space planning, photorealistic 3D exterior elevations, and detailed architectural working drawings tailored for luxury villas, residences, commercial plazas, and institutional buildings.",
    img: img.hero1,
    image: img.hero1,
    category: "Architecture & Planning",
    deliverables: [
      "2D Furniture & Dimensioned Floor Plans",
      "Photorealistic 3D Front & Side Elevations (Day & Night Views)",
      "Working Drawings, Sections & Door/Window Schedules",
      "Plumbing, Sewerage & Electrical Layout Drawings",
    ],
    timeline: "7–14 Working Days",
  },
  {
    id: "structural-engineering",
    num: "02",
    title: "Structural Engineering",
    desc: "Seismic Zone-compliant earthquake-resistant RCC and steel structure design engineered using ETABS and SAFE according to the Building Code of Pakistan (BCP) and ACI standards.",
    img: img.project1,
    image: img.project1,
    category: "Structural & Seismic RCC",
    deliverables: [
      "3D Structural Analysis & Seismic Modelling (ETABS / SAFE)",
      "Foundation, Footing, Raft & Retaining Wall Details",
      "Column, Beam & Slab Reinforcement Working Drawings",
      "Bar Bending Schedules (BBS) & Steel Quantity Takeoffs",
    ],
    timeline: "7–10 Working Days",
  },
  {
    id: "interior-design",
    num: "03",
    title: "Interior Design",
    desc: "Bespoke 3D interior visualization, false ceiling geometries, ambient lighting layouts, kitchen/wardrobe cabinetry detailing, and curated material boards.",
    img: img.project4,
    image: img.project4,
    category: "Interiors & Visualization",
    deliverables: [
      "3D Interior Renders for Drawing, Lounge & Bedrooms",
      "Reflected False Ceiling & Cove Lighting Plans",
      "Custom Kitchen, Media Wall & Wardrobe Detailing",
      "Flooring Tile Patterns & Material Selection Guide",
    ],
    timeline: "10–15 Working Days",
  },
  {
    id: "landscape-design",
    num: "04",
    title: "Landscape & Exterior Design",
    desc: "Courtyard planning, grand boundary wall and gate design, driveway grading, outdoor seating pavilions, and architectural facade illumination.",
    img: img.project5,
    image: img.project5,
    category: "Exterior & Masterplanning",
    deliverables: [
      "Boundary Wall, Main Gate & Entrance Canopy Design",
      "Lawn, Courtyard & Driveway Hardscape Layout",
      "Exterior Facade & Garden Lighting Design",
      "Drainage Slope & Retaining Terrace Planning",
    ],
    timeline: "5–10 Working Days",
  },
  {
    id: "land-surveying",
    num: "05",
    title: "Precision Land Surveying",
    desc: "High-accuracy digital land surveying using Dual-Frequency RTK GPS, Total Station, and Auto Level for plot demarcation, topographical mapping, and road/building layout.",
    img: img.service1,
    image: img.service1,
    category: "Geomatics & Field Survey",
    deliverables: [
      "Topographical & Contour Mapping for Hilly/Flat Plots",
      "Boundary Demarcation & Area Verification (Marla / Kanal)",
      "On-Site Grid Line, Column & Foundation Layout Marking",
      "Cut-and-Fill Earthwork Volume Calculations",
    ],
    timeline: "1–3 Working Days",
  },
  {
    id: "project-management",
    num: "06",
    title: "Project Management & QA/QC",
    desc: "Dedicated on-site construction supervision, steel and concrete quality inspection, bill of quantities (BOQ) preparation, and turnkey project execution.",
    img: img.service2,
    image: img.service2,
    category: "Construction & Supervision",
    deliverables: [
      "Detailed Bill of Quantities (BOQ) & Cost Estimation",
      "Pre-Pour Steel Reinforcement & Shuttering Inspection",
      "Concrete Slump, Cube Testing & Material Quality Control",
      "Weekly Site Progress Reports for Local & Overseas Clients",
    ],
    timeline: "Full Project Lifecycle",
  },
];

export const specializedCapabilities = [
  {
    num: "01",
    title: "BOQ & Accurate Cost Estimation",
    desc: "Detailed item-wise material and labor cost sheets (grey structure + finishing) so you know exact cement, steel, brick, and finishing budgets before breaking ground.",
  },
  {
    num: "02",
    title: "TMA & Authority Approval Drawings",
    desc: "Complete submission blueprints compliant with Tehsil Municipal Administration (TMA), Cantonment, and housing society bylaws across KPK and Pakistan.",
  },
  {
    num: "03",
    title: "Hilly Terrain & Retaining Structures",
    desc: "Specialized terraced architecture and multi-level RCC retaining wall engineering suited for sloped plots in Swat Valley, Malam Jabba, Kalamazoo, and Dir.",
  },
  {
    num: "04",
    title: "Overseas Client Turnkey Supervision",
    desc: "Dedicated WhatsApp video updates, drone/site photography, and milestone billing verification for overseas Pakistanis building homes in KPK.",
  },
];

export const servicePackages = [
  {
    name: "Architectural Design Package",
    subtitle: "Ideal for residential plots needing complete planning & 3D visuals",
    tag: "Most Popular for Homes",
    features: [
      "2D Architectural Floor Plans (All Floors)",
      "Photorealistic 3D Front & Corner Elevations",
      "Working Drawings & Door/Window Schedules",
      "Electrical & Plumbing Layout Drawings",
      "Up to 3 Design Revisions Included",
    ],
  },
  {
    name: "Complete Engineering Package",
    subtitle: "Architecture + Earthquake-Resistant Structural Engineering + BOQ",
    tag: "Recommended for Multi-Storey & Villas",
    featured: true,
    features: [
      "Everything in Architectural Design Package",
      "Complete Seismic RCC Structural Drawings (ETABS)",
      "Foundation, Column, Beam & Slab Steel Detailing",
      "Detailed Bill of Quantities (BOQ) & Material Estimate",
      "TMA / Authority Submission Drawing Set",
    ],
  },
  {
    name: "Turnkey Survey & Supervision",
    subtitle: "End-to-end site layout, engineering design, and on-site QA/QC",
    tag: "For Plazas, Hospitals & Custom Estates",
    features: [
      "Total Station / GPS Topographical & Layout Survey",
      "Full Architectural, Structural & Interior Package",
      "Regular On-Site Engineer Inspections at Every Pour",
      "Contractor Bill Verification & Quality Assurance",
      "Dedicated Project Manager & Weekly Progress Reports",
    ],
  },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  badge: "COMPLETED" | "UNDER CONSTRUCTION";
  status: "COMPLETED" | "UNDER CONSTRUCTION";
  category: "Residential" | "Commercial" | "Healthcare";
  style?: string;
  area: string;
  floors: string;
  structuralSystem: string;
  year: string;
  deliverables: string[];
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
    category: "Residential",
    style: "Classical",
    area: "1.5 Kanal (6,750 sq.ft Covered)",
    floors: "Ground + First Floor + Mumty",
    structuralSystem: "Seismic Zone-3 RCC Frame Structure",
    year: "2024",
    deliverables: [
      "Architectural 2D & 3D Elevation",
      "RCC Structural Detailing",
      "Interior & Lighting Design",
      "Topographical & Layout Survey",
    ],
    desc: "A double-height classical villa with hand-detailed cornices, arched fenestration, Corinthian portico columns, and a symmetrical front elevation. Complete architectural, structural, and interior package delivered by our in-house team in Swat.",
    blurb:
      "A double-height classical villa with hand-detailed cornices and arched fenestration in Swat.",
    img: img.hero1,
    image: img.hero1,
    gallery: [img.hero1, img.heroLuxury, img.home1, img.post1],
  },
  {
    id: "p2",
    slug: "neo-classical-residence",
    title: "Neo-Classical Residence",
    location: "Matta, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Neo-Classical",
    area: "1 Kanal (4,800 sq.ft Covered)",
    floors: "Ground + First Floor",
    structuralSystem: "Earthquake-Resistant RCC Frame",
    year: "2024",
    deliverables: [
      "2D Space Planning",
      "3D Day & Night Exterior Renders",
      "Structural Engineering & BOQ",
      "On-Site Supervision",
    ],
    desc: "Neo-classical family residence in Matta combining a grand symmetrical facade with a modern, sunlit internal layout. Engineered with an earthquake-resistant RCC frame as per the Building Code of Pakistan.",
    blurb:
      "Neo-classical family residence combining a traditional facade with a modern open layout.",
    img: img.hero2,
    image: img.hero2,
    gallery: [img.hero2, img.heroVilla, img.home2, img.post2],
  },
  {
    id: "p3",
    slug: "grand-heritage-home",
    title: "Grand Heritage Home",
    location: "Swat Valley, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Heritage",
    area: "2 Kanal Estate (8,200 sq.ft Covered)",
    floors: "Basement + Ground + First Floor",
    structuralSystem: "RCC Frame with Stone Retaining Plinth",
    year: "2023",
    deliverables: [
      "Contour Survey & Terraced Grading",
      "Architectural & Structural Design",
      "Landscape & Forecourt Planning",
      "Full QA/QC Site Supervision",
    ],
    desc: "Heritage-inspired residence set in Swat Valley with dressed stone plinth, deep verandas, and a landscaped forecourt. Site supervised end-to-end with full QA/QC reporting.",
    blurb: "Heritage-inspired home in Swat Valley with stone plinth and deep verandas.",
    img: img.hero3,
    image: img.hero3,
    gallery: [img.hero3, img.heroCourtyard, img.project4, img.project5],
  },
  {
    id: "p4",
    slug: "traditional-haveli",
    title: "Spanish Courtyard Haveli",
    location: "Matta, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Spanish",
    area: "2 Kanal (7,500 sq.ft Covered)",
    floors: "Ground + First Floor",
    structuralSystem: "RCC Frame & Arched Masonry Detailing",
    year: "2023",
    deliverables: [
      "Courtyard Masterplanning",
      "3D Spanish Elevation & Roof Tile Detailing",
      "Structural & MEP Drawings",
      "Interior Finishing Schedules",
    ],
    desc: "Courtyard-centred Spanish haveli planning with warm terracotta roof tiles, traditional proportions, jali screens, and a private family wing. Includes complete structural detailing and interior finishing schedules.",
    blurb: "Courtyard-centred haveli planning with traditional proportions and jali screens.",
    img: img.project1,
    image: img.project1,
    gallery: [img.project1, img.heroSpanish, img.home3, img.post3],
  },
  {
    id: "p5",
    slug: "modern-residential-plaza",
    title: "Modern Residential Plaza",
    location: "Mingora, Swat",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Commercial",
    style: "Modern",
    area: "14,500 sq.ft Total Covered Area",
    floors: "Basement + Ground + 4 Storeys",
    structuralSystem: "Multi-Storey Seismic RCC Frame & Raft Foundation",
    year: "2024",
    deliverables: [
      "Commercial Space Optimization",
      "ETABS Seismic Structural Analysis",
      "Parking & Vertical Circulation Core",
      "MEP & Fire Safety Coordination",
    ],
    desc: "Multi-unit residential and commercial plaza with efficient elevator/stair circulation cores, basement parking layout, and complete MEP services coordination across all floors.",
    blurb: "Multi-unit residential plaza with efficient circulation cores and parking layout.",
    img: img.project2,
    image: img.project2,
    gallery: [img.project2, img.project3, img.project6, img.post4],
  },
  {
    id: "p6",
    slug: "mixed-use-commercial",
    title: "Mixed-Use Commercial Center",
    location: "Matta Bazaar, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Commercial",
    style: "Modern",
    area: "18,000 sq.ft Total Covered Area",
    floors: "Lower Ground + Ground + 3 Floors",
    structuralSystem: "Heavy-Duty Commercial RCC Frame",
    year: "2023",
    deliverables: [
      "Retail Frontage & Facade Design",
      "Raft Foundation & Column Detailing",
      "Total Station Layout Marking",
      "Bill of Quantities (BOQ)",
    ],
    desc: "Ground-floor retail showrooms with corporate offices and residential apartments above in Matta Bazaar. Designed for maximum commercial frontage exposure with a durable, low-maintenance aluminum and glass facade.",
    blurb: "Ground-floor retail with residential and office floors above in Matta Bazaar.",
    img: img.project3,
    image: img.project3,
    gallery: [img.project3, img.project2, img.project6, img.post5],
  },
  {
    id: "p7",
    slug: "luxury-villa-night-view",
    title: "Luxury Villa — Night Illumination",
    location: "Swat, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Classical",
    area: "1 Kanal (5,100 sq.ft Covered)",
    floors: "Ground + First Floor",
    structuralSystem: "Seismic RCC Frame",
    year: "2024",
    deliverables: [
      "Exterior Facade Lighting Design",
      "3D Night-Time Architectural Renders",
      "Boundary Wall & Gate Illumination",
      "Electrical Load Distribution",
    ],
    desc: "Facade lighting study and night-time architectural render for a luxury villa in Swat — warm architectural grazing on fluted columns, cornice uplighting, and landscape pathway illumination.",
    blurb: "Facade lighting study and night-time render with column and landscape illumination.",
    img: img.project4,
    image: img.project4,
    gallery: [img.project4, img.hero1, img.home4, img.post6],
  },
  {
    id: "p8",
    slug: "multi-storey-residence",
    title: "Multi-Storey Family Residence",
    location: "Kabal, Swat",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Modern",
    area: "12 Marla (6,200 sq.ft Covered)",
    floors: "Ground + 2 Upper Storeys + Roof Terrace",
    structuralSystem: "Optimized RCC Structural Grid",
    year: "2024",
    deliverables: [
      "Multi-Family Independent Floor Plans",
      "3D Modern Elevation",
      "Structural Drawings & BBS",
      "Interior Ceiling & Lighting Plans",
    ],
    desc: "Multi-storey joint-family residence with independent apartment floors per family unit, shared panoramic roof terrace, and an optimized RCC structural grid.",
    blurb: "Multi-storey family residence with separate units and optimized RCC grid.",
    img: img.project5,
    image: img.project5,
    gallery: [img.project5, img.home5, img.project4, img.post7],
  },
  {
    id: "p9",
    slug: "commercial-plaza-block",
    title: "Commercial Plaza Block",
    location: "Matta, Swat",
    badge: "UNDER CONSTRUCTION",
    status: "UNDER CONSTRUCTION",
    category: "Commercial",
    style: "Modern",
    area: "22,000 sq.ft Total Covered Area",
    floors: "Basement + Ground + 4 Storeys",
    structuralSystem: "Seismic Zone-3 RCC Frame & Pile/Raft Foundation",
    year: "2025–2026",
    deliverables: [
      "Turnkey Site Supervision & QA/QC",
      "Total Station Grid & Column Layout",
      "Steel & Concrete Cube Testing",
      "Architectural & Structural Package",
    ],
    desc: "Major commercial plaza block currently under construction in Matta with ongoing site supervision, reinforcement inspection, concrete quality control, and weekly progress reporting from our project management team.",
    blurb: "Commercial block currently under construction with ongoing site supervision.",
    img: img.project6,
    image: img.project6,
    gallery: [img.project6, img.project3, img.service1, img.post8],
  },
  {
    id: "p10",
    slug: "hospital-complex-design",
    title: "Hospital Complex Masterplan",
    location: "KPK, Pakistan",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Healthcare",
    style: "Institutional",
    area: "36,000 sq.ft Healthcare Facility",
    floors: "Lower Ground + Ground + 3 Storeys",
    structuralSystem: "Importance Factor 1.25 Seismic Hospital RCC Frame",
    year: "2024",
    deliverables: [
      "OPD, Emergency, OT & Ward Zoning",
      "Seismic Importance-Class Structural Design",
      "Topographical & Site Grading Survey",
      "HVAC, Medical Gas & Ramp Circulation Plans",
    ],
    desc: "Comprehensive healthcare complex planning with strict departmental zoning, emergency ambulance access, separate patient and service circulation cores, stretcher ramps, and code-compliant seismic structural design.",
    blurb: "Healthcare complex planning with departmental zoning and code-compliant design.",
    img: img.service1,
    image: img.service1,
    gallery: [img.service1, img.service2, img.project6, img.post9],
  },
  {
    id: "p11",
    slug: "hospital-elevation-3d",
    title: "Medical Center 3D Elevation",
    location: "Swat, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Healthcare",
    style: "Modern Institutional",
    area: "28,000 sq.ft Covered Area",
    floors: "Ground + 3 Storeys",
    structuralSystem: "Seismic RCC Frame with Curtain Wall Glazing",
    year: "2024",
    deliverables: [
      "3D Exterior & Drop-Off Canopy Design",
      "Daylight & Glazing Rhythm Study",
      "Signage & Wayfinding Integration",
      "Complete Working Drawings",
    ],
    desc: "3D architectural elevation visualization for the medical complex — hygienic composite cladding palette, solar-control glazing rhythm, and dedicated emergency/OPD entrance canopy detailing.",
    blurb: "3D elevation visualization for the hospital complex and entrance canopy.",
    img: img.service2,
    image: img.service2,
    gallery: [img.service2, img.service1, img.project2, img.project3],
  },
  {
    id: "p12",
    slug: "spanish-mediterranean-estate",
    title: "Mediterranean Corner Villa",
    location: "Swat Valley, KPK",
    badge: "COMPLETED",
    status: "COMPLETED",
    category: "Residential",
    style: "Spanish",
    area: "1 Kanal Corner Plot (5,400 sq.ft)",
    floors: "Ground + First Floor + Roof Pavilion",
    structuralSystem: "RCC Frame with Pitched Barrel-Tile Roof",
    year: "2024",
    deliverables: [
      "Corner Plot Dual-Elevation Design",
      "Seismic RCC Structural Engineering",
      "Landscape & Pergola Detailing",
      "Complete Interior Design Package",
    ],
    desc: "Designed for a prime 1-Kanal corner plot, this Mediterranean residence showcases dual street elevations, wrought-iron balconies, arched loggias, and a landscaped wrap-around lawn.",
    blurb: "Prime 1-Kanal corner plot villa featuring dual street elevations and arched loggias.",
    img: img.heroSpanish,
    image: img.heroSpanish,
    gallery: [img.heroSpanish, img.heroCourtyard, img.home1, img.home3],
  },
];

export const whyChooseUs = [
  {
    icon: "📐",
    num: "6+",
    label: "Years Experience",
    desc: "Proven architectural and structural engineering excellence across KPK and Pakistan since 2018.",
  },
  {
    icon: "🏗️",
    num: "100+",
    label: "Projects Completed",
    desc: "From luxury classical villas to multi-storey plazas and hospitals, delivered on schedule.",
  },
  {
    icon: "🛡️",
    num: "100%",
    label: "Under One Roof",
    desc: "Architecture, seismic RCC structure, interior, and GPS/Total Station surveying in one team.",
  },
  {
    icon: "🌐",
    num: "24/7",
    label: "Online Consultancy",
    desc: "Seamless remote design, 3D walkthroughs, and site supervision for clients across Pakistan & abroad.",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Consultation & Site Survey",
    desc: "We analyze your plot dimensions, soil/topography, budget, and family or commercial requirements — in person or online.",
  },
  {
    num: "02",
    title: "2D Planning & 3D Elevation",
    desc: "Custom 2D floor plans and photorealistic 3D exterior/interior visualizations refined until you approve every detail.",
  },
  {
    num: "03",
    title: "Structural & MEP Engineering",
    desc: "Earthquake-resistant RCC structural drawings, bar bending schedules, electrical/plumbing layouts, and accurate BOQ.",
  },
  {
    num: "04",
    title: "Execution & QA/QC Handover",
    desc: "On-site Total Station layout marking, steel/concrete inspections, and supervision through final project handover.",
  },
];

export const process = processSteps;

export const registrations = [
  {
    authority: "PEC Registered",
    number: "Professional Engineers",
    title: "Pakistan Engineering Council Certified Civil & Structural Engineers",
  },
  {
    authority: "Digital Survey",
    number: "RTK GPS & Total Station",
    title: "Sub-Centimeter Precision Topographical, Contour & Layout Surveying",
  },
  {
    authority: "Seismic Code",
    number: "BCP / ACI-318 / IBC",
    title: "Earthquake-Resistant Zone-3 & Zone-4 RCC Structural Design",
  },
];

export const engineeringTools = [
  {
    category: "Structural Analysis",
    tools: "CSI ETABS, SAFE, SAP2000",
    detail: "3D dynamic seismic modeling, raft/footing analysis, and steel detailing.",
  },
  {
    category: "Architecture & BIM",
    tools: "AutoCAD, Autodesk Revit, SketchUp Pro",
    detail: "Precision 2D working blueprints, coordinated BIM models, and section detailing.",
  },
  {
    category: "3D Visualization",
    tools: "Lumion, V-Ray, Corona, 3ds Max",
    detail: "Photorealistic day/night exterior elevations, interior renders, and walkthroughs.",
  },
  {
    category: "Field Geomatics",
    tools: "Sokkia / Leica Total Station, RTK GNSS GPS, Auto Level",
    detail: "Topographical contouring, plot boundary demarcation, and column grid marking.",
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
    image: img.post1,
    title: "Classical Luxury Villa Elevation",
    location: "Swat, KPK",
    tag: "Completed",
  },
  {
    image: img.post2,
    title: "Neo-Classical Residence Construction",
    location: "Matta, KPK",
    tag: "Completed",
  },
  {
    image: img.post3,
    title: "Spanish Villa Arched Veranda",
    location: "Swat Valley",
    tag: "Completed",
  },
  {
    image: img.post4,
    title: "Modern Commercial Plaza Frontage",
    location: "Mingora, Swat",
    tag: "Completed",
  },
  {
    image: img.post5,
    title: "Mixed-Use Retail & Office Complex",
    location: "Matta Bazaar",
    tag: "Completed",
  },
  {
    image: img.post6,
    title: "Night Lighting & Facade Study",
    location: "Swat, KPK",
    tag: "Completed",
  },
  {
    image: img.post7,
    title: "Multi-Storey Family Residence",
    location: "Kabal, Swat",
    tag: "Completed",
  },
  {
    image: img.post8,
    title: "Commercial Plaza Block Supervision",
    location: "Matta, KPK",
    tag: "Under Construction",
  },
  {
    image: img.post9,
    title: "Hospital Complex Structural & Survey",
    location: "KPK",
    tag: "Completed",
  },
];

export const testimonials = [
  {
    quote:
      "CSD Engineering handled everything from the initial Total Station land survey to the complete earthquake-resistant structural design and 3D elevation. Their team was professional, accurate, and always available on site.",
    name: "Dr. Tariq Khan",
    role: "1.5 Kanal Villa Owner · Swat Valley",
  },
  {
    quote:
      "Having architecture, seismic RCC structural calculations, and land surveying under one roof in Matta saved us months of coordination. Our commercial plaza was engineered and supervised to perfection.",
    name: "Haji Muhammad Usman",
    role: "Commercial Plaza Developer · Matta Bazaar",
  },
  {
    quote:
      "As an overseas Pakistani, I relied on CSD Engineering for my family house in Swat. Their 3D renders, detailed BOQ cost estimate, and weekly WhatsApp video site reports gave me complete peace of mind.",
    name: "Engr. Sohail Ahmad",
    role: "Residential Client · KPK",
  },
];

export const faqs = [
  {
    q: "Do you provide services outside Swat Matta?",
    a: "Yes. While our main office and surveying team are based in Swat Matta, KPK, we conduct on-site surveying and construction supervision across Malakand Division (Mingora, Kabal, Khwazakhela, Dir, Buner) and provide complete online architectural, 3D elevation, and structural design services across all of Pakistan.",
  },
  {
    q: "Why is structural engineering important for homes and plazas in Swat & KPK?",
    a: "Swat and northern KPK lie in a high seismic activity zone (Zone 3 / Zone 4). Proper RCC structural design using ETABS ensures your columns, beams, foundations, and slabs are engineered to withstand earthquakes safely without wasting unnecessary steel.",
  },
  {
    q: "What is included in a complete house design package?",
    a: "Our complete package includes 2D architectural floor plans, photorealistic 3D exterior elevations (day and night views), earthquake-resistant RCC structural working drawings, plumbing/sewerage and electrical layouts, door/window schedules, and a detailed Bill of Quantities (BOQ).",
  },
  {
    q: "How can I get a cost estimate for my plot?",
    a: "Simply share your plot size (e.g., 5 Marla, 10 Marla, 1 Kanal, or commercial dimensions), location, and number of floors via WhatsApp at 0344-1297256 or through our Contact form, and our engineers will provide a free initial consultation and proposal.",
  },
];
