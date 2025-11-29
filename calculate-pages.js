/**
 * Script to calculate total pages and generate all links
 * Run with: node calculate-pages.js
 */

const fs = require('fs');

// Define the data inline since we can't use TypeScript imports
const seoServices = [
  { slug: 'technical-seo', name: 'Technical SEO' },
  { slug: 'local-seo', name: 'Local SEO' },
  { slug: 'ecommerce-seo', name: 'E-commerce SEO' },
  { slug: 'content-seo', name: 'Content SEO' },
  { slug: 'link-building', name: 'Link Building' },
  { slug: 'on-page-seo', name: 'On-Page SEO' },
  { slug: 'off-page-seo', name: 'Off-Page SEO' },
  { slug: 'seo-audit', name: 'SEO Audit' },
  { slug: 'keyword-research', name: 'Keyword Research' },
  { slug: 'competitor-analysis', name: 'Competitor Analysis' }
];

const industries = [
  { slug: 'appliance-repair-seo', name: 'Appliance Repair SEO' },
  { slug: 'carpet-cleaning-seo', name: 'Carpet Cleaning SEO' },
  { slug: 'gutter-seo', name: 'Gutter SEO' },
  { slug: 'plumbing-seo', name: 'Plumbing SEO' },
  { slug: 'siding-seo', name: 'Siding SEO' },
  { slug: 'bathroom-remodeling-seo', name: 'Bathroom Remodeling SEO' },
  { slug: 'dumpster-rental-seo', name: 'Dumpster Rental SEO' },
  { slug: 'home-security-seo', name: 'Home Security SEO' },
  { slug: 'mold-remediation-seo', name: 'Mold Remediation SEO' },
  { slug: 'walk-in-tubs-seo', name: 'Walk-In Tubs SEO' },
  { slug: 'kitchen-remodeling-seo', name: 'Kitchen Remodeling SEO' },
  { slug: 'electrician-seo', name: 'Electrician SEO' },
  { slug: 'hvac-seo', name: 'HVAC SEO' },
  { slug: 'roofing-seo', name: 'Roofing SEO' },
  { slug: 'water-damage-seo', name: 'Water Damage SEO' },
  { slug: 'flooring-seo', name: 'Flooring SEO' },
  { slug: 'garage-door-seo', name: 'Garage Door SEO' },
  { slug: 'pest-control-seo', name: 'Pest Control SEO' },
  { slug: 'self-storage-seo', name: 'Self Storage SEO' },
  { slug: 'fire-damage-seo', name: 'Fire Damage SEO' }
];

const cmsPlatforms = [
  { slug: 'wordpress-seo', name: 'WordPress SEO' },
  { slug: 'shopify-seo', name: 'Shopify SEO' },
  { slug: 'wix-seo', name: 'Wix SEO' },
  { slug: 'squarespace-seo', name: 'Squarespace SEO' },
  { slug: 'webflow-seo', name: 'Webflow SEO' },
  { slug: 'magento-seo', name: 'Magento SEO' },
  { slug: 'drupal-seo', name: 'Drupal SEO' },
  { slug: 'joomla-seo', name: 'Joomla SEO' }
];

// Read countries from locations.ts by parsing it
const locationsContent = fs.readFileSync('./data/locations.ts', 'utf8');

// Extract country definitions using regex
const countries = [];
const countryMatches = locationsContent.matchAll(/{\s*name:\s*"([^"]+)",\s*code:\s*"([^"]+)",\s*slug:\s*"([^"]+)",\s*flag:\s*"([^"]+)"[^}]*cities:\s*createCities\(\[\s*([^\]]+)\s*\]\)/gs);

for (const match of countryMatches) {
  const name = match[1];
  const code = match[2];
  const slug = match[3];
  const flag = match[4];
  const citiesStr = match[5];
  
  // Extract city names from the cities array
  const cityNames = citiesStr.match(/"([^"]+)"/g)?.map(s => s.replace(/"/g, '')) || [];
  const cities = cityNames.map(cityName => ({
    name: cityName,
    slug: cityName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/'/g, '')
  }));
  
  countries.push({ name, code, slug, flag, cities });
}

