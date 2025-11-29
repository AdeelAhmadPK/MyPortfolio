import { Metadata } from 'next';
import Link from 'next/link';
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
import { FaBath, FaBriefcase, FaBuilding, FaCalendar, FaCertificate, FaChartArea, FaChartBar, FaChartLine, FaCog, FaDollarSign, FaEdit, FaHospital, FaMapMarkerAlt, FaMedal, FaRocket, FaSearch, FaShower, FaSpa, FaTags, FaTools, FaTrophy, FaUserMd, FaUsers, FaWheelchair } from 'react-icons/fa';;;

export const metadata: Metadata = {
  title: 'Walk-In Tubs SEO Services | Local SEO for Walk-In Tub Installation Companies',
  description: 'Expert SEO services for walk-in tub installation businesses. Dominate local search for walk-in tubs, accessible bathtubs, senior bathing solutions, and therapeutic tubs. Proven walk-in tub marketing strategies to attract senior customers and accessibility projects.',
  keywords: 'walk-in tub SEO, walk-in tub marketing, accessible bathtub SEO, senior bathing marketing, therapeutic tub SEO, walk-in shower marketing, ADA compliant bathroom SEO, aging in place marketing, walk-in tub installation SEO, senior bathroom marketing, local SEO for walk-in tubs, walk-in tub near me SEO, handicap tub marketing, hydrotherapy tub SEO, bariatric tub marketing',
  openGraph: {
    title: 'Walk-In Tubs SEO Services | Local SEO for Walk-In Tub Installation Companies',
    description: 'Expert SEO for walk-in tub companies. Attract senior customers and accessibility projects with proven walk-in tub marketing strategies.',
    type: 'website'
  }
};

