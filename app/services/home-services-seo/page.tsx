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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaHammer, FaTools, FaHardHat, FaRuler } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Home Services SEO | General Contractor Marketing | Renovation & Improvement SEO',
  description: 'Expert SEO for home service businesses and general contractors. Dominate local search for home improvement, renovation, and residential services. Attract more project inquiries.',
  keywords: 'home services seo, contractor seo, general contractor marketing, home improvement seo, renovation seo, handyman seo, residential services seo, remodeling contractor marketing',
  openGraph: {
    title: 'Home Services SEO | General Contractor Marketing',
    description: 'Expert SEO for home service businesses. Dominate local search and attract more project inquiries.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Services SEO | Contractor Marketing',
    description: 'Dominate local search for home improvement and residential services. Attract qualified project leads.'
  }
};

export default function HomeServicesSEOPage() {
  const industry = industries.find(i => i.slug === 'home-services-seo') || industries[0];
  
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
      question: 'Why is SEO important for home service businesses?',
      answer: 'Homeowners search online for contractors, handyman services, and home improvement professionals before making hiring decisions. SEO ensures your business appears when potential customers search for "general contractor near me", "home remodeling", or specific services. It\'s the most cost-effective way to generate consistent project leads.'
    },
    {
      question: 'How is home services SEO different from other industries?',
      answer: 'Home services SEO requires hyper-local optimization, before/after photo galleries, project portfolio showcasing, emergency service visibility, seasonal service targeting, and review generation strategies. It focuses on building trust through visual proof of work quality and local reputation management.'
    },
    {
      question: 'What keywords should home service businesses target?',
      answer: 'Target service-specific keywords ("kitchen remodeling", "bathroom renovation"), location-based searches ("contractor in [city]"), emergency terms ("24/7 handyman"), project-based queries ("deck building contractor"), and comparison searches ("home improvement contractor near me"). Include both broad and specific service variations.'
    },
    {
      question: 'How long does it take to see results from home services SEO?',
      answer: 'You\'ll typically see initial ranking improvements in 2-3 months, with significant lead generation growth by months 4-6. Home services SEO builds cumulative visibility - once established, you generate consistent project inquiries without ongoing advertising costs.'
    },
    {
      question: 'Should we showcase our project portfolio for SEO?',
      answer: 'Absolutely! Before/after galleries, project case studies, and completed work photos build trust and keep visitors engaged. Optimized image galleries with proper alt text and descriptions help you rank in image search and demonstrate your expertise to potential customers.'
    },
    {
      question: 'How important are reviews for home service businesses?',
      answer: 'Critical! Homeowners rely heavily on reviews when choosing contractors. I help generate more positive reviews through compliant request systems, respond professionally to all feedback, and showcase testimonials. A strong review profile (4.5+ stars with 50+ reviews) dramatically improves rankings and conversion rates.'
    },
    {
      question: 'Can SEO help with emergency service visibility?',
      answer: 'Yes! I optimize for emergency-related searches like "24/7 handyman", "emergency plumber", "same-day service", and ensure your business appears prominently for urgent service needs. Emergency visibility captures high-value leads who need immediate assistance.'
    },
    {
      question: 'How do we compete with large franchise home service companies?',
      answer: 'Local independent contractors can outrank franchises by focusing on hyper-local content, neighborhood-specific pages, showcasing local projects, building community relationships, and emphasizing personalized service. I create strategies that highlight your local expertise and customer service advantages.'
    },
    {
      question: 'Should we create pages for each service area we serve?',
      answer: 'Absolutely! Location-specific pages for each city, neighborhood, or zip code you serve helps capture local searches. I create authentic location pages with relevant local content, project examples from that area, and local testimonials to improve visibility in each service area.'
    },
    {
      question: 'What role do project galleries play in SEO?',
      answer: 'Project galleries serve multiple purposes: they keep visitors engaged, demonstrate your expertise, provide visual proof of quality work, and generate image search traffic. Properly optimized with descriptive file names, alt text, and captions, they significantly improve SEO performance.'
    },
    {
      question: 'How do you optimize for seasonal home service searches?',
      answer: 'I create seasonal content strategies targeting spring services (exterior painting, deck building), summer projects (roofing, landscaping), fall preparation (gutter cleaning, winterization), and winter needs (heating, snow removal). This captures demand throughout the year.'
    },
    {
      question: 'Can SEO help attract higher-value remodeling projects?',
      answer: 'Yes! By targeting premium service keywords like "custom kitchen remodeling", "luxury bathroom renovation", and "whole home remodel", we attract customers planning significant investments. Educational content about remodeling processes and design options attracts higher-budget projects.'
    },
    {
      question: 'What directories should home service businesses be listed on?',
      answer: 'Essential directories include Angie\'s List, HomeAdvisor, Houzz, Porch, Thumbtack, Yelp, and industry-specific directories. I ensure consistent NAP (Name, Address, Phone), complete profiles with photos and project examples, and active review management.'
    },
    {
      question: 'How important is Google Business Profile for contractors?',
      answer: 'Extremely important! A fully optimized Google Business Profile is crucial for "near me" searches and local map rankings. I optimize with correct categories, service areas, business hours, project photos, customer reviews, and regular posts about completed projects and special offers.'
    },
    {
      question: 'Should we blog about home improvement topics?',
      answer: 'Absolutely! Educational blog content about home improvement tips, project planning, material selection, and maintenance attracts homeowners researching projects. When they learn from your helpful content, they\'re more likely to choose your services when ready to hire.'
    },
    {
      question: 'How do you measure home services SEO success?',
      answer: 'We track local rankings, Google Business Profile actions (calls, direction requests), website traffic, project inquiry forms, phone calls from organic search, and most importantly, booked projects and revenue from SEO. You get clear reports showing ROI from your SEO investment.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can home services SEO help my contracting business grow?',
      answer: 'Home services SEO puts your business in front of homeowners actively searching for contractors and home improvement services. By ranking for local searches like "general contractor near me" and specific service queries, you attract qualified project leads consistently without ongoing advertising costs. It\'s the most cost-effective long-term marketing investment.'
    },
    {
      question: 'What makes your home services SEO different from general SEO?',
      answer: 'I specialize in home services and understand contractor-specific challenges: seasonal demand, local competition, emergency services, project showcase optimization, review generation, and service area targeting. My strategies are tailored to attract homeowners ready to hire, not just general website traffic.'
    },
    {
      question: 'Can you help showcase our completed projects for SEO?',
      answer: 'Absolutely! I optimize project galleries with proper image SEO, create compelling project case studies, implement before/after galleries that rank in image search, and develop portfolio pages that demonstrate your expertise. Visual proof of quality work significantly improves conversion rates.'
    },
    {
      question: 'How do you handle multiple service area optimization?',
      answer: 'I create authentic location-specific pages for each city or region you serve, implement proper Google Business Profile service area settings, build local citations, and develop neighborhood-focused content. This helps you rank in all your service areas without appearing spammy.'
    },
    {
      question: 'Will SEO help us get emergency service calls?',
      answer: 'Yes! I optimize for emergency-related searches, ensure your contact information is prominent, implement click-to-call functionality, and create emergency service pages that rank for urgent needs. Many contractors see significant revenue from emergency call optimization.'
    },
    {
      question: 'How long before we see more project inquiries from SEO?',
      answer: 'Most home service businesses see initial improvements in 2-3 months, with significant lead generation by months 4-6. Once established, SEO provides consistent project inquiries month after month without ongoing ad spend, dramatically improving profitability.'
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
                "serviceType": "Home Services SEO",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for home service businesses, general contractors, and home improvement companies. Dominate local search and attract more qualified project inquiries."
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
                  title="Get Your Free Home Services SEO Audit"
                  subtitle="Discover how to attract more project inquiries and grow your contracting business"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Local SEO for Home Service Professionals</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Home Services</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When homeowners need contractors, they search <strong className="text-cyan-300 font-bold">"general contractor near me"</strong> or <strong className="text-blue-300 font-bold">"home improvement in [city]"</strong>. 
                  Our local SEO strategies ensure your home service business appears <strong className="text-white font-bold">first</strong> in search results, 
                  attracting qualified project leads when homeowners are ready to hire.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">91%</div>
                    <div className="text-xs text-slate-400 font-medium">Search Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">85%</div>
                    <div className="text-xs text-slate-400 font-medium">Check Reviews</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">4.8x</div>
                    <div className="text-xs text-slate-400 font-medium">Inquiry Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Home Services" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Home Services" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Home Services" />

        {/* Section 6: Home Services SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-600/10 to-amber-600/10 border border-orange-600/20 dark:border-orange-400/20 mb-6">
                <FaTools className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">Comprehensive Home Services SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Home Services <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Local SEO solutions designed specifically for contractors and home improvement businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Service Category Pages",
                  description: "Create optimized pages for every service you offer - from kitchen remodeling to deck building - targeting specific project searches",
                  icon: <FaHammer className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Project Gallery SEO",
                  description: "Optimize before/after galleries and project portfolios to rank in image search and demonstrate your work quality to potential customers",
                  icon: <FaHome className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Review Generation Strategy",
                  description: "Build a steady stream of 5-star reviews on Google, Yelp, and home service platforms to improve rankings and build trust",
                  icon: "⭐",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Local Contractor Authority",
                  description: "Establish your business as the go-to contractor in your service area with location-specific content and local citations",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Service Area Optimization",
                  description: "Create dedicated pages for each city, neighborhood, or zip code you serve to capture local project inquiries",
                  icon: <FaMap className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Emergency Service Visibility",
                  description: "Optimize for emergency and 24/7 service searches to capture urgent, high-value project leads",
                  icon: <FaPhoneAlt className="w-6 h-6" />,
                  color: "from-red-500 to-pink-500"
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
          industry="Home Services"
          stats={[
            { value: "91%", label: "of homeowners search online for home services before hiring", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "85%", label: "check online reviews before choosing a contractor", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "79%", label: "want contractors who appear in 'near me' search results", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "4.8x", label: "higher project inquiry rates from optimized contractor websites", icon: <FaChartLine className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="Home Services"
          steps={[
            { step: 1, title: "Home Services SEO Audit", description: "We analyze your current online presence, local rankings, competitor contractors, and identify opportunities to attract more project inquiries in your service areas.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Service & Location Strategy", description: "We map out target keywords including service-specific searches, location-based queries, emergency terms, and project-type keywords that drive qualified leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Google Business Profile Optimization", description: "I fully optimize your GBP with correct categories, service areas, business hours, project photos, and implement review generation strategies.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Service & Location Pages", description: "I create optimized pages for every service you offer and each location you serve, with project examples, customer testimonials, and clear calls-to-action.", icon: <FaHome className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Project Gallery & Citations", description: "I optimize your project portfolio with before/after photos, build citations on home service directories, and manage your online reputation across platforms.", icon: <FaWrench className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track local rankings, call volume, project inquiries, and continuously optimize to maximize lead generation from organic search.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Home Services"
          pillars={[
            { title: "Service Category Content", description: "Comprehensive pages for every home improvement service you provide", topics: ["Remodeling services", "Repair services", "Installation services", "Maintenance services"], icon: <FaHammer className="w-6 h-6" /> },
            { title: "Project Portfolio Content", description: "Before/after galleries and case studies of completed projects", topics: ["Kitchen remodels", "Bathroom renovations", "Home additions", "Outdoor projects"], icon: <FaHome className="w-6 h-6" /> },
            { title: "Educational Resources", description: "Helpful guides that attract homeowners planning projects", topics: ["Project planning guides", "Material selection tips", "Cost estimating", "Design ideas"], icon: <FaBook className="w-6 h-6" /> },
            { title: "Local Area Content", description: "Location-specific pages for each city and neighborhood you serve", topics: ["City service pages", "Neighborhood guides", "Local project examples", "Area testimonials"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Home Services"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with home service categories, service areas, business hours, project photos, and active customer reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Home Service Directory Citations", description: "Listings on Angie's List, HomeAdvisor, Houzz, Porch, Thumbtack, and local contractor directories", importance: "Critical", icon: <FaTools className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "High-quality reviews on Google, Yelp, and home service platforms mentioning specific services and quality", importance: "High", icon: "⭐" },
            { title: "LocalBusiness Schema", description: "HomeAndConstructionBusiness schema with service types, areas served, and business credentials", importance: "High", icon: <FaHardHat className="w-6 h-6" /> },
            { title: "Project Photo Optimization", description: "Before/after galleries with descriptive file names, alt text, and location tags for image search visibility", importance: "Medium", icon: <FaHome className="w-6 h-6" /> },
            { title: "Local Community Links", description: "Links from local chambers of commerce, community organizations, and supplier partner websites", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Home Services"
          comparisons={[
            { feature: "Project Discovery", withSEO: "Homeowners find you when searching for contractors", withoutSEO: "Only referrals and repeat customers" },
            { feature: "Emergency Services", withSEO: "Rank for urgent 24/7 service searches", withoutSEO: "Miss high-value emergency calls" },
            { feature: "Cost Per Lead", withSEO: "Free organic project inquiries", withoutSEO: "$100-300+ per lead from ads" },
            { feature: "Service Area Coverage", withSEO: "Rank in all cities/neighborhoods you serve", withoutSEO: "Limited geographic visibility" },
            { feature: "Online Reputation", withSEO: "Showcase 100+ 5-star reviews", withoutSEO: "Customers can't verify your quality" },
            { feature: "24/7 Lead Generation", withSEO: "Generate inquiries around the clock", withoutSEO: "Limited to business hours marketing" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Home Services"
          caseStudy={{
            title: "Home Services Business Transformation",
            industry: "Home Services",
            results: [
              { metric: "Project Leads", value: "380%", change: "increase in 9 months" },
              { metric: "Monthly Revenue", value: "4.5x", change: "organic lead growth" },
              { metric: "Google Rankings", value: "#1", change: "for 35+ service terms" },
              { metric: "Business Growth", value: "165%", change: "year over year" }
            ],
            testimonial: "We went from struggling to find projects to turning down work. SEO delivers consistent leads every single day without the expense of advertising. Our business has completely transformed.",
            clientName: "General Contractor & Business Owner"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Home Services"
          customItems={[
            { icon: <FaTools className="w-6 h-6" />, title: "Home Services Industry Expertise", description: "Deep understanding of contractor marketing, local competition, and home improvement buyer behavior" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Lead Generation Results", description: "Track record of helping contractors dominate local search and generate consistent project inquiries" },
            { icon: <FaHammer className="w-6 h-6" />, title: "Service Business Focus", description: "Specialized expertise in optimizing service pages, project portfolios, and review generation" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Local Market Domination", description: "Expert in helping contractors outrank competitors in every service area they cover" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Lead Tracking", description: "Clear reporting showing calls, form submissions, and projects booked from organic search" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Contractor Support", description: "Direct access to your SEO specialist who understands home service business challenges" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Home Services Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Contractor Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from home service businesses that trusted us with their growth
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Home Services SEO" />

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
              <span className="text-sm font-bold">Start Growing Your Business Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Attract More Projects?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free home services SEO audit and discover exactly how I can help your contracting business dominate local search and generate consistent project inquiries
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
                <span className="text-lg font-semibold">Consistent Project Leads</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Home Services Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
