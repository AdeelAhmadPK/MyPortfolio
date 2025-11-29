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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaGavel, FaBalanceScale, FaFileContract, FaBriefcase } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Law Firm SEO Services | Attorney SEO Marketing | Legal SEO',
  description: 'Expert Law Firm SEO services for attorneys, lawyers, and legal practices. Dominate local search for personal injury, family law, estate planning. Rank #1 for legal services and attract more clients.',
  keywords: 'law firm seo, attorney seo, lawyer marketing, personal injury lawyer, estate planning attorney, legal seo, criminal defense lawyer, family law attorney, law firm marketing',
  openGraph: {
    title: 'Law Firm SEO Services | Attorney Marketing & Client Acquisition',
    description: 'Bar-compliant SEO strategies for law firms. Dominate local search and attract more qualified legal clients.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Firm SEO Services | Legal Marketing Experts',
    description: 'Expert SEO for attorneys. Attract more clients with proven legal marketing strategies.'
  }
};

export default function LawFirmSEOPage() {
  const industry = industries.find(i => i.slug === 'law-firm-seo') || industries[0];
  
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
      question: 'Why is SEO important for law firms?',
      answer: 'Potential clients search online for legal help before contacting attorneys. Law firm SEO ensures your practice appears when people search for "personal injury lawyer near me", "estate planning attorney", or specific legal services. It\'s the most cost-effective way to attract qualified clients actively seeking legal representation.'
    },
    {
      question: 'How is law firm SEO different from other industries?',
      answer: 'Legal SEO requires strict compliance with bar association advertising rules, ethical guidelines, and state-specific regulations. Content must be accurate, non-misleading, and avoid guarantees. It also demands higher E-E-A-T standards, attorney credentials, case results (where permitted), and professional directory optimization.'
    },
    {
      question: 'Can SEO help my law firm compete with larger firms?',
      answer: 'Absolutely! While big firms have brand recognition, local SEO helps boutique and solo practices dominate neighborhood searches. I optimize for hyper-local keywords like "family law attorney in [city]" and build strong local citations that help you outrank larger competitors in your service area.'
    },
    {
      question: 'How long does it take to see results from law firm SEO?',
      answer: 'You\'ll typically see initial improvements in 2-3 months, with significant client acquisition growth by months 4-6. Legal SEO is a long-term investment - once established, your rankings compound over time, delivering consistent qualified leads without ongoing ad spend.'
    },
    {
      question: 'What legal keywords should my firm target?',
      answer: 'I target a mix of practice area keywords ("personal injury lawyer"), case type searches ("car accident attorney"), legal procedure queries ("how to file divorce"), client situation terms ("need criminal defense lawyer"), and location-based searches. This captures clients at different stages of their legal journey.'
    },
    {
      question: 'How do you ensure bar association compliance in SEO?',
      answer: 'I follow all state bar advertising rules, avoid misleading claims, don\'t guarantee outcomes, properly disclose attorney advertising where required, use compliant testimonials, and ensure all marketing adheres to Rules of Professional Conduct. Your SEO stays fully compliant.'
    },
    {
      question: 'Should we create content about specific legal issues?',
      answer: 'Yes! Educational content about legal topics attracts potential clients researching their situation. When they learn from your helpful content, they\'re more likely to choose your firm. We ensure all content is legally accurate, provides genuine value, and positions you as the trusted expert.'
    },
    {
      question: 'How important are online reviews for law firms?',
      answer: 'Critical! Clients heavily rely on reviews when choosing attorneys. I help generate more positive reviews through compliant review request systems, respond professionally to all feedback, and showcase testimonials. A strong review profile (4.5+ stars with 50+ reviews) significantly boosts rankings and client trust.'
    },
    {
      question: 'Can you help us rank for multiple practice areas?',
      answer: 'Yes! I create dedicated pages for each practice area, case type, or legal service your firm offers. This helps you capture clients searching for specific legal help while building comprehensive topical authority across your areas of expertise.'
    },
    {
      question: 'What role do attorney profiles play in SEO?',
      answer: 'Attorney bios are crucial for E-E-A-T signals. I optimize lawyer profiles with bar admissions, education, case experience, publications, awards, and professional associations. Well-optimized profiles help you rank for "[practice area] attorney near me" and build client confidence.'
    },
    {
      question: 'How do you optimize for local legal searches?',
      answer: 'I optimize your Google Business Profile with correct legal categories, service areas, consultation types, and reviews. I also create location-specific practice pages, build citations on legal directories (Avvo, Justia, FindLaw, Martindale), and implement local schema markup.'
    },
    {
      question: 'Should we target case type keywords?',
      answer: 'Absolutely! Many clients search for specific case types like "car accident lawyer", "wrongful termination attorney", or "estate planning lawyer". I optimize for case-specific searches to capture clients with particular legal needs that match your firm\'s expertise.'
    },
    {
      question: 'How does consultation optimization work?',
      answer: 'I optimize consultation request forms, create clear CTAs for free consultations, implement click-to-call functionality, add consultation scheduling tools, and ensure the consultation process is prominent throughout your site. This converts more visitors into actual client consultations.'
    },
    {
      question: 'Can SEO help with lawyer thought leadership?',
      answer: 'Yes! I create and optimize thought leadership content like legal analysis, case commentaries, legislation updates, and industry insights. This establishes your attorneys as authorities, attracts media opportunities, and builds trust with potential clients seeking expert legal counsel.'
    },
    {
      question: 'What legal directories should my firm be listed on?',
      answer: 'Essential directories include Avvo, Justia, FindLaw, Martindale-Hubbell, Lawyers.com, Super Lawyers, Best Lawyers, and state/local bar directories. I ensure complete profiles, consistent NAP (Name, Address, Phone), attorney credentials, and active review management across all platforms.'
    },
    {
      question: 'How do you measure law firm SEO success?',
      answer: 'We track local rankings, Google Business Profile impressions/calls, organic website traffic, consultation requests, phone calls from organic search, new client intake, and most importantly, cases signed and revenue generated. You\'ll get detailed reports showing clear ROI from SEO investment.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can law firm SEO help my practice attract more clients?',
      answer: 'Law firm SEO ensures your practice appears first when potential clients search for legal services in your area. By optimizing for searches like "personal injury lawyer near me" and practice-specific queries, you attract clients actively seeking legal representation. SEO provides consistent client acquisition without the ongoing costs of paid advertising.'
    },
    {
      question: 'Is law firm SEO compliant with bar association rules?',
      answer: 'Yes! I implement bar-compliant SEO strategies that follow all state advertising regulations. This includes avoiding misleading claims, not guaranteeing outcomes, proper attorney advertising disclosures, compliant testimonials, and adherence to Rules of Professional Conduct. Your SEO campaigns will meet all ethical requirements.'
    },
    {
      question: 'What makes legal content rank well in Google?',
      answer: 'Google prioritizes legal content that demonstrates E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. I ensure your content is written by or attributed to licensed attorneys, properly cited, includes attorney credentials, and provides accurate legal information that genuinely helps potential clients.'
    },
    {
      question: 'Can you help with multiple office locations?',
      answer: 'Absolutely! I create optimized location pages for each office, manage multiple Google Business Profiles, and implement local SEO strategies that help each location rank in their respective service areas. This ensures all your offices benefit from improved visibility and client acquisition.'
    },
    {
      question: 'How do you handle different practice area optimization?',
      answer: 'I create dedicated pages for each practice area, case type, or legal service. Whether you offer personal injury, family law, criminal defense, estate planning, or multiple specialties, each area gets optimized content targeting specific client searches. This builds comprehensive authority in your legal specializations.'
    },
    {
      question: 'What\'s the difference between law firm SEO and regular SEO?',
      answer: 'Law firm SEO requires stricter quality standards due to YMYL (Your Money Your Life) classification, bar compliance, ethical guidelines, higher E-E-A-T requirements, attorney credential verification, and careful adherence to legal advertising regulations. It\'s more specialized and requires legal industry expertise to execute properly.'
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
                "serviceType": "Law Firm SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert bar-compliant SEO services for law firms, attorneys, lawyers, and legal practices. Attract more qualified clients through proven legal SEO strategies."
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
                  title="Get Your Free Law Firm SEO Audit"
                  subtitle="Discover how to attract more clients and grow your legal practice"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <FaGavel className="text-3xl animate-float drop-shadow-2xl" />
                  <span className="text-sm font-bold text-white drop-shadow-lg">Bar-Compliant Legal SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Law Firm</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When people need legal help, they search <strong className="text-cyan-300 font-bold">"lawyer near me"</strong> or <strong className="text-blue-300 font-bold">"attorney in [city]"</strong>. 
                  Our bar-compliant SEO strategies ensure your law firm appears <strong className="text-white font-bold">first</strong> in search results, 
                  attracting more qualified clients when they need legal representation most.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">84%</div>
                    <div className="text-xs text-slate-400 font-medium">Research Attorneys Online</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">1,800+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">4.5x</div>
                    <div className="text-xs text-slate-400 font-medium">Client ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Law Firm" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon="⚖️"
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Law Firm" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Law Firm" />

        {/* Section 6: Law Firm SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-600/20 dark:border-blue-400/20 mb-6">
                <FaBalanceScale className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Comprehensive Legal SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Law Firm <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Bar-compliant SEO solutions designed specifically for attorneys and legal practices
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Attorney Profile Optimization",
                  description: "Optimize lawyer bios with bar admissions, education, case experience, awards, and credentials to enhance E-E-A-T signals and attract more clients",
                  icon: <FaGavel className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Practice Area Pages",
                  description: "Create comprehensive pages for each practice area - personal injury, family law, criminal defense, estate planning - to capture case-specific searches",
                  icon: <FaFileContract className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Legal Content Writing",
                  description: "Develop bar-compliant content that educates potential clients, demonstrates legal expertise, and ranks for case type and legal issue searches",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Local Legal SEO",
                  description: "Dominate 'lawyer near me' searches with optimized Google Business Profile, legal directory citations, and location-specific practice pages",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Legal Directory Management",
                  description: "Build authority on Avvo, Justia, FindLaw, Martindale-Hubbell, and bar directories with complete profiles and active review management",
                  icon: <FaBalanceScale className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Consultation Form Optimization",
                  description: "Optimize consultation requests, implement click-to-call features, and create clear CTAs to convert more visitors into actual client consultations",
                  icon: <FaPhoneAlt className="w-6 h-6" />,
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
          industry="Law Firm"
          stats={[
            { value: "84%", label: "of people research attorneys online before hiring", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "93%", label: "of legal clients check online reviews first", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "68%", label: "use 'lawyer near me' searches", icon: <FaMapMarkerAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "4.5x", label: "higher ROI from organic vs paid legal ads", icon: <FaChartLine className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="Law Firm"
          steps={[
            { step: 1, title: "Legal SEO Audit", description: "We analyze your current online presence, local rankings, competitor law firms, and identify client acquisition opportunities in your practice areas and service locations.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Legal Keyword Strategy", description: "We map out target keywords including practice areas, case types, legal issue searches, 'lawyer near me' terms, and bar-compliant client intent keywords.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Bar-Compliant Setup", description: "I ensure all SEO tactics follow bar advertising rules, implement proper disclaimers, avoid misleading claims, and maintain ethical compliance throughout.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content & Attorney Optimization", description: "I create legally accurate content, optimize attorney profiles with credentials and experience, and implement schema markup for enhanced legal visibility.", icon: <FaBook className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Legal Directory Optimization", description: "I optimize profiles on Avvo, Justia, FindLaw, Martindale, implement review generation systems, and manage your reputation across legal platforms.", icon: <FaBalanceScale className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track rankings, consultation requests, case signings, and continuously optimize to attract more qualified clients in your practice areas and locations.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Law Firm"
          pillars={[
            { title: "Practice Area Content", description: "Comprehensive pages for each legal service, practice area, and case type you handle", topics: ["Personal injury law", "Family law", "Criminal defense", "Estate planning"], icon: <FaGavel className="w-6 h-6" /> },
            { title: "Legal Issue Content", description: "Educational content about specific legal problems and situations clients face", topics: ["Legal process guides", "Client rights", "Case outcomes", "Legal FAQs"], icon: <FaFileContract className="w-6 h-6" /> },
            { title: "Attorney Expertise Content", description: "Thought leadership that establishes your attorneys as trusted legal authorities", topics: ["Legal analysis", "Case commentary", "Legislation updates", "Industry insights"], icon: <FaBook className="w-6 h-6" /> },
            { title: "Local Legal Content", description: "Location-specific pages for each office and service area you serve", topics: ["Office location pages", "Local court information", "Community involvement", "Local legal news"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Law Firm"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with legal categories, practice areas, office hours, consultation types, and client reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Legal Directory Citations", description: "Listings on Avvo, Justia, FindLaw, Martindale-Hubbell, Lawyers.com, and state bar directories", importance: "Critical", icon: <FaBalanceScale className="w-6 h-6" /> },
            { title: "Client Reviews", description: "High-quality reviews on Google, Avvo, and other legal platforms that mention specific case types", importance: "High", icon: "⭐" },
            { title: "Legal Schema Markup", description: "Attorney, LegalService, and LocalBusiness schema highlighting practice areas and credentials", importance: "High", icon: <FaGavel className="w-6 h-6" /> },
            { title: "E-E-A-T Signals", description: "Attorney credentials, bar admissions, case results, publications, awards, and professional affiliations", importance: "Critical", icon: <FaBook className="w-6 h-6" /> },
            { title: "Legal Authority Links", description: "Links from bar associations, legal publications, court websites, and law schools", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Law Firm"
          comparisons={[
            { feature: "Client Discovery", withSEO: "Clients find you when searching for lawyers", withoutSEO: "Only referrals and word-of-mouth" },
            { feature: "Practice Area Visibility", withSEO: "Rank for all your legal specialties", withoutSEO: "Limited awareness of your expertise" },
            { feature: "Cost Per Case", withSEO: "Free organic client acquisition", withoutSEO: "$500-2000+ per case from ads" },
            { feature: "Legal Authority", withSEO: "Establish expertise with educational content", withoutSEO: "Minimal online credibility" },
            { feature: "Local Dominance", withSEO: "Dominate 'lawyer near me' searches", withoutSEO: "Invisible to local clients" },
            { feature: "24/7 Lead Generation", withSEO: "Clients find you around the clock", withoutSEO: "Limited to business hours networking" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Law Firm"
          caseStudy={{
            title: "Personal Injury Law Firm Growth",
            industry: "Legal Services",
            results: [
              { metric: "Case Inquiries", value: "380%", change: "increase in 9 months" },
              { metric: "Case Signings", value: "4.2x", change: "more monthly cases" },
              { metric: "Google Rankings", value: "#1", change: "for 35+ legal terms" },
              { metric: "Firm Revenue", value: "220%", change: "year over year growth" }
            ],
            testimonial: "We went from struggling to compete with larger firms to being the go-to law firm in our area. The SEO investment delivered an incredible return and consistent case flow.",
            clientName: "Managing Partner, Personal Injury Law Firm"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Law Firm"
          customItems={[
            { icon: <FaGavel className="w-6 h-6" />, title: "Legal Industry Expertise", description: "Deep understanding of legal SEO, bar compliance, and attorney marketing best practices" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Legal SEO Results", description: "Track record of helping law firms dominate local search and attract more qualified clients" },
            { icon: <FaBalanceScale className="w-6 h-6" />, title: "Bar-Compliant Strategies", description: "All SEO tactics follow state bar advertising rules and Rules of Professional Conduct" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "E-E-A-T Optimization", description: "Specialized expertise in demonstrating attorney expertise, authoritativeness, and trustworthiness" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Case Metrics", description: "Clear reporting showing consultation requests, case signings, and firm growth from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Legal Support", description: "Direct access to your SEO specialist who understands law firm challenges" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Legal Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Law Firm Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from attorneys who trusted us with their client acquisition
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Law Firm SEO" />

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
              <span className="text-sm font-bold">Start Growing Your Law Firm Today</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">Attract More Clients?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Get a free bar-compliant SEO audit and discover exactly how I can help your law firm dominate local search and grow your case volume
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
                <span className="text-lg font-semibold">Bar Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Proven Client Growth</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Legal SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
