import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { industries } from '@/data/industries'
import { getCitiesByCountry } from '@/config/service-locations'
import { Award, Clock, DollarSign, Target } from 'lucide-react'
import CountriesGrid from '@/components/industries/CountriesGrid'
import { serviceTypes } from '@/config/services'
import SEOFramework from '@/components/industries/SEOFramework'
import WhyChooseMe from '@/components/industries/WhyChooseMe'
import HireLocalSEO from '@/components/industries/HireLocalSEO'
import ServicesGrid from '@/components/industries/ServicesGrid'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import { countries } from '@/data/locations'

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
import { FaBolt, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaGlobe, FaLaptop, FaMobileAlt, FaPalette, FaSearch, FaWrench } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Webflow SEO Services | Professional Webflow Website Optimization Expert',
  description: 'Expert Webflow SEO services for designers and agencies. Technical SEO, CMS optimization, and performance improvements for Webflow sites. Professional Webflow SEO agency.',
  keywords: 'Webflow SEO, Webflow SEO services, Webflow optimization, Webflow website SEO, Webflow technical SEO, Webflow SEO expert, Webflow SEO agency, Webflow rankings, Webflow CMS SEO, Webflow organic traffic, Webflow SEO consultant',
}

export default function WebflowSEOPage() {
  // Get cities from multiple countries
  const allCities = [
    ...getCitiesByCountry('united-states'),
    ...getCitiesByCountry('united-kingdom'),
    ...getCitiesByCountry('canada'),
    ...getCitiesByCountry('pakistan')
  ]

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
      question: 'Why choose Webflow for SEO compared to WordPress?',
      answer: 'Webflow offers clean semantic HTML, built-in CDN, automatic image optimization, and fast hosting infrastructure. Unlike WordPress, you don\'t need to manage plugins or worry about security updates. Webflow\'s visual development approach produces cleaner code that search engines love, and its hosting is optimized for Core Web Vitals by default.'
    },
    {
      question: 'How do I optimize Webflow CMS collections for SEO?',
      answer: 'Use dynamic fields for meta titles and descriptions, create SEO-friendly URL slugs in collection settings, implement proper heading hierarchy in collection templates, add alt text fields for images, use conditional visibility to show/hide content strategically, and create category pages with unique content to target broader keywords.'
    },
    {
      question: 'Can Webflow sites rank as well as custom-coded websites?',
      answer: 'Absolutely! Webflow generates clean, semantic HTML5 that\'s identical to hand-coded sites. In fact, Webflow sites often rank better because of built-in performance optimization, automatic responsive design, and hosting infrastructure. Google doesn\'t care if a site is built with Webflow - it cares about code quality, speed, and user experience.'
    },
    {
      question: 'What are the biggest Webflow SEO mistakes designers make?',
      answer: 'Common mistakes include not using heading tags in proper hierarchy, forgetting to add alt text to CMS images, creating too many nested divs affecting page structure, not utilizing Webflow\'s SEO settings panel, copying content from Figma without optimization, and building interactions that hide content from search engines. We fix all of these systematically.'
    },
    {
      question: 'How important is page speed for Webflow SEO?',
      answer: 'Critical! While Webflow hosting is fast by default, poorly optimized sites still suffer. Every 1-second delay reduces conversions by 7%. I optimize by compressing images before upload, minimizing custom code, using Webflow\'s lazy loading, optimizing interactions, and leveraging the global CDN to achieve sub-2-second load times.'
    },
    {
      question: 'Should I use Webflow apps or custom code for SEO?',
      answer: 'It depends on the feature. For schema markup, custom code in the page settings is better than third-party apps. For analytics and tracking, native integrations work well. Use apps for features like forms and chat, but implement SEO fundamentals through Webflow\'s built-in features and targeted custom code injection.'
    },
    {
      question: 'How do I optimize Webflow for designer workflow without sacrificing SEO?',
      answer: 'Create reusable SEO-optimized components and symbols, use combo classes strategically for semantic HTML, build a style guide with proper heading hierarchy, implement SEO checklists in your design process, use Webflow\'s CMS preview for content strategy, and document SEO requirements in your client handoff.'
    },
    {
      question: 'Can blog content help my Webflow site rank?',
      answer: 'Absolutely! Webflow\'s CMS is perfect for blogging. Create SEO-optimized blog templates with proper schema markup, use categories and tags strategically, implement related posts sections, add author bios with schema, and link blog posts to service pages. This builds topical authority and captures customers throughout their journey.'
    },
    {
      question: 'How do I handle SEO when using Webflow Designer?',
      answer: 'Use the SEO settings panel for every page, set up global SEO defaults in site settings, create naming conventions for classes that reflect semantic meaning, use Webflow\'s heading elements (not styled text blocks), implement breadcrumbs in your navigation structure, and preview meta tags before publishing.'
    },
    {
      question: 'What about duplicate content in Webflow?',
      answer: 'Webflow handles canonical URLs automatically for CMS items, but you need to write unique content for each page. Avoid using the same text blocks across multiple pages. Use dynamic embeds for testimonials and reviews. Create unique collection item descriptions. We ensure every page has unique, valuable content.'
    },
    {
      question: 'How long does Webflow SEO take to show results?',
      answer: 'Typically 2-5 months for significant improvements. Webflow\'s technical advantages mean you can see faster results than platforms with technical debt. Service pages may rank in 45-75 days for long-tail keywords. Competitive terms require more time and content. I provide monthly progress reports showing ranking improvements.'
    },
    {
      question: 'Do I need backlinks for Webflow SEO?',
      answer: 'Yes, backlinks remain crucial. I build links through design community features, portfolio showcases, case studies, guest posts on design blogs, client testimonials with links, agency directories, and creating shareable design resources. Quality over quantity - one authoritative design blog link beats 100 spammy directory listings.'
    },
    {
      question: 'How do I compete with WordPress sites that have more plugins?',
      answer: 'Focus on Webflow\'s strengths: superior performance, cleaner code, better security, and faster development. While WordPress has more plugins, most are bloat that slows sites down. Webflow\'s curated feature set and custom code injection capabilities give you everything you need without the technical debt.'
    },
    {
      question: 'Should I hire a Webflow agency or specialist for SEO?',
      answer: 'Specialists who understand both Webflow development and SEO are ideal. Many agencies treat Webflow like any CMS without leveraging its unique features. As a Webflow-specialized SEO consultant, I know how to optimize the Designer interface, CMS structure, and hosting features for maximum search visibility.'
    },
    {
      question: 'How do interactions and animations affect Webflow SEO?',
      answer: 'Interactions don\'t inherently hurt SEO, but hiding content with interactions can. Ensure important content is visible in the DOM, use interactions for enhancement not functionality, optimize interaction-heavy pages for speed, and implement progressive enhancement. We make sites beautiful AND search-friendly.'
    },
    {
      question: 'Can I track ROI from Webflow SEO?',
      answer: 'Yes! We set up Google Analytics 4, conversion tracking, form submission tracking, and goal funnels. You\'ll see exactly which keywords drive traffic, which pages convert best, revenue attribution to organic search, and detailed user behavior analysis. Data-driven decisions lead to better results.'
    },
    {
      question: 'How do I optimize Webflow e-commerce for SEO?',
      answer: 'Optimize product CMS items with unique descriptions, use high-quality images with descriptive alt text, implement product schema markup, create category pages with filtering, optimize checkout flow for conversions, add customer reviews, and create content pages that link to products. Webflow e-commerce has excellent SEO potential.'
    }
  ];

  const features = [
    'Webflow CMS SEO setup',
    'Custom code and schema markup',
    'Page speed optimization',
    'Dynamic content optimization',
    'Technical SEO audit',
    'Webflow hosting optimization',
  ]

  const benefits = [
    { icon: <FaBullseye className="w-6 h-6" />, title: 'Visual Development', desc: 'SEO optimization built into visual development workflow' },
    { icon: <FaBolt className="w-6 h-6" />, title: 'Lightning Fast', desc: 'Webflow hosting and CDN for incredible speed' },
    { icon: <FaWrench className="w-6 h-6" />, title: 'CMS Optimization', desc: 'Expert Webflow CMS setup for dynamic content' },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: 'Responsive First', desc: 'Perfect responsive design for all devices' },
    { icon: <FaPalette className="w-6 h-6" />, title: 'Designer-Friendly', desc: 'SEO that works with your design process' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'ROI Focused', desc: 'Strategies that drive conversions and growth' },
  ]

  const process = [
    { step: '1', title: 'Webflow Audit', desc: 'Complete analysis of your Webflow site and CMS structure' },
    { step: '2', title: 'CMS Optimization', desc: 'Optimize collections, templates, and dynamic content' },
    { step: '3', title: 'Code Enhancement', desc: 'Add custom code for schema markup and advanced SEO' },
    { step: '4', title: 'Content Strategy', desc: 'Optimize pages and blog content for target keywords' },
    { step: '5', title: 'Technical SEO', desc: 'Implement redirects, canonical tags, and site structure' },
    { step: '6', title: 'Performance Monitoring', desc: 'Track rankings, traffic, and ongoing optimization' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful Webflow sites ranking on page 1 of Google with measurable ROI.'
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
      question: 'Is Webflow better than WordPress for SEO?',
      answer: 'Webflow offers clean code, fast hosting, and strong technical SEO foundations out-of-the-box. While WordPress has more plugins, Webflow\'s built-in features and performance make it excellent for SEO.',
    },
    {
      question: 'Can I do advanced SEO on Webflow?',
      answer: 'Yes! Webflow allows custom code injection, schema markup, dynamic meta tags, canonical URLs, redirects, and full control over technical SEO elements.',
    },
    {
      question: 'How do I optimize Webflow CMS for SEO?',
      answer: 'Use dynamic fields for meta tags, create SEO-friendly URL slugs, optimize collection templates, implement proper heading hierarchy, and use conditional visibility for content.',
    },
    {
      question: 'Does Webflow have good page speed?',
      answer: 'Yes, Webflow sites typically have excellent page speed due to clean code, automatic CDN, image optimization, and fast global hosting infrastructure.',
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
                "@id": "https://adeelahmad.com/services/webflow-seo#service",
                "serviceType": "Webflow SEO Services",
                "name": "Webflow SEO Services",
                "description": "Expert Webflow SEO services for designers and agencies. Technical SEO, CMS optimization, and performance improvements for Webflow sites.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Webflow SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/webflow-seo#webpage",
                "url": "https://adeelahmad.com/services/webflow-seo",
                "name": "Webflow SEO Services | Professional Webflow Website Optimization Expert",
                "description": "Expert Webflow SEO services for designers and agencies. Technical SEO, CMS optimization, and performance improvements for Webflow sites.",
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
                    "name": "Webflow SEO",
                    "item": "https://adeelahmad.com/services/webflow-seo"
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3L21 7.5V16.5L16.5 21H7.5L3 16.5V7.5L7.5 3H16.5ZM12 8L8 12L12 16L16 12L12 8Z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Webflow Platform</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Webflow SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-4 drop-shadow-lg">
                  Professional SEO for designers building on Webflow. Transform beautiful designs into high-ranking websites.
                </p>
                <p className="text-base md:text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Advanced Webflow CMS optimization including collection page SEO, dynamic content structuring, custom code implementation, interactions performance tuning, and designer-friendly strategies that leverage Webflow's clean code advantage.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">400%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">Top 3</div>
                    <div className="text-sm text-slate-300">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Webflow SEO Audit"
                  subtitle="Discover how to dominate Webflow search results"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Webflow Development" />

        {/* Section 3: Why Choose Me */}
        <WhyChooseMe industry="Webflow" />

        {/* Section 4: Custom Service Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950/30 to-indigo-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Webflow SEO?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Combine powerful visual development with expert SEO optimization</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Webflow Development" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Webflow" 
          stats={[
            { value: "3.5M+", label: "websites built on Webflow platform", icon: <FaGlobe className="w-6 h-6" />, color: "from-blue-500 to-indigo-500" },
            { value: "94%", label: "of designers prefer Webflow for client sites", icon: <FaPalette className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "68%", label: "of Webflow sites need SEO optimization", icon: <FaSearch className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" },
            { value: "5.1x", label: "faster results with Webflow SEO expertise", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Webflow SEO Process */}
        <ProcessTimeline 
          industry="Webflow" 
          steps={[
            { step: 1, title: "Webflow Audit", description: "Complete analysis of your Webflow site and CMS structure", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "CMS Optimization", description: "Optimize collections, templates, and dynamic content", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Code Enhancement", description: "Add custom code for schema markup and advanced SEO", icon: <FaLaptop className="w-6 h-6" />, duration: "Weeks 2-3" },
            { step: 4, title: "Performance Tuning", description: "Image optimization and speed improvements", icon: <FaBolt className="w-6 h-6" />, duration: "Weeks 3-4" },
            { step: 5, title: "Content Strategy", description: "Optimize pages and blog content for target keywords", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 4-6" },
            { step: 6, title: "Monitor & Refine", description: "Track rankings and continuous optimization", icon: <FaChartArea className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Webflow" 
          pillars={[
            { title: "Webflow Technical SEO", description: "Technical optimization for Webflow's architecture", topics: ["Meta tags setup", "Canonical URLs", "Sitemap config", "Redirects"], icon: <FaCog className="w-6 h-6" /> },
            { title: "CMS Optimization", description: "Optimize Webflow CMS for search visibility", topics: ["Collection SEO", "Dynamic meta", "URL slugs", "Template structure"], icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Design & Performance", description: "Balance beautiful design with fast loading", topics: ["Image optimization", "Interaction SEO", "Responsive design", "Code efficiency"], icon: <FaPalette className="w-6 h-6" /> },
            { title: "Content Strategy", description: "Content optimization for Webflow sites", topics: ["Blog SEO", "Page optimization", "Internal linking", "Content hubs"], icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Webflow"
          signals={[
            { title: "Technical Structure", description: "Properly configured Webflow SEO settings", importance: "Critical", icon: <FaCog className="w-6 h-6" /> },
            { title: "CMS Configuration", description: "Optimized collections and dynamic content", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Schema Markup", description: "Custom code for structured data", importance: "High", icon: <FaLaptop className="w-6 h-6" /> },
            { title: "Page Speed", description: "Optimized images and efficient interactions", importance: "High", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Mobile Experience", description: "Perfect responsive design across devices", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Content Quality", description: "Well-structured pages with proper hierarchy", importance: "Medium", icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Webflow"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Page 1 rankings for target keywords", withoutSEO: "Beautiful but invisible site" },
            { feature: "CMS Setup", withSEO: "SEO-optimized collections and templates", withoutSEO: "Default CMS configuration" },
            { feature: "Technical SEO", withSEO: "Custom code for advanced features", withoutSEO: "Basic Webflow defaults only" },
            { feature: "Site Speed", withSEO: "Optimized for Core Web Vitals", withoutSEO: "Slow due to unoptimized assets" },
            { feature: "Content Strategy", withSEO: "Targeted, keyword-rich content", withoutSEO: "Design-focused but no SEO value" },
            { feature: "Lead Generation", withSEO: "Organic traffic driving conversions", withoutSEO: "Dependent on paid advertising" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Webflow"
          caseStudy={{
            title: "Design Agency Webflow Site",
            industry: "Webflow",
            results: [
              { metric: "Organic Traffic", value: "340%", change: "increase in visitors" },
              { metric: "Keyword Rankings", value: "45", change: "first page keywords" },
              { metric: "Page Speed", value: "1.8s", change: "load time optimized" },
              { metric: "Client Inquiries", value: "220%", change: "increase in leads" }
            ],
            testimonial: "Our Webflow site finally ranks as beautifully as it looks. The SEO expertise transformed our online presence.",
            clientName: "Design Agency Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Webflow"
          customItems={[
            { icon: <FaPalette className="w-6 h-6" />, title: "Webflow Expert", description: "Deep expertise in Webflow development and SEO" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of ranking Webflow sites" },
            { icon: <FaLaptop className="w-6 h-6" />, title: "Custom Code Expert", description: "Advanced SEO through code injection" },
            { icon: <FaClipboardList className="w-6 h-6" />, title: "CMS Specialist", description: "Webflow CMS optimization expertise" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Performance Focused", description: "Speed optimization for Webflow" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI Driven", description: "Beautiful sites that also convert" }
          ]}
        />

        <TopSEOServices />

        {/* Section 6: Top 10 Services */}

        {/* Section 7: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="webflow-seo" />

        {/* Section 8: Testimonials */}
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

        {/* Section 9: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Webflow SEO" />





        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Webflow SEO?</h2>
            <p className="text-xl text-cyan-100 mb-8">Get a comprehensive Webflow SEO audit and custom strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-cyan-600 font-bold hover:bg-cyan-50 transition-all shadow-xl hover:scale-105"
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
