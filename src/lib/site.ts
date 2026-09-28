import {
  site as siteDetails,
  services as serviceList,
  projects as projectList,
  whyChooseUs as whyList,
  processSteps as processList,
  img,
  showreelUrl as reelUrl,
} from "./site-data";

export const logoUrl = img.logo;
export const showreelUrl = reelUrl;

export const company = {
  name: siteDetails.name,
  short: siteDetails.short,
  brandSub: siteDetails.brandSub,
  tagline: siteDetails.tagline,
  since: siteDetails.since,
  estYear: siteDetails.estYear,
  phoneDisplay: siteDetails.phone,
  phoneTel: siteDetails.phoneTel,
  whatsapp: siteDetails.whatsapp,
  email: siteDetails.email,
  addressShort: siteDetails.addressShort,
  address: siteDetails.address,
  hours: siteDetails.hours,
  description: siteDetails.description,
  heroDesc: siteDetails.heroDesc,
  socials: [
    { label: "WhatsApp", href: siteDetails.whatsapp },
    { label: "Email", href: `mailto:${siteDetails.email}` },
    { label: "Call", href: `tel:${siteDetails.phone}` },
  ],
};

export const services = serviceList;
export const projects = projectList;
export const whyChooseUs = whyList;
export const process = processList;

export type Project = (typeof projectList)[number];
