'use client';

import React from 'react';
import Link from 'next/link';

interface CaseStudy {
  title: string;
  industry: string;
  results: {
    metric: string;
    value: string;
    change: string;
  }[];
  testimonial?: string;
  clientName?: string;
}

interface CaseStudyHighlightProps {
  industry: string;
  caseStudy?: CaseStudy;
}

const defaultCaseStudy: CaseStudy = {
  title: "Local Business Transformation",
  industry: "Service Business",
  results: [
    { metric: "Organic Traffic", value: "340%", change: "increase" },
    { metric: "Lead Generation", value: "5x", change: "more leads" },
    { metric: "Google Rankings", value: "#1", change: "for 15+ keywords" },
    { metric: "Revenue Growth", value: "127%", change: "year over year" }
  ],
  testimonial: "Working with this SEO expert completely transformed our online presence. We went from invisible to dominating our local market.",
  clientName: "Business Owner"
};

export default function CaseStudyHighlight({ industry, caseStudy = defaultCaseStudy }: CaseStudyHighlightProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-purple-400/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-blue-400/20 rounded-full animate-float animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Case Study Details */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-bold text-white">Featured Case Study</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{industry}</span> Results
            </h2>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              See how I helped a {industry.toLowerCase()} business transform their online presence and dominate their local market through strategic SEO.
            </p>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8">
                <svg className="absolute top-4 left-4 w-8 h-8 text-purple-400/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className="text-white italic text-lg pl-12 pr-4">
                  "{caseStudy.testimonial}"
                </blockquote>
                {caseStudy.clientName && (
                  <p className="text-purple-300 font-medium mt-4 pl-12">— {caseStudy.clientName}</p>
                )}
              </div>
            )}

            <Link 
              href="/case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-indigo-900 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View All Case Studies
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right: Results Grid */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-2">
                  {result.value}
                </div>
                <div className="text-white font-bold mb-1">{result.metric}</div>
                <div className="text-purple-300 text-sm">{result.change}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10 animate-fade-in">
          {[
            { value: "200+", label: "Happy Clients" },
            { value: "1,500+", label: "Keywords Ranked" },
            { value: "15+", label: "Countries Served" },
            { value: "$2M+", label: "Revenue Generated" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
