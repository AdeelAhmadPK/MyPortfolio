'use client';

import React from 'react';
import Link from 'next/link';

interface ServiceType {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  link: string;
  bestFor: string[];
}

const seoServiceTypes: ServiceType[] = [
  {
    title: "Local SEO Services",
    description: "Dominate local search results and Google Maps. Our local SEO strategies help brick-and-mortar businesses and service providers attract more customers in their geographic area. I optimize your Google Business Profile, build local citations, manage reviews, and create location-specific content that ranks.",
    features: [
      "Google Business Profile optimization",
      "Local citation building & cleanup",
      "NAP consistency across directories",
      "Local keyword targeting",
      "Google Maps optimization",
      "Review management strategy",
      "Local landing pages",
      "Geographic content optimization"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    link: "/services/local-seo",
    bestFor: ["Local businesses", "Service area businesses", "Multi-location companies", "Restaurants & retail"]
  },
  {
    title: "Technical SEO Services",
    description: "Build a solid foundation for SEO success. Our technical SEO experts identify and fix site issues that prevent search engines from properly crawling and indexing your content. From Core Web Vitals optimization to schema markup implementation, we ensure your website meets all technical requirements for top rankings.",
    features: [
      "Site speed optimization",
      "Core Web Vitals improvement",
      "Mobile-first optimization",
      "Schema markup implementation",
      "Crawlability & indexation fixes",
      "Site architecture optimization",
      "XML sitemap management",
      "Robots.txt optimization"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    link: "/services/technical-seo",
    bestFor: ["Large websites", "E-commerce platforms", "Enterprise sites", "Sites with speed issues"]
  },
  {
    title: "E-commerce SEO Services",
    description: "Drive more organic revenue to your online store. My e-commerce SEO specialists optimize product pages, category structures, and shopping experiences for platforms like Shopify, WooCommerce, Magento, and BigCommerce. I help you rank for product searches and capture purchase-ready traffic.",
    features: [
      "Product page optimization",
      "Category SEO structure",
      "Shopping feed optimization",
      "Product schema markup",
      "Shopify, Magento, WooCommerce SEO",
      "Conversion rate optimization",
      "Internal linking strategy",
      "Duplicate content fixes"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    link: "/services/ecommerce-seo",
    bestFor: ["Online stores", "Shopify sites", "WooCommerce sites", "Marketplaces"]
  },
  {
    title: "Content SEO & Strategy",
    description: "Create content that ranks and converts. Our content SEO services combine keyword research, search intent analysis, and strategic content planning to build topical authority in your niche. I help you develop content that attracts organic traffic, engages readers, and drives business results.",
    features: [
      "Topic cluster development",
      "Search intent optimization",
      "Content gap analysis",
      "SEO copywriting",
      "Blog strategy & optimization",
      "Content refresh services",
      "Pillar page creation",
      "Featured snippet optimization"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: "/services/content-seo",
    bestFor: ["Content publishers", "B2B companies", "SaaS businesses", "Thought leaders"]
  },
  {
    title: "Link Building Services",
    description: "Build authority through quality backlinks. Our link building services focus on earning high-quality, relevant backlinks that boost your domain authority and search rankings. We use white-hat strategies including digital PR, content marketing, guest posting, and broken link building.",
    features: [
      "High-authority link acquisition",
      "Digital PR outreach",
      "Guest posting campaigns",
      "Broken link building",
      "Link profile analysis",
      "Toxic link disavow",
      "Competitor backlink analysis",
      "Resource page link building"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    link: "/services/link-building",
    bestFor: ["Competitive niches", "New domains", "Authority building", "Ranking pushes"]
  },
  {
    title: "Enterprise SEO Services",
    description: "Scale SEO for large organizations. Our enterprise SEO solutions address the unique challenges of large websites, complex structures, and multiple stakeholders. I provide strategic guidance, cross-team coordination, and scalable optimization processes for maximum organic growth.",
    features: [
      "Large-scale site optimization",
      "SEO governance frameworks",
      "Stakeholder coordination",
      "International SEO",
      "Scalable SEO processes",
      "Advanced technical SEO",
      "Custom SEO dashboards",
      "C-level reporting"
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/services/technical-seo",
    bestFor: ["Large enterprises", "Multi-site organizations", "Global brands", "Franchise businesses"]
  }
];

export function SEOServiceTypes() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            My SEO Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">SEO Solutions</span> for Every Need
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From local businesses to enterprise organizations, My SEO agency provides tailored search engine optimization services that deliver measurable results and sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {seoServiceTypes.map((service, index) => (
            <div 
              key={service.title}
              className="group relative p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.slice(0, 2).map((item) => (
                      <span key={item} className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
              >
                Learn More About {service.title.replace(" Services", "")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Service Categories */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
            Specialized SEO Services by Platform & Industry
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "WordPress SEO", link: "/services/wordpress-seo", desc: "Optimize WordPress sites for search engines" },
              { name: "Shopify SEO", link: "/services/shopify-seo", desc: "Drive organic traffic to Shopify stores" },
              { name: "Magento SEO", link: "/services/magento-seo", desc: "E-commerce optimization for Magento" },
              { name: "Drupal SEO", link: "/services/drupal-seo", desc: "Enterprise Drupal SEO solutions" },
              { name: "Wix SEO", link: "/services/wix-seo", desc: "Optimize Wix websites for Google" },
              { name: "Squarespace SEO", link: "/services/squarespace-seo", desc: "SEO for Squarespace websites" },
              { name: "White Label SEO", link: "/services/white-label-seo", desc: "SEO reseller services for agencies" },
              { name: "B2B SEO", link: "/services/b2b-seo", desc: "Lead generation SEO for B2B companies" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="group p-6 rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SEOServiceTypes;
