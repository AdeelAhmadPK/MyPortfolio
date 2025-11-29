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
import ProcessTimeline from '@/components/industries/ProcessTimeline';
import IndustryStats from '@/components/industries/IndustryStats';
import TrustSignals from '@/components/industries/TrustSignals';
import CompetitorComparison from '@/components/industries/CompetitorComparison';
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight';
import TopicClusterSection from '@/components/industries/TopicClusterSection';
import LocalSEOSignals from '@/components/industries/LocalSEOSignals';
import TopSEOServices from '@/components/services/TopSEOServices';

import TestimonialsSlider from '@/components/home/TestimonialsSlider';

import { FaBullseye, FaCalendar, FaCamera, FaChartLine, FaClipboardList, FaDollarSign, FaEdit, FaFileAlt, FaMap, FaMapMarkerAlt, FaMobileAlt, FaSearch, FaTrophy } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Carpet Cleaning SEO Services | Local SEO for Carpet Cleaners',
  description: 'Expert SEO services for carpet cleaning businesses. Dominate local search for carpet cleaning, upholstery cleaning, steam cleaning, and stain removal services. Proven carpet cleaner marketing strategies to generate more residential and commercial leads.',
  keywords: 'carpet cleaning SEO, carpet cleaner marketing, upholstery cleaning SEO, steam cleaning marketing, stain removal SEO, carpet cleaning company marketing, local SEO for carpet cleaners, carpet cleaning near me SEO, residential carpet cleaning marketing, commercial carpet cleaning SEO, rug cleaning marketing, carpet cleaning lead generation, deep cleaning SEO, pet stain removal marketing',
  openGraph: {
    title: 'Carpet Cleaning SEO Services | Local SEO for Carpet Cleaners',
    description: 'Expert SEO for carpet cleaning companies. Generate more residential and commercial leads with proven carpet cleaner marketing strategies.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carpet Cleaning SEO Services | Local SEO for Carpet Cleaners',
    description: 'Expert SEO for carpet cleaning companies. Generate more leads with proven marketing strategies.'
  }
};

