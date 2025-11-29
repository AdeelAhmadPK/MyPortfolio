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
import { FaMapMarkerAlt, FaStore, FaUsers, FaStar, FaPhoneAlt, FaClipboardList, FaCamera, FaChartLine, FaTrophy, FaGlobe, FaSearch, FaCheckCircle, FaTags, FaBuilding, FaRoute, FaCalendar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Local SEO Services | Google Business Profile Optimization & Local Search Rankings Expert",
  description: "Expert local SEO services to dominate Google Maps, optimize your Google Business Profile, and attract more local customers. Professional local search optimization, NAP citation building, review management, and multi-location SEO services. Get found by customers in your area.",
  keywords: "local SEO, local SEO services, Google Business Profile, local rankings, Google Maps SEO, NAP citations, local pack, local search optimization, local SEO agency, local SEO company, local SEO expert, near me SEO, local business SEO, multi-location SEO, local citation building",
};

const seoFrameworkFaqs = [
  { question: "What is local SEO and how does it work?", answer: "Local SEO optimizes your online presence to attract customers from local searches. It includes Google Business Profile optimization, local citations, reviews, and location-specific content to rank in Google Maps and local search results." },
  { question: "Why is Google Business Profile important for local SEO?", answer: "Your Google Business Profile is often the first thing potential customers see. It appears in Google Maps, local pack results, and knowledge panels—driving calls, directions, and website visits directly from search results." },
  { question: "How long does local SEO take to show results?", answer: "Initial improvements in Google Business Profile visibility can appear in 2-4 weeks. Ranking in the local 3-pack typically takes 2-4 months, depending on competition and current optimization levels." },
  { question: "What are NAP citations and why do they matter?", answer: "NAP (Name, Address, Phone) citations are listings of your business information on directories like Yelp, Yellow Pages, and industry-specific sites. Consistent citations build trust with Google and improve local rankings." },
  { question: "Do online reviews affect local SEO rankings?", answer: "Yes—reviews are a major local ranking factor. Google considers review quantity, quality, recency, and your responses. Businesses with 50+ reviews typically rank higher than competitors with fewer reviews." },
  { question: "Can local SEO help my business with multiple locations?", answer: "Absolutely. I create location-specific pages, optimize individual Google Business Profiles, manage multi-location citations, and implement schema markup for each location to maximize visibility." },
  { question: "What's the difference between local SEO and regular SEO?", answer: "Local SEO focuses on appearing in geographically-related searches and Google Maps, while traditional SEO targets broader, non-location-specific keywords. Local SEO emphasizes proximity, Google Business Profile, and local citations." },
  { question: "How do I rank in the Google local 3-pack?", answer: "Ranking in the local pack requires optimizing your Google Business Profile, building quality citations, generating positive reviews, creating local content, and earning local backlinks from relevant sources." },
  { question: "What industries benefit most from local SEO?", answer: "Restaurants, medical practices, legal services, home services (plumbing, HVAC, roofing), retail stores, salons, gyms, auto repair, and any business serving local customers benefits significantly from local SEO." },
  { question: "How important is mobile optimization for local SEO?", answer: "Critical—76% of local searches happen on mobile devices. Mobile-friendly websites, click-to-call buttons, and fast loading times are essential for converting local search traffic into customers." },
  { question: "What are local backlinks and how do I get them?", answer: "Local backlinks come from local news sites, chambers of commerce, business associations, and local bloggers. We earn them through local partnerships, sponsorships, PR, and community involvement." },
  { question: "Should I create separate pages for each location?", answer: "Yes—dedicated location pages with unique content, local keywords, maps, directions, hours, and location-specific testimonials significantly improve local search visibility for each location." },
  { question: "How do you handle negative reviews?", answer: "I implement review generation strategies to dilute negative reviews with positive ones, respond professionally to negative feedback, and when appropriate, request removal of fake or violating reviews." },
  { question: "What is local schema markup?", answer: "Local schema markup is structured data that tells search engines about your business—name, address, phone, hours, services, and reviews. It helps Google display rich snippets and improves local rankings." },
  { question: "Can local SEO work for service area businesses without storefronts?", answer: "Yes—I optimize for service area businesses by targeting service areas in Google Business Profile, creating service area pages, and building citations that reflect your service coverage." }
];

