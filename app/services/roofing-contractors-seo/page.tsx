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
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import TopSEOServices from '@/components/services/TopSEOServices';

import { FaBriefcase, FaBuilding, FaCamera, FaCertificate, FaChartBar, FaChartLine, FaCog, FaDollarSign, FaEdit, FaHome, FaMapMarkerAlt, FaRocket, FaSearch, FaSearchPlus, FaTags, FaTools, FaWind } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: "Roofing Contractor SEO Services | Local SEO for Roofers & Roof Repair Companies",
  description: "Expert SEO services for roofing contractors. Dominate local search for roof replacement, storm damage repair, roof inspections, and residential roofing. Proven roofing SEO strategies to generate more leads and grow your roofing business.",
  keywords: "roofing SEO, roofing contractor marketing, roof repair SEO, roof replacement marketing, storm damage SEO, local roofing SEO, roofer lead generation, roofing company SEO, roofing near me SEO, residential roofing marketing, commercial roofing SEO, shingle roof marketing, metal roofing SEO, roofing contractor digital marketing",
  openGraph: {
    title: "Roofing Contractor SEO Services | Local SEO for Roofers",
    description: "Expert SEO for roofing contractors. Generate more leads for roof replacement, repair, and storm damage services with proven roofing marketing strategies.",
    type: 'website'
  }
};

const seoFrameworkFaqs = [
  { question: "What is roofing SEO?", answer: "Roofing SEO focuses on improving search visibility for roofers, roof repair, and storm restoration services, emphasizing local search and trust signals." },
  { question: "How long until I see leads?", answer: "Initial improvements in 2-4 months; significant lead growth in 6-9 months depending on competition and site authority." },
  { question: "What keywords should roofers target?", answer: "Target service+location terms like 'roof replacement [city]', 'roof repair near me', 'storm damage roofers'." },
  { question: "Do you handle storm restoration SEO?", answer: "Yes — I optimize for urgent search intent and coordinate GBP/claim pages for peak storm seasons." },
  { question: "Should I create separate pages for shingle, metal, and flat roofs?", answer: "Yes — dedicated service pages help capture feature-specific searches and improve conversions." },
  { question: "How to outrank national franchises?", answer: "Hyperlocal pages, review velocity, contractor trust signals, and rapid response content outperform national brands in local packs." }
];

const roofingServices = [
  { icon: <FaHome className="w-6 h-6" />, title: "Roof Replacement SEO", description: "Rank for full roof replacement and new roof installation terms." },
  { icon: <FaTools className="w-6 h-6" />, title: "Roof Repair SEO", description: "Capture emergency repair leads for leaks, storm damage, and repairs." },
  { icon: <FaWind className="w-6 h-6" />, title: "Storm Restoration SEO", description: "Optimize for storm, hail, and insurance-claim related searches." },
  { icon: <FaSearch className="w-6 h-6" />, title: "Roof Inspection SEO", description: "Target homeowners searching for inspections and maintenance." },
  { icon: <FaTools className="w-6 h-6" />, title: "Commercial Roofing SEO", description: "Rank for commercial roof contractors and flat roof services." },
  { icon: "🧰", title: "Gutter & Flashing SEO", description: "Complementary services like gutters and flashing optimized." }
];

const faqs = [
  { question: "How quickly can SEO generate roofing leads?", answer: "With optimized GBP and service pages you can see consultation requests in 2-3 months, with substantial volume by month 6." },
  { question: "Do you work with insurance claims?", answer: "Yes — I create content and GBP assets that align with insurance-related search intent to capture storm restoration leads." },
  { question: "Should I target neighborhoods?", answer: "Yes — neighborhood pages increase local relevance and map pack performance." },
  { question: "What makes roofing SEO different?", answer: "Seasonality, emergency intent, and trust signals (licenses, insurance, certifications) are critical." },
  { question: "Can you help with lead tracking?", answer: "We integrate call tracking and CRM hooks to attribute leads to organic channels." },
  { question: "What budget is typical?", answer: "Roofing companies commonly invest $2,500-$8,000/mo depending on market size and growth goals." }
];

