'use client';

import React from 'react';

import { FaCheckCircle, FaLightbulb } from 'react-icons/fa';;
interface ComparisonRow {
  feature: string;
  withSEO: string;
  withoutSEO: string;
}

interface CompetitorComparisonProps {
  industry: string;
  comparisons?: ComparisonRow[];
}

const defaultComparisons: ComparisonRow[] = [
  { feature: "Google Visibility", withSEO: "Page 1 rankings for key terms", withoutSEO: "Buried on page 3+" },
  { feature: "Lead Generation", withSEO: "24/7 automated lead flow", withoutSEO: "Only word-of-mouth referrals" },
  { feature: "Cost Per Lead", withSEO: "Decreases over time", withoutSEO: "Constantly paying for ads" },
  { feature: "Customer Trust", withSEO: "Organic = higher trust", withoutSEO: "Skeptical of paid ads" },
  { feature: "Local Presence", withSEO: "Dominate local pack", withoutSEO: "Competitors take your customers" },
  { feature: "Long-term Value", withSEO: "Compounds over time", withoutSEO: "Starts from zero each month" }
];

export default function CompetitorComparison({ industry, comparisons = defaultComparisons }: CompetitorComparisonProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600/10 to-green-600/10 border border-slate-300 dark:border-slate-700 mb-6">
            <span className="text-red-500">❌</span>
            <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">vs</span>
            <span className="text-green-500">✅</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            <span className="gradient-text">{industry} Business</span> With SEO vs Without
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            See the real difference professional SEO makes for {industry.toLowerCase()} businesses competing in today's digital landscape
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block bg-white dark:bg-slate-800/50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 animate-scale-in">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50">
            <div className="p-6 font-bold text-slate-900 dark:text-white border-r border-slate-200 dark:border-slate-700">
              Feature
            </div>
            <div className="p-6 text-center border-r border-slate-200 dark:border-slate-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                With Professional SEO
              </div>
            </div>
            <div className="p-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                </svg>
                Without SEO
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div 
              key={index}
              className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''} hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors`}
            >
              <div className="p-6 font-medium text-slate-700 dark:text-slate-300 border-r border-slate-200 dark:border-slate-700 flex items-center">
                {row.feature}
              </div>
              <div className="p-6 text-center border-r border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">{row.withSEO}</span>
                </div>
              </div>
              <div className="p-6 text-center flex items-center justify-center">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">{row.withoutSEO}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards Layout */}
        <div className="md:hidden space-y-4 animate-scale-in">
          {comparisons.map((row, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-800/50 rounded-2xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700"
            >
              <div className="p-4 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white text-center">{row.feature}</h3>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-200 dark:divide-slate-700">
                <div className="p-4 bg-green-50/50 dark:bg-green-900/10">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-bold text-green-700 dark:text-green-400">With SEO</span>
                  </div>
                  <p className="text-xs text-center text-green-700 dark:text-green-300">{row.withSEO}</p>
                </div>
                <div className="p-4 bg-red-50/50 dark:bg-red-900/10">
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-xs font-bold text-red-700 dark:text-red-400">Without</span>
                  </div>
                  <p className="text-xs text-center text-red-700 dark:text-red-300">{row.withoutSEO}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800">
            <div className="text-4xl">💡</div>
            <div className="text-left">
              <p className="font-bold text-slate-900 dark:text-white">
                Your competitors are investing in SEO. Are you?
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Every day without SEO is a day your competitors are capturing your potential customers.
              </p>
            </div>
            <a 
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
