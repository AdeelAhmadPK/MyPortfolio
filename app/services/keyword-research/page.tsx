import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";  import HeroContactForm from "@/components/HeroContactForm";
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
import { FaSearch, FaKey, FaChartLine, FaBullseye, FaTags, FaList, FaRocket, FaCheckCircle, FaUsers, FaStar, FaLightbulb, FaGlobe, FaFileAlt, FaDatabase } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Keyword Research Services | Search Intent Analysis & SEO Keyword Strategy Expert",
  description: "Expert keyword research services to identify high-value keywords, analyze search intent, and create strategic keyword maps for maximum SEO impact. Professional keyword analysis and competitor keyword research.",
  keywords: "keyword research, keyword research services, keyword analysis, search intent, keyword mapping, long-tail keywords, keyword strategy, SEO keywords, keyword research tool, keyword planner, organic keyword research, competitor keyword analysis, keyword ranking, SEO keyword research, keyword difficulty",
};

const seoFrameworkFaqs = [
  { question: "What is keyword research?", answer: "Keyword research is identifying and analyzing search terms that people use to find products, services, or information. It's the foundation of SEO strategy, helping you target the right keywords to drive qualified traffic." },
  { question: "Why is keyword research important?", answer: "Keyword research helps you understand what your audience searches for, identify opportunities, prioritize content, and target keywords that drive traffic and conversions. Without it, you're optimizing blindly." },
  { question: "What tools do you use for keyword research?", answer: "We use Ahrefs, SEMrush, Google Keyword Planner, Answer The Public, Google Trends, and manual research to identify keywords, analyze competition, and understand search intent." },
  { question: "What's the difference between short-tail and long-tail keywords?", answer: "Short-tail keywords (1-2 words) are broad and competitive. Long-tail keywords (3+ words) are specific, less competitive, and often have higher conversion rates. We use both strategically." },
  { question: "What is search intent and why does it matter?", answer: "Search intent is what users want when searching. Google categorizes intent as informational, navigational, transactional, or commercial. Matching content to search intent is crucial for rankings." },
  { question: "How many keywords should I target per page?", answer: "Focus on one primary keyword and 2-5 related keywords per page. Avoid keyword stuffing—create comprehensive content that naturally covers related terms and topics." },
  { question: "What is keyword difficulty?", answer: "Keyword difficulty (KD) measures how hard it is to rank for a keyword based on competition. I help you find keywords with the right balance of search volume and achievable difficulty." },
  { question: "How do you find keyword opportunities?", answer: "We analyze competitor keywords, use keyword tools, study search suggestions, analyze question-based queries, review Google Trends, and identify content gaps in your industry." },
  { question: "What is keyword mapping?", answer: "Keyword mapping assigns target keywords to specific pages on your site. It ensures each page targets unique keywords, avoids cannibalization, and creates a logical site structure." },
  { question: "Should I target high-volume or low-competition keywords?", answer: "Both—I create a balanced strategy targeting high-volume keywords for brand awareness and low-competition keywords for quick wins and long-tail conversions." },
  { question: "How often should keyword research be updated?", answer: "Review keyword strategy quarterly. Search trends change, new keywords emerge, and your business goals evolve. Regular updates keep your SEO strategy aligned with opportunities." },
  { question: "Can keyword research help with content strategy?", answer: "Absolutely. Keyword research identifies content opportunities, reveals what questions users ask, shows content gaps, and guides your editorial calendar for maximum SEO impact." },
  { question: "What is semantic SEO and how does it relate to keywords?", answer: "Semantic SEO optimizes for topics and related concepts, not just exact keywords. I identify related terms, synonyms, and topic clusters to create comprehensive content." },
  { question: "How do you measure keyword research success?", answer: "We track keyword rankings, organic traffic from target keywords, conversion rates, search visibility, and ROI from keyword-targeted content to measure research effectiveness." }
];

const keywordServices = [
  { icon: <FaKey />, title: "Keyword Discovery", description: "Identify high-value keywords your audience searches for." },
  { icon: <FaChartLine />, title: "Search Intent Analysis", description: "Analyze search intent to match content with user needs." },
  { icon: <FaBullseye />, title: "Keyword Mapping", description: "Map keywords to pages for strategic site optimization." },
  { icon: <FaTags />, title: "Competitor Keyword Analysis", description: "Identify competitor keywords and find opportunities." },
  { icon: <FaList />, title: "Long-Tail Keyword Research", description: "Find specific, high-converting long-tail keywords." },
  { icon: <FaDatabase />, title: "Keyword Tracking & Reporting", description: "Monitor keyword performance and rankings over time." }
];

