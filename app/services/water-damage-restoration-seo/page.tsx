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

import { FaBell, FaBuilding, FaCamera, FaChartBar, FaChartLine, FaCog, FaDollarSign, FaEdit, FaFileAlt, FaMapMarkerAlt, FaPhoneAlt, FaSearchPlus, FaShieldAlt, FaTools, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: "Water Damage Restoration SEO Services | Local SEO for Flood & Mitigation Companies",
  description: "Expert SEO services for water damage restoration companies. Dominate local search for water extraction, flood cleanup, basement flooding, sewage cleanup, and emergency water mitigation. Proven water damage marketing strategies.",
  keywords: "water damage restoration SEO, water damage company marketing, flood restoration SEO, water mitigation marketing, emergency water extraction SEO, basement flooding marketing, sewage cleanup SEO, water damage near me SEO, local SEO for water damage, water restoration lead generation, storm damage restoration marketing, insurance restoration SEO",
  openGraph: {
    title: "Water Damage Restoration SEO Services | Local SEO for Flood & Mitigation Companies",
    description: "Expert SEO for water damage restoration companies. Capture more emergency calls and insurance leads with proven water damage marketing strategies.",
    type: 'website'
  }
};

const seoFrameworkFaqs = [
  { question: "What is water damage restoration SEO?", answer: "SEO that prioritizes urgent search intent: water extraction, drying, mold prevention, and insurance claims to capture emergency leads." },
  { question: "How fast can emergency calls increase?", answer: "With GBP optimizations and urgent landing pages, some clients see increased emergency calls in weeks; larger organic growth takes months." },
  { question: "Do you optimize for insurance-related searches?", answer: "Yes — I create pages and content aligning with insurance claims and public adjuster language to capture claim-based leads." },
  { question: "Is mold remediation covered?", answer: "We combine mold remediation messaging with water restoration to capture cross-intent traffic and higher-value remediation projects." },
  { question: "Should I have separate pages for extraction, drying, and remediation?", answer: "Yes — dedicated pages improve relevance for emergency and remediation searches." },
  { question: "How to dominate local emergency search?", answer: "Fast GBP response, call-first landing pages, schema for emergency services, and paid + organic coordination during storm events." }
];

const restorationServices = [
  { icon: "💧", title: "Emergency Water Extraction", description: "Rank for urgent water removal and extraction services." },
  { icon: "🧽", title: "Structural Drying & Dehumidification", description: "Capture leads searching for drying and water damage mitigation." },
  { icon: "🦠", title: "Mold Remediation SEO", description: "Optimize for mold inspection and remediation searches." },
  { icon: <FaFileAlt className="w-6 h-6" />, title: "Insurance Claim Support", description: "Target leads looking for help with insurance claims and documentation." },
  { icon: <FaSearchPlus className="w-6 h-6" />, title: "Content for Causes", description: "Pages for burst pipes, roof leaks, and appliance failures to capture specific intent." },
  { icon: "🏚️", title: "Commercial Flood Recovery", description: "Rank for large-loss commercial water damage and recovery services." }
];

const faqs = [
  { question: "How quickly should we respond to water damage leads?", answer: "Immediate response is critical — the website and GBP should make calling you the primary action; speed improves conversions and reduces property loss." },
  { question: "Can SEO help with large commercial losses?", answer: "Yes — dedicated pages and case studies position you to win commercial contracts and large-loss recovery jobs." },
  { question: "Do you integrate with emergency dispatch systems?", answer: "We can integrate call tracking and routing to ensure emergency leads are captured and triaged accurately." },
  { question: "What budget is typical for restoration SEO?", answer: "Emergency-focused SEO often starts at $3,000+/mo in competitive markets to prioritize rapid visibility and GBP maintenance." },
  { question: "How do you handle seasonal floods?", answer: "We prepare landing pages and GBP posts timed to local seasonal risks and coordinate content before storms to capture surge traffic." },
  { question: "Can you help with reputation management for mold cases?", answer: "Yes — careful messaging and remediation testimonials build trust in sensitive cases like mold." }
];

