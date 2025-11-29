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
import { FaCarSide, FaClock, FaMapMarkerAlt, FaDollarSign, FaChartLine, FaPhoneAlt, FaTools, FaCog, FaEdit, FaStar, FaRocket, FaBuilding, FaHome, FaClipboardList, FaHammer, FaShieldAlt, FaBolt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Garage Door SEO Services | Local SEO for Garage Door Repair Companies',
  description: 'Expert SEO services for garage door repair and opener companies. Dominate local search results for garage door installation, spring repair, and opener services. Proven garage door contractor marketing strategies to grow leads and emergency service calls.',
  keywords: 'garage door SEO, garage door repair SEO, garage door company marketing, garage door installer SEO, garage door spring repair marketing, garage door opener SEO, overhead door SEO, local SEO for garage door companies, garage door contractor marketing, garage door lead generation, garage door digital marketing, garage door repair near me SEO',
  openGraph: {
    title: 'Garage Door SEO Services | Local SEO for Garage Door Repair Companies',
    description: 'Expert SEO services for garage door repair and opener companies. Dominate local search and grow your garage door business with proven contractor marketing strategies.',
    type: 'website'
  }
};

export default function GarageDoorRepairOpenerSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Garage Door Repair SEO', url: '/services/garage-door-repair-opener-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my garage door repair company get more service calls?',
      answer: 'When a garage door breaks, homeowners search immediately for help. By ranking first for searches like "garage door repair near me", "broken garage door spring", and "garage door opener repair", you capture customers who need urgent help and are ready to pay for immediate service.'
    },
    {
      question: 'What garage door keywords should I target for maximum ROI?',
      answer: 'I target a strategic mix: emergency terms ("garage door stuck", "broken spring repair"), service keywords ("garage door installation", "opener replacement"), and location searches ("garage door repair [city]"). This captures both urgent repairs and planned installations.'
    },
    {
      question: 'How important is 24/7 messaging for garage door SEO?',
      answer: 'Critical! Many garage door emergencies happen after hours when people cannot get their cars in or out. I optimize for "24/7 garage door repair" and ensure your Google Business Profile shows emergency availability.'
    },
    {
      question: 'Can you help me rank for spring repair searches?',
      answer: 'Absolutely! Broken garage door springs are one of the most common searches. I create dedicated content for torsion spring repair, extension spring replacement, and spring adjustment to capture this high-intent traffic.'
    },
    {
      question: 'How do seasonal trends affect garage door SEO?',
      answer: 'Garage door issues increase in extreme weather - cold winters cause spring breaks, heat affects openers. We publish seasonal content ahead of these periods to capture demand when specific repair searches surge.'
    },
    {
      question: 'What makes garage door SEO different from general contractor marketing?',
      answer: 'Garage door SEO requires targeting emergency intent with extreme urgency. Customers cannot access their homes or vehicles. Speed, 24/7 messaging, and immediate response capability are essential differentiators.'
    },
    {
      question: 'How long does it take to see SEO results for garage door companies?',
      answer: 'Emergency garage door keywords can show results in 2-4 months due to their urgency. Competitive installation terms may take 4-6 months. Most companies see significant call increases by month 3-4.'
    },
    {
      question: 'Should I create content for different garage door issues?',
      answer: 'Yes! Customers search for specific problems like "garage door off track", "opener not working", or "noisy garage door". Dedicated pages for each issue capture targeted searches and demonstrate your expertise.'
    },
    {
      question: 'How important is mobile optimization for garage door repair?',
      answer: 'Critical! Most garage door emergencies result in mobile searches - people are often in their garage or driveway. Your site must load fast and make it easy to call immediately from any device.'
    },
    {
      question: 'Can SEO help me get installation projects?',
      answer: 'Definitely! Beyond repairs, I target "new garage door installation", "garage door replacement", and brand-specific searches. Installation projects have higher values and I optimize for homeowners planning upgrades.'
    },
    {
      question: 'How do you optimize for "garage door repair near me" searches?',
      answer: 'I optimize your Google Business Profile with garage door categories, ensure NAP consistency across directories, create location-specific pages, and generate reviews mentioning fast response and quality repairs.'
    },
    {
      question: 'Should I target commercial garage door keywords?',
      answer: 'If you serve businesses, absolutely! Commercial garage door repair has less competition and recurring maintenance contracts. I target property managers, warehouses, and commercial building searches.'
    },
    {
      question: 'How do you measure garage door SEO success?',
      answer: 'We track rankings for repair and location keywords, Google Business Profile visibility, organic traffic, phone calls, and revenue from SEO-generated service calls. Monthly reports show clear ROI.'
    },
    {
      question: 'Can you help with garage door opener brand searches?',
      answer: 'Yes! I create content for LiftMaster, Chamberlain, Genie, and other major brands. Many customers search for brand-specific repairs or want specific openers installed.'
    },
    {
      question: 'How do you handle service area SEO for garage door companies?',
      answer: 'For companies serving multiple cities, I create separate location pages for each service area. Each page is optimized for local garage door searches with specific city information.'
    },
    {
      question: 'What certifications should I highlight for garage door SEO?',
      answer: 'Manufacturer certifications (LiftMaster, Clopay), bonded and insured status, and years of experience are essential trust signals. We prominently feature these credentials to build customer confidence.'
    }
  ];

  const faqs = [
    {
      question: 'How can SEO help my garage door repair company get more service calls?',
      answer: 'When a garage door breaks, homeowners search immediately for help. By ranking first for searches like "garage door repair near me" and "broken garage door spring", you capture customers who need urgent help and are ready to pay.'
    },
    {
      question: 'What garage door keywords should I target for maximum ROI?',
      answer: 'I target emergency terms ("garage door stuck", "broken spring repair"), service keywords ("garage door installation"), and location searches ("garage door repair [city]"). This captures both urgent repairs and installations.'
    },
    {
      question: 'How long does it take to see SEO results for garage door companies?',
      answer: 'Emergency garage door keywords can show results in 2-4 months due to their urgency. Competitive installation terms may take 4-6 months. Most companies see significant call increases by month 3-4.'
    },
    {
      question: 'How important is 24/7 messaging for garage door SEO?',
      answer: 'Critical! Many garage door emergencies happen after hours when people cannot access their vehicles. I optimize for "24/7 garage door repair" and ensure your visibility for emergency searches.'
    },
    {
      question: 'Can you help me rank for spring repair searches?',
      answer: 'Absolutely! Broken springs are one of the most common searches. I create dedicated content for torsion spring repair, extension spring replacement, and other spring-related keywords.'
    },
    {
      question: 'What makes your garage door SEO different from other agencies?',
      answer: 'I specialize in home services SEO and understand the garage door industry. We know the emergency keywords, seasonal patterns, and conversion tactics that drive service calls. Generic agencies lack this expertise.'
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
                "serviceType": "Garage Door Services SEO",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for garage door companies. Dominate local search for garage door installation, repair, and replacement services."
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
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-indigo-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-blue-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-sky-600/20 via-blue-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-sky-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <FaCarSide className="w-6 h-6 text-blue-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Garage Door SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Garage Door Repair</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When garage doors break, homeowners need help immediately. My SEO strategies ensure your company appears first for urgent repair searches.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">1,700+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Garage Door SEO Audit"
                  subtitle="Discover how to dominate local garage door searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Garage Door Repair" />

        {/* Section 3: Countries Grid */}
        <CountriesGrid industrySlug="garage-door-repair-opener-seo" industryIcon={<FaCarSide />} />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Garage Door Repair" />

        {/* Section 5: Hire Local SEO */}
        <HireLocalSEO industry="Garage Door Repair" />

        {/* Section 6: Services */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Our Garage Door <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for garage door repair companies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Emergency Repair SEO", description: "Rank first for urgent garage door repair searches in your area", icon: "🚨", color: "from-red-500 to-orange-500" },
                { title: "Local Pack Optimization", description: "Dominate Google Maps for garage door contractor searches", icon: "📍", color: "from-blue-500 to-cyan-500" },
                { title: "Spring Repair SEO", description: "Capture high-value spring repair and replacement searches", icon: "🔧", color: "from-gray-500 to-slate-500" },
                { title: "Opener Installation SEO", description: "Rank for opener repair, replacement, and installation", icon: "⚙️", color: "from-purple-500 to-pink-500" },
                { title: "24/7 Optimization", description: "Maximize visibility for after-hours emergency searches", icon: "🌙", color: "from-indigo-500 to-blue-500" },
                { title: "Commercial Door SEO", description: "Target commercial and industrial garage door searches", icon: "🏢", color: "from-orange-500 to-amber-500" }
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
          industry="Garage Door Repair"
          stats={[
            { value: "92%", label: "of garage door searches are for emergency repairs", icon: "🚨", color: "from-blue-500 to-indigo-500" },
            { value: "1hr", label: "average decision time for garage door emergencies", icon: "⏱️", color: "from-red-500 to-orange-500" },
            { value: "95%", label: "of garage door searches have local intent", icon: "📍", color: "from-purple-500 to-pink-500" },
            { value: "$425", label: "average garage door repair service value", icon: "💰", color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Section 8: Process */}
        <ProcessTimeline 
          industry="Garage Door Repair"
          steps={[
            { step: 1, title: "Emergency Audit", description: "Analyze your local garage door market and emergency keyword opportunities.", icon: "🔍", duration: "Week 1" },
            { step: 2, title: "24/7 Optimization", description: "Optimize for emergency searches with click-to-call and location targeting.", icon: "📞", duration: "Week 2" },
            { step: 3, title: "Technical SEO", description: "Ensure fast mobile load times and proper local schema markup.", icon: "⚙️", duration: "Weeks 2-4" },
            { step: 4, title: "Service Pages", description: "Create repair, installation, and part-specific pages with emergency CTAs.", icon: "📝", duration: "Weeks 3-8" },
            { step: 5, title: "Local Domination", description: "Optimize GBP, build citations, and generate emergency reviews.", icon: "📍", duration: "Ongoing" },
            { step: 6, title: "Monitor & Scale", description: "Track rankings, calls, and continuously optimize for emergencies.", icon: "📈", duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Clusters */}
        <TopicClusterSection 
          industry="Garage Door Repair"
          pillars={[
            { title: "Repair Content", description: "Comprehensive repair service pages", topics: ["Spring repair", "Opener repair", "Off-track doors", "Cable replacement"], icon: "🔧" },
            { title: "Installation Content", description: "New door and opener installation", topics: ["New door installation", "Opener installation", "Brand comparisons", "Material guides"], icon: "🚗" },
            { title: "Emergency Content", description: "Urgent repair-focused pages", topics: ["24/7 service", "Emergency repair", "Same-day service", "Quick response"], icon: "🚨" },
            { title: "Location Content", description: "Geo-targeted service area pages", topics: ["City pages", "Neighborhood targeting", "Near me optimization", "Service areas"], icon: "📍" }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Garage Door Repair"
          signals={[
            { title: "Google Business Profile", description: "Optimized with 24/7 hours, garage door categories, and emergency messaging", importance: "Critical", icon: "📍" },
            { title: "Home Service Citations", description: "Listings on Angi, HomeAdvisor, and garage door directories", importance: "Critical", icon: "📋" },
            { title: "Emergency Reviews", description: "Reviews highlighting fast response, fair pricing, and quality repairs", importance: "High", icon: "⭐" },
            { title: "Service Area Pages", description: "Individual pages for each city with emergency contact info", importance: "High", icon: "🏠" },
            { title: "LocalBusiness Schema", description: "Emergency service schema with 24/7 availability markup", importance: "High", icon: "🔧" },
            { title: "Local Emergency Backlinks", description: "Links from local news, home improvement sites", importance: "Medium", icon: "🔗" }
          ]}
        />

        {/* Section 11: Competitor Comparison */}
        <CompetitorComparison 
          industry="Garage Door Repair"
          comparisons={[
            { feature: "Emergency Call Volume", withSEO: "Be the first call when doors break", withoutSEO: "Miss urgent search traffic" },
            { feature: "24/7 Visibility", withSEO: "Rank for after-hours emergency searches", withoutSEO: "Invisible during emergencies" },
            { feature: "Cost Per Lead", withSEO: "Organic leads without paying per click", withoutSEO: "$100-200+ per service lead" },
            { feature: "Local Visibility", withSEO: "Dominate map pack for garage door", withoutSEO: "Rely only on referrals" },
            { feature: "Trust Building", withSEO: "Educational content builds authority", withoutSEO: "No online credibility" },
            { feature: "Installation Jobs", withSEO: "Capture high-value new door projects", withoutSEO: "Miss installation opportunities" }
          ]}
        />

        {/* Section 12: Case Study */}
        <CaseStudyHighlight 
          industry="Garage Door Repair"
          caseStudy={{
            title: "Garage Door Company Growth Story",
            industry: "Garage Door Repair",
            results: [
              { metric: "Service Calls", value: "450%", change: "increase in 6 months" },
              { metric: "Organic Traffic", value: "4.5x", change: "more monthly visitors" },
              { metric: "Google Rankings", value: "#1", change: "for 30+ repair keywords" },
              { metric: "Revenue Growth", value: "$1.4M", change: "from SEO leads annually" }
            ],
            testimonial: "We used to struggle getting emergency calls. Now we're the first result when someone's garage door breaks. Our phones ring constantly with high-value repair jobs.",
            clientName: "Garage Door Company Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Garage Door Repair"
          customItems={[
            { icon: "🚗", title: "Garage Door Expertise", description: "Deep understanding of how customers search for garage door help" },
            { icon: "📈", title: "Emergency Results", description: "Proven 4x+ increases in service calls for garage door companies" },
            { icon: "🔧", title: "Repair Specialists", description: "Expertise in spring, opener, and emergency repair SEO" },
            { icon: "📍", title: "Local SEO Masters", description: "Dominate local search results in your service area" },
            { icon: "📊", title: "Transparent Reporting", description: "Track calls, leads, and revenue from organic search" },
            { icon: "🤝", title: "Dedicated Support", description: "Direct access to your garage door SEO specialist" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14: Services Grid */}

        {/* Section 15: Industries Grid */}
        <IndustriesGrid industries={industries} currentIndustry="garage-door-repair-opener-seo" />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Garage Door SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-sky-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Ready to Dominate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-sky-300">Garage Door Search Results?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Get a free SEO audit and discover How I can help your garage door company capture more emergency calls
            </p>

            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-blue-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
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
