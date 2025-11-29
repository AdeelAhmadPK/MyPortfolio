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

import { FaCalendar, FaCamera, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLink, FaMap, FaMapMarkerAlt, FaPalette, FaSearch, FaTools, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Kitchen Remodeling SEO Services | Local SEO for Kitchen Renovation Contractors',
  description: 'Expert SEO services for kitchen remodeling contractors. Dominate local search for kitchen renovation, cabinet installation, countertop replacement, and kitchen design services. Proven kitchen remodeling marketing strategies to grow high-value renovation leads.',
  keywords: 'kitchen remodeling SEO, kitchen renovation marketing, kitchen contractor SEO, cabinet installation SEO, countertop replacement marketing, kitchen design SEO, kitchen remodeler lead generation, kitchen renovation near me SEO, local SEO for kitchen contractors, kitchen remodeling digital marketing, custom kitchen marketing, modern kitchen renovation SEO, kitchen cabinet refacing SEO',
  openGraph: {
    title: 'Kitchen Remodeling SEO Services | Local SEO for Kitchen Renovation Contractors',
    description: 'Expert SEO for kitchen remodeling contractors. Dominate local search and grow high-value kitchen renovation leads with proven marketing strategies.',
    type: 'website'
  }
};

export default function KitchenRemodelingSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Kitchen Remodeling SEO', url: '/services/kitchen-remodeling-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my kitchen remodeling company get more projects?',
      answer: 'Homeowners spend months researching kitchen remodels. By ranking first for searches like "kitchen remodeling near me", "kitchen renovation contractor", and "modern kitchen designs", you capture customers who are actively planning renovations and ready to request consultations.'
    },
    {
      question: 'What kitchen remodeling keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: project-type terms ("complete kitchen remodel", "kitchen cabinet refacing"), style keywords ("modern kitchen renovation", "farmhouse kitchen"), and location searches ("kitchen remodeling [city]"). This captures customers at every stage of planning.'
    },
    {
      question: 'How important are project galleries for kitchen remodeling SEO?',
      answer: 'Essential! Kitchen remodeling is a visual decision. I optimize your portfolio with before/after galleries, proper alt text, and schema markup. These photos rank in Google Images and showcase your craftsmanship to potential clients.'
    },
    {
      question: 'Can you help me rank for specific kitchen style searches?',
      answer: 'Absolutely! I create dedicated pages for modern kitchens, traditional designs, transitional styles, farmhouse kitchens, and more. Each page targets customers searching for specific aesthetics in your area.'
    },
    {
      question: 'How long is the research phase for kitchen remodeling customers?',
      answer: 'Kitchen remodels have one of the longest research phases - typically 6-12 months. I create content that captures customers early in their journey and nurtures them through design inspiration to contractor selection.'
    },
    {
      question: 'What makes kitchen remodeling SEO different from general contractor marketing?',
      answer: 'Kitchen SEO requires targeting both design inspiration and contractor searches. Customers spend months on Pinterest and Houzz before looking for contractors. I optimize for the entire customer journey.'
    },
    {
      question: 'How long does it take to see SEO results for kitchen remodeling?',
      answer: 'Competitive kitchen remodeling keywords typically take 4-8 months to rank well due to high competition. However, specific style and location terms often show results within 90-120 days. Most companies see significant project inquiries by month 5-6.'
    },
    {
      question: 'Should I create content for different budget levels?',
      answer: 'Yes! Customers search for "budget kitchen remodel", "mid-range kitchen renovation", and "luxury kitchen design". Content for each budget level captures customers with different investment capacities and project scopes.'
    },
    {
      question: 'How important is Houzz and Pinterest for kitchen SEO?',
      answer: 'Very important! Many kitchen customers start on visual platforms. I optimize your Houzz profile, create Pinterest-worthy content, and ensure your website captures traffic from these design-focused platforms.'
    },
    {
      question: 'Can SEO help me get high-end kitchen projects?',
      answer: 'Definitely! I target luxury kitchen keywords and create content that positions you as a premium contractor. High-end customers search differently and I optimize for their specific needs and expectations.'
    },
    {
      question: 'How do you optimize for "kitchen contractor near me" searches?',
      answer: 'I optimize your Google Business Profile with kitchen remodeling categories, portfolio photos, and reviews. Combined with location-specific pages and citations on home improvement directories, you dominate local search.'
    },
    {
      question: 'Should I target commercial kitchen remodeling?',
      answer: 'If you serve restaurants and commercial clients, absolutely! Commercial kitchen remodeling has different keywords and higher project values. I create content targeting restaurant owners and property managers.'
    },
    {
      question: 'How do you measure kitchen remodeling SEO success?',
      answer: 'We track rankings for target keywords, Google Business Profile visibility, organic traffic, consultation requests, and revenue from SEO-generated projects. Monthly reports show clear ROI and project pipeline impact.'
    },
    {
      question: 'Can you help with kitchen appliance and material searches?',
      answer: 'Yes! I create content about popular appliance brands, countertop materials, and cabinet options. This educational content captures customers researching specific products and positions you as an expert.'
    },
    {
      question: 'How do you handle multi-city kitchen remodeling SEO?',
      answer: 'For contractors serving multiple areas, I create separate location pages for each city. Each page is optimized for local kitchen remodeling searches with specific portfolio examples from that area.'
    },
    {
      question: 'What certifications should I highlight for kitchen remodeling SEO?',
      answer: 'NKBA certification, manufacturer certifications, and contractor licenses are essential trust signals. We prominently feature these credentials and target searches for certified kitchen designers and contractors.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my kitchen remodeling company get more projects?',
      answer: 'Homeowners spend months researching kitchen remodels. By ranking first for searches like "kitchen remodeling near me" and "kitchen renovation contractor", you capture customers who are actively planning renovations.'
    },
    {
      question: 'What kitchen remodeling keywords should I target?',
      answer: 'I target project-type terms ("complete kitchen remodel"), style keywords ("modern kitchen renovation"), and location searches ("kitchen remodeling [city]"). This captures customers at every planning stage.'
    },
    {
      question: 'How long does it take to see SEO results for kitchen remodeling?',
      answer: 'Competitive kitchen remodeling keywords typically take 4-8 months to rank well. However, specific style and location terms often show results within 90-120 days. Most companies see significant inquiries by month 5-6.'
    },
    {
      question: 'How important are project galleries for kitchen SEO?',
      answer: 'Essential! Kitchen remodeling is a visual decision. I optimize your portfolio with before/after galleries, proper alt text, and schema markup to showcase your craftsmanship and rank in image searches.'
    },
    {
      question: 'Can you help me rank for specific kitchen style searches?',
      answer: 'Absolutely! I create dedicated pages for modern, traditional, transitional, and farmhouse kitchens. Each page targets customers searching for specific aesthetics in your area.'
    },
    {
      question: 'What makes your kitchen remodeling SEO different?',
      answer: 'I specialize in home improvement SEO and understand the kitchen industry. We know the design keywords, style trends, and conversion tactics that drive project inquiries. Generic agencies lack this expertise.'
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
                "serviceType": "Kitchen Remodeling SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for kitchen remodeling contractors. Dominate local search for kitchen renovation, cabinet installation, and countertop services."
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
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Kitchen Remodeling SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Kitchen Remodeling</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Homeowners search for kitchen remodeling when planning upgrades. Our SEO strategies ensure your business appears first for these high-value renovation projects.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">1,800+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">6x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Kitchen Remodeling SEO Audit"
                  subtitle="Discover how to dominate local renovation searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Kitchen Remodeling" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="kitchen-remodeling-seo" industryIcon="🍳" />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Kitchen Remodeling" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Kitchen Remodeling" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Kitchen Remodeling <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for kitchen remodeling contractors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Style-Specific SEO", description: "Rank for modern, traditional, and farmhouse kitchen searches", icon: <FaPalette className="w-6 h-6" />, color: "from-amber-500 to-orange-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for kitchen contractor searches", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Portfolio SEO", description: "Optimize before/after galleries for image search visibility", icon: <FaCamera className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "Houzz Integration", description: "Optimize your Houzz profile and capture design platform traffic", icon: <FaHome className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
                { title: "Luxury Kitchen SEO", description: "Target high-end kitchen renovation customers", icon: "✨", color: "from-yellow-500 to-amber-500" },
                { title: "Conversion Optimization", description: "Turn website visitors into consultation requests", icon: <FaChartArea className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
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
          industry="Kitchen Remodeling"
          stats={[
            { value: "91%", label: "of homeowners research kitchen remodeling online", icon: <FaSearch className="w-6 h-6" />, color: "from-amber-500 to-orange-500" },
            { value: "8mo", label: "average research time before hiring a contractor", icon: <FaCalendar className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "$35K", label: "average kitchen remodeling project value", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "87%", label: "of kitchen searches have local intent", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Kitchen Remodeling"
          steps={[
            { step: 1, title: "Market Analysis", description: "Analyze your local kitchen remodeling market and competitor landscape.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Style Strategy", description: "Develop content strategy for each kitchen style you specialize in.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Optimize site speed, image loading, and schema markup.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Portfolio Optimization", description: "Optimize galleries with proper SEO and showcase your best work.", icon: <FaCamera className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local Domination", description: "Optimize GBP, Houzz, and build home improvement citations.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, consultations, and continuously optimize.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Kitchen Remodeling"
          pillars={[
            { title: "Style Content", description: "Pages for each kitchen design style", topics: ["Modern kitchens", "Traditional designs", "Farmhouse style", "Transitional kitchens"], icon: <FaPalette className="w-6 h-6" /> },
            { title: "Project Type Content", description: "Content for different project scopes", topics: ["Full remodels", "Cabinet refacing", "Countertop replacement", "Layout changes"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Material Content", description: "Educational content about materials", topics: ["Countertop options", "Cabinet materials", "Flooring choices", "Appliance guides"], icon: <FaTools className="w-6 h-6" /> },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Neighborhood targeting", "Service areas", "Near me optimization"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Kitchen Remodeling"
          signals={[
            { title: "Google Business Profile", description: "Optimized with kitchen categories, portfolio photos, and reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Houzz Profile", description: "Optimized Houzz presence with portfolio and reviews", importance: "Critical", icon: <FaHome className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "Reviews mentioning design quality, craftsmanship, and project management", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city you serve", importance: "High", icon: <FaMap className="w-6 h-6" /> },
            { title: "LocalBusiness Schema", description: "Kitchen remodeling service schema with proper categories", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Design Platform Links", description: "Links from Houzz, Pinterest, and home improvement sites", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Kitchen Remodeling"
          comparisons={[
            { feature: "Consultation Volume", withSEO: "Capture 5x more design consultations", withoutSEO: "Miss researching homeowners" },
            { feature: "Style Visibility", withSEO: "Rank for modern, farmhouse, and style searches", withoutSEO: "Invisible for style searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$150-400+ per lead from ads" },
            { feature: "Local Visibility", withSEO: "Dominate map pack and local results", withoutSEO: "Rely only on referrals" },
            { feature: "Portfolio Impact", withSEO: "Photos rank in Google Images", withoutSEO: "Portfolio unseen" },
            { feature: "Luxury Projects", withSEO: "Attract high-end renovation clients", withoutSEO: "Miss premium market" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Kitchen Remodeling"
          caseStudy={{
            title: "Kitchen Remodeling Company Growth Story",
            industry: "Kitchen Remodeling",
            results: [
              { metric: "Organic Traffic", value: "580%", change: "increase in 10 months" },
              { metric: "Consultations", value: "5x", change: "more monthly design meetings" },
              { metric: "Google Rankings", value: "#1", change: "for 50+ kitchen keywords" },
              { metric: "Project Value", value: "$2.8M", change: "from SEO leads annually" }
            ],
            testimonial: "We went from competing on price to being the premium choice. SEO brings us clients who value quality and are willing to invest in their dream kitchens.",
            clientName: "Kitchen Remodeling Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Kitchen Remodeling"
          customItems={[
            { icon: "🍳", title: "Kitchen Industry Expertise", description: "Deep understanding of how homeowners search for kitchen contractors" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of 4-5x increases in consultations for kitchen companies" },
            { icon: <FaPalette className="w-6 h-6" />, title: "Style Specialists", description: "Expertise in modern, traditional, and specialty kitchen SEO" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Dominate local search results in your service area" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing leads and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your kitchen remodeling SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="kitchen-remodeling-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 dark:from-slate-950 dark:via-amber-950/30 dark:to-orange-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Kitchen Remodeling SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-amber-600 via-orange-700 to-yellow-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300">Kitchen Remodeling Search?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your kitchen remodeling company attract more high-value projects
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-amber-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
