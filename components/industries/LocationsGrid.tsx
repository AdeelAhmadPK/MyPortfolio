'use client';

import Link from 'next/link';
import { Country, City, Area } from '@/data/locations';
import { ReactNode } from 'react';

interface LocationsGridProps {
  locations: Array<{
    country: Country;
    city: City;
    area: Area;
  }>;
  industrySlug: string;
  industryIcon: ReactNode;
  showAll?: boolean;
}

export default function LocationsGrid({ locations, industrySlug, industryIcon, showAll = false }: LocationsGridProps) {
  // Separate international and Pakistan locations
  const internationalLocations = locations.filter(loc => loc.country.code !== 'pk');
  const pakistanLocations = locations.filter(loc => loc.country.code === 'pk');
  
  // Combine: all international first, then add 1-2 Pakistan cities at the end
  const diverseLocations = [...internationalLocations, ...pakistanLocations.slice(0, 2)];
  
  const displayLocations = showAll ? diverseLocations : diverseLocations.slice(0, 15);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Mesh gradient background with animated grid */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 mb-8 backdrop-blur-sm">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Worldwide Coverage</span>
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">SEO Services in </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">Top Cities</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Expert local SEO strategies tailored for businesses in major metropolitan areas across the globe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayLocations.map(({ country, city, area }, index) => (
            <Link
              key={`${country.slug}-${city.slug}-${area.slug}`}
              href={`/${country.code.toLowerCase()}/${city.slug}`}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <div className="relative p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 hover:bg-slate-900/70 overflow-hidden group">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:scale-110 transition-all duration-300">
                        {industryIcon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors mb-1">
                          {area.name}
                        </h3>
                        <p className="text-sm text-slate-400 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                          </svg>
                          {city.name}
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800 group-hover:border-blue-500/30 transition-colors">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{country.name}</span>
                    <span className="text-sm font-semibold text-blue-400 group-hover:text-cyan-400 transition-colors">Explore →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && diverseLocations.length > 15 && (
          <div className="text-center mt-16 animate-fade-in">
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              
              <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="relative z-10 text-lg">Explore All {diverseLocations.length} Cities</span>
              <svg className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
