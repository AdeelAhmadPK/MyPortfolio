'use client';

import React from 'react';
import Link from 'next/link';

interface Industry {
  name: string;
  slug: string;
  description: string;
  services: string[];
  icon: React.ReactNode;
  gradient: string;
}

const industriesData: Industry[] = [
  {
    name: "E-commerce SEO",
    slug: "services/ecommerce-seo",
    description: "Drive more organic revenue with our specialized e-commerce SEO services. I optimize product pages, category structures, and shopping experiences for Shopify, WooCommerce, Magento, and BigCommerce stores. My e-commerce SEO strategies focus on capturing purchase-intent keywords and improving conversion rates.",
    services: ["Product page optimization", "Category SEO", "Shopping feed optimization", "E-commerce technical SEO"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Healthcare SEO",
    slug: "services/healthcare-seo",
    description: "Attract more patients with healthcare-focused SEO that builds trust and authority. Our medical SEO services are designed for hospitals, clinics, doctors, dentists, and healthcare providers. I understand HIPAA compliance requirements and create content that demonstrates expertise, authoritativeness, and trustworthiness (E-A-T).",
    services: ["Medical practice SEO", "HIPAA-compliant content", "Patient acquisition", "Healthcare reputation management"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-red-500 to-pink-500"
  },
  {
    name: "Law Firm SEO",
    slug: "services/law-firm-seo",
    description: "Dominate local search and attract more clients with attorney SEO services designed for competitive legal markets. Our law firm SEO strategies target high-value practice areas like personal injury, criminal defense, family law, and corporate law. I help attorneys build authority and generate qualified case leads through organic search.",
    services: ["Attorney marketing", "Legal content strategy", "Case acquisition SEO", "Law firm local SEO"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-amber-500 to-orange-500"
  },
  {
    name: "Real Estate SEO",
    slug: "services/real-estate-seo",
    description: "Stand out in competitive real estate markets with targeted SEO for realtors, brokers, and property companies. Our real estate SEO services help you rank for local property searches, neighborhood keywords, and buyer/seller intent terms. I optimize property listings and create location-specific content that drives qualified leads.",
    services: ["Property listing SEO", "Neighborhood content", "Realtor local SEO", "Real estate lead generation"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
      </svg>
    ),
    gradient: "from-green-500 to-emerald-500"
  },
  {
    name: "SaaS SEO",
    slug: "services/saas-seo",
    description: "Scale your software business with SaaS-focused SEO strategies that drive product signups and demo requests. I understand the unique challenges of marketing software products and create content strategies that capture users at every stage of the buyer journey—from problem awareness to solution comparison.",
    services: ["Product-led SEO", "Feature page optimization", "SaaS content marketing", "Competitor positioning"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    name: "Home Services SEO",
    slug: "services/home-services-seo",
    description: "Get more service calls with SEO designed for HVAC, plumbing, electrical, roofing, and other home service contractors. Our local SEO strategies help tradespeople dominate Google Maps and local search results. I target emergency service keywords and build the online presence that homeowners trust.",
    services: ["Contractor local SEO", "Service area targeting", "Emergency service SEO", "Review management"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "B2B SEO",
    slug: "services/b2b-seo",
    description: "Generate high-quality B2B leads through strategic SEO that targets business decision-makers. Our B2B SEO services focus on long-tail keywords, thought leadership content, and account-based marketing integration. I help B2B companies build authority and capture leads throughout complex buying cycles.",
    services: ["Lead generation SEO", "Thought leadership content", "Enterprise keyword targeting", "B2B content strategy"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    name: "Dental SEO",
    slug: "services/dental-seo",
    description: "Fill your appointment book with dental SEO strategies that attract new patients. I help dentists, orthodontists, and dental specialists rank for local search terms and procedure-specific keywords. Our dental marketing expertise includes patient review management and content that builds trust with prospective patients.",
    services: ["Dental practice marketing", "Procedure-focused SEO", "Patient review strategy", "Dental local SEO"],
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"/>
      </svg>
    ),
    gradient: "from-sky-500 to-blue-500"
  }
];

export function IndustryExpertise() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            Industry Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Industry SEO</span> Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Every industry has unique challenges, competition, and customer behaviors. My SEO agency brings specialized expertise to your specific market, ensuring strategies that truly resonate with your target audience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => (
            <div 
              key={industry.name}
              className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {industry.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {industry.description}
              </p>

              {/* Services */}
              <div className="space-y-2 mb-4">
                {industry.services.slice(0, 3).map((service) => (
                  <div key={service} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                    <svg className="w-3 h-3 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{service}</span>
                  </div>
                ))}
              </div>

              {/* Link */}
              <Link
                href={`/${industry.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all duration-300"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Industries CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
          >
            View All Industries I serve
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IndustryExpertise;
