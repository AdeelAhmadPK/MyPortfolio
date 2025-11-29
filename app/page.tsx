import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MiniAuditForm from '../components/home/MiniAuditForm'
import BrandsMarquee from '../components/home/BrandsMarquee'
import CaseStudyTabs from '../components/home/CaseStudyTabs'
import TestimonialsSlider from '../components/home/TestimonialsSlider'
import ServiceIcon from '@/components/ServiceIcon'
import HeroContactForm from '@/components/HeroContactForm'
import CMSPlatforms from '@/components/services/CMSPlatforms'
import { countries } from '@/data/locations'
import { seoServices } from '@/data/seoServices'
import { TopicCluster } from '@/components/seo/TopicCluster'
import { WhyChooseSEO } from '@/components/seo/WhyChooseSEO'
import { SEOBenefits } from '@/components/seo/SEOBenefits'
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ'
import { IndustryExpertise } from '@/components/seo/IndustryExpertise'
import { SEOProcessDetailed } from '@/components/seo/SEOProcessDetailed'
import { FaChartBar, FaChartLine, FaClipboardCheck, FaCog, FaDollarSign, FaFileAlt, FaGlobe, FaKey, FaLink, FaMapMarkerAlt, FaPencilAlt, FaSearch, FaShoppingCart, FaWrench } from 'react-icons/fa';;
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Professional SEO Services | Muhammad Adeel SEO Expert",
  description: "Expert SEO consultant helping businesses grow with proven search engine optimization strategies. Local SEO, technical SEO, and content marketing services.",
  keywords: "SEO services, SEO consultant, SEO agency, search engine optimization, local SEO, technical SEO, on-page SEO, off-page SEO, link building, SEO company, SEO expert, professional SEO services, best SEO services, affordable SEO, SEO optimization, organic SEO",
  openGraph: {
    title: "Professional SEO Services | Muhammad Adeel SEO Expert",
    description: "Expert SEO consultant helping businesses grow with proven search engine optimization strategies. Achieve 200%+ organic traffic growth.",
    type: "website",
  },
}

// Reusable data sets (simplified from original project structure based on screenshot)
const stats = [
  { label: "Top Rankings", value: "1,732+" },
  { label: "Organic Growth", value: "200%+" },
  { label: "Avg ROI", value: "5x" },
  { label: "Satisfaction", value: "98%" },
]

const serviceCards = [
  { title: "Technical SEO Audit", points: ["Site Health", "Core Web Vitals", "Index & Crawl", "Structured Data"] },
  { title: "On-Page Optimization", points: ["Content Gaps", "Semantic Structure", "Internal Links", "Meta Strategy"] },
  { title: "Content Strategy", points: ["Topic Map", "Search Intent", "Editorial Calendar", "Authority Builds"] },
  { title: "Link Acquisition", points: ["Clean Profile", "Anchor Mix", "Quality Sources", "Disavow Review"] },
  { title: "Local / Maps SEO", points: ["GBP Optimization", "Citation Cleanup", "Local Landing Pages", "Review Velocity"] },
  { title: "Analytics & Tracking", points: ["Baseline Benchmarks", "Goal Tracking", "Attribution Model", "Reporting Cadence"] },
]

const processSteps = [
  { step: "01", title: "Deep Discovery", desc: "Business, competitors, customer intent & technical baseline." },
  { step: "02", title: "Technical Foundation", desc: "Fix index / crawl, speed, structure & data layer." },
  { step: "03", title: "Strategic Architecture", desc: "Topic clusters, internal link map, entity reinforcement." },
  { step: "04", title: "Content Deployment", desc: "Priority pages & supporting assets on scheduled cadence." },
  { step: "05", title: "Authority Growth", desc: "Clean link acquisition & brand signal amplification." },
  { step: "06", title: "Measurement & Scale", desc: "Refinement loops, forecasting, expansion pathways." },
]

// Countries are now imported from @/data/locations

const industries = ["E-commerce","Healthcare","Legal","SaaS","Real Estate","Finance","Education","Hospitality","Automotive","Manufacturing","Retail","Construction"]

const auditChecklist = [
  { item: "Index Bloat & Crawl Efficiency", pass: true },
  { item: "Canonical / Duplicate Resolution", pass: true },
  { item: "Core Web Vitals & Rendering", pass: true },
  { item: "Structured Data Coverage", pass: true },
  { item: "International / Local Signals", pass: true },
  { item: "Search Intent Alignment", pass: true },
  { item: "Semantic Internal Linking", pass: true },
  { item: "Thin / Orphan Content", pass: true },
  { item: "Toxic Link Patterns", pass: true },
  { item: "Analytics & Attribution", pass: true },
  { item: "Conversion Path Integrity", pass: true },
  { item: "Entity / Topical Depth", pass: true },
]

