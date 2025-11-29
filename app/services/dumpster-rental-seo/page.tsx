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

import { FaBox, FaBuilding, FaChartLine, FaClipboardList, FaDollarSign, FaEdit, FaHome, FaMap, FaMapMarkerAlt, FaMoneyBillWave, FaSearch, FaTools } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Dumpster Rental SEO Services | Local SEO for Dumpster Companies',
  description: 'Expert SEO services for dumpster rental businesses. Dominate local search for roll-off dumpsters, construction dumpsters, and junk removal services. Proven dumpster rental marketing strategies to generate more bookings and grow your waste management business.',
  keywords: 'dumpster rental SEO, dumpster company marketing, roll-off dumpster SEO, construction dumpster marketing, junk removal SEO, waste management marketing, dumpster rental near me SEO, local SEO for dumpster companies, residential dumpster marketing, commercial dumpster SEO, dumpster lead generation, demolition dumpster marketing, yard waste dumpster SEO, dumpster booking marketing',
  openGraph: {
    title: 'Dumpster Rental SEO Services | Local SEO for Dumpster Companies',
    description: 'Expert SEO for dumpster rental companies. Generate more bookings with proven dumpster rental marketing strategies.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dumpster Rental SEO Services | Local SEO for Dumpster Companies',
    description: 'Expert SEO for dumpster rental companies. Generate more bookings with proven marketing strategies.'
  }
};

