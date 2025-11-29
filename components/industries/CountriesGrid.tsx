'use client'

import Link from 'next/link'
import { countries } from '@/data/locations'
import { flagColors } from '@/data/flagColors'

interface CountriesGridProps {
  industrySlug: string
  industryIcon?: React.ReactNode
  limit?: number
  serviceType?: 'industry' | 'cms'
}

export default function CountriesGrid({ industrySlug, industryIcon = <span className="text-2xl">🌍</span>, limit = 10, serviceType }: CountriesGridProps) {
  const topCountries = countries.slice(0, limit)
  
  // Direct URL path: /pk/local-seo
  const getServicePath = (countryCode: string) => {
    return `/${countryCode.toLowerCase()}/${industrySlug}`
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
            <span className="text-2xl inline-flex items-center">{industryIcon}</span>
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              Global Coverage
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Serving Countries Worldwide
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Professional SEO services available in <strong>{countries.length}+ countries</strong>. 
            Proven strategies adapted for local markets, languages, and competitive landscapes.
          </p>
        </div>

        {/* Top 10 Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {topCountries.map((country) => {
            const colors = flagColors[country.code] || { 
              primary: '#3B82F6', 
              secondary: '#6366F1', 
              accent: '#8B5CF6' 
            }
            
            return (
              <Link
                key={country.code}
                href={getServicePath(country.code)}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`
                  }}
                />
                
                <div className="relative z-10 text-center">
                  {/* Flag */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  
                  {/* Country Name */}
                  <h3 
                    className="text-lg font-bold mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ color: colors.primary }}
                  >
                    {country.name}
                  </h3>
                  
                  {/* CTA Arrow */}
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-black dark:text-white">View Services</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      style={{ color: colors.accent }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Decorative Corner */}
                <div 
                  className="absolute top-0 right-0 w-20 h-20 opacity-10"
                  style={{
                    background: `radial-gradient(circle at top right, ${colors.primary}, transparent)`
                  }}
                />
              </Link>
            )
          })}
        </div>

        {/* See All Countries Button */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>See All {countries.length} Countries</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
