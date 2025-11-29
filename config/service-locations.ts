import { countryCodes, getCountryFromCode } from './country-codes'

export { countryCodes, getCountryFromCode }

export interface City {
  name: string
  slug: string
}

const citiesByCountry: Record<string, City[]> = {
  'pakistan': [
    { name: 'Karachi', slug: 'karachi' },
    { name: 'Lahore', slug: 'lahore' },
    { name: 'Islamabad', slug: 'islamabad' },
    { name: 'Rawalpindi', slug: 'rawalpindi' },
    { name: 'Faisalabad', slug: 'faisalabad' },
    { name: 'Multan', slug: 'multan' },
    { name: 'Peshawar', slug: 'peshawar' },
    { name: 'Quetta', slug: 'quetta' },
    { name: 'Sialkot', slug: 'sialkot' },
    { name: 'Gujranwala', slug: 'gujranwala' }
  ],
  'united-states': [
    { name: 'New York', slug: 'new-york' },
    { name: 'Los Angeles', slug: 'los-angeles' },
    { name: 'Chicago', slug: 'chicago' },
    { name: 'Houston', slug: 'houston' },
    { name: 'Phoenix', slug: 'phoenix' },
    { name: 'Philadelphia', slug: 'philadelphia' },
    { name: 'San Antonio', slug: 'san-antonio' },
    { name: 'San Diego', slug: 'san-diego' },
    { name: 'Dallas', slug: 'dallas' },
    { name: 'San Jose', slug: 'san-jose' }
  ],
  'united-kingdom': [
    { name: 'London', slug: 'london' },
    { name: 'Manchester', slug: 'manchester' },
    { name: 'Birmingham', slug: 'birmingham' },
    { name: 'Leeds', slug: 'leeds' },
    { name: 'Glasgow', slug: 'glasgow' },
    { name: 'Liverpool', slug: 'liverpool' },
    { name: 'Edinburgh', slug: 'edinburgh' },
    { name: 'Bristol', slug: 'bristol' },
    { name: 'Newcastle', slug: 'newcastle' },
    { name: 'Sheffield', slug: 'sheffield' }
  ],
  'canada': [
    { name: 'Toronto', slug: 'toronto' },
    { name: 'Montreal', slug: 'montreal' },
    { name: 'Vancouver', slug: 'vancouver' },
    { name: 'Calgary', slug: 'calgary' },
    { name: 'Edmonton', slug: 'edmonton' },
    { name: 'Ottawa', slug: 'ottawa' },
    { name: 'Winnipeg', slug: 'winnipeg' },
    { name: 'Quebec City', slug: 'quebec-city' },
    { name: 'Hamilton', slug: 'hamilton' },
    { name: 'Halifax', slug: 'halifax' }
  ]
}

export function getCitiesByCountry(country: string): City[] {
  return citiesByCountry[country.toLowerCase().replace(/\s+/g, '-')] || []
}

export function getAllServiceLocations() {
  return Object.entries(citiesByCountry).flatMap(([country, cities]) => 
    cities.map(city => ({ country, city: city.slug }))
  )
}

export const serviceTypes = {
  'technical-seo': { name: 'Technical SEO', slug: 'technical-seo', description: 'Website optimization, speed improvements, and technical audits' },
  'local-seo': { name: 'Local SEO', slug: 'local-seo', description: 'Google Business Profile optimization and local citations' },
  'ecommerce-seo': { name: 'E-commerce SEO', slug: 'ecommerce-seo', description: 'Product optimization and conversion strategies' },
  'content-seo': { name: 'Content SEO', slug: 'content-seo', description: 'SEO-optimized content creation and strategy' },
  'link-building': { name: 'Link Building', slug: 'link-building', description: 'High-quality backlinks and authority building' },
  'on-page-seo': { name: 'On-Page SEO', slug: 'on-page-seo', description: 'Content optimization and meta tag improvements' },
  'off-page-seo': { name: 'Off-Page SEO', slug: 'off-page-seo', description: 'External optimization and brand building' },
  'seo-audit': { name: 'SEO Audit', slug: 'seo-audit', description: 'Comprehensive website SEO analysis' },
  'keyword-research': { name: 'Keyword Research', slug: 'keyword-research', description: 'Target keyword identification and analysis' },
  'competitor-analysis': { name: 'Competitor Analysis', slug: 'competitor-analysis', description: 'Competitor SEO strategy research' }
}
