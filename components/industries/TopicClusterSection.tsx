'use client';

import React from 'react';

import { FaBullseye, FaLightbulb, FaMapMarkerAlt, FaTrophy, FaWrench } from 'react-icons/fa';;;
interface ContentPillar {
  title: string;
  description: string;
  topics: string[];
  icon: React.ReactNode;
}

interface TopicClusterSectionProps {
  industry: string;
  pillars?: ContentPillar[];
}

export default function TopicClusterSection({ industry, pillars }: TopicClusterSectionProps) {
  const defaultPillars: ContentPillar[] = [
    {
      title: "Service Content",
      description: "Comprehensive pages for each service you offer, optimized for search intent",
      topics: ["Primary services", "Specialty services", "Emergency services", "Commercial services"],
      icon: <FaWrench className="w-6 h-6" />
    },
    {
      title: "Location Content",
      description: "Geo-targeted pages that dominate local search results in your service areas",
      topics: ["City pages", "Neighborhood pages", "Service area pages", "Near me optimization"],
      icon: <FaMapMarkerAlt className="w-6 h-6" />
    },
    {
      title: "Problem-Solution Content",
      description: "Educational content that captures customers researching their issues",
      topics: ["Troubleshooting guides", "Common problems", "DIY vs professional", "Warning signs"],
      icon: <FaLightbulb className="w-6 h-6" />
    },
    {
      title: "Trust & Authority Content",
      description: "Content that builds credibility and establishes you as the go-to expert",
      topics: ["Case studies", "Customer stories", "Industry expertise", "Certifications"],
      icon: <FaTrophy className="w-6 h-6" />
    }
  ];

  const displayPillars = pillars || defaultPillars;

  return (
    <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full opacity-[0.02] dark:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-slate-900 dark:text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topic-grid)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-600/20 dark:border-purple-400/20 mb-6">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">Semantic SEO Strategy</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Topic Cluster Strategy for <span className="gradient-text">{industry}</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I build comprehensive content ecosystems that establish your {industry.toLowerCase()} business as the topical authority in your market
          </p>
        </div>

        {/* Topic Cluster Visualization */}
        <div className="relative mb-16">
          {/* Center pillar indicator */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 items-center justify-center z-20 shadow-2xl shadow-blue-500/30">
            <div className="text-center text-white">
              <div className="text-3xl mb-1">🎯</div>
              <div className="text-xs font-bold">Core Topic</div>
              <div className="text-[10px] opacity-80">{industry} SEO</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
            {displayPillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connection line for desktop */}
                <div className={`hidden lg:block absolute top-1/2 ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-24 h-px bg-gradient-to-r from-blue-500/50 to-transparent`} />

                <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900/50 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pillar.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-colors cursor-default"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
