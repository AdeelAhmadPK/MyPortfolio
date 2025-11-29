import { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { serviceTypes } from '@/config/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';  import HeroContactForm from "@/components/HeroContactForm";
import FAQSection from '@/components/seo/FAQSection';
import SEOFramework from '@/components/industries/SEOFramework';
import CountriesGrid from '@/components/industries/CountriesGrid';
import WhyChooseMe from '@/components/industries/WhyChooseMe';
import HireLocalSEO from '@/components/industries/HireLocalSEO';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import ProcessTimeline from '@/components/industries/ProcessTimeline';
import IndustryStats from '@/components/industries/IndustryStats';
import TrustSignals from '@/components/industries/TrustSignals';
import CompetitorComparison from '@/components/industries/CompetitorComparison';
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight';
import TopicClusterSection from '@/components/industries/TopicClusterSection';
import LocalSEOSignals from '@/components/industries/LocalSEOSignals';
import TopSEOServices from '@/components/services/TopSEOServices';

import { FaBox, FaBuilding, FaCar, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaHandshake, FaHome, FaLink, FaMapMarkerAlt, FaMobileAlt, FaRuler, FaSearch, FaSnowflake, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: 'Self Storage SEO Services | Local SEO for Storage Facilities',
  description: 'Expert SEO services for self storage facilities. Dominate local search for storage units, climate-controlled storage, and RV boat storage. Proven self storage marketing strategies to increase occupancy rates and grow your storage business.',
  keywords: 'self storage SEO, storage facility marketing, storage unit SEO, climate controlled storage marketing, RV storage SEO, boat storage marketing, mini storage SEO, storage facility lead generation, local SEO for storage, storage near me SEO, storage rental marketing, self storage digital marketing, storage company SEO, commercial storage marketing',
  openGraph: {
    title: 'Self Storage SEO Services | Local SEO for Storage Facilities',
    description: 'Expert SEO for self storage facilities. Increase occupancy rates with proven storage facility marketing strategies.',
    type: 'website'
  }
};

export default function SelfStorageSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Self Storage SEO', url: '/services/self-storage-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my self storage facility get more rentals?',
      answer: 'When people need storage, they search locally. By ranking first for searches like "storage units near me", "self storage [city]", and "climate controlled storage", you capture customers who are actively looking for storage solutions and ready to rent units.'
    },
    {
      question: 'What self storage keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: size-specific terms ("10x10 storage unit", "large storage units"), feature keywords ("climate controlled storage", "vehicle storage"), and location searches ("storage near me", "storage units in [city]"). This captures all stages of the search journey.'
    },
    {
      question: 'How important are reviews for self storage SEO?',
      answer: 'Extremely important! Storage customers research extensively because they are trusting facilities with their belongings. I implement review generation strategies that build trust through testimonials mentioning security, cleanliness, and customer service.'
    },
    {
      question: 'Can you help me rank for climate controlled storage searches?',
      answer: 'Absolutely! Climate controlled storage is a high-value keyword category. I create dedicated pages highlighting your climate controlled units, their benefits, and ideal uses to capture customers searching for premium storage options.'
    },
    {
      question: 'How do seasonal trends affect self storage SEO?',
      answer: 'Storage demand peaks during moving season (May-September), college move-in/out periods, and after holidays. We publish seasonal content ahead of peak periods and adjust strategies to capture demand when it is highest.'
    },
    {
      question: 'What makes self storage SEO different from other local businesses?',
      answer: 'Self storage SEO requires targeting specific unit sizes, features, and use cases. Customers search for exact dimensions, climate control, vehicle storage, and other specific needs. I create content for every unit type and customer scenario.'
    },
    {
      question: 'How long does it take to see SEO results for storage facilities?',
      answer: 'Competitive storage keywords typically take 3-6 months to rank well. However, location-specific and feature-specific terms often show results within 60-90 days. Most facilities see significant rental increases by month 4-5.'
    },
    {
      question: 'Should I create content for each unit size?',
      answer: 'Yes! Customers search for specific sizes like "5x5 storage", "10x10 storage unit", and "large storage units". Dedicated pages for each size category with pricing and dimensions capture these targeted searches.'
    },
    {
      question: 'How important is mobile optimization for storage facilities?',
      answer: 'Critical! Many people search for storage while moving or in transit. Your site must load fast on mobile, show clear pricing, and make it easy to call or reserve units from any device.'
    },
    {
      question: 'Can SEO help fill vacant units?',
      answer: 'Definitely! SEO attracts consistent organic traffic that converts to rentals. Unlike ads that stop when you stop paying, SEO continues to fill units month after month, improving overall occupancy rates.'
    },
    {
      question: 'How do you optimize for "storage near me" searches?',
      answer: 'I optimize your Google Business Profile with accurate categories and photos, ensure NAP consistency across directories, create location-specific pages, and build citations on storage and moving directories.'
    },
    {
      question: 'Should I target RV and boat storage keywords?',
      answer: 'If you offer vehicle storage, absolutely! RV, boat, and vehicle storage have less competition and higher rental values. I create dedicated pages targeting vehicle storage customers in your area.'
    },
    {
      question: 'How do you measure self storage SEO success?',
      answer: 'We track rankings for target keywords, Google Business Profile visibility, organic traffic, phone calls, online reservations, and revenue from SEO-generated rentals. Monthly reports show clear ROI and occupancy impact.'
    },
    {
      question: 'Can you help with multi-location storage SEO?',
      answer: 'Yes! For multi-facility operators, I create separate strategies for each location while maintaining brand consistency. Each facility gets optimized local pages, citations, and Google Business Profile management.'
    },
    {
      question: 'How do you handle competitor storage facilities nearby?',
      answer: 'We analyze competitor strategies and identify gaps in their optimization. By creating better content, more reviews, and stronger local signals, I help you outrank nearby competitors.'
    },
    {
      question: 'What amenities should I highlight for SEO?',
      answer: 'Security features (cameras, gated access, on-site manager), convenience (24/7 access, drive-up units), and special features (climate control, packing supplies) all become keyword targets that attract specific customer needs.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my self storage facility get more rentals?',
      answer: 'When people need storage, they search locally. By ranking first for searches like "storage units near me" and "self storage [city]", you capture customers who are actively looking for storage solutions and ready to rent units.'
    },
    {
      question: 'What self storage keywords should I target for maximum ROI?',
      answer: 'I target size-specific terms ("10x10 storage unit"), feature keywords ("climate controlled storage"), and location searches ("storage near me"). This captures customers at every stage of their search journey.'
    },
    {
      question: 'How long does it take to see SEO results for storage facilities?',
      answer: 'Competitive storage keywords typically take 3-6 months to rank well. However, location-specific and feature-specific terms often show results within 60-90 days. Most facilities see significant rental increases by month 4-5.'
    },
    {
      question: 'How important are reviews for self storage SEO?',
      answer: 'Extremely important! Storage customers research extensively because they are trusting facilities with their belongings. I implement review generation strategies that build trust through testimonials about security and service.'
    },
    {
      question: 'Can you help me rank for climate controlled storage?',
      answer: 'Absolutely! Climate controlled storage is a high-value keyword category. I create dedicated pages highlighting your climate controlled units, their benefits, and ideal uses to capture these premium customers.'
    },
    {
      question: 'What makes your self storage SEO different from other agencies?',
      answer: 'I specialize in local service SEO and understand the storage industry. We know the keywords, seasonal patterns, and conversion tactics that drive rentals. Generic agencies lack this specific expertise.'
    }
  ];

  const topServices = Object.values(serviceTypes).slice(0, 10);

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
                "serviceType": "Self Storage SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for self storage facilities. Dominate local search for storage units, climate-controlled storage, and vehicle storage."
              }
            ])
          }}
        />
        
        {/* Section 1: Hero */}
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
                  <FaBuilding className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Storage SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Self Storage</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  People search for self storage when moving, downsizing, or need extra space. Our SEO strategies help your facility dominate local storage searches.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">97%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,400+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">4x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Storage SEO Audit"
                  subtitle="Discover how to dominate local storage searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Self Storage" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="self-storage-seo" industryIcon="📦" />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Self Storage" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Self Storage" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Self Storage <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for self storage facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Unit Size SEO", description: "Rank for specific storage unit size searches in your area", icon: <FaRuler className="w-6 h-6" />, color: "from-violet-500 to-purple-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for storage facility searches", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Climate Control SEO", description: "Capture high-value climate controlled storage searches", icon: <FaSnowflake className="w-6 h-6" />, color: "from-cyan-500 to-teal-500" },
                { title: "Vehicle Storage SEO", description: "Rank for RV, boat, and vehicle storage keywords", icon: <FaCar className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
                { title: "Conversion Optimization", description: "Turn website visitors into unit reservations", icon: <FaChartArea className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
                { title: "Multi-Location SEO", description: "Manage SEO for multiple storage facilities", icon: <FaBuilding className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
              ].map((service, index) => (
                <div key={index} className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Industry Stats */}
        <IndustryStats 
          industry="Self Storage"
          stats={[
            { value: "86%", label: "of storage searches happen on mobile devices", icon: <FaMobileAlt className="w-6 h-6" />, color: "from-violet-500 to-purple-500" },
            { value: "72%", label: "of customers choose storage within 3 miles of home", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "10%", label: "of US households rent storage units", icon: <FaHome className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "$150", label: "average monthly revenue per unit", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Self Storage"
          steps={[
            { step: 1, title: "Market Analysis", description: "Analyze your local storage market, competitors, and keyword opportunities.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Unit Strategy", description: "Develop content strategy for each unit size and feature category.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Optimize site speed, schema, and mobile performance.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Creation", description: "Create unit pages, size guides, and local content.", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local Optimization", description: "Optimize GBP, build citations, and generate reviews.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, reservations, and continuously optimize.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Self Storage"
          pillars={[
            { title: "Unit Size Content", description: "Pages for each storage unit dimension", topics: ["5x5 units", "10x10 units", "10x20 units", "Large units"], icon: <FaRuler className="w-6 h-6" /> },
            { title: "Feature Content", description: "Content for storage amenities", topics: ["Climate control", "24/7 access", "Security features", "Drive-up units"], icon: "⭐" },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Neighborhood targeting", "Near me optimization", "Zip code pages"], icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Use Case Content", description: "Content for specific storage needs", topics: ["Moving storage", "Business storage", "Vehicle storage", "Seasonal storage"], icon: <FaBox className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Self Storage"
          signals={[
            { title: "Google Business Profile", description: "Optimized with storage categories, photos, and accurate unit availability", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Storage Citations", description: "Listings on SpareFoot, SelfStorage.com, and industry directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "Reviews highlighting security, cleanliness, and customer service", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city and neighborhood served", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "LocalBusiness Schema", description: "Storage facility schema with unit types and pricing", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Local Backlinks", description: "Links from moving companies, real estate agents, and local businesses", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Self Storage"
          comparisons={[
            { feature: "Rental Volume", withSEO: "Capture 3-4x more online reservations", withoutSEO: "Miss searching customers" },
            { feature: "Unit Size Visibility", withSEO: "Rank for specific unit dimensions", withoutSEO: "Invisible for size searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$50-150+ per lead from ads" },
            { feature: "Local Visibility", withSEO: "Dominate map pack and local results", withoutSEO: "Rely only on drive-by traffic" },
            { feature: "Occupancy Rate", withSEO: "Maintain 90%+ occupancy year-round", withoutSEO: "Seasonal vacancies hurt revenue" },
            { feature: "Premium Units", withSEO: "Fill climate controlled units first", withoutSEO: "Premium units sit empty" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Self Storage"
          caseStudy={{
            title: "Self Storage Facility Growth Story",
            industry: "Self Storage",
            results: [
              { metric: "Organic Traffic", value: "520%", change: "increase in 7 months" },
              { metric: "Online Rentals", value: "4x", change: "more monthly reservations" },
              { metric: "Google Rankings", value: "#1", change: "for 40+ storage keywords" },
              { metric: "Occupancy Rate", value: "97%", change: "up from 78%" }
            ],
            testimonial: "Our facility went from struggling with vacancies to having a waitlist for our climate controlled units. SEO transformed our business completely.",
            clientName: "Self Storage Facility Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Self Storage"
          customItems={[
            { icon: <FaBox className="w-6 h-6" />, title: "Storage Industry Expertise", description: "Deep understanding of how customers search for storage facilities" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of 90%+ occupancy rates for storage clients" },
            { icon: <FaRuler className="w-6 h-6" />, title: "Unit Specialists", description: "Expertise in optimizing for all unit sizes and features" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Dominate local search results in your service area" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing rentals and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your storage SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="self-storage-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/20 dark:from-slate-950 dark:via-violet-950/30 dark:to-purple-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Self Storage SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300">Storage Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-violet-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your storage facility achieve 95%+ occupancy
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-violet-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Your Free Audit Today
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <div className="grid md:grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-lg font-semibold">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-lg font-semibold">Guaranteed Results</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                <span className="text-lg font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
