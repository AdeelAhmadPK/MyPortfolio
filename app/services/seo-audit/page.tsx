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
import { FaSearch, FaClipboardCheck, FaChartBar, FaExclamationTriangle, FaCheckCircle, FaRocket, FaFileAlt, FaCog, FaLink, FaMobileAlt, FaTachometerAlt, FaGlobe, FaStar, FaBullseye, FaTools } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "SEO Audit Services | Comprehensive Website SEO Analysis & Technical Audit Expert",
  description: "Expert SEO audit services to identify technical issues, on-page problems, and optimization opportunities. Get actionable recommendations to improve your search rankings. Free SEO audit available.",
  keywords: "SEO audit, SEO audit services, website audit, SEO analysis, technical SEO audit, on-page audit, SEO health check, site audit, free SEO audit, SEO audit tool, website SEO analysis, comprehensive SEO audit, SEO audit checklist, SEO report, website analysis",
};

const seoFrameworkFaqs = [
  { question: "What is an SEO audit?", answer: "An SEO audit is a comprehensive analysis of your website's search engine optimization. It identifies technical issues, on-page problems, content gaps, and opportunities to improve rankings." },
  { question: "What's included in an SEO audit?", answer: "A comprehensive audit includes technical SEO (speed, mobile, crawlability), on-page SEO (titles, meta, content), off-page SEO (backlinks, authority), content analysis, competitor research, and actionable recommendations." },
  { question: "How long does an SEO audit take?", answer: "Most audits are completed in 5-10 business days depending on site size. Large e-commerce sites may take 2-3 weeks for thorough analysis." },
  { question: "What tools do you use for SEO audits?", answer: "We use Google Search Console, Google Analytics, Ahrefs, SEMrush, Screaming Frog, PageSpeed Insights, Lighthouse, and custom crawlers for comprehensive analysis." },
  { question: "Do you audit all pages or just key pages?", answer: "We audit all pages but prioritize important pages (homepage, service pages, key landing pages). For large sites, we use sampling and focus on high-impact pages." },
  { question: "What issues do SEO audits typically find?", answer: "Common issues include slow page speed, mobile problems, duplicate content, missing meta tags, broken links, crawl errors, poor internal linking, and technical SEO problems." },
  { question: "How much does an SEO audit cost?", answer: "SEO audits range from $1,500-$5,000 depending on site size and complexity. Most audits cost $2,500-$3,500 for comprehensive analysis and recommendations." },
  { question: "Do you provide recommendations with the audit?", answer: "Yes—every audit includes prioritized recommendations with action items, timelines, and expected impact. I provide a clear roadmap for improvements." },
  { question: "Can you audit my competitor's site?", answer: "Yes—I offer competitor audits to identify their SEO strategies, strengths, weaknesses, and opportunities to outperform them in search results." },
  { question: "How often should I get an SEO audit?", answer: "I recommend quarterly audits for most sites, monthly for e-commerce or frequently updated sites, and after major site changes or migrations." },
  { question: "What happens after the audit?", answer: "After the audit, I provide a detailed report, present findings, prioritize recommendations, and can help implement fixes or provide ongoing SEO services." },
  { question: "Do you audit local SEO?", answer: "Yes—we include local SEO analysis covering Google Business Profile, citations, reviews, local content, and local ranking factors." },
  { question: "Can you audit e-commerce sites?", answer: "Absolutely. I specialize in e-commerce audits covering product pages, category optimization, faceted navigation, duplicate content, and shopping feed optimization." },
  { question: "What's the difference between a free and paid audit?", answer: "Free audits provide basic insights. Paid audits are comprehensive, include competitor analysis, provide detailed recommendations, prioritize issues, and include consultation time." }
];

const auditServices = [
  { icon: <FaCog />, title: "Technical SEO Audit", description: "Site speed, mobile-friendliness, crawlability, indexation, and technical issues." },
  { icon: <FaFileAlt />, title: "On-Page SEO Audit", description: "Titles, meta descriptions, headers, content, images, and on-page optimization." },
  { icon: <FaLink />, title: "Off-Page SEO Audit", description: "Backlink profile, domain authority, brand mentions, and external signals." },
  { icon: <FaChartBar />, title: "Content Audit", description: "Content quality, keyword optimization, gaps, and content strategy analysis." },
  { icon: <FaMobileAlt />, title: "Mobile SEO Audit", description: "Mobile usability, mobile speed, responsive design, and mobile-first indexing." },
  { icon: <FaGlobe />, title: "Competitor Analysis", description: "Competitor SEO strategies, strengths, weaknesses, and opportunities." }
];

