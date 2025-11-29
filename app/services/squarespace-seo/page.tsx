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
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import { countries } from '@/data/locations'
import ProcessTimeline from '@/components/industries/ProcessTimeline'
import IndustryStats from '@/components/industries/IndustryStats'
import TrustSignals from '@/components/industries/TrustSignals'
import CompetitorComparison from '@/components/industries/CompetitorComparison'
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight'
import TopicClusterSection from '@/components/industries/TopicClusterSection'
import { FaPalette, FaBolt, FaWrench, FaMobileAlt, FaShoppingBag, FaDollarSign, FaSearch, FaGlobe, FaClipboardList, FaCog, FaEdit, FaMapMarkerAlt, FaBriefcase, FaLink, FaChartLine, FaBullseye } from 'react-icons/fa'
import LocalSEOSignals from '@/components/industries/LocalSEOSignals'
import TopSEOServices from '@/components/services/TopSEOServices'
import ServicesGrid from '@/components/industries/ServicesGrid'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import FAQSection from '@/components/seo/FAQSection'

export const metadata: Metadata = {
  title: 'Squarespace SEO Services | Boost Your Site Rankings',
  description: 'Expert Squarespace SEO for creative professionals and agencies. Technical optimization, content strategy, and performance improvements for beautiful sites.',
  keywords: 'Squarespace SEO, Squarespace SEO services, Squarespace optimization, Squarespace website SEO, Squarespace technical SEO, Squarespace SEO expert, Squarespace SEO agency, Squarespace rankings, Squarespace SEO settings, Squarespace organic traffic, Squarespace SEO consultant',
}

