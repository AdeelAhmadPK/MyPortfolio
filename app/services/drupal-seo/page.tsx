import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { industries } from '@/data/industries'
import { countries } from '@/data/locations'
import { serviceTypes } from '@/config/services'
import { Award, Clock, DollarSign, Target } from 'lucide-react'
import CountriesGrid from '@/components/industries/CountriesGrid'
import SEOFramework from '@/components/industries/SEOFramework'
import WhyChooseMe from '@/components/industries/WhyChooseMe'
import HireLocalSEO from '@/components/industries/HireLocalSEO'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import ProcessTimeline from '@/components/industries/ProcessTimeline'
import IndustryStats from '@/components/industries/IndustryStats'
import TrustSignals from '@/components/industries/TrustSignals'
import CompetitorComparison from '@/components/industries/CompetitorComparison'
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight'
import TopicClusterSection from '@/components/industries/TopicClusterSection'
import LocalSEOSignals from '@/components/industries/LocalSEOSignals'
import { FaBolt, FaBuilding, FaChartArea, FaCog, FaDollarSign, FaEdit, FaGlobe, FaGlobeAmericas, FaLink, FaLock, FaMobileAlt, FaSearch, FaTags, FaTools, FaWrench } from 'react-icons/fa';;
import TopSEOServices from '@/components/services/TopSEOServices'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import FAQSection from '@/components/seo/FAQSection'


export const metadata: Metadata = {
  title: 'Drupal SEO Services | Expert Drupal Website Optimization',
  description: 'Professional Drupal SEO services for enterprise websites. Technical optimization, module configuration, and performance improvements for Drupal. Expert Drupal SEO agency.',
  keywords: 'Drupal SEO, Drupal SEO services, Drupal optimization, Drupal website SEO, Drupal technical SEO, Drupal SEO expert, Drupal SEO agency, Drupal module SEO, Drupal rankings, Drupal CMS SEO, Drupal 9 SEO, Drupal 10 SEO, Drupal SEO consultant',
}

