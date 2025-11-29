import React, { ReactNode } from 'react';

export interface Industry {
  name: string;
  slug: string;
  description: string;
  icon: ReactNode;
}

// Helper function to create SVG icons
const createIcon = (path: string, rule?: 'evenodd' | 'nonzero') => 
  React.createElement('svg', {
    className: 'w-8 h-8',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, React.createElement('path', {
    fillRule: rule,
    clipRule: rule,
    d: path
  }));

const createIconMulti = (paths: Array<{d: string, rule?: 'evenodd' | 'nonzero'}>) => 
  React.createElement('svg', {
    className: 'w-8 h-8',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, ...paths.map(p => React.createElement('path', {
    fillRule: p.rule,
    clipRule: p.rule,
    d: p.d
  })));

export const industries: Industry[] = [
  {
    name: "Appliance Repair",
    slug: "appliance-repair-seo",
    description: "Expert SEO for appliance repair businesses. Dominate local search for refrigerator repair, washer dryer repair, dishwasher repair, and emergency appliance services.",
    icon: createIcon("M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z", "evenodd")
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning-seo",
    description: "Expert SEO for carpet cleaning companies. Rank higher for carpet cleaning near me, steam cleaning, upholstery cleaning, and stain removal services.",
    icon: createIcon("M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z")
  },
  {
    name: "Gutter Installation & Maintenance",
    slug: "gutter-seo",
    description: "Expert SEO for gutter companies. Dominate local search for gutter installation, seamless gutters, gutter guards, and gutter cleaning services.",
    icon: createIcon("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
  },
  {
    name: "Plumbing Services",
    slug: "plumbing-seo",
    description: "Expert SEO for plumbers. Rank higher for plumber near me, emergency plumbing, drain cleaning, water heater repair, and residential plumbing services.",
    icon: createIcon("M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", "evenodd")
  },
  {
    name: "Siding Services",
    slug: "siding-seo",
    description: "Expert SEO for siding contractors. Dominate local search for vinyl siding, fiber cement siding, James Hardie, and siding installation services.",
    icon: createIcon("M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z", "evenodd")
  },
  {
    name: "Bathroom Remodeling",
    slug: "bathroom-remodeling-seo",
    description: "Expert SEO for bathroom remodelers. Rank higher for bathroom renovation, shower installation, tub replacement, and bathroom design services.",
    icon: createIcon("M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z", "evenodd")
  },
  {
    name: "Dumpster Rental",
    slug: "dumpster-rental-seo",
    description: "Expert SEO for dumpster rental companies. Dominate local search for roll-off dumpsters, construction dumpsters, and junk removal services.",
    icon: createIconMulti([{d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}, {d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z", rule: "evenodd"}])
  },
  {
    name: "Home Security Systems",
    slug: "home-security-seo",
    description: "Expert SEO for security companies. Rank higher for home security systems, alarm installation, smart home security, and surveillance cameras.",
    icon: createIcon("M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z", "evenodd")
  },
  {
    name: "Mold Remediation",
    slug: "mold-remediation-seo",
    description: "Expert SEO for mold remediation companies. Dominate local search for mold removal, mold testing, black mold remediation, and mold inspection services.",
    icon: createIcon("M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z", "evenodd")
  },
  {
    name: "Walk-In Tubs Installation",
    slug: "walk-in-tubs-seo",
    description: "Expert SEO for walk-in tub installers. Rank higher for walk-in tubs, accessible bathtubs, senior bathroom solutions, and therapeutic tub installation.",
    icon: createIcon("M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z")
  },
  {
    name: "Kitchen Remodeling",
    slug: "kitchen-remodeling-seo",
    description: "Expert SEO for kitchen remodelers. Dominate local search for kitchen renovation, cabinet installation, countertop replacement, and modern kitchen design.",
    icon: createIcon("M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z", "evenodd")
  },
  {
    name: "Electrician Services",
    slug: "electrician-seo",
    description: "Expert SEO for electricians. Dominate local search for electrician near me, electrical repair, panel upgrades, and emergency electrical services.",
    icon: createIcon("M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z", "evenodd")
  },
  {
    name: "HVAC Services",
    slug: "hvac-seo",
    description: "Expert SEO for HVAC companies. Rank higher for AC repair near me, heating services, furnace installation, and HVAC maintenance.",
    icon: createIcon("M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z", "evenodd")
  },
  {
    name: "Roofing Contractors",
    slug: "roofing-seo",
    description: "Expert SEO for roofers. Dominate local search for roof repair near me, roof replacement, storm damage repair, and commercial roofing services.",
    icon: createIcon("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
  },
  {
    name: "Water Damage Restoration",
    slug: "water-damage-seo",
    description: "Expert SEO for water damage companies. Rank higher for water damage restoration near me, flood cleanup, emergency water extraction, and mitigation services.",
    icon: createIcon("M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z", "evenodd")
  },
  {
    name: "Carpet & Flooring Installation",
    slug: "flooring-seo",
    description: "Expert SEO for flooring companies. Dominate local search for flooring installation, hardwood floors, LVP, tile, and carpet installation near me.",
    icon: createIcon("M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z")
  },
  {
    name: "Garage Door Repair & Opener Services",
    slug: "garage-door-seo",
    description: "Expert SEO for garage door companies. Rank higher for garage door repair near me, opener installation, spring replacement, and emergency services.",
    icon: createIcon("M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z")
  },
  {
    name: "Pest Control Services",
    slug: "pest-control-seo",
    description: "Expert SEO for pest control companies. Dominate local search for pest control near me, exterminator services, termite treatment, and rodent removal.",
    icon: createIcon("M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "evenodd")
  },
  {
    name: "Self Storage Services",
    slug: "self-storage-seo",
    description: "Expert SEO for self storage facilities. Rank higher for storage units near me, climate controlled storage, RV storage, and boat storage services.",
    icon: createIconMulti([{d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}, {d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z", rule: "evenodd"}])
  },
  {
    name: "Fire Damage Restoration",
    slug: "fire-damage-seo",
    description: "Expert SEO for fire restoration companies. Dominate local search for fire damage restoration near me, smoke damage cleanup, and soot removal services.",
    icon: createIcon("M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z", "evenodd")
  },
  {
    name: "Healthcare SEO",
    slug: "healthcare-seo",
    description: "Expert SEO for healthcare providers. Dominate local search for medical practices, hospitals, clinics, and healthcare services. HIPAA-compliant strategies for patient acquisition.",
    icon: createIcon("M9 2a1 1 0 000 2h2a1 1 0 100-2H9z M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z", "evenodd")
  },
  {
    name: "Law Firm SEO",
    slug: "law-firm-seo",
    description: "Expert SEO for attorneys and law firms. Rank higher for legal services, personal injury lawyer near me, estate planning attorney, and specialized legal practice areas.",
    icon: createIcon("M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z")
  },
  {
    name: "Real Estate SEO",
    slug: "real-estate-seo",
    description: "Expert SEO for real estate agents and brokers. Dominate local search for homes for sale, realtors near me, property listings, and real estate services.",
    icon: createIcon("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
  },
  {
    name: "SaaS SEO",
    slug: "saas-seo",
    description: "Expert SEO for SaaS companies. Rank higher for software solutions, subscription services, product-led growth, and technology platforms. Drive trials and conversions.",
    icon: createIcon("M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z", "evenodd")
  },
  {
    name: "Home Services SEO",
    slug: "home-services-seo",
    description: "Expert SEO for home service businesses. Dominate local search for general contractors, home improvement, renovation services, and residential service providers.",
    icon: createIcon("M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z")
  },
  {
    name: "B2B SEO",
    slug: "b2b-seo",
    description: "Expert SEO for B2B companies. Rank higher for enterprise solutions, business services, account-based marketing, and long sales cycle optimization. Drive qualified leads.",
    icon: createIcon("M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z")
  },
  {
    name: "Dental SEO",
    slug: "dental-seo",
    description: "Expert SEO for dental practices. Dominate local search for dentist near me, cosmetic dentistry, emergency dental services, and orthodontic care.",
    icon: createIcon("M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "evenodd")
  }
];
