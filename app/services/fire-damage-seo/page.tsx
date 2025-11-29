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
import { FaFire, FaBell, FaMapMarkerAlt, FaPhoneAlt, FaClipboardList, FaWind, FaBuilding, FaClock, FaDollarSign, FaSearch, FaCog, FaFileAlt, FaChartLine, FaLink, FaHome, FaWrench, FaHandshake, FaChartBar, FaStar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Fire Damage Restoration SEO Services | Local SEO for Fire Restoration Companies',
  description: 'Expert SEO services for fire damage restoration companies. Dominate local search for fire cleanup, smoke damage restoration, soot removal, and fire insurance claims. Proven fire restoration marketing strategies to capture emergency leads and grow your business.',
  keywords: 'fire damage SEO, fire damage restoration marketing, fire restoration company SEO, smoke damage marketing, soot removal SEO, fire cleanup marketing, fire restoration lead generation, local SEO for fire restoration, fire damage near me SEO, insurance fire restoration marketing, commercial fire damage SEO, residential fire restoration marketing, fire board up SEO, fire damage contractor marketing',
  openGraph: {
    title: 'Fire Damage Restoration SEO Services | Local SEO for Fire Restoration Companies',
    description: 'Expert SEO for fire damage restoration companies. Capture emergency leads and grow your business with proven fire restoration marketing strategies.',
    type: 'website'
  }
};

