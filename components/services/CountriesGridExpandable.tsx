'use client'

import { useState } from 'react'
import Link from 'next/link'
import { countries } from '@/data/locations'

export default function CountriesGridExpandable() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Filter out Pakistan and get top 10 countries
  const countriesExcludingPK = countries.filter(c => c.code.toLowerCase() !== 'pk')
  const top10Countries = countriesExcludingPK.slice(0, 10)
  const remainingCountries = countriesExcludingPK.slice(10)

  const displayedCountries = isExpanded 
    ? countriesExcludingPK 
    : top10Countries

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {displayedCountries.map((country, index) => (
          <Link
            key={country.slug}
            href={`/${country.slug}`}
            className="group animate-slide-up"
            style={{ animationDelay: `${index * 30}ms` } as React.CSSProperties}
          >
            <div className="h-full p-6 rounded-2xl border-2 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500 hover:bg-slate-800/70 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 relative overflow-hidden">
              {/* Flag background */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 flex items-center justify-center text-8xl">
                {country.flag}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg text-2xl">
                    {country.flag}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {country.name}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Expand/Collapse Button */}
      {remainingCountries.length > 0 && (
        <div className="text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {isExpanded ? (
              <>
                Show Less Countries
                <svg className="w-5 h-5 transform rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            ) : (
              <>
                View All Other Countries ({remainingCountries.length})
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </>
  )
}