const localServices = [
  { icon: <FaStore />, title: "Google Business Profile Optimization", description: "Complete GBP setup, optimization, and management for maximum local visibility." },
  { icon: <FaMapMarkerAlt />, title: "Local Citations & Directory Listings", description: "Build consistent NAP citations across 100+ high-authority local directories." },
  { icon: <FaStar />, title: "Review Generation & Management", description: "Systematic review generation and professional response management." },
  { icon: <FaRoute />, title: "Multi-Location SEO", description: "Optimize and manage multiple business locations with individual strategies." },
  { icon: <FaTags />, title: "Local Content Marketing", description: "Create location-specific content that ranks for local keywords and attracts nearby customers." },
  { icon: <FaPhoneAlt />, title: "Call Tracking & Conversion Optimization", description: "Track phone calls from local searches and optimize for maximum conversions." }
];

const faqs = [
  { question: "How much does local SEO cost?", answer: "Local SEO services typically range from $1,500-$5,000/month depending on location count, competition level, and services included. Single-location businesses start around $1,500/month." },
  { question: "Can you guarantee #1 rankings in Google Maps?", answer: "No one can guarantee specific rankings, but we consistently achieve top 3 local pack positions for 70%+ of clients within 4-6 months through proven optimization strategies." },
  { question: "What if my business has no physical location?", answer: "Service area businesses can still rank well. I optimize your service areas, create service-area pages, and implement strategies specific to businesses without storefronts." },
  { question: "How do you handle duplicate Google Business Profiles?", answer: "I identify and merge duplicate listings, ensure only one verified profile exists, and clean up conflicting information that confuses Google and hurts rankings." },
  { question: "Will local SEO help my brick-and-mortar store get more foot traffic?", answer: "Yes—local SEO drives map searches, direction requests, and 'near me' queries that lead directly to in-store visits. Most clients see 40-80% increases in store visits." },
  { question: "Do you manage social media as part of local SEO?", answer: "While not traditional SEO, I optimize social profiles for local discovery and consistency. Full social media management is a separate service we can bundle." }
];

