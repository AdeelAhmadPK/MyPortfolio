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

import { FaBuilding, FaCamera, FaChartBar, FaChartLine, FaCog, FaDollarSign, FaEdit, FaHome, FaMapMarkerAlt, FaRocket, FaRuler, FaSearch, FaShieldAlt, FaTags, FaTrophy, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: "Carpet & Flooring Installation SEO Services | Local SEO for Flooring Companies",
  description: "Expert SEO services for carpet and flooring installation companies. Dominate local search for hardwood flooring, LVP, tile installation, carpet replacement, and flooring showrooms. Proven flooring contractor marketing strategies.",
  keywords: "carpet installation SEO, flooring company marketing, hardwood flooring SEO, LVP installation marketing, tile installer SEO, flooring contractor marketing, flooring near me SEO, flooring company lead generation, local SEO for flooring, carpet replacement marketing, laminate flooring SEO, vinyl plank marketing, commercial flooring SEO, residential flooring marketing",
  openGraph: {
    title: "Carpet & Flooring Installation SEO Services | Local SEO for Flooring Companies",
    description: "Expert SEO for flooring companies. Generate more leads for carpet, hardwood, LVP, and tile installation with proven flooring marketing strategies.",
    type: 'website'
  }
};

const seoFrameworkFaqs = [
  { question: "What is carpet and flooring SEO?", answer: "SEO targeting homeowners and commercial clients searching for carpet, hardwood, LVP, tile, and specialty flooring installation and replacement services." },
  { question: "How quickly can flooring leads increase?", answer: "With GBP optimization and targeted landing pages, many flooring companies see lead growth within 4-8 weeks; broader organic gains take 3-6 months." },
  { question: "Do you optimize for commercial flooring?", answer: "Yes — I create pages targeting commercial flooring installs, epoxy coatings, and large-scale replacement projects." },
  { question: "Should I have separate pages for carpet, hardwood, and tile?", answer: "Yes — dedicated pages improve search relevance for each flooring type and capture more specific search intent." },
  { question: "How to rank for 'flooring near me' searches?", answer: "Strong GBP optimization, service area pages, customer reviews, and fast mobile site performance drive local pack visibility." },
  { question: "Can SEO help with showroom visits?", answer: "Yes — local landing pages, virtual tours, and portfolio galleries drive both online leads and in-person consultations." }
];

const flooringServices = [
  { icon: "🧵", title: "Carpet Installation SEO", description: "Rank for carpet installation, replacement, and repair services." },
  { icon: "🪵", title: "Hardwood Flooring SEO", description: "Capture leads for hardwood installation, refinishing, and restoration." },
  { icon: "🟫", title: "Luxury Vinyl Plank (LVP) SEO", description: "Target LVP and waterproof flooring installation searches." },
  { icon: "🔲", title: "Tile & Stone SEO", description: "Optimize for tile, marble, and natural stone installation services." },
  { icon: <FaBuilding className="w-6 h-6" />, title: "Commercial Flooring SEO", description: "Rank for large-scale commercial, epoxy, and industrial flooring projects." },
  { icon: <FaRuler className="w-6 h-6" />, title: "Flooring Repair & Refinishing", description: "Capture repair, sanding, and refinishing service searches." }
];

const faqs = [
  { question: "How do flooring companies compete in local search?", answer: "By optimizing GBP, creating service-specific pages, showcasing portfolio photos, and building strong local reviews and citations." },
  { question: "Can SEO help with seasonal flooring demand?", answer: "Yes — content and GBP posts can be timed to capture spring remodel and holiday season upgrade searches." },
  { question: "Do you integrate with flooring lead platforms?", answer: "I optimize your site to capture direct leads so you reduce reliance on expensive lead-gen platforms." },
  { question: "What budget is typical for flooring SEO?", answer: "Most flooring companies invest $2,000-$5,000/mo depending on service area and competition." },
  { question: "How do you handle multi-location flooring businesses?", answer: "I create location-specific pages, optimize individual GBP listings, and tailor messaging for each market." },
  { question: "Can you help with reputation management?", answer: "Yes — I implement review generation workflows and respond to feedback to build trust and improve rankings." }
];