const faqs = [
  { q: "How fast can I see SEO results?", a: "Initial technical SEO improvements often produce search ranking movement inside the first 30-60 days while full SEO strategy velocity compounds over 6-12 months. You'll see improvements in organic traffic and Google rankings as I implement on-page SEO, technical SEO, and content SEO optimizations. My SEO services are designed for sustainable, long-term growth." },
  { q: "Do you guarantee Google rankings?", a: "No ethical SEO consultant or SEO agency guarantees specific rankings. We guarantee a best-practice SEO growth system, transparent SEO reporting, and compound improvements in search rankings, organic traffic, and online visibility. Our professional SEO services focus on sustainable, white-hat search engine optimization techniques." },
  { q: "What makes your SEO services different?", a: "Depth: Unified technical SEO, semantic SEO, authority building, and measurement framework—built to eliminate guesswork and create predictable expansion. My SEO consultant approach combines local SEO, technical SEO, content SEO, on-page SEO, off-page SEO, and link building for comprehensive search engine optimization that drives real business growth." },
  { q: "Can you work with my existing marketing team?", a: "Yes. We regularly integrate with internal development, content, and paid marketing teams to accelerate SEO execution without friction. My SEO services and SEO consulting complement your existing digital marketing efforts, providing expert search engine optimization guidance." },
  { q: "Is SEO suitable for startups?", a: "Absolutely. We right-size SEO implementation, focus on compounding SEO assets, and avoid wasteful, generic SEO deliverables. Our affordable SEO services are tailored to your business size and goals, whether you need local SEO, technical SEO, e-commerce SEO, or comprehensive search engine optimization." },
  { q: "What is local SEO and do you offer it?", a: "Local SEO optimizes your online presence for local search results and Google Maps. Yes, I offer comprehensive local SEO services including Google Business Profile optimization, local citation building, NAP consistency, and local keyword targeting to help you dominate local search in your area." },
  { q: "What's included in a technical SEO audit?", a: "Our technical SEO audit includes Core Web Vitals analysis, site speed optimization recommendations, crawlability assessment, indexation review, mobile-first optimization, schema markup audit, site architecture analysis, and actionable recommendations to improve your website's technical foundation for better search rankings." },
  { q: "Do you offer white label SEO services?", a: "Yes, I provide white label SEO services and SEO reseller programs for marketing agencies looking to offer professional SEO services to their clients. Our white label SEO includes full reporting, dedicated account management, and comprehensive SEO fulfillment." },
]

