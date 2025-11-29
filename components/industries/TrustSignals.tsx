'use client';

import React from 'react';

import { FaBolt, FaBullseye, FaChartLine, FaHandshake, FaLock, FaTrophy } from 'react-icons/fa';
interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TrustSignalsProps {
  industry: string;
  customItems?: TrustItem[];
}

const defaultTrustItems: TrustItem[] = [
  {
    icon: <FaTrophy className="w-6 h-6" />,
    title: "10+ Years Experience",
    description: "A decade of proven results across diverse industries and markets"
  },
  {
    icon: <FaChartLine className="w-6 h-6" />,
    title: "500+ Rankings Improved",
    description: "Consistently helping businesses climb to page 1 of Google"
  },
  {
    icon: <FaBullseye className="w-6 h-6" />,
    title: "ROI-Focused Strategy",
    description: "Every action is designed to drive leads and revenue, not vanity metrics"
  },
  {
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Transparent Reporting",
    description: "Clear monthly reports showing exactly what we're doing and why"
  },
  {
    icon: <FaBolt className="w-6 h-6" />,
    title: "Fast Response Time",
    description: "Quick turnaround on requests and proactive communication"
  },
  {
    icon: <FaLock className="w-6 h-6" />,
    title: "White-Hat Only",
    description: "Ethical SEO practices that build lasting results, never risky shortcuts"
  }
];

export default function TrustSignals({ industry, customItems }: TrustSignalsProps) {
  const items = customItems || defaultTrustItems;

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100/50 to-transparent dark:from-indigo-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 dark:border-green-400/20 mb-6">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-bold text-green-600 dark:text-green-400">Why Trust Us</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            The <span className="gradient-text">{industry} SEO Expert</span> You Can Trust
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Choosing an SEO partner is a big decision. Here's why {industry.toLowerCase()} businesses trust us with their online growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border-2 border-slate-200 dark:border-slate-700 hover:border-green-500/50 dark:hover:border-green-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 dark:from-green-500/30 dark:to-emerald-500/30 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="text-center mb-8">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Trusted by businesses worldwide</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {['Google Partner', 'SEMrush Certified', 'Ahrefs Expert', 'HubSpot Certified', 'Moz Associate'].map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
