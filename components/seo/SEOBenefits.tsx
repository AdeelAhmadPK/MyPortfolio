'use client';

import React from 'react';
import Link from 'next/link';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  stat: string;
  statLabel: string;
}

const benefits: Benefit[] = [
  {
    title: "Increased Organic Traffic",
    description: "Watch your website traffic grow as I optimize for high-value keywords your customers are searching for. My SEO strategies focus on driving qualified visitors who are ready to convert, not just random clicks. Through comprehensive keyword research and content optimization, I help you capture more search engine traffic month after month.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stat: "200%+",
    statLabel: "Average Traffic Increase"
  },
  {
    title: "Higher Google Rankings",
    description: "Our proven SEO techniques help your website climb to the first page of Google for the keywords that matter most to your business. I focus on sustainable ranking improvements through on-page SEO, technical SEO, content optimization, and authoritative link building strategies that stand the test of time.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    stat: "1,700+",
    statLabel: "First Page Rankings"
  },
  {
    title: "Better Quality Leads",
    description: "SEO doesn't just bring more visitors—it brings the right visitors. By targeting search intent and optimizing for commercial keywords, My SEO services attract prospects who are actively looking for what you offer. This means higher conversion rates and better return on your SEO investment.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stat: "5x",
    statLabel: "Lead Quality Improvement"
  },
  {
    title: "Long-Term ROI",
    description: "Unlike paid advertising where traffic stops when you stop paying, SEO builds lasting assets. The content I create, the authority I build, and the technical improvements we make continue generating organic traffic and leads for years. SEO is one of the most cost-effective marketing investments you can make.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: "312%",
    statLabel: "Average ROI"
  },
  {
    title: "Competitive Advantage",
    description: "While your competitors struggle to get noticed online, professional SEO services put you ahead of the pack. My SEO competitor analysis identifies gaps and opportunities to outrank them in search results. Dominating page one for your industry keywords establishes your brand as the go-to authority in your field.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    stat: "87%",
    statLabel: "Market Share Gain"
  },
  {
    title: "Brand Credibility",
    description: "Ranking on the first page of Google isn't just about traffic—it's about trust. Users perceive top-ranking websites as more credible and authoritative. My SEO strategies build this trust through quality content, positive user signals, and strong backlink profiles that search engines reward with higher visibility.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: "94%",
    statLabel: "Trust Score Improvement"
  }
];

export function SEOBenefits() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:text-green-400 text-sm font-semibold mb-4">
            Benefits of SEO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">SEO Matters</span> for Your Business
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Search engine optimization is the foundation of any successful online presence. Here's how professional SEO services can transform your business growth and digital marketing results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
            >
              {/* Stat Badge */}
              <div className="absolute -top-4 right-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold shadow-lg">
                {benefit.stat}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-4">
                {benefit.statLabel}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* SEO Explanation Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              What is SEO and How Does It Work?
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                <strong className="text-slate-900 dark:text-white">Search Engine Optimization (SEO)</strong> is the practice of optimizing your website to rank higher in search engine results pages (SERPs) like Google, Bing, and Yahoo. When done correctly, SEO helps your business appear when potential customers search for products or services you offer.
              </p>
              <p>
                Unlike paid advertising, <strong className="text-slate-900 dark:text-white">organic SEO</strong> builds sustainable visibility. My SEO company focuses on three core pillars: <strong>Technical SEO</strong> (site speed, mobile optimization, crawlability), <strong>On-Page SEO</strong> (content, keywords, meta tags), and <strong>Off-Page SEO</strong> (backlinks, brand mentions, authority building).
              </p>
              <p>
                Whether you need <strong>local SEO</strong> to dominate your city, <strong>e-commerce SEO</strong> to boost product visibility, or <strong>enterprise SEO</strong> for large-scale optimization, My SEO strategies are tailored to your specific goals and industry requirements.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-6">SEO Success Metrics</h4>
            <div className="space-y-4">
              {[
                { label: "Organic Traffic Growth", value: "200%+" },
                { label: "First Page Rankings", value: "1,700+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Average ROI", value: "312%" },
                { label: "Keywords Ranked", value: "50,000+" }
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                  <span className="text-slate-600 dark:text-slate-400">{metric.label}</span>
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SEOBenefits;