export default function RoofingContractorsSEOPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-950">
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Roofing Contractors SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for roofing contractors. Dominate local search for roof installation, roof repair, and roof replacement services."
              }
            ])
          }}
        />
        
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
            <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-lg rotate-45 animate-float" />
            <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-float animation-delay-2000" />
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <FaHome className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Roofing SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Roofing Contractors</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Homeowners search for roofing contractors for repairs, replacements, and installations. Our SEO strategies help you dominate local roofing searches.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">2,000+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Roofing SEO Audit"
                  subtitle="Discover how to dominate local roofing searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Roofing Contractors" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="roofing-contractors-seo" industryIcon="🏠" />
        <WhyChooseMe industry="Roofing Contractors" />
        <HireLocalSEO industry="Roofing Contractors" />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Roofing SEO Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive strategies tailored for shingles, metal, flat, and commercial roofing services.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roofingServices.map((s, i) => (
                <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryStats industry="Roofing" stats={[{value: "320%", label: "Avg. Lead Increase", icon: <FaChartLine className="w-6 h-6" />, color: "red"},{value: "78%", label: "Local Pack Rankings", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "rose"},{value: "3.9x", label: "ROI Within 12 Months", icon: <FaDollarSign className="w-6 h-6" />, color: "amber"},{value: "55%", label: "Cost Per Lead Reduction", icon: <FaChartBar className="w-6 h-6" />, color: "gray"}]} />

        <ProcessTimeline industry="Roofing" steps={[{step:1, title:"Market & Damage Analysis", description:"Audit market demand and historic storm patterns.", icon: <FaSearch className="w-6 h-6" />, duration:"Week 1-2"},{step:2, title:"Technical & GBP", description:"Site fixes, schema, and Google Business Profile optimization.", icon: <FaCog className="w-6 h-6" />, duration:"Week 2-4"},{step:3, title:"Service Page Build", description:"Create pages for roof types, storm services, and repairs.", icon: <FaEdit className="w-6 h-6" />, duration:"Week 4-6"},{step:4, title:"Authority & Links", description:"Local partner outreach, roof manufacturer pages, and citations.", icon: <FaTools className="w-6 h-6" />, duration:"Week 6-12"},{step:5, title:"Review Velocity", description:"Reputation management and photo reviews to win map pack.", icon:"⭐", duration:"Week 8-14"},{step:6, title:"Scale", description:"Expand to adjacent markets and optimize conversion funnels.", icon: <FaRocket className="w-6 h-6" />, duration:"Ongoing"}]} />

        <TopicClusterSection industry="Roofing" pillars={[{title:"Roof Types", description:"Shingle, metal, flat roof content", topics:["Asphalt shingles","Metal roofs","Flat roof systems","Tile roof options"], icon:"🏚️"},{title:"Storm & Insurance", description:"Storm restoration and claims content", topics:["Hail damage","Wind damage","Filing insurance claims","Temporary tarps"], icon: <FaWind className="w-6 h-6" />},{title:"Commercial Roofing", description:"Commercial systems and maintenance", topics:["TPO/EPDM","Reroofing","Roof coatings","Maintenance plans"], icon: <FaBuilding className="w-6 h-6" />},{title:"Maintenance & Inspections", description:"Inspection and preventive maintenance", topics:["Roof inspection checklist","Gutter maintenance","Leak detection","Preventive care"], icon: <FaSearchPlus className="w-6 h-6" />}]} />

        <LocalSEOSignals industry="Roofing" signals={[{title:"Contractor Licenses & Insurance", description:"Display licensing, insurance, and certifications.", importance:"Critical", icon: <FaCertificate className="w-6 h-6" />},{title:"Storm Response Visibility", description:"Highlight emergency response and tarp services.", importance:"High", icon:"⏱️"},{title:"Photo Evidence", description:"Before/after and damage photos in GBP and pages.", importance:"High", icon: <FaCamera className="w-6 h-6" />},{title:"Service Area Pages", description:"Geo-targeted pages for towns and neighborhoods.", importance:"High", icon: <FaMapMarkerAlt className="w-6 h-6" />},{title:"Manufacturer Partnerships", description:"Showcase certified installer status for brands.", importance:"Medium", icon: <FaTags className="w-6 h-6" />},{title:"Review Management", description:"Fast review responses and photo reviews.", importance:"Medium", icon:"⭐"}]} />

        <CompetitorComparison industry="Roofing" comparisons={[{feature:"Storm Response", withSEO:"Prioritized emergency visibility", withoutSEO:"Miss urgent leads"},{feature:"Local Pack", withSEO:"Dominant map presence", withoutSEO:"Hidden behind franchises"},{feature:"Insurance Leads", withSEO:"Target claim-intent pages", withoutSEO:"Lose high-value jobs"},{feature:"Feature Visibility", withSEO:"Rank for metal/shingle keywords", withoutSEO:"Generic service pages"},{feature:"Trust Signals", withSEO:"Licenses and photos displayed", withoutSEO:"Lower click-through"},{feature:"Lead Quality", withSEO:"Higher estimate requests", withoutSEO:"Low quality leads"}]} />

        <CaseStudyHighlight 
          industry="Roofing" 
          caseStudy={{
            title: "Regional Roofer: 310% Lead Growth",
            industry: "Roofing",
            results: [
              { metric: "Organic Leads", value: "+310%", change: "increase in qualified roofing leads" },
              { metric: "Map Pack Rankings", value: "#1 for 42 terms", change: "top positions across local keywords" },
              { metric: "Insurance Leads", value: "+220%", change: "growth in storm and insurance claim projects" }
            ],
            testimonial: "We now get steady storm and replacement projects directly from search.",
            clientName: "Roofing Company Owner"
          }} 
        />

        <TrustSignals industry="Roofing" customItems={[{icon: <FaHome className="w-6 h-6" />, title:"Roofing Focus", description:"Specialized in roofing contractor SEO"},{icon: <FaWind className="w-6 h-6" />, title:"Storm Expertise", description:"Fast response and storm-season strategies"},{icon: <FaMapMarkerAlt className="w-6 h-6" />, title:"Local Dominance", description:"Hyperlocal win for service areas"},{icon: <FaCamera className="w-6 h-6" />, title:"Visual Proof", description:"Before/after photos drive conversions"},{icon: <FaChartLine className="w-6 h-6" />, title:"Proven ROI", description:"High-value contract wins"},{icon: <FaBriefcase className="w-6 h-6" />, title:"Insurance Savvy", description:"Claim-focused content and workflows"}]} />

        <TopSEOServices />

        <IndustriesGrid />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Roofing Contractors</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">See how roofing companies improved lead velocity and insurance project capture.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[{quote:"We dominated the map pack after their storm campaigns.", author:"Jake R.", company:"Regional Roofer", rating:5},{quote:"Replacement projects doubled in 6 months.", author:"Samantha B.", company:"Local Roofing Co.", rating:5},{quote:"Insurance jobs became a reliable revenue source.", author:"Carlos M.", company:"Metro Roofing", rating:5}].map((t,i)=> (
                <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_,j)=>(<span key={j} className="text-yellow-400">★</span>))}</div>
                  <p className="text-gray-300 mb-4 italic">"{t.quote}"</p>
                  <p className="text-white font-semibold">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-24 bg-gradient-to-br from-red-900/20 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Roofing Business?</h2>
            <p className="text-gray-300 mb-8">Get a free roofing SEO audit and start capturing more replacement and insurance projects.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold">Get Your Free Audit</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
