'use client';

import Link from 'next/link';
import { Country } from '@/data/locations';

interface CitiesGridProps {
  country?: Country;
  countries?: Country[];
  industrySlug?: string;
  serviceSlug?: string;
}

export default function CitiesGrid({ country, countries, industrySlug, serviceSlug }: CitiesGridProps) {
  // Handle single country or multiple countries
  const countryList = country ? [country] : (countries || []);
  const slug = serviceSlug || industrySlug || '';
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-blue-50/30 dark:from-slate-950 dark:via-teal-950/30 dark:to-cyan-950/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-600/10 to-cyan-600/10 border border-teal-600/20 dark:border-teal-400/20 mb-6">
            <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-bold text-teal-600 dark:text-teal-400">Cities We Cover</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Serving Cities <span className="gradient-text">Worldwide</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Expert local SEO services available in major cities across the globe
          </p>
        </div>

        <div className="space-y-12">
          {countryList.map((country, countryIndex) => (
            <div key={country.slug} className="animate-slide-up" style={{ animationDelay: `${countryIndex * 100}ms` }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {country.name}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {country.cities.map((city, cityIndex) => (
                  <Link
                    key={city.slug}
                    href={slug ? `/${country.code.toLowerCase()}/${city.slug}/${slug}` : `/${country.code.toLowerCase()}/${city.slug}`}
                    className="group animate-scale-in"
                    style={{ animationDelay: `${(countryIndex * 100) + (cityIndex * 30)}ms` }}
                  >
                    <div className="p-5 rounded-xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {city.name}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            {city.areas.length} areas
                          </p>
                        </div>
                        <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-gradient-to-br from-teal-600/10 to-cyan-600/10 border-2 border-teal-600/20 dark:border-teal-400/20">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Don't see your city? I serve many more locations!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Contact Me
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
