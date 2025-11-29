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
import { FaBell, FaBuilding, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLink, FaLock, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaVideo, FaWrench } from 'react-icons/fa';;

export const metadata: Metadata = {
  title: 'Home Security SEO Services | Local SEO for Security & Alarm Companies',
  description: 'Expert SEO services for home security and alarm companies. Dominate local search for security systems, alarm installation, smart home security, and surveillance cameras. Proven security company marketing strategies to generate more leads.',
  keywords: 'home security SEO, security company marketing, alarm company SEO, security system marketing, smart home security SEO, surveillance camera marketing, security installation SEO, alarm monitoring marketing, local SEO for security companies, home security near me SEO, security lead generation, residential security marketing, commercial security SEO, burglar alarm marketing',
  openGraph: {
    title: 'Home Security SEO Services | Local SEO for Security & Alarm Companies',
    description: 'Expert SEO for home security companies. Generate more leads with proven security company marketing strategies.',
    type: 'website'
  }
};

export default function HomeSecuritySEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Home Security SEO', url: '/services/home-security-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my home security business compete with big brands?',
      answer: 'Local SEO helps independent security companies dominate neighborhood searches. While national brands have recognition, I optimize for hyper-local keywords like "home security installation in [your area]" and build strong local citations that help you outrank larger competitors in your service area. Over 80% of security searches have local intent.'
    },
    {
      question: 'What home security keywords should I target?',
      answer: 'I target a strategic mix of service-based keywords ("home security system installation", "alarm monitoring near me"), brand-specific searches ("ADT alternatives", "Ring installation"), problem-solving queries ("how to secure my home"), and location-based terms. This captures customers at all stages of their security research journey.'
    },
    {
      question: 'How important are reviews for security company SEO?',
      answer: 'Critical! Security is a high-trust purchase. Reviews are a major ranking factor for local SEO and heavily influence customer decisions. I help you generate positive reviews, respond professionally, and showcase testimonials. A strong profile (4.5+ stars with 50+ reviews) significantly boosts rankings and conversions.'
    },
    {
      question: 'Can you help me rank for smart home security searches?',
      answer: 'Yes! I create dedicated pages for smart home integration, app-controlled systems, video doorbells, and connected security products. This helps you capture the growing market of tech-savvy homeowners searching for modern security solutions.'
    },
    {
      question: 'How do you handle commercial security SEO?',
      answer: 'I develop separate strategies for commercial clients with pages targeting "business security systems", "commercial surveillance", and "office alarm installation". Commercial security has lower competition and higher contract values, making it an excellent SEO investment.'
    },
    {
      question: 'What makes home security SEO different?',
      answer: 'Security SEO requires addressing trust signals, licensing credentials, monitoring certifications, and emergency response. I optimize for both equipment sales and recurring monitoring revenue, understanding the full customer lifetime value. Content must balance educational information with conversion optimization.'
    },
    {
      question: 'How long does it take to see SEO results for security companies?',
      answer: 'Most security companies see initial Google Business Profile improvements within 30-45 days with significant organic growth by 90 days. Competitive keywords like "home security" take 4-6 months to dominate, while local neighborhood terms often rank faster within 2-3 months.'
    },
    {
      question: 'Do I need separate pages for alarms, cameras, and monitoring?',
      answer: 'Yes! Creating dedicated pages for alarm systems, security cameras, video doorbells, monitoring services, and smart home integration helps you rank for specific searches and provides better user experience for customers researching particular solutions.'
    },
    {
      question: 'How do seasonal trends affect security SEO?',
      answer: 'Security searches spike during summer vacation season, holiday shopping periods, and after local crime incidents. We adjust your SEO strategy seasonally and create timely content around security awareness months to capture peak demand periods.'
    },
    {
      question: 'Should I create content about security tips and crime prevention?',
      answer: 'Absolutely! Educational content about home security tips, crime prevention, and safety advice attracts early-stage customers. When they decide to upgrade their security, they\'ll remember your helpful site. We balance educational content with strong CTAs for consultation.'
    },
    {
      question: 'How important is mobile optimization for security companies?',
      answer: 'Essential! Many security searches happen after security concerns or break-ins. Mobile-first design, fast loading, easy-to-find phone numbers, and click-to-call buttons are critical for capturing urgent security inquiries.'
    },
    {
      question: 'What role do installation photos play in SEO?',
      answer: 'Installation photos boost engagement, increase time on site, and rank in Google Images. They build trust and demonstrate professional installations, indirectly improving SEO through better user signals and lower bounce rates.'
    },
    {
      question: 'How do you optimize for "home security near me" searches?',
      answer: 'I optimize your Google Business Profile, ensure NAP consistency across directories, create location-specific pages, use local schema markup, and build citations on security and home service directories to dominate "near me" searches.'
    },
    {
      question: 'Should I target monitoring service keywords?',
      answer: 'Yes! Monitoring services provide recurring revenue. I create pages targeting "professional monitoring", "24/7 alarm monitoring", and "monitoring plans" to capture customers specifically looking for monitoring services, which have excellent long-term value.'
    },
    {
      question: 'How do you measure security company SEO success?',
      answer: 'We track local rankings, Google Business Profile views/calls, organic website traffic, consultation requests, phone calls from organic search, and most importantly, signed contracts and monitoring subscriptions from SEO leads. You get detailed monthly ROI reports.'
    },
    {
      question: 'Can SEO help with smart home integration services?',
      answer: 'Absolutely! Smart home security is growing rapidly. I optimize for keywords like "smart home security", "home automation security", and integration with Alexa, Google Home, and Apple HomeKit to capture tech-forward customers.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my home security business compete with big brands?',
      answer: 'Local SEO helps independent security companies dominate neighborhood searches. While national brands have recognition, I optimize for hyper-local keywords like "home security installation in [your area]" and build strong local citations that help you outrank larger competitors in your service area.'
    },
    {
      question: 'What home security keywords should I target?',
      answer: 'I target a strategic mix: service-based ("security system installation"), brand comparisons ("ADT alternatives"), smart home ("Ring doorbell installation"), and location searches ("alarm company in [city]"). This captures customers at all decision stages.'
    },
    {
      question: 'How important are reviews for security company SEO?',
      answer: 'Critical! Security is a high-trust purchase. Reviews are a major ranking factor and heavily influence decisions. I help generate positive reviews and showcase testimonials. Strong profiles (4.5+ stars with 50+ reviews) significantly boost rankings and conversions.'
    },
    {
      question: 'Can you help me rank for smart home security searches?',
      answer: 'Yes! I create dedicated pages for smart integration, app-controlled systems, video doorbells, and connected products to capture the growing tech-savvy homeowner market.'
    },
    {
      question: 'How do you handle commercial security SEO?',
      answer: 'I develop separate strategies with pages targeting "business security", "commercial surveillance", and "office alarms". Commercial security has lower competition and higher contract values.'
    },
    {
      question: 'How long does it take to see SEO results?',
      answer: 'Initial Google Business Profile improvements show within 30-45 days with significant organic growth by 90 days. Competitive keywords take 4-6 months while local terms often rank faster within 2-3 months.'
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
                "serviceType": "Home Security SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for home security companies. Dominate local search for home security systems, alarm installation, and security monitoring services."
              }
            ])
          }}
        />
        
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-600/30 via-emerald-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-600/25 via-cyan-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
            <div className="absolute top-20 left-10 w-20 h-20 border border-green-400/30 rounded-lg rotate-45 animate-float" />
            <div className="absolute bottom-40 right-20 w-16 h-16 border-2 border-emerald-400/30 rounded-full animate-float animation-delay-2000" />
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/15 rounded-lg rotate-12 animate-float animation-delay-4000" />
          </div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-green-400/30 mb-8 animate-scale-in shadow-lg shadow-green-500/20">
                  <FaLock className="w-6 h-6 text-green-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Home Security SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Home Security</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When homeowners need security systems, they search for alarm system installation and home security services. Our specialized SEO strategies ensure your security company appears first in local search results.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1">1,800+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Home Security SEO Audit"
                  subtitle="Discover how to dominate local security searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework faqs={seoFrameworkFaqs} industry="Home Security" />

        <CountriesGrid 
          industrySlug="home-security-seo"
          industryIcon={<FaLock />}
        />

        <WhyChooseMe industry="Home Security" />

        <HireLocalSEO industry="Home Security" />

        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Home Security <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for security companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Alarm System SEO", description: "Rank for alarm installation, monitoring, and smart alarm searches", icon: <FaBell className="w-6 h-6" />, color: "from-red-500 to-orange-500" },
                { title: "Camera & Surveillance SEO", description: "Optimize for security camera, CCTV, and video surveillance keywords", icon: <FaVideo className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
                { title: "Smart Home Security", description: "Target searches for smart locks, video doorbells, and home automation", icon: <FaHome className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
                { title: "Monitoring Services SEO", description: "Rank for 24/7 monitoring, professional monitoring, and alarm response", icon: <FaPhoneAlt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
                { title: "Commercial Security SEO", description: "Optimize for business security, commercial surveillance, and access control", icon: <FaBuilding className="w-6 h-6" />, color: "from-indigo-500 to-blue-500" },
                { title: "Service Area Optimization", description: "Create location-specific pages for each city and neighborhood you serve", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-teal-500 to-cyan-500" }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
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

        <IndustryStats 
          industry="Home Security"
          stats={[
            { value: "82%", label: "of homeowners research security systems online", icon: <FaSearch className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "67%", label: "of local security searches result in contact within 24 hours", icon: <FaPhoneAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "89%", label: "of customers read reviews before choosing a security company", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "3.2x", label: "higher conversion rate from organic vs paid ads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Home Security"
          steps={[
            { step: 1, title: "Security Market Analysis", description: "Analyze your local security market, competitor landscape, and identify high-value keyword opportunities for alarm and monitoring services.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Security Keyword Strategy", description: "Map out target keywords including alarm systems, surveillance, smart home security, and monitoring service terms that drive qualified leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical & GBP Setup", description: "Optimize website speed, implement security service schema markup, and fully optimize Google Business Profile for local visibility.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Service & Location Pages", description: "Create optimized pages for alarm systems, cameras, monitoring, smart home, and location-specific landing pages.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Authority & Review Building", description: "Build citations on security directories, implement review generation systems, and create trust signals.", icon: "⭐", duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "Track rankings, leads, and revenue, continuously optimizing to capture more security installation and monitoring opportunities.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Home Security"
          pillars={[
            { title: "Alarm Systems", description: "Comprehensive alarm installation and monitoring content", topics: ["Alarm installation", "Monitoring services", "Wireless alarms", "Smart alarm systems"], icon: <FaBell className="w-6 h-6" /> },
            { title: "Surveillance Solutions", description: "Security camera and video surveillance pages", topics: ["Security cameras", "CCTV systems", "Video surveillance", "Camera installation"], icon: <FaVideo className="w-6 h-6" /> },
            { title: "Smart Home Security", description: "Modern smart security and automation", topics: ["Video doorbells", "Smart locks", "Home automation", "App control"], icon: <FaHome className="w-6 h-6" /> },
            { title: "Local Service Areas", description: "Geo-targeted pages for coverage areas", topics: ["City pages", "Neighborhood targeting", "Service area optimization", "Near me rankings"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Home Security"
          signals={[
            { title: "Google Business Profile", description: "Optimized with security categories, service areas, installation photos, and monitoring credentials", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Security Citations", description: "Listings on HomeAdvisor, Angi, Yelp, and security-specific directories", importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Trust & Reviews", description: "5-star reviews highlighting alarm quality, monitoring response, and professional installation", importance: "High", icon: "⭐" },
            { title: "Service Area Content", description: "Individual pages for each city and neighborhood in your service territory", importance: "High", icon: <FaHome className="w-6 h-6" /> },
            { title: "Security Schema", description: "LocalBusiness and Service schema with security specialties and certifications", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Industry Backlinks", description: "Links from home improvement sites, local news, and security industry associations", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        <CompetitorComparison 
          industry="Home Security"
          comparisons={[
            { feature: "Local Search Visibility", withSEO: "Appear first for 'security systems near me'", withoutSEO: "Competitors capture local leads" },
            { feature: "Smart Home Searches", withSEO: "Rank for video doorbell, smart lock installations", withoutSEO: "Miss growing smart security market" },
            { feature: "Cost Per Lead", withSEO: "Free organic leads that compound monthly", withoutSEO: "$80-200+ per lead from ads" },
            { feature: "Customer Trust", withSEO: "Organic results = higher trust and authority", withoutSEO: "Paid ads often get ignored" },
            { feature: "Local Pack Dominance", withSEO: "Own the map 3-pack for security searches", withoutSEO: "Invisible to local searchers" },
            { feature: "Recurring Revenue", withSEO: "Monitoring leads convert while you sleep", withoutSEO: "Limited to referrals only" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Home Security"
          caseStudy={{
            title: "Regional Security Company Growth",
            industry: "Home Security Systems",
            results: [
              { metric: "Installation Leads", value: "285%", change: "increase in 8 months" },
              { metric: "Monitoring Signups", value: "3.4x", change: "more monthly contracts" },
              { metric: "Local Rankings", value: "#1", change: "for 42+ keywords" },
              { metric: "Revenue Growth", value: "192%", change: "year over year" }
            ],
            testimonial: "We went from struggling against national brands to dominating local search. The monitoring contracts from SEO leads alone pay for the service 10x over.",
            clientName: "Security Company Owner"
          }}
        />

        <TrustSignals 
          industry="Home Security"
          customItems={[
            { icon: <FaLock className="w-6 h-6" />, title: "Security Industry Expertise", description: "Deep understanding of how homeowners research and buy security systems" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Security SEO", description: "Track record of getting security companies to #1 in competitive markets" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Smart Home Focus", description: "Expertise in modern security tech and smart home integration keywords" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "Recurring Revenue Focus", description: "Strategies that prioritize high-value monitoring contract leads" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Clear ROI Tracking", description: "Transparent reporting showing leads, installs, and monitoring signups" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to security SEO specialists who understand your industry" }
          ]}
        />

        <TopSEOServices />


        <IndustriesGrid industries={industries} currentIndustry="home-security-seo" />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 dark:from-slate-950 dark:via-green-950/30 dark:to-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from security companies that trusted us with their SEO
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Common Questions About Home Security SEO" />

        <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300">Home Security Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free SEO audit and discover How I can help your security company attract more installation and monitoring customers
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 animate-scale-in">
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-green-600 font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105"
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
                <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">No Long-Term Contracts</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Guaranteed Results</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
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
