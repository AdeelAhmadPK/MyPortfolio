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

import { FaBell, FaBook, FaBuilding, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaHandshake, FaHome, FaLink, FaMapMarkerAlt, FaMobileAlt, FaPhoneAlt, FaSearch, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: 'Plumbing SEO Services | Expert Local SEO for Plumbers & Plumbing Companies',
  description: 'Professional SEO services for plumbing companies. Dominate local search results, attract more emergency calls, and grow your plumbing business with proven SEO strategies. Expert plumber marketing agency.',
  keywords: 'plumbing SEO, plumbing SEO services, plumber SEO, plumber marketing, plumbing company SEO, plumber local SEO, plumbing contractor SEO, plumbing digital marketing, plumber website SEO, emergency plumber SEO, residential plumber SEO',
  openGraph: {
    title: 'Plumbing SEO Services | Expert Local SEO for Plumbers & Plumbing Companies',
    description: 'Professional SEO services for plumbing companies. Dominate local search results and grow your business.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plumbing SEO Services | Expert Local SEO for Plumbers',
    description: 'Professional SEO services for plumbing companies.'
  }
};

export default function PlumbingSEOPage() {
  const industry = industries.find(i => i.slug === 'plumbing-seo') || {
    slug: 'plumbing-seo',
    name: 'Plumbing',
    icon: <FaWrench className="w-6 h-6" />
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Plumbing SEO', url: '/services/plumbing-seo' }
  ];

  // SEO Framework FAQs (15+ comprehensive questions)
  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my plumbing business get more emergency calls?',
      answer: 'Emergency plumbing searches happen 24/7 and represent the highest-value leads. I optimize for urgent terms like "emergency plumber near me", "24 hour plumber", and "burst pipe repair now". By ranking first for these searches, you capture customers who need immediate service and are willing to pay premium rates.'
    },
    {
      question: 'What plumbing keywords should I target for maximum ROI?',
      answer: 'I focus on a strategic mix: emergency keywords ("burst pipe repair", "clogged drain emergency"), service-specific terms ("water heater installation", "sewer line repair"), and location-based searches ("plumber in [city]"). This multi-pronged approach captures customers at every stage of their search journey.'
    },
    {
      question: 'How important are reviews for plumbing SEO?',
      answer: 'Critical! Reviews are a major local ranking factor. I implement review generation systems that encourage satisfied customers to share their experience. A plumber with 100+ 5-star reviews consistently outranks competitors with fewer reviews. We also help you respond professionally to all reviews.'
    },
    {
      question: 'Can you help me rank for specific plumbing services?',
      answer: 'Absolutely! I create dedicated service pages for water heater repair, drain cleaning, sewer line services, gas line installation, bathroom remodeling, and more. Each page targets specific search intent and helps you capture customers looking for specialized services.'
    },
    {
      question: 'How do you handle seasonal plumbing SEO?',
      answer: 'Plumbing has distinct seasonal patterns - frozen pipes in winter, AC drain issues in summer, holiday garbage disposal problems. I create seasonal content ahead of peak periods and adjust optimization to capture seasonal demand spikes.'
    },
    {
      question: 'What makes plumbing SEO different from other industries?',
      answer: 'Plumbing SEO requires balancing emergency visibility with scheduled service rankings. I optimize for both urgent "plumber near me now" searches and planned renovations like "bathroom remodel plumber". The 24/7 nature of plumbing emergencies requires specific strategies.'
    },
    {
      question: 'How long does it take to see SEO results for plumbing?',
      answer: 'Emergency keywords often show results within 30-60 days. Competitive terms like "plumber [city]" may take 3-6 months. Most clients see significant call volume increases by month 3-4, with continued growth as domain authority builds.'
    },
    {
      question: 'Do I need separate pages for residential vs commercial plumbing?',
      answer: 'Yes! Commercial plumbing keywords have different intent and less competition. Creating separate sections for restaurant plumbing, office building services, and industrial plumbing helps capture higher-value commercial contracts.'
    },
    {
      question: 'How important is mobile optimization for plumbers?',
      answer: 'Essential! Over 80% of emergency plumbing searches happen on mobile devices. Your site must load in under 3 seconds, have click-to-call buttons prominently displayed, and be easy to navigate on small screens.'
    },
    {
      question: 'Should I create content about DIY plumbing fixes?',
      answer: 'Yes! DIY content attracts customers researching problems. When they realize the fix is beyond their skill level, they will remember your helpful content and call you. We balance educational content with clear calls-to-action for professional service.'
    },
    {
      question: 'How do you optimize for "plumber near me" searches?',
      answer: 'I optimize your Google Business Profile completely, ensure NAP consistency across 50+ directories, create location-specific landing pages, implement local schema markup, and build citations on plumbing-specific directories.'
    },
    {
      question: 'Can SEO help me get more water heater installation jobs?',
      answer: 'Definitely! Water heater installation is a high-value service with strong search volume. I create comprehensive content covering tankless vs traditional, brand comparisons, installation costs, and emergency replacement to capture customers at all stages.'
    },
    {
      question: 'How do you measure plumbing SEO success?',
      answer: 'We track rankings for target keywords, Google Business Profile views and calls, organic website traffic, form submissions, phone calls from organic search, and most importantly - revenue from SEO-generated leads. Monthly reports show clear ROI.'
    },
    {
      question: 'What role does video play in plumbing SEO?',
      answer: 'Video is increasingly important. I help create YouTube content showing common repairs, before/after project videos, and educational content. These videos rank in search results and build trust with potential customers.'
    },
    {
      question: 'How do you handle multi-location plumbing businesses?',
      answer: 'For multi-location plumbers, I create separate location pages, optimize individual Google Business Profiles for each location, and develop location-specific content and citation strategies while maintaining brand consistency.'
    },
    {
      question: 'Can SEO help with commercial plumbing contracts?',
      answer: 'Yes! Commercial plumbing SEO targets property managers, restaurant owners, and facility managers searching for reliable plumbing contractors. I create content targeting commercial-specific needs and longer sales cycles.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can SEO help my plumbing business get more emergency calls?',
      answer: 'Emergency plumbing searches happen 24/7 and represent the highest-value leads. I optimize for urgent terms like "emergency plumber near me", "24 hour plumber", and "burst pipe repair now". By ranking first for these searches, you capture customers who need immediate service and are willing to pay premium rates.'
    },
    {
      question: 'What plumbing keywords should I target for maximum ROI?',
      answer: 'I focus on a strategic mix: emergency keywords ("burst pipe repair", "clogged drain emergency"), service-specific terms ("water heater installation", "sewer line repair"), and location-based searches ("plumber in [city]"). This multi-pronged approach captures customers at every stage of their search journey.'
    },
    {
      question: 'How important are reviews for plumbing SEO?',
      answer: 'Critical! Reviews are a major local ranking factor. I implement review generation systems that encourage satisfied customers to share their experience. A plumber with 100+ 5-star reviews consistently outranks competitors with fewer reviews. We also help you respond professionally to all reviews.'
    },
    {
      question: 'Can you help me rank for specific plumbing services?',
      answer: 'Absolutely! I create dedicated service pages for water heater repair, drain cleaning, sewer line services, gas line installation, bathroom remodeling, and more. Each page targets specific search intent and helps you capture customers looking for specialized services.'
    },
    {
      question: 'How long does it take to see SEO results for my plumbing business?',
      answer: 'Emergency keywords often show results within 30-60 days. Competitive terms like "plumber [city]" may take 3-6 months. Most clients see significant call volume increases by month 3-4, with continued growth as domain authority builds.'
    },
    {
      question: 'What makes your plumbing SEO different from general marketing agencies?',
      answer: 'I specialize in plumbing and home services SEO. I understand emergency search patterns, seasonal trends, and the specific keywords that drive qualified plumbing leads. Generic agencies don\'t have this industry-specific expertise.'
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
                "@id": "https://adeelahmad.com/services/plumbing-seo#service",
                "serviceType": "Plumbing SEO Services",
                "name": "Plumbing SEO Services",
                "description": "Professional SEO services for plumbing companies. Dominate local search results, attract more emergency calls, and grow your plumbing business with proven SEO strategies.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Plumber Marketing & SEO Expert"
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
                "@id": "https://adeelahmad.com/services/plumbing-seo#webpage",
                "url": "https://adeelahmad.com/services/plumbing-seo",
                "name": "Plumbing SEO Services | Expert Local SEO for Plumbers & Plumbing Companies",
                "description": "Professional SEO services for plumbing companies. Dominate local search results, attract more emergency calls, and grow your plumbing business with proven SEO strategies.",
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
                    "name": "Plumbing SEO",
                    "item": "https://adeelahmad.com/services/plumbing-seo"
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
        {/* Section 1: Hero Section */}
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
              {/* Right Column: Contact Form */}`n              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Plumbing SEO Audit"
                  subtitle="Discover what's holding your website back from page 1 rankings"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">🔧</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Plumbing SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Plumbing</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When homeowners have a <strong className="text-cyan-300 font-bold">burst pipe at 2 AM</strong> or need an <strong className="text-blue-300 font-bold">emergency plumber now</strong>, 
                  they search online. Our specialized SEO strategies ensure your plumbing business appears <strong className="text-white font-bold">first</strong> in local search results, 
                  capturing high-value emergency calls and scheduled service requests.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">850%</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">24/7</div>
                    <div className="text-xs text-slate-400 font-medium">Visibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">4.2x</div>
                    <div className="text-xs text-slate-400 font-medium">More Calls</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Plumbing" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug="plumbing-seo"
          industryIcon="🔧"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Plumbing" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Plumbing" />

        {/* Section 6: Our Plumbing SEO Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Plumbing <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for plumbing businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Emergency Plumbing SEO",
                  description: "Rank #1 for 'emergency plumber near me', 'burst pipe repair', and '24 hour plumber' to capture high-value urgent calls",
                  icon: <FaBell className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Service Page Optimization",
                  description: "Create optimized pages for water heaters, drain cleaning, sewer lines, gas fitting, and all your core services",
                  icon: <FaWrench className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Local Pack Domination",
                  description: "Optimize your Google Business Profile and citations to appear in the map 3-pack for local searches",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Review Generation System",
                  description: "Automated review requests and response management to build a 5-star reputation",
                  icon: "⭐",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Commercial Plumbing SEO",
                  description: "Target property managers, restaurants, and businesses with commercial plumbing content",
                  icon: <FaBuilding className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Conversion Optimization",
                  description: "Click-to-call buttons, emergency banners, and form optimization to maximize leads",
                  icon: <FaPhoneAlt className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
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
          industry="Plumbing"
          stats={[
            { value: "89%", label: "of homeowners search online for local plumbers", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "82%", label: "of emergency plumbing searches happen on mobile", icon: <FaMobileAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "76%", label: "of local searches result in a same-day service call", icon: <FaPhoneAlt className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
            { value: "4.2x", label: "higher conversion rate from organic search vs paid ads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My process */}
        <ProcessTimeline 
          industry="Plumbing"
          steps={[
            { step: 1, title: "Plumbing Market Audit", description: "We analyze your local market, competitor rankings, and identify opportunities for emergency and service keywords.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Keyword Strategy", description: "We map target keywords including emergency terms, service-specific searches, and location modifiers.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical Optimization", description: "I optimize site speed, implement plumbing schema markup, and ensure mobile-first performance.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content Development", description: "I create service pages, location pages, and educational content that ranks and converts.", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Local SEO & Citations", description: "I optimize your GBP, build citations on plumbing directories, and implement review systems.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "We track rankings, calls, and revenue, continuously optimizing for more emergency and scheduled leads.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Plumbing"
          pillars={[
            { title: "Emergency Services Content", description: "Comprehensive pages for emergency plumbing services", topics: ["Burst pipe repair", "24/7 emergency plumber", "Water leak detection", "Sewer backup emergency"], icon: <FaBell className="w-6 h-6" /> },
            { title: "Service-Specific Content", description: "Dedicated pages for each plumbing service you offer", topics: ["Water heater services", "Drain cleaning", "Sewer line repair", "Gas line services"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Location Content", description: "Geo-targeted pages for cities and neighborhoods", topics: ["City service pages", "Neighborhood targeting", "Service area maps", "Local landing pages"], icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Educational Content", description: "Helpful guides that build trust and capture early-stage searches", topics: ["DIY troubleshooting", "Maintenance tips", "Cost guides", "Buyer guides"], icon: <FaBook className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Plumbing"
          signals={[
            { title: "Google Business Profile", description: "Fully optimized GBP with services, service area, photos, and emergency availability", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Plumbing Citations", description: "Listings on HomeAdvisor, Angi, Yelp, BBB, and plumbing-specific directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "5-star reviews mentioning specific services and emergency response times", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city and neighborhood you serve", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "Local Schema Markup", description: "Plumber schema, ServiceArea schema, and FAQ schema implementation", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Local Backlinks", description: "Links from local news, community organizations, and home improvement sites", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Plumbing"
          comparisons={[
            { feature: "Emergency Call Volume", withSEO: "Capture 80%+ of 'plumber near me now' searches", withoutSEO: "Miss urgent high-value emergency calls" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound over time", withoutSEO: "$75-200+ per lead from Google Ads" },
            { feature: "Local Pack Visibility", withSEO: "Dominate map 3-pack for local searches", withoutSEO: "Invisible to local searchers" },
            { feature: "Brand Trust", withSEO: "Organic results = higher credibility", withoutSEO: "Paid ads often ignored" },
            { feature: "24/7 Lead Generation", withSEO: "Rank for emergency searches around the clock", withoutSEO: "Only word-of-mouth referrals" },
            { feature: "Long-Term Value", withSEO: "Rankings compound, cost per lead decreases", withoutSEO: "Pay more as competition increases" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Plumbing"
          caseStudy={{
            title: "Plumbing Company Growth Story",
            industry: "Plumbing",
            results: [
              { metric: "Emergency Calls", value: "340%", change: "increase in 6 months" },
              { metric: "Monthly Revenue", value: "$85K", change: "growth from SEO leads" },
              { metric: "Google Rankings", value: "#1", change: "for 40+ keywords" },
              { metric: "Review Score", value: "4.9★", change: "with 200+ reviews" }
            ],
            testimonial: "We went from struggling to fill the schedule to having to hire two more plumbers. The emergency SEO alone has transformed our business.",
            clientName: "Regional Plumbing Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Plumbing"
          customItems={[
            { icon: <FaWrench className="w-6 h-6" />, title: "Plumbing Industry Expertise", description: "Deep understanding of how homeowners search for plumbing services" },
            { icon: <FaBell className="w-6 h-6" />, title: "Emergency SEO Specialist", description: "Proven strategies for capturing urgent 24/7 plumbing searches" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Measurable Results", description: "Track record of 3-5x increases in organic plumbing leads" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Masters", description: "Expertise in Google Business Profile and local pack optimization" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Monthly reports showing calls, leads, and revenue from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your SEO specialist for strategy discussions" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Top 10 Services */}

        {/* Section 15: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="plumbing-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from real plumbing businesses that trusted us with their SEO
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Plumbing SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Plumbing Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a free SEO audit and discover exactly How I can help your plumbing business capture more emergency calls and grow revenue
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit Today
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
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
