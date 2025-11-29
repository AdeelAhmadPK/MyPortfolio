import { countries } from '@/data/locations'
import { industries } from '@/data/industries'
import { seoServices } from '@/data/seoServices'
import { cmsPlatforms } from '@/data/cmsPlatforms'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://adeelahmad.com'

export async function getSitemapChunks(chunkSize = 10000) {
  type SitemapItem = { url: string; lastModified: Date }
  const sitemap: SitemapItem[] = []
  const now = new Date()

  // Homepage
  sitemap.push({ url: BASE_URL, lastModified: now })

  // Static pages
  const staticPages = [
    '/services', '/contact', '/about', '/case-studies'
  ]
  staticPages.forEach(path => {
    sitemap.push({ url: `${BASE_URL}${path}`, lastModified: now })
  })

  seoServices.forEach(service => {
    sitemap.push({ url: `${BASE_URL}/services/${service.slug}`, lastModified: now })
  })
  industries.forEach(industry => {
    sitemap.push({ url: `${BASE_URL}/services/${industry.slug}`, lastModified: now })
  })
  cmsPlatforms.forEach(platform => {
    sitemap.push({ url: `${BASE_URL}/services/${platform.slug}`, lastModified: now })
  })

  countries.forEach(country => {
    const countryCode = country.code.toLowerCase()
    const countrySlug = country.slug || countryCode
    sitemap.push({ url: `${BASE_URL}/${countrySlug}`, lastModified: now })
    seoServices.forEach(service => {
      sitemap.push({ url: `${BASE_URL}/${countrySlug}/${service.slug}`, lastModified: now })
    })
    industries.forEach(industry => {
      sitemap.push({ url: `${BASE_URL}/${countrySlug}/${industry.slug}`, lastModified: now })
    })
    cmsPlatforms.forEach(platform => {
      sitemap.push({ url: `${BASE_URL}/${countrySlug}/${platform.slug}`, lastModified: now })
    })
    country.cities.forEach(city => {
      sitemap.push({ url: `${BASE_URL}/${countrySlug}/${city.slug}`, lastModified: now })
      industries.forEach(industry => {
        sitemap.push({ url: `${BASE_URL}/${countrySlug}/${city.slug}/${industry.slug}`, lastModified: now })
      })
      seoServices.forEach(service => {
        sitemap.push({ url: `${BASE_URL}/${countrySlug}/${city.slug}/${service.slug}`, lastModified: now })
      })
    })
  })

  // Split into chunks
  const chunks: SitemapItem[][] = []
  for (let i = 0; i < sitemap.length; i += chunkSize) {
    chunks.push(sitemap.slice(i, i + chunkSize))
  }
  return chunks
}
