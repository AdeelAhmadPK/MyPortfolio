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
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import TopSEOServices from '@/components/services/TopSEOServices'
import { FaCog, FaBolt, FaServer, FaSitemap, FaCode, FaMobileAlt, FaShieldAlt, FaSearch, FaChartLine, FaRocket, FaTachometerAlt, FaDatabase, FaRobot, FaCheckCircle, FaTools, FaGlobe, FaLink, FaFileCode } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Technical SEO Services | Speed, Core Web Vitals & Audits",
  description: "Expert technical SEO to fix site speed, crawl errors, and Core Web Vitals. Professional audits, schema markup, and mobile optimization for better rankings.",
  keywords: "technical SEO, technical SEO services, site speed optimization, Core Web Vitals, crawlability, schema markup, XML sitemap, robots.txt, canonical tags, technical SEO audit, mobile SEO, page speed optimization, JavaScript SEO, technical SEO agency, technical SEO expert",
};

const seoFrameworkFaqs = [
  { question: "What is technical SEO and why is it important?", answer: "Technical SEO focuses on website infrastructure—speed, crawlability, mobile-friendliness, and structured data. It's the foundation that allows search engines to effectively crawl, index, and rank your content." },
  { question: "How do Core Web Vitals impact rankings?", answer: "Core Web Vitals (LCP, FID, CLS) are Google ranking factors measuring loading performance, interactivity, and visual stability. Poor scores can hurt rankings and user experience, reducing conversions." },
  { question: "What technical issues hurt SEO the most?", answer: "Slow page speed, crawl errors, duplicate content, broken links, poor mobile experience, missing schema markup, and incorrect redirects are the most damaging technical issues." },
  { question: "How long does technical SEO take to show results?", answer: "Initial improvements can appear in 2-4 weeks as Google recrawls your site. Significant ranking improvements typically take 2-3 months as search engines recognize sustained improvements." },
  { question: "Do you fix site speed issues?", answer: "Yes—I optimize images, implement lazy loading, minify code, leverage browser caching, use CDNs, and eliminate render-blocking resources to dramatically improve load times." },
  { question: "What is schema markup and why does it matter?", answer: "Schema markup is structured data that helps search engines understand your content, enabling rich snippets like star ratings, FAQs, and product info in search results—improving click-through rates." },
  { question: "Can technical SEO help my site get indexed faster?", answer: "Absolutely. I optimize crawl budget, fix sitemap errors, resolve canonical issues, and ensure proper URL structure so Google can discover and index your pages efficiently." },
  { question: "What's the difference between technical SEO and on-page SEO?", answer: "Technical SEO focuses on website infrastructure (speed, crawling, indexing), while on-page SEO optimizes content and HTML elements (titles, headings, keywords) on individual pages." },
  { question: "How do you handle duplicate content issues?", answer: "I implement canonical tags, configure URL parameters correctly, use 301 redirects, create proper URL structures, and set up hreflang for international sites to consolidate ranking signals." },
  { question: "Will technical SEO help my mobile rankings?", answer: "Yes—mobile-first indexing means Google primarily uses your mobile site for ranking. We ensure responsive design, fast mobile load times, and touch-friendly interfaces." },
  { question: "What tools do you use for technical SEO audits?", answer: "We use Google Search Console, Screaming Frog, Ahrefs, SEMrush, PageSpeed Insights, Lighthouse, GTmetrix, and custom crawlers to identify and fix technical issues." },
  { question: "How often should technical SEO audits be performed?", answer: "Quarterly audits for most sites, monthly for e-commerce or frequently updated sites. We also recommend audits after major site changes, migrations, or algorithm updates." },
  { question: "Can you help with site migrations?", answer: "Yes—we manage technical aspects of site migrations including redirect mapping, maintaining URL structure, preserving SEO equity, and monitoring post-migration performance." },
  { question: "What is crawl budget optimization?", answer: "Crawl budget is how many pages Google crawls on your site. I optimize by eliminating low-value pages, fixing broken links, improving site architecture, and managing duplicate content." },
  { question: "Do you provide ongoing technical SEO maintenance?", answer: "Yes—I offer monthly monitoring of Core Web Vitals, crawl errors, indexation status, site speed, and security to ensure your technical foundation remains strong." }
];

