'use client';

import React from 'react';

import { FaChartLine, FaClipboardList, FaCog, FaLink, FaPencilAlt, FaSearch } from 'react-icons/fa';
interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  duration?: string;
}

interface ProcessTimelineProps {
  industry: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Audit",
    description: "We analyze your current online presence, competitor landscape, and identify quick wins along with long-term opportunities.",
    icon: <FaSearch className="w-6 h-6" />,
    duration: "Week 1"
  },
  {
    step: 2,
    title: "Strategy Development",
    description: "I create a custom SEO roadmap with keyword mapping, content strategy, and technical optimization priorities.",
    icon: <FaClipboardList className="w-6 h-6" />,
    duration: "Week 2"
  },
  {
    step: 3,
    title: "Technical Optimization",
    description: "We fix technical issues, improve site speed, implement schema markup, and optimize your Google Business Profile.",
    icon: <FaCog className="w-6 h-6" />,
    duration: "Weeks 2-4"
  },
  {
    step: 4,
    title: "Content Creation",
    description: "I develop SEO-optimized service pages, location pages, blog content, and FAQ sections that establish topical authority.",
    icon: <FaPencilAlt className="w-6 h-6" />,
    duration: "Weeks 3-8"
  },
  {
    step: 5,
    title: "Link Building & Citations",
    description: "I build high-quality backlinks from industry directories, local publications, and relevant websites.",
    icon: <FaLink className="w-6 h-6" />,
    duration: "Ongoing"
  },
  {
    step: 6,
    title: "Monitor & Optimize",
    description: "We track rankings, traffic, and conversions, continuously refining strategy based on performance data.",
    icon: <FaChartLine className="w-6 h-6" />,
    duration: "Ongoing"
  }
];

export default function ProcessTimeline({ industry, steps = defaultSteps }: ProcessTimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Our Proven Process</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            How I Transform Your <span className="gradient-text">{industry} SEO</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Our battle-tested 6-step process has helped hundreds of {industry.toLowerCase()} businesses achieve top rankings and sustainable growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={`process-step-${step.step}-${index}`}
                className={`relative lg:flex lg:items-center lg:gap-8 animate-scale-in ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className={`group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                    {step.duration && (
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4`}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        {step.duration}
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl shadow-lg shadow-blue-500/30 rotate-3 hover:rotate-0 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-500 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>

                {/* Mobile icon */}
                <div className="lg:hidden flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                    {step.step}
                  </div>
                </div>

                {/* Empty space for other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
            Ready to start your {industry.toLowerCase()} SEO journey?
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Start Your Free Audit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