export default function CarpetFlooringInstallationSEOPage() {
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
                "serviceType": "Carpet & Flooring Installation SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for carpet and flooring installation contractors. Dominate local search for residential and commercial flooring installations."
              }
            ])
          }}
        />
        
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
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Flooring SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Carpet & Flooring Installation</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Homeowners search for carpet and flooring installation when renovating. Our SEO strategies help your business capture these high-intent renovation leads.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,700+</div>
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
                  title="Get Your Free Flooring SEO Audit"
                  subtitle="Discover how to dominate local flooring searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Carpet & Flooring Installation" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="carpet-flooring-installation-seo" industryIcon="🧵" />
        <WhyChooseMe industry="Flooring Installation" />
        <HireLocalSEO industry="Flooring Installation" />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Flooring SEO Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Targeted SEO for carpet, hardwood, LVP, tile, and commercial flooring companies.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flooringServices.map((s, i) => (
                <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryStats industry="Flooring" stats={[{value: "240%", label: "Lead Increase", icon: <FaChartLine className="w-6 h-6" />, color: "amber"},{value: "68%", label: "Local Pack Wins", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "orange"},{value: "3.8x", label: "ROI", icon: <FaDollarSign className="w-6 h-6" />, color: "yellow"},{value: "52%", label: "Cost Per Lead Down", icon: <FaChartBar className="w-6 h-6" />, color: "red"}]} />

        <ProcessTimeline industry="Flooring" steps={[{step:1, title:"Flooring Market Analysis", description:"Audit local flooring competition and keyword opportunities.", icon: <FaSearch className="w-6 h-6" />, duration:"Week 1"},{step:2, title:"Technical Foundations", description:"Fix site speed, mobile UX, and implement flooring schema.", icon: <FaCog className="w-6 h-6" />, duration:"Week 1-2"},{step:3, title:"Service Page Development", description:"Build pages for carpet, hardwood, LVP, tile, and refinishing.", icon: <FaEdit className="w-6 h-6" />, duration:"Week 2-4"},{step:4, title:"Portfolio & Visual Content", description:"Optimize project galleries and before/after images.", icon: <FaCamera className="w-6 h-6" />, duration:"Week 3-5"},{step:5, title:"Review & Reputation Growth", description:"Implement review generation and manage online feedback.", icon:"⭐", duration:"Ongoing"},{step:6, title:"Scale & Expand", description:"Add commercial flooring and specialty service content.", icon: <FaRocket className="w-6 h-6" />, duration:"Ongoing"}]} />

        <TopicClusterSection industry="Flooring" pillars={[{title:"Carpet Services", description:"Installation and replacement", topics:["Carpet installation","Carpet replacement","Carpet repair","Stair carpet"], icon:"🧵"},{title:"Hardwood Flooring", description:"Install and refinish", topics:["Hardwood installation","Floor refinishing","Sanding and staining","Hardwood repair"], icon:"🪵"},{title:"LVP & Vinyl", description:"Waterproof flooring", topics:["LVP installation","Waterproof flooring","Sheet vinyl","Vinyl plank"], icon:"🟫"},{title:"Tile & Stone", description:"Ceramic and natural stone", topics:["Tile installation","Marble flooring","Travertine","Grout repair"], icon:"🔲"}]} />

        <LocalSEOSignals industry="Flooring" signals={[{title:"Service Type Clarity", description:"Pages for each flooring type and service.", importance:"Critical", icon: <FaTags className="w-6 h-6" />},{title:"Portfolio & Photos", description:"Before/after project galleries and installation photos.", importance:"High", icon: <FaCamera className="w-6 h-6" />},{title:"Showroom Visibility", description:"Highlight location and in-person consultation options.", importance:"High", icon: <FaBuilding className="w-6 h-6" />},{title:"Service Area Targeting", description:"Neighborhood and zip-based pages for installation zones.", importance:"High", icon: <FaMapMarkerAlt className="w-6 h-6" />},{title:"Material Brands", description:"Feature premium brands and product partnerships.", importance:"Medium", icon: <FaTrophy className="w-6 h-6" />},{title:"Trust & Credentials", description:"Licensing, insurance, and manufacturer certifications.", importance:"Medium", icon: <FaShieldAlt className="w-6 h-6" />}]} />

        <CompetitorComparison industry="Flooring" comparisons={[{feature:"Service Visibility", withSEO:"Dedicated pages for each flooring type", withoutSEO:"Generic flooring pages"},{feature:"Portfolio Impact", withSEO:"Optimized project galleries driving conversions", withoutSEO:"Missed visual proof opportunities"},{feature:"Local Presence", withSEO:"Strong GBP and service area targeting", withoutSEO:"Weak local search footprint"},{feature:"Review Generation", withSEO:"Automated review requests post-install", withoutSEO:"Sporadic review collection"},{feature:"Commercial Positioning", withSEO:"Targeted pages for large projects", withoutSEO:"Overlooked commercial segment"},{feature:"Brand Partnerships", withSEO:"Optimized for premium material searches", withoutSEO:"Lost brand-driven traffic"}]} />

        <CaseStudyHighlight industry="Flooring" caseStudy={{title:"Flooring Company: 220% Lead Growth", industry:"Flooring", results:[{metric:"Organic Leads", value:"+220%", change:"+220%"},{metric:"Showroom Visits", value:"+180%", change:"+180%"}], testimonial:"Our phone rings consistently now with homeowners who already know what they want.", clientName:"Flooring Business Owner"}} />

        <TrustSignals industry="Flooring" customItems={[{icon:"🧵", title:"Flooring Expertise", description:"Specialized in carpet, hardwood, and tile SEO"},{icon: <FaCamera className="w-6 h-6" />, title:"Visual Optimization", description:"Portfolio and gallery SEO for conversions"},{icon: <FaMapMarkerAlt className="w-6 h-6" />, title:"Local Dominance", description:"GBP and service area SEO strategies"},{icon: <FaBuilding className="w-6 h-6" />, title:"Commercial & Residential", description:"Dual-channel optimization"},{icon: <FaWrench className="w-6 h-6" />, title:"Full-Service SEO", description:"Technical, on-page, and link building"},{icon: <FaChartLine className="w-6 h-6" />, title:"Lead Tracking", description:"Clear attribution and ROI reporting"}]} />

        <TopSEOServices />

        <IndustriesGrid />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by Flooring Companies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">See how flooring installers increased leads and showroom traffic with our strategies.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[{quote:"Our carpet installation leads tripled within five months.", author:"Tom R.", company:"Carpet Pros", rating:5},{quote:"We now rank for every major flooring type in our city.", author:"Lisa M.", company:"Premium Floors", rating:5},{quote:"Portfolio optimization turned our site into a lead magnet.", author:"James K.", company:"Hardwood Specialists", rating:5}].map((t,i)=> (
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

        <section className="py-24 bg-gradient-to-br from-amber-900/20 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Flooring Business?</h2>
            <p className="text-gray-300 mb-8">Request a free flooring SEO audit and start capturing more installation leads today.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold">Get Your Free Audit</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
