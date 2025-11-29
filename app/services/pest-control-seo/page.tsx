import { Metadata } from 'next';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { serviceTypes } from '@/config/services';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroContactForm from '@/components/HeroContactForm';
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

import { FaBell, FaBriefcase, FaBug, FaBuilding, FaCalendar, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaHandshake, FaHome, FaLink, FaMapMarkerAlt, FaSearch, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: 'Pest Control SEO Services | Expert Local SEO for Exterminators & Pest Control Companies',
  description: 'Professional SEO services for pest control companies. Dominate local search results, attract more customers, and grow your exterminator business with proven SEO strategies. Expert pest control marketing agency.',
  keywords: 'pest control SEO, pest control SEO services, exterminator SEO, pest control marketing, exterminator marketing, pest control local SEO, pest control digital marketing, pest control company SEO, pest control website SEO',
  openGraph: {
    title: 'Pest Control SEO Services | Expert Local SEO for Exterminators',
    description: 'Professional SEO services for pest control companies. Dominate local search results and grow your business.',
    type: 'website'
  }
};

export default function PestControlSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Pest Control SEO', url: '/services/pest-control-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my pest control company get more customers?',
      answer: 'When homeowners discover pests, they search immediately for help. By ranking first for searches like "pest control near me", "exterminator [city]", and specific pest searches like "bed bug treatment", you capture customers who need urgent help and are ready to hire.'
    },
    {
      question: 'What pest control keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: pest-specific terms ("bed bug exterminator", "termite treatment"), service keywords ("pest control services", "monthly pest control"), and emergency searches ("24 hour exterminator"). This captures all types of pest control customers.'
    },
    {
      question: 'How important are reviews for pest control SEO?',
      answer: 'Extremely important! Pest control is a trust-based service. Customers want to know you will solve their problem. I implement review generation strategies that build trust through testimonials mentioning specific pests eliminated and professional service.'
    },
    {
      question: 'Can you help me rank for specific pest keywords?',
      answer: 'Absolutely! I create dedicated pages for each pest type you treat - termites, bed bugs, rodents, cockroaches, ants, and more. Each page targets customers searching for specific pest solutions in your area.'
    },
    {
      question: 'How do seasonal trends affect pest control SEO?',
      answer: 'Pest searches vary by season - ants and termites in spring, mosquitoes in summer, rodents in fall/winter. We publish seasonal content ahead of peak periods to capture demand when specific pest searches surge.'
    },
    {
      question: 'What makes pest control SEO different from general local marketing?',
      answer: 'Pest control requires targeting both emergency searches (urgent infestations) and preventive customers (ongoing pest control plans). I create strategies for both types of customers with different conversion paths.'
    },
    {
      question: 'How long does it take to see SEO results for pest control companies?',
      answer: 'Competitive pest control keywords typically take 3-6 months to rank well. However, specific pest and location terms often show results within 60-90 days. Most companies see significant lead increases by month 4-5.'
    },
    {
      question: 'Should I create content for each pest type?',
      answer: 'Yes! Customers search for specific pests like "bed bug exterminator", "termite inspection", or "rodent control". Dedicated pages for each pest type capture these targeted searches and demonstrate your expertise.'
    },
    {
      question: 'How important is mobile optimization for pest control?',
      answer: 'Critical! Many pest control searches happen when customers discover an infestation - often on mobile. Your site must load fast, show clear contact info, and make it easy to call or request service immediately.'
    },
    {
      question: 'Can SEO help me get commercial pest control accounts?',
      answer: 'Definitely! Commercial pest control has less competition and recurring revenue. I target keywords for restaurants, hotels, property management, and other businesses that need regular pest control services.'
    },
    {
      question: 'How do you optimize for "exterminator near me" searches?',
      answer: 'I optimize your Google Business Profile with pest control categories and service photos, ensure NAP consistency across directories, create location-specific pages, and build citations on home service directories.'
    },
    {
      question: 'Should I offer free inspections for SEO?',
      answer: 'Free inspections can improve conversion rates significantly. I optimize for "free pest inspection" keywords and create landing pages that convert inspection requests into paying customers.'
    },
    {
      question: 'How do you measure pest control SEO success?',
      answer: 'We track rankings for pest and location keywords, Google Business Profile visibility, organic traffic, phone calls, form submissions, and revenue from SEO-generated leads. Monthly reports show clear ROI.'
    },
    {
      question: 'Can you help with termite inspection SEO?',
      answer: 'Yes! Termite inspections are high-value searches. I create content for real estate termite inspections, wood-destroying insect reports, and termite treatment services to capture this important market segment.'
    },
    {
      question: 'How do you handle pest control service area SEO?',
      answer: 'For companies serving multiple cities, I create separate location pages for each service area. Each page is optimized for local pest searches and includes specific service area information.'
    },
    {
      question: 'What certifications should I highlight for pest control SEO?',
      answer: 'QualityPro certification, state licenses, and manufacturer certifications are essential trust signals. We prominently feature these credentials and target searches for certified pest control companies.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my pest control company get more customers?',
      answer: 'When homeowners discover pests, they search immediately for help. By ranking first for searches like "pest control near me" and "exterminator [city]", you capture customers who need urgent help and are ready to hire.'
    },
    {
      question: 'What pest control keywords should I target for maximum ROI?',
      answer: 'I target pest-specific terms ("bed bug exterminator", "termite treatment"), service keywords ("pest control services"), and emergency searches ("24 hour exterminator"). This captures all types of pest control customers.'
    },
    {
      question: 'How long does it take to see SEO results for pest control companies?',
      answer: 'Competitive pest control keywords typically take 3-6 months to rank well. However, specific pest and location terms often show results within 60-90 days. Most companies see significant lead increases by month 4-5.'
    },
    {
      question: 'How important are reviews for pest control SEO?',
      answer: 'Extremely important! Pest control is a trust-based service. Customers want to know you will solve their problem. I build trust through reviews mentioning specific pests eliminated and professional service.'
    },
    {
      question: 'Can you help me rank for specific pest keywords?',
      answer: 'Absolutely! I create dedicated pages for each pest type you treat - termites, bed bugs, rodents, cockroaches, ants, and more. Each page targets customers searching for specific pest solutions.'
    },
    {
      question: 'What makes your pest control SEO different from other agencies?',
      answer: 'I specialize in home services SEO and understand the pest control industry. We know the seasonal patterns, pest-specific keywords, and conversion tactics that drive leads. Generic agencies lack this expertise.'
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
                "serviceType": "Pest Control SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Professional SEO services for pest control companies. Dominate local search results, attract more customers, and grow your exterminator business with proven SEO strategies."
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
                  <FaBriefcase className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Pest Control SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Pest Control Company</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When pests invade, homeowners search immediately. Our SEO strategies ensure your pest control company appears first when they search for exterminator services.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">97%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,800+</div>
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
                  title="Get Your Free Pest Control SEO Audit"
                  subtitle="Discover how to dominate local pest control searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Pest Control" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="pest-control-seo" industryIcon="🐜" />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Pest Control" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Pest Control" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Pest Control <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for pest control companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Pest-Specific SEO", description: "Rank for termite, bed bug, rodent, and other specific pest searches", icon: <FaBug className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for exterminator searches in your area", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Emergency Keyword SEO", description: "Capture urgent pest infestation searches 24/7", icon: <FaBell className="w-6 h-6" />, color: "from-red-500 to-orange-500" },
                { title: "Commercial Pest SEO", description: "Target restaurants, hotels, and property management searches", icon: <FaBuilding className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "Seasonal Campaigns", description: "Rank ahead of seasonal pest surges and demand spikes", icon: <FaCalendar className="w-6 h-6" />, color: "from-orange-500 to-amber-500" },
                { title: "Conversion Optimization", description: "Turn website visitors into service appointments", icon: <FaChartArea className="w-6 h-6" />, color: "from-teal-500 to-cyan-500" }
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
          industry="Pest Control"
          stats={[
            { value: "84%", label: "of homeowners search online before calling an exterminator", icon: <FaSearch className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "91%", label: "of pest control searches have local intent", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "24hrs", label: "average decision time for pest emergencies", icon: "⏱️", color: "from-purple-500 to-pink-500" },
            { value: "$350", label: "average pest control service value", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Pest Control"
          steps={[
            { step: 1, title: "Market Analysis", description: "Analyze your local pest control market, competitors, and keyword opportunities.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Pest Strategy", description: "Develop content strategy for each pest type you treat.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Optimize site speed, schema, and mobile performance.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Creation", description: "Create pest pages, service areas, and educational content.", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local Optimization", description: "Optimize GBP, build citations, and generate reviews.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, leads, and continuously optimize.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Pest Control"
          pillars={[
            { title: "Pest Type Content", description: "Comprehensive pages for each pest", topics: ["Termites", "Bed bugs", "Rodents", "Cockroaches", "Ants"], icon: <FaBug className="w-6 h-6" /> },
            { title: "Service Content", description: "Pages for different service types", topics: ["Inspections", "Treatment", "Prevention", "Monthly plans"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Neighborhood targeting", "Near me optimization"], icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Commercial Content", description: "Content for business customers", topics: ["Restaurant pest control", "Hotel services", "Property management"], icon: <FaBuilding className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Pest Control"
          signals={[
            { title: "Google Business Profile", description: "Optimized with pest control categories, service photos, and reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Home Service Citations", description: "Listings on Angi, HomeAdvisor, and pest control directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "Reviews mentioning specific pests treated and service quality", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city you serve", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "LocalBusiness Schema", description: "Pest control service schema with proper categories", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Local Backlinks", description: "Links from local real estate, home improvement sites", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Pest Control"
          comparisons={[
            { feature: "Service Call Volume", withSEO: "Capture 4x more online service requests", withoutSEO: "Miss searching customers" },
            { feature: "Pest Visibility", withSEO: "Rank for specific pest type searches", withoutSEO: "Invisible for pest searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$50-150+ per lead from ads" },
            { feature: "Local Visibility", withSEO: "Dominate map pack and local results", withoutSEO: "Rely only on referrals" },
            { feature: "Emergency Calls", withSEO: "Capture urgent infestation searches", withoutSEO: "Miss emergency customers" },
            { feature: "Commercial Accounts", withSEO: "Attract recurring commercial clients", withoutSEO: "Miss business opportunities" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Pest Control"
          caseStudy={{
            title: "Pest Control Company Growth Story",
            industry: "Pest Control",
            results: [
              { metric: "Organic Traffic", value: "480%", change: "increase in 8 months" },
              { metric: "Service Calls", value: "4.2x", change: "more monthly appointments" },
              { metric: "Google Rankings", value: "#1", change: "for 45+ pest keywords" },
              { metric: "Revenue Growth", value: "$1.2M", change: "from SEO leads annually" }
            ],
            testimonial: "We went from struggling to fill our schedule to having a waitlist for new customers. SEO completely transformed our pest control business.",
            clientName: "Regional Pest Control Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Pest Control"
          customItems={[
            { icon: <FaBug className="w-6 h-6" />, title: "Pest Industry Expertise", description: "Deep understanding of how customers search for pest control" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of 3-4x increases in service calls for pest companies" },
            { icon: <FaBug className="w-6 h-6" />, title: "Pest Specialists", description: "Expertise in termite, bed bug, and specialty pest SEO" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Dominate local search results in your service area" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing leads and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your pest control SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="pest-control-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 dark:from-slate-950 dark:via-green-950/30 dark:to-emerald-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Pest Control SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300">Pest Control Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your pest control company attract more customers
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-green-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