const technicalServices = [
  { icon: <FaBolt />, title: "Core Web Vitals Optimization", description: "Achieve perfect LCP, FID, and CLS scores for better rankings and user experience." },
  { icon: <FaTachometerAlt />, title: "Page Speed Optimization", description: "Reduce load times to under 2 seconds with image optimization, caching, and CDN setup." },
  { icon: <FaRobot />, title: "Crawlability & Indexation", description: "Fix robots.txt, XML sitemaps, and crawl errors to ensure Google finds all your pages." },
  { icon: <FaCode />, title: "Schema Markup Implementation", description: "Add structured data for rich snippets, FAQs, reviews, products, and local business info." },
  { icon: <FaMobileAlt />, title: "Mobile-First Optimization", description: "Responsive design, mobile speed, and touch-friendly interfaces for mobile-first indexing." },
  { icon: <FaShieldAlt />, title: "HTTPS & Security", description: "SSL certificate setup, mixed content fixes, and security headers for trust and rankings." }
];

const faqs = [
  { question: "How much does technical SEO cost?", answer: "Technical SEO audits start at $1,500-$3,000. Ongoing optimization ranges from $2,000-$8,000/month depending on site size and complexity." },
  { question: "Can technical SEO fix my site's indexing issues?", answer: "Yes—we diagnose why pages aren't being indexed and fix issues like noindex tags, robots.txt blocks, canonical errors, and crawl budget problems." },
  { question: "Will fixing technical issues improve my rankings immediately?", answer: "Some improvements appear within weeks, but full impact takes 2-3 months as Google recrawls, reindexes, and reassesses your site's authority and relevance." },
  { question: "Do you work with all CMS platforms?", answer: "Yes—I specialize in WordPress, Shopify, Magento, custom-built sites, and all major platforms. Each has unique technical considerations we address." },
  { question: "What's included in a technical SEO audit?", answer: "Comprehensive analysis of site speed, Core Web Vitals, crawl errors, indexation, mobile usability, schema markup, site architecture, security, and actionable recommendations." },
  { question: "How do you measure technical SEO success?", answer: "We track Core Web Vitals scores, page load time, crawl errors, indexed pages, mobile usability scores, and most importantly—organic traffic and ranking improvements." }
];

