import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroContactForm from "@/components/HeroContactForm";
import SEOFramework from "@/components/industries/SEOFramework";
import FAQSection from "@/components/seo/FAQSection";
import CountriesGrid from "@/components/industries/CountriesGrid";
import WhyChooseMe from "@/components/industries/WhyChooseMe";
import HireLocalSEO from "@/components/industries/HireLocalSEO";
import IndustryStats from "@/components/industries/IndustryStats";
import ProcessTimeline from "@/components/industries/ProcessTimeline";
import TopicClusterSection from "@/components/industries/TopicClusterSection";
import LocalSEOSignals from "@/components/industries/LocalSEOSignals";
import CompetitorComparison from "@/components/industries/CompetitorComparison";
import CaseStudyHighlight from "@/components/industries/CaseStudyHighlight";
import TrustSignals from "@/components/industries/TrustSignals";
import TopSEOServices from '@/components/services/TopSEOServices'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import { FaChartBar, FaSearch, FaEye, FaBullseye, FaLink, FaFileAlt, FaUsers, FaRocket, FaStar, FaTrophy, FaGlobe, FaKey, FaDatabase, FaCheckCircle, FaExclamationTriangle, FaChartLine, FaCertificate, FaAward } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Competitor Analysis SEO Services | Competitive Intelligence & Gap Analysis",
  description: "Expert competitor analysis services to identify SEO opportunities, analyze competitor strategies, and discover gaps to outperform your competition in search rankings.",
  keywords: "competitor analysis, competitive SEO analysis, competitor research, SEO gap analysis, competitive intelligence, competitor keyword research",
};

const seoFrameworkFaqs = [
  { question: "What is competitor analysis in SEO?", answer: "Competitor analysis identifies who ranks for your target keywords, analyzes their SEO strategies, backlink profiles, content approaches, and technical implementations to find opportunities to outperform them." },
  { question: "Why is competitor analysis important for SEO?", answer: "Understanding competitors reveals what's working in your industry, identifies keyword gaps, shows backlink opportunities, and helps you create strategies that outperform the competition." },
  { question: "How do you identify my main SEO competitors?", answer: "We analyze keyword overlap, search result rankings, domain authority, traffic patterns, and market positioning to identify both direct and indirect SEO competitors you may not be aware of." },
  { question: "What do you analyze in competitor research?", answer: "We examine keyword rankings, backlink profiles, content strategies, technical SEO implementations, on-page optimization, site architecture, and conversion tactics to build a complete competitive picture." },
  { question: "How long does a competitor analysis take?", answer: "A comprehensive competitor analysis typically takes 5-10 business days, depending on the number of competitors and depth of analysis required." },
  { question: "What tools do you use for competitor analysis?", answer: "We use Ahrefs, SEMrush, Moz, SpyFu, SimilarWeb, Google Search Console, and custom analysis tools to gather comprehensive competitive intelligence." },
  { question: "Can competitor analysis help with keyword research?", answer: "Absolutely. Competitor analysis reveals high-value keywords your competitors rank for that you don't, helping you identify quick-win opportunities and content gaps." },
  { question: "How do you analyze competitor backlinks?", answer: "We examine backlink quality, quantity, anchor text distribution, referring domains, link velocity, and identify link-building opportunities you can replicate or improve upon." },
  { question: "What is a gap analysis?", answer: "Gap analysis compares your SEO performance to competitors, identifying keywords they rank for that you don't, content they have that you're missing, and technical advantages they possess." },
  { question: "How often should competitor analysis be performed?", answer: "Quarterly analysis for most businesses, monthly for competitive industries. We also recommend analysis after major algorithm updates or when launching new products/services." },
  { question: "Can you help me outrank specific competitors?", answer: "Yes—I create targeted strategies to outrank competitors by identifying their weaknesses, leveraging your strengths, and executing tactics that exploit competitive gaps." },
  { question: "What's included in a competitor analysis report?", answer: "Comprehensive reports include competitor profiles, keyword gap analysis, backlink analysis, content strategy insights, technical SEO comparisons, and prioritized action plans." },
  { question: "How do you identify content opportunities from competitors?", answer: "We analyze competitor content that ranks well, identify topics they cover that you don't, find content gaps, and discover opportunities to create superior content that outranks theirs." },
  { question: "Can competitor analysis help with local SEO?", answer: "Yes—we analyze local competitors' Google Business Profiles, local citations, review strategies, and local content to identify opportunities to dominate local search results." },
  { question: "Do you provide ongoing competitor monitoring?", answer: "Yes—I offer monthly competitor tracking to monitor ranking changes, new content, backlink acquisitions, and strategy shifts so you can adapt quickly to competitive moves." }
];

