'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface ComprehensiveFAQProps {
  faqs?: FAQ[];
  showCategories?: boolean;
}

const defaultFAQs: FAQ[] = [
  // General SEO Questions
  {
    category: "General SEO",
    question: "What is SEO and why is it important for my business?",
    answer: "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages like Google. It's important because over 90% of online experiences begin with a search engine, and websites on the first page of Google capture the vast majority of clicks. Effective SEO helps you reach potential customers when they're actively searching for products or services you offer, leading to higher quality leads, increased brand visibility, and sustainable business growth. Unlike paid advertising, the benefits of SEO compound over time, making it one of the most cost-effective long-term marketing investments."
  },
  {
    category: "General SEO",
    question: "How long does it take to see SEO results?",
    answer: "SEO is a long-term strategy, and timelines vary based on factors like your industry competitiveness, current website authority, and the scope of optimization needed. Generally, you can expect to see initial improvements in rankings and traffic within 3-6 months, with more significant results appearing around 6-12 months. Some quick wins from technical SEO fixes may show results faster. It's important to understand that sustainable SEO success requires ongoing effort—search engines continuously update their algorithms, and competitors are constantly working to improve their own rankings. My SEO consultant will provide realistic timelines based on your specific situation during the initial consultation."
  },
  {
    category: "General SEO",
    question: "What's the difference between SEO and SEM/PPC?",
    answer: "SEO (Search Engine Optimization) focuses on earning organic (unpaid) traffic through optimizing your website and content, while SEM (Search Engine Marketing) and PPC (Pay-Per-Click) involve paying for ads that appear in search results. The key differences: SEO results take longer but provide lasting value—once you rank, you continue to receive traffic without paying per click. PPC delivers immediate visibility but requires ongoing budget investment. SEO builds credibility and trust through organic rankings, while PPC is clearly labeled as advertising. Most successful digital marketing strategies use both: PPC for immediate results and testing, SEO for sustainable long-term growth. My SEO services can work alongside your paid advertising efforts for maximum impact."
  },
  // SEO Services Questions
  {
    category: "SEO Services",
    question: "What does your SEO service include?",
    answer: "Our comprehensive SEO services include: Technical SEO (site speed optimization, mobile optimization, crawlability fixes, schema markup), On-Page SEO (keyword research, content optimization, meta tags, internal linking), Off-Page SEO (link building, brand mentions, digital PR), Local SEO (Google Business Profile, citations, local content), Content Strategy (topic clusters, content creation, content optimization), and ongoing SEO Reporting & Analysis. We tailor My approach based on your business goals, industry, and current SEO status. Every client receives a customized SEO strategy rather than a one-size-fits-all package."
  },
  {
    category: "SEO Services",
    question: "Do you offer local SEO services?",
    answer: "Yes, local SEO is one of our core specialties. Our local SEO services help businesses dominate local search results and Google Maps. This includes optimizing your Google Business Profile, building and cleaning up local citations, ensuring NAP (Name, Address, Phone) consistency across the web, generating and managing customer reviews, creating location-specific landing pages, and implementing local schema markup. Whether you're a single-location business or a multi-location company, I develop local SEO strategies that help you capture customers searching for services in your area."
  },
  {
    category: "SEO Services",
    question: "Do you work with e-commerce websites?",
    answer: "Absolutely! E-commerce SEO is a major focus of our agency. I have extensive experience optimizing online stores on Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. My e-commerce SEO services include product page optimization, category structure optimization, product schema implementation, shopping feed optimization, internal linking strategies for e-commerce, fixing duplicate content issues common in online stores, and conversion rate optimization. I understand that e-commerce SEO is not just about traffic—it's about driving revenue through organic search."
  },
  // Pricing Questions
  {
    category: "Pricing & Packages",
    question: "How much do SEO services cost?",
    answer: "SEO pricing varies based on your website size, industry competitiveness, goals, and the scope of work required. My SEO packages typically range from $1,500 to $10,000+ per month for ongoing services. For one-time projects like SEO audits or specific optimizations, pricing depends on the project scope. I believe in transparent pricing and will provide a detailed proposal after understanding your needs. What's most important is the ROI—My clients typically see returns of 5-10x their SEO investment. I offer flexible SEO packages for small businesses, mid-sized companies, and enterprises, ensuring there's a solution that fits your budget and goals."
  },
  {
    category: "Pricing & Packages",
    question: "Do you require long-term contracts?",
    answer: "I believe in earning your business month after month through results, not locking you into lengthy contracts. While SEO is inherently a long-term strategy (and I recommend at least a 6-12 month commitment for best results), I offer flexible engagement terms. Most clients choose to continue working with us because they see real value, not because they're contractually obligated. I do offer discounted rates for longer-term commitments, but the choice is yours. My goal is to be a long-term partner in your success, and I'm confident that our results will speak for themselves."
  },
  // Technical Questions
  {
    category: "Technical SEO",
    question: "What is technical SEO?",
    answer: "Technical SEO refers to optimizations that help search engines crawl, index, and understand your website more effectively. Key technical SEO elements include: site speed and Core Web Vitals optimization, mobile-friendliness and responsive design, secure HTTPS implementation, XML sitemaps and robots.txt configuration, URL structure optimization, fixing crawl errors and broken links, implementing schema markup (structured data), addressing duplicate content issues, improving site architecture and internal linking, and ensuring proper canonical tags. Technical SEO forms the foundation of any successful SEO strategy—without it, even great content may not rank well."
  },
  {
    category: "Technical SEO",
    question: "What are Core Web Vitals and do they matter for SEO?",
    answer: "Core Web Vitals are a set of specific factors that Google considers important for user experience: Largest Contentful Paint (LCP) measures loading performance, First Input Delay (FID) measures interactivity, and Cumulative Layout Shift (CLS) measures visual stability. Yes, they absolutely matter for SEO—Google has made Core Web Vitals a ranking factor. Sites that provide better user experiences through fast loading, quick interactivity, and visual stability tend to rank higher. Our technical SEO services include comprehensive Core Web Vitals optimization to ensure your website meets Google's performance standards and provides an excellent user experience."
  },
  // Content & Keywords
  {
    category: "Content & Keywords",
    question: "How do you approach keyword research?",
    answer: "My keyword research process is comprehensive and strategic. I identify keywords based on: search volume and traffic potential, keyword difficulty and competitiveness, search intent (informational, navigational, commercial, transactional), relevance to your business and offerings, and conversion potential. We don't just target high-volume keywords—I build topic clusters that establish topical authority and capture traffic at every stage of the customer journey. My keyword research also includes competitive analysis to identify gaps and opportunities your competitors are missing. The result is a keyword strategy that drives both traffic and conversions."
  },
  {
    category: "Content & Keywords",
    question: "Do you provide content creation services?",
    answer: "Yes, content creation is a core part of My SEO services. I offer SEO copywriting for website pages, blog content development and optimization, content refresh and updating existing content, landing page creation, product descriptions for e-commerce, and thought leadership content. All content is created with both SEO best practices and user engagement in mind—we write for humans first, optimized for search engines second. Our content strategists work closely with you to ensure the content reflects your brand voice and effectively communicates your value proposition."
  },
  // Local SEO
  {
    category: "Local SEO",
    question: "How important is Google Business Profile for local SEO?",
    answer: "Google Business Profile (formerly Google My Business) is absolutely critical for local SEO success. It's often the first thing potential customers see when searching for local businesses—appearing in Google Maps and the local pack results. An optimized Google Business Profile helps you: appear in local map pack results for relevant searches, display important business information (hours, contact, services), showcase customer reviews and ratings, share photos and updates with potential customers, and gain insights into how customers find and interact with your business. Our local SEO services include complete Google Business Profile optimization, review management strategies, and ongoing updates to maximize your local visibility."
  },
  // Link Building
  {
    category: "Link Building",
    question: "What is your approach to link building?",
    answer: "We exclusively use white-hat link building strategies that are safe and sustainable. My approach includes: creating high-quality, linkable content that naturally attracts backlinks, digital PR and outreach to relevant publications, strategic guest posting on authoritative sites in your industry, broken link building and resource page outreach, and analyzing competitor backlink profiles to identify opportunities. We never buy links from link farms or use PBNs (private blog networks) that could get your site penalized. Quality over quantity is our mantra—one authoritative, relevant backlink is worth more than dozens of low-quality links. I focus on building a natural, diverse link profile that strengthens your domain authority."
  },
  // Results & Reporting
  {
    category: "Results & Reporting",
    question: "How do you measure and report SEO success?",
    answer: "I believe in complete transparency and data-driven SEO. Our reporting includes: keyword ranking positions and movements, organic traffic growth and trends, conversion tracking (leads, sales, form submissions), technical health metrics and Core Web Vitals, backlink profile growth and quality, local SEO performance (for local businesses), and competitive analysis and market position. You'll receive regular reports (typically monthly) with clear explanations of what the data means and what actions we're taking. We also provide access to real-time dashboards so you can monitor progress anytime. Our focus is on metrics that matter for your business, not vanity metrics that look good on paper."
  },
  {
    category: "Results & Reporting",
    question: "Can you guarantee first page Google rankings?",
    answer: "No legitimate SEO company can guarantee specific rankings—Google's algorithm considers over 200 factors and is constantly evolving. Any SEO agency that guarantees #1 rankings should be viewed with skepticism. What we can guarantee is our commitment to using proven, white-hat SEO strategies, transparent communication and reporting, continuous optimization based on data and results, and our best efforts to improve your organic visibility. Our track record speaks for itself—we've helped hundreds of clients achieve significant ranking improvements and traffic growth. We set realistic expectations and work diligently to exceed them."
  },
  // Industry-Specific
  {
    category: "Industry SEO",
    question: "Do you specialize in any particular industries?",
    answer: "While I work across many industries, I have deep expertise in several sectors including: e-commerce and retail, healthcare and medical practices, legal (law firm SEO), real estate, home services (HVAC, plumbing, roofing, etc.), SaaS and technology, finance and insurance, and professional services. Industry specialization matters because each sector has unique challenges, competitive landscapes, and customer behaviors. Our industry-specific knowledge allows us to create more effective SEO strategies that align with how your target audience searches for and evaluates businesses like yours."
  }
];

export function ComprehensiveFAQ({ faqs = defaultFAQs, showCategories = true }: ComprehensiveFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category || "General")))];
  const filteredFAQs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => (faq.category || "General") === activeCategory);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Everything You Need to Know About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">SEO</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Get answers to the most common questions about search engine optimization, My SEO services, and what you can expect when working with My SEO agency.
          </p>
        </div>

        {/* Category Filter */}
        {showCategories && categories.length > 2 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-purple-100 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still Have Questions About SEO?
          </h3>
          <p className="text-purple-100 mb-6">
            My SEO experts are ready to answer your questions and discuss How I can help grow your organic traffic.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-purple-600 font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Free Consultation
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveFAQ;
