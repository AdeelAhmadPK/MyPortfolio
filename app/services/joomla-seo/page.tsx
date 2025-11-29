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
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import FAQSection from '@/components/seo/FAQSection'
import ProcessTimeline from '@/components/industries/ProcessTimeline'
import IndustryStats from '@/components/industries/IndustryStats'
import TrustSignals from '@/components/industries/TrustSignals'
import CompetitorComparison from '@/components/industries/CompetitorComparison'
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight'
import TopicClusterSection from '@/components/industries/TopicClusterSection'
import LocalSEOSignals from '@/components/industries/LocalSEOSignals'
import TopSEOServices from '@/components/services/TopSEOServices'
import { FaBolt, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaGlobe, FaGlobeAmericas, FaLaptop, FaLink, FaLock, FaMobileAlt, FaPalette, FaSearch, FaWrench } from 'react-icons/fa';


export const metadata: Metadata = {
  title: 'Joomla SEO Services | Expert Joomla Website Optimization',
  description: 'Professional Joomla SEO services for better rankings. Technical optimization, extension configuration, and performance improvements for Joomla sites. Expert Joomla SEO agency.',
  keywords: 'Joomla SEO, Joomla SEO services, Joomla optimization, Joomla website SEO, Joomla technical SEO, Joomla SEO expert, Joomla SEO agency, Joomla extension SEO, Joomla rankings, Joomla CMS SEO, Joomla SEO consultant, Joomla organic traffic',
}

