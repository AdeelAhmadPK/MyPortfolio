'use client';

import React from 'react';

interface CaseStudy {
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  timeline: string;
  services: string[];
}

interface SEOCaseStudiesProps {
  caseStudies?: CaseStudy[];
  title?: string;
  subtitle?: string;
}

const defaultCaseStudies: CaseStudy[] = [
  {
    client: "Premier Roofing Company",
    industry: "Roofing",
    challenge: "Struggling to compete against established competitors with decades of backlink history. Minimal organic visibility despite quality services.",
    solution: "Implemented comprehensive local SEO strategy with Google Business optimization, aggressive link building from roofing industry publications, and created location-specific landing pages for all service areas.",
    results: [
      { metric: "Organic Traffic", before: "850/mo", after: "4,200/mo", improvement: "+394%" },
      { metric: "Keywords on Page 1", before: "12", after: "89", improvement: "+641%" },
      { metric: "Leads from Organic", before: "8/mo", after: "67/mo", improvement: "+738%" },
      { metric: "Revenue from SEO", before: "$12K/mo", after: "$145K/mo", improvement: "+1,108%" }
    ],
    timeline: "12 months",
    services: ["Local SEO", "Link Building", "Content Strategy", "Technical SEO"]
  },
  {
    client: "Complete Comfort HVAC",
    industry: "HVAC",
    challenge: "Website had severe technical SEO issues including slow page speed, poor mobile experience, and thousands of crawl errors preventing proper indexation.",
    solution: "Complete technical SEO overhaul including Core Web Vitals optimization, mobile-first redesign recommendations, site architecture restructuring, and implementation of proper schema markup for HVAC services.",
    results: [
      { metric: "Page Speed Score", before: "23", after: "94", improvement: "+309%" },
      { metric: "Crawl Errors", before: "3,500", after: "0", improvement: "100% Fixed" },
      { metric: "Indexed Pages", before: "45", after: "312", improvement: "+593%" },
      { metric: "Organic Conversions", before: "22/mo", after: "156/mo", improvement: "+609%" }
    ],
    timeline: "6 months",
    services: ["Technical SEO", "Site Audit", "Core Web Vitals", "Schema Markup"]
  },
  {
    client: "Guardian Pest Solutions",
    industry: "Pest Control",
    challenge: "No content strategy in place. Competitors dominated informational searches with extensive blog content about pest prevention and treatment.",
    solution: "Developed comprehensive content SEO strategy targeting informational keywords. Created 50+ in-depth articles about pest identification, prevention, and treatment. Implemented internal linking structure to boost service page rankings.",
    results: [
      { metric: "Blog Traffic", before: "200/mo", after: "18,500/mo", improvement: "+9,150%" },
      { metric: "Content Rankings", before: "0 keywords", after: "340+ keywords", improvement: "New Traffic Source" },
      { metric: "Email Subscribers", before: "125", after: "2,800", improvement: "+2,140%" },
      { metric: "Inbound Links", before: "45", after: "380", improvement: "+744%" }
    ],
    timeline: "10 months",
    services: ["Content SEO", "Blog Strategy", "Internal Linking", "Link Earning"]
  },
  {
    client: "E-Commerce Flooring Store",
    industry: "E-commerce / Flooring",
    challenge: "Large e-commerce site with 5,000+ products had duplicate content issues, thin product descriptions, and poor category page optimization. Organic revenue declining 15% year-over-year.",
    solution: "Implemented e-commerce SEO best practices including unique product descriptions, optimized category pages, proper canonical tags, enhanced product schema, and strategic internal linking between related products.",
    results: [
      { metric: "Organic Revenue", before: "$85K/mo", after: "$312K/mo", improvement: "+267%" },
      { metric: "Product Page Traffic", before: "12,000/mo", after: "68,000/mo", improvement: "+467%" },
      { metric: "Category Rankings", before: "8 on page 1", after: "45 on page 1", improvement: "+463%" },
      { metric: "Average Order Value", before: "$280", after: "$420", improvement: "+50%" }
    ],
    timeline: "9 months",
    services: ["E-commerce SEO", "Product Optimization", "Category SEO", "Schema Implementation"]
  }
];

export function SEOCaseStudies({ 
  caseStudies = defaultCaseStudies,
  title = "SEO Case Studies & Success Stories",
  subtitle = "Real results from real clients. See how our data-driven SEO strategies have transformed businesses across various industries."
}: SEOCaseStudiesProps) {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            Proven Results
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i === arr.length - 1 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{word}</span>
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

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.client}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {study.client}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 dark:text-slate-400">Timeline</div>
                  <div className="text-lg font-bold text-green-600 dark:text-green-400">{study.timeline}</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30">
                  <h4 className="font-bold text-red-600 dark:text-red-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    The Challenge
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{study.challenge}</p>
                </div>
                <div className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/30">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Our Solution
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results Grid */}
              <div className="mb-8">
                <h4 className="font-bold text-slate-900 dark:text-white mb-4">Results Achieved</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.results.map((result) => (
                    <div 
                      key={result.metric}
                      className="p-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50"
                    >
                      <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">{result.metric}</div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-sm text-slate-400 line-through">{result.before}</span>
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">{result.after}</span>
                      </div>
                      <div className="text-green-600 dark:text-green-400 font-bold text-sm">{result.improvement}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services Used */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-500 dark:text-slate-400">Services Used:</span>
                {study.services.map((service) => (
                  <span 
                    key={service}
                    className="px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Become Our Next Success Story?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our proven SEO strategies can help your business achieve similar or even better results.
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            Schedule your SEO Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SEOCaseStudies;
