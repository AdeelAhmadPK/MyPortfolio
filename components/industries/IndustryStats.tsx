'use client';

import React from 'react';

import { FaDollarSign, FaMapMarkerAlt, FaMobileAlt, FaSearch } from 'react-icons/fa';
interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

interface IndustryStatsProps {
  industry: string;
  stats?: Stat[];
  description?: string;
}

const defaultStats: Stat[] = [
  { value: "93%", label: "of online experiences begin with a search engine", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
  { value: "46%", label: "of all Google searches have local intent", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
  { value: "78%", label: "of local mobile searches result in offline purchase", icon: <FaMobileAlt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
  { value: "4.6x", label: "higher conversion rate from local SEO vs paid ads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
];

export default function IndustryStats({ 
  industry, 
  stats = defaultStats,
  description 
}: IndustryStatsProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
            <span className="text-sm font-bold text-white">Industry Statistics</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{industry} SEO</span> Matters
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {description || `The numbers don't lie. Here's why investing in ${industry.toLowerCase()} SEO delivers the best ROI for your business`}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                style={{ background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {stat.icon}
                </div>
                
                <div className={`text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Source citation */}
        <div className="text-center mt-12 text-slate-500 text-sm animate-fade-in">
          <p>Sources: Google, BrightLocal, Think with Google, Search Engine Journal</p>
        </div>
      </div>
    </section>
  );
}
