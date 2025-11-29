'use client';

import React from 'react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
  duration: string;
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & SEO Audit",
    description: "We start by understanding your business, goals, target audience, and competitive landscape. Our comprehensive SEO audit identifies technical issues, content gaps, and optimization opportunities that form the foundation of your SEO strategy.",
    details: [
      "In-depth business consultation",
      "Comprehensive technical SEO audit",
      "Competitor analysis and benchmarking",
      "Current rankings and traffic analysis",
      "Content inventory and gap assessment",
      "Backlink profile analysis"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    duration: "Week 1-2"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "Based on our audit findings, I develop a customized SEO strategy tailored to your business goals and market conditions. This includes keyword targeting, content planning, technical priorities, and a clear roadmap for implementation.",
    details: [
      "Keyword research and mapping",
      "Content strategy development",
      "Technical SEO prioritization",
      "Link building strategy",
      "Local SEO planning (if applicable)",
      "Timeline and milestone setting"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    duration: "Week 2-3"
  },
  {
    step: 3,
    title: "Technical Optimization",
    description: "We address all technical SEO issues that could be holding back your rankings. From site speed optimization to schema markup implementation, we ensure search engines can efficiently crawl, index, and understand your website.",
    details: [
      "Site speed and Core Web Vitals",
      "Mobile optimization",
      "Crawlability and indexation fixes",
      "Schema markup implementation",
      "URL structure optimization",
      "Internal linking improvements"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    duration: "Week 3-5"
  },
  {
    step: 4,
    title: "On-Page Optimization",
    description: "I optimize every element of your pages for both search engines and users. This includes title tags, meta descriptions, headings, content structure, and internal linking to maximize your relevance for target keywords.",
    details: [
      "Title tag and meta description optimization",
      "Header structure optimization",
      "Content optimization for target keywords",
      "Image optimization and alt tags",
      "Internal linking strategy",
      "User experience improvements"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    duration: "Week 4-6"
  },
  {
    step: 5,
    title: "Content Creation & Optimization",
    description: "Content is the fuel of SEO success. I develop and optimize content that targets strategic keywords, answers user questions, and establishes your topical authority. Every piece is crafted to rank and convert.",
    details: [
      "SEO-optimized blog content",
      "Landing page development",
      "Existing content refresh",
      "Topic cluster development",
      "Featured snippet optimization",
      "Content promotion strategy"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    duration: "Ongoing"
  },
  {
    step: 6,
    title: "Link Building & Authority",
    description: "I build your website's authority through strategic link acquisition from relevant, high-quality websites. Our white-hat link building strategies help you earn the backlinks that signal trust and expertise to search engines.",
    details: [
      "Digital PR and outreach",
      "Guest posting campaigns",
      "Resource page link building",
      "Broken link building",
      "Link profile monitoring",
      "Toxic link cleanup"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    duration: "Ongoing"
  },
  {
    step: 7,
    title: "Monitoring & Reporting",
    description: "SEO is an ongoing process that requires continuous monitoring and optimization. We track your rankings, traffic, and conversions, providing regular reports with clear insights and recommendations for continued growth.",
    details: [
      "Weekly ranking monitoring",
      "Traffic and conversion tracking",
      "Monthly comprehensive reports",
      "Quarterly strategy reviews",
      "Algorithm update monitoring",
      "Continuous optimization"
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    duration: "Ongoing"
  }
];

export function SEOProcessDetailed() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-4">
            My SEO Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How I deliver <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">SEO Success</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our proven SEO methodology combines strategic planning, meticulous execution, and continuous optimization to deliver sustainable organic growth for your business.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block" />

          {/* Process Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/25 z-10 hidden md:flex">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className={`md:w-[calc(50%-40px)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 md:hidden">
                        <span className="text-xl font-bold">{step.step}</span>
                      </div>
                      <div className="hidden md:block w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <span className="text-sm text-cyan-400 font-semibold">{step.duration}</span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm text-slate-500">
                          <svg className="w-4 h-4 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 mb-6">
            Ready to start your SEO journey with a team that delivers real results?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
          >
            Start your SEO Strategy
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SEOProcessDetailed;
