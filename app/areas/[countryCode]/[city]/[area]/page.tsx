import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllCountryCodes, getCountryFromCode } from '@/config/country-codes'
import { getCitiesByCountry, serviceTypes } from '@/config/service-locations'
import { getFlagColors } from '@/data/flagColors'

interface PageProps {
  params: Promise<{
    countryCode: string
    city: string
    area: string
  }>
}

// Generate static params for all area combinations
export async function generateStaticParams() {
  const countryCodes = getAllCountryCodes()
  const areas = [
    'downtown', 'city-center', 'business-district', 'old-town',
    'north-side', 'south-side', 'east-end', 'west-end',
    'suburbs', 'waterfront', 'financial-district', 'tech-hub'
  ]
  
  const params: { countryCode: string; city: string; area: string }[] = []
  
  countryCodes.forEach(code => {
    const countryName = getCountryFromCode(code)
    if (countryName) {
      const cities = getCitiesByCountry(countryName.toLowerCase().replace(/\s+/g, '-'))
      cities.slice(0, 10).forEach(city => { // Limit to top 10 cities per country
        areas.forEach(area => {
          params.push({
            countryCode: code,
            city: city.slug,
            area: area
          })
        })
      })
    }
  })
  
  return params
}

// Generate metadata
export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const countryName = getCountryFromCode(params.countryCode)
  const cityName = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const areaName = params.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  if (!countryName) {
    return {
      title: 'Area Not Found',
      description: 'The requested area was not found.'
    }
  }

  return {
    title: `SEO Services in ${areaName}, ${cityName} | Local SEO Expert`,
    description: `Professional SEO services in ${areaName}, ${cityName}, ${countryName}. Specialized local SEO strategies to help ${areaName} businesses dominate neighborhood search results and attract local customers.`,
    keywords: [
      `SEO ${areaName} ${cityName}`,
      `${areaName} SEO services`,
      `local SEO ${areaName}`,
      `${cityName} ${areaName} digital marketing`
    ],
  }
}