const competitorServices = [
  { icon: <FaSearch />, title: "Competitor Identification", description: "Identify direct and indirect SEO competitors you may not be aware of." },
  { icon: <FaChartBar />, title: "Keyword Gap Analysis", description: "Discover keywords competitors rank for that you don't—quick-win opportunities." },
  { icon: <FaLink />, title: "Backlink Profile Analysis", description: "Analyze competitor backlinks to identify link-building opportunities and strategies." },
  { icon: <FaFileAlt />, title: "Content Strategy Analysis", description: "Examine competitor content to find gaps and opportunities for superior content." },
  { icon: <FaEye />, title: "Technical SEO Comparison", description: "Compare technical implementations to identify competitive advantages and weaknesses." },
  { icon: <FaBullseye />, title: "Ranking Opportunity Analysis", description: "Identify specific keywords and pages where you can outrank competitors." }
];

const faqs = [
  { question: "How much does competitor analysis cost?", answer: "Competitor analysis services range from $1,500-$5,000 for one-time reports, or $2,000-$6,000/month for ongoing monitoring and analysis, depending on scope and number of competitors." },
  { question: "How many competitors do you analyze?", answer: "We typically analyze 3-10 main competitors depending on your industry and goals. I focus on the most relevant competitors that actually impact your rankings." },
  { question: "Can you analyze competitors in any industry?", answer: "Yes—we've performed competitor analysis across all industries. Each analysis is customized to your specific market, competitors, and business goals." },
  { question: "How do you ensure competitor analysis is actionable?", answer: "We prioritize findings by opportunity size, difficulty, and potential impact. Every recommendation includes specific tactics, timelines, and expected outcomes." },
  { question: "What if I don't know who my competitors are?", answer: "We'll identify your SEO competitors through keyword research, search result analysis, and market research—often revealing competitors you weren't aware of." },
  { question: "How do you measure the success of competitor analysis?", answer: "Success is measured by ranking improvements, keyword gains, traffic growth, and ultimately—outranking competitors for target keywords that drive business results." }
];

