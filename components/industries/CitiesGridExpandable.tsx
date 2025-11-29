'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface City {
  slug: string;
  name: string;
}

interface CitiesGridExpandableProps {
  cities: City[];
  countrySlug: string;
  flagColors: {
    primary: string;
    secondary: string;
    textOnLight: string;
    darkBg?: string;
  };
}

export default function CitiesGridExpandable({ cities, countrySlug, flagColors, initialCount = 10, serviceSlug }: CitiesGridExpandableProps & { initialCount?: number; serviceSlug?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedCities = isExpanded ? cities : cities.slice(0, initialCount);
  const remainingCitiesCount = cities.length - displayedCities.length;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {displayedCities.map((city, index) => (
          <Link
            key={city.slug}
            href={serviceSlug ? `/${countrySlug}/${city.slug}/${serviceSlug}` : `/${countrySlug}/${city.slug}`}
            className="group city-card-hover relative overflow-hidden p-6 rounded-2xl border-2 bg-white dark:bg-slate-900 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ 
              animationDelay: `${index * 0.05}s`,
              borderColor: `${flagColors.primary}30`
            }}
          >
            {/* Hover overlay - darker for better text contrast */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              style={{ background: `linear-gradient(to bottom right, ${flagColors.darkBg || flagColors.primary}, ${flagColors.primary})` }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ 
                    background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})`
                  }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 
                  className="text-xl font-bold transition-colors duration-300"
                  style={{ 
                    color: flagColors.textOnLight
                  }}
                >
                  {city.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {cities.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
            style={{
              background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary})`,
              color: 'white'
            }}
          >
            <span>
              {isExpanded ? 'Show Less Cities' : `See All Cities (${remainingCitiesCount} more)`}
            </span>
            {isExpanded ? (
              <FaChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <FaChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </div>
      )}
    </>
  );
}

