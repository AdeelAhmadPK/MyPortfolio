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

import { FaBath, FaCamera, FaChartArea, FaChartLine, FaClipboardList, FaDollarSign, FaFileAlt, FaGem, FaHandshake, FaLink, FaMapMarkerAlt, FaPalette, FaRuler, FaSearch, FaShower, FaWheelchair, FaWrench } from 'react-icons/fa';;;
export const metadata: Metadata = {
  title: 'Bathroom Remodeling SEO Services | Local SEO for Bathroom Renovation Contractors',
  description: 'Expert SEO services for bathroom remodeling contractors. Dominate local search for bathroom renovation, shower installation, tub replacement, and bathroom design services. Proven bathroom remodeling marketing strategies to grow high-value renovation leads.',
  keywords: 'bathroom remodeling SEO, bathroom renovation marketing, bathroom contractor SEO, shower installation SEO, tub replacement marketing, bathroom design SEO, bathroom remodeler lead generation, bathroom renovation near me SEO, local SEO for bathroom contractors, bathroom remodeling digital marketing, walk-in shower SEO, master bathroom renovation marketing, guest bathroom remodel SEO',
  openGraph: {
    title: 'Bathroom Remodeling SEO Services | Local SEO for Bathroom Renovation Contractors',
    description: 'Expert SEO for bathroom remodeling contractors. Dominate local search and grow high-value bathroom renovation leads with proven marketing strategies.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathroom Remodeling SEO Services | Local SEO for Bathroom Renovation Contractors',
    description: 'Expert SEO for bathroom remodeling contractors. Dominate local search and grow renovation leads.'
  }
};

