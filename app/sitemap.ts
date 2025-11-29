/**
 * Comprehensive sitemap generation
 * Generates sitemap for all pages, locations, industries, services, and CMS platforms
 */

import { MetadataRoute } from 'next'
import { countries } from '@/data/locations'
import { industries } from '@/data/industries'
import { seoServices } from '@/data/seoServices'
import { cmsPlatforms } from '@/data/cmsPlatforms'

// Add export config for static export
export const dynamic = 'force-static'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://adeelahmad.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []
  const now = new Date()

  // Homepage
  sitemap.push({
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'daily',
    priority: 1.0,
  })

  // Static pages
  const staticPages = [
    { path: '/services', priority: 0.9 },
    { path: '/contact', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/case-studies', priority: 0.7 },
  ]

  staticPages.forEach(page => {
    sitemap.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: page.priority,
    })
  })

  // Main SEO Service pages (e.g., /services/technical-seo)
  seoServices.forEach(service => {
    sitemap.push({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  // Main Industry pages (e.g., /services/appliance-repair-seo)
  industries.forEach(industry => {
    sitemap.push({
      url: `${BASE_URL}/services/${industry.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  // Main CMS Platform pages (e.g., /services/wordpress-seo)
  cmsPlatforms.forEach(platform => {
    sitemap.push({
      url: `${BASE_URL}/services/${platform.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Country pages and all nested routes
  countries.forEach(country => {
    const countryCode = country.code.toLowerCase()
    const countrySlug = country.slug || countryCode

    // Country main page (e.g., /pk)
    sitemap.push({
      url: `${BASE_URL}/${countrySlug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    })

    // Country-specific SEO service pages (e.g., /pk/technical-seo)
    seoServices.forEach(service => {
      sitemap.push({
        url: `${BASE_URL}/${countrySlug}/${service.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    })

    // Country-specific Industry pages (e.g., /pk/appliance-repair-seo)
    industries.forEach(industry => {
      sitemap.push({
        url: `${BASE_URL}/${countrySlug}/${industry.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.85,
      })
    })

    // Country-specific CMS platform pages (e.g., /pk/wordpress-seo)
    cmsPlatforms.forEach(platform => {
      sitemap.push({
        url: `${BASE_URL}/${countrySlug}/${platform.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    })

    // City pages (e.g., /pk/karachi)
    country.cities.forEach(city => {
      sitemap.push({
        url: `${BASE_URL}/${countrySlug}/${city.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      })

      // City-specific Industry pages (e.g., /pk/karachi/siding-seo)
      industries.forEach(industry => {
        sitemap.push({
          url: `${BASE_URL}/${countrySlug}/${city.slug}/${industry.slug}`,
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.9, // High priority for city-industry pages
        })
      })

      // City-specific SEO service pages (e.g., /pk/karachi/technical-seo)
      seoServices.forEach(service => {
        sitemap.push({
          url: `${BASE_URL}/${countrySlug}/${city.slug}/${service.slug}`,
          lastModified: now,
          changeFrequency: 'weekly',
          priority: 0.85,
        })
      })
    })
  })

  return sitemap
}