export default function HomePage() {
  // Wave colors that cycle automatically
  const waveColors = ['#2A2F6D', '#BBBBC9', '#1E2760', '#BBBBC9'];
  
  // Helper function to get wave color by index (cycles through colors)
  const getWaveColor = (index: number) => waveColors[index % waveColors.length];
  
  // Calculate exact stats (moved outside JSX for better performance)
  const countriesExcludingPK = countries.filter(c => c.code !== 'pk');
  const totalCountries = countriesExcludingPK.length;
  const totalCities = countriesExcludingPK.reduce((sum, c) => sum + c.cities.length, 0);
  const totalServices = seoServices.length;
  const countryServicePages = totalCountries * totalServices;
  const cityServicePages = totalCities * totalServices;
  const totalServicePages = countryServicePages + cityServicePages;
  
  // Helper function to get icon component from icon name
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'FaCog': <FaCog />,
      'FaMapMarkerAlt': <FaMapMarkerAlt />,
      'FaShoppingCart': <FaShoppingCart />,
      'FaFileAlt': <FaFileAlt />,
      'FaLink': <FaLink />,
      'FaGlobe': <FaGlobe />,
      'FaClipboardCheck': <FaClipboardCheck />,
      'FaKey': <FaKey />,
      'FaChartBar': <FaChartBar />
    };
    return iconMap[iconName] || <FaCog />;
  };
  
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        
        {/* Comprehensive Schema Markup for Home Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // Organization Schema
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://adeelahmad.com/#organization",
                "name": "Muhammad Adeel SEO Specialist",
                "alternateName": ["Adeel Ahmad SEO", "Muhammad Adeel SEO Services"],
                "url": "https://adeelahmad.com",
                "logo": "https://adeelahmad.com/MuhammadAdeelSEO.jpg",
                "image": "https://adeelahmad.com/MuhammadAdeelSEO.jpg",
                "description": "Professional SEO services and search engine optimization consulting by Muhammad Adeel. Expert in semantic SEO, technical SEO, local SEO, and international search optimization across 90+ countries.",
                "founder": {
                  "@type": "Person",
                  "@id": "https://adeelahmad.com/about#person",
                  "name": "Muhammad Adeel",
                  "alternateName": "Adeel Ahmad"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+92-323-1458064",
                  "contactType": "customer service",
                  "email": "hello@adeelahmad.com",
                  "availableLanguage": ["English", "Urdu"]
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "PK"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/muhammad-adeel",
                  "https://www.facebook.com/muhammadadeel.seo",
                  "https://wa.me/923231458064"
                ],
                "priceRange": "$$-$$$",
                "areaServed": countries.map(c => ({
                  "@type": "Country",
                  "name": c.name
                })),
                "serviceType": [
                  "SEO Services",
                  "Search Engine Optimization",
                  "Local SEO",
                  "Technical SEO",
                  "On-Page SEO",
                  "Off-Page SEO",
                  "Link Building",
                  "Content Optimization",
                  "Semantic SEO",
                  "International SEO"
                ]
              },
              // WebSite Schema
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://adeelahmad.com/#website",
                "url": "https://adeelahmad.com",
                "name": "Muhammad Adeel - Professional SEO Specialist",
                "description": "Expert SEO services and search engine optimization consulting by Muhammad Adeel",
                "publisher": {
                  "@id": "https://adeelahmad.com/#organization"
                },
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://adeelahmad.com/services?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              // WebPage Schema
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/#webpage",
                "url": "https://adeelahmad.com",
                "name": "Professional SEO Services | Expert SEO Consultant & Search Engine Optimization",
                "description": "Get expert SEO services from certified SEO consultant Muhammad Adeel. Comprehensive search engine optimization with proven results - 200%+ organic traffic growth.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                },
                "about": {
                  "@id": "https://adeelahmad.com/#organization"
                },
                "primaryImageOfPage": {
                  "@type": "ImageObject",
                  "url": "https://adeelahmad.com/MuhammadAdeelSEO.jpg"
                },
                "datePublished": "2017-01-01",
                "dateModified": new Date().toISOString().split('T')[0]
              },
              // Service Catalog with Offers
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "SEO Services Offered",
                "itemListElement": seoServices.slice(0, 10).map((service, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Service",
                    "@id": `https://adeelahmad.com/services/${service.slug}`,
                    "name": service.name,
                    "description": service.description,
                    "provider": {
                      "@id": "https://adeelahmad.com/#organization"
                    },
                    "areaServed": {
                      "@type": "Place",
                      "name": "Global"
                    },
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceRange": "$$-$$$"
                    }
                  }
                }))
              },
              // BreadcrumbList Schema
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://adeelahmad.com"
                  }
                ]
              }
            ])
          }}
        />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#111B40' }}>
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[0], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        {/* Animated gradient orbs for depth */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse-aura" />

        {/* Mesh gradient overlay for modern aesthetic */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-white tracking-wide">
                    Available for New Projects
                  </span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                <span className="block">Professional SEO Services</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  That Drive Real Results
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-semibold drop-shadow-lg">
                Expert Search Engine Optimization for Business Growth
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                Get <span className="font-bold text-cyan-200">proven SEO services</span> from an experienced SEO consultant. Boost your Google rankings, increase organic traffic, and improve your online visibility with comprehensive search engine optimization strategies tailored to your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 rounded-xl bg-white text-purple-600 font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors">Get Your Free SEO Audit</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link 
                  href="#process" 
                  className="px-8 py-4 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <span>See How It Works</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 max-w-4xl">
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">No Contracts Required</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-medium">Results in 30-60 Days</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium">100% Transparent Process</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium">Proven Track Record</span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <HeroContactForm 
                title="Get Your Free SEO Audit"
                subtitle="Discover what's holding your website back from page 1 rankings"
                buttonText="Get Free Consultation"
              />
            </div>
          </div>
        </div>

        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats + Trusted Brands Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-950 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse-aura" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* KPI Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                value:'1732+',
                label:'First Page Google Rankings Achieved',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4h8" />
                    <path d="M9 4v2a3 3 0 0 1-3 3H5V4h4z" />
                    <path d="M15 4v2a3 3 0 0 0 3 3h1V4h-4z" />
                    <path d="M12 12v6" />
                    <path d="M8 22h8" />
                    <path d="M10 18h4" />
                  </svg>
                )
              },
              {
                value:'200%',
                label:'Average Organic Traffic Growth',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v6h6" />
                    <path d="M3 9l9 9 6-6 3 3" />
                  </svg>
                )
              },
              {
                value:'5x',
                label:'Average ROI Multiplier',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                )
              },
              {
                value:'98%',
                label:'Client Retention Rate',
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                )
              }
            ].map((item, i) => (
              <div
                key={item.label}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 hover:border-cyan-400/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2"
                style={{animationDelay:`${i*100}ms`}}
              >
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon container */}
                <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {item.icon}
                </div>
                
                {/* Value */}
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform">
                  {item.value}
                </div>
                
                {/* Label */}
                <div className="text-sm font-medium text-slate-300 leading-snug group-hover:text-white transition-colors">
                  {item.label}
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-3xl" />
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Trusted by Ambitious Businesses Across Industries
            </h2>
            <p className="text-base sm:text-lg max-w-3xl mx-auto text-slate-300 leading-relaxed">
              From startups to established enterprises, I've partnered with forward-thinking brands that refuse to settle for mediocre SEO results.
            </p>
          </div>

          {/* Brands Showcase - Modern Card Layout */}
          <div className="relative">
            {/* Gradient overlay on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-indigo-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-indigo-950 to-transparent z-10 pointer-events-none" />
            
            <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] px-4">
              {[
                { name: "TechFlow Solutions", abbr: "TS" },
                { name: "Urban Fashion Co", abbr: "UFC" },
                { name: "Premier Legal Group", abbr: "PLG" },
                { name: "Global Finance Hub", abbr: "GFH" },
                { name: "Elite MedSpa", abbr: "EM" },
                { name: "Smart Home Pro", abbr: "SHP" },
                { name: "Green Energy Ltd", abbr: "GEL" },
                { name: "Digital Marketing Plus", abbr: "DMP" }
              ].map((brand, index) => (
                <div
                  key={brand.abbr}
                  className="group relative flex-shrink-0 w-[280px] snap-center"
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-400/40 backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Logo/Abbreviation */}
                      <div className="mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-500">
                        <span className="text-2xl font-black text-slate-300 group-hover:text-cyan-300 transition-colors">
                          {brand.abbr}
                        </span>
                      </div>
                      
                      {/* Brand name */}
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors mb-2">
                        {brand.name}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        SEO Success Story
                      </p>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Main SEO Services Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md text-cyan-300 text-xs font-semibold border border-cyan-400/50">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              Core SEO Services
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Professional <span className="text-white font-black">SEO Services</span> for Your Business
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Comprehensive search engine optimization services including technical SEO, local SEO, content SEO, link building, and more. My SEO expert delivers proven strategies to improve your Google rankings and drive qualified organic traffic to your website.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {seoServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.colorScheme.primary}20, ${service.colorScheme.secondary}20)`
                  }}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.colorScheme.primary}, ${service.colorScheme.secondary})`
                    }}
                  >
                    <div className="w-7 h-7 text-white">
                      {getIconComponent(service.icon)}
                    </div>
                  </div>
                  
                  {/* Service Name */}
                  <h3 className="text-lg font-black text-white mb-2">
                    {service.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div 
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ 
                    background: service.colorScheme.primary
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Stop Struggling Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md border border-green-400/50">
              <svg className="w-4 h-4 text-green-300" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-200">Rated 5.0 (47+ client reviews)</span>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Stop Struggling With SEO That<br />Doesn't Deliver Results
            </h2>
            <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Get Professional SEO Services That Actually Work
            </p>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-200 leading-relaxed mb-16">
            Every SEO service is designed to solve a <span className="font-semibold text-white">specific search engine optimization problem</span> that's costing you customers right now. No fluff, no generic tactics—just proven SEO strategies from an experienced SEO consultant that fix what's <span className="font-semibold text-white">broken and unlock</span> predictable organic growth and improved search rankings.
          </p>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <FaWrench className="w-6 h-6" />,
                title: "Fix your SEO Authority Problem",
                badge: "For Established Brands",
                tagline: "Your site isn't earning the Google rankings and SEO authority it deserves...",
                description: "Stop struggling with low Domain Authority that limits your search rankings and online visibility—even with a trusted audience. Our link building and off-page SEO services help establish your website's authority.",
                points: [
                  "SEO audit and backlink profile optimization",
                  "Strategic link building and PR campaigns",
                  "Amplify top-ranking pages with SEO",
                ],
                color: "blue"
              },
              {
                icon: <FaMapMarkerAlt className="w-6 h-6" />,
                title: "Dominate Your Local Market with Local SEO",
                badge: "For Local Businesses",
                tagline: "Your local competitors are outranking you on Google Maps while consistently winning your ideal customers...",
                description: "Stop losing customers to competitors in your local search area—capture high-intent traffic with professional local SEO services. Our local search engine optimization strategies help you dominate Google Maps and local search results.",
                points: [
                  "Google Maps & Local 3-Pack SEO optimization",
                  "Local SEO strategies to drive foot traffic",
                  "Google Business Profile optimization",
                ],
                color: "green"
              },
              {
                icon: <FaDollarSign className="w-6 h-6" />,
                title: "Turn Visitors Into Revenue with E-commerce SEO",
                badge: "For Online Stores",
                tagline: "You're getting organic traffic—but they aren't buying...",
                description: "Get your traffic-to-sales problem fixed with e-commerce SEO services. We improve your search rankings, drive more qualified organic traffic, and convert visitors into high-ticket sales through strategic SEO optimization.",
                points: [
                  "E-commerce SEO and product page optimization",
                  "Sales funnel SEO optimization",
                  "Advanced conversion-focused SEO setup",
                ],
                color: "purple"
              },
              {
                icon: <FaChartLine className="w-6 h-6" />,
                title: "Scale your SEO Without Complexity",
                badge: "For Growing Companies",
                tagline: "You're stuck manually scaling your SEO strategies...",
                description: "Stop wasting time and scale your SEO effectively. Manage thousands of pages with advanced SEO automation without sacrificing search rankings and quality at scale.",
                points: [
                  "SEO automation for mass optimization",
                  "Multi-site and multi-location SEO strategy",
                  "Scalable SEO implementation",
                ],
                color: "orange"
              },
              {
                icon: <FaSearch className="w-6 h-6" />,
                title: "Discover What's Blocking your SEO Success",
                badge: "For Stalled Growth",
                tagline: "You're not sure what's holding back your search rankings...",
                description: "Stop guessing why your SEO isn't working—get a comprehensive SEO audit that reveals exactly where the issues are and what's costing you lost organic traffic and search visibility.",
                points: [
                  "Deep technical SEO analysis and audit",
                  "Search visibility gaps assessment",
                  "On-page SEO structure audit",
                ],
                color: "red"
              },
              {
                icon: <FaPencilAlt className="w-6 h-6" />,
                title: "Create SEO Content That Ranks on Google",
                badge: "For Content-Driven Sites",
                tagline: "Your content isn't ranking in search results or converting visitors...",
                description: "Stop creating content that nobody finds—start creating high-value, SEO-optimized content that ranks on Google and drives qualified organic traffic and leads. Our content SEO services help you build topical authority.",
                points: [
                  "SEO keyword research and SERP analysis",
                  "Strategic SEO content planning",
                  "Conversion-focused SEO content creation",
                ],
                color: "cyan"
              },
            ].map((service, idx) => (
              <div 
                key={service.title}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border-2 border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
                style={{animationDelay: `${idx * 100}ms`}}
              >
                {/* Top badge */}
                <div className="absolute -top-3 left-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-wide shadow-lg">
                    {service.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 mt-2 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs text-slate-300 mb-3 leading-relaxed italic">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-200 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-5">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <svg className="w-4 h-4 text-cyan-300 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${
                  service.color === 'blue' ? 'from-blue-500 to-cyan-500' :
                  service.color === 'green' ? 'from-green-500 to-emerald-500' :
                  service.color === 'purple' ? 'from-purple-500 to-pink-500' :
                  service.color === 'orange' ? 'from-orange-500 to-amber-500' :
                  service.color === 'red' ? 'from-red-500 to-rose-500' :
                  'from-cyan-500 to-blue-500'
                } pointer-events-none`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Case Study Section - MedSpa */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 backdrop-blur-md text-green-300 text-xs font-semibold border border-green-400/50">
              <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              My Recent 360° Work
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Real Businesses. Real Growth.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Real Results You Can Replicate</span>
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
              See how data-driven SEO strategies have transformed businesses across different industries. <span className="font-semibold text-slate-900 dark:text-slate-100">These aren't just numbers</span>—they're businesses that have fundamentally changed their trajectory.
            </p>
          </div>

          {/* Tabs and Case Study */}
          <CaseStudyTabs />
        </div>
      </section>

      {/* Why Agencies Fail Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-950 via-blue-950 to-indigo-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold">
              The Difference
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Most SEO Agencies Fail Because They Don't Address
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Your Real Problems
            </p>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-200 leading-relaxed mb-16">
            I've built my practice solving the exact <span className="font-semibold text-white">frustrations</span> that drive clients away from other SEO providers—delivering the transparency, accountability, and <span className="font-semibold text-white">results</span>.
          </p>

          {/* Problem Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 pt-12 pb-4">
            {[
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
                title: "100% Transparent Reporting",
                subtitle: "No black-box SEO, only clarity",
                description: "You deserve crystal-clear metrics at tracked and tangible step of the process.",
                gradient: "from-orange-500 to-red-500"
              },
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
                title: "Custom, Revenue-Focused Strategy",
                subtitle: "Tailored SEO strategies, not portfolios",
                description: "Forget cookie-cutter templates. Every action is built for your specific goals, target audience, and competitive set.",
                gradient: "from-orange-500 to-amber-500"
              },
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
                title: "Proven Track Record of Results",
                subtitle: "Real performance, not promises",
                description: "1732+ first-page rankings, 200%+ average traffic growth, and 5x ROI—across multiple niches.",
                gradient: "from-orange-500 to-yellow-500"
              },
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>,
                title: "Direct Access to Your Specialist",
                subtitle: "A certified expert, not a junior account manager",
                description: "No account managers playing telephone. You work directly with me—end to end, no excuses.",
                gradient: "from-orange-500 to-red-600"
              },
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                title: "White-Hat, Future-Proof Methods",
                subtitle: "Ethical SEO that avoids shortcuts and penalties",
                description: "No shortcuts. Just Google's guidelines and strategies that stand the test of algorithm updates. Your success is built to last.",
                gradient: "from-orange-500 to-rose-500"
              },
              {
                badge: "Solving",
                icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
                title: "Fast Implementation, Quick Wins",
                subtitle: "Action over talking: no months of meetings",
                description: "I prioritize quick, strategic wins—typically 30-60 days. We prioritize high-impact actions, deep-dive optimizations while building for long-term scale.",
                gradient: "from-orange-500 to-amber-600"
              },
            ].map((problem, idx) => (
              <div 
                key={problem.title}
                className="group relative rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-visible"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Top Gradient Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${problem.gradient} rounded-t-2xl`} />
                
                {/* Badge */}
                <div className="absolute -top-3 left-6 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${problem.gradient} text-white text-[10px] font-bold uppercase tracking-wide shadow-lg`}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {problem.badge}
                  </span>
                </div>

                <div className="p-8 pt-10 overflow-visible">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${problem.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity`} />
                    <div className="relative text-slate-700 dark:text-slate-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {problem.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {problem.title}
                  </h3>

                  {/* Subtitle with icon */}
                  <div className="flex items-start gap-2 mb-4">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {problem.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Bottom accent on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${problem.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* How I deliver SEO Success Section */}
      <SEOProcessDetailed />

      {/* Specialized SEO for Every Industry Section */}
      <section className="relative py-28 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-aura" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md text-cyan-300 text-sm font-bold mb-6 border border-cyan-400/50 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
          </svg>
              30+ Industries | 1000+ Successful Projects
          </div>

            <h2 className="font-display text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Specialized SEO for
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h2>
            
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Expert SEO strategies tailored to <span className="font-bold text-cyan-300">your industry's unique challenges</span>, competitive landscape, and customer search behavior
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">1732+</div>
                <div className="text-sm text-slate-300 font-medium">Rankings Achieved</div>
              </div>
              <div className="h-12 w-px bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">200%+</div>
                <div className="text-sm text-slate-300 font-medium">Avg Traffic Growth</div>
            </div>
              <div className="h-12 w-px bg-cyan-400/30"></div>
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
                <div className="text-sm text-slate-300 font-medium">Client Retention</div>
              </div>
            </div>
            </div>

          {/* Industry Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Appliance Repair", slug: "appliance-repair-seo", color: "from-orange-500 to-red-500" },
              { name: "Carpet Cleaning", slug: "carpet-cleaning-seo", color: "from-green-500 to-teal-500" },
              { name: "Gutter Services", slug: "gutter-installation-maintenance-seo", color: "from-blue-500 to-cyan-500" },
              { name: "Plumbing", slug: "plumbing-seo", color: "from-indigo-500 to-blue-500" },
              { name: "Siding Services", slug: "siding-seo", color: "from-purple-500 to-pink-500" },
              { name: "Bathroom Remodeling", slug: "bathroom-remodeling-seo", color: "from-cyan-500 to-blue-500" },
              { name: "Dumpster Rental", slug: "dumpster-rental-seo", color: "from-slate-500 to-gray-600" },
              { name: "Home Security", slug: "home-security-systems-seo", color: "from-red-500 to-orange-500" },
              { name: "Mold Remediation", slug: "mold-remediation-seo", color: "from-green-600 to-emerald-600" },
              { name: "Walk-In Tubs", slug: "walk-in-tubs-installation-seo", color: "from-blue-400 to-indigo-500" },
              { name: "Kitchen Remodeling", slug: "kitchen-remodeling-seo", color: "from-yellow-500 to-orange-500" },
              { name: "Electrician", slug: "electrician-seo", color: "from-yellow-400 to-amber-500" },
              { name: "HVAC Services", slug: "hvac-seo", color: "from-sky-500 to-blue-600" },
              { name: "Roofing", slug: "roofing-contractors-seo", color: "from-stone-500 to-slate-600" },
              { name: "Water Damage", slug: "water-damage-restoration-seo", color: "from-blue-600 to-cyan-600" },
              { name: "Flooring", slug: "carpet-flooring-installation-seo", color: "from-amber-500 to-orange-500" },
              { name: "Garage Door", slug: "garage-door-repair-opener-seo", color: "from-gray-500 to-slate-600" },
              { name: "Pest Control", slug: "pest-control-seo", color: "from-lime-500 to-green-600" },
              { name: "Self Storage", slug: "self-storage-seo", color: "from-indigo-500 to-purple-500" },
              { name: "Fire Damage", slug: "fire-damage-restoration-seo", color: "from-red-600 to-orange-600" }
            ].map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/services/${industry.slug}`}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 30}ms`
                }}
              >
                {/* Animated gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Top gradient border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <ServiceIcon service={industry.slug} className="w-8 h-8 text-cyan-300 group-hover:text-white transition-colors" />
            </div>

                  {/* Industry name */}
                  <h3 className="font-bold text-xl text-white mb-4 group-hover:text-cyan-300 transition-colors">
                    {industry.name}
                  </h3>
                  
                  {/* CTA with arrow */}
                  <div className="flex items-center gap-2 text-sm text-cyan-300 font-semibold group-hover:gap-3 transition-all">
                    <span>Explore Services</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${industry.color} blur-xl opacity-30`}></div>
              </div>
            </Link>
            ))}
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Global SEO Services Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="absolute inset-0 bg-grid-slate/10 opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md text-cyan-300 text-xs font-semibold border border-cyan-400/50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Global SEO Services
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              SEO Services Around the World
            </h2>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-200 leading-relaxed mb-16">
            Helping businesses dominate Google search results in 740+ cities across 15 countries. Expert local SEO and international SEO strategies to improve your search rankings and online visibility.
          </p>

          {/* Countries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {countries
              .filter(country => country.code.toLowerCase() !== 'pk')
              .slice(0, 10)
              .map((country, index) => (
              <Link 
                key={country.slug} 
                href={`/${country.slug}`} 
                className="group relative bg-slate-800 dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Flag background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center text-8xl">
                  {country.flag}
                </div>
                <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white">{country.name}</h3>
                </div>
              </Link>
            ))}
              </div>

          {/* All Other Countries Button */}
          <div className="text-center mb-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              View All Other Countries
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{totalCountries}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Countries</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{totalCities}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Cities</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">{totalServicePages.toLocaleString()}</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Service Pages</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">24/7</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Support</p>
            </div>
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[0] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[0], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              Popular Cities
            </h2>

            {/* Cities Grid */}
            <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
              {/* Row 1 */}
              <Link href="/services/us/new-york" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">US</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">New York</span>
              </Link>

              <Link href="/services/uk/london" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">GB</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">London</span>
              </Link>

              <Link href="/services/ca/toronto" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">CA</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Toronto</span>
              </Link>

              <Link href="/services/au/sydney" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">AU</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Sydney</span>
              </Link>

              <Link href="/services/in/mumbai" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">IN</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Mumbai</span>
              </Link>

              <Link href="/services/de/berlin" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">DE</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Berlin</span>
              </Link>

              <Link href="/services/fr/paris" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">FR</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Paris</span>
              </Link>

              <Link href="/services/it/rome" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">IT</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Rome</span>
              </Link>

              <Link href="/services/es/madrid" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">ES</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Madrid</span>
              </Link>

              {/* Row 2 */}
              <Link href="/services/br/sao-paulo" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">BR</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">São Paulo</span>
              </Link>

              <Link href="/services/mx/mexico-city" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">MX</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Mexico City</span>
              </Link>

              <Link href="/services/jp/tokyo" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">JP</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Tokyo</span>
              </Link>

              <Link href="/services/nl/amsterdam" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">NL</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Amsterdam</span>
              </Link>

              <Link href="/services/za/johannesburg" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">ZA</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Johannesburg</span>
              </Link>

              <Link href="/services/ae/dubai" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">AE</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Dubai</span>
              </Link>

              <Link href="/services/us/los-angeles" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">US</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Los Angeles</span>
              </Link>

              <Link href="/services/uk/manchester" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">GB</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Manchester</span>
              </Link>

              {/* Row 3 */}
              <Link href="/services/ca/vancouver" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">CA</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Vancouver</span>
              </Link>

              <Link href="/services/au/melbourne" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">AU</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Melbourne</span>
              </Link>

              <Link href="/services/in/bangalore" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300 group">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">IN</span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">Bangalore</span>
              </Link>
            </div>

            {/* See All Countries Button */}
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4z" clipRule="evenodd"/>
                </svg>
                See All Countries
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[1], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
              Client Success Stories
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Don't Just Take My Word for It
            </h2>
            <p className="text-2xl font-bold text-green-400 mb-6">
              Hear From Businesses I've Transformed
            </p>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-300 leading-relaxed mb-16">
            Real clients. Real results. Real testimonials from businesses that stopped wasting money on SEO that didn't work.
          </p>

          {/* Testimonials Slider */}
          <TestimonialsSlider />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">47+</div>
              <p className="text-sm text-slate-300 font-medium">Happy Clients</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5.0</div>
              <p className="text-sm text-slate-300 font-medium">Average Rating</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">98%</div>
              <p className="text-sm text-slate-300 font-medium">Client Retention</p>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">200%+</div>
              <p className="text-sm text-slate-300 font-medium">Avg. Traffic Growth</p>
            </div>
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-700 via-slate-800 to-blue-900 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
              Why I'm Different
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Take a Look at How
            </h2>
            <p className="text-3xl font-bold text-green-400 mb-6">
              I'm Different
            </p>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-300 leading-relaxed mb-12">
            Most agencies treat you like a number. I treat you like a partner. Here's how working with me is fundamentally different.
          </p>

          {/* Comparison Table */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl mb-8">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-slate-800/80 border-b border-slate-700">
              <div></div>
              <div className="text-center">
                <h3 className="text-base font-bold text-green-400 mb-1">Me</h3>
                <p className="text-xs text-slate-400">Personal Touch</p>
              </div>
              <div className="text-center">
                <h3 className="text-base font-bold text-slate-400 mb-1">Others</h3>
                <p className="text-xs text-slate-500">Typical Agency</p>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-700/50">
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Take on projects only if confident in delivery.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Tailor-made, revenue-boosting strategy.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">100% focus on your project.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Transparent about meeting goals and deadlines.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Cares about long-term SEO success.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Knows that ROI is the most important metric.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 7 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Feels like an extension of your marketing team.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 8 */}
              <div className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center">
                  <p className="text-sm text-slate-200 font-medium">Crafts a results-driven strategy.</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-center text-xs text-slate-400 italic">
            * Based on feedback from clients who switched from traditional SEO agencies
          </p>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[2] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-950 via-indigo-900 to-blue-950 overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md text-cyan-300 text-xs font-semibold border border-cyan-400/50">
              FAQ's
            </span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Have a Question?
            </h2>
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Look Here
            </p>
          </div>

          {/* Subtext */}
          <p className="text-center max-w-2xl mx-auto text-sm text-slate-200 leading-relaxed mb-12">
            Get answers to the most common questions about SEO services, search engine optimization, my SEO process, and what to expect when working with an SEO consultant.
          </p>

          {/* FAQ Accordion */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white pr-4">
                      {faq.q}
                    </h3>
                  </div>
                  <svg 
                    className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform group-open:rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-8 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Professional SEO Consultant & Growth Partner Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#2A2F6D' }}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 .723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold text-white">Expert SEO Services</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Professional SEO Consultant &<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">Growth Partner</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-cyan-100 font-semibold mb-4">
              Data-Driven SEO Strategies That Deliver Results
            </p>

            {/* Description */}
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Expert SEO consultant specializing in comprehensive digital marketing strategies that drive organic growth, improve search rankings, and maximize ROI. Serving businesses across multiple countries and industries with proven, white-hat SEO techniques.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { 
                name: 'SEO Consultant', 
                description: 'Expert SEO consulting services',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                name: 'Technical SEO', 
                description: 'Site optimization and performance',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                name: 'Local SEO', 
                description: 'Geographic-specific optimization',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              { 
                name: 'Content Marketing', 
                description: 'SEO-optimized content strategy',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              { 
                name: 'Link Building', 
                description: 'Authority and backlink acquisition',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )
              },
              { 
                name: 'Analytics', 
                description: 'Data tracking and insights',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
            >
              <span>Get Your Free SEO Consultation</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Topic Clusters */}
      <section className="relative py-28 bg-gradient-to-br from-indigo-950 via-purple-900 to-blue-950 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse-aura" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 mb-6">
              <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046a1 1 0 01.14 1.052L8.677 7.5H12.5a1 1 0 01.8.4l2.7 3.6a1 1 0 01-.2 1.4l-6.323 4.74a1 1 0 01-1.4-.2l-2.7-3.6A1 1 0 017 12.5h3.823L7.56 1.946a1 1 0 011.052-1.4l2.688.5z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold text-cyan-300">Complete SEO System</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Complete SEO Growth System</span>
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
              Comprehensive SEO strategies covering every aspect of search engine optimization from technical foundation to content excellence
            </p>
          </div>
          
          <TopicCluster
            pillarTitle="Complete SEO Growth System"
            pillarDescription="Comprehensive SEO strategies covering every aspect of search engine optimization from technical foundation to content excellence"
            pillarLink="/services"
            accentColor="#06B6D4"
            textColor="#FFFFFF"
            clusters={[
              {
                title: 'Technical Excellence',
                description: 'Site speed, Core Web Vitals, crawlability, indexation, structured data, and mobile optimization',
                link: '/services',
                type: 'pillar',
                keywords: ['Technical SEO', 'Site Performance', 'Mobile SEO']
              },
              {
                title: 'Content Strategy',
                description: 'Search intent analysis, topic clusters, editorial calendar, and authority-building content',
                link: '/services',
                type: 'cluster',
                keywords: ['Content Marketing', 'SEO Content', 'Topic Clusters']
              },
              {
                title: 'Link Acquisition',
                description: 'Quality backlinks, anchor text strategy, digital PR, and authority building',
                link: '/services',
                type: 'cluster',
                keywords: ['Link Building', 'Backlinks', 'Authority']
              },
              {
                title: 'Local & International',
                description: 'Geographic targeting, multi-location SEO, international expansion, and local rankings',
                link: '/services',
                type: 'cluster',
                keywords: ['Local SEO', 'International SEO', 'Geographic Targeting']
              }
            ]}
            variant="grid"
          />
        </div>
      </section>

      {/* CMS Platforms Section */}
      <CMSPlatforms />

      {/* Why Choose My SEO Services Section */}
      <WhyChooseSEO />

      {/* SEO Benefits Section */}
      <SEOBenefits />

      {/* Industry Expertise Section */}
      <IndustryExpertise />

      {/* Comprehensive FAQ Section */}
      <ComprehensiveFAQ />

      {/* All CTAs Section - Consolidated */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[3], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold border border-white/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Limited Spots Available
            </span>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
              Stop Losing Customers to Competitors
            </h2>
            <p className="text-3xl font-bold text-white mb-6">
              Get Your Free Traffic Audit Today
            </p>
          </div>

          {/* Description */}
          <p className="text-center max-w-3xl mx-auto text-base text-white/90 leading-relaxed mb-8">
            Discover exactly what's blocking your rankings with a <span className="font-bold underline decoration-2 underline-offset-2">comprehensive SEO audit</span> (worth $500). No obligations, no pressure—just actionable insights you can use immediately.
          </p>

          {/* Features */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">Results in 30-60 days</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">Cancel anytime</span>
            </div>
          </div>

          {/* Email Form */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your business email"
                className="flex-1 px-6 py-4 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
              />
              <button className="px-8 py-4 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Get Free Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Privacy Text */}
          <p className="text-center text-xs text-white/80 mb-10 flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            We respect your privacy. No spam, ever. Unsubscribe anytime.
          </p>

          {/* Divider */}
          <div className="border-t border-white/20 mb-10"></div>

          {/* Prefer to talk first */}
          <div className="text-center">
            <p className="text-white text-base font-semibold mb-4">Prefer to talk first?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:hello@adeelahmad.com" className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">hello@adeelahmad.com</span>
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm font-medium">Schedule a Call</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">1732+</div>
              <p className="text-sm text-white/80 font-medium">Rankings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <p className="text-sm text-white/80 font-medium">Client Retention</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5x</div>
              <p className="text-sm text-white/80 font-medium">Average ROI</p>
            </div>
          </div>
        </div>
        
        {/* Bottom wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[0] }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Ready to Dominate Your Market CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden">
        {/* Top wave separator */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-12 sm:h-16 lg:h-20" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ color: waveColors[0], transform: 'scaleY(-1)' }}>
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Dominate Your Market?
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get a free SEO audit and discover exactly what's holding your website back from page 1 rankings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get Your Free Audit
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <Image 
                    src="/WhiteLogo.webp" 
                    alt="Adeel Ahmad - SEO Specialist" 
                    width={200} 
                    height={200} 
                    className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Expert SEO Specialist with 10+ years of experience delivering proven, data-driven strategies that generate measurable results for businesses worldwide.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@adeelahmad.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  hello@adeelahmad.com
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +92 323 1458064
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Serving Clients Worldwide
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Link Building
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                      Popular
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Local SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Ecommerce SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Enterprise SEO
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    SEO Audit
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Content Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/case-studies" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Service Locations
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Free SEO Audit
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    SEO Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-500"></span>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © 2025 Adeel Ahmad. All rights reserved. Built with care for results-driven businesses.
              </p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-slate-500 mr-2">Follow:</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-400 hover:text-slate-900 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://x.com/AdeelAhmad064" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-400 hover:text-slate-900 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-400 hover:text-slate-900 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
    </>
  )
}