const BASE_URL = 'https://adeelahmad.com';
let allLinks = [];
let pageCount = {
  static: 0,
  seoServices: 0,
  industries: 0,
  cmsPlatforms: 0,
  countryPages: 0,
  countryServicePages: 0,
  cityServicePages: 0,
  total: 0
};

// 1. Static pages
const staticPages = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
  { path: '/case-studies', name: 'Case Studies' },
  { path: '/industries', name: 'Industries' }
];

staticPages.forEach(page => {
  allLinks.push(`${BASE_URL}${page.path}`);
  pageCount.static++;
});

// 2. SEO Service pages (/services/technical-seo, etc.)
seoServices.forEach(service => {
  allLinks.push(`${BASE_URL}/services/${service.slug}`);
  pageCount.seoServices++;
});

// 3. Industry pages (/services/appliance-repair-seo, etc.)
industries.forEach(industry => {
  allLinks.push(`${BASE_URL}/services/${industry.slug}`);
  pageCount.industries++;
});

// 4. CMS Platform pages (/services/wordpress-seo, etc.)
cmsPlatforms.forEach(platform => {
  allLinks.push(`${BASE_URL}/services/${platform.slug}`);
  pageCount.cmsPlatforms++;
});

// 5. Country pages (/pk, /us, /uk, etc.)
countries.forEach(country => {
  allLinks.push(`${BASE_URL}/${country.slug}`);
  pageCount.countryPages++;
});

// 6. Country + Service pages (/pk/technical-seo, etc.)
countries.forEach(country => {
  seoServices.forEach(service => {
    allLinks.push(`${BASE_URL}/${country.slug}/${service.slug}`);
    pageCount.countryServicePages++;
  });
  
  industries.forEach(industry => {
    allLinks.push(`${BASE_URL}/${country.slug}/${industry.slug}`);
    pageCount.countryServicePages++;
  });
  
  cmsPlatforms.forEach(platform => {
    allLinks.push(`${BASE_URL}/${country.slug}/${platform.slug}`);
    pageCount.countryServicePages++;
  });
});

// 7. City + Service pages (/pk/lahore/technical-seo, etc.)
countries.forEach(country => {
  country.cities.forEach(city => {
    seoServices.forEach(service => {
      allLinks.push(`${BASE_URL}/${country.slug}/${city.slug}/${service.slug}`);
      pageCount.cityServicePages++;
    });
    
    industries.forEach(industry => {
      allLinks.push(`${BASE_URL}/${country.slug}/${city.slug}/${industry.slug}`);
      pageCount.cityServicePages++;
    });
  });
});

// Calculate total
pageCount.total = pageCount.static + pageCount.seoServices + pageCount.industries + 
                  pageCount.cmsPlatforms + pageCount.countryPages + 
                  pageCount.countryServicePages + pageCount.cityServicePages;

// Summary
console.log('\n========================================');
console.log('   WEBSITE PAGE COUNT SUMMARY');
console.log('========================================\n');
console.log(`Data Summary:`);
console.log(`  - Countries: ${countries.length}`);
console.log(`  - Total Cities: ${countries.reduce((sum, c) => sum + c.cities.length, 0)}`);
console.log(`  - SEO Services: ${seoServices.length}`);
console.log(`  - Industries: ${industries.length}`);
console.log(`  - CMS Platforms: ${cmsPlatforms.length}`);
console.log('\n----------------------------------------\n');
console.log(`Page Breakdown:`);
console.log(`  Static Pages:           ${pageCount.static.toLocaleString()}`);
console.log(`  SEO Service Pages:      ${pageCount.seoServices.toLocaleString()}`);
console.log(`  Industry Pages:         ${pageCount.industries.toLocaleString()}`);
console.log(`  CMS Platform Pages:     ${pageCount.cmsPlatforms.toLocaleString()}`);
console.log(`  Country Pages:          ${pageCount.countryPages.toLocaleString()}`);
console.log(`  Country+Service Pages:  ${pageCount.countryServicePages.toLocaleString()}`);
console.log(`  City+Service Pages:     ${pageCount.cityServicePages.toLocaleString()}`);
console.log('\n========================================');
console.log(`  TOTAL PAGES:            ${pageCount.total.toLocaleString()}`);
console.log('========================================\n');

