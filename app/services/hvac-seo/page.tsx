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
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import TopSEOServices from '@/components/services/TopSEOServices';

import { FaBell, FaBolt, FaBriefcase, FaBuilding, FaCalendar, FaCertificate, FaChartArea, FaChartBar, FaChartLine, FaCog, FaDollarSign, FaEdit, FaFire, FaHome, FaMapMarkerAlt, FaRocket, FaSearch, FaSnowflake, FaTags, FaTools, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: "HVAC SEO Services | Heating & Air Conditioning Company Marketing Expert",
  description: "Specialized SEO services for HVAC companies. Generate more leads for AC repair, heating installation, and HVAC services with proven local SEO strategies. Expert HVAC marketing agency.",
  keywords: "HVAC SEO, HVAC SEO services, air conditioning marketing, heating contractor SEO, HVAC company marketing, AC repair SEO, furnace installation marketing, HVAC digital marketing, HVAC contractor SEO, heating and cooling SEO, HVAC local SEO, HVAC marketing agency",
  openGraph: {
    title: "HVAC SEO Services | Heating & Air Conditioning Company Marketing Expert",
    description: "Specialized SEO services for HVAC companies. Increase leads for AC repair, heating, and HVAC maintenance services.",
    type: "website",
  },
};

const seoFrameworkFaqs = [
  {
    question: "What is SEO for HVAC companies?",
    answer: "SEO for HVAC companies is a specialized digital marketing strategy focused on improving the online visibility of heating and air conditioning contractors. It includes local SEO optimization, service page creation for different HVAC services, Google Business Profile management, and content marketing around HVAC topics. Effective HVAC SEO helps homeowners and businesses find your services when searching for heating, cooling, or air quality solutions in their area."
  },
  {
    question: "How can SEO help my HVAC business get more leads?",
    answer: "SEO helps HVAC businesses capture high-intent customers actively searching for heating and cooling services. By ranking for keywords like 'AC repair near me,' 'HVAC installation [city name],' or 'furnace repair,' you connect with property owners ready to hire. Local SEO ensures your company appears in Google Maps results, while optimized service pages convert visitors into calls. Most HVAC companies see 60-150% increases in qualified leads within 6-12 months of implementing proper SEO."
  },
  {
    question: "What keywords should HVAC companies target?",
    answer: "HVAC companies should target a mix of service-based, location-based, and seasonal keywords. High-value terms include 'AC repair [city],' 'HVAC installation near me,' 'furnace repair,' 'air conditioning service,' 'heating contractor,' and 'HVAC maintenance.' Long-tail keywords like 'emergency AC repair,' 'how often replace HVAC filter,' 'furnace not working,' and 'central air installation cost' attract research-phase prospects with specific needs."
  },
  {
    question: "How long does it take to see SEO results for an HVAC company?",
    answer: "HVAC SEO typically shows initial improvements in 3-4 months with significant results in 6-12 months. Quick wins include Google Business Profile optimization (2-4 weeks for improved map visibility) and technical SEO fixes. Competitive service keywords like 'AC repair' take 6-9 months to rank. Factors affecting timeline include your website's current authority, local competition, and consistency of optimization efforts. Seasonal keywords (AC repair in summer) often rank faster when optimized before peak season."
  },
  {
    question: "Why is local SEO important for HVAC businesses?",
    answer: "Local SEO is crucial for HVAC companies because customers need trusted local contractors who can respond quickly for repairs and installations. Over 85% of HVAC service searches have local intent. Local SEO ensures your company appears in the Google Map Pack for 'HVAC company near me' and 'AC repair [city]' searches. It builds trust through local reviews, establishes service area visibility, and connects you with property owners specifically in your coverage zone."
  },
  {
    question: "How much should an HVAC company invest in SEO?",
    answer: "HVAC companies typically invest $2,000-$6,000 monthly in professional SEO services. New companies or those in smaller markets may start at $1,500-$3,000, while established companies in competitive metropolitan areas often invest $3,500-$8,000+. Consider that one HVAC installation averages $5,000-$15,000 in revenue. Most HVAC companies achieve positive ROI within 5-8 months as SEO-generated leads convert at higher rates than paid advertising and come at lower cost per acquisition."
  },
  {
    question: "What makes HVAC SEO different from general SEO?",
    answer: "HVAC SEO requires understanding the seasonal nature of the industry and the urgency levels of different services. It involves optimizing for both emergency repairs (AC failure in summer) and planned installations. Content must address system types, energy efficiency, maintenance schedules, and common HVAC problems. Local SEO is intensified because customers need nearby contractors for urgent repairs. Schema markup includes emergency availability, service response times, and seasonal service capabilities."
  },
  {
    question: "Should I focus on residential or commercial HVAC services for SEO?",
    answer: "your SEO focus depends on your business model and profit margins. Residential HVAC services offer higher search volume with keywords like 'home AC repair' and 'residential HVAC installation.' Commercial HVAC services have lower volume but higher contract values—'commercial HVAC contractor' and 'building HVAC systems.' Many successful companies optimize for both with separate service pages. Starting with residential often builds authority that helps commercial rankings."
  },
  {
    question: "How do online reviews impact HVAC SEO?",
    answer: "Online reviews are critical for HVAC SEO because heating and cooling services are significant home investments. Google reviews directly impact local pack rankings and click-through rates. Companies with 50+ reviews averaging 4.5+ stars dominate local results. Reviews mentioning specific services (AC repair, furnace installation, system maintenance) help keyword relevance. Responding to all reviews signals active business management. Recent reviews carry more weight, especially during peak cooling and heating seasons."
  },
  {
    question: "What content should an HVAC website include for SEO?",
    answer: "Effective HVAC websites include: service pages for each offering (AC repair, heating installation, HVAC maintenance, duct cleaning), location pages for service areas, system comparison guides, seasonal maintenance content, FAQ pages addressing common concerns, before/after installation galleries, and a regularly updated blog covering HVAC topics. Include trust signals like licensing information, certifications (NATE, EPA), manufacturer partnerships, warranties, and energy efficiency expertise."
  },
  {
    question: "How can I optimize my Google Business Profile for an HVAC company?",
    answer: "Optimize your HVAC company's Google Business Profile by: selecting accurate primary category (HVAC Contractor or Air Conditioning Contractor), adding all relevant secondary categories, uploading professional photos of installations and team, posting weekly updates about seasonal services and maintenance tips, responding to all reviews within 24 hours, adding all service areas, including licensing and certification details, listing all services with descriptions, and keeping hours and emergency availability accurate. Enable messaging for urgent inquiries."
  },
  {
    question: "What technical SEO is important for HVAC websites?",
    answer: "Technical SEO priorities for HVAC websites include: fast mobile page loading (under 3 seconds), proper schema markup for local business and emergency services, optimized site structure with clear service hierarchies, mobile-responsive design for urgent searches, fast emergency contact accessibility, structured data for reviews and ratings, XML sitemap for all service and location pages, and Core Web Vitals optimization. Emergency call buttons should be immediately visible on mobile devices, especially during peak cooling/heating seasons."
  },
  {
    question: "How do I compete with larger HVAC franchises in SEO?",
    answer: "Local HVAC companies compete with franchises through hyperlocal SEO and personalized service positioning. Target neighborhood-specific keywords and 'locally owned HVAC company' searches. Emphasize faster response times, personalized service, competitive pricing, and local ownership. Build strong local reviews and community presence. Create content addressing franchise limitations. Focus on Google Maps visibility where local businesses can outrank national franchises. Partner with local suppliers and property managers for referrals."
  },
  {
    question: "Should I create separate pages for heating and cooling services?",
    answer: "Yes, dedicated service pages are highly effective for HVAC companies. Create unique pages for major services like AC repair, air conditioning installation, furnace repair, heating installation, HVAC maintenance, duct cleaning, and system replacement. Separate pages for heating vs. cooling allow seasonal optimization and help rank for specific service keywords like 'AC repair [city]' or 'furnace installation [city].' Include service-specific FAQs, pricing guidance, and seasonal information on each page."
  },
  {
    question: "What role does seasonal content play in HVAC SEO?",
    answer: "Seasonal content is crucial for HVAC SEO as service demand fluctuates dramatically throughout the year. Create content around summer AC preparation, fall heating system checks, spring AC tune-ups, and winter furnace maintenance. Publish seasonal blog posts 6-8 weeks before peak demand to allow ranking time. Update service pages with seasonal messaging. This approach captures year-round interest while maximizing visibility during high-demand periods like early summer (AC) and early winter (heating)."
  }
];

