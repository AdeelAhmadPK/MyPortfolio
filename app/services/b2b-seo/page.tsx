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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaBriefcase, FaUsers, FaChartBar, FaBuilding, FaIndustry } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'B2B SEO Services | Enterprise Lead Generation | Account-Based Marketing SEO',
  description: 'Expert B2B SEO for enterprise companies. Long sales cycle optimization, thought leadership content, and account-based marketing strategies. Drive qualified business leads.',
  keywords: 'b2b seo, enterprise seo, business to business marketing, b2b lead generation, account based marketing, enterprise solutions seo, b2b content marketing, thought leadership seo',
  openGraph: {
    title: 'B2B SEO Services | Enterprise Lead Generation',
    description: 'Expert B2B SEO strategies for long sales cycles, thought leadership, and enterprise lead generation.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B SEO Services | Enterprise Marketing',
    description: 'Drive qualified B2B leads with expert SEO strategies for enterprise companies.'
  }
};

export default function B2BSEOPage() {
  const industry = industries.find(i => i.slug === 'b2b-seo') || industries[0];
  
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
      question: 'Why is SEO important for B2B companies?',
      answer: 'B2B buyers conduct extensive online research before engaging with vendors - often consuming 3-5 pieces of content before reaching out. SEO ensures your company appears when decision-makers search for solutions, captures prospects at every stage of long sales cycles, and builds authority that influences purchasing committees. It\'s the most cost-effective way to generate qualified enterprise leads.'
    },
    {
      question: 'How is B2B SEO different from B2C SEO?',
      answer: 'B2B SEO targets multiple stakeholders in complex buying processes, focuses on thought leadership and expertise demonstration, addresses longer sales cycles (6-18 months), emphasizes white papers and detailed content, targets industry-specific terminology, and prioritizes lead quality over volume. It requires deeper understanding of business challenges and ROI-focused content.'
    },
    {
      question: 'What keywords should B2B companies target?',
      answer: 'Target solution-based keywords ("enterprise [solution]"), problem-based searches ("how to [solve business challenge]"), comparison terms ("[your solution] vs [competitor]"), industry-specific terms, job function keywords ("tools for [role]"), and long-tail queries that indicate research intent. Include terms at every buying stage from awareness to decision.'
    },
    {
      question: 'How long does B2B SEO take to generate leads?',
      answer: 'You\'ll typically see initial traffic growth in 3-4 months, with qualified lead generation accelerating by months 6-9. B2B SEO builds cumulative authority - once established, you attract consistent high-value leads without ongoing ad spend. The investment pays dividends for years as content continues attracting prospects.'
    },
    {
      question: 'Should we create thought leadership content for SEO?',
      answer: 'Absolutely! Thought leadership content - research reports, industry insights, trend analysis, expert opinions - establishes your company as an authority, attracts decision-makers, earns backlinks from industry publications, and positions you as the go-to expert. This dramatically improves rankings and lead quality.'
    },
    {
      question: 'How important are white papers and case studies for B2B SEO?',
      answer: 'Critical! White papers and case studies address specific business challenges, demonstrate expertise, provide the depth B2B buyers need, and capture prospects in research mode. Properly optimized, they rank for problem-focused searches and convert high-intent visitors into qualified leads.'
    },
    {
      question: 'Can SEO support account-based marketing (ABM)?',
      answer: 'Yes! SEO supports ABM by ranking for industry-specific searches your target accounts conduct, creating content addressing challenges of specific sectors, building authority that influences decision-makers researching your company, and ensuring your brand appears throughout the buying journey of target accounts.'
    },
    {
      question: 'How do we optimize for multiple stakeholders in the buying process?',
      answer: 'I create content targeting different personas - technical content for IT evaluators, ROI-focused content for CFOs, implementation guides for operations teams, and strategic content for C-level executives. This ensures your content addresses concerns of every stakeholder in the purchasing committee.'
    },
    {
      question: 'What role does industry expertise play in B2B SEO?',
      answer: 'Industry expertise is paramount. B2B buyers seek vendors who deeply understand their specific challenges. I create content demonstrating vertical expertise, use industry terminology correctly, address regulatory considerations, showcase relevant case studies, and build authority in your target sectors.'
    },
    {
      question: 'Should we create content for every stage of the sales funnel?',
      answer: 'Absolutely! Top-of-funnel content (trend reports, educational guides) attracts prospects in research mode. Middle-funnel content (comparison guides, solution briefs) engages evaluating prospects. Bottom-funnel content (case studies, ROI calculators) converts ready-to-buy leads. Comprehensive coverage maximizes lead generation.'
    },
    {
      question: 'How do you optimize for long B2B sales cycles?',
      answer: 'I create content that nurtures prospects throughout 6-18 month buying journeys, implement retargeting strategies via organic visibility, develop progressive content that deepens engagement, create resources for multiple buying stages, and ensure your brand maintains visibility as prospects move through evaluation phases.'
    },
    {
      question: 'Can SEO help us compete with larger enterprise competitors?',
      answer: 'Yes! While large competitors have brand recognition, focused SEO helps you dominate niche topics, specific use cases, vertical markets, and long-tail searches. I create superior content in your areas of expertise, build authority through thought leadership, and position you as the specialist solution.'
    },
    {
      question: 'What B2B directories and publications should we target?',
      answer: 'Target industry-specific directories, trade associations, business publications, review sites (G2, TrustRadius for software), industry forums, and professional networks. I build citations and earn backlinks from authoritative sources in your industry, building trust and improving rankings.'
    },
    {
      question: 'How important is technical SEO for B2B websites?',
      answer: 'Critical! B2B sites often have complex structures - product catalogs, resource libraries, documentation. I ensure fast load speeds, mobile optimization, proper site architecture, secure HTTPS, clean URLs, and excellent user experience. Technical excellence prevents losing leads to poor website performance.'
    },
    {
      question: 'Should we create content addressing common objections?',
      answer: 'Absolutely! Creating content that addresses concerns - "Is [solution] worth the investment?", "How to justify [product] to leadership", "Implementation challenges of [solution]" - captures prospects with concerns, provides sales teams ammunition, and demonstrates you understand buyer hesitations.'
    },
    {
      question: 'How do you measure B2B SEO success?',
      answer: 'We track organic traffic, keyword rankings, qualified lead volume, demo requests, white paper downloads, sales-qualified leads (SQLs), deal pipeline value from organic channel, customer acquisition cost, and revenue attributed to SEO. You get detailed dashboards showing SEO\'s contribution to business growth and sales pipeline.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can B2B SEO help our enterprise company generate leads?',
      answer: 'B2B SEO puts your company in front of decision-makers actively researching solutions. By ranking for industry-specific searches, thought leadership content, and solution-focused queries, you attract qualified prospects throughout their buying journey. SEO generates consistent enterprise leads without the high costs of outbound sales or paid advertising.'
    },
    {
      question: 'What makes B2B SEO different from consumer marketing?',
      answer: 'B2B SEO addresses complex buying processes with multiple stakeholders, long sales cycles (6-18 months), and high-value transactions. It focuses on demonstrating expertise, building authority, creating detailed content for evaluation, and nurturing prospects over extended periods. It requires understanding business challenges and ROI considerations.'
    },
    {
      question: 'Can SEO work for account-based marketing strategies?',
      answer: 'Absolutely! SEO complements ABM by ensuring your brand appears when target account contacts research solutions, creating industry-specific content that resonates with target sectors, and building the authority that influences purchasing committees. SEO maintains visibility throughout the long evaluation processes typical of target accounts.'
    },
    {
      question: 'How do you create content for different buying committee members?',
      answer: 'I develop persona-specific content addressing each stakeholder\'s concerns: technical specifications for IT evaluators, ROI analysis for financial decision-makers, implementation planning for operations, and strategic alignment for C-level executives. This ensures comprehensive coverage of all evaluation criteria.'
    },
    {
      question: 'What role does thought leadership play in B2B SEO?',
      answer: 'Thought leadership establishes your company as an industry authority, attracts high-level decision-makers, earns media coverage and backlinks, differentiates you from competitors, and builds the trust necessary for high-value B2B transactions. It\'s essential for competing in enterprise markets.'
    },
    {
      question: 'How long before we see qualified leads from B2B SEO?',
      answer: 'Initial traffic improvements typically appear in 3-4 months, with qualified lead generation accelerating by months 6-9. B2B SEO builds cumulative authority that generates increasingly qualified leads over time, providing sustainable growth without ongoing advertising costs.'
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
                "serviceType": "B2B SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert B2B SEO services for enterprise companies. Long sales cycle optimization, thought leadership content, and account-based marketing strategies to drive qualified business leads."
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
                  title="Get Your Free B2B SEO Audit"
                  subtitle="Discover how to drive qualified enterprise leads and grow your business"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">Enterprise Lead Generation & Thought Leadership SEO</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">B2B</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When B2B buyers research solutions, they search <strong className="text-cyan-300 font-bold">"enterprise [solution]"</strong> or <strong className="text-blue-300 font-bold">"best [tool] for [industry]"</strong>. 
                  Our B2B SEO strategies ensure your company appears <strong className="text-white font-bold">first</strong> in search results, 
                  attracting qualified enterprise leads throughout long sales cycles.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">89%</div>
                    <div className="text-xs text-slate-400 font-medium">Start With Search</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">71%</div>
                    <div className="text-xs text-slate-400 font-medium">Read 3-5 Pieces</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">6.4x</div>
                    <div className="text-xs text-slate-400 font-medium">Lead Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="B2B" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="B2B" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="B2B" />

        {/* Section 6: B2B SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <FaBriefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive B2B SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our B2B <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Enterprise lead generation strategies designed for complex B2B sales cycles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Thought Leadership Content",
                  description: "Create industry insights, research reports, and expert content that establishes your company as an authority and attracts C-level decision-makers",
                  icon: <FaLightbulb className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "White Paper & eBook SEO",
                  description: "Optimize in-depth resources that address business challenges, capture prospects in research mode, and generate qualified lead downloads",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Case Study Optimization",
                  description: "Develop compelling case studies that demonstrate ROI, showcase client success, and rank for problem-solution searches in your industry",
                  icon: <FaChartBar className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Industry Authority Building",
                  description: "Build vertical expertise through sector-specific content, industry terminology, and deep understanding of business challenges in your markets",
                  icon: <FaIndustry className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Enterprise Keyword Targeting",
                  description: "Target high-value enterprise keywords, solution-based searches, and buying committee queries that drive qualified B2B leads",
                  icon: <FaSearch className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Stakeholder Journey Content",
                  description: "Create persona-specific content addressing concerns of every buying committee member from IT to C-suite executives",
                  icon: <FaUsers className="w-6 h-6" />,
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
          industry="B2B"
          stats={[
            { value: "89%", label: "of B2B buyers start their purchase process with online search", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "71%", label: "of B2B buyers consume 3-5 pieces of content before engaging sales", icon: <FaBook className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "67%", label: "prefer organic search results over paid ads when researching vendors", icon: <FaBriefcase className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "6.4x", label: "higher lead quality from organic search vs paid advertising", icon: <FaChartLine className="w-6 h-6" />, color: "from-indigo-500 to-blue-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="B2B"
          steps={[
            { step: 1, title: "B2B SEO Audit", description: "We analyze your current content, competitor positioning, keyword opportunities, and identify gaps in addressing stakeholder concerns throughout the buying journey.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Enterprise Keyword Strategy", description: "We map out target keywords for every buying stage, persona-specific searches, industry terminology, and solution-focused queries that drive qualified leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Thought Leadership Development", description: "I create industry insights, research reports, and expert content that positions your company as an authority and attracts C-level decision-makers.", icon: <FaLightbulb className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Stakeholder Content Creation", description: "I develop persona-specific content addressing technical evaluators, financial decision-makers, operations teams, and executive leadership concerns.", icon: <FaUsers className="w-6 h-6" />, duration: "Weeks 3-8" },
            { step: 5, title: "Authority Building & Links", description: "I earn backlinks from industry publications, build relationships with trade associations, and create linkable assets that attract authoritative citations.", icon: <FaLink className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track rankings, lead quality, demo requests, sales pipeline contribution, and continuously optimize to maximize enterprise lead generation and deal value.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="B2B"
          pillars={[
            { title: "Solution Content", description: "Comprehensive pages explaining your enterprise solutions and how they address business challenges", topics: ["Solution overviews", "Feature deep-dives", "Implementation guides", "ROI calculators"], icon: <FaBriefcase className="w-6 h-6" /> },
            { title: "Thought Leadership", description: "Industry insights and research that position your company as a market authority", topics: ["Industry reports", "Trend analysis", "Expert opinions", "Research studies"], icon: <FaLightbulb className="w-6 h-6" /> },
            { title: "Buying Committee Content", description: "Persona-specific resources addressing different stakeholder concerns", topics: ["Technical specifications", "ROI analysis", "Implementation planning", "Strategic alignment"], icon: <FaUsers className="w-6 h-6" /> },
            { title: "Industry Expertise", description: "Vertical-specific content demonstrating deep understanding of sector challenges", topics: ["Industry use cases", "Regulatory compliance", "Sector trends", "Vertical solutions"], icon: <FaIndustry className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="B2B"
          signals={[
            { title: "Thought Leadership Authority", description: "Published research, industry insights, and expert content that establishes market authority and earns citations", importance: "Critical", icon: <FaLightbulb className="w-6 h-6" /> },
            { title: "Industry Publication Links", description: "Backlinks from trade publications, business media, industry associations, and authoritative B2B sources", importance: "Critical", icon: <FaBook className="w-6 h-6" /> },
            { title: "Case Study Portfolio", description: "Detailed client success stories with metrics demonstrating ROI and business impact in target industries", importance: "High", icon: <FaChartBar className="w-6 h-6" /> },
            { title: "Organization Schema", description: "Rich schema markup highlighting company credentials, awards, certifications, and industry recognition", importance: "High", icon: <FaBuilding className="w-6 h-6" /> },
            { title: "White Paper Library", description: "Gated and ungated in-depth resources that capture leads and demonstrate subject matter expertise", importance: "Medium", icon: <FaBook className="w-6 h-6" /> },
            { title: "Strategic Partnerships", description: "Co-marketing relationships and integration partnerships that provide authoritative backlinks", importance: "Medium", icon: <FaHandshake className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="B2B"
          comparisons={[
            { feature: "Lead Generation", withSEO: "Attract prospects throughout research phase", withoutSEO: "Cold outreach to unqualified contacts" },
            { feature: "Thought Leadership", withSEO: "Establish authority with ranking content", withoutSEO: "Limited industry visibility" },
            { feature: "Cost Per Lead", withSEO: "60-80% lower than paid advertising", withoutSEO: "$500-2000+ per enterprise lead" },
            { feature: "Sales Cycle Support", withSEO: "Content nurtures throughout 6-18 months", withoutSEO: "No digital touchpoints during evaluation" },
            { feature: "Stakeholder Reach", withSEO: "Content addresses all buying committee members", withoutSEO: "Difficult to reach decision-makers" },
            { feature: "Long-term Value", withSEO: "Compound lead generation over years", withoutSEO: "Constant investment in outbound" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="B2B"
          caseStudy={{
            title: "B2B Enterprise Growth",
            industry: "B2B",
            results: [
              { metric: "Qualified Leads", value: "420%", change: "increase in 11 months" },
              { metric: "Enterprise Deals", value: "6.2x", change: "deals closed from organic" },
              { metric: "Industry Rankings", value: "#1", change: "for 45+ industry terms" },
              { metric: "Revenue Growth", value: "215%", change: "from SEO channel" }
            ],
            testimonial: "SEO transformed our lead generation. We now attract enterprise prospects during their research phase, enter sales conversations with established authority, and close deals faster. Our sales team loves the qualified leads coming from organic search.",
            clientName: "VP of Marketing, Enterprise SaaS"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="B2B"
          customItems={[
            { icon: <FaBriefcase className="w-6 h-6" />, title: "B2B Marketing Expertise", description: "Deep understanding of complex sales cycles, buying committees, and enterprise decision-making processes" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Lead Quality", description: "Track record of generating high-value enterprise leads that convert to significant deal pipeline" },
            { icon: <FaLightbulb className="w-6 h-6" />, title: "Thought Leadership Development", description: "Expertise in creating authority-building content that influences C-level decision-makers" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Industry Specialization", description: "Experience developing vertical-specific strategies that demonstrate deep sector expertise" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Pipeline Attribution", description: "Clear reporting showing deals influenced and closed from organic search efforts" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Strategic Partnership", description: "Direct collaboration with your sales and marketing teams to align SEO with revenue goals" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">B2B Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Enterprise Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from B2B companies that trusted us with their lead generation
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About B2B SEO" />

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
              <span className="text-sm font-bold">Start Generating Enterprise Leads Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Drive Qualified B2B Leads?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free B2B SEO audit and discover exactly how I can help your enterprise company dominate search, build thought leadership, and generate qualified leads
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
                <span className="text-lg font-semibold">Thought Leadership</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Enterprise Lead Quality</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">B2B SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
