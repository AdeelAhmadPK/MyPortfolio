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

import { FaBath, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaHandshake, FaHome, FaLink, FaMapMarkerAlt, FaSearch, FaShieldAlt, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: 'Walk-In Tub Installation SEO Services | Local SEO for Accessibility Bathroom Companies',
  description: 'Expert SEO services for walk-in tub installation companies. Dominate local search for walk-in tubs, accessible bathtubs, senior bathroom solutions, therapeutic tubs, and aging-in-place bathroom modifications. Proven walk-in tub marketing strategies.',
  keywords: 'walk-in tub installation SEO, walk-in tub company marketing, accessible bathtub SEO, senior bathroom marketing, therapeutic tub SEO, aging in place marketing, ADA bathroom SEO, walk-in shower marketing, walk-in tub near me SEO, local SEO for walk-in tubs, handicap bathtub marketing, bariatric tub SEO, hydrotherapy tub marketing, elderly bathroom SEO',
  openGraph: {
    title: 'Walk-In Tub Installation SEO Services | Local SEO for Accessibility Bathroom Companies',
    description: 'Expert SEO for walk-in tub companies. Attract senior customers and grow accessibility bathroom leads with proven walk-in tub marketing strategies.',
    type: 'website'
  }
};

export default function WalkInTubsInstallationSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Walk-In Tubs SEO', url: '/services/walk-in-tubs-installation-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my walk-in tub company get more customers?',
      answer: 'Seniors and their families research walk-in tubs extensively before purchasing. By ranking first for searches like "walk-in tubs near me", "walk-in bathtub installation", and "senior bathroom safety", you capture customers who are actively planning to improve their bathroom accessibility.'
    },
    {
      question: 'What walk-in tub keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: product terms ("walk-in tub with jets", "wheelchair accessible tub"), safety keywords ("bathroom safety for seniors", "handicap tub"), and location searches ("walk-in tub installation [city]"). This captures customers at every stage of their decision.'
    },
    {
      question: 'How important is trust building for walk-in tub SEO?',
      answer: 'Essential! Walk-in tub customers are often seniors or their concerned family members. Content about safety certifications, installation warranties, and customer testimonials builds the trust needed for these considered purchases.'
    },
    {
      question: 'Can you help me rank for specific walk-in tub features?',
      answer: 'Absolutely! I create dedicated pages for hydrotherapy tubs, low-threshold tubs, wheelchair accessible options, and specific brands. Each page targets customers searching for specific features and benefits.'
    },
    {
      question: 'How do adult children searching for their parents affect our strategy?',
      answer: 'Many walk-in tub searches are done by adult children researching for aging parents. I create content that addresses both senior concerns and family member research patterns, capturing this important segment.'
    },
    {
      question: 'What makes walk-in tub SEO different from general bathroom remodeling?',
      answer: 'Walk-in tub SEO targets a specific demographic with unique concerns - safety, accessibility, and aging in place. The content must address mobility issues, Medicare questions, and build trust with a cautious audience.'
    },
    {
      question: 'How long does it take to see SEO results for walk-in tub companies?',
      answer: 'Walk-in tub keywords typically take 3-6 months to rank well. Location and feature-specific terms often show results within 60-90 days. Most companies see significant lead increases by month 4-5.'
    },
    {
      question: 'Should I create content about Medicare and financing?',
      answer: 'Yes! Many customers search for "Medicare walk-in tub coverage" and "walk-in tub financing". Content addressing these concerns captures high-intent customers who are ready to buy if they can afford it.'
    },
    {
      question: 'How important is mobile optimization for walk-in tub searches?',
      answer: 'Very important! While seniors may research on desktop, their adult children often search on mobile. Your site must be accessible with large text, easy navigation, and click-to-call functionality.'
    },
    {
      question: 'Can SEO help me compete with national walk-in tub brands?',
      answer: 'Definitely! Local SEO helps you compete with national brands by emphasizing local installation expertise, personalized service, and community trust. We position you as the local expert alternative.'
    },
    {
      question: 'How do you optimize for "walk-in tub installation near me" searches?',
      answer: 'I optimize your Google Business Profile with walk-in tub categories, customer reviews, and before/after photos. Combined with location pages and senior-focused citations, you dominate local search.'
    },
    {
      question: 'Should I target bariatric and wheelchair accessible searches?',
      answer: 'If you offer these options, absolutely! Bariatric tubs and wheelchair accessible installations are specialized searches with less competition and higher project values.'
    },
    {
      question: 'How do you measure walk-in tub SEO success?',
      answer: 'We track rankings for target keywords, Google Business Profile visibility, organic traffic, consultation requests, and revenue from SEO-generated installations. Monthly reports show clear ROI.'
    },
    {
      question: 'Can you help with shower-to-tub conversion searches?',
      answer: 'Yes! Many seniors search for converting existing showers to walk-in tubs. I create content targeting this specific project type and the unique considerations involved.'
    },
    {
      question: 'How do you handle service area SEO for walk-in tub companies?',
      answer: 'For companies serving multiple cities, I create separate location pages for each service area. Each page is optimized for local walk-in tub searches with specific community information.'
    },
    {
      question: 'What certifications should I highlight for walk-in tub SEO?',
      answer: 'ADA compliance expertise, manufacturer certifications, contractor licenses, and accessibility renovation credentials are essential. We prominently feature these to build trust with cautious customers.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my walk-in tub company get more customers?',
      answer: 'Seniors and their families research walk-in tubs extensively. By ranking first for searches like "walk-in tubs near me" and "senior bathroom safety", you capture customers actively planning accessibility improvements.'
    },
    {
      question: 'What walk-in tub keywords should I target?',
      answer: 'I target product terms ("walk-in tub with jets"), safety keywords ("bathroom safety for seniors"), and location searches ("walk-in tub installation [city]"). This captures customers at every decision stage.'
    },
    {
      question: 'How long does it take to see SEO results for walk-in tub companies?',
      answer: 'Walk-in tub keywords typically take 3-6 months to rank well. Location and feature-specific terms often show results within 60-90 days. Most companies see significant lead increases by month 4-5.'
    },
    {
      question: 'How important is trust building for walk-in tub SEO?',
      answer: 'Essential! Walk-in tub customers are often seniors or concerned family members. Content about safety certifications, warranties, and testimonials builds the trust needed for these purchases.'
    },
    {
      question: 'Can you help me rank for specific walk-in tub features?',
      answer: 'Absolutely! I create dedicated pages for hydrotherapy tubs, low-threshold options, wheelchair accessible tubs, and specific brands targeting customers searching for specific features.'
    },
    {
      question: 'What makes your walk-in tub SEO different?',
      answer: 'I specialize in senior-focused marketing and understand the walk-in tub industry. We know the keywords, trust signals, and conversion tactics that resonate with this audience. Generic agencies lack this expertise.'
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
                "serviceType": "Walk-in Tubs Installation SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for walk-in tub installation companies. Dominate local search for walk-in bathtub installation and accessible bathroom solutions."
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
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Walk-In Tubs SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Walk-In Tubs Installation</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Seniors and families search for walk-in tubs for safety and accessibility. Our SEO strategies help your installation business reach these qualified buyers.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,200+</div>
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
                  title="Get Your Free Walk-In Tubs SEO Audit"
                  subtitle="Discover how to dominate local searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Walk-In Tub Installation" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="walk-in-tubs-installation-seo" industryIcon="🛁" />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Walk-In Tub Installation" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Walk-In Tub Installation" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Walk-In Tub <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for walk-in tub installation companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Senior-Focused SEO", description: "Target seniors and adult children searching for accessibility solutions", icon: "👴", color: "from-cyan-500 to-teal-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for walk-in tub installation searches", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Feature-Specific SEO", description: "Rank for hydrotherapy, wheelchair accessible, and specialty tubs", icon: <FaBath className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "Trust Building Content", description: "Create content that builds confidence with cautious customers", icon: <FaHandshake className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
                { title: "Financing/Medicare SEO", description: "Capture searches for walk-in tub funding options", icon: <FaDollarSign className="w-6 h-6" />, color: "from-yellow-500 to-amber-500" },
                { title: "Conversion Optimization", description: "Turn website visitors into home consultations", icon: <FaChartArea className="w-6 h-6" />, color: "from-teal-500 to-cyan-500" }
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
          industry="Walk-In Tub Installation"
          stats={[
            { value: "10K+", label: "daily searches for walk-in tub solutions", icon: <FaSearch className="w-6 h-6" />, color: "from-cyan-500 to-teal-500" },
            { value: "68%", label: "of searches done by adult children for parents", icon: "👨‍👩‍👧", color: "from-blue-500 to-cyan-500" },
            { value: "$8K", label: "average walk-in tub installation value", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "93%", label: "of walk-in tub searches have local intent", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Walk-In Tub Installation"
          steps={[
            { step: 1, title: "Market Analysis", description: "Analyze your local walk-in tub market and senior demographics.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Trust Strategy", description: "Develop content strategy that builds confidence with seniors.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Ensure accessibility, fast loading, and proper schema.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Creation", description: "Create product pages, safety guides, and financing content.", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local Optimization", description: "Optimize GBP, build senior-focused citations, and generate reviews.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, consultations, and continuously optimize.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Walk-In Tub Installation"
          pillars={[
            { title: "Product Content", description: "Pages for each tub type and feature", topics: ["Hydrotherapy tubs", "Low-threshold tubs", "Wheelchair accessible", "Brand comparisons"], icon: <FaBath className="w-6 h-6" /> },
            { title: "Safety Content", description: "Content addressing safety concerns", topics: ["Fall prevention", "Bathroom safety", "Aging in place", "ADA compliance"], icon: <FaShieldAlt className="w-6 h-6" /> },
            { title: "Financing Content", description: "Content about payment options", topics: ["Medicare coverage", "Financing options", "VA benefits", "Insurance questions"], icon: <FaDollarSign className="w-6 h-6" /> },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Senior community targeting", "Service areas", "Near me optimization"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Walk-In Tub Installation"
          signals={[
            { title: "Google Business Profile", description: "Optimized with walk-in tub categories, installation photos, and reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Senior Service Citations", description: "Listings on AARP, senior directories, and home modification sites", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "Reviews from seniors highlighting safety, professionalism, and results", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city with local testimonials", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "LocalBusiness Schema", description: "Walk-in tub installation schema with proper categories", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Senior Community Links", description: "Links from senior centers, care facilities, and health resources", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Walk-In Tub Installation"
          comparisons={[
            { feature: "Consultation Volume", withSEO: "Capture 3x more home consultations", withoutSEO: "Miss searching seniors" },
            { feature: "Feature Visibility", withSEO: "Rank for hydrotherapy and specialty searches", withoutSEO: "Invisible for feature searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$200-500+ per walk-in tub lead" },
            { feature: "Local Visibility", withSEO: "Dominate map pack for accessibility", withoutSEO: "National brands dominate" },
            { feature: "Trust Building", withSEO: "Safety content builds senior trust", withoutSEO: "No online credibility" },
            { feature: "Family Reach", withSEO: "Capture adult children researching for parents", withoutSEO: "Miss family decision-makers" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Walk-In Tub Installation"
          caseStudy={{
            title: "Walk-In Tub Company Growth Story",
            industry: "Walk-In Tub Installation",
            results: [
              { metric: "Organic Traffic", value: "420%", change: "increase in 7 months" },
              { metric: "Consultations", value: "3.5x", change: "more in-home appointments" },
              { metric: "Google Rankings", value: "#1", change: "for 35+ walk-in tub keywords" },
              { metric: "Revenue Growth", value: "$1.1M", change: "from SEO leads annually" }
            ],
            testimonial: "National brands used to dominate our market. Now we're the local choice for walk-in tub installation. Families trust us because they find us first and see our reviews.",
            clientName: "Walk-In Tub Installation Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Walk-In Tub Installation"
          customItems={[
            { icon: <FaBath className="w-6 h-6" />, title: "Walk-In Tub Expertise", description: "Deep understanding of how seniors search for accessibility solutions" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of 3x+ increases in consultations for walk-in tub companies" },
            { icon: "👴", title: "Senior Marketing", description: "Expertise in trust-building content for senior audiences" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Dominate local search and compete with national brands" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing leads and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your walk-in tub SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="walk-in-tubs-installation-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/20 dark:from-slate-950 dark:via-cyan-950/30 dark:to-teal-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Walk-In Tub SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-cyan-600 via-teal-700 to-sky-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-300">Walk-In Tub Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your walk-in tub company attract more senior customers
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-cyan-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