const hvacServices = [
  {
    icon: <FaSnowflake className="w-6 h-6" />,
    title: "AC Repair & Installation SEO",
    description: "Dominate search results for air conditioning repair, AC installation, and cooling system services in your service area."
  },
  {
    icon: <FaFire className="w-6 h-6" />,
    title: "Heating & Furnace SEO",
    description: "Rank for furnace repair, heating installation, boiler service, and heating system keywords across all target locations."
  },
  {
    icon: <FaWrench className="w-6 h-6" />,
    title: "HVAC Maintenance SEO",
    description: "Capture leads searching for HVAC tune-ups, system maintenance, preventive service, and annual contracts."
  },
  {
    icon: <FaHome className="w-6 h-6" />,
    title: "HVAC Installation SEO",
    description: "Optimize for complete system replacement, new HVAC installation, and system upgrade services in your market."
  },
  {
    icon: "🌬️",
    title: "Air Quality Services SEO",
    description: "Attract customers seeking duct cleaning, air purifier installation, humidity control, and indoor air quality solutions."
  },
  {
    icon: <FaBuilding className="w-6 h-6" />,
    title: "Commercial HVAC SEO",
    description: "Expand into commercial services with optimization for commercial HVAC, building systems, and large-scale maintenance contracts."
  }
];

