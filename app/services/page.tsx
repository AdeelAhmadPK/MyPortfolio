import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { countries } from '@/data/locations'
import { industries } from '@/data/industries'
import { seoServices } from '@/data/seoServices'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import ProcessSteps from '@/components/services/ProcessSteps'
import CMSPlatforms from '@/components/services/CMSPlatforms'
import { WhyChooseSEO } from '@/components/seo/WhyChooseSEO'
import { SEOBenefits } from '@/components/seo/SEOBenefits'
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ'
import { IndustryExpertise } from '@/components/seo/IndustryExpertise'
import { SEOProcessDetailed } from '@/components/seo/SEOProcessDetailed'
import { SEOToolsStack } from '@/components/seo/SEOToolsStack'
import { SEOKeywordTargeting } from '@/components/seo/SEOKeywordTargeting'
import { SEORankingFactors } from '@/components/seo/SEORankingFactors'
import { AboutSEOSection } from '@/components/seo/AboutSEOSection'
import { FaCog, FaMapMarkerAlt, FaShoppingCart, FaFileAlt, FaLink, FaGlobe, FaClipboardCheck, FaKey, FaChartBar } from 'react-icons/fa'
import CountriesGridExpandable from '@/components/services/CountriesGridExpandable'

export const metadata: Metadata = {
  title: 'SEO Services | Local, Technical & Content SEO Expert',
  description: 'Comprehensive SEO services for businesses worldwide. From local SEO to technical audits and link building—get results that drive real traffic and revenue.',
  keywords: 'SEO services, professional SEO, SEO agency, SEO company, local SEO services, technical SEO services, on-page SEO, off-page SEO, link building services, SEO audit, keyword research, content SEO, e-commerce SEO, Shopify SEO, WordPress SEO, SEO consultant, affordable SEO, white label SEO, enterprise SEO, B2B SEO',
  openGraph: {
    title: 'SEO Services | Local, Technical & Content SEO Expert',
    description: 'Comprehensive SEO services for businesses worldwide. Expert consultant helping improve Google rankings and drive organic traffic across 135+ countries.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        
        {/* Services Page Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // WebPage Schema
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/services#webpage",
                "url": "https://adeelahmad.com/services",
                "name": "Professional SEO Services | Expert Search Engine Optimization Consultant",
                "description": "Comprehensive SEO services including local SEO, technical SEO, on-page SEO, off-page SEO, content SEO, and link building. Expert SEO consultant helping businesses achieve top Google rankings.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                },
                "about": {
                  "@id": "https://adeelahmad.com/#organization"
                },
                "datePublished": "2017-01-01",
                "dateModified": new Date().toISOString().split('T')[0]
              },
              // Service Catalog
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Professional SEO Services",
                "description": "Comprehensive SEO services offered by Muhammad Adeel",
                "itemListElement": seoServices.map((service, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Service",
                    "@id": `https://adeelahmad.com/services/${service.slug}`,
                    "serviceType": service.name,
                    "name": service.name,
                    "description": service.description,
                    "provider": {
                      "@type": "Person",
                      "name": "Muhammad Adeel",
                      "jobTitle": "SEO Specialist",
                      "url": "https://adeelahmad.com/about"
                    },
                    "areaServed": countries.map(c => ({
                      "@type": "Country",
                      "name": c.name
                    })),
                    "offers": {
                      "@type": "Offer",
                      "availability": "https://schema.org/InStock",
                      "priceRange": "$$-$$$",
                      "url": `https://adeelahmad.com/services/${service.slug}`
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://adeelahmad.com/services"
                  }
                ]
              }
            ])
          }}
        />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated grid background */}
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

        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center justify-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Services</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Content - 3 columns */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-white">Professional SEO Services</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
                Professional <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SEO Services</span> for Your Business
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-4 drop-shadow-lg">
                Expert <span className="font-bold text-cyan-300">search engine optimization services</span> including local SEO, technical SEO, content SEO, and link building across <span className="font-bold text-cyan-300">{countries.length} countries</span>, hundreds of cities, 
                and <span className="font-bold text-blue-300">{industries.length} specialized industries</span>
              </p>
              <p className="text-base text-slate-400 mb-8">
                Proven SEO strategies from an experienced SEO consultant that deliver measurable results, improve Google rankings, drive organic traffic, and maximize your online visibility for sustainable business growth
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <Link
                  href="/contact"
                  className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Get Free SEO Consultation
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border-2 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  View Success Stories
                </Link>
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{industries.length}+</div>
              <div className="text-sm text-slate-400 font-medium">Industries Served</div>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-3" />
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">{countries.length}+</div>
              <div className="text-sm text-slate-400 font-medium">Countries Covered</div>
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mx-auto mt-3" />
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">{countries.reduce((acc, c) => acc + c.cities.length, 0)}+</div>
              <div className="text-sm text-slate-400 font-medium">Cities Worldwide</div>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-3" />
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-sm text-slate-400 font-medium">Client Satisfaction</div>
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mt-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Main SEO Services Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-950 via-blue-950 to-purple-950 overflow-hidden">
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
              Comprehensive <span className="text-white font-black">SEO Services</span> for Every Business Need
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Expert search engine optimization solutions from a professional SEO consultant. My SEO services are tailored to boost your Google rankings, drive qualified organic traffic, improve search visibility, and maximize your online presence through proven SEO strategies.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {seoServices.map((service, index) => {
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
              );
            })}
          </div>
        </div>
      </section>









      {/* Service Features */}
      <ServiceFeatures />

      {/* Countries Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950/30 to-indigo-950/30 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold text-blue-400">Global Coverage</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Select Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Country</span> for Local SEO Services
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              I provide expert local SEO services and search engine optimization across major countries worldwide. My SEO consultant helps businesses improve Google rankings and drive organic traffic in your target markets
            </p>
          </div>

          <CountriesGridExpandable />
        </div>
      </section>

      {/* CMS Platforms */}
      <CMSPlatforms />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Industries Grid - Redesigned */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-indigo-400/40 dark:bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-400/40 dark:bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-[500px] h-[500px] bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-indigo-200 dark:border-indigo-400/30 mb-8">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-sm font-black text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">Industry Expertise</span>
            </div>
            
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              <span className="block mb-2">Industries We</span>
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Dominate</span>
            </h2>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Proven SEO strategies customized for <span className="font-bold text-indigo-600 dark:text-indigo-400">{industries.length}+ specialized industries</span>. I understand your market, competition, and what it takes to rank #1.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                href={`/services/${industry.slug}`}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` } as React.CSSProperties}
              >
                <div className="relative h-full p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-slate-800/40 dark:to-slate-900/40 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700/50 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-400/30 dark:hover:shadow-indigo-500/25">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-400/0 to-purple-400/0 dark:from-indigo-500/0 dark:to-purple-500/0 group-hover:from-indigo-400/10 group-hover:to-purple-400/10 dark:group-hover:from-indigo-500/10 dark:group-hover:to-purple-500/10 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-indigo-600 dark:text-cyan-400 text-4xl md:text-5xl mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 [&>svg]:w-12 [&>svg]:h-12 md:[&>svg]:w-14 md:[&>svg]:h-14">
                      {industry.icon}
                    </div>
                    <h3 className="font-black text-base md:text-lg text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {industry.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Explore</span>
                      <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-indigo-200/30 dark:via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="text-slate-400 mb-6 text-lg">
              Don't see your industry? We've got you covered with custom SEO strategies.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Discuss Your Industry</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>



      {/* Why Choose My SEO Services */}
      <WhyChooseSEO />

      {/* SEO Benefits */}
      <SEOBenefits />

      {/* SEO Process Detailed */}
      <SEOProcessDetailed />



      {/* Industry Expertise */}
      <IndustryExpertise />





      {/* SEO Tools Stack */}
      <SEOToolsStack />

      {/* SEO Keyword Targeting */}
      <SEOKeywordTargeting />



      {/* SEO Ranking Factors */}
      <SEORankingFactors />

      {/* About SEO Section */}
      <AboutSEOSection />

      {/* Comprehensive FAQ */}
      <ComprehensiveFAQ />

      {/* CTA Section - Moved to End */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 mb-8">
              <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-black text-blue-300 uppercase tracking-wider">Start Your Journey</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Dominate<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Google Search Results?</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a <span className="font-bold text-cyan-400">free SEO audit</span> and customized search engine optimization strategy from My SEO consultant to <span className="font-bold text-blue-400">outrank your competitors</span>, improve Google rankings, drive organic traffic, and grow your business.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get Free SEO Audit
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                View Success Stories
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">No Risk</p>
                  <p className="text-sm text-slate-400">No credit card required</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">Fast Results</p>
                  <p className="text-sm text-slate-400">Results in 90 days</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white mb-1">Guaranteed</p>
                  <p className="text-sm text-slate-400">Money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
    </>
  )
}
