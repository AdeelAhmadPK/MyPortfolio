'use client';

import React from 'react';
import Link from 'next/link';

interface Location {
  name: string;
  code: string;
  cities?: string[];
}

const featuredLocations: Location[] = [
  { name: "United States", code: "us", cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Diego", "Dallas", "San Jose", "Austin", "Seattle", "Denver", "Boston", "Miami", "Atlanta", "San Francisco"] },
  { name: "United Kingdom", code: "uk", cities: ["London", "Manchester", "Birmingham", "Leeds", "Liverpool", "Sheffield", "Edinburgh", "Glasgow", "Bristol", "Cardiff"] },
  { name: "Canada", code: "ca", cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg", "Quebec City"] },
  { name: "Australia", code: "au", cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra"] },
  { name: "Germany", code: "de", cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Stuttgart", "Düsseldorf"] },
  { name: "France", code: "fr", cities: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice", "Nantes", "Bordeaux"] },
  { name: "India", code: "in", cities: ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"] },
  { name: "United Arab Emirates", code: "ae", cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"] },
  { name: "Singapore", code: "sg", cities: ["Singapore"] },
  { name: "Netherlands", code: "nl", cities: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"] },
  { name: "Spain", code: "es", cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Malaga"] },
  { name: "Italy", code: "it", cities: ["Rome", "Milan", "Naples", "Turin", "Florence"] },
];

const homeServiceIndustries = [
  "Roofing SEO", "HVAC SEO", "Plumbing SEO", "Electrician SEO", "Pest Control SEO",
  "Water Damage Restoration SEO", "Fire Damage SEO", "Mold Remediation SEO",
  "Garage Door SEO", "Flooring SEO", "Carpet Cleaning SEO", "Kitchen Remodeling SEO",
  "Bathroom Remodeling SEO", "Gutter Installation SEO", "Siding SEO", "Home Security SEO",
  "Walk-in Tubs SEO", "Appliance Repair SEO", "Dumpster Rental SEO", "Self Storage SEO"
];

export function LocalSEOCoverage() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
            Global SEO Coverage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Local SEO Services</span> Worldwide
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Whether you're a local business looking to dominate your city's search results or a multi-location enterprise needing comprehensive local SEO across regions, I have you covered with expert local SEO services.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {featuredLocations.map((location) => (
            <div 
              key={location.code}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
            >
              {/* Country Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                  {location.code.toUpperCase()}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white">{location.name}</h3>
              </div>

              {/* Cities */}
              <div className="flex flex-wrap gap-1.5">
                {location.cities?.slice(0, 6).map((city) => (
                  <span 
                    key={city}
                    className="px-2 py-1 rounded text-xs bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  >
                    {city}
                  </span>
                ))}
                {location.cities && location.cities.length > 6 && (
                  <span className="px-2 py-1 rounded text-xs bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                    +{location.cities.length - 6} cities
                  </span>
                )}
              </div>

              {/* Link */}
              <Link 
                href={`/${location.code}`}
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                View SEO Services in {location.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Local SEO Services */}
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
            What Our Local SEO Services Include
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Google Business Profile Optimization", desc: "Complete GBP setup and optimization to maximize local search visibility and drive more local leads." },
              { title: "Local Citation Building", desc: "Build consistent NAP citations across top business directories to boost local rankings and credibility." },
              { title: "Local Keyword Targeting", desc: "Strategic targeting of location-specific keywords like 'near me' searches and city-based queries." },
              { title: "Local Link Building", desc: "Acquire backlinks from local businesses, chambers of commerce, and community organizations." },
              { title: "Review Management", desc: "Develop a review generation strategy and manage your online reputation across platforms." },
              { title: "Local Content Strategy", desc: "Create location-specific content that resonates with your local audience and ranks in local searches." },
              { title: "Competitor Analysis", desc: "Analyze local competitors to identify opportunities and develop winning local SEO strategies." },
              { title: "Local Schema Markup", desc: "Implement LocalBusiness schema to help search engines understand your business information." },
            ].map((service) => (
              <div key={service.title} className="text-center p-4">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">{service.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Home Services Industries */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-200 dark:border-green-800/30">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Specialized SEO for Home Service Industries
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-center mb-8 max-w-2xl mx-auto">
            I specialize in SEO for home service businesses, helping contractors, tradespeople, and service providers dominate local search results and generate more leads.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {homeServiceIndustries.map((industry) => (
              <Link 
                key={industry}
                href={`/services/${industry.toLowerCase().replace(/ /g, '-').replace('seo', '').replace('--', '-')}`}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all"
              >
                {industry}
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "135+", label: "Countries Served" },
            { value: "10,000+", label: "Cities Covered" },
            { value: "50+", label: "Industries" },
            { value: "500+", label: "Local Clients" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocalSEOCoverage;
