import { NextResponse } from 'next/server'
import { getSitemapChunks } from '../sitemap-helpers'

export async function GET() {
  // Generate sitemap index referencing all sitemap chunks
  const chunks = await getSitemapChunks()
  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((chunk, i) => `  <sitemap><loc>${process.env.NEXT_PUBLIC_SITE_URL || 'https://adeelahmad.com'}/sitemap-${i + 1}.xml</loc></sitemap>`).join('\n')}
</sitemapindex>`
  return new NextResponse(sitemapIndex, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