const hvacFaqs = [
  {
    question: "How quickly can SEO start generating leads for my HVAC company?",
    answer: "Most HVAC companies see initial lead improvements within 2-3 months through Google Business Profile optimization and quick technical fixes. Significant organic traffic growth typically occurs in 4-6 months, with substantial lead generation by months 6-9. Seasonal services optimized before peak season (AC before summer, heating before winter) often produce faster results."
  },
  {
    question: "Do you work with both residential and commercial HVAC contractors?",
    answer: "Yes, I develop SEO strategies for both residential HVAC companies and commercial HVAC contractors. Each requires different keyword targeting, content approaches, and local SEO tactics. Many clients start with residential focus and expand to commercial as their organic presence grows and authority builds in their market."
  },
  {
    question: "How do you handle SEO for HVAC companies with multiple service areas?",
    answer: "I create dedicated location pages for each service area, optimize individual Google Business Profiles for each location (if applicable), and develop market-specific content strategies. My approach ensures consistent branding while targeting location-specific keywords like 'AC repair [city]' and building local authority through community involvement and local citations."
  },
  {
    question: "What makes your HVAC industry SEO different from general marketing agencies?",
    answer: "I understand the HVAC industry's seasonal patterns, emergency service dynamics, and competitive landscape. Our strategies account for the high urgency of cooling/heating failures, the importance of energy efficiency messaging, manufacturer certification showcase, and the balance between repair and installation optimization. We know how to position local HVAC companies against national franchise brands."
  },
  {
    question: "Can you help with reputation management for my HVAC business?",
    answer: "Absolutely. Reputation management is integral to HVAC SEO. I implement review generation systems, monitor and respond to reviews across platforms, address negative feedback strategically, and build your online reputation. For HVAC companies, timing review requests after successful service completion is critical, especially for emergency repairs that showcase your rapid response capabilities."
  },
  {
    question: "How do you track ROI from SEO for HVAC services?",
    answer: "We track multiple metrics including organic lead volume, cost-per-lead compared to paid advertising, lead-to-customer conversion rates, average job value from SEO leads (repair vs. installation), and ranking improvements for target keywords. Monthly reporting shows clear attribution from organic search to completed jobs, with typical HVAC companies seeing 3-5x ROI within the first year."
  }
];

