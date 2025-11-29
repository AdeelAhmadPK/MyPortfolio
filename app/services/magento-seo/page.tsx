import { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { serviceTypes } from '@/config/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroContactForm from '@/components/HeroContactForm';
import FAQSection from '@/components/seo/FAQSection';
import SEOFramework from '@/components/industries/SEOFramework';
import CountriesGrid from '@/components/industries/CountriesGrid';
import WhyChooseMe from '@/components/industries/WhyChooseMe';
import HireLocalSEO from '@/components/industries/HireLocalSEO';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import ProcessTimeline from '@/components/industries/ProcessTimeline';
import IndustryStats from '@/components/industries/IndustryStats';
import TrustSignals from '@/components/industries/TrustSignals';
import CompetitorComparison from '@/components/industries/CompetitorComparison';
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight';
import TopicClusterSection from '@/components/industries/TopicClusterSection';
import LocalSEOSignals from '@/components/industries/LocalSEOSignals';
import TopSEOServices from '@/components/services/TopSEOServices';

import TestimonialsSlider from '@/components/home/TestimonialsSlider';

import { FaBolt, FaBox, FaBriefcase, FaBuilding, FaChartLine, FaCog, FaDollarSign, FaEdit, FaGlobe, FaGlobeAmericas, FaHandshake, FaLink, FaMobileAlt, FaSearch, FaTags, FaTools, FaTrophy, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Magento SEO Services | Enterprise E-commerce Optimization Expert',
  description: 'Expert Magento SEO services for enterprise e-commerce. Technical optimization, performance tuning, and advanced SEO strategies for Magento and Adobe Commerce stores. Professional Magento SEO agency.',
  keywords: 'Magento SEO, Magento SEO services, Magento optimization, Magento e-commerce SEO, Magento technical SEO, Magento SEO expert, Magento SEO agency, Adobe Commerce SEO, Magento 2 SEO, Magento rankings, Magento store SEO, Magento SEO consultant',
}

export default function MagentoSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Magento SEO', url: '/services/magento-seo' }
  ];

  // Get all locations for display
  const allLocations = countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.map(area => ({
        country,
        city,
        area
      }))
    )
  );

  // SEO Framework FAQs (15+ comprehensive questions)
  const seoFrameworkFaqs = [
    {
      question: 'Is Magento 2 better for SEO than Magento 1?',
      answer: 'Yes! Magento 2 offers significant SEO improvements including faster performance, better mobile optimization, improved URL structure, built-in rich snippets support, and enhanced caching capabilities. The platform is more SEO-friendly out of the box with cleaner code and better Core Web Vitals scores.'
    },
    {
      question: 'How do I handle SEO for thousands of products in Magento?',
      answer: 'For large catalogs, I implement automated optimization strategies: bulk product attribute optimization, dynamic meta tag generation using product data, automated canonical tag management, XML sitemap optimization with priorities, and efficient category structure. We also use Magento\'s indexing system to ensure search engines can crawl efficiently.'
    },
    {
      question: 'What are the best Magento SEO extensions?',
      answer: 'Top extensions include Mageworx SEO Suite Ultimate (comprehensive all-in-one), Amasty SEO Toolkit (technical SEO), Mageplaza SEO (easy configuration), and Yoast SEO for Magento. However, many features can be achieved through proper configuration of Magento\'s native capabilities without relying heavily on extensions.'
    },
    {
      question: 'How do I optimize Magento for mobile-first indexing?',
      answer: 'Implement responsive PWA themes, optimize mobile page speed with lazy loading and image optimization, ensure mobile-friendly checkout process, implement AMP for product pages, use mobile-specific structured data, and test mobile usability regularly. Magento 2\'s PWA Studio provides excellent mobile-first capabilities.'
    },
    {
      question: 'Can Magento handle multi-store SEO?',
      answer: 'Absolutely! Magento excels at multi-store SEO. We configure proper hreflang tags for international stores, set up store-specific sitemaps, optimize for local search per region, manage canonical tags across stores, and implement geo-targeting in Search Console. This allows you to rank in multiple countries simultaneously.'
    },
    {
      question: 'How important is Varnish Cache for Magento SEO?',
      answer: 'Critical! Varnish Cache dramatically improves page load speed, which directly impacts SEO rankings and user experience. We configure Varnish for full-page caching, implement cache warming strategies, and optimize cache hit rates. This can reduce page load times from 3-5 seconds to under 1 second.'
    },
    {
      question: 'Should I use Elasticsearch or MySQL for Magento search?',
      answer: 'Elasticsearch is superior for both user experience and SEO. It provides faster search results, better relevancy scoring, advanced filtering capabilities, and handles large catalogs efficiently. For SEO, it improves site speed and internal search functionality, leading to better engagement metrics that boost rankings.'
    },
    {
      question: 'How do I handle duplicate content in Magento?',
      answer: 'I implement canonical tags for product variations, set up proper URL redirects, configure layered navigation to avoid parameter-based duplicates, use noindex for filtered pages, and implement cross-domain canonicals for multi-store setups. Magento\'s built-in tools handle most of this when configured correctly.'
    },
    {
      question: 'What role does Redis play in Magento SEO?',
      answer: 'Redis improves backend performance by caching sessions and backend cache, which indirectly benefits SEO through faster page generation and better server response times. While users don\'t directly see Redis, search engines notice the improved performance metrics and reward you with better rankings.'
    },
    {
      question: 'How do I optimize Magento category pages for SEO?',
      answer: 'Create unique category descriptions with target keywords, implement breadcrumb navigation, optimize category URLs, add schema markup for category pages, implement pagination correctly, and optimize category images. We also create category-specific content that ranks for broader search terms beyond just product listings.'
    },
    {
      question: 'Can I do content marketing with Magento?',
      answer: 'Yes! Magento 2 includes a built-in blog module, or you can integrate WordPress for robust content marketing. I create SEO-optimized blog content that targets informational keywords, links strategically to product pages, and attracts top-of-funnel traffic that converts to customers over time.'
    },
    {
      question: 'How long does Magento SEO take to show results?',
      answer: 'Initial improvements appear within 60-90 days, with significant results by 4-6 months. Product pages may rank faster than category pages. Competitive keywords require ongoing optimization. Magento\'s technical complexity means proper setup is crucial - poorly configured Magento sites struggle with SEO regardless of content quality.'
    },
    {
      question: 'What about Magento PWA and SEO?',
      answer: 'Magento PWA Studio offers excellent SEO potential with fast page loads, app-like experience, and offline functionality. However, proper implementation is critical - we ensure server-side rendering for search engines, implement dynamic rendering where needed, and optimize Progressive Web App capabilities without sacrificing crawlability.'
    },
    {
      question: 'How do I track Magento SEO performance?',
      answer: 'We integrate Google Analytics 4 with enhanced e-commerce tracking, Google Search Console for ranking data, custom Magento dashboards for technical SEO metrics, and advanced SEO tools like SEMrush or Ahrefs. We track organic revenue, product page rankings, category performance, and technical SEO health monthly.'
    },
    {
      question: 'Should I migrate from Magento 1 to Magento 2 for SEO?',
      answer: 'Yes, if you\'re still on Magento 1 (which reached end of life), migrating to Magento 2 provides significant SEO advantages: better performance, improved security, mobile-first design, enhanced PWA capabilities, and ongoing support. We handle migrations with proper 301 redirects to preserve your SEO equity and rankings.'
    },
    {
      question: 'How do you handle international Magento SEO?',
      answer: 'I implement hreflang tags for language/region targeting, create country-specific sitemaps, optimize for local search engines, handle currency and shipping information for SEO, manage international hosting/CDN setup, and configure geo-targeting in Google Search Console. Magento\'s multi-store architecture makes this seamless when configured properly.'
    }
  ];

  const topServices = Object.values(serviceTypes).slice(0, 10);

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'Is Magento 2 better for SEO than Magento 1?',
      answer: 'Yes! Magento 2 offers significant SEO improvements including faster performance, better mobile optimization, improved URL structure, built-in rich snippets support, and enhanced caching capabilities. The platform is more SEO-friendly out of the box with cleaner code and better Core Web Vitals scores.'
    },
    {
      question: 'How do I handle SEO for thousands of products in Magento?',
      answer: 'For large catalogs, I implement automated optimization strategies: bulk product attribute optimization, dynamic meta tag generation using product data, automated canonical tag management, XML sitemap optimization with priorities, and efficient category structure. We also use Magento\'s indexing system to ensure search engines can crawl efficiently.'
    },
    {
      question: 'What are the best Magento SEO extensions?',
      answer: 'Top extensions include Mageworx SEO Suite Ultimate (comprehensive all-in-one), Amasty SEO Toolkit (technical SEO), Mageplaza SEO (easy configuration), and Yoast SEO for Magento. However, many features can be achieved through proper configuration of Magento\'s native capabilities without relying heavily on extensions.'
    },
    {
      question: 'How do I optimize Magento for mobile-first indexing?',
      answer: 'Implement responsive PWA themes, optimize mobile page speed with lazy loading and image optimization, ensure mobile-friendly checkout process, implement AMP for product pages, use mobile-specific structured data, and test mobile usability regularly. Magento 2\'s PWA Studio provides excellent mobile-first capabilities.'
    },
    {
      question: 'Can Magento handle multi-store SEO?',
      answer: 'Absolutely! Magento excels at multi-store SEO. We configure proper hreflang tags for international stores, set up store-specific sitemaps, optimize for local search per region, manage canonical tags across stores, and implement geo-targeting in Search Console. This allows you to rank in multiple countries simultaneously.'
    },
    {
      question: 'How important is Varnish Cache for Magento SEO?',
      answer: 'Critical! Varnish Cache dramatically improves page load speed, which directly impacts SEO rankings and user experience. We configure Varnish for full-page caching, implement cache warming strategies, and optimize cache hit rates. This can reduce page load times from 3-5 seconds to under 1 second.'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://adeelahmad.com/services/magento-seo#service",
                "serviceType": "Magento SEO Services",
                "name": "Magento SEO Services",
                "description": "Expert Magento SEO services for enterprise e-commerce. Technical optimization, performance tuning, and advanced SEO strategies for Magento and Adobe Commerce stores.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Magento SEO Expert"
                },
                "areaServed": "Global",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceRange": "$$$-$$$$"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/services/magento-seo#webpage",
                "url": "https://adeelahmad.com/services/magento-seo",
                "name": "Magento SEO Services | Enterprise E-commerce Optimization Expert",
                "description": "Expert Magento SEO services for enterprise e-commerce. Technical optimization, performance tuning, and advanced SEO strategies for Magento and Adobe Commerce stores.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://adeelahmad.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://adeelahmad.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Magento SEO",
                    "item": "https://adeelahmad.com/services/magento-seo"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": seoFrameworkFaqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ])
          }}
        />
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.3l8-4.46 8 4.46V12c0 4.41-3.59 8-8 8z"/>
                    <path d="M12 6L6 9v6c0 3.31 2.69 6 6 6s6-2.69 6-6V9l-6-3zm0 12c-2.76 0-5-2.24-5-5v-3.7l5-2.8 5 2.8V13c0 2.76-2.24 5-5 5z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Magento Platform</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Magento SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-4 drop-shadow-lg">
                  Enterprise-level SEO for powerful Magento & Adobe Commerce stores
                </p>
                <p className="text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Advanced Magento 2.x optimization including layered navigation SEO, category hierarchy structuring, product attribute optimization, XML sitemap management, and enterprise-grade performance tuning for high-traffic e-commerce operations.
                </p>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                  Get Free Magento Audit
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>

              {/* Right Content - 2 columns with HeroContactForm */}
              <div className="lg:col-span-2">
                <HeroContactForm 
                  title="Get Your Free SEO Audit"
                  subtitle="Discover what's holding your website back from page 1 rankings"
                  buttonText="Get Free Consultation"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Magento" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug="magento-seo"
          industryIcon="🛡️"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Magento" />

        {/* Section 5: CMS/Services Overview Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/10 to-red-600/10 border border-orange-600/20 dark:border-orange-400/20 mb-6">
                <svg className="w-5 h-5 text-orange-600 dark:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Magento <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Enterprise-level SEO solutions designed specifically for Magento e-commerce stores
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise Product Catalog SEO",
                  description: "Optimize thousands of products with bulk optimization strategies, automated meta tag generation, and efficient category structures for large-scale e-commerce",
                  icon: <FaBox className="w-6 h-6" />,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Performance & Speed Optimization",
                  description: "Implement Varnish Cache, Redis, Elasticsearch, and CDN configuration to achieve sub-second load times and excellent Core Web Vitals scores",
                  icon: <FaBolt className="w-6 h-6" />,
                  color: "from-red-500 to-rose-500"
                },
                {
                  title: "Multi-Store & International SEO",
                  description: "Configure hreflang tags, store-specific sitemaps, geo-targeting, and multi-language optimization for global e-commerce success",
                  icon: <FaGlobeAmericas className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Magento 2 PWA Optimization",
                  description: "Optimize Progressive Web App implementation with server-side rendering, dynamic rendering, and mobile-first indexing strategies",
                  icon: <FaMobileAlt className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Technical SEO & Architecture",
                  description: "Configure URL rewrites, implement proper canonical tags, optimize XML sitemaps, and fix technical SEO issues specific to Magento",
                  icon: <FaWrench className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Conversion-Focused SEO",
                  description: "Optimize product pages, category descriptions, checkout flow, and internal linking to maximize both rankings and conversion rates",
                  icon: <FaDollarSign className="w-6 h-6" />,
                  color: "from-indigo-500 to-purple-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Magento" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Magento" 
          stats={[
            { value: "89%", label: "of enterprise B2B buyers research online first", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "$2.4T", label: "enterprise e-commerce market size globally", icon: <FaGlobe className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "76%", label: "of Magento store revenue from organic traffic", icon: <FaChartLine className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "18x", label: "SEO ROI for enterprise e-commerce stores", icon: <FaDollarSign className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
          ]}
        />

        {/* Magento SEO Process */}
        <ProcessTimeline 
          industry="Magento" 
          steps={[
            { step: 1, title: "Technical Audit", description: "Deep analysis of Magento architecture, indexing, and crawlability issues", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Performance Optimization", description: "Page speed, full-page cache, and Core Web Vitals improvements", icon: <FaBolt className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Catalog Optimization", description: "Product and category page SEO with layered navigation fixes", icon: <FaBox className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Schema Implementation", description: "Rich snippets for products, reviews, and organizational data", icon: <FaTags className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Content Strategy", description: "Category content, buying guides, and B2B-focused content", icon: <FaEdit className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Link Authority", description: "Enterprise link building and industry authority development", icon: <FaLink className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Magento" 
          pillars={[
            { title: "Technical Magento SEO", description: "Indexing optimization, URL structure, canonical tags, and crawl budget management", topics: ["Indexing", "URL structure", "Canonical tags", "Crawl budget"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Performance & Speed", description: "Full-page cache, CDN integration, image optimization, and Core Web Vitals", topics: ["Page cache", "CDN integration", "Image optimization", "Core Web Vitals"], icon: <FaBolt className="w-6 h-6" /> },
            { title: "Catalog SEO", description: "Product optimization, category pages, layered navigation, and faceted search SEO", topics: ["Product pages", "Category SEO", "Layered navigation", "Faceted search"], icon: <FaBox className="w-6 h-6" /> },
            { title: "Enterprise Content", description: "B2B content strategy, landing pages, resource centers, and thought leadership", topics: ["B2B content", "Landing pages", "Resource centers", "Thought leadership"], icon: "📚" }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Magento"
          signals={[
            { title: "Technical Health", description: "Crawlability and indexing optimization for large catalogs", importance: "Critical", icon: <FaCog className="w-6 h-6" /> },
            { title: "Page Speed", description: "Core Web Vitals and load time performance optimization", importance: "Critical", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Product Schema", description: "Rich product data for enhanced search results", importance: "High", icon: <FaTags className="w-6 h-6" /> },
            { title: "Mobile Experience", description: "Mobile-first enterprise shopping experience", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Site Architecture", description: "Logical catalog structure and navigation", importance: "High", icon: <FaTools className="w-6 h-6" /> },
            { title: "Content Depth", description: "Comprehensive product and category content", importance: "Medium", icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Magento"
          comparisons={[
            { feature: "Enterprise Visibility", withSEO: "Top rankings for B2B keywords", withoutSEO: "Invisible to enterprise buyers" },
            { feature: "Organic Revenue", withSEO: "70%+ from organic traffic", withoutSEO: "100% paid dependency" },
            { feature: "Customer Acquisition", withSEO: "$15-40 per customer", withoutSEO: "$150+ per enterprise lead" },
            { feature: "Market Authority", withSEO: "Industry-leading brand", withoutSEO: "Unknown vendor status" },
            { feature: "Catalog Performance", withSEO: "All products indexed/ranked", withoutSEO: "Poor product discoverability" },
            { feature: "Long-term Growth", withSEO: "Sustainable organic growth", withoutSEO: "Declining market share" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Magento"
          caseStudy={{
            title: "B2B Industrial Supply Magento Store",
            industry: "Magento",
            results: [
              { metric: "Organic Traffic", value: "720%", change: "increase in visitors" },
              { metric: "Organic Revenue", value: "15x", change: "more from search" },
              { metric: "Google Rankings", value: "#1", change: "for 2,400+ keywords" },
              { metric: "SEO ROI", value: "580%", change: "return on investment" }
            ],
            testimonial: "Our Magento store went from struggling to find B2B buyers to dominating our industrial niche. Organic now drives most of our enterprise revenue.",
            clientName: "B2B E-commerce Director"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Magento"
          customItems={[
            { icon: <FaTrophy className="w-6 h-6" />, title: "Magento Certified Expert", description: "Adobe/Magento certified professional" },
            { icon: <FaBuilding className="w-6 h-6" />, title: "Enterprise SEO Specialist", description: "Large catalog and B2B SEO expertise" },
            { icon: <FaBriefcase className="w-6 h-6" />, title: "B2B E-commerce Focus", description: "Understanding of B2B buying journeys" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Performance Optimization", description: "Speed and Core Web Vitals expertise" },
            { icon: <FaGlobe className="w-6 h-6" />, title: "Multi-Store Experience", description: "Managing multiple Magento storefronts" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Adobe Commerce Partner", description: "Official Adobe Commerce partnership" }
          ]}
        />

        <TopSEOServices />

        {/* Section 7: Top 10 Services */}

        {/* Section 8: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="magento-seo" />

        {/* Section 9: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-red-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 dark:border-yellow-400/20 mb-6">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Client Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from real Magento stores that trusted us with their SEO
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 10: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Magento SEO" />



        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Magento SEO?</h2>
            <p className="text-xl text-red-100 mb-8">Get a comprehensive Magento SEO audit and enterprise strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-red-600 font-bold hover:bg-red-50 transition-all shadow-xl hover:scale-105"
              >
                Start Your Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