export default function SquarespaceSEOPage() {
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
      question: 'Is Squarespace good for SEO in 2025?',
      answer: 'Yes! Squarespace has evolved into an excellent SEO platform with clean HTML5, built-in SSL, automatic sitemaps, mobile-first design, fast CDN, and comprehensive SEO settings. While it lacks WordPress\'s flexibility, Squarespace\'s curated feature set and performance optimization make it competitive for most businesses. Beautiful design meets strong technical SEO.'
    },
    {
      question: 'How do I optimize Squarespace templates for SEO?',
      answer: 'Choose templates with clean structure, fast loading, and good mobile responsiveness. Customize using style editor for branding, optimize template navigation structure, implement proper heading hierarchy, use built-in SEO features in page settings, add custom code for schema markup, and optimize template-specific features. We evaluate and optimize any Squarespace template.'
    },
    {
      question: 'Can Squarespace sites rank on Google\'s first page?',
      answer: 'Absolutely! Squarespace sites regularly rank #1 for competitive keywords. The platform\'s clean code, fast hosting, and mobile optimization provide solid SEO foundations. Success depends on content quality, keyword targeting, technical optimization, and backlinks - not the platform. We\'ve achieved top rankings for dozens of Squarespace sites.'
    },
    {
      question: 'What are Squarespace\'s SEO limitations?',
      answer: 'Limitations include less customization than WordPress, no traditional plugins (uses code injection instead), limited control over URL structure for some elements, fewer third-party integrations, and less flexibility for large complex sites. However, these limitations rarely impact most businesses. The trade-off is simplicity and reliability.'
    },
    {
      question: 'How do I improve Squarespace site speed?',
      answer: 'Compress images before uploading (use TinyPNG), choose performance-optimized templates, minimize custom code, use Squarespace\'s image optimization features, implement lazy loading, optimize CSS/JavaScript, leverage built-in CDN, and avoid embedding too many third-party scripts. Squarespace hosting is fast by default - optimization maintains that speed.'
    },
    {
      question: 'Should I use custom code or built-in features for Squarespace SEO?',
      answer: 'Use built-in features first - they\'re well-optimized and reliable. Add custom code for advanced features like enhanced schema markup, custom tracking, advanced analytics, or features Squarespace doesn\'t offer natively. I implement custom code strategically without compromising site stability or breaking updates.'
    },
    {
      question: 'How do I optimize Squarespace Commerce for SEO?',
      answer: 'Write unique product descriptions (300+ words), use high-quality product images with descriptive filenames and alt text, implement product schema markup via code injection, create category pages with unique content, add customer reviews, optimize product URLs, create buying guides linking to products, and build backlinks to popular product pages.'
    },
    {
      question: 'Can blog content help my Squarespace site rank?',
      answer: 'Blogging is essential! Squarespace\'s blog feature is user-friendly and SEO-capable. Create in-depth posts (1500+ words), use categories strategically, implement internal linking to services/products, optimize blog post URLs and meta tags, add images with alt text, and maintain consistent publishing. Blogging builds topical authority and drives organic traffic.'
    },
    {
      question: 'How do I handle Squarespace mobile optimization?',
      answer: 'Squarespace templates are mobile-responsive by default, but you must test and optimize. Check mobile preview for each page, adjust text sizes for readability, optimize touch targets (buttons/links), ensure forms work properly, test page speed on mobile, verify images scale correctly, and adjust spacing. Mobile experience directly impacts rankings.'
    },
    {
      question: 'What about Squarespace template customization for SEO?',
      answer: 'You can customize templates extensively without coding using Style Editor for visual changes, Page Design settings for layouts, and Custom CSS for advanced styling. For SEO, focus on semantic structure, page speed impact, mobile responsiveness, and heading hierarchy. Beautiful design shouldn\'t compromise SEO performance.'
    },
    {
      question: 'How long does Squarespace SEO take to show results?',
      answer: 'Typically 3-6 months for significant improvements. Squarespace\'s technical infrastructure is solid, so results depend primarily on content quality and backlinks. New sites need 4-6 months to build authority. Established sites with good content can see improvements in 2-3 months. Local businesses often see faster results.'
    },
    {
      question: 'Do I need backlinks for Squarespace SEO?',
      answer: 'Yes, backlinks remain crucial! I build links through content marketing, business directories, industry publications, guest posting, partnerships, digital PR, and creating shareable resources. One quality link from an authoritative source beats dozens of low-quality links. Backlinks signal trust and authority to search engines.'
    },
    {
      question: 'How do I compete with WordPress sites using Squarespace?',
      answer: 'Leverage Squarespace\'s advantages: superior design quality, hassle-free maintenance, built-in security, reliable hosting, and faster development. While WordPress offers more plugins, Squarespace\'s curated feature set is sufficient for most businesses. Focus on content quality, user experience, and conversion optimization. Execution matters more than platform.'
    },
    {
      question: 'Should I migrate from Squarespace to WordPress for SEO?',
      answer: 'Usually not necessary! Migration is risky, expensive, and time-consuming with potential for lost rankings during transition. Modern Squarespace handles SEO excellently. Only migrate if you need specific WordPress functionality unrelated to SEO. We\'ve consistently achieved top rankings with Squarespace - no migration needed.'
    },
    {
      question: 'How do Squarespace cover pages affect SEO?',
      answer: 'Cover pages can be homepage splash screens or landing pages. For SEO, ensure cover pages have proper meta tags, include relevant content (not just images), link to main site clearly, load quickly, and work on mobile. Consider if a cover page adds value or creates friction. Often, a well-designed homepage works better for SEO.'
    },
    {
      question: 'Can I track ROI from Squarespace SEO?',
      answer: 'Yes! I implement Google Analytics 4, set up conversion tracking, track form submissions, monitor phone calls, create goal funnels, and track revenue attribution. You\'ll see exactly which keywords drive conversions, organic traffic ROI, user behavior analysis, and customer journey insights. Data-driven decisions maximize your investment.'
    },
    {
      question: 'How do I optimize Squarespace for local SEO?',
      answer: 'Create location-specific pages with unique content, implement local business schema markup, optimize Google Business Profile, get customer reviews, build local citations, create location-based blog content, optimize for "near me" searches, and build local backlinks. Squarespace\'s clean design showcases your business professionally to local customers.'
    }
  ];

  const features = [
    'Comprehensive Squarespace site audit',
    'Built-in SEO features optimization',
    'Custom CSS and code injection',
    'Image optimization and compression',
    'URL structure and navigation setup',
    'Mobile design and performance',
  ]

  const benefits = [
    { icon: <FaPalette className="w-6 h-6" />, title: 'Beautiful & SEO-Ready', desc: 'Optimize stunning Squarespace templates for search' },
    { icon: <FaBolt className="w-6 h-6" />, title: 'Built-in Speed', desc: 'Leverage Squarespace CDN and fast hosting' },
    { icon: <FaWrench className="w-6 h-6" />, title: 'Template Optimization', desc: 'Expert configuration of built-in SEO features' },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: 'Mobile Excellence', desc: 'Perfect mobile experience out of the box' },
    { icon: <FaShoppingBag className="w-6 h-6" />, title: 'Commerce SEO', desc: 'Squarespace Commerce optimization for sales' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'Conversion Focus', desc: 'Strategies that drive leads and revenue' },
  ]

  const process = [
    { step: '1', title: 'Site Analysis', desc: 'Complete Squarespace SEO and template audit' },
    { step: '2', title: 'SEO Settings', desc: 'Configure built-in SEO features and meta tags' },
    { step: '3', title: 'Template Optimization', desc: 'Optimize template structure and custom code' },
    { step: '4', title: 'Content Strategy', desc: 'Optimize pages, blog posts, and product listings' },
    { step: '5', title: 'Technical SEO', desc: 'Implement schema markup and fix technical issues' },
    { step: '6', title: 'Performance Tracking', desc: 'Monthly monitoring and strategy refinements' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful Squarespace sites ranking on page 1 of Google with measurable ROI.'
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
      question: 'Is Squarespace good for SEO?',
      answer: 'Yes! Squarespace has strong built-in SEO features including clean code, automatic sitemaps, SSL certificates, and mobile optimization. With proper configuration, Squarespace sites rank very well.',
    },
    {
      question: 'Can I customize Squarespace for better SEO?',
      answer: 'Yes, you can add custom CSS, inject code in headers/footers, modify meta tags, create custom URLs, and integrate third-party SEO tools via code injection.',
    },
    {
      question: 'Does Squarespace have SEO plugins?',
      answer: 'Squarespace doesn\'t use traditional plugins, but has built-in SEO features and allows third-party integrations through code injection and API connections.',
    },
    {
      question: 'How do I improve Squarespace site speed?',
      answer: 'Optimize images before upload, minimize custom code, use Squarespace\'s built-in CDN, choose performance-focused templates, and enable lazy loading for images.',
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
                "@id": "https://adeelahmad.com/services/squarespace-seo#service",
                "serviceType": "Squarespace SEO Services",
                "name": "Squarespace SEO Services",
                "description": "Expert Squarespace SEO optimization for creative professionals and agencies. Technical optimization, content strategy, and performance improvements for beautiful Squarespace sites.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Squarespace SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/squarespace-seo#webpage",
                "url": "https://adeelahmad.com/services/squarespace-seo",
                "name": "Squarespace SEO Services | Boost Your Site Rankings",
                "description": "Expert Squarespace SEO for creative professionals and agencies. Technical optimization, content strategy, and performance improvements for beautiful sites.",
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
                    "name": "Squarespace SEO",
                    "item": "https://adeelahmad.com/services/squarespace-seo"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="4" width="7" height="7" />
                    <rect x="13" y="4" width="7" height="7" />
                    <rect x="4" y="13" width="7" height="7" />
                    <rect x="13" y="13" width="7" height="7" />
                  </svg>
                  <span className="text-sm font-bold text-white">Squarespace Platform</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent">Squarespace SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-4 drop-shadow-lg">
                  Expert optimization for beautiful Squarespace websites. Dominate search results with data-driven SEO strategies.
                </p>
                <p className="text-base md:text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Comprehensive Squarespace 7.0 and 7.1 optimization including template customization, URL structure refinement, built-in SEO panel configuration, metadata optimization, and integration with analytics to maximize your designer platform's search potential.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">350%</div>
                    <div className="text-sm text-slate-300">Traffic Increase</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold">#1</div>
                    <div className="text-sm text-slate-300">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Squarespace SEO Audit"
                  subtitle="Discover how to dominate Squarespace search results"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Squarespace Design" />

        {/* Section 3: Why Choose Me */}
        <WhyChooseMe industry="Squarespace" />

        {/* Section 4: Custom Service Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Squarespace SEO?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Combine beautiful design with powerful SEO for maximum impact</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Squarespace Design" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Squarespace" 
          stats={[
            { value: "88%", label: "of creatives research portfolio sites online", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "3.7M", label: "Squarespace websites active worldwide", icon: <FaGlobe className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "79%", label: "of new clients find designers via search engines", icon: <FaPalette className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "11x", label: "SEO ROI vs paid advertising campaigns", icon: <FaDollarSign className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
          ]}
        />

        {/* Squarespace SEO Process */}
        <ProcessTimeline 
          industry="Squarespace" 
          steps={[
            { step: 1, title: "Platform Audit", description: "Squarespace-specific SEO audit for design portfolios and service sites", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Keyword Strategy", description: "Creative industry keyword research and content mapping", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "On-Page Optimization", description: "Page titles, descriptions, image alt text, and URL structure", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Enhancement", description: "Portfolio descriptions, service pages, and blog content", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Technical Fixes", description: "Mobile optimization, page speed, and Squarespace SEO settings", icon: <FaWrench className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Local Visibility", description: "Local SEO for creative professionals and agencies", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Squarespace" 
          pillars={[
            { title: "Portfolio SEO", description: "Portfolio page optimization, project descriptions, case study SEO, and visual content optimization", topics: ["Portfolio pages", "Project showcases", "Case studies", "Visual optimization"], icon: <FaPalette className="w-6 h-6" /> },
            { title: "Service Pages", description: "Service offering pages, pricing page SEO, and creative service descriptions", topics: ["Service listings", "Pricing pages", "Package pages", "Inquiry forms"], icon: <FaBriefcase className="w-6 h-6" /> },
            { title: "Technical Squarespace", description: "Squarespace SEO settings, mobile optimization, and platform-specific improvements", topics: ["SEO settings", "Mobile design", "Speed optimization", "Indexing"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Content Strategy", description: "Blog content, design insights, creative process content, and thought leadership", topics: ["Design blog", "Process insights", "Industry trends", "Tutorials"], icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Squarespace"
          signals={[
            { title: "Visual Content Optimization", description: "Optimized portfolio images with proper alt text and file names", importance: "Critical", icon: "🖼️" },
            { title: "Mobile Design Excellence", description: "Mobile-first creative experience for all visitors", importance: "Critical", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Page Speed Performance", description: "Fast-loading portfolio galleries and image optimization", importance: "High", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Content Quality", description: "Compelling project descriptions and case study content", importance: "High", icon: <FaEdit className="w-6 h-6" /> },
            { title: "Local Creative Presence", description: "Location-based creative services for local clients", importance: "High", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Social Integration", description: "Social proof and platform connections for credibility", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Squarespace"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Found by dream clients searching for design services", withoutSEO: "Beautiful but invisible website" },
            { feature: "Client Acquisition", withSEO: "Consistent organic inquiries from qualified leads", withoutSEO: "Word-of-mouth only" },
            { feature: "Portfolio Traffic", withSEO: "Thousands of monthly portfolio views", withoutSEO: "Minimal portfolio exposure" },
            { feature: "Brand Authority", withSEO: "Recognized industry creative professional", withoutSEO: "Unknown designer status" },
            { feature: "Lead Quality", withSEO: "Pre-qualified project leads ready to work", withoutSEO: "Random inquiries" },
            { feature: "Business Growth", withSEO: "Scalable creative business model", withoutSEO: "Stagnant client base" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Squarespace"
          caseStudy={{
            title: "Boutique Design Agency Portfolio",
            industry: "Squarespace",
            results: [
              { metric: "Organic Leads", value: "340%", change: "increase in inquiries" },
              { metric: "Portfolio Traffic", value: "8x", change: "more monthly visitors" },
              { metric: "Google Rankings", value: "#1", change: "for 25+ keywords" },
              { metric: "Revenue Growth", value: "280%", change: "year over year" }
            ],
            testimonial: "My Squarespace site went from getting zero organic leads to being my primary source of dream clients. SEO transformed my creative business.",
            clientName: "Creative Studio Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Squarespace"
          customItems={[
            { icon: <FaPalette className="w-6 h-6" />, title: "Squarespace Expert", description: "Deep expertise in Squarespace SEO settings and capabilities" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Portfolio SEO Specialist", description: "Proven results for creative portfolios and agency sites" },
            { icon: "🖼️", title: "Visual Content Optimization", description: "Image SEO and gallery optimization expertise" },
            { icon: <FaBriefcase className="w-6 h-6" />, title: "Creative Industry Focus", description: "Understanding of how clients search for creative services" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Design-First Approach", description: "SEO strategies that enhance rather than compromise design" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local Creative SEO", description: "Helping creative professionals dominate local search" }
          ]}
        />

        <TopSEOServices />

        {/* Section 7: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="squarespace-seo" />

        {/* Section 8: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-amber-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Squarespace SEO" />



        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Squarespace SEO?</h2>
            <p className="text-xl text-orange-100 mb-8">Get a comprehensive Squarespace SEO audit and custom strategy tailored to your business</p>
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