export default function FireDamageRestorationSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Fire Damage Restoration SEO', url: '/services/fire-damage-restoration-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my fire damage restoration company get more emergency calls?',
      answer: 'When a fire strikes, homeowners immediately search for help. By ranking first for searches like "fire damage restoration near me", "emergency fire cleanup", and "fire damage repair company", you capture desperate customers who need immediate assistance and make quick decisions.'
    },
    {
      question: 'What fire damage restoration keywords should I target?',
      answer: 'I target emergency terms ("24 hour fire restoration", "emergency fire cleanup"), service keywords ("smoke damage removal", "fire damage repair"), and insurance terms ("fire damage insurance claims help"). This captures urgent leads and those planning restoration.'
    },
    {
      question: 'How important is 24/7 availability messaging for fire restoration SEO?',
      answer: 'Critical! Fire emergencies happen anytime. I optimize for "24/7 fire restoration" and ensure your Google Business Profile shows 24-hour availability. Call-to-action buttons emphasizing immediate response drive conversions.'
    },
    {
      question: 'Can SEO help me get insurance restoration work?',
      answer: 'Absolutely! Many fire damage customers search for help with insurance claims. I target keywords like "fire damage insurance claim help" and create content about the claims process, positioning you as a trusted partner for insurance restoration work.'
    },
    {
      question: 'How do I rank for "fire damage restoration near me" searches?',
      answer: 'Local SEO is essential. I optimize your Google Business Profile with fire restoration categories, build citations on restoration directories, create location-specific pages, and generate reviews mentioning fast response and quality work.'
    },
    {
      question: 'What makes fire restoration SEO different from general contractor marketing?',
      answer: 'Fire restoration requires targeting emergency intent keywords with extreme urgency. Customers make decisions in hours, not weeks. Speed, 24/7 messaging, and local visibility are critical factors that differentiate fire restoration SEO.'
    },
    {
      question: 'How long does it take to see SEO results for fire restoration companies?',
      answer: 'Emergency restoration keywords can show results in 2-4 months due to their urgency and local focus. Competitive terms may take 4-6 months. We prioritize quick wins that generate emergency calls while building long-term rankings.'
    },
    {
      question: 'Should I create content about the fire restoration process?',
      answer: 'Yes! Content explaining what to do after a fire, the restoration timeline, and insurance processes builds trust and ranks for informational searches. These visitors often convert when they need actual restoration services.'
    },
    {
      question: 'How important are reviews for fire damage restoration SEO?',
      answer: 'Extremely important! Customers in crisis rely heavily on reviews. I implement review generation strategies that build trust through testimonials mentioning fast response times, professionalism, and successful restoration outcomes.'
    },
    {
      question: 'Can you help me rank for commercial fire restoration?',
      answer: 'Yes! Commercial fire restoration has less competition and higher project values. I create content targeting property managers, business owners, and commercial insurance adjusters searching for fire restoration services.'
    },
    {
      question: 'How do you optimize for smoke damage searches?',
      answer: 'Smoke damage requires its own keyword strategy. I target "smoke damage removal", "smoke odor elimination", and "soot cleanup services". Many customers search specifically for smoke damage without mentioning fire.'
    },
    {
      question: 'Should I target content-loss restoration keywords?',
      answer: 'Definitely! Content restoration (documents, electronics, personal belongings) is a valuable service. I create dedicated pages for pack-out services, content cleaning, and document restoration to capture this specialized search traffic.'
    },
    {
      question: 'How do you measure fire restoration SEO success?',
      answer: 'We track rankings for emergency keywords, Google Business Profile visibility, organic traffic, phone calls from organic search, form submissions, and most importantly, revenue from SEO-generated restoration projects.'
    },
    {
      question: 'Can SEO help during peak fire season?',
      answer: 'Yes! We prepare seasonal content ahead of peak periods (wildfire season, winter heating fires). This ensures you rank well when demand surges, capturing increased search volume during high-demand periods.'
    },
    {
      question: 'How do you handle multi-service restoration companies?',
      answer: 'For companies offering fire, water, and mold restoration, I create separate optimization strategies for each service while maintaining brand consistency. Each service has dedicated pages and local landing pages.'
    },
    {
      question: 'What certifications should I highlight for fire restoration SEO?',
      answer: 'IICRC Fire and Smoke Restoration Technician (FSRT) certification and other industry credentials are essential. We prominently feature certifications to build trust and target searches for certified fire restoration companies.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my fire damage restoration company get more emergency calls?',
      answer: 'When a fire strikes, homeowners immediately search for help. By ranking first for searches like "fire damage restoration near me" and "emergency fire cleanup", you capture desperate customers who need immediate assistance and make quick decisions.'
    },
    {
      question: 'What fire damage restoration keywords should I target?',
      answer: 'I target emergency terms ("24 hour fire restoration"), service keywords ("smoke damage removal", "fire damage repair"), and insurance terms ("fire damage insurance claims help"). This captures urgent leads and those planning restoration.'
    },
    {
      question: 'How long does it take to see SEO results for fire restoration companies?',
      answer: 'Emergency restoration keywords can show results in 2-4 months due to their urgency and local focus. Competitive terms may take 4-6 months. We prioritize quick wins that generate emergency calls while building long-term rankings.'
    },
    {
      question: 'How important are reviews for fire damage restoration SEO?',
      answer: 'Extremely important! Customers in crisis rely heavily on reviews. I implement review generation strategies that build trust through testimonials mentioning fast response times, professionalism, and successful restoration outcomes.'
    },
    {
      question: 'Can you help me rank for commercial fire restoration?',
      answer: 'Yes! Commercial fire restoration has less competition and higher project values. I create content targeting property managers, business owners, and commercial insurance adjusters searching for fire restoration services.'
    },
    {
      question: 'What makes your fire restoration SEO different from other agencies?',
      answer: 'I specialize in emergency services SEO and understand the urgency of fire restoration. We know the keywords, customer psychology, and conversion tactics that drive emergency calls. Generic agencies lack this expertise.'
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
                "serviceType": "Fire Damage Restoration SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for fire damage restoration companies. Dominate local search for fire cleanup, smoke damage restoration, soot removal, and fire insurance claims."
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
              backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-600/30 via-red-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-red-600/25 via-orange-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-amber-600/20 via-orange-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 via-red-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-400/30 mb-8 animate-scale-in shadow-lg shadow-orange-500/20">
                  <FaFire className="w-6 h-6 text-orange-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Emergency Fire Damage SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Fire Damage Restoration</span>
                  <br />
                  <span className="bg-gradient-to-r from-orange-400 via-red-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When disaster strikes, homeowners search immediately. My SEO strategies ensure your restoration company appears first for emergency fire damage searches.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">1,500+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Fire Damage SEO Audit"
                  subtitle="Discover how to dominate emergency restoration searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Fire Damage Restoration" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="fire-damage-restoration-seo" industryIcon={<FaFire className="text-3xl" />} />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Fire Damage Restoration" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Fire Damage Restoration" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Fire Restoration <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for fire damage restoration companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Emergency Keyword SEO", description: "Rank first for urgent fire restoration searches in your area", icon: "🚨", color: "from-red-500 to-orange-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for fire damage contractor searches", icon: "📍", color: "from-blue-500 to-cyan-500" },
                { title: "24/7 Call Optimization", description: "Maximize emergency call conversions with click-to-call", icon: "📞", color: "from-green-500 to-emerald-500" },
                { title: "Insurance Keyword SEO", description: "Rank for fire damage insurance claim related searches", icon: "📋", color: "from-purple-500 to-pink-500" },
                { title: "Smoke Damage SEO", description: "Capture smoke odor and soot cleanup search traffic", icon: "💨", color: "from-gray-500 to-slate-500" },
                { title: "Commercial Restoration SEO", description: "Target commercial property fire restoration leads", icon: "🏢", color: "from-orange-500 to-amber-500" }
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
          industry="Fire Damage Restoration"
          stats={[
            { value: "94%", label: "of fire victims search online for immediate restoration help", icon: <FaSearch />, color: "from-orange-500 to-red-500" },
            { value: "2hrs", label: "average decision time for choosing a fire restoration company", icon: <FaClock />, color: "from-blue-500 to-cyan-500" },
            { value: "97%", label: "of fire restoration searches have urgent local intent", icon: <FaMapMarkerAlt />, color: "from-purple-500 to-pink-500" },
            { value: "$45K", label: "average residential fire restoration project value", icon: <FaDollarSign />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Fire Damage Restoration"
          steps={[
            { step: 1, title: "Emergency Audit", description: "Analyze your local fire restoration market and emergency keyword opportunities.", icon: "🔍", duration: "Week 1" },
            { step: 2, title: "24/7 Optimization", description: "Optimize for emergency searches with click-to-call and location targeting.", icon: "📞", duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Ensure fast mobile load times and proper local schema markup.", icon: "⚙️", duration: "Weeks 2-4" },
            { step: 4, title: "Service Pages", description: "Create fire, smoke, and content restoration pages with emergency CTAs.", icon: "📝", duration: "Weeks 3-8" },
            { step: 5, title: "Local Domination", description: "Optimize GBP, build restoration citations, and generate emergency reviews.", icon: "📍", duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, calls, and continuously optimize for emergencies.", icon: "📈", duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Fire Damage Restoration"
          pillars={[
            { title: "Fire Restoration Content", description: "Comprehensive fire damage service pages", topics: ["Fire damage repair", "Structural restoration", "Board-up services", "Debris removal"], icon: <FaFire /> },
            { title: "Smoke & Soot Content", description: "Dedicated smoke damage optimization", topics: ["Smoke odor removal", "Soot cleanup", "Air quality restoration", "HVAC cleaning"], icon: <FaWind /> },
            { title: "Insurance Content", description: "Insurance-focused educational content", topics: ["Claims process guide", "Documentation tips", "Working with adjusters", "Coverage questions"], icon: <FaClipboardList /> },
            { title: "Emergency Content", description: "Urgent response-focused pages", topics: ["24/7 response", "Emergency board-up", "What to do after fire", "Timeline expectations"], icon: <FaBell /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Fire Damage Restoration"
          signals={[
            { title: "Google Business Profile", description: "Optimized with 24/7 hours, fire restoration categories, and emergency messaging", importance: "Critical", icon: "📍" },
            { title: "Restoration Citations", description: "Listings on Angi, HomeAdvisor, restoration directories, and insurance panels", importance: "Critical", icon: "📋" },
            { title: "Emergency Reviews", description: "Reviews highlighting fast response, professionalism, and successful restoration", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city with emergency contact info", importance: "High", icon: "🏠" },
            { title: "LocalBusiness Schema", description: "Emergency service schema with 24/7 availability markup", importance: "High", icon: "🔧" },
            { title: "Local Emergency Backlinks", description: "Links from local news, fire departments, and insurance agents", importance: "Medium", icon: "🔗" }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Fire Damage Restoration"
          comparisons={[
            { feature: "Emergency Call Volume", withSEO: "Be the first call when disaster strikes", withoutSEO: "Miss urgent search traffic" },
            { feature: "24/7 Visibility", withSEO: "Rank for after-hours emergency searches", withoutSEO: "Invisible during emergencies" },
            { feature: "Cost Per Lead", withSEO: "Organic leads without paying per click", withoutSEO: "$150-400+ per restoration lead" },
            { feature: "Local Visibility", withSEO: "Dominate map pack for fire restoration", withoutSEO: "Rely only on insurance referrals" },
            { feature: "Trust Building", withSEO: "Educational content builds authority", withoutSEO: "No online credibility" },
            { feature: "Commercial Leads", withSEO: "Capture high-value commercial projects", withoutSEO: "Miss commercial opportunities" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Fire Damage Restoration"
          caseStudy={{
            title: "Fire Restoration Company Growth Story",
            industry: "Fire Damage Restoration",
            results: [
              { metric: "Emergency Calls", value: "380%", change: "increase in 6 months" },
              { metric: "Organic Traffic", value: "4x", change: "more monthly visitors" },
              { metric: "Google Rankings", value: "#1", change: "for 25+ emergency keywords" },
              { metric: "Revenue Growth", value: "$1.8M", change: "from SEO leads annually" }
            ],
            testimonial: "Before SEO, we relied entirely on insurance referrals. Now we get direct emergency calls from homeowners who found us on Google. Our response time and visibility set us apart.",
            clientName: "Regional Fire Restoration Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Fire Damage Restoration"
          customItems={[
            { icon: <FaFire />, title: "Fire Restoration Expertise", description: "Deep understanding of how fire victims search for help" },
            { icon: <FaChartLine />, title: "Emergency Results", description: "Proven 3-4x increases in emergency calls for restoration companies" },
            { icon: <FaBell />, title: "24/7 Optimization", description: "Strategies designed for after-hours emergency visibility" },
            { icon: <FaMapMarkerAlt />, title: "Local SEO Masters", description: "Dominate your service area for fire restoration searches" },
            { icon: <FaChartBar />, title: "Transparent Reporting", description: "Track calls, leads, and revenue from organic search" },
            { icon: <FaHandshake />, title: "Dedicated Support", description: "Direct access to your restoration SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="fire-damage-restoration-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-red-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Fire Restoration SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-orange-600 via-red-700 to-amber-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-red-300 to-amber-300">Fire Restoration Search?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your fire restoration company capture more emergency calls
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