export default function BathroomRemodelingSEOPage() {
  const industry = industries.find(i => i.slug === 'bathroom-remodeling-seo');
  
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Bathroom Remodeling SEO', url: '/services/bathroom-remodeling-seo' }
  ];

  const allLocations = countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.map(area => ({
        country,
        city,
        area
      }))
    )
  );

  const seoFrameworkFaqs = [
    {
      question: 'How do you target customers researching bathroom remodel costs?',
      answer: 'Cost research is a critical part of the bathroom remodel journey. I create content targeting "bathroom remodel cost", "bathroom renovation budget", and "affordable bathroom remodeling" that provides value while positioning your business. This content ranks for research-phase searches and helps you capture customers before they make decisions.'
    },
    {
      question: 'Should I create separate pages for different bathroom services?',
      answer: 'Yes! Create dedicated pages for high-value services like "shower installation", "bathtub replacement", "vanity installation", "tile work", and "plumbing for bathroom remodel". Each service page targets specific keywords and helps you rank for customers looking for particular bathroom services.'
    },
    {
      question: 'How important are before/after photos for bathroom remodeling SEO?',
      answer: 'Extremely important! Before/after photos showcase your work quality and rank in Google Images, driving additional traffic. I optimize your project photos with proper file names, alt tags, and structured data. Visual proof of beautiful bathroom transformations significantly improves conversion rates.'
    },
    {
      question: 'Can you help me rank for luxury bathroom remodeling?',
      answer: 'Yes! Luxury bathroom remodels have higher profit margins. I create content targeting "luxury bathroom remodel", "spa bathroom design", and "high-end bathroom renovation" to attract customers with larger budgets. We showcase premium materials, custom features, and luxury design elements.'
    },
    {
      question: 'How do you optimize for small bathroom remodels?',
      answer: 'Small bathrooms require specialized solutions. I create content for "small bathroom remodel", "bathroom space optimization", and "compact bathroom design" that provides space-saving ideas. This helps you capture customers with space constraints who need creative design solutions.'
    },
    {
      question: 'What makes bathroom remodeling SEO different from other home improvement?',
      answer: 'Bathroom remodeling SEO combines design inspiration content, cost research optimization, service-specific pages (shower, tub, vanity), and both luxury and budget segments. I create a comprehensive strategy that captures customers at every stage: research, planning, and decision-making.'
    },
    {
      question: 'How do you handle content about bathroom trends and styles?',
      answer: 'Bathroom trends and styles are heavily searched. I create content targeting "modern bathroom design", "farmhouse bathroom ideas", "contemporary bathroom remodel", and seasonal trends. This establishes your expertise and captures customers in the early research phase.'
    },
    {
      question: 'What role do before/after photos play in image search?',
      answer: 'Before/after photos are essential. They rank in Google Images, showcase your transformation capabilities, build trust, and significantly reduce bounce rates. I optimize images with proper schema markup, descriptive file names, and strategic placement throughout your site.'
    },
    {
      question: 'How important is local SEO for bathroom remodeling?',
      answer: 'Extremely important! Bathroom remodels require in-person consultations and local permits. I optimize for "bathroom remodeling near me", "bathroom contractor [city name]", and neighborhood-specific searches. Local SEO is critical because homeowners prefer contractors within their service area.'
    },
    {
      question: 'Should I target DIY bathroom remodel content?',
      answer: 'Yes, strategically! DIY content attracts homeowners early in their research. Many realize they need professional help after exploring DIY options. I create content that educates about DIY possibilities while highlighting where professional expertise is essential.'
    },
    {
      question: 'How do you optimize for walk-in tub and accessibility keywords?',
      answer: 'Accessibility features are important segments. I create dedicated pages for "walk-in tub installation", "accessible bathroom remodel", and "ADA-compliant bathroom" to capture customers with mobility needs. This demographic often has higher budgets and specific requirements.'
    },
    {
      question: 'What about master bathroom vs guest bathroom SEO?',
      answer: 'Different bathroom types have different search volumes and buyer intent. I create separate content for "master bathroom remodel" (higher budgets, premium features) and "guest bathroom renovation" (faster projects, different priorities) to capture both segments effectively.'
    },
    {
      question: 'How do seasonal trends affect bathroom remodeling SEO?',
      answer: 'Bathroom remodeling peaks in spring and summer. We adjust content strategy seasonally, promoting planning content in winter (when homeowners research) and immediate-start projects in peak season. This seasonal approach maximizes visibility when demand is highest.'
    },
    {
      question: 'Can you help with tile and fixture brand keywords?',
      answer: 'Yes! Many homeowners search for specific brands like "Kohler bathroom fixtures" or "Moen shower installation". I optimize for popular brands you work with, helping you capture customers who have already selected their preferred brands and are looking for installers.'
    },
    {
      question: 'How do you measure bathroom remodeling SEO success?',
      answer: 'We track rankings for both inspirational and transactional keywords, Google Business Profile metrics, consultation requests, quote form submissions, phone calls, and most importantly, closed projects attributed to organic search. You get detailed monthly reports showing ROI and lead quality.'
    },
    {
      question: 'What about commercial bathroom remodeling SEO?',
      answer: 'If you serve commercial clients, I create separate content targeting "commercial bathroom renovation", "restaurant bathroom remodel", and "office bathroom upgrade". Commercial projects have different search behavior, longer sales cycles, and higher values than residential.'
    }
  ];

  const faqs = [
    {
      question: 'How do you target customers researching bathroom remodel costs?',
      answer: 'Cost research is a critical part of the bathroom remodel journey. I create content targeting "bathroom remodel cost", "bathroom renovation budget", and "affordable bathroom remodeling" that provides value while positioning your business. This content ranks for research-phase searches and helps you capture customers before they make decisions.'
    },
    {
      question: 'Should I create separate pages for different bathroom services?',
      answer: 'Yes! Create dedicated pages for high-value services like "shower installation", "bathtub replacement", "vanity installation", "tile work", and "plumbing for bathroom remodel". Each service page targets specific keywords and helps you rank for customers looking for particular bathroom services. This strategy captures more qualified leads than a single generic page.'
    },
    {
      question: 'How important are before/after photos for bathroom remodeling SEO?',
      answer: 'Extremely important! Before/after photos showcase your work quality and rank in Google Images, driving additional traffic. I optimize your project photos with proper file names, alt tags, and structured data. Visual proof of beautiful bathroom transformations significantly improves conversion rates and helps you stand out from competitors.'
    },
    {
      question: 'Can you help me rank for luxury bathroom remodeling?',
      answer: 'Yes! Luxury bathroom remodels have higher profit margins. I create content targeting "luxury bathroom remodel", "spa bathroom design", and "high-end bathroom renovation" to attract customers with larger budgets. We also showcase premium materials, custom features, and luxury design elements that appeal to high-value customers.'
    },
    {
      question: 'How do you optimize for small bathroom remodels?',
      answer: 'Small bathrooms require specialized solutions. I create content for "small bathroom remodel", "bathroom space optimization", and "compact bathroom design" that provides space-saving ideas and solutions. This helps you capture customers with space constraints who need creative design solutions.'
    },
    {
      question: 'What makes bathroom remodeling SEO different from other home improvement?',
      answer: 'Bathroom remodeling SEO is unique because it combines design inspiration content (customers researching ideas), cost research optimization (budget planning), service-specific pages (shower, tub, vanity), and both luxury and budget segments. I create a comprehensive strategy that captures customers at every stage: research, planning, and decision-making.'
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
                "serviceType": "Bathroom Remodeling SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for bathroom remodeling contractors. Dominate local search for bathroom renovation, shower installation, tub replacement, and bathroom design services."
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
        
        {/* Hero Section with Form on Left */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-blob" />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-indigo-600/25 via-purple-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-violet-600/20 via-pink-600/15 to-transparent rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8">
                  <span className="text-3xl">🛁</span>
                  <span className="text-sm font-bold">Premium Bathroom Remodeling SEO</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="text-white">Bathroom Remodeling</span><br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SEO Services</span>
                </h1>
                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  Homeowners search <strong className="text-cyan-300">"bathroom remodeling near me"</strong> when planning high-value renovation projects. 
                  My SEO strategies capture customers during their research phase and position your business as the <strong className="text-white">expert choice</strong> for their bathroom transformation.
                </p>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div><div className="text-sm text-slate-400">Client Satisfaction</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">1,732+</div><div className="text-sm text-slate-400">Rankings</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">5x</div><div className="text-sm text-slate-400">Average ROI</div></div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <HeroContactForm 
                  title="Get Your Free Bathroom Remodeling SEO Audit"
                  subtitle="Discover how to attract high-value bathroom remodel projects"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework faqs={seoFrameworkFaqs} industry="Bathroom Remodeling" />

        <WhyChooseMe industry="Bathroom Remodeling" />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Bathroom Remodeling SEO Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions designed specifically for bathroom remodeling businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Bathroom Design Inspiration", description: "Create content showcasing bathroom designs, before/after galleries, and design trends that rank for bathroom ideas and design inspiration searches", icon: <FaPalette className="w-6 h-6" /> },
                { title: "Cost & Budget Content", description: "Target bathroom remodel cost, bathroom renovation budget, and affordable bathroom remodeling to capture customers researching project costs", icon: <FaDollarSign className="w-6 h-6" /> },
                { title: "Service-Specific Pages", description: "Create dedicated pages for shower installation, bathtub replacement, vanity installation, and tile work to rank for specific bathroom services", icon: <FaShower className="w-6 h-6" /> },
                { title: "Small Bathroom Solutions", description: "Optimize for small bathroom remodel, bathroom space optimization, and compact bathroom design to capture customers with space constraints", icon: <FaRuler className="w-6 h-6" /> },
                { title: "Luxury Bathroom SEO", description: "Target luxury bathroom remodel, spa bathroom design, and high-end bathroom renovation to attract customers with larger budgets", icon: "✨" },
                { title: "Accessible Bathroom Design", description: "Optimize for accessible bathroom, ADA bathroom remodel, and walk-in tub installation to capture customers needing accessibility features", icon: <FaWheelchair className="w-6 h-6" /> }
              ].map((service, index) => (
                <div key={index} className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HireLocalSEO industry="Bathroom Remodeling" />

        {/* Industry Statistics */}
        <IndustryStats 
          industry="Bathroom Remodeling"
          stats={[
            { value: "94%", label: "of homeowners research bathroom ideas on Pinterest and Google", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "68%", label: "of bathroom searches include accessibility or aging-in-place terms", icon: <FaWheelchair className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "91%", label: "of prospects view before/after photos before contacting contractors", icon: <FaCamera className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "5.8x", label: "higher project value from SEO leads vs social media leads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" }
          ]}
        />

        {/* My process */}
        <ProcessTimeline 
          industry="Bathroom Remodeling"
          steps={[
            { step: 1, title: "Portfolio & Market Analysis", description: "We audit your online presence, analyze competitor portfolios, and identify high-value bathroom remodeling keywords in your market.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Visual Content Strategy", description: "I develop a strategy for showcasing your best bathroom projects with optimized before/after galleries and project descriptions.", icon: <FaCamera className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Service Page Development", description: "I create detailed pages for each bathroom service: full remodels, tub-to-shower conversions, accessibility upgrades, and more.", icon: <FaFileAlt className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Style & Trend Content", description: "I build authority with content on bathroom design trends, material guides, and style inspiration that attracts planning-stage customers.", icon: "✨", duration: "Weeks 3-6" },
            { step: 5, title: "Local Authority Building", description: "I build citations, earn local backlinks, and optimize your Google Business Profile with project photos and reviews.", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Lead Tracking & Optimization", description: "We track consultation requests, quote submissions, and project inquiries to continuously improve conversion rates.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Clusters */}
        <TopicClusterSection 
          industry="Bathroom Remodeling"
          pillars={[
            { title: "Project Type Content", description: "Comprehensive pages for different bathroom renovation scopes and services", topics: ["Full remodels", "Tub-to-shower conversions", "Vanity updates", "Tile replacement"], icon: <FaWrench className="w-6 h-6" /> },
            { title: "Accessibility Content", description: "Specialized content targeting aging-in-place and ADA-compliant bathroom searches", topics: ["Walk-in tubs", "Grab bar installation", "ADA compliant design", "Barrier-free showers"], icon: <FaWheelchair className="w-6 h-6" /> },
            { title: "Design Style Content", description: "Inspiration content that captures homeowners in the planning phase", topics: ["Spa bathroom ideas", "Modern designs", "Traditional styles", "Small bathroom solutions"], icon: "✨" },
            { title: "Material & Budget Content", description: "Educational content on materials, costs, and investment considerations", topics: ["Tile selection guides", "Countertop options", "Budget planning", "ROI analysis"], icon: <FaGem className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Bathroom Remodeling"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with bathroom remodeling categories, project photos, and customer reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Visual Portfolio Reviews", description: "Reviews that mention specific bathroom styles, materials, and transformation quality", importance: "Critical", icon: "⭐" },
            { title: "Home Improvement Citations", description: "Listings on Houzz, HomeAdvisor, Angi, and bathroom remodeling directories", importance: "High", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Neighborhood Targeting", description: "Service area pages targeting specific neighborhoods and communities", importance: "High", icon: "🏘️" },
            { title: "Project Gallery Schema", description: "Structured data for before/after images and completed bathroom projects", importance: "High", icon: "🖼️" },
            { title: "Design Partner Links", description: "Backlinks from interior designers, tile suppliers, and fixture showrooms", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Bathroom Remodeling"
          comparisons={[
            { feature: "Portfolio Visibility", withSEO: "Before/after galleries rank in Google Images", withoutSEO: "Beautiful work hidden from searchers" },
            { feature: "Style-Specific Searches", withSEO: "Rank for 'spa bathroom remodel' and trends", withoutSEO: "Miss design-focused customers" },
            { feature: "Accessibility Market", withSEO: "Capture aging-in-place renovation searches", withoutSEO: "Lose growing senior market" },
            { feature: "Lead Quality", withSEO: "Pre-qualified homeowners ready to invest", withoutSEO: "Price shoppers and tire kickers" },
            { feature: "Local Dominance", withSEO: "Own your neighborhood search results", withoutSEO: "Competitors take your territory" },
            { feature: "Long-Term Pipeline", withSEO: "Consistent flow of quality projects", withoutSEO: "Feast or famine project flow" }
          ]}
        />

        {/* Case Study */}
        <CaseStudyHighlight 
          industry="Bathroom Remodeling"
          caseStudy={{
            title: "Bathroom Remodeling Business Transformation",
            industry: "Bathroom Remodeling",
            results: [
              { metric: "Organic Traffic", value: "365%", change: "increase in 6 months" },
              { metric: "Project Inquiries", value: "4.8x", change: "more consultations" },
              { metric: "Google Rankings", value: "#1", change: "for 26+ keywords" },
              { metric: "Revenue Growth", value: "198%", change: "year over year" }
            ],
            testimonial: "Our calendar went from half-empty to booked 3 months out. The quality of leads from organic search is incredible - they've already seen our work and are ready to move forward.",
            clientName: "Bathroom Remodeling Contractor"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Bathroom Remodeling"
          customItems={[
            { icon: <FaBath className="w-6 h-6" />, title: "Bathroom Industry Expertise", description: "Deep understanding of how homeowners search for bathroom renovation services" },
            { icon: <FaCamera className="w-6 h-6" />, title: "Visual SEO Mastery", description: "Expertise in optimizing before/after portfolios for Google Images and Pinterest" },
            { icon: <FaWheelchair className="w-6 h-6" />, title: "Accessibility Market Focus", description: "Specialized strategies for the growing aging-in-place and ADA compliance market" },
            { icon: "✨", title: "Design Trend Authority", description: "Content strategies that position you as the go-to bathroom design expert" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "High-Value Lead Focus", description: "Targeting homeowners ready for premium bathroom transformations" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Partnership", description: "Personal attention to your unique style and target market" }
          ]}
        />

        <TopSEOServices />


        <IndustriesGrid industries={industries} currentIndustry={industry.slug} title="Other Industries I serve" />

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

        <FAQSection faqs={faqs} title="Common Questions About Bathroom Remodeling SEO" />

        

        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Bathroom Remodeling Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free SEO audit and discover How I can help your bathroom remodeling business grow
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Your Free Audit Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
