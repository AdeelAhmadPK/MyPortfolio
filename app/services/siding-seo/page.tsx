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

import { FaBook, FaCalendar, FaCamera, FaChartArea, FaChartLine, FaClipboardList, FaCloudShowersHeavy, FaCog, FaDollarSign, FaEdit, FaHandshake, FaHome, FaLink, FaMapMarkerAlt, FaSearch, FaTags, FaTools, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Siding SEO Services | Local SEO for Siding Installation Contractors',
  description: 'Expert SEO services for siding contractors. Dominate local search for vinyl siding, fiber cement siding, James Hardie installation, and siding repair services. Proven siding contractor marketing strategies to generate more leads and grow your business.',
  keywords: 'siding SEO, siding contractor marketing, vinyl siding SEO, fiber cement siding marketing, James Hardie siding SEO, siding installation marketing, siding company SEO, siding replacement marketing, siding repair SEO, local SEO for siding contractors, siding near me SEO, residential siding marketing, commercial siding SEO, exterior siding contractor marketing',
  openGraph: {
    title: 'Siding SEO Services | Local SEO for Siding Installation Contractors',
    description: 'Expert SEO for siding contractors. Generate more leads for siding installation, repair, and replacement with proven siding marketing strategies.',
    type: 'website'
  }
};