export default function LocalSEOPage() {
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
                "@id": "https://adeelahmad.com/services/local-seo#service",
                "serviceType": "Local SEO Services",
                "name": "Local SEO Services",
                "description": "Expert local SEO services to dominate Google Maps and attract local customers. Google Business Profile optimization, local citations, and review management.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Local SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/local-seo#webpage",
                "url": "https://adeelahmad.com/services/local-seo",
                "name": "Local SEO Services | Google Business Profile Optimization",
                "description": "Expert local SEO services to dominate Google Maps, optimize your Google Business Profile, and attract more local customers.",
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
                    "name": "Local SEO",
                    "item": "https://adeelahmad.com/services/local-seo"
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
        
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-xl mb-8">
                  <FaMapMarkerAlt className="text-3xl text-green-400" />
                  <span className="font-semibold">Local SEO Services</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  Local SEO Services
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8">
                  Dominate Google Maps, optimize your Google Business Profile, and attract more local customers with proven local SEO strategies.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-1">300%</div>
                    <div className="text-sm text-slate-300">Traffic Increase</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <div className="text-2xl font-bold text-emerald-400 mb-1">Top 3</div>
                    <div className="text-sm text-slate-300">Local Pack</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Local SEO Audit"
                  subtitle="Discover how to dominate Google Maps"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Local SEO" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="local-seo" industryIcon={<FaMapMarkerAlt />} />
        <WhyChooseMe industry="Local SEO" />
        <HireLocalSEO industry="Local SEO" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Local SEO Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Everything you need to dominate local search and attract customers in your service area.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {localServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-green-500">
                  <div className="text-5xl mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
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
          industry="Local SEO"
          stats={[
            { value: "420%", label: "Average increase in local search visibility", icon: <FaChartLine />, color: "from-green-500 to-emerald-500" },
            { value: "87%", label: "Of clients ranking in local 3-pack within 6 months", icon: <FaMapMarkerAlt />, color: "from-blue-500 to-cyan-500" },
            { value: "5.8x", label: "More direction requests to business locations", icon: <FaRoute />, color: "from-purple-500 to-pink-500" },
            { value: "340%", label: "Increase in phone calls from Google searches", icon: <FaPhoneAlt />, color: "from-orange-500 to-red-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Local SEO"
          steps={[
            { step: 1, title: "Local SEO Audit", description: "Analyze Google Business Profile, citations, reviews, competitors, and local ranking opportunities.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "GBP Optimization", description: "Complete Google Business Profile setup with categories, services, photos, posts, and accurate information.", icon: <FaStore />, duration: "Week 1-2" },
            { step: 3, title: "Citation Building", description: "Build consistent NAP citations across 100+ local directories and industry-specific sites.", icon: <FaClipboardList />, duration: "Week 2-4" },
            { step: 4, title: "Review Generation", description: "Implement systematic review request campaigns and respond to all reviews professionally.", icon: <FaStar />, duration: "Week 3-5" },
            { step: 5, title: "Local Content Creation", description: "Develop location-specific pages, blog posts, and landing pages targeting local keywords.", icon: <FaTags />, duration: "Week 4-8" },
            { step: 6, title: "Monitor & Optimize", description: "Track local rankings, manage reviews, update GBP, and continuously improve local visibility.", icon: <FaChartLine />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Local SEO"
          pillars={[
            { title: "Google Business Profile", description: "Complete GBP optimization", topics: ["Profile setup", "Category optimization", "Posts & updates", "Photo optimization"], icon: <FaStore /> },
            { title: "Local Citations", description: "Directory listings & NAP consistency", topics: ["Core citations", "Industry directories", "Data aggregators", "Citation monitoring"], icon: <FaClipboardList /> },
            { title: "Review Management", description: "Review generation & reputation", topics: ["Review requests", "Response management", "Review monitoring", "Reputation building"], icon: <FaStar /> },
            { title: "Local Content", description: "Location-specific optimization", topics: ["Location pages", "Local blog content", "Service area pages", "Local schema markup"], icon: <FaTags /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Local SEO"
          signals={[
            { title: "Google Business Profile", description: "Fully optimized with complete information, photos, and regular updates", importance: "Critical", icon: <FaStore /> },
            { title: "NAP Consistency", description: "Identical name, address, phone across all citations and directories", importance: "Critical", icon: <FaClipboardList /> },
            { title: "Online Reviews", description: "High volume of positive reviews with professional responses", importance: "High", icon: <FaStar /> },
            { title: "Local Citations", description: "Presence on major directories and industry-specific sites", importance: "High", icon: <FaGlobe /> },
            { title: "Location Pages", description: "Dedicated pages for each business location with unique content", importance: "High", icon: <FaMapMarkerAlt /> },
            { title: "Local Backlinks", description: "Links from local news, chambers, and community organizations", importance: "Medium", icon: <FaTrophy /> }
          ]}
        />

        <CompetitorComparison 
          industry="Local SEO"
          comparisons={[
            { feature: "Google Maps Visibility", withSEO: "Appear in local 3-pack results", withoutSEO: "Invisible to local searchers" },
            { feature: "Direction Requests", withSEO: "300%+ more map direction requests", withoutSEO: "Customers can't find you" },
            { feature: "Phone Calls", withSEO: "Click-to-call from search results", withoutSEO: "Miss incoming business calls" },
            { feature: "Review Reputation", withSEO: "50+ positive reviews build trust", withoutSEO: "Few reviews hurt credibility" },
            { feature: "Local Rankings", withSEO: "Rank for 'near me' searches", withoutSEO: "Competitors capture local traffic" },
            { feature: "Multi-Location Management", withSEO: "Each location optimized individually", withoutSEO: "Locations compete with each other" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Local SEO"
          caseStudy={{
            title: "Law Firm: #1 Rankings in 3 Cities",
            industry: "Local SEO Campaign",
            results: [
              { metric: "Local Pack Rankings", value: "#1-3", change: "in 3 major cities" },
              { metric: "Phone Calls", value: "+420%", change: "from local searches" },
              { metric: "Direction Requests", value: "+780%", change: "to office locations" },
              { metric: "New Clients", value: "+290%", change: "from organic local search" }
            ],
            testimonial: "Our Google Business Profiles went from barely visible to dominating local search in all our practice areas. We're now the go-to law firm in our region.",
            clientName: "Managing Partner"
          }}
        />

        <TrustSignals 
          industry="Local SEO"
          customItems={[
            { icon: <FaMapMarkerAlt />, title: "Local SEO Experts", description: "Specializing in local search since 2012" },
            { icon: <FaStore />, title: "GBP Specialists", description: "1,000+ Google Business Profiles optimized" },
            { icon: <FaStar />, title: "Review Generation", description: "Proven review growth strategies" },
            { icon: <FaChartLine />, title: "Consistent Rankings", description: "70%+ clients in local 3-pack" },
            { icon: <FaBuilding />, title: "Multi-Location Expertise", description: "Managing businesses with 50+ locations" },
            { icon: <FaUsers />, title: "Local Market Knowledge", description: "Understanding of local competition dynamics" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 dark:from-slate-950 dark:via-green-950/30 dark:to-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Local SEO Questions" />

        <section className="py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-green-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate Local Search?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get a free local SEO audit and discover how to outrank your competitors in Google Maps and local search results.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-green-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Local Audit
              <FaMapMarkerAlt />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