export default function WalkInTubsSEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Walk-In Tubs SEO', url: '/services/walk-in-tubs-seo' }
  ];

  const seoFrameworkFaqs = [
    {
      question: 'How can SEO help my walk-in tub business reach seniors?',
      answer: 'Seniors and their families research walk-in tubs extensively before purchasing. Local SEO helps you dominate searches like "walk-in tubs near me", "senior bathroom safety", and "accessible bathtubs". I optimize for both senior-focused and family caregiver searches to capture your entire target audience.'
    },
    {
      question: 'What walk-in tub keywords should I target?',
      answer: 'I target product keywords ("walk-in tub with jets", "wheelchair accessible tubs"), safety keywords ("bathroom safety for seniors", "fall prevention bathtub"), benefit searches ("tubs for arthritis"), and location terms ("walk-in tub installation [city]"). This captures customers at every research stage.'
    },
    {
      question: 'How important are reviews for walk-in tub SEO?',
      answer: 'Extremely important! Walk-in tubs are high-consideration purchases. Reviews build trust and significantly influence decisions. I help you generate authentic reviews from satisfied customers and their families, showcasing safety improvements and quality of life benefits.'
    },
    {
      question: 'Can you help me rank for specific walk-in tub brands?',
      answer: 'Yes! I create pages optimized for major brands like Safe Step, Kohler, American Standard, and others. This captures customers researching specific brands and helps you appear for comparison searches.'
    },
    {
      question: 'How do you optimize for Medicare and insurance searches?',
      answer: 'I create content addressing Medicare coverage, insurance reimbursement, and medical necessity documentation. While Medicare doesn\'t typically cover walk-in tubs, I provide accurate information and highlight alternative financing options.'
    },
    {
      question: 'What makes walk-in tub SEO different?',
      answer: 'Walk-in tub SEO targets both seniors (your end users) and their adult children (often the researchers and decision influencers). I create content addressing safety concerns, mobility challenges, and aging-in-place benefits that resonate with both audiences.'
    },
    {
      question: 'How long does it take to see SEO results for walk-in tubs?',
      answer: 'Most clients see initial improvements within 60-90 days with significant results by 4-6 months. Walk-in tub keywords are often less competitive than general home services, allowing faster rankings in many markets.'
    },
    {
      question: 'Should I create content about aging in place?',
      answer: 'Absolutely! Aging-in-place content attracts your target audience early in their research. Topics like "making bathrooms safe for seniors", "preventing falls at home", and "home modifications for aging" build authority and capture future walk-in tub customers.'
    },
    {
      question: 'How do seasonal trends affect walk-in tub searches?',
      answer: 'Walk-in tub searches peak when families gather (holidays) and after winter slip-and-fall incidents. We adjust your SEO strategy seasonally while maintaining year-round visibility for consistent lead generation.'
    },
    {
      question: 'Do I need separate pages for different tub features?',
      answer: 'Yes! Creating pages for walk-in tubs with jets, soaker tubs, quick-drain systems, and wheelchair accessible models helps you rank for specific feature searches and provides detailed information customers need.'
    },
    {
      question: 'How important is local SEO for walk-in tub companies?',
      answer: 'Critical! Walk-in tubs require professional installation and customers want trusted local installers. Local SEO ensures you dominate "walk-in tubs near me" searches and appear in Google Map Pack for your service area.'
    },
    {
      question: 'What role do video demonstrations play in SEO?',
      answer: 'Video content is highly effective for walk-in tubs. Installation videos, customer testimonials, and feature demonstrations rank in both Google and YouTube, building trust and providing valuable content that converts viewers into leads.'
    },
    {
      question: 'How do you optimize for caregiver searches?',
      answer: 'I create content targeting adult children researching options for aging parents. Keywords like "best walk-in tub for elderly parents", "safe bathing for seniors", and "bathroom safety solutions" capture this important decision-maker audience.'
    },
    {
      question: 'Should I target veterans and disability markets?',
      answer: 'Yes! Creating content about VA benefits, disability accessibility, and ADA compliance helps you reach these underserved markets. Veterans especially may qualify for assistance programs, making this a valuable target audience.'
    },
    {
      question: 'How do you measure walk-in tub SEO success?',
      answer: 'We track local rankings, organic traffic, consultation requests, showroom visits, and most importantly, installations from SEO-generated leads. Given the high value of walk-in tub installations ($5,000-$15,000+), even modest lead increases deliver strong ROI.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can SEO start generating walk-in tub leads?',
      answer: 'Most walk-in tub companies see initial lead improvements within 60-90 days as local rankings improve. The high-consideration nature of walk-in tubs means prospects research extensively, so consistent visibility across their journey is crucial for conversion.'
    },
    {
      question: 'Do you understand the senior market and accessibility needs?',
      answer: 'Yes! I specialize in marketing to seniors and their families. Our content addresses mobility challenges, safety concerns, Medicare questions, and aging-in-place benefits in language that resonates with both seniors and adult children researching options for parents.'
    },
    {
      question: 'How do you handle walk-in tub financing and pricing content?',
      answer: 'I create transparent content about costs, financing options, insurance possibilities, and veteran benefits. Clear pricing information builds trust and pre-qualifies leads, ensuring consultation requests come from serious prospects.'
    },
    {
      question: 'Can you help with showroom visibility?',
      answer: 'Absolutely! I optimize for "walk-in tub showroom [city]" searches and ensure your Google Business Profile highlights your display models. Local SEO drives both consultation requests and in-person showroom visits.'
    },
    {
      question: 'What makes your walk-in tub SEO different from general home service marketing?',
      answer: 'I understand the unique walk-in tub sales cycle, the senior market psychology, the importance of safety messaging, and the long research period. Our strategies account for both senior prospects and their adult children who influence purchasing decisions.'
    },
    {
      question: 'How do you track ROI for walk-in tub SEO?',
      answer: 'We track organic leads, consultation bookings, showroom visits, and installations from SEO traffic. Given the high average transaction value ($5,000-$15,000+), even a few additional installations per month delivers significant ROI.'
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
                "serviceType": "Walk-in Tubs SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for walk-in tub dealers and installers. Dominate local search for walk-in bathtubs, accessible bathing solutions, and senior bathtubs."
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
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-400/30 mb-8 animate-scale-in shadow-lg shadow-purple-500/20">
                  <FaShower className="w-6 h-6 text-purple-400 animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Premium Walk-In Tubs SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Walk-In Tubs</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  Dominate local search for walk-in tubs, senior bathroom safety, and accessible bathing solutions. Reach seniors and their families when they're researching safety improvements.
                </p>

                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">98%</div>
                    <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">1,500+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">5x</div>
                    <div className="text-xs text-slate-400 font-medium">Average ROI</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Walk-In Tubs SEO Audit"
                  subtitle="Discover how to dominate local accessibility searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Framework */}
        <SEOFramework industry="Walk-In Tubs" faqs={seoFrameworkFaqs} />

        {/* Countries Grid */}
        <CountriesGrid industrySlug="walk-in-tubs-seo" industryIcon={<FaShower />} />

        {/* Why Choose Me */}
        <WhyChooseMe industry="Walk-In Tubs" />

        {/* Hire Local SEO */}
        <HireLocalSEO industry="Walk-In Tubs" />

        {/* Services Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Specialized Walk-In Tub SEO Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions tailored for walk-in tub installers and senior bathroom safety companies
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <FaShower />, title: 'Walk-In Tub Installation SEO', description: 'Dominate local searches for walk-in tub installation and senior bathing solutions' },
                { icon: <FaWheelchair />, title: 'Accessibility Solutions SEO', description: 'Rank for wheelchair accessible tubs, barrier-free bathing, and ADA compliant bathrooms' },
                { icon: <FaSpa />, title: 'Therapeutic Tub SEO', description: 'Target searches for walk-in tubs with jets, hydrotherapy, and pain relief features' },
                { icon: <FaHospital />, title: 'Medical Necessity SEO', description: 'Optimize for Medicare, insurance, and medical necessity documentation searches' },
                { icon: <FaUserMd />, title: 'Senior Safety SEO', description: 'Capture aging-in-place, fall prevention, and senior bathroom safety queries' },
                { icon: <FaMedal />, title: 'Veterans Program SEO', description: 'Target VA benefits, veterans assistance, and military family accessibility searches' }
              ].map((service, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                  <div className="text-4xl mb-4 text-purple-400">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <IndustryStats 
          industry="Walk-In Tubs"
          stats={[
            { value: '312%', label: 'Avg. Lead Increase', icon: <FaChartLine className="w-6 h-6" />, color: 'purple' },
            { value: '78%', label: 'Local Pack Rankings', icon: <FaMapMarkerAlt className="w-6 h-6" />, color: 'pink' },
            { value: '5.2x', label: 'ROI Within 12 Months', icon: <FaDollarSign className="w-6 h-6" />, color: 'indigo' },
            { value: '71%', label: 'Cost Per Lead Reduction', icon: <FaChartBar className="w-6 h-6" />, color: 'violet' }
          ]}
        />

        {/* Process Timeline */}
        <ProcessTimeline 
          industry="Walk-In Tubs"
          steps={[
            { step: 1, title: 'Senior Market Analysis', description: 'Comprehensive audit of local senior demographics, competitor positioning, and search behavior', icon: <FaSearch className="w-6 h-6" />, duration: 'Week 1-2' },
            { step: 2, title: 'Technical & Local SEO', description: 'Website optimization, accessibility compliance, and Google Business Profile enhancement', icon: <FaCog className="w-6 h-6" />, duration: 'Week 2-4' },
            { step: 3, title: 'Content Development', description: 'Creating pages for walk-in tub types, safety features, financing, and senior resources', icon: <FaEdit className="w-6 h-6" />, duration: 'Week 4-6' },
            { step: 4, title: 'Authority Building', description: 'Senior-focused content marketing, local citations, and healthcare directory listings', icon: <FaTools className="w-6 h-6" />, duration: 'Week 6-10' },
            { step: 5, title: 'Review & Trust Signals', description: 'Generating authentic reviews and showcasing customer testimonials with family perspectives', icon: '⭐', duration: 'Week 10-14' },
            { step: 6, title: 'Scale & Optimize', description: 'Expanding to new service areas and optimizing for conversion improvements', icon: <FaRocket className="w-6 h-6" />, duration: 'Ongoing' }
          ]}
        />

        {/* Topic Clusters */}
        <TopicClusterSection 
          industry="Walk-In Tubs"
          pillars={[
            { 
              title: 'Walk-In Tub Types',
              description: 'Complete product coverage',
              topics: ['Standard Walk-In Tubs', 'Soaker Tubs with Jets', 'Wheelchair Accessible Tubs', 'Quick-Drain Systems', 'Bariatric Walk-In Tubs', 'Combination Tub-Showers'],
              icon: <FaBath className="w-6 h-6" />
            },
            { 
              title: 'Safety & Accessibility',
              description: 'Safety-focused content',
              topics: ['Fall Prevention', 'Grab Bars & Safety Features', 'Non-Slip Surfaces', 'Low Threshold Entry', 'Aging in Place Solutions', 'ADA Compliance'],
              icon: <FaWheelchair className="w-6 h-6" />
            },
            { 
              title: 'Health Benefits',
              description: 'Therapeutic advantages',
              topics: ['Hydrotherapy Benefits', 'Arthritis Relief', 'Circulation Improvement', 'Pain Management', 'Mobility Support', 'Independence Maintenance'],
              icon: <FaSpa className="w-6 h-6" />
            },
            { 
              title: 'Financing & Coverage',
              description: 'Financial information',
              topics: ['Medicare Coverage', 'Insurance Options', 'VA Benefits', 'Financing Programs', 'Tax Deductions', 'Payment Plans'],
              icon: <FaDollarSign className="w-6 h-6" />
            }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Walk-In Tubs"
          signals={[
            { title: 'Senior Service Categories', description: 'Proper Google Business Profile categorization for senior services and accessibility', importance: 'Critical', icon: <FaTags className="w-6 h-6" /> },
            { title: 'Showroom Visibility', description: 'Showcasing display models and making showroom visits easy to find and book', importance: 'Critical', icon: <FaBuilding className="w-6 h-6" /> },
            { title: 'Safety Certifications', description: 'Displaying manufacturer certifications, installer credentials, and safety compliance', importance: 'High', icon: <FaCertificate className="w-6 h-6" /> },
            { title: 'Service Area Targeting', description: 'Geographic optimization for senior populations and assisted living communities', importance: 'High', icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: 'Consultation Booking', description: 'Easy-to-find free consultation and home assessment offerings', importance: 'High', icon: <FaCalendar className="w-6 h-6" /> },
            { title: 'Family Testimonials', description: 'Reviews from both seniors and their adult children emphasizing safety improvements', importance: 'Medium', icon: <FaUsers className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Walk-In Tubs"
          comparisons={[
            { feature: 'Senior Market Expertise', withSEO: 'Deep understanding of senior decision-making and caregiver research', withoutSEO: 'Generic home improvement marketing' },
            { feature: 'Safety-First Messaging', withSEO: 'Content emphasizing fall prevention and independence', withoutSEO: 'Product feature focus only' },
            { feature: 'Multi-Audience Targeting', withSEO: 'Optimized for both seniors and their adult children', withoutSEO: 'Single audience approach' },
            { feature: 'Financing Education', withSEO: 'Comprehensive coverage of Medicare, VA, and financing options', withoutSEO: 'Basic pricing information' },
            { feature: 'Local Showroom Strategy', withSEO: 'Drive in-person visits with local SEO and virtual tours', withoutSEO: 'Online-only lead generation' },
            { feature: 'Long Sales Cycle Support', withSEO: 'Content nurturing throughout extended research period', withoutSEO: 'Quick-close tactics only' }
          ]}
        />

        {/* Case Study */}
        <CaseStudyHighlight 
          industry="Walk-In Tubs"
          caseStudy={{
            title: 'Regional Walk-In Tub Company Triples Senior Market Reach',
            industry: 'Walk-In Tubs',
            results: [
              { metric: 'Consultation Requests', value: '23/month', change: '+287%' },
              { metric: 'Showroom Visits', value: '14/month', change: '+271%' },
              { metric: 'Installations', value: '9/month', change: '+244%' }
            ],
            testimonial: 'We now dominate senior bathroom safety searches in our market. Families find us when researching options for aging parents, and we\'ve become the trusted local expert in walk-in tubs.',
            clientName: 'Walk-In Tub Installer Owner'
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Walk-In Tubs"
          customItems={[
            { icon: <FaBath className="w-6 h-6" />, title: 'Senior Market Focus', description: 'Specialized in walk-in tub and accessibility marketing' },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: 'Local Market Experts', description: 'Hyperlocal SEO targeting senior populations' },
            { icon: <FaChartLine className="w-6 h-6" />, title: 'Proven Lead Generation', description: 'Consistent results for walk-in tub companies nationwide' },
            { icon: <FaTrophy className="w-6 h-6" />, title: 'Industry Recognition', description: 'Trusted by leading accessibility bathroom providers' },
            { icon: <FaBriefcase className="w-6 h-6" />, title: 'Full-Service SEO', description: 'Complete optimization from technical to content' },
            { icon: <FaChartArea className="w-6 h-6" />, title: 'Transparent Reporting', description: 'Clear ROI tracking with installation attribution' }
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
                Trusted by Walk-In Tub Companies
              </h2>
              <p className="text-gray-400">
                See what walk-in tub professionals say about My SEO services
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-br from-purple-900/20 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Walk-In Tub Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free SEO audit and discover How I can help you reach more seniors and families searching for walk-in tub solutions.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
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
