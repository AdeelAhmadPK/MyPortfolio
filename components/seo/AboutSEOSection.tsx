'use client';

import React from 'react';

export function AboutSEOSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
              About SEO
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Search Engine Optimization</span>?
            </h2>
          </div>

          {/* Detailed SEO Explanation */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Search Engine Optimization (SEO) is the art and science of improving your website's visibility in organic (non-paid) search engine results. When users search for products, services, or information related to your business, SEO helps ensure your website appears prominently in search results, driving qualified traffic and potential customers to your site.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why SEO Matters</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Over 68% of online experiences begin with a search engine query</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>75% of users never scroll past the first page of search results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>SEO drives 1000%+ more traffic than organic social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>SEO leads have a 14.6% close rate compared to 1.7% for outbound leads</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">SEO vs Paid Advertising</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Organic search results get 53% of all website traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>SEO provides compounding returns over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Long-term cost per acquisition is significantly lower</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Organic rankings build trust and brand credibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Core Pillars of SEO */}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              The Core Pillars of Modern SEO
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Technical SEO</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Ensures search engines can efficiently crawl, index, and render your website. Includes site speed, mobile-friendliness, structured data, and Core Web Vitals optimization.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">On-Page SEO</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Optimizes individual pages for target keywords and user intent. Includes content quality, title tags, meta descriptions, headers, internal linking, and image optimization.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Off-Page SEO</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Builds your website's authority through external signals. Includes backlink acquisition, brand mentions, social signals, and online reputation management.
                </p>
              </div>
            </div>

            {/* How Search Engines Work */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 mb-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                How Search Engines Work
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Crawling</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Search engine bots discover and scan websites by following links. They read content, code, and media to understand what each page is about.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Indexing</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    After crawling, search engines store and organize the information in their index—a massive database of all the web content they've discovered.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">Ranking</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    When someone searches, the algorithm analyzes indexed pages and ranks them based on hundreds of factors to show the most relevant results.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Timeline */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-200 dark:border-blue-800/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
                How Long Does SEO Take?
              </h3>
              <p className="text-center text-slate-600 dark:text-slate-300 mb-6">
                SEO is a long-term investment. While some improvements can be seen quickly, sustainable results typically develop over time:
              </p>
              <div className="grid sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">1-3 Months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Technical fixes & foundation</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">3-6 Months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Initial ranking improvements</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">6-12 Months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Significant traffic growth</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">12+ Months</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Compound growth & authority</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSEOSection;
