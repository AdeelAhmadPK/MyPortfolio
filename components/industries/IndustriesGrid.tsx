'use client';

import Link from 'next/link';
import { Industry, industries as defaultIndustries } from '@/data/industries';

interface IndustriesGridProps {
  industries?: Industry[];
  currentIndustry?: string;
  title?: string;
  countryCode?: string;
}

export default function IndustriesGrid({ industries, currentIndustry = '', title = "Other Industries I serve", countryCode }: IndustriesGridProps) {
  const industriesList = industries || defaultIndustries;
  const otherIndustries = industriesList.filter(ind => ind.slug !== currentIndustry);

  // Helper function to generate the correct href based on countryCode
  // /pk/local-seo or /services/local-seo
  const getHref = (industrySlug: string) => {
    if (countryCode) {
      return `/${countryCode}/${industrySlug}`;
    }
    return `/services/${industrySlug}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span className="text-sm font-bold text-blue-200">Industries</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Specialized SEO strategies for different industries and business types
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {otherIndustries.map((industry, index) => (
            <Link
              key={industry.slug}
              href={getHref(industry.slug)}
              className="group animate-scale-in"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative">
                  <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 brightness-0 invert opacity-90 group-hover:opacity-100">
                    {industry.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-blue-100 line-clamp-2 mb-3">
                    {industry.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-blue-300 font-medium">
                    <span>View Services</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-600 font-bold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300"
          >
            <span>View All Industries</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
