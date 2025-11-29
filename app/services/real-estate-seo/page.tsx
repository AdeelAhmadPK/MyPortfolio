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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaKey, FaBuilding, FaCity } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Real Estate SEO Services | Realtor SEO Marketing | Agent SEO',
  description: 'Expert Real Estate SEO services for realtors, agents, and property listings. Dominate local property searches, optimize MLS listings, and attract more home buyers. Rank #1 for real estate searches.',
  keywords: 'real estate seo, realtor seo, real estate agent marketing, homes for sale, property listings, mls optimization, real estate marketing, real estate website seo',
  openGraph: {
    title: 'Real Estate SEO Services | Realtor Marketing & Lead Generation',
    description: 'Proven SEO strategies for real estate agents. Dominate local property searches and attract more qualified buyers.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO Services | Agent Marketing Experts',
    description: 'Expert SEO for realtors. Attract more buyers with proven real estate strategies.'
  }
};

export default function RealEstateSEOPage() {
  const industry = industries.find(i => i.slug === 'real-estate-seo') || industries[0];
  
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
      question: 'Why is SEO important for real estate agents?',
      answer: 'Home buyers and sellers start their property search online. Real estate SEO ensures your listings and agent profile appear when potential clients search for "homes for sale near me", "best realtor in [city]", or specific property types. It\'s the most cost-effective way to generate qualified leads without expensive Zillow Premier Agent fees.'
    },
    {
      question: 'How is real estate SEO different from other industries?',
      answer: 'Real estate SEO requires property listing optimization, MLS integration SEO, IDX website optimization, virtual tour visibility, neighborhood expertise content, local market authority, and integration with property portals like Zillow, Realtor.com, and Trulia. It\'s more dynamic with constantly changing inventory.'
    },
    {
      question: 'Can SEO help my real estate business compete with Zillow?',
      answer: 'Yes! While Zillow dominates broad searches, local SEO helps agents rank for specific neighborhood searches, property types, and "realtor near me" queries. I optimize for hyper-local terms like "homes for sale in [neighborhood]" and build agent authority that converts better than Zillow leads.'
    },
    {
      question: 'How long does it take to see results from real estate SEO?',
      answer: 'You\'ll typically see initial improvements in 2-3 months, with significant lead generation growth by months 4-6. Real estate SEO is a long-term investment - once established, your rankings deliver consistent qualified leads without the recurring costs of lead generation services.'
    },
    {
      question: 'What real estate keywords should I target?',
      answer: 'I target a mix of property type keywords ("single family homes for sale"), location-based searches ("homes in [neighborhood]"), buyer intent terms ("first time home buyer realtor"), listing-specific queries ("3 bedroom homes under $500k"), and agent branding terms. This captures buyers and sellers at different stages.'
    },
    {
      question: 'How do you optimize MLS listings for SEO?',
      answer: 'I optimize listing titles and descriptions with natural keywords, ensure proper categorization, use high-quality photos with descriptive alt text, add detailed property features, highlight neighborhood amenities, and create compelling descriptions that rank on Google and convert viewers into leads.'
    },
    {
      question: 'Should we create neighborhood guide content?',
      answer: 'Absolutely! Neighborhood guides establish you as the local expert and rank for "[neighborhood name] homes" searches. I create comprehensive area pages covering schools, amenities, home values, market trends, and community features that attract both buyers and sellers researching areas.'
    },
    {
      question: 'How important are property photos and virtual tours for SEO?',
      answer: 'Critical! Google prioritizes listings with high-quality visuals. I optimize photo file names, alt text, and captions with location keywords. Virtual tours increase time-on-site (boosting SEO) and dramatically improve lead quality - buyers who take tours are serious about purchasing.'
    },
    {
      question: 'Can you help us rank for multiple neighborhoods?',
      answer: 'Yes! I create dedicated pages for each neighborhood or area you serve. This helps you capture buyers searching for homes in specific locations while establishing comprehensive local market expertise across your entire service territory.'
    },
    {
      question: 'What role does agent branding play in real estate SEO?',
      answer: 'Agent personal branding is crucial. I optimize your agent profile with credentials, certifications, sales history, community involvement, and client testimonials. Strong agent SEO helps you rank for "best realtor in [city]" and builds trust before clients even contact you.'
    },
    {
      question: 'How do you optimize for local real estate searches?',
      answer: 'I optimize your Google Business Profile with correct real estate categories, service areas, office locations, and client reviews. I also build citations on Zillow, Realtor.com, Trulia, local MLS directories, and implement local schema markup for enhanced visibility.'
    },
    {
      question: 'Should we target home buyer vs seller keywords differently?',
      answer: 'Yes! Buyers search for property listings and neighborhood information, while sellers search for "how to sell my home" and agent expertise. I create separate content strategies: property/area pages for buyers, and selling guides/market analysis content for sellers.'
    },
    {
      question: 'How does IDX integration affect SEO?',
      answer: 'IDX feeds provide dynamic property content that search engines love. I ensure IDX pages are SEO-friendly with unique descriptions, proper URL structures, fast loading times, and mobile optimization. This turns your MLS data into powerful SEO content that ranks well.'
    },
    {
      question: 'Can SEO help with open house promotion?',
      answer: 'Absolutely! I optimize open house listings with event schema, local keywords, property details, and neighborhood information. This helps open houses appear in Google local results, Maps, and event searches, driving more qualified attendees to your showings.'
    },
    {
      question: 'What real estate directories should I be listed on?',
      answer: 'Essential directories include Zillow, Realtor.com, Trulia, Homes.com, Redfin, your local MLS public sites, chamber of commerce, and local business directories. I ensure consistent NAP (Name, Address, Phone), complete profiles, and active review management across all platforms.'
    },
    {
      question: 'How do you measure real estate SEO success?',
      answer: 'We track local rankings, listing views, website traffic, lead form submissions, phone calls, showing requests, property inquiries, and most importantly, closed transactions. You\'ll get detailed reports showing how SEO drives actual sales and commissions - not just vanity metrics.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can real estate SEO help me attract more buyers and sellers?',
      answer: 'Real estate SEO ensures your listings and agent profile appear first when buyers search for homes and sellers search for agents. By optimizing for local searches like "homes for sale near me" and neighborhood-specific queries, you attract qualified leads actively looking to buy or sell. SEO provides consistent leads without expensive lead generation fees.'
    },
    {
      question: 'Will SEO help my listings rank on Google?',
      answer: 'Yes! I optimize individual property listings with compelling descriptions, location keywords, property features, and high-quality photos. This helps your listings rank not just on MLS portals, but directly on Google search results and Maps, giving you more visibility than agents relying solely on property portals.'
    },
    {
      question: 'What makes real estate content rank well in Google?',
      answer: 'Google prioritizes local expertise, comprehensive neighborhood information, detailed property descriptions, market insights, and agent credentials. I create content that demonstrates your deep knowledge of local markets, helping you rank for neighborhood searches and establishing you as the go-to agent in your area.'
    },
    {
      question: 'Can you help with multiple service areas?',
      answer: 'Absolutely! I create optimized pages for each city, neighborhood, or zip code you serve. This helps you rank across your entire service territory while demonstrating comprehensive market knowledge. Each area gets dedicated content covering local market trends, schools, and amenities.'
    },
    {
      question: 'How do you optimize for both buyer and seller searches?',
      answer: 'I create separate content strategies: property listings and neighborhood guides for buyers searching for homes, and selling guides, market analysis, and agent expertise content for sellers researching agents. This dual approach captures leads at both ends of the transaction.'
    },
    {
      question: 'What\'s the difference between real estate SEO and Zillow ads?',
      answer: 'Real estate SEO builds long-term organic visibility that doesn\'t require ongoing ad spend, while Zillow ads provide temporary visibility at high monthly costs. SEO also establishes you as a local expert, attracts higher-quality leads, and compounds over time - once established, rankings deliver consistent free leads.'
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
                "serviceType": "Real Estate SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for real estate agents, realtors, and property listings. Attract more qualified home buyers and sellers through proven real estate SEO strategies."
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
                  title="Get Your Free Real Estate SEO Audit"
                  subtitle="Discover how to attract more buyers and sellers and grow your real estate business"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <FaHome className="text-3xl animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Real Estate & Realtor SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Real Estate</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When buyers look for homes, they search <strong className="text-cyan-300 font-bold">"homes for sale near me"</strong> or <strong className="text-blue-300 font-bold">"realtor in [city]"</strong>. 
                  Our proven SEO strategies ensure your listings and agent profile appear <strong className="text-white font-bold">first</strong> in search results, 
                  attracting more qualified buyers and sellers to grow your real estate business.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">97%</div>
                    <div className="text-xs text-slate-400 font-medium">Start Search Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">2,100+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">5.3x</div>
                    <div className="text-xs text-slate-400 font-medium">Visibility Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Real Estate" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon="🏠"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Real Estate" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Real Estate" />

        {/* Section 6: Real Estate SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <FaKey className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive Realtor SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Real Estate <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Proven SEO solutions designed specifically for real estate agents and property listings
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Listing Optimization",
                  description: "Optimize property listings with compelling descriptions, location keywords, features, and high-quality photos that rank on Google and convert browsers into buyers",
                  icon: <FaHome className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Agent Profile SEO",
                  description: "Build your personal brand with optimized agent profiles showcasing credentials, sales history, market expertise, and testimonials that establish you as the local expert",
                  icon: <FaKey className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Neighborhood Pages",
                  description: "Create comprehensive area guides covering schools, amenities, market trends, and community features that rank for neighborhood searches and establish local authority",
                  icon: <FaCity className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Property Description Optimization",
                  description: "Craft compelling, keyword-rich descriptions that highlight unique features, location benefits, and lifestyle advantages while ranking well in search results",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "IDX Integration SEO",
                  description: "Optimize your IDX feed with SEO-friendly URLs, unique meta descriptions, fast loading, and mobile optimization to turn MLS data into powerful ranking content",
                  icon: <FaBuilding className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Local Real Estate Authority",
                  description: "Build citations on Zillow, Realtor.com, Trulia, and local directories while generating reviews that establish you as the go-to agent in your market",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
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
          industry="Real Estate"
          stats={[
            { value: "97%", label: "of home buyers start their search online", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "89%", label: "check agent websites before contacting", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "76%", label: "want detailed neighborhood information", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "5.3x", label: "more listing visibility with SEO optimization", icon: <FaChartLine className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="Real Estate"
          steps={[
            { step: 1, title: "Real Estate SEO Audit", description: "We analyze your current website, listing visibility, local rankings, competitor agents, and identify opportunities to attract more buyers and sellers in your market.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Property & Market Keyword Strategy", description: "We map out target keywords including property types, neighborhoods, buyer/seller intent terms, and local market searches that drive qualified real estate leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Website & IDX Optimization", description: "I optimize your real estate website structure, IDX integration, listing pages, mobile experience, and site speed for maximum search visibility.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Listing & Content Creation", description: "I optimize property listings, create neighborhood guides, develop market analysis content, and build agent authority pages that rank and convert.", icon: <FaBook className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Real Estate Directory Optimization", description: "I optimize profiles on Zillow, Realtor.com, Trulia, and local directories, implement review generation, and build your online reputation.", icon: <FaHome className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track rankings, listing views, lead inquiries, showings scheduled, and continuously optimize to drive more qualified buyers and sellers to your business.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Real Estate"
          pillars={[
            { title: "Property Listing Content", description: "Optimized listings for every property type and price range in your market", topics: ["Single family homes", "Condos & townhomes", "Luxury properties", "Investment properties"], icon: <FaHome className="w-6 h-6" /> },
            { title: "Neighborhood Guide Content", description: "Comprehensive area guides that establish you as the local market expert", topics: ["School districts", "Amenities & attractions", "Market trends", "Community features"], icon: <FaCity className="w-6 h-6" /> },
            { title: "Buyer & Seller Resources", description: "Educational content that helps clients through the home buying and selling process", topics: ["First-time buyer guides", "Selling process", "Market analysis", "Financing options"], icon: <FaBook className="w-6 h-6" /> },
            { title: "Local Market Authority", description: "Thought leadership content that positions you as the trusted real estate expert", topics: ["Market reports", "Price trend analysis", "Investment insights", "Local market news"], icon: <FaKey className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Real Estate"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with real estate categories, service areas, office hours, listings, and client reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Real Estate Directory Citations", description: "Profiles on Zillow, Realtor.com, Trulia, Homes.com, Redfin, and local MLS directories", importance: "Critical", icon: <FaHome className="w-6 h-6" /> },
            { title: "Client Reviews & Testimonials", description: "High-quality reviews on Google, Zillow, and real estate platforms that mention specific neighborhoods", importance: "High", icon: "⭐" },
            { title: "Real Estate Schema Markup", description: "RealEstateAgent, House, and LocalBusiness schema highlighting listings and credentials", importance: "High", icon: <FaKey className="w-6 h-6" /> },
            { title: "Local Market Authority", description: "Agent credentials, sales history, market expertise, awards, certifications, and community involvement", importance: "Critical", icon: <FaBuilding className="w-6 h-6" /> },
            { title: "Local Real Estate Links", description: "Links from local chambers, community sites, real estate associations, and local publications", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Real Estate"
          comparisons={[
            { feature: "Buyer Discovery", withSEO: "Buyers find your listings when searching", withoutSEO: "Only Zillow/Realtor.com exposure" },
            { feature: "Neighborhood Authority", withSEO: "Rank as the neighborhood expert", withoutSEO: "Generic agent among many" },
            { feature: "Cost Per Lead", withSEO: "Free organic buyer/seller leads", withoutSEO: "$50-200+ per Zillow lead" },
            { feature: "Agent Branding", withSEO: "Establish personal brand and expertise", withoutSEO: "Anonymous listing agent" },
            { feature: "Local Market Dominance", withSEO: "Dominate local property searches", withoutSEO: "Lost in sea of competitors" },
            { feature: "Long-term Growth", withSEO: "Compounding visibility and authority", withoutSEO: "Constant ad spend required" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Real Estate"
          caseStudy={{
            title: "Boutique Real Estate Agency Growth",
            industry: "Real Estate",
            results: [
              { metric: "Property Inquiries", value: "340%", change: "increase in 7 months" },
              { metric: "Showing Requests", value: "4.8x", change: "more monthly showings" },
              { metric: "Google Rankings", value: "#1", change: "for 45+ neighborhood terms" },
              { metric: "Sales Volume", value: "165%", change: "year over year increase" }
            ],
            testimonial: "We went from competing with Zillow Premier agents to becoming the go-to realtor in our neighborhoods. SEO transformed our business from referrals-only to a consistent lead-generating machine.",
            clientName: "Real Estate Broker"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Real Estate"
          customItems={[
            { icon: <FaHome className="w-6 h-6" />, title: "Real Estate Industry Expertise", description: "Deep understanding of MLS, IDX, property marketing, and realtor lead generation" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Agent SEO Results", description: "Track record of helping real estate agents dominate local searches and attract more buyers" },
            { icon: <FaKey className="w-6 h-6" />, title: "Listing Optimization Mastery", description: "Specialized expertise in optimizing property listings for maximum search visibility" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Neighborhood Authority Building", description: "Strategic approach to establishing agents as the trusted expert in their markets" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Lead Metrics", description: "Clear reporting showing buyer inquiries, showings, listings, and closed transactions" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Realtor Support", description: "Direct access to your SEO specialist who understands real estate challenges" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Real Estate Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Real Estate Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from agents who trusted us with their lead generation
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Real Estate SEO" />

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
              <span className="text-sm font-bold">Start Growing Your Real Estate Business Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Attract More Buyers & Sellers?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free real estate SEO audit and discover exactly how I can help your agency dominate local property searches and grow your sales volume
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
                <span className="text-lg font-semibold">IDX Optimized</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Proven Lead Growth</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Real Estate SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