export default function JoomlaSEOPage() {
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
      question: 'How does Joomla SEO differ from other CMS platforms?',
      answer: 'Joomla offers a middle ground between WordPress simplicity and Drupal complexity. It has built-in SEO features like URL rewriting and meta management, plus powerful extensions like SH404SEF that provide advanced SEO capabilities without heavy coding. Great for mid-sized sites needing flexibility.'
    },
    {
      question: 'What are the main SEO challenges with Joomla?',
      answer: 'Common challenges include managing component URLs, handling duplicate content from menu items, optimizing site speed with many extensions, and maintaining SEO during updates. However, with proper extension configuration and regular maintenance, Joomla can rank very well.'
    },
    {
      question: 'Should I use SEO extensions for Joomla?',
      answer: 'Yes! Essential extensions include SH404SEF (comprehensive SEO suite), EFSEO (advanced features), JCH Optimize (performance), and OSMap (sitemaps). These extensions add enterprise-level features that complement Joomla\'s built-in SEO capabilities.'
    },
    {
      question: 'Is SH404SEF worth the investment for Joomla SEO?',
      answer: 'Absolutely! SH404SEF is the industry standard for Joomla SEO. It provides clean URLs, advanced redirects, meta tag management, social media integration, and analytics. The time saved and features gained make it worthwhile for serious Joomla sites.'
    },
    {
      question: 'How do I optimize Joomla URL structure?',
      answer: 'Enable URL rewriting in Global Configuration, use SH404SEF or similar extension for clean URLs, create SEO-friendly menu aliases, avoid session IDs in URLs, and implement proper canonical tags. Keep URLs short, descriptive, and keyword-rich.'
    },
    {
      question: 'Can Joomla handle e-commerce SEO effectively?',
      answer: 'Yes! With VirtueMart or HikaShop plus SEO extensions, Joomla handles e-commerce SEO well. Optimize product URLs, implement product schema, create SEO-friendly category pages, and use proper internal linking. Not as specialized as Shopify but very capable.'
    },
    {
      question: 'How important is Joomla caching for SEO?',
      answer: 'Critical! Enable Joomla\'s built-in cache, use JCH Optimize for CSS/JS compression, implement browser caching, enable Gzip compression, and consider CDN integration. Fast loading directly impacts rankings and conversion rates.'
    },
    {
      question: 'What template features matter for Joomla SEO?',
      answer: 'Choose responsive templates with clean code, fast loading, proper HTML5 structure, schema markup support, and minimal bloat. Templates like Helix Ultimate or T3 Framework provide SEO-friendly foundations with optimization options.'
    },
    {
      question: 'Should I migrate from Joomla to WordPress for better SEO?',
      answer: 'Not necessarily! While WordPress has more SEO plugins, properly optimized Joomla sites rank just as well. Joomla offers superior access control, multi-language support, and flexibility. Migration costs often outweigh SEO benefits unless you have specific needs.'
    },
    {
      question: 'How do I handle Joomla multi-language SEO?',
      answer: 'Use Joomla\'s built-in multilingual features with language filter plugin. Create language-specific menu items, implement hreflang tags, optimize translations separately, and use language-specific URLs. Joomla excels at multi-language sites.'
    },
    {
      question: 'Can Joomla compete with modern platforms for SEO?',
      answer: 'Yes! Joomla powers millions of sites including major organizations. With proper configuration, modern extensions, and regular updates, Joomla remains competitive. The key is not the platform but How Ill it\'s optimized and maintained.'
    },
    {
      question: 'How do I optimize Joomla articles for SEO?',
      answer: 'Use descriptive titles with keywords, write unique meta descriptions, optimize images with alt text, use proper heading structure, enable author and date markup, create SEO-friendly aliases, and implement internal linking strategies.'
    },
    {
      question: 'What is the best Joomla hosting for SEO?',
      answer: 'Choose hosting with PHP 7.4+, MySQL optimization, SSD storage, CDN integration, and automatic backups. Managed Joomla hosting from providers like SiteGround, Cloudways, or A2 Hosting provides optimized environments for SEO performance.'
    },
    {
      question: 'How do I track Joomla SEO performance?',
      answer: 'Install Google Analytics and Search Console. Use SH404SEF analytics features, track keyword rankings, monitor Core Web Vitals, analyze traffic sources, and measure conversion rates. Regular monitoring helps identify opportunities and issues.'
    },
    {
      question: 'Should I hire a Joomla SEO specialist?',
      answer: 'For competitive niches or large sites, yes! Joomla SEO requires platform-specific knowledge of extensions, configurations, and best practices. A specialist can maximize your investment and avoid common pitfalls that hurt rankings.'
    },
    {
      question: 'How long does Joomla SEO take to show results?',
      answer: 'Initial technical improvements show in 30-60 days. Significant traffic growth typically takes 90-120 days as content optimization and link building take effect. Competitive niches may require 6-12 months for top rankings.'
    }
  ]

  const features = [
    'Joomla technical SEO audit',
    'SEO extension setup (SH404SEF, EFSEO)',
    'URL rewriting and structure',
    'Performance optimization',
    'Meta tags and schema markup',
    'Mobile optimization',
  ]

  const benefits = [
    { icon: <FaWrench className="w-6 h-6" />, title: 'Flexible Structure', desc: 'SEO optimization for Joomla\'s flexible component system' },
    { icon: <FaBolt className="w-6 h-6" />, title: 'Performance', desc: 'JCH Optimize and advanced caching setup' },
    { icon: <FaSearch className="w-6 h-6" />, title: 'SH404SEF Expert', desc: 'Expert configuration of SH404SEF and EFSEO' },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: 'Mobile Ready', desc: 'Responsive templates optimized for SEO' },
    { icon: <FaGlobe className="w-6 h-6" />, title: 'Multi-Language', desc: 'Optimize content across multiple languages' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'ROI Focused', desc: 'Strategies that drive real business results' },
  ]

  const process = [
    { step: '1', title: 'Joomla Audit', desc: 'Complete technical audit and extension review' },
    { step: '2', title: 'Extension Setup', desc: 'Configure SH404SEF, EFSEO, and SEO extensions' },
    { step: '3', title: 'Performance', desc: 'Enable caching, JCH Optimize, and speed tweaks' },
    { step: '4', title: 'Content Strategy', desc: 'Optimize articles, categories, and components' },
    { step: '5', title: 'Technical SEO', desc: 'Implement schema markup and fix technical issues' },
    { step: '6', title: 'Monitoring', desc: 'Track rankings and continuous optimization' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful Joomla sites ranking on page 1 of Google with measurable ROI.'
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
      question: 'Is Joomla good for SEO?',
      answer: 'Yes! Joomla has strong SEO capabilities with built-in URL rewriting, meta tag management, and powerful extensions like SH404SEF that provide advanced SEO features comparable to any CMS.',
    },
    {
      question: 'What are the best Joomla SEO extensions?',
      answer: 'Top extensions include SH404SEF (comprehensive SEO suite), EFSEO (advanced SEO tools), JCH Optimize (performance), and OSMap (XML sitemaps). Many features are also built into Joomla core.',
    },
    {
      question: 'How do I improve Joomla site speed?',
      answer: 'Enable Joomla cache, use JCH Optimize for CSS/JS compression, optimize images, enable Gzip compression, use CDN, minimize extensions, and choose lightweight templates.',
    },
    {
      question: 'Can Joomla compete with WordPress for SEO?',
      answer: 'Absolutely. While WordPress has more SEO plugins, Joomla\'s built-in features and powerful extensions like SH404SEF provide excellent SEO capabilities for enterprise and complex sites.',
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
                "@id": "https://adeelahmad.com/services/joomla-seo#service",
                "serviceType": "Joomla SEO Services",
                "name": "Joomla SEO Services",
                "description": "Professional Joomla SEO services for better rankings. Technical optimization, extension configuration, and performance improvements for Joomla sites.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Joomla SEO Specialist"
                },
                "areaServed": "Global",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceRange": "$$-$$$"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/services/joomla-seo#webpage",
                "url": "https://adeelahmad.com/services/joomla-seo",
                "name": "Joomla SEO Services | Expert Joomla Website Optimization",
                "description": "Professional Joomla SEO services for better rankings. Technical optimization, extension configuration, and performance improvements for Joomla sites.",
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
                    "name": "Joomla SEO",
                    "item": "https://adeelahmad.com/services/joomla-seo"
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.5 2l-2 2h-3L5 6.5v3l-2 2 2 2v3L7.5 19h3l2 2 2-2h3l2.5-2.5v-3l2-2-2-2v-3L17.5 4h-3l-2-2zm0 3.5l1 1h2l1.5 1.5v2l1 1-1 1v2L15.5 15.5h-2l-1 1-1-1h-2L8 13.5v-2l-1-1 1-1v-2L9.5 6h2l1-1z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Joomla Platform</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">Joomla SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-4 drop-shadow-lg">
                  Professional SEO optimization for powerful Joomla websites. Maximize your CMS potential with expert strategies tailored for Joomla 3.x, 4.x, and 5.x platforms.
                </p>
                <p className="text-base md:text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Leverage advanced Joomla SEO techniques including template optimization, extension configuration, URL rewriting, metadata management, and performance tuning to dominate search rankings and drive organic traffic to your Joomla site.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">380%</div>
                    <div className="text-sm text-slate-300">Organic Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Page 1</div>
                    <div className="text-sm text-slate-300">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Joomla SEO Audit"
                  subtitle="Discover how to dominate Joomla search results"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Joomla" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug="joomla-seo"
          industryIcon="🔦"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Joomla" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Joomla" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Joomla" 
          stats={[
            { value: "3M+", label: "websites powered by Joomla worldwide", icon: <FaGlobe className="w-6 h-6" />, color: "from-red-500 to-orange-500" },
            { value: "89%", label: "of developers prefer Joomla for complex sites", icon: <FaLaptop className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "72%", label: "of Joomla sites need SEO optimization", icon: <FaSearch className="w-6 h-6" />, color: "from-yellow-500 to-amber-500" },
            { value: "4.2x", label: "better ROI with expert Joomla SEO", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Joomla SEO Process */}
        <ProcessTimeline 
          industry="Joomla" 
          steps={[
            { step: 1, title: "Technical Audit", description: "Complete analysis of your Joomla site structure and extensions", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Extension Setup", description: "Configure SH404SEF, EFSEO, and other SEO extensions", icon: <FaWrench className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "URL Optimization", description: "Clean URL rewriting and structure implementation", icon: <FaLink className="w-6 h-6" />, duration: "Weeks 2-3" },
            { step: 4, title: "Speed Optimization", description: "JCH Optimize setup and caching configuration", icon: <FaBolt className="w-6 h-6" />, duration: "Weeks 3-4" },
            { step: 5, title: "Content Strategy", description: "Article and category optimization for target keywords", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 4-6" },
            { step: 6, title: "Monitor & Improve", description: "Track rankings and continuous optimization", icon: <FaChartArea className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Joomla" 
          pillars={[
            { title: "Joomla Technical SEO", description: "Core technical optimization for Joomla sites", topics: ["URL rewriting", "Canonical tags", "XML sitemaps", "Robots.txt"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Extension Optimization", description: "SEO extension configuration and setup", topics: ["SH404SEF setup", "EFSEO config", "OSMap sitemaps", "Cache plugins"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Content Components", description: "Optimize articles, categories, and modules", topics: ["Article SEO", "Category pages", "Meta tags", "Heading structure"], icon: <FaEdit className="w-6 h-6" /> },
            { title: "Multi-Language SEO", description: "International SEO for multilingual Joomla sites", topics: ["Hreflang tags", "Language filters", "Content translation", "Regional targeting"], icon: <FaGlobeAmericas className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Joomla"
          signals={[
            { title: "Technical Foundation", description: "Properly configured Joomla core and SEO extensions", importance: "Critical", icon: <FaCog className="w-6 h-6" /> },
            { title: "Clean URL Structure", description: "SEO-friendly URLs with proper rewriting", importance: "Critical", icon: <FaLink className="w-6 h-6" /> },
            { title: "Schema Markup", description: "Structured data implementation for rich results", importance: "High", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Page Speed", description: "Optimized loading with caching and compression", importance: "High", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Mobile Optimization", description: "Responsive templates and mobile-first indexing", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Content Quality", description: "Well-structured articles with proper headings", importance: "Medium", icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Joomla"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Page 1 rankings for target keywords", withoutSEO: "Buried in search results" },
            { feature: "Extension Setup", withSEO: "Optimized SH404SEF and EFSEO config", withoutSEO: "Default unconfigured settings" },
            { feature: "URL Structure", withSEO: "Clean, keyword-rich URLs", withoutSEO: "Ugly component URLs" },
            { feature: "Site Speed", withSEO: "Fast loading with JCH Optimize", withoutSEO: "Slow, unoptimized pages" },
            { feature: "Content Strategy", withSEO: "Targeted, optimized articles", withoutSEO: "Random, unfocused content" },
            { feature: "Technical Health", withSEO: "Error-free, crawlable site", withoutSEO: "Technical issues blocking rankings" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Joomla"
          caseStudy={{
            title: "Enterprise Joomla Website",
            industry: "Joomla CMS",
            results: [
              { metric: "Organic Traffic", value: "285%", change: "increase in visitors" },
              { metric: "Keyword Rankings", value: "52", change: "first page keywords" },
              { metric: "Page Speed", value: "2.1s", change: "load time (from 8s)" },
              { metric: "Lead Generation", value: "180%", change: "increase in inquiries" }
            ],
            testimonial: "Our Joomla site went from invisible to ranking on page 1. The technical expertise made all the difference.",
            clientName: "Enterprise Client"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Joomla"
          customItems={[
            { icon: <FaWrench className="w-6 h-6" />, title: "Joomla Expert", description: "Deep expertise in Joomla CMS and extensions" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of ranking Joomla sites" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Speed Specialist", description: "Expert in JCH Optimize and performance" },
            { icon: <FaGlobeAmericas className="w-6 h-6" />, title: "Multi-Language Expert", description: "Joomla multilingual SEO expertise" },
            { icon: <FaLock className="w-6 h-6" />, title: "Security Focused", description: "Secure optimization practices" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI Driven", description: "Strategies that deliver business results" }
          ]}
        />

        {/* Section 6: CMS/Services Overview Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-600/20 dark:border-red-400/20 mb-6">
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-red-600 dark:text-red-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Joomla <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Flexible CMS optimization with powerful extensions and capabilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "SH404SEF & Extension Setup",
                  description: "Expert configuration of SH404SEF, EFSEO, and essential Joomla SEO extensions for maximum visibility",
                  icon: <FaWrench className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "URL Structure Optimization",
                  description: "Clean, keyword-rich URLs with proper rewriting, aliases, and redirect management for SEO success",
                  icon: <FaLink className="w-6 h-6" />,
                  color: "from-orange-500 to-amber-500"
                },
                {
                  title: "JCH Optimize Performance",
                  description: "Advanced caching, CSS/JS compression, and speed optimization for faster loading and better rankings",
                  icon: <FaBolt className="w-6 h-6" />,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Content Component SEO",
                  description: "Optimize articles, categories, and components with proper meta tags, headings, and schema markup",
                  icon: <FaEdit className="w-6 h-6" />,
                  color: "from-green-500 to-teal-500"
                },
                {
                  title: "Template Optimization",
                  description: "Responsive, SEO-friendly templates with clean code, proper HTML5 structure, and fast loading",
                  icon: <FaPalette className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Multi-Language SEO",
                  description: "Configure Joomla's powerful multi-language features with hreflang tags for international reach",
                  icon: <FaGlobeAmericas className="w-6 h-6" />,
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
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
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

        <TopSEOServices />

        {/* Section 7: Top 10 Services */}

        {/* Section 8: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="joomla-seo" />

        {/* Section 9: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/20 dark:from-slate-950 dark:via-red-950/30 dark:to-orange-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Joomla SEO" />

        {/* Section 11: Cities Grid */}
        

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Joomla SEO?</h2>
            <p className="text-xl text-yellow-100 mb-8">Get a comprehensive Joomla SEO audit and custom strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-orange-600 font-bold hover:bg-orange-50 transition-all shadow-xl hover:scale-105"
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