export default function DumpsterRentalSEOPage() {
  const industry = industries.find(i => i.slug === 'dumpster-rental-seo');
  
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Dumpster Rental SEO', url: '/services/dumpster-rental-seo' }
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
      question: 'How important are size-specific dumpster pages?',
      answer: 'Very important! Customers search for specific sizes like "10 yard dumpster", "20 yard dumpster", and "30 yard dumpster". I create dedicated pages for each size you offer because customers who know their size are ready to book. This captures high-intent leads and reduces sales friction.'
    },
    {
      question: 'Should I optimize for residential vs commercial dumpster rental separately?',
      answer: 'Yes! Residential and commercial markets have different needs. I create separate pages for "residential dumpster rental" (home cleanouts, small projects) and "commercial dumpster rental" (construction, business waste) because they attract different customers with different booking patterns and price sensitivities.'
    },
    {
      question: 'Why create construction dumpster content?',
      answer: 'Construction dumpsters are high-value recurring rentals. I optimize for "construction dumpster rental", "contractor dumpster", and "construction site dumpster" because contractors need regular rentals for multiple projects. This captures recurring business relationships, not just one-time rentals.'
    },
    {
      question: 'How does pricing transparency help dumpster rental SEO?',
      answer: 'Many customers search for "dumpster rental cost", "dumpster rental prices", and "cheap dumpster rental". I create pricing content that provides value while positioning your business as transparent. This content ranks for cost-research searches and builds trust, improving conversion rates.'
    },
    {
      question: 'Should I create content about dumpster permits?',
      answer: 'Yes! Permit content removes booking barriers. I create guides for "dumpster permits", "driveway dumpster permit", and "street dumpster rental" because customers need this information before booking. This content ranks well and positions you as helpful and knowledgeable.'
    },
    {
      question: 'How important is prohibited items content?',
      answer: 'Very important for avoiding service issues. I create content about "what can go in dumpster", "prohibited dumpster items", and "dumpster rental restrictions". This content educates customers upfront, reduces service calls, and ranks for customers researching rental rules.'
    },
    {
      question: 'Why optimize for same-day dumpster delivery?',
      answer: 'Same-day service captures urgent needs. I optimize for "same day dumpster rental", "emergency dumpster", and "dumpster today" because customers with urgent projects will pay premium rates for immediate delivery. This service differentiation helps you compete against slower competitors.'
    },
    {
      question: 'How do roll-off dumpster searches differ?',
      answer: 'Roll-off is the most common type. I optimize specifically for "roll off dumpster rental", "roll off container", and "roll off dumpster sizes" because this terminology attracts knowledgeable customers familiar with dumpster types. This targets commercial clients and experienced users.'
    },
    {
      question: 'Should I target waste type-specific searches?',
      answer: 'Yes! Different waste types attract different customers. I create pages for "concrete dumpster rental", "yard waste dumpster", "furniture disposal dumpster", and "construction debris dumpster" because customers with specific waste types need appropriate containers. This captures niche markets.'
    },
    {
      question: 'How does scheduling flexibility impact SEO?',
      answer: 'Flexible scheduling is a competitive advantage. I optimize for "flexible dumpster rental", "weekend dumpster delivery", and "dumpster rental no time limit" because customers value convenience. Highlighting flexibility in your optimization helps differentiate you from competitors with rigid policies.'
    },
    {
      question: 'Why create home renovation dumpster content?',
      answer: 'Home renovation is a major rental market. I optimize for "home renovation dumpster", "remodeling dumpster", and "bathroom renovation dumpster" because homeowners planning renovations need waste solutions. This content captures customers in project-planning phases.'
    },
    {
      question: 'Should I optimize for junk removal vs dumpster rental?',
      answer: 'Yes, but clarify the difference. I create content explaining "dumpster rental vs junk removal" because customers often confuse these services. This content captures both markets while educating customers about which service fits their needs, positioning you as helpful.'
    },
    {
      question: 'How important is delivery area optimization?',
      answer: 'Very important for local SEO. I create location-specific pages for each delivery area, targeting "dumpster rental in [city]" and "[city] dumpster service". This ensures you rank in all areas you serve, not just your business location, maximizing your service area visibility.'
    },
    {
      question: 'Why target demolition dumpster searches?',
      answer: 'Demolition projects need large, specialized dumpsters. I optimize for "demolition dumpster rental", "building demolition dumpster", and "demolition debris removal" because these projects are high-value and often require multiple or oversized dumpsters. This captures premium projects.'
    },
    {
      question: 'Should I create estate cleanout dumpster content?',
      answer: 'Yes! Estate cleanouts are emotional, high-volume projects. I optimize for "estate cleanout dumpster", "house cleanout dumpster", and "estate sale dumpster" because these customers need large containers and value sympathetic service. This captures a specific, recurring market segment.'
    },
    {
      question: 'How do weight limits impact dumpster SEO strategy?',
      answer: 'Weight limits are common customer questions. I create content about "dumpster weight limits", "how much can fit in dumpster", and "dumpster tonnage" because customers need this information before booking. This educational content ranks well and reduces customer confusion, improving conversion rates.'
    }
  ];

  const faqs = [
    {
      question: 'Should I create separate pages for different dumpster sizes?',
      answer: 'Yes! Customers search for specific sizes like "10 yard dumpster", "20 yard dumpster", and "30 yard dumpster". I create dedicated pages for each size you offer, targeting size-specific keywords. This helps you rank for customers who know what size they need and captures more qualified leads than a single generic page.'
    },
    {
      question: 'How do you optimize for different project types?',
      answer: 'Different projects require different dumpsters. I create dedicated pages for "construction dumpster rental", "home renovation dumpster", "junk removal dumpster", and "demolition dumpster" that target project-specific keywords. This helps you rank for customers planning specific types of projects and ensures you capture the right customers for each project type.'
    },
    {
      question: 'Can you help me rank for pricing searches?',
      answer: 'Yes! Many customers search for "dumpster rental cost", "dumpster rental prices", and "affordable dumpster rental" when researching costs. I create content about pricing factors, size recommendations, and cost comparisons that provides value while positioning your business. This content ranks for research-phase searches and helps you capture customers before they make decisions.'
    },
    {
      question: 'How important is permit and placement information?',
      answer: 'Very important! Many customers need information about "dumpster permits", "dumpster placement", and "street dumpster rental". I create content about permits, placement requirements, and local regulations that provides value while positioning your business. This content ranks for customers who need this information and helps you capture customers who value proper documentation.'
    },
    {
      question: 'Can you help me capture commercial dumpster rental clients?',
      answer: 'Yes! Commercial dumpster rental is high-value. I optimize for "commercial dumpster rental", "business dumpster", and "construction site dumpster" to attract commercial clients. We also create content about commercial waste management and construction site solutions, which appeals to contractors and business owners.'
    },
    {
      question: 'What makes dumpster rental SEO different from other services?',
      answer: 'Dumpster rental SEO is unique because it combines size-specific pages (10 yard, 20 yard, 30 yard), project type targeting (construction, renovation, cleanout), pricing research optimization, and both residential/commercial markets. I create a comprehensive strategy that captures customers during project planning and cost research.'
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
                "serviceType": "Dumpster Rental SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for dumpster rental businesses. Dominate local search for roll-off dumpsters, construction dumpsters, and junk removal services."
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
                  <span className="text-3xl">🗑️</span>
                  <span className="text-sm font-bold">Premium Dumpster Rental SEO</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="text-white">Dumpster Rental</span><br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SEO Services</span>
                </h1>
                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  When contractors and homeowners need waste disposal, they search <strong className="text-cyan-300">"dumpster rental near me"</strong>. 
                  My SEO strategies ensure your business appears <strong className="text-white">first</strong> in local search results, capturing customers who need reliable solutions.
                </p>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div><div className="text-sm text-slate-400">Client Satisfaction</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">1,732+</div><div className="text-sm text-slate-400">First Page Rankings</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">5x</div><div className="text-sm text-slate-400">Average ROI</div></div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <HeroContactForm 
                  title="Get Your Free Dumpster Rental SEO Audit"
                  subtitle="Discover how to dominate local dumpster rental searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework faqs={seoFrameworkFaqs} industry="Dumpster Rental" />

        <CountriesGrid industrySlug={industry.slug} industryIcon={industry.icon} />

        <WhyChooseMe industry={industry.name} />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Dumpster Rental SEO Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions designed specifically for dumpster rental businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Size-Specific Pages", description: "Create dedicated pages for '10 yard dumpster', '20 yard dumpster', '30 yard dumpster', and '40 yard dumpster' to rank for size-specific searches", icon: <FaBox className="w-6 h-6" /> },
                { title: "Project Type Pages", description: "Target 'construction dumpster rental', 'home renovation dumpster', 'junk removal dumpster', and 'demolition dumpster' to rank for project-specific searches", icon: <FaTools className="w-6 h-6" /> },
                { title: "Pricing & Cost Content", description: "Create content about 'dumpster rental cost', 'dumpster rental prices', and 'affordable dumpster rental' to capture customers researching costs", icon: <FaDollarSign className="w-6 h-6" /> },
                { title: "Permit & Placement Info", description: "Create content about 'dumpster permits', 'dumpster placement', and 'street dumpster rental' to provide value and rank for related searches", icon: <FaClipboardList className="w-6 h-6" /> },
                { title: "Commercial Dumpster Rental", description: "Optimize for 'commercial dumpster rental', 'business dumpster', and 'construction site dumpster' to capture commercial clients", icon: <FaBuilding className="w-6 h-6" /> },
                { title: "Same-Day Dumpster Delivery", description: "Target 'same day dumpster rental', 'emergency dumpster', and 'fast dumpster delivery' to capture customers needing immediate service", icon: "🚚" }
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

        <HireLocalSEO industry={industry.name} />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Dumpster Rental" 
          stats={[
            { value: "94%", label: "of customers search online for dumpster rentals", icon: <FaSearch className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "82%", label: "choose based on Google search results", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "68%", label: "need same-day or next-day delivery", icon: "🚛", color: "from-orange-500 to-amber-500" },
            { value: "6.2x", label: "higher ROI from organic vs paid advertising", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Dumpster Rental SEO Process */}
        <ProcessTimeline 
          industry="Dumpster Rental" 
          steps={[
            { step: 1, title: "Local Analysis", description: "Analyze dumpster rental keywords and competitors in your market", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Size-Based Pages", description: "Create pages for each dumpster size (10, 20, 30, 40 yard)", icon: <FaBox className="w-6 h-6" />, duration: "Weeks 2-3" },
            { step: 3, title: "Google Business Optimization", description: "Optimize GBP for dumpster rental searches", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Weeks 3-4" },
            { step: 4, title: "Use Case Content", description: "Create content for renovation, construction, cleanout uses", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 4-6" },
            { step: 5, title: "Review Generation", description: "Build reviews from satisfied rental customers", icon: "⭐", duration: "Ongoing" },
            { step: 6, title: "Commercial Targeting", description: "Content for contractors and commercial clients", icon: <FaTools className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Dumpster Rental" 
          pillars={[
            { title: "Dumpster Sizes", description: "Complete content for all dumpster size options", topics: ["10 yard dumpster", "20 yard dumpster", "30 yard dumpster", "40 yard dumpster"], icon: <FaBox className="w-6 h-6" /> },
            { title: "Rental Use Cases", description: "Content for different project types", topics: ["Home renovation", "Construction debris", "Estate cleanout", "Commercial waste"], icon: <FaHome className="w-6 h-6" /> },
            { title: "Pricing & Guides", description: "Educational content for rental decisions", topics: ["Rental costs", "Size guide", "Permit info", "Weight limits"], icon: <FaDollarSign className="w-6 h-6" /> },
            { title: "Commercial Services", description: "Content targeting business customers", topics: ["Contractor accounts", "Roll-off service", "Recurring pickup", "Industrial waste"], icon: <FaTools className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Dumpster Rental"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with dumpster photos and delivery areas", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "5-star reviews mentioning delivery and service quality", importance: "Critical", icon: "⭐" },
            { title: "Local Citations", description: "Listings on waste management directories", importance: "High", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Service Area Pages", description: "Location pages for all delivery areas", importance: "High", icon: <FaMap className="w-6 h-6" /> },
            { title: "Size Comparison Content", description: "Content helping customers choose right size", importance: "High", icon: <FaBox className="w-6 h-6" /> },
            { title: "Pricing Transparency", description: "Clear pricing content for local searches", importance: "Medium", icon: <FaMoneyBillWave className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Dumpster Rental"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Top 3 for 'dumpster rental near me'", withoutSEO: "Invisible to searching customers" },
            { feature: "Lead Generation", withSEO: "Consistent daily rental bookings", withoutSEO: "Sporadic calls from flyers" },
            { feature: "Cost Per Rental", withSEO: "$20-40 per rental lead", withoutSEO: "$100+ per lead via ads" },
            { feature: "Size Rankings", withSEO: "Rank for all dumpster sizes", withoutSEO: "Missing size-specific searches" },
            { feature: "Commercial Clients", withSEO: "Attract contractor accounts", withoutSEO: "Limited to residential only" },
            { feature: "Brand Authority", withSEO: "The go-to dumpster rental company", withoutSEO: "Unknown rental option" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Dumpster Rental"
          caseStudy={{
            title: "Regional Dumpster Rental Company",
            industry: "Dumpster Rental",
            results: [
              { metric: "Organic Traffic", value: "380%", change: "increase in visitors" },
              { metric: "Daily Bookings", value: "8x", change: "more rental requests" },
              { metric: "Google Rankings", value: "#1", change: "for 42+ keywords" },
              { metric: "Revenue Growth", value: "225%", change: "year over year" }
            ],
            testimonial: "SEO made us the dominant dumpster rental company in our region. We're now booking more rentals than we can handle.",
            clientName: "Dumpster Rental Business Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Dumpster Rental"
          customItems={[
            { icon: "🚛", title: "Dumpster Industry Expert", description: "Deep understanding of waste management search behavior" },
            { icon: <FaMapMarkerAlt className="w-6 h-6" />, title: "Local SEO Specialist", description: "Expert at ranking dumpster companies locally" },
            { icon: <FaBox className="w-6 h-6" />, title: "Size Strategy Expert", description: "Optimize for all dumpster size searches" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of growing rental businesses" },
            { icon: <FaTools className="w-6 h-6" />, title: "Commercial Focus", description: "Strategies for contractor and commercial leads" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI Focused", description: "SEO that fills your dumpster fleet" }
          ]}
        />

        <TopSEOServices />


        <IndustriesGrid />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What Our Dumpster Rental Clients Say
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Real results from real businesses we've helped grow
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} />

        

        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Dumpster Rental Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free SEO audit and discover How I can help your dumpster rental business grow
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
