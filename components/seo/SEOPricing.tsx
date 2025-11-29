'use client';

import React from 'react';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "SEO Starter",
    price: "$1,500",
    period: "/month",
    description: "Perfect for small businesses and startups looking to establish their organic presence and improve local search visibility.",
    features: [
      "Up to 20 target keywords",
      "Monthly technical SEO audit",
      "On-page optimization (10 pages)",
      "Local SEO setup & optimization",
      "Google Business Profile optimization",
      "Monthly SEO reporting",
      "Basic link building (5 links/month)",
      "Email support"
    ],
    ctaText: "Get Started"
  },
  {
    name: "SEO Growth",
    price: "$3,500",
    period: "/month",
    description: "Ideal for growing businesses ready to scale their organic traffic and dominate their market with comprehensive SEO strategies.",
    features: [
      "Up to 50 target keywords",
      "Bi-weekly technical SEO audit",
      "On-page optimization (25 pages)",
      "Advanced local SEO strategies",
      "Content SEO strategy & creation (4 articles)",
      "Competitor analysis & monitoring",
      "Quality link building (15 links/month)",
      "Weekly SEO reporting",
      "Priority email & chat support"
    ],
    highlighted: true,
    badge: "Most Popular",
    ctaText: "Get Started"
  },
  {
    name: "SEO Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored for large enterprises and e-commerce businesses requiring comprehensive, scalable SEO solutions with dedicated support.",
    features: [
      "Unlimited target keywords",
      "Weekly technical SEO audit",
      "Full-site on-page optimization",
      "Enterprise local SEO (multi-location)",
      "Advanced content strategy & production",
      "Custom SEO dashboard",
      "Premium link building campaign",
      "International SEO support",
      "Dedicated SEO consultant",
      "24/7 priority support"
    ],
    badge: "Enterprise",
    ctaText: "Contact Me"
  }
];

const additionalServices = [
  { name: "One-Time SEO Audit", price: "From $500", desc: "Comprehensive site audit with actionable recommendations" },
  { name: "Keyword Research Package", price: "From $750", desc: "In-depth keyword research with competitor analysis" },
  { name: "Content SEO Package", price: "From $300/article", desc: "SEO-optimized content creation with keyword targeting" },
  { name: "Link Building Package", price: "From $150/link", desc: "High-quality, relevant backlink acquisition" },
  { name: "Local SEO Setup", price: "From $1,000", desc: "Complete local SEO setup with citation building" },
  { name: "White Label SEO", price: "Custom", desc: "Full white-label SEO services for agencies" }
];

export function SEOPricing() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-4">
            SEO Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Affordable <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">SEO Packages</span> for Every Business
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the SEO package that fits your business goals, or let us create a custom SEO strategy tailored to your specific needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className={`relative p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
                tier.highlighted 
                  ? "bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/50 dark:border-green-400/50 shadow-xl shadow-green-500/10" 
                  : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:border-green-500/30"
              }`}
            >
              {/* Badge */}
              {tier.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
                  tier.highlighted 
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                }`}>
                  {tier.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-end justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-green-600 dark:text-green-400">{tier.price}</span>
                  <span className="text-slate-500 pb-1">{tier.period}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${
                  tier.highlighted 
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/25" 
                    : "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-green-500 hover:text-white"
                }`}
              >
                {tier.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
            Additional SEO Services & À La Carte Options
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div 
                key={service.name}
                className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white">{service.name}</h4>
                  <span className="text-green-600 dark:text-green-400 font-bold text-sm">{service.price}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Money-back Guarantee */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/30">
          <div className="flex items-center justify-center gap-4 mb-4">
            <svg className="w-12 h-12 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            100% Satisfaction Guarantee
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm confident in My SEO services. If you don't see measurable improvements in your organic traffic and rankings within the first 90 days, we'll continue working at no additional cost until you do. That's our commitment to your success.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SEOPricing;