export default function HVACSEOPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-950">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://adeelahmad.com/services/hvac-seo#service",
                "serviceType": "HVAC SEO Services",
                "name": "HVAC SEO Services",
                "description": "Specialized SEO services for HVAC companies. Generate more leads for AC repair, heating installation, and HVAC services with proven local SEO strategies.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "HVAC Marketing & SEO Expert"
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
                "@id": "https://adeelahmad.com/services/hvac-seo#webpage",
                "url": "https://adeelahmad.com/services/hvac-seo",
                "name": "HVAC SEO Services | Heating & Air Conditioning Company Marketing Expert",
                "description": "Specialized SEO services for HVAC companies. Generate more leads for AC repair, heating installation, and HVAC services with proven local SEO strategies.",
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
                    "name": "HVAC SEO",
                    "item": "https://adeelahmad.com/services/hvac-seo"
                  }
                ]
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
        {/* Hero Section with Animated Background */}
        <section className="relative py-24 overflow-hidden">
          {/* Dark animated background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-red-950/30 to-gray-950"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-red-400 text-sm font-medium">❄️🔥 HVAC SEO Specialists</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-orange-200 bg-clip-text text-transparent">
                  HVAC SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
                  Specialized SEO strategies for HVAC companies, heating contractors, and air conditioning services. Generate more qualified leads and dominate local search results.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
                  >
                    Get Your Free HVAC SEO Audit
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View Case Studies
                  </Link>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>HVAC Industry Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Seasonal SEO Expertise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Lead Generation Proven</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form - 2 columns */}
              <div className="lg:col-span-2">
                <HeroContactForm 
                  title="Get Your Free SEO Audit"
                  subtitle="Discover what's holding your website back from page 1 rankings"
                  buttonText="Get Free Consultation"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Framework Section */}
        <SEOFramework 
          industry="HVAC" 
          faqs={seoFrameworkFaqs}
        />

        {/* Countries/Locations Grid */}
        <CountriesGrid 
          industrySlug="hvac-seo"
          industryIcon="❄️"
        />

        {/* Why Choose Me Section */}
        <WhyChooseMe industry="HVAC" />

        {/* Hire Local SEO Section */}
        <HireLocalSEO industry="HVAC" />

        {/* Services Grid Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Specialized HVAC SEO Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions tailored for heating, cooling, and HVAC maintenance companies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hvacServices.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <IndustryStats 
          industry="HVAC Services"
          stats={[
            { value: "265%", label: "Avg. Lead Increase", icon: <FaChartLine className="w-6 h-6" />, color: "red" },
            { value: "81%", label: "Local Pack Rankings", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "orange" },
            { value: "4.2x", label: "ROI Within 12 Months", icon: <FaDollarSign className="w-6 h-6" />, color: "amber" },
            { value: "62%", label: "Cost Per Lead Reduction", icon: <FaChartBar className="w-6 h-6" />, color: "yellow" }
          ]}
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          industry="HVAC"
          steps={[
            { step: 1, title: "HVAC Market Analysis", description: "Comprehensive audit of your local HVAC market, seasonal trends, and competitor positioning", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1-2" },
            { step: 2, title: "Technical & Local SEO", description: "Website optimization, Google Business Profile enhancement, and HVAC service schema implementation", icon: <FaCog className="w-6 h-6" />, duration: "Week 2-4" },
            { step: 3, title: "Service Page Development", description: "Creating optimized pages for each HVAC service: AC repair, heating, installation, maintenance", icon: <FaEdit className="w-6 h-6" />, duration: "Week 4-6" },
            { step: 4, title: "Content & Authority Building", description: "HVAC-focused content marketing, seasonal content, local citations, and industry-relevant links", icon: <FaTools className="w-6 h-6" />, duration: "Week 6-10" },
            { step: 5, title: "Review & Reputation Growth", description: "Implementing review generation systems and managing your online reputation", icon: "⭐", duration: "Week 10-14" },
            { step: 6, title: "Scale & Optimize", description: "Expanding to new service areas and optimizing for peak seasonal demand", icon: <FaRocket className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="HVAC"
          pillars={[
            { 
              title: "Air Conditioning Services", 
              description: "Content focused on cooling services to capture searches around AC repair, installation, and seasonal maintenance.",
              topics: ["AC Repair", "Air Conditioning Installation", "AC Maintenance", "Central Air Systems", "Ductless Mini-Split", "Emergency AC Service"],
              icon: <FaSnowflake className="w-6 h-6" />
            },
            { 
              title: "Heating Services", 
              description: "Heating-focused content that ranks for furnace, boiler, and heat pump services during colder seasons.",
              topics: ["Furnace Repair", "Heating Installation", "Boiler Service", "Heat Pump Systems", "Radiant Heating", "Emergency Heating Service"],
              icon: <FaFire className="w-6 h-6" />
            },
            { 
              title: "HVAC Installation & Replacement", 
              description: "High-intent content around full system installs and replacements to drive profitable installation leads.",
              topics: ["Complete System Replacement", "New HVAC Installation", "System Upgrades", "Energy-Efficient Systems", "Zoned HVAC", "Smart Thermostats"],
              icon: <FaHome className="w-6 h-6" />
            },
            { 
              title: "Maintenance & Air Quality", 
              description: "Content that promotes recurring maintenance plans and indoor air quality improvements for long-term customers.",
              topics: ["HVAC Tune-ups", "Preventive Maintenance", "Duct Cleaning", "Air Purification", "Humidity Control", "Filter Replacement"],
              icon: <FaTools className="w-6 h-6" />
            }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="HVAC"
          signals={[
            { title: "HVAC Service Categories", description: "Proper Google Business Profile categorization for heating, cooling, and HVAC services", importance: "Critical", icon: <FaTags className="w-6 h-6" /> },
            { title: "Licensing & Certification Display", description: "Showcasing HVAC licenses, EPA certifications, NATE certifications, and manufacturer partnerships", importance: "Critical", icon: <FaCertificate className="w-6 h-6" /> },
            { title: "Emergency Availability", description: "Highlighting 24/7 service, emergency response times, and seasonal availability", importance: "High", icon: <FaBell className="w-6 h-6" /> },
            { title: "Service Area Coverage", description: "Clear geographic targeting with city, neighborhood, and response time information", importance: "High", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Seasonal Service Optimization", description: "Emphasizing summer AC services and winter heating services at appropriate times", importance: "High", icon: <FaCalendar className="w-6 h-6" /> },
            { title: "Energy Efficiency Expertise", description: "Featuring energy-efficient system knowledge and utility rebate program information", importance: "Medium", icon: <FaBolt className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="HVAC"
          comparisons={[
            { feature: "HVAC Industry Expertise", withSEO: "Deep specialization in HVAC contractor SEO", withoutSEO: "Generic home services marketing" },
            { feature: "Seasonal SEO Strategy", withSEO: "Optimize for summer AC and winter heating peaks", withoutSEO: "One-size-fits-all approach" },
            { feature: "Local SEO Focus", withSEO: "Hyperlocal targeting for service area dominance", withoutSEO: "Broad, unfocused geographic targeting" },
            { feature: "Lead Quality Priority", withSEO: "Optimize for call-ready customers with HVAC needs", withoutSEO: "Focus on traffic over conversions" },
            { feature: "Emergency Service Optimization", withSEO: "Balance urgent repairs and planned installations", withoutSEO: "Generic service page templates" },
            { feature: "Review Strategy", withSEO: "Service-specific review generation and timing", withoutSEO: "Basic review request processes" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="HVAC"
          caseStudy={{
            title: "Regional HVAC Company: 285% Lead Growth",
            industry: "HVAC",
            results: [
              { metric: "Organic Leads", value: "31/month", change: "+285%" },
              { metric: "Map Pack Rankings", value: "7 keywords", change: "+671%" },
              { metric: "Installation Leads", value: "9/month", change: "+322%" },
              { metric: "Cost Per Lead", value: "$95", change: "-66%" }
            ],
            testimonial: "Our HVAC business transformed. We went from slow seasons with no calls to consistent year-round leads. The seasonal optimization strategy was game-changing.",
            clientName: "Multi-location heating and cooling contractor"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="HVAC"
          customItems={[
            { icon: <FaSnowflake className="w-6 h-6" />, title: "HVAC Industry Focus", description: "Specialized in heating and cooling company marketing" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local Market Experts", description: "Hyperlocal SEO for HVAC service areas" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Lead Generation", description: "Consistent results for HVAC companies nationwide" },
            { icon: <FaCalendar className="w-6 h-6" />, title: "Seasonal Strategy", description: "Optimization for year-round and peak season demand" },
            { icon: <FaBriefcase className="w-6 h-6" />, title: "Full-Service SEO", description: "Complete optimization from technical to content" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Reporting", description: "Clear ROI tracking and lead attribution" }
          ]}
        />

        <TopSEOServices />

        {/* Services Grid */}

        {/* Industries Grid */}
        <IndustriesGrid />

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by HVAC Companies
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                See what HVAC contractors say about My SEO services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "We used to struggle in the off-season. Now I have consistent leads year-round and our schedule is packed during summer and winter peaks.",
                  author: "Michael T.",
                  company: "Full-Service HVAC Contractor",
                  rating: 5
                },
                {
                  quote: "The seasonal SEO strategy doubled our installation leads. We're booked out weeks in advance during peak AC season instead of scrambling for work.",
                  author: "Jennifer P.",
                  company: "Heating & Air Conditioning Company",
                  rating: 5
                },
                {
                  quote: "Finally an SEO team that understands HVAC. They helped us dominate Google Maps for our service area and compete with the big franchises.",
                  author: "David S.",
                  company: "Regional HVAC Service Provider",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={hvacFaqs} />

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900/20 to-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your HVAC Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free SEO audit and discover How I can help you generate more qualified leads for your heating and cooling services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 shadow-lg shadow-red-500/25"
              >
                Get Your Free SEO Audit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View HVAC Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
