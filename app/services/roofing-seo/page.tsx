import { Metadata } from 'next';
import Link from 'next/link';
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
import { FaBolt, FaBriefcase, FaCamera, FaCertificate, FaChartArea, FaChartBar, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaHammer, FaHome, FaIndustry, FaMapMarkerAlt, FaRocket, FaSearch, FaShieldAlt, FaTags, FaTools, FaTrophy } from 'react-icons/fa';;;

export const metadata: Metadata = {
  title: 'Roofing SEO Services | Expert Local SEO for Roofing Contractors & Roofers',
  description: 'Professional SEO services for roofing contractors. Dominate local search results, attract more homeowners, and grow your roofing business with proven SEO strategies. Expert roofing marketing agency.',
  keywords: 'roofing SEO, roofing SEO services, roofer SEO, roofing contractor SEO, roofing company marketing, roofing local SEO, roof repair SEO, roofing digital marketing, roofing contractor marketing, roofing SEO agency',
  openGraph: {
    title: 'Roofing SEO Services | Expert Local SEO for Roofing Contractors',
    description: 'Professional SEO services for roofing contractors. Dominate local search results and grow your business.',
    type: 'website'
  }
};

export default function RoofingSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Roofing SEO', url: '/services/roofing-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my roofing company compete with big national chains?',
      answer: 'Local SEO levels the playing field. While national chains have brand recognition, local SEO helps independent roofing contractors dominate neighborhood searches. I optimize for hyper-local keywords like "roof repair in [your area]" and build strong local presence that positions you as the trusted local expert.'
    },
    {
      question: 'What roofing keywords should I target?',
      answer: 'I target urgent keywords ("roof leak repair", "emergency roofing"), project keywords ("roof replacement", "new roof cost"), material searches ("metal roofing", "asphalt shingles"), and location terms ("roofer near me"). This captures customers from emergency needs to planned replacements.'
    },
    {
      question: 'How important are reviews for roofing SEO?',
      answer: 'Critical! Roofing is a high-trust, high-investment decision. Reviews significantly influence both search rankings and customer decisions. I help you generate authentic reviews, respond professionally, and showcase testimonials. A strong 4.5+ star profile with 50+ reviews dramatically boosts visibility and conversions.'
    },
    {
      question: 'Can you help me rank for insurance roofing work?',
      answer: 'Yes! I create content targeting "insurance roof claim", "storm damage roofing", and "roofing insurance work" searches. This captures homeowners dealing with insurance claims after storms, hail, or wind damage.'
    },
    {
      question: 'How do you optimize for emergency roofing calls?',
      answer: 'I optimize for urgent keywords like "emergency roof repair", "roof leak near me now", and "24/7 roofer". Your Google Business Profile is optimized to show emergency availability, response times, and emergency contact options prominently.'
    },
    {
      question: 'What makes roofing SEO different?',
      answer: 'Roofing SEO must address both emergency repairs (immediate need) and planned replacements (long research period). I create content for both audiences: quick-action pages for emergencies and detailed guides for homeowners planning roof replacements.'
    },
    {
      question: 'How long does it take to see SEO results for roofing?',
      answer: 'Most roofing contractors see initial improvements within 30-60 days with significant results by 90 days. Emergency repair keywords often rank faster, while competitive replacement terms may take 3-6 months to dominate in your market.'
    },
    {
      question: 'Do I need separate pages for different roofing services?',
      answer: 'Yes! Dedicated pages for roof repair, replacement, installation, inspection, and emergency services help you rank for specific searches. We also create pages for different roofing materials (asphalt, metal, tile, flat roofing) to capture material-specific searches.'
    },
    {
      question: 'How do seasonal weather patterns affect roofing SEO?',
      answer: 'Roofing searches spike after storms and during prime roofing seasons. We adjust your SEO strategy seasonally: storm preparation content before weather events, emergency response during storms, and planned replacement optimization during prime seasons.'
    },
    {
      question: 'Should I create content about roofing materials?',
      answer: 'Absolutely! Educational content about shingle types, metal roofing benefits, tile durability, and material comparisons attracts homeowners researching options. This positions you as an expert and captures customers early in their decision process.'
    },
    {
      question: 'How important is local SEO for roofing contractors?',
      answer: 'Extremely important! Homeowners need local, licensed, insured roofers they can trust. Local SEO ensures you dominate "roofer near me" searches and appear in the Google Map Pack for your service area. Over 85% of roofing searches have local intent.'
    },
    {
      question: 'What role do before/after photos play in roofing SEO?',
      answer: 'Before/after photos are crucial! They rank in Google Images, increase engagement, build trust, and significantly improve conversion rates. I optimize your photo galleries with proper filenames, alt text, and structured data for maximum SEO benefit.'
    },
    {
      question: 'How do you optimize for commercial roofing vs residential?',
      answer: 'I create separate content strategies. Residential targets homeowners with emotional appeals and financing. Commercial targets property managers and building owners with durability, warranty, and ROI language. Each gets dedicated pages and targeted keywords.'
    },
    {
      question: 'Should I target manufacturer certification keywords?',
      answer: 'Yes! If you\'re certified with GAF, CertainTeed, Owens Corning, or other manufacturers, I optimize for "certified [brand] roofer" searches. Certification keywords often have less competition and attract customers specifically wanting certified installers.'
    },
    {
      question: 'How do you measure roofing SEO success?',
      answer: 'We track local rankings, Google Business Profile impressions/calls, organic traffic, form submissions, phone calls from organic search, and most importantly, roofing jobs from SEO leads. Monthly reports show clear ROI with lead-to-job tracking.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can SEO start generating roofing leads?',
      answer: 'Most roofing contractors see initial lead increases within 60-90 days as local rankings improve. Emergency repair keywords often produce leads faster than replacement terms. The high value of roofing jobs ($5,000-$20,000+) means even modest lead increases deliver strong ROI.'
    },
    {
      question: 'Do you work with both residential and commercial roofers?',
      answer: 'Yes! I create dual-track strategies optimizing for both residential homeowner searches and commercial property manager queries. Each market requires different keywords, content approaches, and conversion tactics.'
    },
    {
      question: 'How do you help roofers get storm damage leads?',
      answer: 'I optimize for storm damage, insurance claim, and hail damage keywords. After major weather events, we can quickly adjust your SEO strategy to capture the surge in storm-related roofing searches in your area.'
    },
    {
      question: 'What makes your roofing SEO different from general marketing agencies?',
      answer: 'I understand the roofing industry sales cycle, licensing requirements, insurance terminology, and material specifications. My expertise knows the difference between residential re-roofs and commercial TPO installations, making My SEO more effective and targeted.'
    },
    {
      question: 'Can you help with reputation management for my roofing company?',
      answer: 'Yes! I implement review generation systems, monitor online mentions, respond to reviews strategically, and create content addressing common concerns. Strong reputation management is crucial for high-trust roofing decisions.'
    },
    {
      question: 'How do you track ROI from roofing SEO?',
      answer: 'We track organic leads, phone calls, form submissions, and conversion to roofing jobs. We also monitor cost per lead vs paid advertising and calculate lifetime customer value including repeat business and referrals to show true ROI.'
    }
  ];

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
                "@id": "https://adeelahmad.com/services/roofing-seo#service",
                "serviceType": "Roofing SEO Services",
                "name": "Roofing SEO Services",
                "description": "Professional SEO services for roofing contractors. Dominate local search results, attract more homeowners, and grow your roofing business with proven SEO strategies.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Roofing Contractor Marketing & SEO Expert"
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
                "@id": "https://adeelahmad.com/services/roofing-seo#webpage",
                "url": "https://adeelahmad.com/services/roofing-seo",
                "name": "Roofing SEO Services | Expert Local SEO for Roofing Contractors & Roofers",
                "description": "Professional SEO services for roofing contractors. Dominate local search results, attract more homeowners, and grow your roofing business with proven SEO strategies.",
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
                    "name": "Roofing SEO",
                    "item": "https://adeelahmad.com/services/roofing-seo"
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
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-red-600/30 via-orange-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-600/25 via-red-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-amber-600/20 via-orange-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-red-400/30 mb-8 animate-scale-in shadow-lg shadow-red-500/20">
                  <FaHome className="w-6 h-6 text-red-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Roofing SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Roofing Contractor</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-400 via-orange-400 to-amber-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Dominate local search for roof repair, replacement, and installation. Attract homeowners when they need roofing services most.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1">1,900+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-1">6x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Roofing SEO Audit"
                  subtitle="Discover how to dominate local roofing searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Framework */}
        <SEOFramework industry="Roofing" faqs={seoFrameworkFaqs} />

        {/* Countries Grid */}
        <CountriesGrid industrySlug="roofing-seo" industryIcon={<FaHome />} />

        {/* Why Choose Me */}
        <WhyChooseMe industry="Roofing" />

        {/* Hire Local SEO */}
        <HireLocalSEO industry="Roofing" />

        {/* Services Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Specialized Roofing SEO Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions tailored for roofing contractors and roof repair companies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FaHammer />, title: 'Roof Repair SEO', description: 'Dominate emergency roof repair and leak repair searches in your area' },
                { icon: <FaTools />, title: 'Roof Replacement SEO', description: 'Rank for roof replacement, re-roofing, and new roof installation keywords' },
                { icon: <FaBolt />, title: 'Storm Damage SEO', description: 'Capture insurance work and storm damage restoration searches' },
                { icon: <FaIndustry />, title: 'Commercial Roofing SEO', description: 'Target commercial property managers and building owner searches' },
                { icon: <FaShieldAlt />, title: 'Roofing Materials SEO', description: 'Optimize for specific materials: metal, tile, shingle, flat roofing' },
                { icon: <FaClipboardList />, title: 'Roof Inspection SEO', description: 'Rank for roof inspection, assessment, and maintenance service searches' }
              ].map((service, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all">
                  <div className="text-4xl mb-4 text-red-400">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <IndustryStats 
          industry="Roofing"
          stats={[
            { value: '295%', label: 'Avg. Lead Increase', icon: <FaChartLine className="w-6 h-6" />, color: 'red' },
            { value: '81%', label: 'Local Pack Rankings', icon: <FaMapMarkerAlt className="w-6 h-6" />, color: 'orange' },
            { value: '4.6x', label: 'ROI Within 12 Months', icon: <FaDollarSign className="w-6 h-6" />, color: 'amber' },
            { value: '68%', label: 'Cost Per Lead Reduction', icon: <FaChartBar className="w-6 h-6" />, color: 'yellow' }
          ]}
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          industry="Roofing"
          steps={[
            { step: 1, title: 'Roofing Market Analysis', description: 'Comprehensive audit of local roofing competition, seasonal patterns, and customer search behavior', icon: <FaSearch className="w-6 h-6" />, duration: 'Week 1-2' },
            { step: 2, title: 'Technical & Local SEO', description: 'Website optimization, mobile performance, and Google Business Profile enhancement', icon: <FaCog className="w-6 h-6" />, duration: 'Week 2-4' },
            { step: 3, title: 'Service Page Development', description: 'Creating optimized pages for repair, replacement, materials, and emergency services', icon: <FaEdit className="w-6 h-6" />, duration: 'Week 4-6' },
            { step: 4, title: 'Content & Authority Building', description: 'Roofing-focused content marketing, local citations, and industry link building', icon: <FaTools className="w-6 h-6" />, duration: 'Week 6-10' },
            { step: 5, title: 'Review & Reputation Growth', description: 'Implementing post-job review systems and managing online reputation', icon: '⭐', duration: 'Week 10-14' },
            { step: 6, title: 'Scale & Optimize', description: 'Expanding service areas and continuously improving conversion rates', icon: <FaRocket className="w-6 h-6" />, duration: 'Ongoing' }
          ]}
        />

        {/* Topic Clusters */}
        <TopicClusterSection 
          industry="Roofing"
          pillars={[
            { 
              title: 'Roofing Services',
              description: 'Complete service coverage',
              topics: ['Roof Repair', 'Roof Replacement', 'New Roof Installation', 'Emergency Roof Repair', 'Roof Inspection', 'Roof Maintenance'],
              icon: <FaHammer className="w-6 h-6" />
            },
            { 
              title: 'Roofing Materials',
              description: 'Material-specific content',
              topics: ['Asphalt Shingles', 'Metal Roofing', 'Tile Roofing', 'Flat Roofing', 'Slate Roofing', 'Cedar Shake'],
              icon: <FaShieldAlt className="w-6 h-6" />
            },
            { 
              title: 'Storm & Insurance',
              description: 'Storm damage services',
              topics: ['Storm Damage Repair', 'Insurance Claims', 'Hail Damage', 'Wind Damage', 'Emergency Tarping', 'Insurance Documentation'],
              icon: <FaBolt className="w-6 h-6" />
            },
            { 
              title: 'Commercial Roofing',
              description: 'Commercial services',
              topics: ['TPO Roofing', 'EPDM Roofing', 'Commercial Flat Roofs', 'Industrial Roofing', 'Preventive Maintenance', 'Roof Restoration'],
              icon: <FaIndustry className="w-6 h-6" />
            }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Roofing"
          signals={[
            { title: 'Service Categories', description: 'Proper Google Business Profile categorization for roofing services', importance: 'Critical', icon: <FaTags className="w-6 h-6" /> },
            { title: 'Licensing & Insurance Display', description: 'Showcasing state licenses, insurance coverage, and manufacturer certifications', importance: 'Critical', icon: <FaCertificate className="w-6 h-6" /> },
            { title: 'Emergency Availability', description: 'Highlighting 24/7 emergency service and response times prominently', importance: 'High', icon: '⏱️' },
            { title: 'Service Area Coverage', description: 'Clear geographic targeting with neighborhood-level optimization', importance: 'High', icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: 'Before/After Galleries', description: 'Optimized project photos showing completed roofing work', importance: 'High', icon: <FaCamera className="w-6 h-6" /> },
            { title: 'Manufacturer Partnerships', description: 'Featuring certified installer status for major roofing brands', importance: 'Medium', icon: <FaTrophy className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Roofing"
          comparisons={[
            { feature: 'Roofing Industry Expertise', withSEO: 'Deep specialization in roofing contractor SEO', withoutSEO: 'Generic home services marketing' },
            { feature: 'Emergency Optimization', withSEO: 'Optimized for urgent repair and emergency calls', withoutSEO: 'Planned project focus only' },
            { feature: 'Storm Response Strategy', withSEO: 'Seasonal adjustment for weather events and storms', withoutSEO: 'Static year-round approach' },
            { feature: 'Material-Specific Content', withSEO: 'Dedicated pages for each roofing material type', withoutSEO: 'Generic roofing pages' },
            { feature: 'Insurance Work Targeting', withSEO: 'Content optimized for insurance claim searches', withoutSEO: 'Miss insurance opportunities' },
            { feature: 'Review Generation', withSEO: 'Systematic post-job review requests', withoutSEO: 'Passive review collection' }
          ]}
        />

        {/* Case Study */}
        <CaseStudyHighlight 
          industry="Roofing"
          caseStudy={{
            title: 'Regional Roofing Company Dominates Three Markets',
            industry: 'Roofing',
            results: [
              { metric: 'Organic Leads', value: '32/month', change: '+269%' },
              { metric: 'Emergency Calls', value: '14/month', change: '+236%' },
              { metric: 'Replacement Jobs', value: '18/month', change: '+222%' }
            ],
            testimonial: 'We went from struggling for leads to having more qualified roofing jobs than we can handle. Our phones ring constantly with homeowners who already know our reputation from our strong online presence.',
            clientName: 'Roofing Contractor Owner'
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Roofing"
          customItems={[
            { icon: <FaHome className="w-6 h-6" />, title: 'Roofing Industry Focus', description: 'Specialized in roofing contractor marketing' },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: 'Local Market Experts', description: 'Hyperlocal SEO for your service areas' },
            { icon: <FaChartLine className="w-6 h-6" />, title: 'Proven Lead Generation', description: 'Consistent results for roofers nationwide' },
            { icon: <FaTrophy className="w-6 h-6" />, title: 'Industry Recognition', description: 'Trusted by leading roofing contractors' },
            { icon: <FaBriefcase className="w-6 h-6" />, title: 'Full-Service SEO', description: 'Complete optimization from technical to content' },
            { icon: <FaChartArea className="w-6 h-6" />, title: 'Transparent Reporting', description: 'Clear ROI tracking with job attribution' }
          ]}
        />

        <TopSEOServices />

        {/* Services Grid */}

        {/* Industries Grid */}
        <IndustriesGrid />

        {/* Testimonials */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Roofing Contractors
              </h2>
              <p className="text-gray-400">
                See what roofing professionals say about My SEO services
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-red-900/20 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Roofing Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover How I can help you generate more roofing leads and dominate your local market.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all"
            >
              Get Your Free SEO Audit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