// Write all links to a text file
fs.writeFileSync('./all-website-links.txt', allLinks.join('\n'), 'utf8');
console.log(`✅ All ${allLinks.length.toLocaleString()} links saved to: all-website-links.txt\n`);

// Generate sitemap XML
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

allLinks.forEach((url, index) => {
  let priority = '0.5';
  let changefreq = 'weekly';
  
  if (url === BASE_URL || url === `${BASE_URL}/`) {
    priority = '1.0';
    changefreq = 'daily';
  } else if (url.includes('/services/') && url.split('/').length === 5) {
    priority = '0.9';
  } else if (url.split('/').length === 4) { // Country pages
    priority = '0.85';
  } else if (url.split('/').length === 5) { // Country + Service
    priority = '0.8';
  } else if (url.split('/').length === 6) { // City + Service
    priority = '0.75';
  }
  
  sitemapXml += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

sitemapXml += `</urlset>`;

fs.writeFileSync('./public/sitemap-generated.xml', sitemapXml, 'utf8');
console.log(`✅ Sitemap saved to: public/sitemap-generated.xml\n`);

// Also create a categorized links file
let categorizedLinks = `# WEBSITE LINKS - CATEGORIZED
# Generated: ${new Date().toISOString()}
# Total Pages: ${pageCount.total.toLocaleString()}

================================================================================
STATIC PAGES (${pageCount.static})
================================================================================
`;

staticPages.forEach(page => {
  categorizedLinks += `${BASE_URL}${page.path}\n`;
});

categorizedLinks += `
================================================================================
SEO SERVICE PAGES (${pageCount.seoServices})
================================================================================
`;

seoServices.forEach(service => {
  categorizedLinks += `${BASE_URL}/services/${service.slug}\n`;
});

categorizedLinks += `
================================================================================
INDUSTRY PAGES (${pageCount.industries})
================================================================================
`;

industries.forEach(industry => {
  categorizedLinks += `${BASE_URL}/services/${industry.slug}\n`;
});

categorizedLinks += `
================================================================================
CMS PLATFORM PAGES (${pageCount.cmsPlatforms})
================================================================================
`;

cmsPlatforms.forEach(platform => {
  categorizedLinks += `${BASE_URL}/services/${platform.slug}\n`;
});

categorizedLinks += `
================================================================================
COUNTRY PAGES (${pageCount.countryPages})
================================================================================
`;

countries.forEach(country => {
  categorizedLinks += `${BASE_URL}/${country.slug} (${country.name})\n`;
});

categorizedLinks += `
================================================================================
COUNTRY + SERVICE PAGES (${pageCount.countryServicePages})
================================================================================
`;

countries.forEach(country => {
  categorizedLinks += `\n--- ${country.name} (${country.slug}) ---\n`;
  seoServices.forEach(service => {
    categorizedLinks += `${BASE_URL}/${country.slug}/${service.slug}\n`;
  });
  industries.slice(0, 5).forEach(industry => {
    categorizedLinks += `${BASE_URL}/${country.slug}/${industry.slug}\n`;
  });
  categorizedLinks += `... and ${industries.length - 5 + cmsPlatforms.length} more\n`;
});

categorizedLinks += `
================================================================================
CITY + SERVICE PAGES (${pageCount.cityServicePages})
Sample URLs by Country:
================================================================================
`;

countries.slice(0, 5).forEach(country => {
  categorizedLinks += `\n--- ${country.name} ---\n`;
  categorizedLinks += `Cities: ${country.cities.length}\n`;
  categorizedLinks += `Example: ${BASE_URL}/${country.slug}/${country.cities[0]?.slug || 'city'}/technical-seo\n`;
  categorizedLinks += `Total pages for ${country.name}: ${country.cities.length * (seoServices.length + industries.length)}\n`;
});

categorizedLinks += `\n... and ${countries.length - 5} more countries\n`;

fs.writeFileSync('./all-website-links-categorized.txt', categorizedLinks, 'utf8');
console.log(`✅ Categorized links saved to: all-website-links-categorized.txt\n`);
