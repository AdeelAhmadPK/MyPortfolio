import { NextResponse } from 'next/server'
import { getSitemapChunks } from '../sitemap-helpers'

type SitemapItem = { url: string; lastModified: Date }

export async function GET(request: Request) {
  // Extract chunk number from URL
  const url = new URL(request.url)
  const match = url.pathname.match(/sitemap-(\d+)\.xml$/)
  const chunkNum = match ? parseInt(match[1], 10) - 1 : 0
  const chunks = await getSitemapChunks()
  const chunk: SitemapItem[] = (chunks[chunkNum] as SitemapItem[]) || []
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${chunk.map(item => `  <url><loc>${item.url}</loc><lastmod>${item.lastModified.toISOString()}</lastmod></url>`).join('\n')}\n</urlset>`
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