export default async function AreaServicesPage(props: PageProps) {
  const params = await props.params;
  const countryName = getCountryFromCode(params.countryCode)
  const cityName = params.city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const areaName = params.area.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  if (!countryName) {
    notFound()
  }

  // Get flag colors for the country
  const flagColors = getFlagColors(params.countryCode)

  const services = Object.entries(serviceTypes).slice(0, 20) // Top 20 services for areas

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .area-service-hover:hover {
            border-color: ${flagColors.primary} !important;
          }
          .area-service-hover:hover h3 {
            color: ${flagColors.primary} !important;
          }
          .area-faq-item {
            border-color: ${flagColors.primary}30 !important;
          }
        `
      }} />
      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden transition-colors duration-200"
        style={{ background: flagColors.gradientStyle }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Animated Blobs */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-blob opacity-30" 
          style={{ backgroundColor: flagColors.primary }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30" 
          style={{ backgroundColor: flagColors.secondary }}
        />
        {flagColors.accent && (
          <div 
            className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-30" 
            style={{ backgroundColor: flagColors.accent }}
          />
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-8 flex-wrap" style={{ color: flagColors.heroText, opacity: 0.9 }}>
            <Link href="/" className="hover:opacity-100 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:opacity-100 transition-colors">Services</Link>
            <span>/</span>
            <Link href={`/services/${params.countryCode}`} className="hover:opacity-100 transition-colors">{countryName}</Link>
            <span>/</span>
            <Link href={`/services/${params.countryCode}/cities/${params.city}`} className="hover:opacity-100 transition-colors">{cityName}</Link>
            <span>/</span>
            <span style={{ color: flagColors.heroText }}>{areaName}</span>
          </nav>

          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold shadow-lg" style={{ color: flagColors.heroText }}>
                📍 Local SEO Expert in {areaName}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl" style={{ color: flagColors.heroText }}>
              SEO Services in {areaName}, {cityName}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg" style={{ color: flagColors.heroText, opacity: 0.95 }}>
              Dominate local search results in {areaName}. Specialized SEO strategies to help your neighborhood business attract nearby customers and grow revenue.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2" style={{ color: flagColors.heroText }}>Local</div>
                <div style={{ color: flagColors.heroText, opacity: 0.9 }}>SEO Expert</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2" style={{ color: flagColors.heroText }}>24/7</div>
                <div style={{ color: flagColors.heroText, opacity: 0.9 }}>Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2" style={{ color: flagColors.heroText }}>100%</div>
                <div style={{ color: flagColors.heroText, opacity: 0.9 }}>Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl font-bold mb-2" style={{ color: flagColors.heroText }}>Fast</div>
                <div style={{ color: flagColors.heroText, opacity: 0.9 }}>Results</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white hover:shadow-2xl transition-all hover:scale-105 shadow-xl"
                style={{ color: flagColors.primary }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now for Free Quote
              </Link>
              <Link
                href={`/services/${params.countryCode}/cities/${params.city}`}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white/80 hover:bg-white/10 transition-all hover:scale-105"
                style={{ color: flagColors.heroText }}
              >
                View All {cityName} Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Services */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.accent || flagColors.secondary})` }}
            >
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
              SEO Services for {areaName} Businesses
            </h2>
            <p className="text-xl max-w-3xl mx-auto transition-colors duration-200" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
              Specialized local strategies to help your {areaName} business get found by nearby customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(([slug, service]) => (
              <Link
                key={slug}
                href={`/services/${params.countryCode}/cities/${params.city}/${slug}`}
                className="area-service-hover group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2"
                style={{ borderColor: `${flagColors.primary}30` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors" style={{ color: flagColors.textOnLight }}>
                    {service.name}
                  </h3>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-all flex-shrink-0" style={{ color: flagColors.primary }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 transition-colors duration-200">
                  Specialized for {areaName} market
                </p>
                <div className="flex items-center font-semibold text-sm transition-colors" style={{ color: flagColors.primary }}>
                  Get Started
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO Matters */}
      <section 
        className="relative py-20 overflow-hidden transition-colors duration-200"
        style={{ background: flagColors.gradientStyle }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" 
            style={{ backgroundColor: flagColors.primary }}
          />
          <div 
            className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl" 
            style={{ backgroundColor: flagColors.secondary }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold shadow-lg" style={{ color: flagColors.text }}>
              Local SEO Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-6 mb-4 transition-colors duration-200" style={{ color: flagColors.heroText }}>
              Why Local SEO Matters in {areaName}
            </h2>
            <p className="text-xl max-w-3xl mx-auto transition-colors duration-200" style={{ color: flagColors.heroText, opacity: 0.9 }}>
              Reach customers specifically searching for services in your neighborhood
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-colors duration-200">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-200" style={{ color: flagColors.heroText }}>
                Hyper-Local Targeting
              </h3>
              <p className="transition-colors duration-200" style={{ color: flagColors.heroText, opacity: 0.9 }}>
                Appear in search results when customers in {areaName} search for services like yours. Dominate your immediate neighborhood.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-colors duration-200">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-200" style={{ color: flagColors.heroText }}>
                Mobile-First Strategy
              </h3>
              <p className="transition-colors duration-200" style={{ color: flagColors.heroText, opacity: 0.9 }}>
                Capture "near me" searches from mobile users walking or driving through {areaName}. Be found when customers need you most.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-colors duration-200">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-4 transition-colors duration-200" style={{ color: flagColors.heroText }}>
                Google Business Profile
              </h3>
              <p className="transition-colors duration-200" style={{ color: flagColors.heroText, opacity: 0.9 }}>
                Optimize your profile to appear in the local pack for {areaName} searches. More visibility means more calls and visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className="py-20 transition-colors duration-200" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.accent || flagColors.secondary})` }}
            >
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-6 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="area-faq-item bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
                How can local SEO help my {areaName} business?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Local SEO helps your business appear when customers in {areaName} search for your services. You'll show up in Google's local pack, Maps, and organic results for neighborhood-specific searches.
              </p>
            </div>

            <div className="area-faq-item bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
                What's included in your local SEO service?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                We optimize your Google Business Profile, build local citations, create location-specific content, manage reviews, and implement technical SEO specifically targeting {areaName}, {cityName} customers.
              </p>
            </div>

            <div className="area-faq-item bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
                How long until I see results in {areaName}?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Most businesses see improvements within 2-3 months. Local SEO typically delivers faster results than broader campaigns because we're targeting a specific neighborhood with less competition.
              </p>
            </div>

            <div className="area-faq-item bg-white dark:bg-gray-800 rounded-xl p-6 border-2 transition-colors duration-200">
              <h3 className="text-xl font-bold mb-3 transition-colors duration-200" style={{ color: flagColors.textOnLight }}>
                Will this help my Google reviews and ratings?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Yes! Review management is a key part of local SEO. We help you generate more positive reviews from {areaName} customers and respond professionally to all feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="relative py-20 overflow-hidden transition-colors duration-200"
        style={{ background: flagColors.gradientStyle }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" 
            style={{ backgroundColor: flagColors.secondary }}
          />
          <div 
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000" 
            style={{ backgroundColor: flagColors.accent || flagColors.primary }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold shadow-lg" style={{ color: flagColors.text }}>
              🎯 Ready to Get Started?
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 drop-shadow-2xl" style={{ color: flagColors.heroText }}>
            Ready to Dominate {areaName} Search Results?
          </h2>
          <p className="text-xl mb-8 drop-shadow-lg" style={{ color: flagColors.heroText, opacity: 0.9 }}>
            Get a free consultation and discover how we can help your {areaName} business attract more local customers.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold rounded-full bg-white hover:shadow-2xl transition-all hover:scale-110 shadow-xl"
            style={{ color: flagColors.primary }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call for Free Local SEO Audit</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