export default function CompetitorAnalysisPage() {
  const faqs = [
    { question: "What is competitor analysis in SEO?", answer: "Competitor analysis identifies who ranks for your target keywords, analyzes their SEO strategies, backlink profiles, content approaches, and technical implementations to find opportunities to outperform them." },
    { question: "Why is competitor analysis important for SEO?", answer: "Understanding competitors reveals what's working in your industry, identifies keyword gaps, shows backlink opportunities, and helps you create strategies that outperform the competition." },
    { question: "How do you identify my main SEO competitors?", answer: "We analyze keyword overlap, search result rankings, domain authority, traffic patterns, and market positioning to identify both direct and indirect SEO competitors you may not be aware of." },
    { question: "What do you analyze in competitor research?", answer: "We examine keyword rankings, backlink profiles, content strategies, technical SEO implementations, on-page optimization, site architecture, and conversion tactics to build a complete competitive picture." }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://adeelahmad.com/services/competitor-analysis#service",
                "serviceType": "Competitor Analysis SEO Services",
                "name": "Competitor Analysis SEO Services",
                "description": "Expert competitor analysis services to identify SEO opportunities, analyze competitor strategies, and discover gaps to outperform your competition in search rankings.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Competitive Intelligence Specialist"
                },
                "areaServed": "Global",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceRange": "$$-$$$"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/services/competitor-analysis#webpage",
                "url": "https://adeelahmad.com/services/competitor-analysis",
                "name": "Competitor Analysis SEO Services | Competitive Intelligence & Gap Analysis",
                "description": "Expert competitor analysis services to identify SEO opportunities, analyze competitor strategies, and discover gaps to outperform your competition in search rankings.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://adeelahmad.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://adeelahmad.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Competitor Analysis",
                    "item": "https://adeelahmad.com/services/competitor-analysis"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ])
          }}
        />
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-violet-500/20 border border-violet-400/30 backdrop-blur-xl mb-8">
                  <FaChartBar className="text-3xl text-violet-400" />
                  <span className="font-semibold">Competitor Analysis Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Competitor Analysis SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Uncover competitor strategies, identify SEO opportunities, and discover gaps to outperform your competition in search rankings.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all">
                    Get Free Competitor Analysis
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-violet-400 mb-1">500+</div>
                    <div className="text-sm text-slate-300">Competitors Analyzed</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-purple-400 mb-1">2,400+</div>
                    <div className="text-sm text-slate-300">Keyword Gaps Found</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-pink-400 mb-1">85%</div>
                    <div className="text-sm text-slate-300">Outrank Success Rate</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">5-10 Days</div>
                    <div className="text-sm text-slate-300">Analysis Turnaround</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form - 2 columns */}
              <div className="lg:col-span-2">
                <HeroContactForm 
                  title="Get Your Free SEO Audit"
                  subtitle="Discover what's holding your website back from page 1 rankings"
                  buttonText="Get Free Consultation"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Competitor Analysis" faqs={seoFrameworkFaqs} />
        
        <TopSEOServices />
        
        <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Competitor Analysis Services</h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive competitive intelligence to identify opportunities and build strategies that outperform your competition
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitorServices.map((service, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CountriesGrid industrySlug="competitor-analysis" industryIcon={<FaChartBar />} />
        <WhyChooseMe industry="Competitor Analysis" />
        <HireLocalSEO industry="Competitor Analysis SEO" />

        <IndustryStats 
          industry="Competitor Analysis"
          stats={[
            { icon: <FaChartBar />, label: "Competitors Analyzed", value: "500+", color: "from-blue-500 to-cyan-500" },
            { icon: <FaKey />, label: "Keyword Gaps Identified", value: "2,400+", color: "from-green-500 to-emerald-500" },
            { icon: <FaTrophy />, label: "Outrank Success Rate", value: "85%", color: "from-purple-500 to-pink-500" },
            { icon: <FaStar />, label: "Client Satisfaction", value: "98%", color: "from-orange-500 to-red-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Competitor Analysis"
          steps={[
            { step: 1, title: "Competitor Identification", description: "Identify direct and indirect SEO competitors through keyword overlap, search rankings, and market analysis.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Keyword Gap Analysis", description: "Analyze competitor keyword rankings to discover opportunities you're missing and quick-win keywords.", icon: <FaKey />, duration: "Week 1-2" },
            { step: 3, title: "Backlink Profile Analysis", description: "Examine competitor backlinks to identify link-building opportunities, strategies, and high-value targets.", icon: <FaLink />, duration: "Week 2" },
            { step: 4, title: "Content Strategy Review", description: "Analyze competitor content to find gaps, identify top-performing content, and discover content opportunities.", icon: <FaFileAlt />, duration: "Week 2-3" },
            { step: 5, title: "Technical SEO Comparison", description: "Compare technical implementations, site architecture, and identify competitive advantages or weaknesses.", icon: <FaDatabase />, duration: "Week 3" },
            { step: 6, title: "Actionable Strategy Development", description: "Create prioritized action plans with specific tactics to outrank competitors and capture opportunities.", icon: <FaBullseye />, duration: "Week 3-4" }
          ]}
        />

        <TopicClusterSection 
          industry="Competitor Analysis"
          pillars={[
            { title: "Competitor Identification", description: "Discover who your real SEO competitors are and understand their market positioning", icon: <FaSearch />, topics: ["Keyword overlap analysis", "Search result analysis", "Market positioning", "Traffic source analysis", "Domain authority comparison", "Industry mapping"] },
            { title: "Keyword Gap Analysis", description: "Find keywords competitors rank for that you don't—identify quick-win opportunities", icon: <FaKey />, topics: ["Keyword gap identification", "Ranking opportunity analysis", "Search volume analysis", "Competition difficulty", "Intent analysis", "Content gap mapping"] },
            { title: "Backlink Intelligence", description: "Analyze competitor backlinks to identify link-building opportunities and strategies", icon: <FaLink />, topics: ["Backlink profile analysis", "Link quality assessment", "Anchor text analysis", "Link-building opportunities", "Referring domain analysis", "Link velocity tracking"] },
            { title: "Content & Strategy Insights", description: "Examine competitor content strategies to find gaps and opportunities for superior content", icon: <FaFileAlt />, topics: ["Content gap analysis", "Top-performing content identification", "Content strategy review", "Topic cluster analysis", "Content format analysis", "Engagement metrics"] }
          ]}
        />

        <LocalSEOSignals 
          industry="Competitor Analysis"
          signals={[
            { icon: <FaChartBar />, title: "Keyword Rankings", description: "Comprehensive ranking analysis across all target keywords", importance: "Critical" },
            { icon: <FaLink />, title: "Backlink Profiles", description: "Deep analysis of competitor link-building strategies", importance: "Critical" },
            { icon: <FaFileAlt />, title: "Content Strategy", description: "Content gap analysis and opportunity identification", importance: "High" },
            { icon: <FaDatabase />, title: "Technical SEO", description: "Technical implementation comparison and analysis", importance: "High" },
            { icon: <FaUsers />, title: "Traffic Analysis", description: "Traffic source and user behavior analysis", importance: "Medium" },
            { icon: <FaGlobe />, title: "Market Positioning", description: "Understanding competitive landscape and positioning", importance: "Medium" }
          ]}
        />

        <CompetitorComparison 
          industry="Competitor Analysis"
          comparisons={[
            { feature: "Comprehensive Analysis", withSEO: "Full deep-dive analysis", withoutSEO: "Basic overview" },
            { feature: "Actionable Recommendations", withSEO: "Priority-based action plans", withoutSEO: "Generic suggestions" },
            { feature: "Ongoing Monitoring", withSEO: "Continuous tracking", withoutSEO: "One-time report" },
            { feature: "Custom Strategy Development", withSEO: "Tailored to your business", withoutSEO: "Template-based approach" },
            { feature: "Multi-Competitor Analysis", withSEO: "Analyze 5+ competitors", withoutSEO: "Limited competitor data" },
            { feature: "Priority-Based Action Plans", withSEO: "Clear roadmap with priorities", withoutSEO: "No prioritization" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Competitor Analysis"
          caseStudy={{
            title: "SaaS Company: Outranked 3 Competitors in 6 Months",
            industry: "Competitor Analysis",
            results: [
              { metric: "Keywords Outranking Competitors", value: "320+", change: "outranking competitors" },
              { metric: "Organic Traffic Growth", value: "+280%", change: "increase" },
              { metric: "Keyword Rankings", value: "1,150", change: "page 1 rankings" },
              { metric: "Market Share Growth", value: "+45%", change: "growth" }
            ],
            testimonial: "The competitor analysis revealed opportunities we never knew existed. By systematically outranking competitors for their best keywords, we've captured significant market share and transformed our organic growth trajectory.",
            clientName: "Michael Rodriguez, Marketing Director"
          }}
        />

        <TrustSignals 
          industry="Competitor Analysis"
          customItems={[
            { icon: <FaStar />, title: "98% Client Satisfaction", description: "Consistently delivering actionable insights" },
            { icon: <FaChartBar />, title: "500+ Competitors Analyzed", description: "Proven expertise across all industries" },
            { icon: <FaCertificate />, title: "Certified Analysts", description: "Expert-level competitive intelligence skills" },
            { icon: <FaAward />, title: "Industry Recognition", description: "Award-winning competitor analysis methodology" },
            { icon: <FaUsers />, title: "Dedicated Team", description: "Specialists in competitive SEO intelligence" },
            { icon: <FaTrophy />, title: "85% Outrank Success", description: "Proven track record of helping clients outrank competitors" }
          ]}
        />

        <TestimonialsSlider />

        <FAQSection faqs={faqs} />

        <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Outrank Your Competitors?</h2>
            <p className="text-xl mb-8 text-violet-100">
              Get a free competitor analysis and discover opportunities to dominate your market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-xl font-bold hover:bg-violet-50 transition-all">
                Get Free Competitor Analysis
                <FaRocket />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

        <IndustriesGrid />
      </main>
      <Footer />
    </>
  );
}

