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

import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Appliance Repair SEO Services | Local SEO for Appliance Repair Companies',
  description: 'Expert SEO services for appliance repair businesses. Dominate local search for refrigerator repair, washer dryer repair, dishwasher repair, and oven repair services. Proven appliance repair marketing strategies to capture more emergency service calls.',
  keywords: 'appliance repair SEO, appliance repair marketing, refrigerator repair SEO, washer dryer repair marketing, dishwasher repair SEO, oven repair marketing, appliance company SEO, appliance technician marketing, local SEO for appliance repair, appliance repair near me SEO, home appliance repair marketing, kitchen appliance SEO, laundry appliance repair marketing, appliance lead generation',
  openGraph: {
    title: 'Appliance Repair SEO Services | Local SEO for Appliance Repair Companies',
    description: 'Expert SEO for appliance repair companies. Capture more service calls with proven appliance repair marketing strategies.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Repair SEO Services | Local SEO for Appliance Repair Companies',
    description: 'Expert SEO for appliance repair companies. Capture more service calls with proven marketing strategies.'
  }
};

export default function ApplianceRepairSEOPage() {
  const industry = industries.find(i => i.slug === 'appliance-repair-seo');
  
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Appliance Repair SEO', url: '/services/appliance-repair-seo' }
  ];

  // Get all locations for display
  const allLocations = countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.map(area => ({
        country,
        city,
        area
      }))
    )
  );

  // SEO Framework FAQs (15+ comprehensive questions)
  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my appliance repair business compete with big chains?',
      answer: 'Local SEO levels the playing field. While big chains have brand recognition, local SEO helps independent appliance repair businesses dominate neighborhood searches. I optimize for hyper-local keywords like "appliance repair in [your area]" and build strong local citations that help you outrank larger competitors in your service area.'
    },
    {
      question: 'What appliance repair keywords should I target?',
      answer: 'I target a mix of urgent problem-based keywords ("refrigerator not cooling", "washer won\'t drain"), brand-specific searches ("Samsung appliance repair"), and location-based queries ("appliance repair near me"). This strategy captures customers at different stages of their search journey.'
    },
    {
      question: 'How important are reviews for appliance repair SEO?',
      answer: 'Extremely important! Reviews are a major ranking factor for local SEO. I help you generate more positive reviews by creating review request systems, responding professionally to all reviews, and showcasing testimonials on your website. A strong review profile (4.5+ stars with 50+ reviews) significantly boosts your local rankings.'
    },
    {
      question: 'Can you help me rank for specific appliance brands?',
      answer: 'Yes! I create dedicated service pages for major brands (Samsung, Whirlpool, LG, GE, etc.) and optimize them for brand-specific searches. This helps you capture customers searching for "Samsung refrigerator repair" or "Whirlpool washer service".'
    },
    {
      question: 'How do you handle emergency appliance repair SEO?',
      answer: 'I optimize for urgent search terms like "appliance repair near me now", "same-day appliance repair", and "emergency refrigerator repair". We also ensure your Google Business Profile shows your availability, response time, and emergency service offerings.'
    },
    {
      question: 'What makes appliance repair SEO different?',
      answer: 'Appliance repair SEO requires targeting both problem-based searches (customers describing their issue) and service-based searches (customers looking for repair services). I create content that answers common appliance problems while also optimizing for local service searches.'
    },
    {
      question: 'How long does it take to see SEO results for appliance repair?',
      answer: 'Most clients see initial improvements within 30-60 days with significant results by 90 days. Emergency and urgent repair keywords often show faster results, while competitive brand terms may take 3-6 months to dominate.'
    },
    {
      question: 'Do I need separate pages for each appliance type?',
      answer: 'Yes! Creating dedicated pages for refrigerator repair, washer repair, dryer repair, dishwasher repair, etc., helps you rank for specific appliance searches and provides better user experience for customers looking for specialized services.'
    },
    {
      question: 'How do seasonal trends affect appliance repair SEO?',
      answer: 'Appliance repair has seasonal spikes - AC repair peaks in summer, heating appliances in winter, refrigerators year-round. We adjust your SEO strategy seasonally to capture peak demand periods and maintain visibility year-round.'
    },
    {
      question: 'Should I create content about DIY appliance fixes?',
      answer: 'Yes! DIY troubleshooting content attracts early-stage customers researching their problem. When DIY doesn\'t work, they\'ll remember your helpful site and call you. We balance educational content with clear CTAs for professional service.'
    },
    {
      question: 'How important is mobile optimization for appliance repair?',
      answer: 'Critical! Over 70% of appliance repair searches happen on mobile devices, often from people standing in front of their broken appliance. Mobile-first design, fast loading, and click-to-call buttons are essential.'
    },
    {
      question: 'What role do before/after photos play in SEO?',
      answer: 'Before/after photos boost engagement, increase time on site, and can rank in Google Images. They build trust and provide social proof, indirectly improving your SEO through better user signals and lower bounce rates.'
    },
    {
      question: 'How do you optimize for "near me" searches?',
      answer: 'I optimize your Google Business Profile, ensure NAP consistency across directories, create location-specific pages, use local schema markup, and build citations on local appliance repair directories to dominate "near me" searches.'
    },
    {
      question: 'Should I target commercial appliance repair keywords?',
      answer: 'If you serve commercial clients, absolutely! Commercial appliance repair has less competition and higher profit margins. I create separate pages targeting restaurant equipment, commercial laundry, and industrial appliance repair.'
    },
    {
      question: 'How do you measure appliance repair SEO success?',
      answer: 'We track local rankings, Google Business Profile views/calls, organic website traffic, form submissions, phone calls from organic search, and most importantly, revenue from SEO-generated leads. You\'ll get detailed monthly reports showing ROI.'
    },
    {
      question: 'Can SEO help with warranty repair services?',
      answer: 'Yes! Many customers search for authorized warranty service centers. We can optimize for brand-specific warranty keywords and ensure your authorized service credentials are prominently displayed and properly structured for search engines.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can SEO help my appliance repair business compete with big chains?',
      answer: 'Local SEO levels the playing field. While big chains have brand recognition, local SEO helps independent appliance repair businesses dominate neighborhood searches. I optimize for hyper-local keywords like "appliance repair in [your area]" and build strong local citations that help you outrank larger competitors in your service area.'
    },
    {
      question: 'What appliance repair keywords should I target?',
      answer: 'I target a mix of urgent problem-based keywords ("refrigerator not cooling", "washer won\'t drain"), brand-specific searches ("Samsung appliance repair"), and location-based queries ("appliance repair near me"). This strategy captures customers at different stages of their search journey, from problem discovery to finding a local repair service.'
    },
    {
      question: 'How important are reviews for appliance repair SEO?',
      answer: 'Extremely important! Reviews are a major ranking factor for local SEO. I help you generate more positive reviews by creating review request systems, responding professionally to all reviews, and showcasing testimonials on your website. A strong review profile (4.5+ stars with 50+ reviews) significantly boosts your local rankings.'
    },
    {
      question: 'Can you help me rank for specific appliance brands?',
      answer: 'Yes! I create dedicated service pages for major brands (Samsung, Whirlpool, LG, GE, etc.) and optimize them for brand-specific searches. This helps you capture customers searching for "Samsung refrigerator repair" or "Whirlpool washer service", which often have less competition than generic appliance repair terms.'
    },
    {
      question: 'How do you handle emergency appliance repair SEO?',
      answer: 'I optimize for urgent search terms like "appliance repair near me now", "same-day appliance repair", and "emergency refrigerator repair". We also ensure your Google Business Profile shows your availability, response time, and emergency service offerings. This helps you capture customers who need immediate service.'
    },
    {
      question: 'What makes appliance repair SEO different from other service businesses?',
      answer: 'Appliance repair SEO requires targeting both problem-based searches (customers describing their issue) and service-based searches (customers looking for repair services). I create content that answers common appliance problems while also optimizing for local service searches. This dual approach captures customers at every stage of their journey.'
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
                "serviceType": "Appliance Repair SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for appliance repair businesses. Dominate local search for refrigerator repair, washer dryer repair, dishwasher repair, and oven repair services."
              }
            ])
          }}
        />
        
        {/* Hero Section - Aesthetic Redesign with Modern Background */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Enhanced Animated background with grid pattern and gradients */}
          <div className="absolute inset-0">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            
            {/* Multiple gradient orbs for depth - more vibrant */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
            
            {/* Accent shapes - more visible */}
            <div className="absolute top-20 left-10 w-20 h-20 border border-blue-400/30 rounded-lg rotate-45 animate-float" />
            <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-cyan-400/30 rounded-full animate-float animation-delay-2000" />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/15 rounded-lg rotate-12 animate-float animation-delay-4000" />
          </div>

          {/* Noise texture overlay for depth */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Appliance Repair SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Appliance Repair</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When customers need urgent appliance repairs, they search <strong className="text-cyan-300 font-bold">"refrigerator repair near me"</strong> or <strong className="text-blue-300 font-bold">"washer not working"</strong>. 
                  Our specialized SEO strategies ensure your appliance repair business appears <strong className="text-white font-bold">first</strong> in local search results.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
                    <div className="text-sm text-slate-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">1,732+</div>
                    <div className="text-sm text-slate-400">Rankings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">5x</div>
                    <div className="text-sm text-slate-400">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Appliance Repair SEO Audit"
                  subtitle="Discover how to dominate local appliance repair searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Appliance Repair" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Appliance Repair" />

        {/* Section 6: CMS/Services Overview Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 dark:border-green-400/20 mb-6">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Appliance Repair <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for appliance repair businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Brand-Specific Keyword Targeting",
                  description: "Rank for searches like 'Samsung refrigerator repair', 'Whirlpool washer repair', and 'LG dryer service' to capture brand-specific customers",
                  icon: <FaTags className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Emergency Service Optimization",
                  description: "Target urgent searches like 'appliance repair near me now' and 'same-day appliance repair' to capture emergency service calls",
                  icon: <FaBell className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Service Area Pages",
                  description: "Create location-specific pages for each area you serve, targeting 'appliance repair in [neighborhood]' searches",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Appliance-Specific Content",
                  description: "Create detailed guides for fixing common issues (refrigerator not cooling, dishwasher leaking) that rank for problem-based searches",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Google Business Profile Optimization",
                  description: "Optimize your GBP with service categories, service areas, before/after photos, and customer testimonials",
                  icon: <FaMap className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Local Citation Building",
                  description: "Build citations on appliance repair directories, home service platforms, and local business listings",
                  icon: <FaLink className="w-6 h-6" />,
                  color: "from-teal-500 to-cyan-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Industry Statistics */}
        <IndustryStats 
          industry="Appliance Repair"
          stats={[
            { value: "87%", label: "of consumers search online for local appliance repair services", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "76%", label: "of local searches result in a same-day service call", icon: <FaPhoneAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "92%", label: "of customers read reviews before choosing a repair service", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "3.8x", label: "higher conversion rate from organic search vs paid ads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My process */}
        <ProcessTimeline 
          industry="Appliance Repair"
          steps={[
            { step: 1, title: "Appliance Repair SEO Audit", description: "We analyze your current online presence, local rankings, competitor landscape, and identify opportunities to capture more emergency repair searches.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Keyword & Content Strategy", description: "We map out target keywords including brand-specific terms, problem-based queries, and location modifiers that drive qualified appliance repair leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical & GBP Optimization", description: "I optimize your website speed, implement appliance repair schema markup, and fully optimize your Google Business Profile for local visibility.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Service & Location Pages", description: "I create optimized pages for each appliance type, brand, and service area to capture specific search intent.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Citation & Review Strategy", description: "I build citations on appliance repair directories and implement review generation systems to boost your local authority.", icon: "⭐", duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "We track rankings, calls, and conversions, continuously optimizing to capture more emergency and scheduled repair opportunities.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Appliance Repair"
          pillars={[
            { title: "Appliance Type Content", description: "Comprehensive pages for refrigerators, washers, dryers, dishwashers, ovens, and more", topics: ["Refrigerator repair", "Washer/dryer repair", "Dishwasher service", "Oven & range repair"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Brand Authority Content", description: "Dedicated pages for major appliance brands to capture brand-specific searches", topics: ["Samsung repair", "LG appliance service", "Whirlpool technicians", "GE appliance repair"], icon: <FaTags className="w-6 h-6" /> },
            { title: "Problem-Solution Content", description: "Troubleshooting guides that capture customers researching their appliance issues", topics: ["Not cooling issues", "Leaking problems", "Strange noises", "Won't start guides"], icon: <FaLightbulb className="w-6 h-6" /> },
            { title: "Local Service Content", description: "Geo-targeted pages for cities, neighborhoods, and service areas", topics: ["City service pages", "Neighborhood targeting", "Service area optimization", "Near me rankings"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Appliance Repair"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with appliance repair categories, service areas, photos of work, and emergency availability", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Appliance Repair Citations", description: "Listings on HomeAdvisor, Angi, Yelp, and appliance-specific directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "5-star reviews mentioning specific appliances and brands for relevance signals", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city and neighborhood in your service territory", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "Appliance Schema Markup", description: "LocalBusiness and Service schema highlighting appliance repair specialties", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Local Backlinks", description: "Links from home improvement sites, local news, and community organizations", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Appliance Repair"
          comparisons={[
            { feature: "Emergency Search Visibility", withSEO: "Appear first for 'appliance repair near me now'", withoutSEO: "Competitors capture emergency calls" },
            { feature: "Brand-Specific Searches", withSEO: "Rank for Samsung, LG, Whirlpool repairs", withoutSEO: "Miss high-intent brand searches" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$50-150+ per lead from ads" },
            { feature: "Customer Trust", withSEO: "Organic results = higher trust", withoutSEO: "Paid ads often get skipped" },
            { feature: "Local Pack Presence", withSEO: "Dominate the map 3-pack", withoutSEO: "Invisible to local searchers" },
            { feature: "24/7 Lead Generation", withSEO: "Leads come while you sleep", withoutSEO: "Only referrals and repeat customers" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Appliance Repair"
          caseStudy={{
            title: "Appliance Repair Business Transformation",
            industry: "Appliance Repair",
            results: [
              { metric: "Organic Traffic", value: "380%", change: "increase in 6 months" },
              { metric: "Service Calls", value: "4x", change: "more monthly calls" },
              { metric: "Google Rankings", value: "#1", change: "for 25+ keywords" },
              { metric: "Revenue Growth", value: "156%", change: "year over year" }
            ],
            testimonial: "We went from getting a few calls a week to having to hire two more technicians to handle the volume. The SEO investment paid for itself in the first month.",
            clientName: "Appliance Repair Business Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Appliance Repair"
          customItems={[
            { icon: <FaWrench className="w-6 h-6" />, title: "Appliance Industry Expertise", description: "Deep understanding of how homeowners search for appliance repair services" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Local SEO Results", description: "Track record of getting appliance repair businesses to #1 in local search" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Emergency SEO Focus", description: "Specialized strategies for capturing urgent 'repair near me now' searches" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Brand-Specific Targeting", description: "Expertise ranking for Samsung, LG, Whirlpool, and other major brands" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent ROI Tracking", description: "Clear reporting showing calls, leads, and revenue from SEO efforts" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your SEO specialist for questions and strategy discussions" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Top 10 Services */}

        {/* Section 15: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry={industry.slug} />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 dark:border-yellow-400/20 mb-6">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Client Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from real businesses that trusted us with their SEO
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Appliance Repair SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8 animate-fade-in">
              <svg className="w-5 h-5 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-bold">Start your SEO Journey Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Appliance Repair Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free SEO audit and discover exactly How I can help your appliance repair business dominate local search and attract more high-paying customers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-scale-in">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit Today
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-transparent border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat on WhatsApp
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20 animate-fade-in">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Guaranteed Results</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
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