export default function SidingSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Siding SEO', url: '/services/siding-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my siding company get more installation projects?',
      answer: 'Homeowners research siding options extensively before choosing a contractor. By ranking first for searches like "siding contractors near me", "vinyl siding installation", and "best siding company", you capture customers who are actively planning projects and ready to request quotes.'
    },
    {
      question: 'What siding keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: material-specific terms ("vinyl siding installation", "James Hardie siding"), project-type keywords ("siding replacement", "siding repair"), and location searches ("siding contractor [city]"). This captures customers researching materials and those ready to hire.'
    },
    {
      question: 'How important are reviews for siding contractor SEO?',
      answer: 'Extremely important! Siding projects are major investments ($10,000-$30,000+), so homeowners heavily research reviews. I implement review generation strategies that build a strong portfolio of 5-star reviews mentioning quality, timeliness, and craftsmanship.'
    },
    {
      question: 'Can you help me rank for specific siding materials?',
      answer: 'Absolutely! I create dedicated pages for vinyl siding, fiber cement (James Hardie), wood siding, metal siding, and other materials. Each page targets customers searching for specific material types and their benefits.'
    },
    {
      question: 'How do seasonal trends affect siding SEO?',
      answer: 'Siding searches peak in spring and early summer when homeowners plan exterior projects. We publish seasonal content ahead of peak periods and adjust strategies to capture demand when it is highest. Winter content focuses on storm damage and repair keywords.'
    },
    {
      question: 'What makes siding SEO different from general contractor marketing?',
      answer: 'Siding SEO requires targeting both material research phases and contractor selection phases. Homeowners spend weeks researching siding types before contacting contractors. I create content for every stage of this longer consideration journey.'
    },
    {
      question: 'How long does it take to see SEO results for siding companies?',
      answer: 'Competitive siding keywords typically take 3-6 months to rank well. However, location-specific and material-specific terms often show results within 60-90 days. Most clients see significant lead increases by month 4-5.'
    },
    {
      question: 'Do I need before/after galleries for siding SEO?',
      answer: 'Yes! Project galleries are essential for siding companies. They showcase your work quality, build trust, and can rank in Google Images. I optimize galleries with proper alt text and schema markup for maximum visibility.'
    },
    {
      question: 'How important is mobile optimization for siding contractors?',
      answer: 'Critical! Many homeowners browse siding options on mobile while looking at their own homes or driving through neighborhoods. Your site must load fast and display project galleries beautifully on all devices.'
    },
    {
      question: 'Should I create content comparing siding materials?',
      answer: 'Definitely! Comparison content like "vinyl vs fiber cement siding" captures homeowners in research mode. When they decide on a material, they will remember your helpful content and request a quote from you.'
    },
    {
      question: 'How do you optimize for "siding contractor near me" searches?',
      answer: 'I optimize your Google Business Profile with siding categories and project photos, ensure NAP consistency across directories, create location-specific pages, and build citations on home improvement directories.'
    },
    {
      question: 'Can SEO help me get insurance restoration work?',
      answer: 'Yes! Many siding projects result from storm damage. I target keywords like "storm damage siding repair" and "insurance siding replacement" to capture homeowners who need quick repairs after weather events.'
    },
    {
      question: 'How do you measure siding SEO success?',
      answer: 'We track rankings for target keywords, Google Business Profile visibility, organic traffic, quote requests, phone calls from organic search, and revenue from SEO-generated leads. Monthly reports show clear ROI.'
    },
    {
      question: 'Should I target commercial siding projects?',
      answer: 'If you serve commercial clients, absolutely! Commercial siding has less competition and higher project values. I create content targeting property managers, HOAs, and commercial building owners.'
    },
    {
      question: 'How do you handle multi-service siding companies?',
      answer: 'For companies offering siding, roofing, and windows, I create separate optimization strategies for each service while maintaining brand consistency and cross-linking between related services.'
    },
    {
      question: 'Can you help with manufacturer certification visibility?',
      answer: 'Yes! Being a certified installer (James Hardie Elite, CertainTeed Master, etc.) is a major selling point. We prominently feature certifications and target searches for certified installers in your area.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my siding company get more installation projects?',
      answer: 'Homeowners research siding options extensively before choosing a contractor. By ranking first for searches like "siding contractors near me", "vinyl siding installation", and "best siding company", you capture customers who are actively planning projects and ready to request quotes.'
    },
    {
      question: 'What siding keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: material-specific terms ("vinyl siding installation", "James Hardie siding"), project-type keywords ("siding replacement", "siding repair"), and location searches ("siding contractor [city]"). This captures customers researching materials and those ready to hire.'
    },
    {
      question: 'How long does it take to see SEO results for siding companies?',
      answer: 'Competitive siding keywords typically take 3-6 months to rank well. However, location-specific and material-specific terms often show results within 60-90 days. Most clients see significant lead increases by month 4-5.'
    },
    {
      question: 'How important are reviews for siding contractor SEO?',
      answer: 'Extremely important! Siding projects are major investments ($10,000-$30,000+), so homeowners heavily research reviews. I implement review generation strategies that build a strong portfolio of 5-star reviews mentioning quality, timeliness, and craftsmanship.'
    },
    {
      question: 'Can you help me rank for specific siding materials?',
      answer: 'Absolutely! I create dedicated pages for vinyl siding, fiber cement (James Hardie), wood siding, metal siding, and other materials. Each page targets customers searching for specific material types and their benefits.'
    },
    {
      question: 'What makes your siding SEO different from general marketing agencies?',
      answer: 'I specialize in home services SEO and understand the siding industry. We know the material keywords, seasonal patterns, and customer journey that drive qualified siding leads. Generic agencies lack this expertise.'
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
                "serviceType": "Siding SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for siding contractors. Dominate local search for siding installation, vinyl siding, and siding repair services."
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
                  <FaHome className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Siding SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Siding</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Homeowners search for siding installation and repair services when planning home improvements. Our SEO strategies help you capture these high-value leads.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,400+</div>
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
                  title="Get Your Free Siding SEO Audit"
                  subtitle="Discover how to dominate local siding searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Siding" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="siding-seo" industryIcon="🏠" />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Siding" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Siding" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Siding <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for siding contractors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Material-Specific SEO", description: "Rank for vinyl, fiber cement, wood, and metal siding searches", icon: <FaTools className="w-6 h-6" />, color: "from-teal-500 to-emerald-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for siding contractor searches in your area", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Project Gallery SEO", description: "Optimize before/after photos to rank in Google Images", icon: <FaCamera className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "Manufacturer Pages", description: "Rank for James Hardie, CertainTeed, and other brand searches", icon: <FaTags className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
                { title: "Storm Damage Keywords", description: "Capture insurance restoration and storm damage repair leads", icon: <FaCloudShowersHeavy className="w-6 h-6" />, color: "from-gray-500 to-slate-500" },
                { title: "Quote Request Optimization", description: "Convert more website visitors into quote requests", icon: <FaClipboardList className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
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
          industry="Siding"
          stats={[
            { value: "78%", label: "of homeowners research siding online before contacting contractors", icon: <FaSearch className="w-6 h-6" />, color: "from-teal-500 to-emerald-500" },
            { value: "4-6", label: "weeks average research time before requesting quotes", icon: <FaCalendar className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "89%", label: "of siding searches have local intent", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "$18K", label: "average siding project value", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Siding"
          steps={[
            { step: 1, title: "Market Analysis", description: "Analyze your local siding market, competitors, and keyword opportunities.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Material Strategy", description: "Develop content strategy for each siding material you install.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Optimize site speed, schema, and mobile performance.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Creation", description: "Create service pages, project galleries, and educational content.", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local Optimization", description: "Optimize GBP, build citations, and generate reviews.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, leads, and continuously optimize.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Siding"
          pillars={[
            { title: "Siding Material Content", description: "Comprehensive pages for each siding type", topics: ["Vinyl siding", "Fiber cement", "Wood siding", "Metal siding"], icon: <FaTools className="w-6 h-6" /> },
            { title: "Project Type Content", description: "Pages for different project types", topics: ["Full replacement", "Siding repair", "Storm damage", "New construction"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Neighborhood targeting", "Service areas", "Near me optimization"], icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Educational Content", description: "Guides that build trust and capture research traffic", topics: ["Material comparisons", "Cost guides", "Maintenance tips", "Color selection"], icon: <FaBook className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Siding"
          signals={[
            { title: "Google Business Profile", description: "Optimized with siding categories, project photos, and service areas", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Home Improvement Citations", description: "Listings on Houzz, HomeAdvisor, Angi, and contractor directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Project Reviews", description: "Reviews mentioning specific materials and project quality", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city you serve", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "Contractor Schema", description: "LocalBusiness and HomeAndConstructionBusiness schema", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Local Backlinks", description: "Links from local news, home improvement sites", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Siding"
          comparisons={[
            { feature: "Quote Request Volume", withSEO: "Capture 3-5x more online quote requests", withoutSEO: "Miss researching homeowners" },
            { feature: "Material Search Visibility", withSEO: "Rank for vinyl, Hardie, and material keywords", withoutSEO: "Invisible for material searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$100-300+ per lead from ads" },
            { feature: "Local Visibility", withSEO: "Dominate map pack and local results", withoutSEO: "Rely only on referrals" },
            { feature: "Trust Building", withSEO: "Educational content builds authority", withoutSEO: "No online credibility" },
            { feature: "Seasonal Capture", withSEO: "Rank ahead of peak seasons", withoutSEO: "Miss spring/summer surge" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Siding"
          caseStudy={{
            title: "Siding Contractor Growth Story",
            industry: "Siding",
            results: [
              { metric: "Organic Traffic", value: "420%", change: "increase in 8 months" },
              { metric: "Quote Requests", value: "3.5x", change: "more monthly requests" },
              { metric: "Google Rankings", value: "#1", change: "for 35+ keywords" },
              { metric: "Project Value", value: "$2.1M", change: "from SEO leads annually" }
            ],
            testimonial: "We used to rely entirely on referrals. Now organic search brings in 60% of our new projects, and they're often the biggest ones.",
            clientName: "Regional Siding Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Siding"
          customItems={[
            { icon: <FaHome className="w-6 h-6" />, title: "Siding Industry Expertise", description: "Deep understanding of how homeowners research siding contractors" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of 3-5x increases in quote requests for siding companies" },
            { icon: <FaTools className="w-6 h-6" />, title: "Material Specialists", description: "Expertise in vinyl, fiber cement, and specialty siding SEO" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Dominate local search results in your service area" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing leads and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="siding-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/30 to-emerald-50/20 dark:from-slate-950 dark:via-teal-950/30 dark:to-emerald-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Siding SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-teal-600 via-emerald-700 to-cyan-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">Siding Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-teal-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your siding company attract more high-value installation projects
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-teal-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
