export interface ServiceType {
  name: string
  slug: string
  description?: string
}

export const serviceTypes: Record<string, ServiceType> = {
  'technical-seo': { name: 'Technical SEO', slug: 'technical-seo', description: 'Website optimization, speed improvements, and technical audits' },
  'local-seo': { name: 'Local SEO', slug: 'local-seo', description: 'Google Business Profile optimization and local citations' },
  'ecommerce-seo': { name: 'E-commerce SEO', slug: 'ecommerce-seo', description: 'Product optimization and conversion strategies' },
  'content-seo': { name: 'Content SEO', slug: 'content-seo', description: 'SEO-optimized content creation and strategy' },
  'link-building': { name: 'Link Building', slug: 'link-building', description: 'High-quality backlinks and authority building' },
  'on-page-seo': { name: 'On-Page SEO', slug: 'on-page-seo', description: 'Content optimization and meta tag improvements' },
  'off-page-seo': { name: 'Off-Page SEO', slug: 'off-page-seo', description: 'External optimization and brand building' },
  'seo-audit': { name: 'SEO Audit', slug: 'seo-audit', description: 'Comprehensive website SEO analysis' },
  'keyword-research': { name: 'Keyword Research', slug: 'keyword-research', description: 'Target keyword identification and analysis' },
  'competitor-analysis': { name: 'Competitor Analysis', slug: 'competitor-analysis', description: 'Competitor SEO strategy research' },
  'mobile-seo': { name: 'Mobile SEO', slug: 'mobile-seo', description: 'Mobile optimization and responsive design' },
  'voice-search-seo': { name: 'Voice Search SEO', slug: 'voice-search-seo', description: 'Voice search optimization strategies' },
  'international-seo': { name: 'International SEO', slug: 'international-seo', description: 'Multi-language and multi-region SEO' },
  'video-seo': { name: 'Video SEO', slug: 'video-seo', description: 'YouTube and video content optimization' },
  'image-seo': { name: 'Image SEO', slug: 'image-seo', description: 'Image optimization for search engines' },
  'schema-markup': { name: 'Schema Markup', slug: 'schema-markup', description: 'Structured data implementation' },
  'google-analytics': { name: 'Google Analytics Setup', slug: 'google-analytics', description: 'Analytics configuration and tracking' },
  'conversion-optimization': { name: 'Conversion Rate Optimization', slug: 'conversion-optimization', description: 'CRO and landing page optimization' },
  'penalty-recovery': { name: 'Penalty Recovery', slug: 'penalty-recovery', description: 'Google penalty identification and recovery' },
  'reputation-management': { name: 'Reputation Management', slug: 'reputation-management', description: 'Online reputation and review management' }
}

export const servicePillars = [
  { name: 'Technical SEO', slug: 'technical-seo' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'Content Strategy', slug: 'content-seo' },
  { name: 'Link Building', slug: 'link-building' },
  { name: 'E-commerce SEO', slug: 'ecommerce-seo' },
  { name: 'Analytics & Reporting', slug: 'google-analytics' }
]