export default function TechnicalSEOPage() {
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
                "serviceType": "Technical SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert technical SEO to fix site speed, crawl errors, and Core Web Vitals. Professional audits, schema markup, and mobile optimization for better rankings."
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
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-xl mb-8">
                  <FaCog className="text-3xl text-blue-400" />
                  <span className="font-semibold">Technical SEO Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Technical SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Fix site speed, improve crawlability, optimize Core Web Vitals, and build the technical foundation for sustainable SEO success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    Get Free Technical Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">95+</div>
                    <div className="text-sm text-slate-300">PageSpeed Score</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">98%</div>
                    <div className="text-sm text-slate-300">Crawlability Rate</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-green-400 mb-2">&lt;2s</div>
                    <div className="text-sm text-slate-300">Load Time</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-purple-400 mb-2">180%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
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

        <SEOFramework industry="Technical SEO" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="technical-seo" industryIcon={<FaCog />} />
        <WhyChooseMe industry="Technical SEO" />
        <HireLocalSEO industry="Technical SEO" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Technical SEO Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                From Core Web Vitals to schema markup—I optimize every technical aspect of your website for maximum search visibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500">
                  <div className="text-5xl mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
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
          industry="Technical SEO"
          stats={[
            { value: "240%", label: "Average organic traffic increase after technical optimization", icon: <FaChartLine />, color: "from-blue-500 to-cyan-500" },
            { value: "67%", label: "Improvement in Core Web Vitals scores", icon: <FaTachometerAlt />, color: "from-green-500 to-emerald-500" },
            { value: "3.8x", label: "Faster page load times on average", icon: <FaBolt />, color: "from-purple-500 to-pink-500" },
            { value: "91%", label: "Increase in crawlable and indexed pages", icon: <FaRobot />, color: "from-orange-500 to-red-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Technical SEO"
          steps={[
            { step: 1, title: "Comprehensive Technical Audit", description: "Deep analysis of site speed, crawlability, indexation, Core Web Vitals, mobile usability, and technical errors.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Priority Issue Identification", description: "Categorize issues by impact and create action plan for quick wins and long-term improvements.", icon: <FaCheckCircle />, duration: "Week 1-2" },
            { step: 3, title: "Speed & Performance Optimization", description: "Optimize images, implement caching, minify code, setup CDN, and eliminate render-blocking resources.", icon: <FaBolt />, duration: "Week 2-4" },
            { step: 4, title: "Crawl & Index Optimization", description: "Fix robots.txt, XML sitemaps, canonical tags, redirect chains, and resolve duplicate content issues.", icon: <FaRobot />, duration: "Week 3-5" },
            { step: 5, title: "Schema & Rich Snippets", description: "Implement structured data for enhanced search results and better click-through rates.", icon: <FaCode />, duration: "Week 4-6" },
            { step: 6, title: "Monitor & Maintain", description: "Continuous monitoring of Core Web Vitals, crawl errors, indexation, and technical health.", icon: <FaTools />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Technical SEO"
          pillars={[
            { title: "Site Speed Optimization", description: "Performance and loading improvements", topics: ["Image optimization", "Code minification", "Lazy loading", "CDN implementation"], icon: <FaBolt /> },
            { title: "Core Web Vitals", description: "User experience metrics optimization", topics: ["Largest Contentful Paint", "First Input Delay", "Cumulative Layout Shift", "Performance monitoring"], icon: <FaTachometerAlt /> },
            { title: "Crawlability & Indexation", description: "Search engine access optimization", topics: ["XML sitemaps", "Robots.txt", "Crawl budget", "URL structure"], icon: <FaRobot /> },
            { title: "Structured Data", description: "Schema markup implementation", topics: ["Organization schema", "Product schema", "FAQ schema", "Local Business schema"], icon: <FaCode /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Technical SEO"
          signals={[
            { title: "Core Web Vitals Scores", description: "Optimal LCP (<2.5s), FID (<100ms), and CLS (<0.1) for all pages", importance: "Critical", icon: <FaTachometerAlt /> },
            { title: "Mobile-First Indexing", description: "Responsive design, mobile speed, and mobile-friendly content", importance: "Critical", icon: <FaMobileAlt /> },
            { title: "HTTPS Security", description: "SSL certificate, mixed content fixes, and secure connections", importance: "High", icon: <FaShieldAlt /> },
            { title: "Structured Data", description: "Valid schema markup for enhanced search results", importance: "High", icon: <FaCode /> },
            { title: "XML Sitemap", description: "Comprehensive, error-free sitemap submitted to search engines", importance: "High", icon: <FaSitemap /> },
            { title: "Canonical Tags", description: "Proper canonicalization to avoid duplicate content issues", importance: "Medium", icon: <FaLink /> }
          ]}
        />

        <CompetitorComparison 
          industry="Technical SEO"
          comparisons={[
            { feature: "Site Speed", withSEO: "Sub-2 second load times", withoutSEO: "Slow, abandoned visits" },
            { feature: "Mobile Experience", withSEO: "Perfect mobile usability scores", withoutSEO: "Poor mobile rankings" },
            { feature: "Crawl Efficiency", withSEO: "All pages crawled and indexed", withoutSEO: "Many pages hidden from Google" },
            { feature: "Rich Snippets", withSEO: "Enhanced search results visibility", withoutSEO: "Plain text listings" },
            { feature: "Core Web Vitals", withSEO: "Pass all Google benchmarks", withoutSEO: "Fail user experience tests" },
            { feature: "Technical Errors", withSEO: "Proactive monitoring and fixes", withoutSEO: "Broken links, 404s, redirects" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Technical SEO"
          caseStudy={{
            title: "E-commerce Site: 312% Traffic Growth",
            industry: "Technical SEO Optimization",
            results: [
              { metric: "Organic Traffic", value: "+312%", change: "in 6 months" },
              { metric: "Page Speed", value: "1.8s", change: "from 8.2s" },
              { metric: "Core Web Vitals", value: "95/100", change: "from 42/100" },
              { metric: "Indexed Pages", value: "+847%", change: "crawlability fixed" }
            ],
            testimonial: "After the technical optimization, our site went from barely ranking to page 1 for hundreds of keywords. The speed improvements also increased our conversion rate by 34%.",
            clientName: "E-commerce Director"
          }}
        />

        <TrustSignals 
          industry="Technical SEO"
          customItems={[
            { icon: <FaCog />, title: "Technical Expertise", description: "15+ years optimizing site infrastructure" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 240% traffic increase post-optimization" },
            { icon: <FaBolt />, title: "Speed Specialists", description: "Consistent sub-2 second load times" },
            { icon: <FaRobot />, title: "Crawl Optimization", description: "98%+ crawlability rates achieved" },
            { icon: <FaShieldAlt />, title: "Security First", description: "HTTPS, headers, and best practices" },
            { icon: <FaTools />, title: "Ongoing Monitoring", description: "24/7 technical health tracking" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-cyan-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Technical SEO Questions" />

        <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Fix Your Technical SEO Issues?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a comprehensive technical SEO audit and discover exactly what's holding your site back from top rankings.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Technical Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