const faqs = [
  { question: "How much does keyword research cost?", answer: "Keyword research services range from $1,000-$3,500 depending on scope—initial research, ongoing tracking, competitor analysis, and keyword mapping. Most projects cost $1,500-$2,500." },
  { question: "How long does keyword research take?", answer: "Initial keyword research typically takes 1-2 weeks. Ongoing keyword tracking and updates continue monthly or quarterly as part of SEO services." },
  { question: "How many keywords will you find?", answer: "We typically identify 200-500+ relevant keywords depending on your industry and business. We prioritize quality and relevance over quantity." },
  { question: "Do you provide keyword difficulty scores?", answer: "Yes—we analyze keyword difficulty, search volume, competition, and search intent to help you prioritize which keywords to target first." },
  { question: "Can you help with local keyword research?", answer: "Absolutely. I identify local keywords, 'near me' searches, location-based terms, and geo-targeted keywords for local SEO campaigns." },
  { question: "How do you ensure keywords match my business goals?", answer: "We start by understanding your business, target audience, and goals. We then research keywords that align with your services, products, and conversion objectives." }
];

export default function KeywordResearchPage() {
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
                "@id": "https://adeelahmad.com/services/keyword-research#service",
                "serviceType": "Keyword Research Services",
                "name": "Keyword Research Services",
                "description": "Expert keyword research services to identify high-value keywords, analyze search intent, and create strategic keyword maps for maximum SEO impact and organic traffic.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Keyword Research Specialist"
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
                "@id": "https://adeelahmad.com/services/keyword-research#webpage",
                "url": "https://adeelahmad.com/services/keyword-research",
                "name": "Keyword Research Services | Search Intent Analysis & SEO Keyword Strategy",
                "description": "Expert keyword research services to identify high-value keywords and analyze search intent.",
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
                    "name": "Keyword Research",
                    "item": "https://adeelahmad.com/services/keyword-research"
                  }
                ]
              }
            ])
          }}
        />
        
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sky-500/20 border border-sky-400/30 backdrop-blur-xl mb-8">
                  <FaKey className="text-3xl text-sky-400" />
                  <span className="font-semibold">Keyword Research Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Keyword Research Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Identify high-value keywords, analyze search intent, and create strategic keyword maps to drive qualified organic traffic and conversions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-sky-500/50 transition-all">
                    Get Free Keyword Analysis
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-sky-400 mb-2">500+</div>
                    <div className="text-sm text-slate-300">Keywords Found</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">85%</div>
                    <div className="text-sm text-slate-300">Ranking Success</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">320%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-indigo-400 mb-2">95%</div>
                    <div className="text-sm text-slate-300">Client Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Right Content - 2 columns with HeroContactForm */}
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

        <SEOFramework industry="Keyword Research" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="keyword-research" industryIcon={<FaKey />} />
        <WhyChooseMe industry="Keyword Research" />
        <HireLocalSEO industry="Keyword Research" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Keyword Research Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                From discovery to mapping to tracking—we handle every aspect of keyword research to drive your SEO strategy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keywordServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-sky-500">
                  <div className="text-5xl mb-6 text-sky-600 dark:text-sky-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryStats 
          industry="Keyword Research"
          stats={[
            { value: "500+", label: "Keywords identified per research project", icon: <FaKey />, color: "from-sky-500 to-blue-500" },
            { value: "85%", label: "Keywords ranking on page 1 after optimization", icon: <FaBullseye />, color: "from-blue-500 to-cyan-500" },
            { value: "320%", label: "Average organic traffic increase from keyword targeting", icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
            { value: "95%", label: "Client satisfaction with keyword research quality", icon: <FaStar />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Keyword Research"
          steps={[
            { step: 1, title: "Business & Audience Analysis", description: "Understand your business, target audience, goals, and current keyword performance.", icon: <FaUsers />, duration: "Day 1-2" },
            { step: 2, title: "Keyword Discovery", description: "Use tools and research to identify relevant keywords, related terms, and search variations.", icon: <FaSearch />, duration: "Day 2-5" },
            { step: 3, title: "Keyword Analysis", description: "Analyze search volume, competition, difficulty, search intent, and keyword value.", icon: <FaChartLine />, duration: "Day 4-7" },
            { step: 4, title: "Competitor Keyword Research", description: "Identify competitor keywords, find gaps, and discover opportunities they're missing.", icon: <FaGlobe />, duration: "Day 6-9" },
            { step: 5, title: "Keyword Mapping", description: "Map keywords to pages, prioritize targets, and create strategic keyword plan.", icon: <FaBullseye />, duration: "Day 8-10" },
            { step: 6, title: "Tracking & Optimization", description: "Monitor keyword rankings, track performance, and refine strategy based on data.", icon: <FaDatabase />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Keyword Research"
          pillars={[
            { title: "Keyword Discovery", description: "Finding relevant keywords", topics: ["Tool research", "Competitor analysis", "Search suggestions", "Question keywords"], icon: <FaSearch /> },
            { title: "Keyword Analysis", description: "Evaluating keyword value", topics: ["Search volume", "Competition", "Difficulty", "Search intent"], icon: <FaChartLine /> },
            { title: "Keyword Mapping", description: "Strategic keyword assignment", topics: ["Page mapping", "Priority ranking", "Content planning", "Site structure"], icon: <FaBullseye /> },
            { title: "Keyword Tracking", description: "Performance monitoring", topics: ["Ranking tracking", "Traffic analysis", "Conversion tracking", "Strategy refinement"], icon: <FaDatabase /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Keyword Research"
          signals={[
            { title: "Search Volume", description: "Keywords with sufficient search volume to drive traffic", importance: "Critical", icon: <FaChartLine /> },
            { title: "Keyword Difficulty", description: "Achievable difficulty scores for your domain authority", importance: "Critical", icon: <FaBullseye /> },
            { title: "Search Intent", description: "Keywords matching user intent and business goals", importance: "Critical", icon: <FaBullseye /> },
            { title: "Competition Analysis", description: "Understanding competitor keyword strategies", importance: "High", icon: <FaGlobe /> },
            { title: "Long-Tail Keywords", description: "Specific, high-converting long-tail opportunities", importance: "High", icon: <FaList /> },
            { title: "Keyword Trends", description: "Growing keywords and emerging search trends", importance: "Medium", icon: <FaTags /> }
          ]}
        />

        <CompetitorComparison 
          industry="Keyword Research"
          comparisons={[
            { feature: "Keyword Discovery", withSEO: "500+ relevant keywords identified", withoutSEO: "Guessing or using generic keywords" },
            { feature: "Search Intent", withSEO: "Keywords matched to user intent", withoutSEO: "Targeting wrong keywords" },
            { feature: "Keyword Mapping", withSEO: "Strategic keyword-to-page mapping", withoutSEO: "No keyword strategy or cannibalization" },
            { feature: "Competitor Analysis", withSEO: "Competitor keywords and gaps identified", withoutSEO: "No competitive intelligence" },
            { feature: "Long-Tail Research", withSEO: "High-converting long-tail keywords found", withoutSEO: "Missing long-tail opportunities" },
            { feature: "Keyword Tracking", withSEO: "Ongoing monitoring and optimization", withoutSEO: "No keyword performance tracking" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Keyword Research"
          caseStudy={{
            title: "B2B SaaS: 320% Traffic Growth from Keyword Strategy",
            industry: "Keyword Research Campaign",
            results: [
              { metric: "Keywords Identified", value: "580+", change: "relevant keywords" },
              { metric: "Organic Traffic", value: "+320%", change: "in 8 months" },
              { metric: "Page 1 Rankings", value: "85%", change: "of target keywords" },
              { metric: "Lead Generation", value: "+240%", change: "from keyword targeting" }
            ],
            testimonial: "The keyword research transformed our content strategy. We went from targeting generic terms to focusing on high-value, conversion-focused keywords. The results have been incredible.",
            clientName: "Content Marketing Director"
          }}
        />

        <TrustSignals 
          industry="Keyword Research"
          customItems={[
            { icon: <FaKey />, title: "500+ Keywords", description: "Comprehensive keyword research per project" },
            { icon: <FaBullseye />, title: "85% Success Rate", description: "Keywords ranking on page 1" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 320% traffic increase" },
            { icon: <FaStar />, title: "95% Satisfaction", description: "Client satisfaction with research quality" },
            { icon: <FaSearch />, title: "Expert Tools", description: "Using industry-leading research tools" },
            { icon: <FaBullseye />, title: "Strategic Approach", description: "Data-driven keyword strategy" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-sky-50/30 to-blue-50/20 dark:from-slate-950 dark:via-sky-950/30 dark:to-blue-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Keyword Research Questions" />

        <section className="py-24 bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your High-Value Keywords?
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              Get a free keyword analysis and discover which keywords can drive qualified traffic and conversions to your business.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-sky-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Keyword Analysis
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