export default function DrupalSEOPage() {
  // Get all locations for display
  const allLocations = countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.map(area => ({
        country,
        city,
        area
      }))
    )
  )

  // SEO Framework FAQs (15+ comprehensive questions)
  const seoFrameworkFaqs = [
    {
      question: 'How does Drupal SEO differ from other platforms?',
      answer: 'Drupal offers enterprise-level flexibility with powerful modules like Pathauto, Metatag, and XML Sitemap. Unlike WordPress or Shopify, Drupal is built for complex content architectures, making it ideal for large organizations with sophisticated SEO needs. The trade-off is more technical setup required.'
    },
    {
      question: 'What are the main SEO challenges with Drupal?',
      answer: 'Common challenges include complex URL structures, duplicate content from taxonomy pages, slow page speed without proper caching, and module compatibility issues. However, once configured correctly, Drupal becomes extremely powerful for SEO with full control over every element.'
    },
    {
      question: 'Should I use SEO plugins or modules for Drupal?',
      answer: 'Absolutely! Essential modules include Pathauto (automatic URL aliases), Metatag (meta tag management), Redirect (301 redirects), XML Sitemap, SEO Checklist, and Schema.org Metatag. These modules provide enterprise-grade SEO features that rival any CMS.'
    },
    {
      question: 'How do I handle Drupal URL structure for SEO?',
      answer: 'Use the Pathauto module to create clean, keyword-rich URLs automatically. Configure patterns for nodes, taxonomy terms, and users. Implement the Redirect module to handle old URLs and prevent 404 errors. Keep URLs short, descriptive, and hierarchical.'
    },
    {
      question: 'Can Drupal handle multi-language SEO?',
      answer: 'Yes! Drupal excels at multi-language SEO with built-in language support. You can create translated content, implement hreflang tags, and manage separate URLs for each language. This makes Drupal ideal for international websites targeting multiple markets.'
    },
    {
      question: 'How important is Drupal caching for SEO?',
      answer: 'Extremely important! Enable page cache, dynamic page cache, and CSS/JS aggregation. Use reverse proxy caching like Varnish for maximum speed. Fast loading times directly impact rankings and user experience, especially for large Drupal sites.'
    },
    {
      question: 'What content types should I optimize in Drupal?',
      answer: 'Optimize all content types: articles, pages, product displays, and custom types. Each should have unique meta titles, descriptions, and structured data. Use Views to create SEO-friendly listings and taxonomy pages for topical authority.'
    },
    {
      question: 'How do I implement schema markup in Drupal?',
      answer: 'Use the Schema.org Metatag module to add structured data to your content. Configure schema types for articles, products, organizations, events, and more. This helps search engines understand your content and can lead to rich snippets in search results.'
    },
    {
      question: 'Should I upgrade to Drupal 10 for better SEO?',
      answer: 'Yes! Drupal 10 offers improved performance, better security, and modern features that benefit SEO. It includes built-in improvements for mobile optimization, structured data, and performance. Migration should be planned carefully but is worth the investment.'
    },
    {
      question: 'How do I optimize Drupal for mobile search?',
      answer: 'Use responsive themes, enable mobile-specific caching, optimize images with responsive image styles, implement lazy loading, and ensure mobile Core Web Vitals pass. Drupal\'s mobile-first approach helps with mobile SEO when configured properly.'
    },
    {
      question: 'Can Drupal compete with WordPress for SEO?',
      answer: 'Absolutely! While WordPress has more SEO plugins, Drupal offers superior flexibility and control for enterprise SEO. Drupal powers major government and corporate sites precisely because of its robust, scalable SEO capabilities and security features.'
    },
    {
      question: 'How do I handle Drupal taxonomy for SEO?',
      answer: 'Create logical taxonomy structures for topical authority. Use Pathauto for clean taxonomy URLs, optimize term descriptions, implement breadcrumbs, and use the Metatag module for term meta tags. Avoid creating too many thin taxonomy pages.'
    },
    {
      question: 'What is the best Drupal hosting for SEO?',
      answer: 'Choose hosting with PHP 8+, MySQL optimization, Redis/Memcached support, CDN integration, and fast SSD storage. Managed Drupal hosting from Pantheon, Acquia, or Platform.sh provides optimized infrastructure for SEO performance.'
    },
    {
      question: 'How do I track Drupal SEO performance?',
      answer: 'Integrate Google Analytics, Search Console, and use the Google Analytics module. Track organic traffic, keyword rankings, conversion rates, and Core Web Vitals. Set up custom events for form submissions and downloads to measure SEO ROI.'
    },
    {
      question: 'Should I hire a Drupal SEO specialist?',
      answer: 'For enterprise Drupal sites, yes! Drupal SEO requires technical expertise in both the platform and SEO best practices. A specialist can optimize your site architecture, implement advanced features, and maximize your investment in the Drupal platform.'
    },
    {
      question: 'How long does Drupal SEO take to show results?',
      answer: 'Initial improvements in 30-60 days with proper technical optimization. Significant traffic growth typically takes 90-120 days as content improvements and link building take effect. Enterprise Drupal sites often see sustained growth over 6-12 months.'
    }
  ]

  const features = [
    'Drupal technical SEO audit',
    'SEO module configuration (Pathauto, Metatag, etc.)',
    'Content type optimization',
    'Performance and caching setup',
    'Schema markup integration',
    'Multi-language SEO setup',
  ]

  const benefits = [
    { icon: '🏛️', title: 'Enterprise CMS', desc: 'SEO for complex content architectures and taxonomies' },
    { icon: <FaBolt className="w-6 h-6" />, title: 'Performance', desc: 'Advanced caching with Varnish and Redis' },
    { icon: <FaWrench className="w-6 h-6" />, title: 'Module Expert', desc: 'Expert configuration of Pathauto, Metatag, and more' },
    { icon: <FaGlobeAmericas className="w-6 h-6" />, title: 'Multi-Language', desc: 'Optimize content across multiple languages' },
    { icon: <FaChartArea className="w-6 h-6" />, title: 'Content Architecture', desc: 'Structured content for better SEO performance' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'ROI Focused', desc: 'Strategies that drive measurable results' },
  ]

  const process = [
    { step: '1', title: 'Drupal Audit', desc: 'Complete technical audit and module review' },
    { step: '2', title: 'Module Setup', desc: 'Configure Pathauto, Metatag, XML Sitemap, Redirect' },
    { step: '3', title: 'Performance', desc: 'Enable caching, Varnish, and performance optimization' },
    { step: '4', title: 'Content Strategy', desc: 'Optimize content types, taxonomies, and fields' },
    { step: '5', title: 'Technical SEO', desc: 'Implement schema markup and fix technical issues' },
    { step: '6', title: 'Monitoring', desc: 'Track performance and continuous improvement' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful Drupal sites ranking on page 1 of Google with measurable ROI.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'See initial improvements within 30 days. Full campaigns deliver results in 90-120 days.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or long-term contracts. Clear pricing and month-to-month flexibility.'
    },
    {
      icon: Target,
      title: 'Direct Access',
      description: 'Work directly with me, not junior staff. Personalized strategy and dedicated support.'
    }
  ]

  const faqs = [
    {
      question: 'Is Drupal good for SEO?',
      answer: 'Yes! Drupal is excellent for SEO with robust modules like Pathauto, Metatag, Redirect, XML Sitemap, and SEO Checklist. Its flexibility and enterprise features make it ideal for complex SEO needs.',
    },
    {
      question: 'What are the essential Drupal SEO modules?',
      answer: 'Key modules include Pathauto (URL aliases), Metatag (meta tags), Redirect (301 redirects), XML Sitemap, SEO Checklist, Google Analytics, and Schema.org Metatag for structured data.',
    },
    {
      question: 'How do I improve Drupal site speed?',
      answer: 'Enable page caching, use reverse proxy (Varnish), enable CSS/JS aggregation, use CDN, optimize images with ImageAPI, enable lazy loading, and use performance modules like Advanced CSS/JS Aggregation.',
    },
    {
      question: 'Can Drupal handle enterprise SEO?',
      answer: 'Absolutely. Drupal powers major enterprise sites and government websites. It excels at managing complex taxonomies, multi-language content, and large-scale content architecture with full SEO control.',
    },
  ]

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
                "@id": "https://adeelahmad.com/services/drupal-seo#service",
                "serviceType": "Drupal SEO Services",
                "name": "Drupal SEO Services",
                "description": "Professional Drupal SEO services for enterprise websites. Technical optimization, module configuration, and performance improvements for Drupal 9 and Drupal 10 sites.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Drupal SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/drupal-seo#webpage",
                "url": "https://adeelahmad.com/services/drupal-seo",
                "name": "Drupal SEO Services | Expert Drupal Website Optimization",
                "description": "Professional Drupal SEO services for enterprise websites. Technical optimization, module configuration, and performance improvements for Drupal.",
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
                    "name": "Drupal SEO",
                    "item": "https://adeelahmad.com/services/drupal-seo"
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
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 2.5c-.6 0-1.2.5-1.2 1.2 0 .3.1.6.2.8L11.9 7c-.2-.1-.5-.2-.7-.2-.6 0-1.2.5-1.2 1.2 0 .3.1.6.2.8L7.6 11c-.2-.1-.5-.2-.7-.2-.6 0-1.2.5-1.2 1.2 0 .7.5 1.2 1.2 1.2.2 0 .5-.1.7-.2l2.6 2.2c-.1.2-.2.5-.2.8 0 .7.5 1.2 1.2 1.2.6 0 1.2-.5 1.2-1.2 0-.3-.1-.6-.2-.8L15 13c.2.1.5.2.7.2.7 0 1.2-.5 1.2-1.2 0-.3-.1-.6-.2-.8l2.6-2.2c.2.1.5.2.7.2.7 0 1.2-.5 1.2-1.2 0-.7-.5-1.2-1.2-1.2-.2 0-.5.1-.7.2L16.7 4.5c.1-.2.2-.5.2-.8 0-.7-.5-1.2-1.2-1.2h-.2z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Drupal Platform</span>
                </div>
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Drupal SEO</span> Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8 drop-shadow-lg">
                  Enterprise-grade SEO for powerful Drupal websites
                </p>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                  Get Free Drupal Audit
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
        <SEOFramework faqs={seoFrameworkFaqs} industry="Drupal" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug="drupal-seo"
          industryIcon="🔧"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Drupal" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Drupal" />

        {/* Section 6: CMS/Services Overview Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Drupal <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Enterprise-grade SEO solutions designed specifically for Drupal CMS
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Module Configuration & Setup",
                  description: "Expert setup of Pathauto, Metatag, XML Sitemap, Redirect, and Schema.org modules for optimal SEO performance",
                  icon: <FaWrench className="w-6 h-6" />,
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  title: "Content Architecture Optimization",
                  description: "Structure content types, taxonomies, and Views for maximum topical authority and search visibility",
                  icon: <FaTools className="w-6 h-6" />,
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Performance & Caching Strategy",
                  description: "Implement Varnish, Redis, and advanced caching for lightning-fast page speeds that Google loves",
                  icon: <FaBolt className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Multi-Language SEO Setup",
                  description: "Configure hreflang tags, language-specific URLs, and international targeting for global reach",
                  icon: <FaGlobeAmericas className="w-6 h-6" />,
                  color: "from-green-500 to-teal-500"
                },
                {
                  title: "Enterprise Schema Markup",
                  description: "Implement complex structured data for articles, products, events, and custom content types",
                  icon: <FaChartArea className="w-6 h-6" />,
                  color: "from-cyan-500 to-blue-500"
                },
                {
                  title: "Migration & Upgrade SEO",
                  description: "Safely migrate to Drupal 10 or upgrade existing sites while preserving SEO rankings and traffic",
                  icon: "🔄",
                  color: "from-orange-500 to-red-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Drupal" 
          stats={[
            { value: "83%", label: "of enterprise organizations choose open-source CMS", icon: <FaBuilding className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "2.3%", label: "of top 1M websites powered by Drupal", icon: <FaGlobe className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "92%", label: "of Drupal sites need SEO optimization", icon: <FaSearch className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "12x", label: "SEO ROI for enterprise Drupal implementations", icon: <FaDollarSign className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
          ]}
        />

        {/* Drupal SEO Process */}
        <ProcessTimeline 
          industry="Drupal" 
          steps={[
            { step: 1, title: "Drupal Technical Audit", description: "Deep analysis of Drupal configuration, modules, and SEO settings", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Module Optimization", description: "SEO module configuration including Pathauto, Metatag, and XML sitemap", icon: <FaCog className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Content Architecture", description: "Taxonomy, content types, and URL structure optimization", icon: <FaTools className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Performance Tuning", description: "Caching configuration, image optimization, and Core Web Vitals", icon: <FaBolt className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Content Strategy", description: "SEO-optimized content creation and internal linking structure", icon: <FaEdit className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Enterprise SEO", description: "Multi-site SEO, internationalization, and advanced features", icon: <FaGlobeAmericas className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Drupal" 
          pillars={[
            { title: "Technical Drupal SEO", description: "Module configuration, URL patterns, caching, and crawlability optimization", topics: ["SEO modules", "URL structure", "Caching", "Crawlability"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Content Architecture", description: "Taxonomy design, content types, views optimization, and structured data", topics: ["Taxonomy", "Content types", "Views SEO", "Schema markup"], icon: <FaTools className="w-6 h-6" /> },
            { title: "Performance Optimization", description: "Drupal caching, CDN integration, image styles, and speed improvements", topics: ["Cache optimization", "CDN setup", "Image styles", "Page speed"], icon: <FaBolt className="w-6 h-6" /> },
            { title: "Enterprise Features", description: "Multi-site SEO, internationalization, decoupled Drupal, and API optimization", topics: ["Multi-site", "i18n SEO", "Headless SEO", "API optimization"], icon: <FaBuilding className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Drupal"
          signals={[
            { title: "Technical Configuration", description: "Properly configured SEO modules and settings", importance: "Critical", icon: <FaCog className="w-6 h-6" /> },
            { title: "URL Structure", description: "Clean, SEO-friendly URLs with Pathauto", importance: "Critical", icon: <FaLink className="w-6 h-6" /> },
            { title: "Page Performance", description: "Optimized caching and Core Web Vitals", importance: "High", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Content Quality", description: "Well-structured content with proper headings", importance: "High", icon: <FaEdit className="w-6 h-6" /> },
            { title: "Schema Markup", description: "Structured data implementation for rich results", importance: "High", icon: <FaTags className="w-6 h-6" /> },
            { title: "Mobile Experience", description: "Responsive design and mobile optimization", importance: "Medium", icon: <FaMobileAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Drupal"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Page 1 for target keywords", withoutSEO: "Invisible despite great content" },
            { feature: "Organic Traffic", withSEO: "Consistent traffic growth", withoutSEO: "Relying on direct/referral only" },
            { feature: "Technical Health", withSEO: "Optimized Drupal configuration", withoutSEO: "Default settings hurt rankings" },
            { feature: "Content Performance", withSEO: "Content ranks and converts", withoutSEO: "Great content nobody finds" },
            { feature: "Enterprise ROI", withSEO: "Measurable organic revenue", withoutSEO: "Underperforming CMS investment" },
            { feature: "Long-term Growth", withSEO: "Sustainable organic growth", withoutSEO: "Stagnant digital presence" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Drupal"
          caseStudy={{
            title: "Government Agency Drupal Site",
            industry: "Drupal",
            results: [
              { metric: "Organic Traffic", value: "420%", change: "increase in visitors" },
              { metric: "Search Rankings", value: "#1", change: "for 85+ keywords" },
              { metric: "Page Speed", value: "95+", change: "Core Web Vitals score" },
              { metric: "Conversion Rate", value: "180%", change: "improvement" }
            ],
            testimonial: "Our Drupal site finally performs as well as it should. The SEO optimization transformed our digital presence and citizen engagement.",
            clientName: "Government Digital Director"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Drupal"
          customItems={[
            { icon: "💧", title: "Drupal Expert", description: "Deep expertise in Drupal CMS optimization" },
            { icon: <FaCog className="w-6 h-6" />, title: "Module Specialist", description: "Expert configuration of SEO modules" },
            { icon: <FaBuilding className="w-6 h-6" />, title: "Enterprise Experience", description: "Large-scale Drupal SEO implementations" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Performance Focus", description: "Drupal caching and speed optimization" },
            { icon: <FaGlobeAmericas className="w-6 h-6" />, title: "Multi-site SEO", description: "Experience with Drupal multi-site setups" },
            { icon: <FaLock className="w-6 h-6" />, title: "Security Conscious", description: "SEO that maintains Drupal security" }
          ]}
        />

        {/* Section 7: Top 10 Services */}

        {/* Section 8: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="drupal-seo" />

        {/* Section 9: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20">
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
                Real results from real businesses that trusted us with their SEO
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 10: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Drupal SEO" />

        {/* Section 11: Cities Grid */}
        

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Drupal SEO?</h2>
            <p className="text-xl text-indigo-100 mb-8">Get a comprehensive Drupal SEO audit and enterprise strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-indigo-600 font-bold hover:bg-indigo-50 transition-all shadow-xl hover:scale-105"
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
