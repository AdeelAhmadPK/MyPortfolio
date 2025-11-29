'use client';

import React from 'react';

import { FaBullseye, FaClipboardList, FaHome, FaLink, FaMapMarkerAlt } from 'react-icons/fa';
interface LocalSignal {
  title: string;
  description: string;
  importance: 'High' | 'Medium' | 'Critical';
  icon: React.ReactNode;
}

interface LocalSEOSignalsProps {
  industry: string;
  signals?: LocalSignal[];
}

const defaultSignals: LocalSignal[] = [
  {
    title: "Google Business Profile",
    description: "Fully optimized GBP with accurate info, photos, posts, Q&A, and regular updates",
    importance: "Critical",
    icon: <FaMapMarkerAlt className="w-6 h-6" />
  },
  {
    title: "NAP Consistency",
    description: "Name, Address, Phone matching exactly across 100+ directories and citations",
    importance: "Critical",
    icon: <FaBullseye className="w-6 h-6" />
  },
  {
    title: "Local Reviews",
    description: "Strong review velocity with 4.5+ star rating and professional responses",
    importance: "High",
    icon: "⭐"
  },
  {
    title: "Local Citations",
    description: "Presence on industry-specific directories and local business listings",
    importance: "High",
    icon: <FaClipboardList className="w-6 h-6" />
  },
  {
    title: "On-Page Local Signals",
    description: "Location pages, local schema markup, embedded maps, and local keywords",
    importance: "High",
    icon: <FaHome className="w-6 h-6" />
  },
  {
    title: "Local Backlinks",
    description: "Links from local news, chambers of commerce, and community organizations",
    importance: "Medium",
    icon: <FaLink className="w-6 h-6" />
  }
];

export default function LocalSEOSignals({ industry, signals = defaultSignals }: LocalSEOSignalsProps) {
  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'from-red-500 to-orange-500';
      case 'High': return 'from-yellow-500 to-amber-500';
      case 'Medium': return 'from-blue-500 to-cyan-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getImportanceBg = (importance: string) => {
    switch (importance) {
      case 'Critical': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400';
      case 'High': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'Medium': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-bold text-white">Local SEO Ranking Factors</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How I optimize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{industry} Local SEO</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            I focus on the ranking signals that matter most for {industry.toLowerCase()} businesses targeting local customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {signals.map((signal, index) => (
            <div 
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getImportanceColor(signal.importance)} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {signal.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {signal.title}
                      </h3>
                    </div>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getImportanceBg(signal.importance)}`}>
                      {signal.importance} Priority
                    </span>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-left">
              <p className="text-white font-bold text-lg mb-1">
                Get Your Free Local SEO Audit
              </p>
              <p className="text-slate-400 text-sm">
                Discover which local ranking factors need the most attention for your {industry.toLowerCase()} business
              </p>
            </div>
            <a 
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Start Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
