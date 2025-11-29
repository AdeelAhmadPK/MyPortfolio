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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaCloud, FaCode, FaRocket, FaServer, FaDatabase } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'SaaS SEO Services | Software Company Marketing | Drive Free Trials & Conversions',
  description: 'Expert SaaS SEO for software companies. Product-led growth strategies, trial conversion optimization, and subscription model marketing. Rank #1 for software searches.',
  keywords: 'saas seo, software seo, b2b software marketing, product-led growth, subscription software, free trial optimization, software company marketing, saas content strategy, product page seo',
  openGraph: {
    title: 'SaaS SEO Services | Software Company Marketing',
    description: 'Expert SaaS SEO strategies to drive free trials, conversions, and subscription growth. Product-led growth optimization.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS SEO Services | Drive Software Trials & Conversions',
    description: 'Product-led growth SEO strategies for SaaS companies. Optimize trials, conversions, and subscriptions.'
  }
};

export default function SaaSSEOPage() {
  const industry = industries.find(i => i.slug === 'saas-seo') || industries[0];
  
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
      question: 'Why is SEO important for SaaS companies?',
      answer: 'SaaS buyers research software solutions extensively before making purchasing decisions. SEO ensures your product appears when prospects search for solutions like "project management software" or "CRM for small business". It drives qualified free trial signups and reduces customer acquisition costs compared to paid advertising.'
    },
    {
      question: 'How is SaaS SEO different from traditional SEO?',
      answer: 'SaaS SEO focuses on product-led growth strategies, trial conversion optimization, comparison pages (vs competitors), integration content, API documentation, and bottom-of-funnel keywords with purchase intent. It requires deep understanding of software buying cycles, product features, and subscription business models.'
    },
    {
      question: 'What keywords should SaaS companies target?',
      answer: 'Target a mix of solution-based keywords ("project management tool"), problem-based queries ("how to track team tasks"), comparison keywords ("Asana vs Monday"), integration searches ("Slack integration"), feature-specific terms ("time tracking software with invoicing"), and pricing queries ("affordable CRM").'
    },
    {
      question: 'How long does SaaS SEO take to show results?',
      answer: 'You\'ll typically see initial traffic improvements in 2-4 months, with significant trial signup growth by months 5-8. SaaS SEO compounds over time - once you rank for key software terms, you generate consistent free trial signups without ongoing ad spend, dramatically reducing CAC.'
    },
    {
      question: 'Should we create competitor comparison pages?',
      answer: 'Absolutely! Comparison pages like "[Your Product] vs [Competitor]" capture high-intent prospects already evaluating alternatives. These pages often have the highest trial conversion rates because visitors are in decision mode. I create honest, feature-focused comparisons that highlight your unique value proposition.'
    },
    {
      question: 'How important are integration pages for SaaS SEO?',
      answer: 'Integration pages are critical! Prospects often search "[Tool A] + [Tool B] integration" to ensure software fits their tech stack. Each integration page targets specific search queries and demonstrates your product\'s compatibility, reducing friction in the buying decision.'
    },
    {
      question: 'What role does product documentation play in SEO?',
      answer: 'Well-optimized documentation attracts developers and technical evaluators searching for implementation details, API capabilities, and technical specifications. It also reduces support burden by helping users find answers, improving user experience and retention.'
    },
    {
      question: 'How do we optimize for free trial conversions?',
      answer: 'I optimize landing pages for trial keywords, create friction-free signup flows, implement clear CTAs, add social proof and testimonials, highlight key features, address common objections, and ensure fast page load speeds. We also optimize for search intent matching to attract qualified prospects.'
    },
    {
      question: 'Should SaaS companies focus on local SEO?',
      answer: 'Not typically. SaaS SEO focuses on broader, solution-based keywords since software is sold globally. However, if you serve specific regions (e.g., "Canadian payroll software") or have industry-specific geographic targeting, local optimization makes sense.'
    },
    {
      question: 'How do you handle technical SEO for SaaS websites?',
      answer: 'I ensure fast page speeds (critical for trial conversions), optimize JavaScript rendering for SPAs, implement proper canonicalization for product variations, create XML sitemaps for dynamic pages, optimize Core Web Vitals, and ensure mobile responsiveness across all product pages.'
    },
    {
      question: 'What content types work best for SaaS SEO?',
      answer: 'High-performing content includes: product feature pages, comparison articles, integration guides, use case studies, how-to tutorials, industry-specific solutions, template libraries, pricing guides, API documentation, and educational resources that address customer pain points.'
    },
    {
      question: 'How important are customer reviews for SaaS SEO?',
      answer: 'Extremely important! Reviews on G2, Capterra, and Product Hunt build trust and provide backlinks. They also generate user-generated content with natural keywords. I help implement review generation strategies and optimize your profiles on software review platforms.'
    },
    {
      question: 'Can SEO help reduce SaaS customer acquisition costs?',
      answer: 'Yes! Organic search has the lowest CAC of any channel. While paid ads require continuous spend, SEO builds lasting visibility. Once ranking, you generate free trial signups indefinitely. Many SaaS companies see 60-80% lower CAC from organic search vs paid channels.'
    },
    {
      question: 'How do you measure SaaS SEO success?',
      answer: 'We track organic traffic, keyword rankings, trial signups from organic search, demo requests, trial-to-paid conversion rates, organic MRR growth, CAC from organic channel, and total revenue attributed to SEO. You get detailed dashboards showing SEO ROI and contribution to business growth.'
    },
    {
      question: 'Should we create content for every product feature?',
      answer: 'Yes! Each feature deserves its own optimized page targeting specific search queries. This creates a comprehensive content hub, captures long-tail searches, helps users discover capabilities, and builds topical authority in your software category.'
    },
    {
      question: 'How do we compete with established SaaS brands in search?',
      answer: 'I focus on long-tail keywords, niche use cases, specific integrations, and industry-focused content where competition is lower. We also create superior content, optimize for featured snippets, build strategic backlinks, and target "alternative to [competitor]" searches to capture switcher traffic.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can SaaS SEO help my software company grow?',
      answer: 'SaaS SEO drives qualified traffic to your product pages, feature comparisons, and pricing pages - capturing prospects with high purchase intent. It reduces customer acquisition costs by generating free trial signups organically, provides compound growth as rankings improve, and builds brand authority in your software category.'
    },
    {
      question: 'What makes SaaS SEO different from other marketing channels?',
      answer: 'Unlike paid advertising that stops when you stop spending, SEO creates lasting visibility. It targets prospects at every stage - from problem awareness through comparison to purchase decision. SaaS SEO also builds product authority through educational content, comparison pages, and integration guides.'
    },
    {
      question: 'How do you optimize for product-led growth?',
      answer: 'I create optimized pages for every product feature, use case, and integration. We target bottom-funnel keywords with trial intent, optimize signup flows for conversions, create comparison content to capture competitor traffic, and develop educational resources that guide prospects toward free trial signups.'
    },
    {
      question: 'Can you help with SaaS pricing page optimization?',
      answer: 'Absolutely! Pricing pages are critical conversion points. I optimize them for pricing-related searches, implement schema markup, create clear feature comparisons across plans, add social proof, address common objections, and ensure fast load speeds. Well-optimized pricing pages significantly improve trial-to-paid conversion rates.'
    },
    {
      question: 'How important is content marketing for SaaS SEO?',
      answer: 'Content marketing is essential for SaaS SEO. Educational content attracts top-of-funnel traffic, feature guides capture mid-funnel prospects, comparison articles target bottom-funnel searches, and use case studies demonstrate value. This comprehensive approach builds authority and guides prospects through the buying journey.'
    },
    {
      question: 'What role do backlinks play in SaaS SEO?',
      answer: 'Quality backlinks from software review sites (G2, Capterra), tech publications, industry blogs, and integration partner pages build domain authority and improve rankings. I develop strategic outreach campaigns, create linkable assets, and build relationships with software directories to earn high-quality backlinks.'
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
                "serviceType": "SaaS SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SaaS SEO services for software companies. Product-led growth strategies, trial conversion optimization, and subscription model marketing to drive qualified signups and reduce customer acquisition costs."
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
                  title="Get Your Free SaaS SEO Audit"
                  subtitle="Discover how to drive more trial signups and grow your MRR"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Product-Led Growth SEO for SaaS</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">SaaS</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When prospects research software solutions, they search <strong className="text-cyan-300 font-bold">"best [tool type]"</strong> or <strong className="text-blue-300 font-bold">"[feature] software"</strong>. 
                  Our product-led growth SEO strategies ensure your SaaS product appears <strong className="text-white font-bold">first</strong>, 
                  driving qualified free trial signups and reducing customer acquisition costs.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">71%</div>
                    <div className="text-xs text-slate-400 font-medium">B2B Start With Search</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">94%</div>
                    <div className="text-xs text-slate-400 font-medium">Research Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">8.2x</div>
                    <div className="text-xs text-slate-400 font-medium">Signup Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="SaaS" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="SaaS" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="SaaS" />

        {/* Section 6: SaaS SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <FaRocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive SaaS SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our SaaS <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Product-led growth strategies designed specifically for software companies and SaaS businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Page SEO",
                  description: "Optimize every product feature page to rank for specific functionality searches and drive qualified trial signups with high purchase intent",
                  icon: <FaCloud className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Feature Comparison Optimization",
                  description: "Create optimized comparison pages (vs competitors) that capture prospects in decision mode and highlight your unique value proposition",
                  icon: <FaChartLine className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Integration Page Creation",
                  description: "Develop dedicated pages for each integration to capture '[Tool A] + [Tool B]' searches and demonstrate your product's tech stack compatibility",
                  icon: <FaCode className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Documentation SEO",
                  description: "Optimize API docs, developer guides, and technical resources to attract technical evaluators and developers researching implementation",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Pricing Page Optimization",
                  description: "Optimize pricing pages for conversion with clear feature comparisons, social proof, schema markup, and pricing-related keyword targeting",
                  icon: <FaDollarSign className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Bottom-of-Funnel Content",
                  description: "Create high-intent content targeting 'best [software type]', use case guides, and industry-specific solutions that drive trial signups",
                  icon: <FaRocket className="w-6 h-6" />,
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
          industry="SaaS"
          stats={[
            { value: "71%", label: "of B2B buyers start their software research with generic search", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "94%", label: "of software buyers research solutions online before purchase", icon: <FaCloud className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "67%", label: "prefer organic search results over paid ads when researching software", icon: <FaChartLine className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "8.2x", label: "higher trial signup rates from organic search vs other channels", icon: <FaRocket className="w-6 h-6" />, color: "from-indigo-500 to-blue-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="SaaS"
          steps={[
            { step: 1, title: "SaaS SEO Audit", description: "We analyze your product pages, competitor positioning, keyword opportunities, technical performance, and identify trial signup conversion opportunities.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Product Keyword Strategy", description: "We map out target keywords including feature-specific searches, comparison terms, integration queries, use case keywords, and bottom-funnel software searches.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Technical & Performance Optimization", description: "I optimize page speeds for trial conversions, fix JavaScript rendering issues, implement schema markup, and ensure mobile responsiveness across product pages.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Product & Feature Content", description: "I create optimized pages for every feature, use case, and integration. Each page targets specific searches and guides prospects toward free trial signups.", icon: <FaCode className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Integration & Documentation SEO", description: "I optimize integration pages, API documentation, developer guides, and technical resources to attract technical evaluators and demonstrate product capabilities.", icon: <FaServer className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track rankings, trial signups, demo requests, trial-to-paid conversion rates, and continuously optimize to maximize MRR growth from organic search.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="SaaS"
          pillars={[
            { title: "Product Feature Content", description: "Comprehensive pages for every feature, capability, and functionality your software offers", topics: ["Core features", "Advanced capabilities", "Feature updates", "Use case examples"], icon: <FaCloud className="w-6 h-6" /> },
            { title: "Integration Content", description: "Dedicated pages for each integration showing compatibility and setup guides", topics: ["Native integrations", "API connections", "Zapier workflows", "Tech stack guides"], icon: <FaCode className="w-6 h-6" /> },
            { title: "Comparison & Alternative Content", description: "Honest comparison pages targeting prospects evaluating multiple solutions", topics: ["Vs competitor pages", "Alternative guides", "Migration content", "Feature comparisons"], icon: <FaChartLine className="w-6 h-6" /> },
            { title: "Educational Resources", description: "Top-of-funnel content that attracts prospects researching solutions", topics: ["How-to guides", "Best practices", "Industry trends", "Template libraries"], icon: <FaBook className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="SaaS"
          signals={[
            { title: "Product Schema Markup", description: "SoftwareApplication and Product schema highlighting features, pricing, ratings, and technical requirements", importance: "Critical", icon: <FaCode className="w-6 h-6" /> },
            { title: "Software Directory Listings", description: "Optimized profiles on G2, Capterra, Product Hunt, and category-specific software directories", importance: "Critical", icon: <FaCloud className="w-6 h-6" /> },
            { title: "SaaS Review Sites", description: "Active profiles on G2, Capterra, TrustRadius with responses to reviews and detailed feature descriptions", importance: "High", icon: "⭐" },
            { title: "Developer Documentation", description: "Well-structured API docs, SDKs, and technical guides that rank for implementation searches", importance: "High", icon: <FaServer className="w-6 h-6" /> },
            { title: "Integration Marketplace", description: "Presence in partner integration marketplaces and directories that provide valuable backlinks", importance: "Medium", icon: <FaDatabase className="w-6 h-6" /> },
            { title: "Industry Backlinks", description: "Links from tech publications, software blogs, industry associations, and partner websites", importance: "High", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="SaaS"
          comparisons={[
            { feature: "Trial Discovery", withSEO: "Prospects find you when researching solutions", withoutSEO: "Rely on expensive paid ads" },
            { feature: "Comparison Searches", withSEO: "Capture prospects comparing alternatives", withoutSEO: "Miss high-intent comparison traffic" },
            { feature: "Customer Acquisition Cost", withSEO: "60-80% lower CAC than paid channels", withoutSEO: "$200-800+ per trial from ads" },
            { feature: "Product Authority", withSEO: "Establish expertise with comprehensive content", withoutSEO: "Limited online product presence" },
            { feature: "Integration Discovery", withSEO: "Appear for '[tool] + [tool]' searches", withoutSEO: "Prospects don't know you integrate" },
            { feature: "Long-term Growth", withSEO: "Compound traffic and signup growth", withoutSEO: "Traffic stops when ad spend stops" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="SaaS"
          caseStudy={{
            title: "SaaS Company Growth",
            industry: "SaaS",
            results: [
              { metric: "Trial Signups", value: "510%", change: "increase in 10 months" },
              { metric: "Monthly MRR", value: "7.8x", change: "organic revenue growth" },
              { metric: "Keyword Rankings", value: "#1", change: "for 60+ software terms" },
              { metric: "Total Revenue", value: "245%", change: "year over year growth" }
            ],
            testimonial: "SEO transformed our growth strategy. We went from paying $400+ per trial to acquiring customers organically. Our CAC dropped 75% while signup volume increased 5x. Best marketing investment we've made.",
            clientName: "SaaS Founder & CEO"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="SaaS"
          customItems={[
            { icon: <FaCloud className="w-6 h-6" />, title: "SaaS Industry Expertise", description: "Deep understanding of product-led growth, trial optimization, and subscription business models" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Growth Results", description: "Track record of helping SaaS companies reduce CAC and increase trial-to-paid conversion rates" },
            { icon: <FaRocket className="w-6 h-6" />, title: "Product-Led Growth Focus", description: "Specialized expertise in optimizing product pages, features, and trial signup flows for conversions" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Technical SEO Excellence", description: "Expert in JavaScript SEO, SPA optimization, and performance tuning for software websites" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent MRR Tracking", description: "Clear reporting showing trial signups, conversions, and revenue attributed to organic search" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated SaaS Support", description: "Direct access to your SEO specialist who understands software business metrics and growth challenges" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">SaaS Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">SaaS Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from software companies that trusted us with their growth
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About SaaS SEO" />

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
              <span className="text-sm font-bold">Start Growing Your SaaS Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Drive More Trial Signups?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free SaaS SEO audit and discover exactly how I can help your software company dominate search, reduce CAC, and grow your MRR
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
                <span className="text-lg font-semibold">Product-Led Growth</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Lower CAC, Higher MRR</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">SaaS SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
