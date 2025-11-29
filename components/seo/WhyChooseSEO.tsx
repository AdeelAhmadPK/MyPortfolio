'use client';

import React from 'react';

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats?: string;
  color: string;
}

const reasons: Reason[] = [
  {
    title: "Proven SEO Results That Matter",
    description: "Unlike other SEO agencies that promise the moon, I focus on what actually moves the needle for your business. My search engine optimization strategies have helped businesses achieve 200%+ organic traffic growth, dominate local search results, and significantly increase qualified leads.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    stats: "200%+ Traffic",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Transparent SEO Reporting",
    description: "You deserve to know exactly where your SEO investment goes. Our comprehensive SEO reports show real progress in Google rankings, organic traffic trends, keyword positions, and ROI metrics. No vanity metrics or confusing jargon.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: "Weekly Reports",
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "White-Hat SEO Only",
    description: "We never take shortcuts that could hurt your website's reputation. My SEO consultant team uses only ethical, Google-approved SEO techniques that build sustainable rankings and protect your brand for lasting results.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stats: "100% Ethical",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "Custom SEO Strategy",
    description: "Cookie-cutter SEO packages don't work because every business is unique. I develop customized SEO strategies based on your industry, competition, target audience, and business goals for your specific success.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    stats: "Tailored Plans",
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Expert SEO Team",
    description: "My SEO specialists have years of hands-on experience ranking websites in competitive industries. We stay ahead of Google algorithm updates and bring expertise in technical SEO, content SEO, link building, and local SEO optimization.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    stats: "10+ Years",
    color: "from-violet-500 to-purple-600"
  },
  {
    title: "Full-Service SEO Agency",
    description: "From initial SEO audit to ongoing optimization, we handle everything. Our comprehensive SEO services include keyword research, on-page SEO, technical SEO, content creation, link building, and local SEO optimization.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    stats: "All-In-One",
    color: "from-pink-500 to-rose-600"
  }
];

export function WhyChooseSEO() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 mb-8">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm font-black text-cyan-300 uppercase tracking-wider">What Makes Us Different</span>
          </div>
          
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">My SEO Agency</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Choosing the right SEO company can make or break your online success. Here's why businesses trust us as their <span className="font-bold text-cyan-400">SEO partner</span> for sustainable results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  {reason.icon}
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${reason.color} text-white text-xs font-black uppercase tracking-wider shadow-lg`}>
                    {reason.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-black text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="relative text-slate-400 leading-relaxed">
                  {reason.description}
                </p>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-xl text-slate-400 mb-8">
            Ready to work with an SEO agency that <span className="font-bold text-cyan-400">delivers real results?</span>
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white font-black text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 group"
          >
            Get Your Free SEO Consultation
            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSEO;
