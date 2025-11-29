import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { countries } from '@/data/locations'
import { flagColors } from '@/data/flagColors'
import { industries } from '@/data/industries'
import { SemanticSEOSection } from '@/components/seo/SemanticSEOSection'
import { TopicCluster } from '@/components/seo/TopicCluster'
import { WhyChooseSEO } from '@/components/seo/WhyChooseSEO'
import { SEOBenefits } from '@/components/seo/SEOBenefits'
import { ComprehensiveFAQ } from '@/components/seo/ComprehensiveFAQ'
import { SEOProcessDetailed } from '@/components/seo/SEOProcessDetailed'
import { SEOTestimonials } from '@/components/seo/SEOTestimonials'
import { SEOCaseStudies } from '@/components/seo/SEOCaseStudies'

export const metadata: Metadata = {
  title: 'Industry-Specific SEO Services | 50+ Industries',
  description: 'Specialized SEO strategies for your industry. Expert optimization for e-commerce, healthcare, legal, real estate, home services, and 50+ other industries worldwide.',
  keywords: 'industry SEO, specialized SEO services, e-commerce SEO, healthcare SEO, legal SEO, real estate SEO, dental SEO, HVAC SEO, plumbing SEO, roofing SEO, SaaS SEO, B2B SEO, law firm SEO, medical SEO',
  openGraph: {
    title: 'Industries I serve | Specialized SEO Services by Industry',
    description: 'Specialized SEO services for 50+ industries worldwide with expert strategies.',
  },
}

