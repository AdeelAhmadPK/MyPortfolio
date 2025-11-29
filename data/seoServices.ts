// SEO Service definitions for country-specific pages
export interface SEOService {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string; // React icon component name or emoji
  colorScheme: {
    primary: string;
    secondary: string;
    accent?: string;
  };
}

export const seoServices: SEOService[] = [
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    shortName: 'Technical SEO',
    description: 'Expert technical SEO services to fix site speed issues, improve crawlability, optimize Core Web Vitals, implement schema markup, and build the strong technical foundation essential for sustainable SEO success and improved search rankings.',
    icon: 'FaCog',
    colorScheme: {
      primary: '#3B82F6', // blue
      secondary: '#06B6D4', // cyan
      accent: '#8B5CF6' // purple
    }
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    shortName: 'Local SEO',
    description: 'Professional local SEO services to dominate Google Maps, optimize your Google Business Profile, build local citations, and attract more local customers with proven local search optimization strategies.',
    icon: 'FaMapMarkerAlt',
    colorScheme: {
      primary: '#10B981', // green
      secondary: '#059669', // emerald
      accent: '#14B8A6' // teal
    }
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    shortName: 'E-commerce SEO',
    description: 'Comprehensive e-commerce SEO services to drive more organic traffic and revenue for Shopify, Magento, WooCommerce, and custom e-commerce platforms through product optimization, category SEO, and conversion strategies.',
    icon: 'FaShoppingCart',
    colorScheme: {
      primary: '#6366F1', // indigo
      secondary: '#8B5CF6', // purple
      accent: '#EC4899' // pink
    }
  },
  {
    slug: 'content-seo',
    name: 'Content SEO',
    shortName: 'Content SEO',
    description: 'Expert content SEO services to create high-ranking, search-optimized content that drives organic traffic, builds topical authority, and establishes your brand as an industry leader through semantic SEO strategies.',
    icon: 'FaFileAlt',
    colorScheme: {
      primary: '#A855F7', // purple
      secondary: '#EC4899', // pink
      accent: '#F43F5E' // rose
    }
  },
  {
    slug: 'link-building',
    name: 'Link Building',
    shortName: 'Link Building',
    description: 'Professional white-hat link building services to acquire high-quality backlinks that boost domain authority, improve search rankings, and drive sustainable organic traffic growth through ethical SEO practices.',
    icon: 'FaLink',
    colorScheme: {
      primary: '#10B981', // emerald
      secondary: '#14B8A6', // teal
      accent: '#06B6D4' // cyan
    }
  },
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    shortName: 'On-Page SEO',
    description: 'Comprehensive on-page SEO services to optimize titles, meta descriptions, headers, content structure, images, and internal links to maximize your search visibility and Google rankings.',
    icon: 'FaFileAlt',
    colorScheme: {
      primary: '#F97316', // orange
      secondary: '#EF4444', // red
      accent: '#DC2626' // red-600
    }
  },
  {
    slug: 'off-page-seo',
    name: 'Off-Page SEO',
    shortName: 'Off-Page SEO',
    description: 'Strategic off-page SEO services to build brand authority, manage online reputation, and earn external signals that boost your search rankings and establish industry leadership through digital PR and outreach.',
    icon: 'FaGlobe',
    colorScheme: {
      primary: '#F43F5E', // rose
      secondary: '#EC4899', // pink
      accent: '#DB2777' // pink-600
    }
  },
  {
    slug: 'seo-audit',
    name: 'SEO Audit',
    shortName: 'SEO Audit',
    description: 'Comprehensive SEO audit services providing in-depth analysis to identify technical issues, on-page problems, and optimization opportunities with actionable recommendations to improve your search rankings.',
    icon: 'FaClipboardCheck',
    colorScheme: {
      primary: '#F59E0B', // amber
      secondary: '#EAB308', // yellow
      accent: '#D97706' // amber-600
    }
  },
  {
    slug: 'keyword-research',
    name: 'Keyword Research',
    shortName: 'Keyword Research',
    description: 'Expert keyword research services to identify high-value keywords, analyze search intent, and create strategic keyword maps that drive qualified organic traffic and conversions for your business.',
    icon: 'FaKey',
    colorScheme: {
      primary: '#0EA5E9', // sky
      secondary: '#3B82F6', // blue
      accent: '#0284C7' // sky-600
    }
  },
  {
    slug: 'competitor-analysis',
    name: 'Competitor Analysis',
    shortName: 'Competitor Analysis',
    description: 'In-depth SEO competitor analysis services to uncover competitor strategies, identify search ranking opportunities, and discover gaps to outperform your competition in Google search results.',
    icon: 'FaChartBar',
    colorScheme: {
      primary: '#8B5CF6', // violet
      secondary: '#A855F7', // purple
      accent: '#7C3AED' // violet-600
    }
  }
];

export function getSEOService(slug: string): SEOService | undefined {
  return seoServices.find(service => service.slug === slug);
}