const faqs = [
  { question: "How much does an SEO audit cost?", answer: "SEO audits range from $1,500-$5,000 depending on site size and complexity. Most comprehensive audits cost $2,500-$3,500 and include detailed analysis and recommendations." },
  { question: "How long does an SEO audit take?", answer: "Most audits are completed in 5-10 business days. Large e-commerce sites or complex audits may take 2-3 weeks for thorough analysis." },
  { question: "What do I get with an SEO audit?", answer: "You receive a comprehensive report covering technical SEO, on-page SEO, off-page SEO, content analysis, competitor research, prioritized recommendations, and action items." },
  { question: "Do you help implement the recommendations?", answer: "Yes—I can help implement fixes, provide ongoing SEO services, or work with your expertise to prioritize and execute recommendations." },
  { question: "Can you audit my competitor's site?", answer: "Yes—I offer competitor audits to analyze their SEO strategies, identify opportunities, and develop strategies to outperform them." },
  { question: "How often should I get an SEO audit?", answer: "I recommend quarterly audits for most sites, monthly for e-commerce sites, and after major site changes, migrations, or algorithm updates." }
];

export default function SEOAuditPage() {
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
                "serviceType": "SEO Audit Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Comprehensive SEO audit services to identify technical issues, on-page problems, and optimization opportunities. Get actionable recommendations to improve your search rankings."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": seoFrameworkFaqs.map(faq => ({
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
        
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/20 border border-amber-400/30 backdrop-blur-xl mb-8">
                  <FaClipboardCheck className="text-3xl text-amber-400" />
                  <span className="font-semibold">SEO Audit Services</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  SEO Audit Services
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8">
                  Comprehensive SEO analysis to identify issues, opportunities, and actionable recommendations to improve your search rankings.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-amber-400 mb-1">500+</div>
                    <div className="text-sm text-slate-300">Audits Completed</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">150+</div>
                    <div className="text-sm text-slate-300">Issues Found Avg</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free SEO Audit"
                  subtitle="Discover how to improve your search rankings"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="SEO Audit" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="seo-audit" industryIcon={<FaClipboardCheck />} />
        <WhyChooseMe industry="SEO Audit" />
        <HireLocalSEO industry="SEO Audit" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive SEO Audit Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Identify issues, discover opportunities, and get actionable recommendations to improve your search rankings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auditServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-amber-500">
                  <div className="text-5xl mb-6 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
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
          industry="SEO Audit"
          stats={[
            { value: "500+", label: "Comprehensive SEO audits completed", icon: <FaClipboardCheck />, color: "from-amber-500 to-yellow-500" },
            { value: "150+", label: "Average issues identified per audit", icon: <FaExclamationTriangle />, color: "from-blue-500 to-cyan-500" },
            { value: "98%", label: "Client satisfaction with audit quality", icon: <FaStar />, color: "from-green-500 to-emerald-500" },
            { value: "5-10 Days", label: "Average audit turnaround time", icon: <FaTachometerAlt />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        <ProcessTimeline 
          industry="SEO Audit"
          steps={[
            { step: 1, title: "Initial Analysis", description: "Gather site data, access Google Search Console, Analytics, and begin technical crawl analysis.", icon: <FaSearch />, duration: "Day 1-2" },
            { step: 2, title: "Technical SEO Analysis", description: "Audit site speed, mobile-friendliness, crawlability, indexation, and technical issues.", icon: <FaCog />, duration: "Day 2-4" },
            { step: 3, title: "On-Page SEO Analysis", description: "Review titles, meta descriptions, headers, content, images, and on-page optimization.", icon: <FaFileAlt />, duration: "Day 3-5" },
            { step: 4, title: "Off-Page & Content Analysis", description: "Analyze backlinks, domain authority, content quality, gaps, and competitor research.", icon: <FaLink />, duration: "Day 4-7" },
            { step: 5, title: "Report Creation", description: "Compile findings, prioritize issues, create recommendations, and develop action plan.", icon: <FaClipboardCheck />, duration: "Day 7-9" },
            { step: 6, title: "Presentation & Consultation", description: "Present findings, discuss recommendations, answer questions, and provide next steps.", icon: <FaRocket />, duration: "Day 10" }
          ]}
        />

        <TopicClusterSection 
          industry="SEO Audit"
          pillars={[
            { title: "Technical Audit", description: "Site infrastructure analysis", topics: ["Site speed", "Mobile optimization", "Crawlability", "Indexation"], icon: <FaCog /> },
            { title: "On-Page Audit", description: "Page-level optimization review", topics: ["Meta tags", "Content", "Headers", "Images"], icon: <FaFileAlt /> },
            { title: "Off-Page Audit", description: "External factors analysis", topics: ["Backlinks", "Domain authority", "Brand mentions", "Reputation"], icon: <FaLink /> },
            { title: "Content Audit", description: "Content strategy evaluation", topics: ["Content quality", "Keyword optimization", "Content gaps", "Competitor content"], icon: <FaChartBar /> }
          ]}
        />

        <LocalSEOSignals 
          industry="SEO Audit"
          signals={[
            { title: "Technical Health", description: "Site speed, mobile, and crawlability scores", importance: "Critical", icon: <FaCog /> },
            { title: "On-Page Optimization", description: "Meta tags, content, and on-page elements", importance: "Critical", icon: <FaFileAlt /> },
            { title: "Content Quality", description: "Content depth, relevance, and optimization", importance: "High", icon: <FaChartBar /> },
            { title: "Backlink Profile", description: "Link quality, quantity, and authority", importance: "High", icon: <FaLink /> },
            { title: "Mobile Experience", description: "Mobile usability and mobile-first indexing", importance: "Critical", icon: <FaMobileAlt /> },
            { title: "Competitor Analysis", description: "Competitor strengths and opportunities", importance: "Medium", icon: <FaGlobe /> }
          ]}
        />

        <CompetitorComparison 
          industry="SEO Audit"
          comparisons={[
            { feature: "Audit Depth", withSEO: "Comprehensive 150+ point analysis", withoutSEO: "Basic or automated audits only" },
            { feature: "Recommendations", withSEO: "Prioritized, actionable recommendations", withoutSEO: "Generic or unclear suggestions" },
            { feature: "Technical Analysis", withSEO: "Deep technical SEO investigation", withoutSEO: "Surface-level technical review" },
            { feature: "Competitor Research", withSEO: "Detailed competitor analysis included", withoutSEO: "No competitor insights" },
            { feature: "Reporting", withSEO: "Detailed reports with visualizations", withoutSEO: "Basic or automated reports" },
            { feature: "Consultation", withSEO: "Presentation and consultation included", withoutSEO: "Report delivery only" }
          ]}
        />

        <CaseStudyHighlight 
          industry="SEO Audit"
          caseStudy={{
            title: "E-commerce Site: 250% Traffic Growth After Audit",
            industry: "SEO Audit & Optimization",
            results: [
              { metric: "Issues Fixed", value: "180+", change: "critical issues resolved" },
              { metric: "Organic Traffic", value: "+250%", change: "in 6 months" },
              { metric: "Page Speed", value: "2.1s", change: "from 8.5s" },
              { metric: "Keyword Rankings", value: "+420", change: "Page 1 rankings" }
            ],
            testimonial: "The SEO audit revealed issues we didn't even know existed. The comprehensive analysis and prioritized recommendations helped us fix critical problems and achieve incredible results.",
            clientName: "E-commerce Director"
          }}
        />

        <TrustSignals 
          industry="SEO Audit"
          customItems={[
            { icon: <FaClipboardCheck />, title: "500+ Audits", description: "Comprehensive audits completed" },
            { icon: <FaTools />, title: "Expert Analysis", description: "Deep technical and strategic expertise" },
            { icon: <FaStar />, title: "98% Satisfaction", description: "Client satisfaction with audit quality" },
            { icon: <FaCheckCircle />, title: "Actionable Insights", description: "Prioritized, implementable recommendations" },
            { icon: <FaTachometerAlt />, title: "Fast Turnaround", description: "5-10 day audit completion" },
            { icon: <FaBullseye />, title: "Proven Results", description: "Audits that drive real improvements" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-amber-50/30 to-yellow-50/20 dark:from-slate-950 dark:via-amber-950/30 dark:to-yellow-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="SEO Audit Questions" />

        <section className="py-24 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Discover your SEO Issues?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get a comprehensive SEO audit and uncover exactly what's holding your site back from top rankings.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-amber-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free SEO Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



