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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaUserMd, FaHeartbeat, FaShieldAlt } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Dental SEO Services | Dentist Marketing | Attract More Patients to Your Practice',
  description: 'Expert dental SEO for dental practices, cosmetic dentistry, and orthodontists. Dominate local search for dentist near me, cosmetic dentistry, and emergency dental services.',
  keywords: 'dental seo, dentist seo, dental practice marketing, cosmetic dentistry seo, orthodontist seo, emergency dentist seo, dental marketing, dentist near me optimization, family dentistry seo',
  openGraph: {
    title: 'Dental SEO Services | Dentist Marketing',
    description: 'Expert dental SEO to attract more patients. Dominate local search for dental services.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental SEO Services | Patient Acquisition',
    description: 'Attract more dental patients with expert SEO strategies for dental practices.'
  }
};

export default function DentalSEOPage() {
  const industry = industries.find(i => i.slug === 'dental-seo') || industries[0];
  
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: industry.name, href: `/services/${industry.slug}` }
  ];

  const allLocations = countries.map(country => ({
    name: country.name,
    code: country.code,
    slug: country.code.toLowerCase()
  }));

  // Comprehensive FAQs for SEO Framework Section (15+ questions)
  const seoFrameworkFaqs = [
    {
      question: 'Why is SEO important for dental practices?',
      answer: 'Patients search online for dentists before making appointments - 82% of patients use search engines to find dental care. SEO ensures your practice appears when potential patients search for "dentist near me", "cosmetic dentistry", or "emergency dental services". It\'s the most cost-effective way to attract new patients consistently.'
    },
    {
      question: 'How is dental SEO different from general healthcare SEO?',
      answer: 'Dental SEO focuses on specific services like cleanings, fillings, crowns, implants, whitening, and cosmetic procedures. It emphasizes visual proof of work (smile transformations), insurance acceptance, emergency availability, family-friendly services, and local "dentist near me" optimization. The buying cycle is shorter than general healthcare.'
    },
    {
      question: 'What keywords should dental practices target?',
      answer: 'Target service-specific keywords ("teeth whitening", "dental implants"), location-based searches ("dentist near me", "dentist in [city]"), emergency terms ("emergency dentist open now"), cosmetic queries ("cosmetic dentistry"), insurance-related searches ("dentist accepts [insurance]"), and family dentistry terms ("pediatric dentist", "family dental practice").'
    },
    {
      question: 'How long does it take to see results from dental SEO?',
      answer: 'You\'ll typically see initial ranking improvements in 2-3 months, with significant patient acquisition growth by months 4-6. Dental SEO builds cumulative visibility - once established, you generate consistent patient bookings without ongoing advertising costs, reducing your patient acquisition cost substantially.'
    },
    {
      question: 'Should we showcase before/after photos for SEO?',
      answer: 'Absolutely! Before/after galleries of smile transformations, cosmetic work, and dental treatments build trust and engage visitors. Optimized with proper alt text and descriptions, they help you rank in image search and demonstrate your cosmetic dentistry expertise, significantly improving conversion rates.'
    },
    {
      question: 'How important are reviews for dental practices?',
      answer: 'Critical! 94% of patients read reviews before choosing a dentist. I help generate more 5-star reviews through compliant request systems, respond professionally to all feedback, and showcase testimonials. A strong review profile (4.5+ stars with 100+ reviews) dramatically improves local rankings and patient trust.'
    },
    {
      question: 'Can SEO help with emergency dental calls?',
      answer: 'Yes! Optimizing for emergency-related searches like "emergency dentist near me", "same-day dental appointment", "tooth pain emergency" captures patients in urgent need. I ensure your practice appears prominently for emergency searches with clear availability messaging and click-to-call functionality.'
    },
    {
      question: 'How do we optimize for insurance-related searches?',
      answer: 'Many patients search for dentists who accept their insurance. I optimize for "[insurance] dentist near me", create dedicated insurance acceptance pages, prominently display accepted insurance plans, and structure content so search engines understand your insurance affiliations, capturing this high-intent traffic.'
    },
    {
      question: 'Should we create pages for each dental service?',
      answer: 'Absolutely! Dedicated pages for cleanings, fillings, crowns, bridges, implants, root canals, whitening, veneers, Invisalign, and other services help you rank for specific treatment searches. Each page targets unique keywords and provides detailed information patients seek when researching procedures.'
    },
    {
      question: 'What role does Google Business Profile play for dentists?',
      answer: 'Extremely important! A fully optimized Google Business Profile is crucial for "dentist near me" searches and local map rankings. I optimize with correct categories, service descriptions, office hours, insurance accepted, photos of your practice and team, patient reviews, and regular posts about services and promotions.'
    },
    {
      question: 'How do we compete with large dental chains and franchises?',
      answer: 'Independent practices can outrank chains through hyper-local optimization, personalized patient care messaging, showcasing your experienced team, highlighting family-owned practice benefits, building strong local reviews, and emphasizing community involvement. I position you as the trusted local dentist, not just another corporate chain.'
    },
    {
      question: 'Should we optimize for cosmetic dentistry separately?',
      answer: 'Yes! Cosmetic dentistry searches ("teeth whitening", "veneers", "smile makeover") represent high-value patients. I create dedicated cosmetic dentistry pages with before/after galleries, procedure explanations, cosmetic consultation information, and financing options to capture this lucrative market segment.'
    },
    {
      question: 'What dental directories should we be listed on?',
      answer: 'Essential directories include Healthgrades, Vitals, Zocdoc, Yelp, 1-800-DENTIST, and the ADA Find-a-Dentist directory. I ensure consistent NAP (Name, Address, Phone), complete profiles with services offered, insurance accepted, patient reviews, and office photos across all platforms.'
    },
    {
      question: 'How important is local SEO for multi-location dental practices?',
      answer: 'Critical! For multi-location practices, I create dedicated pages for each location, optimize separate Google Business Profiles, build location-specific citations, and implement local schema markup. This ensures each location ranks in their respective service area without cannibalizing each other\'s visibility.'
    },
    {
      question: 'Should we create patient education content?',
      answer: 'Absolutely! Educational content about oral health, procedure explanations, post-treatment care, prevention tips, and common dental concerns attracts patients researching treatments. When patients learn from your helpful content, they\'re more likely to choose your practice and arrive as informed, educated patients.'
    },
    {
      question: 'How do you measure dental SEO success?',
      answer: 'We track local rankings for key dental terms, Google Business Profile actions (calls, direction requests, website visits), organic traffic, new patient appointment requests, phone calls from organic search, online booking conversions, and most importantly, new patient acquisition and revenue. You get clear ROI reporting showing SEO\'s impact on practice growth.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can dental SEO help my practice attract more patients?',
      answer: 'Dental SEO ensures your practice appears first when potential patients search for "dentist near me", specific treatments, or emergency dental services. By dominating local search results, you attract patients actively seeking dental care. SEO provides consistent patient acquisition without the high costs of pay-per-click advertising or traditional marketing.'
    },
    {
      question: 'What makes dental SEO different from other medical specialties?',
      answer: 'Dental SEO emphasizes visual proof of work (smile transformations), focuses heavily on local "near me" searches, targets both general and cosmetic services, addresses emergency dental needs, and requires optimization for insurance acceptance queries. The patient decision cycle is typically shorter than other medical specialties.'
    },
    {
      question: 'Can you help showcase our cosmetic dentistry work?',
      answer: 'Absolutely! I optimize before/after galleries with proper image SEO, create compelling cosmetic dentistry pages targeting smile makeover and aesthetic searches, implement schema markup for visual content, and ensure your transformations rank in image search. Visual proof dramatically improves conversion rates for cosmetic patients.'
    },
    {
      question: 'How do you handle multiple location optimization?',
      answer: 'For multi-location practices, I create dedicated location pages for each office, optimize separate Google Business Profiles, build location-specific citations, implement local schema markup, and develop neighborhood-focused content. This ensures each location ranks in their service area without competing with sister locations.'
    },
    {
      question: 'Will SEO help us attract emergency dental patients?',
      answer: 'Yes! I optimize for emergency-related searches like "emergency dentist near me" and "same-day dental appointment", ensure your contact information is prominent, implement click-to-call functionality, and create emergency service pages. Many dental practices see significant revenue from optimized emergency dental visibility.'
    },
    {
      question: 'How long before we see more patient bookings from SEO?',
      answer: 'Most dental practices see initial improvements in 2-3 months, with significant patient acquisition growth by months 4-6. Once established, SEO provides consistent new patient bookings month after month without ongoing advertising costs, dramatically reducing your cost per new patient.'
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
                "serviceType": "Dental SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for dental practices, cosmetic dentistry, orthodontists, and dental specialists. Dominate local search and attract more patients to your dental practice."
              }
            ])
          }}
        />
        
        {/* Hero Section */}
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
            <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/15 rounded-lg rotate-12 animate-float animation-delay-4000" />
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Right Column: Contact Form */}`n              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Dental SEO Audit"
                  subtitle="Discover how to attract more patients and grow your dental practice"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Patient Acquisition SEO for Dental Practices</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Dental</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When patients need dental care, they search <strong className="text-cyan-300 font-bold">"dentist near me"</strong> or <strong className="text-blue-300 font-bold">"cosmetic dentistry in [city]"</strong>. 
                  Our dental SEO strategies ensure your practice appears <strong className="text-white font-bold">first</strong> in search results, 
                  attracting more patients when they need dental services.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">82%</div>
                    <div className="text-xs text-slate-400 font-medium">Search Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">94%</div>
                    <div className="text-xs text-slate-400 font-medium">Read Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">5.1x</div>
                    <div className="text-xs text-slate-400 font-medium">Booking Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Dental" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Dental" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Dental" />

        {/* Section 6: Dental SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-600/20 dark:border-cyan-400/20 mb-6">
                <span className="text-2xl">🦷</span>
                <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">Comprehensive Dental SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Dental <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Patient acquisition strategies designed specifically for dental practices and specialists
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Dental Service Pages",
                  description: "Optimize pages for every service - cleanings, fillings, crowns, implants, whitening, veneers - to capture patients searching for specific treatments",
                  icon: "🦷",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Cosmetic Dentistry Optimization",
                  description: "Create stunning pages for smile makeovers, veneers, whitening, and aesthetic procedures with before/after galleries that convert high-value patients",
                  icon: "😁",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Insurance Keyword Targeting",
                  description: "Rank for insurance-specific searches like 'dentist accepts [insurance]' to capture patients searching by coverage",
                  icon: <FaShieldAlt className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Emergency Dental Visibility",
                  description: "Optimize for emergency searches like 'emergency dentist near me' and 'same-day dental appointment' to capture urgent care patients",
                  icon: <FaPhoneAlt className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Family Dentistry Marketing",
                  description: "Position your practice for family searches with pediatric, teen, and adult dental content that attracts multi-generational patients",
                  icon: <FaHome className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Patient Education Content",
                  description: "Create helpful content about oral health, procedures, and dental care that builds trust and attracts informed patients",
                  icon: <FaBook className="w-6 h-6" />,
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
          industry="Dental"
          stats={[
            { value: "82%", label: "of patients search online for dentists before making appointments", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "94%", label: "read online reviews before choosing a dental practice", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "73%", label: "search for 'dentist near me' when looking for dental care", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "5.1x", label: "higher patient booking rates from well-optimized dental websites", icon: <FaChartLine className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="Dental"
          steps={[
            { step: 1, title: "Dental SEO Audit", description: "We analyze your current online presence, local rankings, competitor dental practices, and identify opportunities to attract more patients in your service area.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Dental Keyword Strategy", description: "We map out target keywords including service-specific searches, cosmetic dentistry terms, insurance-related queries, and emergency dental keywords that drive patient bookings.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Google Business Profile Optimization", description: "I fully optimize your GBP with dental categories, services offered, office hours, insurance accepted, photos of your practice and team, and patient review generation.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Service & Location Pages", description: "I create optimized pages for every dental service and each location, with treatment information, before/after photos, patient testimonials, and clear booking calls-to-action.", icon: "🦷", duration: "Weeks 3-6" },
            { step: 5, title: "Dental Directory & Reviews", description: "I optimize your profiles on Healthgrades, Vitals, Zocdoc, and dental directories, implement review generation strategies, and manage your online reputation.", icon: <FaUserMd className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track local rankings, patient calls, appointment bookings, and continuously optimize to maximize new patient acquisition from organic search.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Dental"
          pillars={[
            { title: "General Dentistry Content", description: "Comprehensive pages for routine dental services and preventive care", topics: ["Cleanings & exams", "Fillings & repairs", "Root canals", "Extractions"], icon: "🦷" },
            { title: "Cosmetic Dentistry Content", description: "Beautiful pages showcasing aesthetic procedures and smile transformations", topics: ["Teeth whitening", "Veneers", "Smile makeovers", "Bonding"], icon: "😁" },
            { title: "Restorative Dentistry Content", description: "Detailed information about dental restoration and replacement options", topics: ["Dental implants", "Crowns & bridges", "Dentures", "Implant dentures"], icon: <FaUserMd className="w-6 h-6" /> },
            { title: "Patient Education Content", description: "Helpful guides about oral health, procedures, and dental care", topics: ["Oral health tips", "Procedure guides", "Post-treatment care", "Insurance information"], icon: <FaBook className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Dental"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with dental categories, services offered, office hours, insurance accepted, photos of practice and team, patient reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Dental Directory Citations", description: "Listings on Healthgrades, Vitals, Zocdoc, 1-800-DENTIST, ADA Find-a-Dentist, and local dental directories", importance: "Critical", icon: <FaUserMd className="w-6 h-6" /> },
            { title: "Patient Reviews", description: "High-quality reviews on Google, Yelp, and dental platforms mentioning specific services and staff", importance: "High", icon: "⭐" },
            { title: "Dentist Schema Markup", description: "Dentist and MedicalBusiness schema with services, insurance accepted, and practice information", importance: "High", icon: "🦷" },
            { title: "Before/After Gallery Optimization", description: "Cosmetic dentistry photo galleries with proper alt text, descriptions, and location tags", importance: "Medium", icon: "😁" },
            { title: "Local Dental Community Links", description: "Links from dental associations, local healthcare organizations, and community partnerships", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Dental"
          comparisons={[
            { feature: "Patient Discovery", withSEO: "Patients find you when searching for dentists", withoutSEO: "Only referrals and walk-ins" },
            { feature: "Emergency Patients", withSEO: "Capture urgent dental care searches", withoutSEO: "Miss emergency patient opportunities" },
            { feature: "Cost Per Patient", withSEO: "Free organic patient acquisition", withoutSEO: "$150-400+ per patient from ads" },
            { feature: "Cosmetic Dentistry", withSEO: "Attract high-value cosmetic patients", withoutSEO: "Limited cosmetic patient reach" },
            { feature: "Online Reputation", withSEO: "Showcase 100+ 5-star reviews", withoutSEO: "Patients can't verify your quality" },
            { feature: "24/7 Lead Generation", withSEO: "Generate bookings around the clock", withoutSEO: "Limited to business hours marketing" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Dental"
          caseStudy={{
            title: "Dental Practice Transformation",
            industry: "Dental",
            results: [
              { metric: "New Patients", value: "395%", change: "increase in 8 months" },
              { metric: "Monthly Bookings", value: "5.3x", change: "appointment growth" },
              { metric: "Dental Keywords", value: "#1", change: "for 32+ dental terms" },
              { metric: "Practice Revenue", value: "178%", change: "year over year growth" }
            ],
            testimonial: "We went from struggling to fill our schedule to having a waiting list for new patients. The SEO investment has completely transformed our practice growth. We're attracting exactly the type of patients we want to serve.",
            clientName: "Dental Practice Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Dental"
          customItems={[
            { icon: "🦷", title: "Dental Industry Expertise", description: "Deep understanding of dental practice marketing, patient acquisition, and dental SEO best practices" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Patient Growth", description: "Track record of helping dental practices dominate local search and attract consistent new patients" },
            { icon: "😁", title: "Cosmetic Dentistry Focus", description: "Specialized expertise in attracting high-value cosmetic dentistry patients through visual optimization" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Local Dental Market Mastery", description: "Expert in helping dental practices outrank competitors for 'dentist near me' and local searches" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Patient Metrics", description: "Clear reporting showing calls, bookings, new patients, and revenue from organic search" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Dental Support", description: "Direct access to your SEO specialist who understands dental practice growth challenges" }
          ]}
        />

        <TopSEOServices />

        {/* Section 14-15: Services & Industries */}
        <IndustriesGrid industries={industries} currentIndustry={industry.slug} />

        {/* Section 16: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 dark:border-yellow-400/20 mb-6">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Dental Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Dental Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from dental practices that trusted us with their patient growth
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Dental SEO" />

        {/* Section 18: Final CTA */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 overflow-hidden">
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
              <span className="text-sm font-bold">Start Growing Your Practice Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Attract More Patients?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free dental SEO audit and discover exactly how I can help your dental practice dominate local search and attract more patients consistently
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
                <span className="text-lg font-semibold">Local Market Domination</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Consistent Patient Growth</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Dental SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