export default function CarpetCleaningSEOPage() {
  const industry = industries.find(i => i.slug === 'carpet-cleaning-seo');
  
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Carpet Cleaning SEO', url: '/services/carpet-cleaning-seo' }
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
      question: 'How do you handle seasonal fluctuations in carpet cleaning searches?',
      answer: 'I create seasonal content campaigns targeting peak demand periods. For example, I optimize for "spring carpet cleaning" in March-April, "holiday party prep cleaning" in November-December, and "move-in cleaning" year-round. This ensures consistent visibility during high-demand seasons while maintaining rankings during slower periods.'
    },
    {
      question: 'What carpet cleaning keywords drive the most qualified leads?',
      answer: 'Problem-based keywords like "pet urine removal", "red wine stain removal", and "water damage carpet cleaning" drive highly qualified leads because customers have urgent needs. We also target service-specific terms like "upholstery cleaning" and "commercial carpet cleaning" to capture customers looking for specialized services.'
    },
    {
      question: 'How important are before/after photos for carpet cleaning SEO?',
      answer: 'Extremely important! Before/after photos not only build trust but also rank in Google Images, driving additional traffic. I optimize your photos with proper file names, alt tags, and structured data. Visual proof of your work quality significantly improves conversion rates and helps you stand out from competitors.'
    },
    {
      question: 'Can you help me rank for commercial carpet cleaning?',
      answer: 'Yes! Commercial carpet cleaning requires different SEO strategies than residential. I create dedicated commercial service pages, target B2B keywords like "office carpet cleaning" and "commercial carpet maintenance", and build citations on business directories. This helps you capture commercial clients who often have larger budgets and recurring contracts.'
    },
    {
      question: 'How do you optimize for emergency carpet cleaning searches?',
      answer: 'I create content targeting urgent situations like "water damage carpet cleaning", "flooded carpet cleanup", and "same-day carpet cleaning". We also ensure your Google Business Profile highlights emergency availability and fast response times. This helps you capture customers who need immediate service.'
    },
    {
      question: 'What makes carpet cleaning SEO different from other home services?',
      answer: 'Carpet cleaning SEO is unique because it combines seasonal demand patterns, problem-based searches (stain removal), and service-specific queries (upholstery, area rugs). I create a multi-faceted strategy that captures customers at different stages: those with immediate problems, those planning seasonal cleaning, and those researching services.'
    },
    {
      question: 'Should I target pet-related carpet cleaning keywords?',
      answer: 'Absolutely! Pet owners are a huge market. I optimize for "pet urine removal", "pet stain carpet cleaning", "pet odor removal", and "dog urine carpet cleaning". Pet-related searches often indicate urgent needs and customers willing to pay premium prices for effective solutions.'
    },
    {
      question: 'How do you optimize for stain-specific searches?',
      answer: 'I create dedicated content for common stains: "red wine stain removal", "coffee stain carpet cleaning", "blood stain removal", and "grease stain cleaning". This problem-focused content captures customers with immediate needs and positions you as the solution expert.'
    },
    {
      question: 'What about area rug and upholstery cleaning SEO?',
      answer: 'These are valuable service extensions. I create separate pages for "area rug cleaning", "oriental rug cleaning", "upholstery cleaning", and "furniture cleaning" to capture customers looking for specialized services beyond wall-to-wall carpets. These services often have higher profit margins.'
    },
    {
      question: 'How important is eco-friendly carpet cleaning SEO?',
      answer: 'Increasingly important! Many customers search for "green carpet cleaning", "eco-friendly carpet cleaning", and "non-toxic carpet cleaning". If you use eco-friendly methods, we prominently feature this in your SEO strategy to attract environmentally conscious customers.'
    },
    {
      question: 'Should I create pages for different carpet types?',
      answer: 'Yes! Different carpet materials require different cleaning methods. I create content for "wool carpet cleaning", "silk rug cleaning", "synthetic carpet cleaning", and "Berber carpet cleaning" to capture customers concerned about proper care for their specific carpet type.'
    },
    {
      question: 'How do you handle move-in/move-out cleaning SEO?',
      answer: 'Move-in/move-out cleaning is high-volume. I optimize for "move-out carpet cleaning", "rental property carpet cleaning", and "end of lease carpet cleaning". This targets both tenants needing deposit returns and landlords needing property preparation.'
    },
    {
      question: 'What about commercial vs residential SEO strategies?',
      answer: 'I create separate content paths: residential pages target homeowners with emotional benefits and home care, while commercial pages target businesses with ROI, professional appearance, and maintenance contracts. Each audience has different needs and decision-making processes.'
    },
    {
      question: 'How do reviews impact carpet cleaning SEO?',
      answer: 'Reviews are critical for local SEO. I implement review generation systems, respond to all reviews professionally, and showcase testimonials with before/after photos. A strong review profile (4.5+ stars with 100+ reviews) significantly boosts local rankings and conversion rates.'
    },
    {
      question: 'Can you help with truck mount vs portable equipment SEO?',
      answer: 'Yes! Some customers specifically search for "truck mount carpet cleaning" or "steam cleaning" based on their understanding of cleaning methods. I create content explaining your equipment and methods while optimizing for these equipment-specific searches.'
    },
    {
      question: 'How do you measure carpet cleaning SEO success?',
      answer: 'We track local rankings for key service areas, Google Business Profile views/calls, organic website traffic, booking form submissions, phone calls from organic search, and most importantly, revenue from SEO-generated leads. You get detailed monthly reports showing ROI, not just vanity metrics.'
    }
  ];

  const faqs = [
    {
      question: 'How do you handle seasonal fluctuations in carpet cleaning searches?',
      answer: 'I create seasonal content campaigns targeting peak demand periods. For example, I optimize for "spring carpet cleaning" in March-April, "holiday party prep cleaning" in November-December, and "move-in cleaning" year-round. This ensures consistent visibility during high-demand seasons while maintaining rankings during slower periods.'
    },
    {
      question: 'What carpet cleaning keywords drive the most qualified leads?',
      answer: 'Problem-based keywords like "pet urine removal", "red wine stain removal", and "water damage carpet cleaning" drive highly qualified leads because customers have urgent needs. We also target service-specific terms like "upholstery cleaning" and "commercial carpet cleaning" to capture customers looking for specialized services.'
    },
    {
      question: 'How important are before/after photos for carpet cleaning SEO?',
      answer: 'Extremely important! Before/after photos not only build trust but also rank in Google Images, driving additional traffic. I optimize your photos with proper file names, alt tags, and structured data. Visual proof of your work quality significantly improves conversion rates and helps you stand out from competitors.'
    },
    {
      question: 'Can you help me rank for commercial carpet cleaning?',
      answer: 'Yes! Commercial carpet cleaning requires different SEO strategies than residential. I create dedicated commercial service pages, target B2B keywords like "office carpet cleaning" and "commercial carpet maintenance", and build citations on business directories. This helps you capture commercial clients who often have larger budgets and recurring contracts.'
    },
    {
      question: 'How do you optimize for emergency carpet cleaning searches?',
      answer: 'I create content targeting urgent situations like "water damage carpet cleaning", "flooded carpet cleanup", and "same-day carpet cleaning". We also ensure your Google Business Profile highlights emergency availability and fast response times. This helps you capture customers who need immediate service.'
    },
    {
      question: 'What makes carpet cleaning SEO different from other home services?',
      answer: 'Carpet cleaning SEO is unique because it combines seasonal demand patterns, problem-based searches (stain removal), and service-specific queries (upholstery, area rugs). I create a multi-faceted strategy that captures customers at different stages: those with immediate problems, those planning seasonal cleaning, and those researching services.'
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
                "serviceType": "Carpet Cleaning SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for carpet cleaning businesses. Dominate local search for carpet cleaning, upholstery cleaning, steam cleaning, and stain removal services."
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
              {/* Left Column: Hero Content */}
              <div className="order-1 lg:order-1 text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8">
                  <span className="text-3xl">{industry.icon}</span>
                  <span className="text-sm font-bold">Premium Carpet Cleaning SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="text-white">Carpet Cleaning</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SEO Services</span>
                </h1>
                
                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  Homeowners search for <strong className="text-cyan-300">"carpet cleaning near me"</strong> when they need deep cleaning, stain removal, or before selling their home. 
                  My SEO strategies target seasonal peaks, move-in/move-out searches, and emergency stain removal queries 
                  to keep your phone ringing <strong className="text-white">year-round</strong>.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div>
                    <div className="text-sm text-slate-400">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">1,732+</div>
                    <div className="text-sm text-slate-400">First Page Rankings</div>
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
                  title="Get Your Free Carpet Cleaning SEO Audit"
                  subtitle="Discover how to dominate local carpet cleaning searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework faqs={seoFrameworkFaqs} industry="Carpet Cleaning" />

        <WhyChooseMe industry="Carpet Cleaning" />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Carpet Cleaning SEO Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions designed specifically for carpet cleaning businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Stain Removal Content Strategy", description: "Create content targeting urgent searches like red wine stain removal, pet urine carpet cleaning, and blood stain removal to capture emergency cleaning needs", icon: "🧪" },
                { title: "Seasonal SEO Campaigns", description: "Optimize for peak seasons: spring carpet cleaning, holiday party cleaning prep, and move-in carpet cleaning to capture seasonal demand spikes", icon: <FaCalendar className="w-6 h-6" /> },
                { title: "Service-Specific Landing Pages", description: "Create dedicated pages for upholstery cleaning, area rug cleaning, commercial carpet cleaning, and pet odor removal to rank for specialized services", icon: <FaFileAlt className="w-6 h-6" /> },
                { title: "Before/After Photo Optimization", description: "Optimize visual content with proper alt tags and structured data to rank in Google Images for carpet cleaning searches", icon: <FaCamera className="w-6 h-6" /> },
                { title: "Local Neighborhood Targeting", description: "Build hyper-local content targeting carpet cleaning in specific neighborhoods to dominate neighborhood-specific searches", icon: "🏘️" },
                { title: "Review Generation System", description: "Implement automated review request systems to generate consistent 5-star reviews that boost your local rankings", icon: "⭐" }
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

        <HireLocalSEO industry="Carpet Cleaning" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Carpet Cleaning" 
          stats={[
            { value: "86%", label: "of homeowners search online for carpet cleaners", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "73%", label: "choose the first carpet cleaner they find", icon: <FaTrophy className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "91%", label: "read reviews before booking carpet cleaning", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "5.2x", label: "higher conversion from organic vs paid ads", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Carpet Cleaning SEO Process */}
        <ProcessTimeline 
          industry="Carpet Cleaning" 
          steps={[
            { step: 1, title: "Local SEO Audit", description: "Analyze your current carpet cleaning visibility and competitor landscape", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Keyword Strategy", description: "Target carpet cleaning, stain removal, and service area keywords", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Google Business Optimization", description: "Optimize GBP for carpet cleaning services and local visibility", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Service Pages", description: "Create optimized pages for each carpet cleaning service type", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Review Generation", description: "Build 5-star reviews from satisfied carpet cleaning customers", icon: "⭐", duration: "Ongoing" },
            { step: 6, title: "Local Citations", description: "Build citations on home service directories and local listings", icon: <FaClipboardList className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Carpet Cleaning" 
          pillars={[
            { title: "Carpet Cleaning Services", description: "Steam cleaning, dry cleaning, deep cleaning, and specialty carpet services", topics: ["Steam cleaning", "Dry cleaning", "Deep cleaning", "Specialty carpets"], icon: "🧹" },
            { title: "Stain & Odor Removal", description: "Pet stains, wine stains, coffee stains, and odor elimination services", topics: ["Pet stains", "Wine stains", "Odor removal", "Spot treatment"], icon: "✨" },
            { title: "Specialty Services", description: "Upholstery cleaning, rug cleaning, tile & grout, and commercial cleaning", topics: ["Upholstery", "Rug cleaning", "Tile & grout", "Commercial"], icon: "🛋️" },
            { title: "Local Coverage", description: "Service area pages targeting cities, neighborhoods, and zip codes", topics: ["City pages", "Neighborhoods", "Service areas", "Near me rankings"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Carpet Cleaning"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with carpet cleaning services and before/after photos", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "5-star reviews mentioning specific carpet cleaning services", importance: "Critical", icon: "⭐" },
            { title: "Local Citations", description: "Listings on HomeAdvisor, Angi, Yelp, and cleaning directories", importance: "High", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Service Area Pages", description: "Location-specific carpet cleaning landing pages", importance: "High", icon: <FaMap className="w-6 h-6" /> },
            { title: "Mobile Optimization", description: "Mobile-friendly booking and quick contact options", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Before/After Gallery", description: "Visual proof of carpet cleaning results", importance: "Medium", icon: <FaCamera className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Carpet Cleaning"
          comparisons={[
            { feature: "Local Visibility", withSEO: "Top 3 for 'carpet cleaning near me'", withoutSEO: "Invisible to local searchers" },
            { feature: "Lead Generation", withSEO: "Consistent daily inquiries", withoutSEO: "Feast or famine bookings" },
            { feature: "Cost Per Lead", withSEO: "$15-35 per qualified lead", withoutSEO: "$75+ per lead via ads" },
            { feature: "Trust Building", withSEO: "Established local authority", withoutSEO: "Unknown company status" },
            { feature: "Review Advantage", withSEO: "Strong review presence", withoutSEO: "No social proof online" },
            { feature: "Seasonal Stability", withSEO: "Year-round organic traffic", withoutSEO: "Seasonal ad dependence" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Carpet Cleaning"
          caseStudy={{
            title: "Local Carpet Cleaning Company",
            industry: "Carpet Cleaning",
            results: [
              { metric: "Organic Traffic", value: "340%", change: "increase in visitors" },
              { metric: "Phone Calls", value: "5x", change: "more daily calls" },
              { metric: "Google Rankings", value: "#1", change: "for 32+ keywords" },
              { metric: "Revenue Growth", value: "210%", change: "year over year" }
            ],
            testimonial: "We went from struggling to fill our schedule to having to hire more crews. SEO transformed our carpet cleaning business.",
            clientName: "Carpet Cleaning Business Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Carpet Cleaning"
          customItems={[
            { icon: "🧹", title: "Carpet Industry Expertise", description: "Deep understanding of how homeowners search for carpet cleaners" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Specialist", description: "Expert at ranking carpet cleaners in local search" },
            { icon: "⭐", title: "Review Strategy Expert", description: "Proven methods for generating 5-star reviews" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of growing carpet cleaning businesses" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Service Area Targeting", description: "Expertise in multi-location carpet cleaning SEO" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI Focused", description: "SEO strategies that drive bookings and revenue" }
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

        <FAQSection faqs={faqs} title="Common Questions About Carpet Cleaning SEO" />

        

        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Carpet Cleaning Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free SEO audit and discover How I can help your carpet cleaning business grow
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