export default function WaterDamageRestorationSEOPage() {
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
                "serviceType": "Water Damage Restoration SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for water damage restoration contractors. Capture emergency water damage leads and grow your restoration business."
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
                  <FaTools className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Emergency Water Damage SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Water Damage Restoration</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When water damage strikes, homeowners search for immediate help. Our 24/7 SEO strategies ensure your restoration company appears first in emergency searches.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,500+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">7x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Water Damage SEO Audit"
                  subtitle="Discover how to dominate emergency restoration searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Water Damage Restoration" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="water-damage-restoration-seo" industryIcon="💧" />
        <WhyChooseMe industry="Water Damage Restoration" />
        <HireLocalSEO industry="Water Damage Restoration" />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Restoration SEO Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Targeted SEO for extraction, drying, mold remediation, and insurance-related restoration work.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restorationServices.map((s, i) => (
                <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryStats industry="Restoration" stats={[{value: "210%", label: "Urgent Lead Increase", icon: <FaChartLine className="w-6 h-6" />, color: "blue"},{value: "72%", label: "Local Pack Wins", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "cyan"},{value: "3.2x", label: "ROI", icon: <FaDollarSign className="w-6 h-6" />, color: "green"},{value: "49%", label: "Cost Per Lead Down", icon: <FaChartBar className="w-6 h-6" />, color: "teal"}]} />

        <ProcessTimeline industry="Water Damage" steps={[{step:1, title:"Rapid Site Assessment", description:"Create urgent call-first pages and triage flows.", icon: <FaBell className="w-6 h-6" />, duration:"Days 1-3"},{step:2, title:"Technical Fixes", description:"Fast page speed and mobile call actions for emergencies.", icon: <FaCog className="w-6 h-6" />, duration:"Week 1"},{step:3, title:"Service Page Rollout", description:"Build targeted pages for extraction, drying, and mold remediation.", icon: <FaEdit className="w-6 h-6" />, duration:"Week 2-4"},{step:4, title:"Insurance Content", description:"Create claim-focused content to capture high-value leads.", icon: <FaFileAlt className="w-6 h-6" />, duration:"Week 4-8"},{step:5, title:"Reputation Management", description:"Showcase remediation testimonials and before/after photos.", icon:"⭐", duration:"Ongoing"},{step:6, title:"Scale Response", description:"Prepare surge content and GBP posts for storm events.", icon:"🌧️", duration:"Ongoing"}]} />

        <TopicClusterSection industry="Restoration" pillars={[{title:"Emergency Services", description:"Extraction and drying", topics:["Water extraction","Structural drying","Immediate mitigation","Board-up services"], icon: <FaBell className="w-6 h-6" />},{title:"Mold Remediation", description:"Inspection and remediation", topics:["Mold testing","Containment","Remediation","Post-remediation verification"], icon:"🦠"},{title:"Insurance & Claims", description:"Claim documentation content", topics:["Filing claims","Estimator reports","Public adjuster coordination","Documentation checklists"], icon: <FaFileAlt className="w-6 h-6" />},{title:"Commercial Recovery", description:"Large loss and business continuity", topics:["Commercial drying","Large-loss workflows","Pack-out services","Business continuity plans"], icon: <FaBuilding className="w-6 h-6" />}]} />

        <LocalSEOSignals industry="Restoration" signals={[{title:"Emergency Call Actions", description:"Call-first landing pages and click-to-call prominence.", importance:"Critical", icon: <FaPhoneAlt className="w-6 h-6" />},{title:"Insurance Language", description:"Pages aligned with insurer and adjuster terms.", importance:"High", icon: <FaFileAlt className="w-6 h-6" />},{title:"Response Time", description:"Highlight 24/7 availability and arrival times.", importance:"High", icon:"⏱️"},{title:"Photo Documentation", description:"Before/after and drying progress photos.", importance:"High", icon: <FaCamera className="w-6 h-6" />},{title:"Service Area Targeting", description:"Zip and neighborhood pages for rapid response", importance:"High", icon: <FaMapMarkerAlt className="w-6 h-6" />},{title:"Health & Safety Signals", description:"Mold certifications and technician credentials", importance:"Medium", icon: <FaShieldAlt className="w-6 h-6" />}]} />

        <CompetitorComparison industry="Restoration" comparisons={[{feature:"Emergency Visibility", withSEO:"Call-first pages and GBP priority", withoutSEO:"Miss time-sensitive leads"},{feature:"Insurance Leads", withSEO:"Claim-driven landing pages", withoutSEO:"Lose high-value projects"},{feature:"Reputation", withSEO:"Photo testimonials and remediation proof", withoutSEO:"Lower trust"},{feature:"Surge Preparedness", withSEO:"Seasonal content and GBP posts", withoutSEO:"Miss peaks"},{feature:"Commercial Capacity", withSEO:"Large loss positioning", withoutSEO:"Underserved by competitors"},{feature:"Mold Expertise", withSEO:"Combined remediation messaging", withoutSEO:"Fragmented offerings"}]} />

        <CaseStudyHighlight 
          industry="Restoration" 
          caseStudy={{
            title: "Flood Response: 260% Lead Growth",
            industry: "Restoration",
            results: [
              { metric: "Emergency Calls", value: "+260%", change: "increase in 24/7 emergency call volume" },
              { metric: "Insurance Jobs", value: "+180%", change: "growth in high-value insurance restoration projects" }
            ],
            testimonial: "Our emergency lines became full within weeks during peak season.",
            clientName: "Restoration Owner"
          }} 
        />

        <TrustSignals industry="Restoration" customItems={[{icon:"💧", title:"Emergency Focus", description:"Fast, call-first web experiences"},{icon: <FaFileAlt className="w-6 h-6" />, title:"Insurance Expertise", description:"Claim-driven content and documentation"},{icon:"🦠", title:"Mold Certifications", description:"Licensed remediation specialists"},{icon: <FaMapMarkerAlt className="w-6 h-6" />, title:"Local Rapid Response", description:"Hyperlocal coverage and fast arrival"},{icon: <FaCamera className="w-6 h-6" />, title:"Progress Photos", description:"Visual proof of remediation"},{icon: <FaWrench className="w-6 h-6" />, title:"Full-Service", description:"Extraction to rebuild coordination"}]} />

        <TopSEOServices />

        <IndustriesGrid />

        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by Restoration Companies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">See how restoration firms captured emergency leads and insurance projects with our strategies.</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[{quote:"We saw emergency calls double within a month.", author:"Anna P.", company:"Rapid Restore", rating:5},{quote:"Insurance workflows improved conversion for large losses.", author:"Mark L.", company:"FloodFix", rating:5},{quote:"Mold leads became a reliable revenue stream.", author:"Saira K.", company:"CleanAir Remediation", rating:5}].map((t,i)=> (
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

        <section className="py-24 bg-gradient-to-br from-blue-900/20 to-gray-900 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Faster Emergency Leads?</h2>
            <p className="text-gray-300 mb-8">Request a free emergency SEO audit and ensure your expertise answers the next water damage call.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold">Get Your Free Audit</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
