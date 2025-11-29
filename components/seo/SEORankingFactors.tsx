'use client';

import React from 'react';

interface RankingFactor {
  factor: string;
  description: string;
  impact: 'High' | 'Medium' | 'Critical';
  category: string;
  tips: string[];
}

const rankingFactors: RankingFactor[] = [
  {
    factor: "Content Quality & Relevance",
    description: "High-quality, comprehensive content that thoroughly addresses user search intent remains the most important Google ranking factor.",
    impact: "Critical",
    category: "Content",
    tips: [
      "Create in-depth, expert-level content",
      "Address user search intent comprehensively",
      "Include original research and insights",
      "Update content regularly for freshness"
    ]
  },
  {
    factor: "Core Web Vitals",
    description: "Google's page experience signals including LCP, FID/INP, and CLS directly impact rankings, especially on mobile.",
    impact: "High",
    category: "Technical",
    tips: [
      "Optimize Largest Contentful Paint (LCP) under 2.5s",
      "Keep Interaction to Next Paint (INP) under 200ms",
      "Minimize Cumulative Layout Shift (CLS) under 0.1",
      "Use lazy loading for images and videos"
    ]
  },
  {
    factor: "Backlink Quality & Authority",
    description: "High-quality backlinks from authoritative, relevant websites signal trust and authority to search engines.",
    impact: "Critical",
    category: "Off-Page",
    tips: [
      "Focus on earning links from high-authority domains",
      "Ensure backlinks are topically relevant",
      "Diversify anchor text naturally",
      "Build relationships for sustainable link growth"
    ]
  },
  {
    factor: "Mobile-First Indexing",
    description: "Google primarily uses the mobile version of your site for indexing and ranking. Mobile optimization is essential.",
    impact: "Critical",
    category: "Technical",
    tips: [
      "Ensure responsive design across all devices",
      "Match content parity between mobile and desktop",
      "Optimize touch targets and font sizes",
      "Test mobile usability in Search Console"
    ]
  },
  {
    factor: "Search Intent Match",
    description: "Pages that accurately match what users are looking for when they search will rank higher than those that don't.",
    impact: "Critical",
    category: "Content",
    tips: [
      "Analyze top-ranking pages for intent patterns",
      "Create content matching the dominant intent",
      "Consider all variations of user intent",
      "Optimize for the right content format"
    ]
  },
  {
    factor: "E-E-A-T Signals",
    description: "Experience, Expertise, Authoritativeness, and Trustworthiness are crucial for yourL topics and overall content quality.",
    impact: "High",
    category: "Content",
    tips: [
      "Showcase author expertise and credentials",
      "Include first-hand experience in content",
      "Build authoritative backlinks and mentions",
      "Display trust signals like reviews and certifications"
    ]
  },
  {
    factor: "Crawlability & Indexation",
    description: "Search engines must be able to discover, crawl, and index your pages efficiently for them to rank.",
    impact: "High",
    category: "Technical",
    tips: [
      "Submit and optimize XML sitemaps",
      "Fix crawl errors promptly",
      "Optimize robots.txt directives",
      "Reduce crawl budget waste on low-value pages"
    ]
  },
  {
    factor: "Internal Linking Structure",
    description: "Strategic internal linking helps distribute page authority and helps search engines understand site hierarchy.",
    impact: "High",
    category: "On-Page",
    tips: [
      "Link to important pages from your homepage",
      "Use descriptive, keyword-rich anchor text",
      "Create topic clusters with pillar pages",
      "Fix broken internal links regularly"
    ]
  },
  {
    factor: "Page Speed & Performance",
    description: "Fast-loading pages provide better user experience and receive ranking boosts in search results.",
    impact: "High",
    category: "Technical",
    tips: [
      "Optimize and compress images",
      "Minify CSS, JavaScript, and HTML",
      "Leverage browser caching",
      "Use a CDN for faster content delivery"
    ]
  },
  {
    factor: "Keyword Optimization",
    description: "Strategic keyword placement in titles, headings, content, and meta tags signals topical relevance.",
    impact: "High",
    category: "On-Page",
    tips: [
      "Include primary keyword in title tag",
      "Use keywords naturally in headings",
      "Optimize meta descriptions for CTR",
      "Include semantic variations throughout content"
    ]
  },
  {
    factor: "HTTPS Security",
    description: "Secure HTTPS connection is a ranking factor and essential for user trust and data protection.",
    impact: "Medium",
    category: "Technical",
    tips: [
      "Install SSL certificate on all pages",
      "Redirect all HTTP to HTTPS",
      "Fix mixed content issues",
      "Keep SSL certificates updated"
    ]
  },
  {
    factor: "Structured Data (Schema)",
    description: "Schema markup helps search engines understand your content and can enable rich snippets in search results.",
    impact: "Medium",
    category: "Technical",
    tips: [
      "Implement relevant schema types",
      "Use JSON-LD format for markup",
      "Test with Rich Results Test",
      "Keep schema data accurate and updated"
    ]
  }
];

export function SEORankingFactors() {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      case 'High': return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      default: return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical': return 'from-purple-500 to-indigo-500';
      case 'Content': return 'from-green-500 to-emerald-500';
      case 'On-Page': return 'from-blue-500 to-cyan-500';
      case 'Off-Page': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-4">
            SEO Knowledge Base
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Google <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Ranking Factors</span> That Matter in 2025
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Understanding the most important Google ranking factors is essential for any successful SEO strategy. Here are the key factors I optimize for to improve your search rankings.
          </p>
        </div>

        {/* Ranking Factors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankingFactors.map((factor) => (
            <div 
              key={factor.factor}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${getCategoryColor(factor.category)} text-white mb-2`}>
                    {factor.category}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{factor.factor}</h3>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${getImpactColor(factor.impact)}`}>
                  {factor.impact}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {factor.description}
              </p>

              {/* Tips */}
              <div className="space-y-2">
                {factor.tips.slice(0, 3).map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <svg className="w-3 h-3 text-indigo-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-200 dark:border-indigo-800/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">200+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Known Ranking Signals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">12</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Core Factors I optimize</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technical Checks Per Audit</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Weekly</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Algorithm Monitoring</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Want to know how your website performs against these ranking factors?
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Get a Free SEO Audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SEORankingFactors;
