'use client'

import Link from 'next/link'
import { useState } from 'react'

const caseStudies = {
  healthcare: {
    badge: "CASE STUDY",
    title: "MedSpa's Success with Tailored SEO Solutions",
    challenge: "A local MedSpa practicing with zero online presence, needed to quickly dominate credibility and attract local patients for sustainable services.",
    solution: "Launched SEO strategy with rapid local optimization, service-specific keyword targeting, and content generation to establish strong online presence.",
    quote: "We went from invisible to dominating local search in just 3 months. New patient bookings increased dramatically.",
    author: "Dr. Amanda Foster",
    position: "Owner, Radiance MedSpa",
    results: [
      { label: "Local Visibility", value: "100%", description: "Dominating Local Rankings in their Services", icon: "check" },
      { label: "Patient Growth", value: "Multiple", description: "Patients booking their first appointments", icon: "trend" },
      { label: "Organic Traffic", value: "+285%", description: "Surge in website traffic from local search", icon: "up" }
    ],
    timeline: "30-90 Days"
  },
  finance: {
    badge: "CASE STUDY",
    title: "FinTech Startup's Explosive Growth Through Strategic SEO",
    challenge: "A financial technology startup struggled to compete with established banks and needed to build trust while capturing high-intent financial service searches.",
    solution: "Implemented comprehensive content authority strategy, targeting long-tail financial keywords, building E-A-T signals, and optimizing for featured snippets.",
    quote: "The SEO strategy transformed us from unknown to industry thought leaders. We're now ranking above major banks for our key services.",
    author: "Michael Chen",
    position: "CEO, SmartInvest Platform",
    results: [
      { label: "Keywords Ranked", value: "500+", description: "First page rankings for financial terms", icon: "check" },
      { label: "Lead Quality", value: "3.5x", description: "Increase in qualified demo requests", icon: "trend" },
      { label: "Revenue Impact", value: "+425%", description: "Growth in organic-driven revenue", icon: "up" }
    ],
    timeline: "60-120 Days"
  },
  ecommerce: {
    badge: "CASE STUDY",
    title: "E-Commerce Brand's Journey from Zero to Hero",
    challenge: "An online fashion retailer was drowning in paid ads costs with poor organic visibility, losing market share to competitors appearing in organic search results.",
    solution: "Built comprehensive e-commerce SEO foundation: product page optimization, category architecture, technical improvements, and content-driven link acquisition strategy.",
    quote: "We cut our ad spend by 60% while tripling our revenue. SEO became our most profitable channel in under 6 months.",
    author: "Sarah Martinez",
    position: "Founder, Urban Style Co",
    results: [
      { label: "Organic Revenue", value: "+380%", description: "Growth in non-paid channel sales", icon: "check" },
      { label: "Product Visibility", value: "2,400+", description: "Products ranking in top 10", icon: "trend" },
      { label: "ROI Achievement", value: "8.2x", description: "Return on SEO investment", icon: "up" }
    ],
    timeline: "90-150 Days"
  }
}

export default function CaseStudyTabs() {
  const [activeTab, setActiveTab] = useState<'healthcare' | 'finance' | 'ecommerce'>('healthcare')
  
  const tabs = [
    { key: 'healthcare' as const, label: 'Healthcare' },
    { key: 'finance' as const, label: 'Finance/Technology' },
    { key: 'ecommerce' as const, label: 'E-commerce' }
  ]

  const study = caseStudies[activeTab]

  return (
    <>
      {/* Category Tabs */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Case Study Card */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_380px]">
            {/* Left Content */}
            <div className="p-8 lg:p-10">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold mb-4">
                  {study.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {study.title}
                </h3>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">The Challenge</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-10">
                    {study.challenge}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">The Solution</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-10">
                    {study.solution}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl p-6 border border-blue-100 dark:border-blue-900/50">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-serif">
                  "
                </div>
                <p className="text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed mb-3 pl-4">
                  "{study.quote}"
                </p>
                <div className="pl-4">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{study.author}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{study.position}</p>
                </div>
              </div>
            </div>

            {/* Right Results Panel */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <h4 className="text-lg font-bold">The Results</h4>
                </div>

                {/* Results Cards */}
                <div className="space-y-4">
                  {study.results.map((result, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">{result.label}</span>
                        {result.icon === 'check' && (
                          <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {result.icon === 'trend' && (
                          <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        )}
                        {result.icon === 'up' && (
                          <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                          </svg>
                        )}
                      </div>
                      <div className="text-5xl font-black mb-1">{result.value}</div>
                      <p className="text-xs opacity-80">{result.description}</p>
                    </div>
                  ))}
                </div>

                {/* Timeline Badge */}
                <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider opacity-80 mb-1">Timeline</div>
                  <div className="text-3xl font-black">{study.timeline}</div>
                  <div className="text-xs opacity-80 mt-1">Transformation Period</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
