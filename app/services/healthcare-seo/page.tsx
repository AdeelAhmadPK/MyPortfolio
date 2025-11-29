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
import { FaBell, FaBolt, FaBook, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaHandshake, FaHome, FaLightbulb, FaLink, FaMap, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTags, FaWrench, FaUserMd, FaHospital, FaHeartbeat, FaStethoscope } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Healthcare SEO Services | Medical Practice SEO Marketing | Patient Acquisition',
  description: 'Expert Healthcare SEO services for medical practices, hospitals, clinics, and healthcare providers. HIPAA-compliant strategies to dominate local search and attract more patients. Rank #1 for medical services.',
  keywords: 'healthcare seo, medical practice seo, hospital seo, clinic seo marketing, doctor seo, physician marketing, patient acquisition, medical marketing, healthcare digital marketing, dentist seo, urgent care seo',
  openGraph: {
    title: 'Healthcare SEO Services | Medical Practice Patient Acquisition',
    description: 'HIPAA-compliant SEO strategies for healthcare providers. Dominate local search and attract more patients.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare SEO Services | Medical Practice Marketing',
    description: 'Expert SEO for healthcare providers. Attract more patients with proven strategies.'
  }
};

export default function HealthcareSEOPage() {
  const industry = industries.find(i => i.slug === 'healthcare-seo') || industries[0];
  
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
      question: 'Why is SEO important for healthcare providers?',
      answer: 'Patients search online for doctors, specialists, and medical services before booking appointments. Healthcare SEO ensures your practice appears when potential patients search for "doctor near me", specialist services, or specific treatments. It\'s cost-effective patient acquisition that builds long-term visibility.'
    },
    {
      question: 'How is healthcare SEO different from other industries?',
      answer: 'Healthcare SEO requires HIPAA compliance, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) optimization, medical credential verification, patient privacy protection, and careful content that meets YMYL (Your Money Your Life) standards. It demands higher content quality and trustworthiness.'
    },
    {
      question: 'Can SEO help my practice compete with large hospital systems?',
      answer: 'Absolutely! While hospital systems have brand recognition, local SEO helps independent practices dominate neighborhood searches. I optimize for hyper-local keywords like "family doctor in [area]" and build strong local citations that help you outrank larger competitors in your service area.'
    },
    {
      question: 'How long does it take to see results from healthcare SEO?',
      answer: 'You\'ll typically see initial improvements in 2-3 months, with significant patient acquisition growth by months 4-6. Healthcare SEO is a long-term investment - once established, your rankings compound over time, delivering consistent patient inquiries without ongoing ad spend.'
    },
    {
      question: 'What healthcare keywords should my practice target?',
      answer: 'I target a mix of specialty-specific keywords ("cardiologist near me"), condition-based searches ("diabetes treatment"), procedure queries ("knee replacement surgery"), insurance-related terms ("accepts Medicare"), and location-based queries. This captures patients at different stages of their healthcare journey.'
    },
    {
      question: 'How do you ensure HIPAA compliance in SEO?',
      answer: 'I implement secure forms, use HIPAA-compliant analytics setups, avoid patient data in URLs or tracking, ensure secure hosting, and create content that educates without violating patient privacy. All marketing follows healthcare advertising regulations.'
    },
    {
      question: 'Should we create content about specific medical conditions?',
      answer: 'Yes! Educational content about conditions you treat attracts patients researching their symptoms. When they learn from your helpful content, they\'re more likely to choose your practice. We ensure all content is medically accurate and properly attributed to licensed professionals.'
    },
    {
      question: 'How important are online reviews for medical practices?',
      answer: 'Critical! Patients heavily rely on reviews when choosing healthcare providers. I help generate more positive reviews through compliant review request systems, respond professionally to all feedback, and showcase testimonials. A strong review profile (4.5+ stars with 100+ reviews) significantly boosts rankings and patient trust.'
    },
    {
      question: 'Can you help us rank for multiple specialties?',
      answer: 'Yes! I create dedicated pages for each specialty, procedure, or service line your practice offers. This helps you capture patients searching for specific treatments while building topical authority in multiple healthcare areas.'
    },
    {
      question: 'What role does doctor bio optimization play in SEO?',
      answer: 'Doctor bios are crucial for E-E-A-T signals. I optimize physician profiles with credentials, specializations, training, published research, and patient care philosophy. Well-optimized bios help you rank for "[specialty] doctor near me" and build patient confidence.'
    },
    {
      question: 'How do you optimize for local healthcare searches?',
      answer: 'I optimize your Google Business Profile with correct categories, service areas, office hours, insurance accepted, photos, and patient reviews. I also create location-specific pages, build citations on healthcare directories (Healthgrades, Vitals, Zocdoc), and implement local schema markup.'
    },
    {
      question: 'Should we target insurance-related keywords?',
      answer: 'Definitely! Many patients search for providers who accept their insurance. I optimize for "[insurance] doctor near me", create insurance acceptance pages, and ensure your accepted insurance plans are prominently displayed and properly structured for search engines.'
    },
    {
      question: 'How does voice search impact medical practice SEO?',
      answer: 'Voice search is growing rapidly for healthcare queries. I optimize for conversational queries like "find a pediatrician open now" or "urgent care near me", create FAQ content that matches voice search patterns, and ensure your practice information is voice-search friendly.'
    },
    {
      question: 'Can SEO help with patient education and engagement?',
      answer: 'Absolutely! I create comprehensive patient education content that answers common questions, explains procedures, discusses treatment options, and provides health tips. This builds trust, establishes expertise, and keeps patients engaged with your practice.'
    },
    {
      question: 'What healthcare directories should my practice be listed on?',
      answer: 'Essential directories include Healthgrades, Vitals, Zocdoc, RateMDs, WebMD, Doximity, and specialty-specific directories. I ensure consistent NAP (Name, Address, Phone), complete profiles, and active review management across all platforms.'
    },
    {
      question: 'How do you measure healthcare SEO success?',
      answer: 'We track local rankings, Google Business Profile impressions/calls, organic website traffic, appointment requests, new patient forms, phone calls from organic search, and most importantly, new patient acquisition and revenue. You\'ll get detailed HIPAA-compliant reports showing ROI.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'How can healthcare SEO help my practice attract more patients?',
      answer: 'Healthcare SEO ensures your practice appears first when patients search for medical services in your area. By optimizing for local searches like "doctor near me" and specialty-specific queries, you attract patients actively seeking care. SEO provides consistent patient acquisition without the ongoing costs of paid advertising.'
    },
    {
      question: 'Is healthcare SEO HIPAA-compliant?',
      answer: 'Yes! I implement HIPAA-compliant SEO strategies that protect patient privacy. This includes secure forms, compliant analytics configurations, avoiding patient data in tracking, and following all healthcare advertising regulations. Your SEO campaigns will meet all regulatory requirements.'
    },
    {
      question: 'What makes healthcare content rank well in Google?',
      answer: 'Google prioritizes healthcare content that demonstrates E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness. I ensure your content is written or reviewed by licensed medical professionals, properly cited, includes doctor credentials, and provides accurate medical information that serves patient needs.'
    },
    {
      question: 'Can you help with multiple practice locations?',
      answer: 'Absolutely! I create optimized location pages for each practice location, manage multiple Google Business Profiles, and implement local SEO strategies that help each location rank in their respective service areas. This ensures all your locations benefit from improved visibility.'
    },
    {
      question: 'How do you handle medical specialty optimization?',
      answer: 'I create dedicated pages for each specialty, procedure, or service line. Whether you offer cardiology, orthopedics, pediatrics, or multiple specialties, each service gets optimized content targeting specific patient searches. This builds comprehensive topical authority in your medical areas.'
    },
    {
      question: 'What\'s the difference between healthcare SEO and regular SEO?',
      answer: 'Healthcare SEO requires stricter quality standards due to YMYL (Your Money Your Life) classification. This means higher content quality, medical professional authorship, accurate citations, E-E-A-T optimization, HIPAA compliance, and careful adherence to medical advertising regulations. It\'s more specialized and requires healthcare industry expertise.'
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
                "serviceType": "Healthcare SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert HIPAA-compliant SEO services for healthcare providers, medical practices, hospitals, clinics, and healthcare organizations. Attract more patients through proven SEO strategies."
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
                  title="Get Your Free Healthcare SEO Audit"
                  subtitle="Discover how to attract more patients and grow your medical practice"
                  buttonText="Get Free Consultation"
                />
              </div>

              {/* Left Column: Hero Content */}`n              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 mb-8 animate-scale-in shadow-lg shadow-blue-500/20">
                  <span className="text-3xl animate-float drop-shadow-2xl">{industry.icon}</span>
                  <span className="text-sm font-bold text-white drop-shadow-lg">HIPAA-Compliant Healthcare SEO Services</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight animate-slide-up">
                  <span className="text-white drop-shadow-2xl">Healthcare</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">SEO Services</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 drop-shadow-lg">
                  When patients need medical care, they search <strong className="text-cyan-300 font-bold">"doctor near me"</strong> or <strong className="text-blue-300 font-bold">"specialist in [city]"</strong>. 
                  Our HIPAA-compliant SEO strategies ensure your healthcare practice appears <strong className="text-white font-bold">first</strong> in search results, 
                  attracting more patients when they need your services most.
                </p>

                <div className="flex flex-wrap gap-8 animate-fade-in animation-delay-400">
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">97%</div>
                    <div className="text-xs text-slate-400 font-medium">Patient Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1">2,400+</div>
                    <div className="text-xs text-slate-400 font-medium">Keywords Ranked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">6x</div>
                    <div className="text-xs text-slate-400 font-medium">Patient Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Healthcare" />

        {/* Section 3: Top 10 Countries */}
        <CountriesGrid 
          industrySlug={industry.slug}
          industryIcon={industry.icon as string}
        />

        {/* Section 4: Why Choose Me */}
        <WhyChooseMe industry="Healthcare" />

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Healthcare" />

        {/* Section 6: Healthcare SEO Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 dark:border-green-400/20 mb-6">
                <FaHeartbeat className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-bold text-green-600 dark:text-green-400">Comprehensive Healthcare SEO</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Healthcare <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                HIPAA-compliant SEO solutions designed specifically for medical practices and healthcare providers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Medical Specialty Optimization",
                  description: "Rank for specialty-specific searches like 'cardiologist near me', 'pediatrician', 'orthopedic surgeon' to attract patients seeking your expertise",
                  icon: <FaStethoscope className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Patient Education Content",
                  description: "Create medically accurate, E-E-A-T optimized content that educates patients and establishes your practice as a trusted healthcare authority",
                  icon: <FaBook className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Local Healthcare SEO",
                  description: "Dominate local search with optimized Google Business Profile, healthcare directory listings, and location-specific service pages",
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Insurance & Billing Optimization",
                  description: "Rank for insurance-specific searches like 'accepts Medicare', 'PPO dentist' to attract patients with your accepted insurance plans",
                  icon: <FaDollarSign className="w-6 h-6" />,
                  color: "from-indigo-500 to-blue-500"
                },
                {
                  title: "Doctor Profile Optimization",
                  description: "Optimize physician bios with credentials, specializations, training, and experience to enhance E-E-A-T signals and patient trust",
                  icon: <FaUserMd className="w-6 h-6" />,
                  color: "from-red-500 to-orange-500"
                },
                {
                  title: "Healthcare Directory Management",
                  description: "Build citations on Healthgrades, Vitals, Zocdoc, WebMD, and specialty directories to boost local authority and visibility",
                  icon: <FaHospital className="w-6 h-6" />,
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
          industry="Healthcare"
          stats={[
            { value: "77%", label: "of patients use search engines before booking a medical appointment", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "89%", label: "of patients read online reviews before choosing a healthcare provider", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "72%", label: "of patients research doctors and symptoms online", icon: <FaUserMd className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "5x", label: "higher patient trust from organic search vs paid ads", icon: <FaHeartbeat className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Section 8: My Process */}
        <ProcessTimeline 
          industry="Healthcare"
          steps={[
            { step: 1, title: "Healthcare SEO Audit", description: "We analyze your current online presence, local rankings, competitor medical practices, and identify patient acquisition opportunities in your specialty and service area.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Medical Keyword Strategy", description: "We map out target keywords including specialty terms, condition-based queries, treatment searches, and insurance-related keywords that drive qualified patient leads.", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "HIPAA-Compliant Setup", description: "I implement secure, HIPAA-compliant tracking, optimize website security, and ensure all patient data handling meets regulatory requirements.", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Content & E-E-A-T Optimization", description: "I create medically accurate content, optimize doctor profiles with credentials, and implement schema markup to demonstrate expertise and trustworthiness.", icon: <FaBook className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Healthcare Directory Optimization", description: "I optimize your profiles on Healthgrades, Vitals, Zocdoc, and specialty directories, implement review generation systems, and manage your online reputation.", icon: <FaHospital className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Monitor & Optimize", description: "We track rankings, patient inquiries, appointment bookings, and continuously optimize to attract more patients in your specialty and service areas.", icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Section 9: Topic Cluster Strategy */}
        <TopicClusterSection 
          industry="Healthcare"
          pillars={[
            { title: "Medical Specialty Content", description: "Comprehensive pages for each specialty, subspecialty, and medical service you provide", topics: ["Primary care services", "Specialty medicine", "Surgical procedures", "Diagnostic services"], icon: <FaStethoscope className="w-6 h-6" /> },
            { title: "Condition & Treatment Content", description: "Educational content about conditions you treat and available treatment options", topics: ["Common conditions", "Symptoms guides", "Treatment options", "Prevention tips"], icon: <FaHeartbeat className="w-6 h-6" /> },
            { title: "Patient Resource Content", description: "Helpful resources that answer patient questions and build trust", topics: ["FAQ sections", "Pre/post-op guides", "Insurance information", "Patient forms"], icon: <FaBook className="w-6 h-6" /> },
            { title: "Local Healthcare Content", description: "Location-specific pages for each practice location and service area", topics: ["Location pages", "Service area targeting", "Community health", "Local partnerships"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Section 10: Local SEO Signals */}
        <LocalSEOSignals 
          industry="Healthcare"
          signals={[
            { title: "Google Business Profile", description: "Optimized GBP with medical categories, services offered, office hours, insurance accepted, and patient reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Healthcare Directory Citations", description: "Listings on Healthgrades, Vitals, Zocdoc, WebMD, and specialty-specific medical directories", importance: "Critical", icon: <FaHospital className="w-6 h-6" /> },
            { title: "Patient Reviews", description: "High-quality reviews on Google, Healthgrades, and Vitals that mention specific conditions and treatments", importance: "High", icon: "⭐" },
            { title: "Medical Schema Markup", description: "Physician, MedicalOrganization, and MedicalBusiness schema highlighting specialties and credentials", importance: "High", icon: <FaUserMd className="w-6 h-6" /> },
            { title: "E-E-A-T Signals", description: "Doctor credentials, medical licenses, board certifications, published research, and professional affiliations", importance: "Critical", icon: <FaBook className="w-6 h-6" /> },
            { title: "Local Healthcare Links", description: "Links from hospitals, medical associations, health news sites, and community health organizations", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Section 11: With SEO vs Without */}
        <CompetitorComparison 
          industry="Healthcare"
          comparisons={[
            { feature: "Patient Discovery", withSEO: "Patients find you when searching for specialists", withoutSEO: "Only referrals and existing patients" },
            { feature: "Insurance Searches", withSEO: "Rank for 'accepts [insurance] doctors'", withoutSEO: "Miss insurance-specific searches" },
            { feature: "Cost Per Patient", withSEO: "Free organic patient acquisition", withoutSEO: "$200-500+ per patient from ads" },
            { feature: "Medical Authority", withSEO: "Establish expertise with educational content", withoutSEO: "Minimal online presence" },
            { feature: "Local Visibility", withSEO: "Dominate 'near me' medical searches", withoutSEO: "Invisible to local patients" },
            { feature: "24/7 Lead Generation", withSEO: "Patients find you around the clock", withoutSEO: "Limited to business hours outreach" }
          ]}
        />

        {/* Section 12: Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Healthcare"
          caseStudy={{
            title: "Multi-Specialty Medical Practice Growth",
            industry: "Healthcare",
            results: [
              { metric: "Patient Inquiries", value: "420%", change: "increase in 8 months" },
              { metric: "New Patients", value: "5.2x", change: "more monthly bookings" },
              { metric: "Google Rankings", value: "#1", change: "for 40+ medical terms" },
              { metric: "Practice Revenue", value: "185%", change: "year over year growth" }
            ],
            testimonial: "We went from struggling to fill our schedule to having a waitlist for new patients. The SEO investment has been transformational for our practice's growth and patient reach.",
            clientName: "Medical Practice Administrator"
          }}
        />

        {/* Section 13: Trust Signals */}
        <TrustSignals 
          industry="Healthcare"
          customItems={[
            { icon: <FaUserMd className="w-6 h-6" />, title: "Healthcare Industry Expertise", description: "Deep understanding of medical SEO, HIPAA compliance, and patient acquisition strategies" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Medical SEO Results", description: "Track record of helping healthcare providers dominate local search and attract more patients" },
            { icon: <FaHeartbeat className="w-6 h-6" />, title: "E-E-A-T Optimization", description: "Specialized expertise in demonstrating medical expertise, authoritativeness, and trustworthiness" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "HIPAA-Compliant Strategies", description: "All SEO tactics meet healthcare privacy regulations and advertising compliance" },
            { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent Patient Metrics", description: "Clear reporting showing patient inquiries, bookings, and practice growth from SEO" },
            { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Healthcare Support", description: "Direct access to your SEO specialist who understands medical practice challenges" }
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
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Healthcare Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Healthcare Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from medical practices that trusted us with their patient acquisition
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 17: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Healthcare SEO" />

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
              Get a free HIPAA-compliant SEO audit and discover exactly how I can help your healthcare practice dominate local search and grow your patient base
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
                <span className="text-lg font-semibold">HIPAA Compliant</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Proven Patient Growth</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="text-lg font-semibold">Medical SEO Experts</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