// Gradient colors for industries (cycling through modern gradient combinations)
const industryGradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-purple-500',
  'from-teal-500 to-cyan-500',
  'from-rose-500 to-pink-500',
  'from-amber-500 to-orange-500',
  'from-violet-500 to-purple-500',
  'from-emerald-500 to-teal-500',
  'from-pink-500 to-rose-500',
  'from-cyan-500 to-blue-500',
  'from-yellow-500 to-orange-500',
  'from-fuchsia-500 to-pink-500',
  'from-lime-500 to-green-500',
  'from-sky-500 to-blue-500',
  'from-red-500 to-orange-500',
  'from-purple-500 to-indigo-500',
  'from-teal-500 to-green-500',
]

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-white dark:bg-slate-950">

        {/* Industries Page Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // WebPage Schema
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/industries#webpage",
                "url": "https://adeelahmad.com/industries",
                "name": "Industries I Serve | Specialized SEO Services by Industry",
                "description": "Specialized SEO services for 50+ industries worldwide including e-commerce, healthcare, legal, real estate, home services, technology, and more.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                },
                "about": {
                  "@id": "https://adeelahmad.com/#organization"
                },
                "datePublished": "2017-01-01",
                "dateModified": new Date().toISOString().split('T')[0]
              },
              // Industry Expertise List
              {
                "@context": "https://schema.org",
                "@type": "ItemList",
                "name": "Industries Served",
                "description": "Specialized SEO services by Muhammad Adeel across multiple industries",
                "itemListElement": industries.map((industry, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Service",
                    "serviceType": `${industry.name} SEO Services`,
                    "name": `${industry.name} SEO`,
                    "description": `Professional SEO services for ${industry.name} businesses`,
                    "provider": {
                      "@type": "Person",
                      "name": "Muhammad Adeel",
                      "jobTitle": "SEO Specialist"
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
                    "name": "Industries",
                    "item": "https://adeelahmad.com/industries"
                  }
                ]
              }
            ])
          }}
        />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#111B40' }}>
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
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-xs font-bold text-white tracking-wide">
                    50+ Industries Served
                  </span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
                <span className="block">Industry-Specific</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  SEO Services
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl sm:text-2xl text-white/90 mb-4 font-semibold drop-shadow-lg">
                Specialized Strategies for Every Sector
              </p>

              {/* Description */}
              <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                Get <span className="font-bold text-cyan-200">industry-specific SEO strategies</span> that understand your market, competitors, and customers. From home services to healthcare, e-commerce to legal—we've got your industry covered.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                <Link 
                  href="/contact" 
                  className="group relative px-8 py-4 rounded-xl bg-white text-purple-600 font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 bg-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors">Get Free Industry Analysis</span>
                  <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link 
                  href="#industries" 
                  className="px-8 py-4 rounded-xl border-2 border-white/40 bg-white/10 backdrop-blur-md text-white font-bold text-lg hover:bg-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <span>View All Industries</span>
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
                  <span className="text-sm font-medium">Industry Expertise</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="text-sm font-medium">Proven Results</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-medium">Custom Strategies</span>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <HeroContactForm 
                title="Industry-Specific SEO Audit"
                subtitle="Get a customized SEO strategy for your industry"
                buttonText="Get Industry Analysis"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Stats Strip */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">50+</div>
                <div className="text-sm md:text-base text-white/80 font-medium">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">1,000+</div>
                <div className="text-sm md:text-base text-white/80 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">98%</div>
                <div className="text-sm md:text-base text-white/80 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">10+</div>
                <div className="text-sm md:text-base text-white/80 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top 10 Countries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md text-cyan-300 text-sm font-bold mb-6 border border-cyan-400/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                </svg>
                <span>Global SEO Coverage</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Top Countries I serve
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Expert SEO services in major markets worldwide with localized strategies
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
              {countries.slice(0, 10).map((country, index) => {
                const colors = flagColors[country.code as keyof typeof flagColors] || { primary: '#3B82F6', secondary: '#1E40AF', accent: '#60A5FA' };
                return (
                  <Link
                    key={country.slug}
                    href={`/${country.slug}`}
                    className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 text-center animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Flag-colored top border on hover */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }}
                    />
                    
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm">
                      {country.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {country.cities.length}+ cities
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* See All Countries Button */}
            <div className="text-center animate-fade-in">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4z" clipRule="evenodd"/>
                </svg>
                See All {countries.length}+ Countries
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                Serving businesses in {countries.reduce((acc, c) => acc + c.cities.length, 0)}+ cities worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-purple-950/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Specialized Expertise</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Specialized SEO for <span className="gradient-text">Every Industry</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Industry-specific strategies that understand your market, competitors, and customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const gradient = industryGradients[index % industryGradients.length];
                return (
                  <Link
                    href={`/services/${industry.slug}`}
                    key={industry.slug}
                    className="group animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative h-full p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:-translate-y-1">
                      {/* Subtle gradient accent on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                      
                      <div className="relative">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-md`}>
                          {industry.icon}
                        </div>
                        
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {industry.name}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        {/* View Details Button */}
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300">
                          <span>Learn More</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific SEO */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">The Difference</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Why Industry-Specific SEO <span className="gradient-text">Matters</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Generic SEO strategies don't work. Every industry has unique challenges, opportunities, and customer behaviors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Industry Expertise',
                  description: 'Deep understanding of your industry trends, competitors, and customer behavior',
                  icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>,
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'Targeted Keywords',
                  description: 'Industry-specific keyword research that captures high-intent searches',
                  icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/></svg>,
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  title: 'Compliance Ready',
                  description: 'SEO strategies that comply with industry regulations and standards',
                  icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>,
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Proven Results',
                  description: 'Track record of success in your specific industry vertical',
                  icon: <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/></svg>,
                  gradient: 'from-orange-500 to-red-500'
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />
                  
                  <div className="relative">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fade-in">
              Ready to Dominate Your Industry?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
              Let's discuss how our industry-specific SEO strategies can help your business grow and dominate your market
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-700 font-bold text-lg shadow-2xl hover:shadow-white/50 hover:scale-105 hover:bg-gradient-to-r hover:from-white hover:to-cyan-50 transition-all duration-300"
              >
                Get Free Consultation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Guaranteed Results</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose My SEO Services */}
        <WhyChooseSEO />

        {/* SEO Benefits */}
        <SEOBenefits />

        {/* SEO Process */}
        <SEOProcessDetailed />

        {/* SEO Case Studies */}
        <SEOCaseStudies />

        {/* SEO Testimonials */}
        <SEOTestimonials />

        {/* Comprehensive FAQ */}
        <ComprehensiveFAQ />
      </main>
      <Footer />
    </>
  )
}
