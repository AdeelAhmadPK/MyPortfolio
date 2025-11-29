'use client';

import React, { useState } from 'react';

interface Tool {
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

interface SEOToolsStackProps {
  title?: string;
  subtitle?: string;
}

const seoTools: Tool[] = [
  {
    name: "Google Search Console",
    category: "Analytics & Tracking",
    description: "Essential for monitoring search performance, identifying indexing issues, and understanding how Google sees your website. We use it daily to track rankings and fix technical issues.",
    features: ["Search performance data", "Index coverage", "Core Web Vitals", "Mobile usability", "Rich results testing"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Google Analytics 4",
    category: "Analytics & Tracking",
    description: "The industry standard for website analytics. We use GA4 to track organic traffic, user behavior, conversions, and ROI from SEO campaigns.",
    features: ["Traffic analysis", "User behavior tracking", "Conversion tracking", "Audience insights", "Attribution modeling"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.84 2.998v18.004c0 .552-.456 1-1.008 1H2.168c-.552 0-1.008-.448-1.008-1V2.998c0-.552.456-1 1.008-1h19.664c.552 0 1.008.448 1.008 1zm-4.032 14.003V7c0-.552-.456-1-1.008-1h-4.032c-.552 0-1.008.448-1.008 1v10.001c0 .552.456 1 1.008 1H17.8c.552 0 1.008-.448 1.008-1zm-8.064-4.002V10.5c0-.552-.456-1-1.008-1H5.704c-.552 0-1.008.448-1.008 1v6.499c0 .552.456 1 1.008 1h4.032c.552 0 1.008-.448 1.008-1v-3.998z"/>
      </svg>
    ),
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "Ahrefs",
    category: "Research & Analysis",
    description: "Our go-to tool for competitor analysis, backlink research, and keyword discovery. Ahrefs provides the most comprehensive link data in the industry.",
    features: ["Backlink analysis", "Keyword research", "Content gap analysis", "Site audit", "Rank tracking", "Competitor research"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "SEMrush",
    category: "Research & Analysis",
    description: "All-in-one SEO platform for keyword research, competitive analysis, and tracking. We use SEMrush for position tracking and content optimization.",
    features: ["Keyword magic tool", "Position tracking", "Site audit", "Backlink analytics", "Content analyzer", "Advertising research"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <rect width="20" height="20" x="2" y="2" rx="4"/>
      </svg>
    ),
    color: "from-orange-600 to-red-500"
  },
  {
    name: "Screaming Frog",
    category: "Technical SEO",
    description: "The most powerful website crawler for technical SEO audits. We use it to identify broken links, duplicate content, redirect chains, and crawl issues.",
    features: ["Site crawling", "Broken link detection", "Redirect analysis", "Duplicate content", "Page title analysis", "Schema validation"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: "from-green-500 to-teal-500"
  },
  {
    name: "GTmetrix / PageSpeed Insights",
    category: "Performance",
    description: "Essential for measuring and optimizing page speed. We use these tools to ensure your site meets Core Web Vitals standards and loads fast.",
    features: ["Page speed analysis", "Core Web Vitals", "Performance scoring", "Optimization recommendations", "Waterfall analysis"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    color: "from-emerald-500 to-green-600"
  },
  {
    name: "Moz Pro",
    category: "Research & Analysis",
    description: "Industry-trusted SEO software for link building, keyword research, and on-page optimization. We use Moz's Domain Authority metric to evaluate link quality.",
    features: ["Domain authority", "Keyword explorer", "Link research", "On-page grader", "SERP analysis", "MozBar extension"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    color: "from-blue-600 to-indigo-600"
  },
  {
    name: "Surfer SEO",
    category: "Content Optimization",
    description: "AI-powered content optimization tool. We use Surfer to ensure content is semantically optimized and covers all topically relevant terms.",
    features: ["Content editor", "SERP analyzer", "Keyword research", "Content audit", "NLP optimization", "Outline builder"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    color: "from-cyan-500 to-blue-500"
  }
];

export function SEOToolsStack({ 
  title = "My SEO Tools & Technology Stack",
  subtitle = "We use the industry's most trusted and powerful SEO tools to analyze, optimize, and track your website's performance. Our technology stack ensures data-driven decisions."
}: SEOToolsStackProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = Array.from(new Set(seoTools.map(tool => tool.category)));
  const filteredTools = selectedCategory 
    ? seoTools.filter(tool => tool.category === selectedCategory)
    : seoTools;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-4">
            SEO Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i >= arr.length - 2 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">{word} </span>
                ) : (
                  `${word} `
                )}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null 
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            All Tools
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white" 
                  : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.name}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white mb-4`}>
                {tool.icon}
              </div>

              {/* Header */}
              <div className="mb-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">{tool.category}</span>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{tool.name}</h3>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {tool.description}
              </p>

              {/* Features */}
              <div className="space-y-1">
                {tool.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    {feature}
                  </div>
                ))}
                {tool.features.length > 4 && (
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    +{tool.features.length - 4} more features
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-200 dark:border-cyan-800/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Our Technology Stack Matters
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                The tools you use directly impact the quality of your SEO work. We invest in premium SEO software to ensure I have access to the most accurate data, comprehensive analysis capabilities, and cutting-edge optimization features.
              </p>
              <ul className="space-y-2">
                {[
                  "Access to the most accurate keyword and backlink data",
                  "Comprehensive technical SEO auditing capabilities",
                  "Real-time rank tracking and competitor monitoring",
                  "AI-powered content optimization recommendations",
                  "Detailed reporting and analytics dashboards"
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">
                $50K+
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                Annual investment in SEO tools and technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SEOToolsStack;
