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

import { FaBuilding, FaCheckCircle, FaClipboardList, FaDollarSign, FaEdit, FaHospital, FaLeaf, FaMap, FaMapMarkerAlt, FaSearch, FaShieldAlt, FaTrophy, FaWind } from 'react-icons/fa';
export const metadata: Metadata = {
  title: 'Mold Remediation SEO Services | Local SEO for Mold Removal Companies',
  description: 'Expert SEO services for mold remediation companies. Dominate local search for mold removal, mold testing, mold inspection, and black mold services. Proven mold remediation marketing strategies to generate more leads and grow your restoration business.',
  keywords: 'mold remediation SEO, mold removal marketing, mold testing SEO, mold inspection marketing, black mold removal SEO, mold company SEO, mold contractor marketing, mold remediation near me SEO, local SEO for mold companies, mold remediation lead generation, mold cleanup marketing, residential mold SEO, commercial mold remediation marketing, indoor air quality SEO',
  openGraph: {
    title: 'Mold Remediation SEO Services | Local SEO for Mold Removal Companies',
    description: 'Expert SEO for mold remediation companies. Dominate local search and generate more leads with proven mold removal marketing strategies.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mold Remediation SEO Services | Local SEO for Mold Removal Companies',
    description: 'Expert SEO for mold remediation companies. Generate more leads with proven mold removal marketing strategies.'
  }
};

export default function MoldRemediationSEOPage() {
  const industry = industries.find(i => i.slug === 'mold-remediation-seo');
  
  if (!industry) {
    return null;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Mold Remediation SEO', url: '/services/mold-remediation-seo' }
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
      question: 'How do you differentiate health concerns vs cosmetic mold?',
      answer: 'Health-focused content ranks better and attracts serious customers. I create content distinguishing "dangerous mold types", "toxic mold symptoms", and "when mold is a health hazard" from cosmetic mildew. This helps you rank for health-conscious searches and positions you for customers willing to invest in proper remediation, not just surface cleaning.'
    },
    {
      question: 'Should I create specific content about black mold?',
      answer: 'Absolutely! Black mold (Stachybotrys) is highly searched and feared. I optimize for "black mold removal", "toxic black mold symptoms", and "Stachybotrys remediation" because customers specifically search for this dangerous type. Content about black mold health risks, identification, and professional removal helps you capture high-anxiety customers needing immediate expert help.'
    },
    {
      question: 'How important is hidden mold detection content?',
      answer: 'Critical for comprehensive services. I create content about "hidden mold behind walls", "mold in HVAC systems", and "crawl space mold detection" because customers often find visible mold but need assessment for hidden growth. Content about inspection technology (thermal imaging, moisture meters) positions you as thorough and helps capture customers needing complete assessments.'
    },
    {
      question: 'Can you help me target post-water-damage mold searches?',
      answer: 'Yes! Most mold follows water damage. I optimize for "mold after water damage", "flood mold prevention", and "mold after leak" because customers often discover mold weeks after water incidents. Content about the 24-48 hour timeline helps you capture customers who had water damage but didn\'t address mold prevention immediately.'
    },
    {
      question: 'How do you optimize for air quality testing services?',
      answer: 'Air quality testing is valuable pre-sale service. I create pages for "mold air quality testing", "mold spore count testing", and "indoor air quality assessment" because many customers want testing before buying homes or after finding suspected mold. This service leads to remediation contracts while being profitable standalone.'
    },
    {
      question: 'Why is remediation vs removal terminology important?',
      answer: 'Industry terminology affects credibility. We use "mold remediation" (professional term) rather than "mold removal" in technical content while optimizing for both terms since customers search both ways. Content explaining why complete "removal" is impossible helps you educate customers and positions you as honest and knowledgeable about realistic outcomes.'
    },
    {
      question: 'Should I create content about prevention after treatment?',
      answer: 'Prevention content is extremely valuable. I optimize for "preventing mold after remediation", "mold prevention tips", and "humidity control" because customers want to prevent recurrence. This content helps you rank for prevention searches, positions you as caring about long-term solutions, and can lead to maintenance contracts or dehumidifier sales.'
    },
    {
      question: 'How important is insurance coverage content for mold?',
      answer: 'Critical for customer education. I create content about "does insurance cover mold", "mold insurance claims", and "insurance mold coverage limitations" because many customers are surprised that mold is often NOT covered. This content ranks for insurance questions and helps you set proper expectations, reducing friction in the sales process.'
    },
    {
      question: 'Can you help me target commercial mold clients?',
      answer: 'Commercial mold is extremely high-value. I create separate pages for "commercial mold remediation", "restaurant mold removal", "office building mold", and "healthcare facility mold" because commercial needs differ (business interruption, regulatory compliance, reputation concerns). Content about industry-specific regulations helps you capture commercial contracts.'
    },
    {
      question: 'How do you optimize for mold in specific locations?',
      answer: 'Location-specific content captures detailed searches. I create pages for "basement mold remediation", "attic mold removal", "bathroom mold cleanup", "crawl space mold", and "HVAC mold" because each location requires different techniques and customers search specifically. Separate pages help you rank for detailed searches and demonstrate specialized expertise.'
    },
    {
      question: 'Why is clearance testing content important?',
      answer: 'Clearance testing builds trust and captures quality-focused customers. I create content about "mold clearance testing", "post-remediation verification", and "mold-free certification" because customers want proof that mold is gone. This content positions you as thorough and willing to verify your work, attracting customers who value quality over low prices.'
    },
    {
      question: 'Should I optimize for DIY vs professional mold content?',
      answer: 'Educational content about DIY limitations ranks well. I create content about "when to call professional for mold", "DIY mold removal dangers", and "small mold vs major infestation" that honestly addresses when DIY is appropriate. This positions you as honest and helpful while explaining when professional services are necessary for safety and effectiveness.'
    },
    {
      question: 'How important is mold inspection separate from remediation?',
      answer: 'Inspection is valuable lead generation. I create separate pages for "mold inspection services", "mold testing vs inspection", and "pre-purchase mold inspection" because many customers need assessment before deciding on remediation. Inspection services are less threatening to price-conscious customers and lead to remediation contracts when problems are found.'
    },
    {
      question: 'Can you help me rank for health symptoms searches?',
      answer: 'Health symptom content captures early-stage customers. I create content about "mold exposure symptoms", "signs you have mold in your home", and "mold allergies" because many customers search symptoms before searching for removal services. This content helps you rank for early research queries and educate customers about the importance of professional remediation.'
    },
    {
      question: 'How do you handle seasonal mold SEO?',
      answer: 'Mold has seasonal patterns. I optimize for "spring mold from snow melt", "summer humidity mold", "fall basement mold", and "winter condensation mold" because mold causes vary by season. Seasonal content helps you maintain year-round visibility while capturing demand spikes during high-moisture periods in your climate.'
    },
    {
      question: 'Why is certification and licensing content critical for mold?',
      answer: 'Certifications are mandatory in many areas and build trust. We prominently display your IICRC certification, state licenses, and EPA compliance. Customers search for "certified mold remediation", "licensed mold removal", and "IICRC mold specialist" because mold is a health hazard requiring qualified professionals. Displaying credentials improves both trust and rankings for certification-focused searches.'
    }
  ];

  const faqs = [
    {
      question: 'How important are certifications for mold remediation SEO?',
      answer: 'Very important! Customers search for "certified mold removal", "licensed mold remediation", and "IICRC certified" because mold remediation requires expertise. We prominently display your certifications, training, and licenses on your website and Google Business Profile. This builds trust and helps you rank for these valuable search terms that customers actively seek.'
    },
    {
      question: 'Should I create separate pages for different mold locations?',
      answer: 'Yes! Create dedicated pages for different locations like "basement mold removal", "attic mold remediation", "bathroom mold", "HVAC mold", and "crawl space mold". Each location page targets specific keywords and helps you rank for customers dealing with mold in particular areas of their property.'
    },
    {
      question: 'How do you target health-conscious customers?',
      answer: 'Many customers search for "mold health risks", "black mold symptoms", and "mold exposure" because they\'re concerned about health. I create content about mold health effects, symptoms, and safety that provides value while positioning your business. This content ranks for health-conscious searches and helps you capture customers who understand the importance of professional remediation.'
    },
    {
      question: 'Can you help me rank for mold testing and inspection?',
      answer: 'Yes! Many customers need assessment before remediation. I optimize for "mold inspection", "mold testing", and "air quality testing" to capture customers needing evaluation. We also create content about when testing is needed and what to expect, which helps you rank for these valuable searches.'
    },
    {
      question: 'How important is prevention content for mold SEO?',
      answer: 'Prevention content provides value and ranks for related searches. I create content about "preventing mold growth", "mold prevention tips", and "humidity control" that helps customers while positioning your business as an expert. This content also helps you capture customers who want to prevent future mold problems.'
    },
    {
      question: 'What makes mold remediation SEO different from other restoration?',
      answer: 'Mold remediation SEO is unique because it combines certification emphasis (qualified professionals), health-focused content (mold health risks), location-specific pages (basement, attic, HVAC), and both residential/commercial markets. I create a comprehensive strategy that captures customers concerned about health and safety who need certified remediation services.'
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
                "serviceType": "Mold Remediation SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert SEO services for mold remediation companies. Dominate local search for mold removal, mold inspection, and mold testing services."
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
                  <span className="text-3xl">🦠</span>
                  <span className="text-sm font-bold">Premium Mold Remediation SEO</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                  <span className="text-white">Mold Remediation</span><br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">SEO Services</span>
                </h1>
                <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                  When homeowners discover mold, they search urgently for <strong className="text-cyan-300">"mold removal near me"</strong>. 
                  My SEO strategies ensure your remediation business appears <strong className="text-white">first</strong>, capturing customers who need certified, safe mold removal services.
                </p>
                <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">98%</div><div className="text-sm text-slate-400">Client Satisfaction</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">1,732+</div><div className="text-sm text-slate-400">First Page Rankings</div></div>
                  <div className="text-center"><div className="text-4xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">5x</div><div className="text-sm text-slate-400">Average ROI</div></div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <HeroContactForm 
                  title="Get Your Free Mold Remediation SEO Audit"
                  subtitle="Discover how to capture urgent mold removal searches"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework faqs={seoFrameworkFaqs} industry="Mold Remediation" />

        <WhyChooseMe industry={industry.name} />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mold Remediation SEO Services
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive SEO solutions designed specifically for mold remediation businesses
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Certified Mold Remediation", description: "Highlight certifications and training to rank for 'certified mold removal', 'licensed mold remediation', and 'IICRC certified' searches", icon: <FaCheckCircle className="w-6 h-6" /> },
                { title: "Health & Safety Content", description: "Create content about 'mold health risks', 'black mold symptoms', and 'mold exposure' to rank for health-conscious searches", icon: <FaHospital className="w-6 h-6" /> },
                { title: "Location-Specific Mold", description: "Create pages for 'basement mold removal', 'attic mold remediation', 'bathroom mold', and 'HVAC mold' to rank for location-specific searches", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
                { title: "Mold Testing & Inspection", description: "Target 'mold inspection', 'mold testing', and 'air quality testing' to capture customers needing assessment before remediation", icon: <FaSearch className="w-6 h-6" /> },
                { title: "Prevention Content", description: "Create content about 'preventing mold growth', 'mold prevention tips', and 'humidity control' to provide value and rank for related searches", icon: <FaShieldAlt className="w-6 h-6" /> },
                { title: "Commercial Mold Remediation", description: "Optimize for 'commercial mold removal', 'office mold remediation', and 'business mold cleanup' to capture commercial clients", icon: <FaBuilding className="w-6 h-6" /> }
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
          industry="Mold Remediation" 
          stats={[
            { value: "91%", label: "of homeowners research mold removal services online", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "72%", label: "of mold searches are driven by health concerns", icon: <FaHospital className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "88%", label: "check reviews before hiring mold remediation experts", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { value: "7.2x", label: "higher conversion rate from organic vs paid advertising", icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        {/* Mold Remediation SEO Process */}
        <ProcessTimeline 
          industry="Mold Remediation" 
          steps={[
            { step: 1, title: "Mold Keyword Research", description: "Target mold testing, removal, and remediation search terms", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Local SEO Optimization", description: "Google Business Profile setup for mold services", icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Service Page Creation", description: "Pages for black mold, testing, removal, and prevention", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Educational Content", description: "Mold health risks, prevention tips, and remediation guides", icon: "📚", duration: "Weeks 3-6" },
            { step: 5, title: "Review Generation", description: "Build trust with verified mold remediation reviews", icon: "⭐", duration: "Ongoing" },
            { step: 6, title: "Authority Building", description: "Industry certifications and expert content creation", icon: <FaTrophy className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Mold Remediation" 
          pillars={[
            { title: "Mold Testing", description: "Mold inspection, air quality testing, mold species identification, and assessment services", topics: ["Mold inspection", "Air quality testing", "Species identification", "Assessment reports"], icon: "🔬" },
            { title: "Mold Removal", description: "Black mold removal, attic mold, basement mold, bathroom mold, and containment procedures", topics: ["Black mold removal", "Attic mold", "Basement mold", "Containment"], icon: "🧹" },
            { title: "Health & Safety", description: "Mold health risks, respiratory concerns, allergy symptoms, and safe remediation practices", topics: ["Health risks", "Respiratory issues", "Allergy concerns", "Safe practices"], icon: <FaHospital className="w-6 h-6" /> },
            { title: "Prevention & Maintenance", description: "Moisture control, ventilation improvements, mold prevention tips, and humidity management", topics: ["Moisture control", "Ventilation", "Prevention tips", "Humidity management"], icon: <FaShieldAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Mold Remediation"
          signals={[
            { title: "Certification Display", description: "IICRC and mold remediation certifications prominently shown", importance: "Critical", icon: <FaTrophy className="w-6 h-6" /> },
            { title: "Google Business Profile", description: "Complete GBP with mold service photos and reviews", importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
            { title: "Customer Reviews", description: "Reviews mentioning successful mold removal projects", importance: "High", icon: "⭐" },
            { title: "Educational Content", description: "Mold health and prevention information for visitors", importance: "High", icon: "📚" },
            { title: "Service Area Pages", description: "Location-specific mold remediation landing pages", importance: "High", icon: <FaMap className="w-6 h-6" /> },
            { title: "Industry Citations", description: "Mold remediation directory and industry listings", importance: "Medium", icon: <FaClipboardList className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Mold Remediation"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Top 3 for 'mold removal near me'", withoutSEO: "Buried in search results" },
            { feature: "Lead Generation", withSEO: "Consistent organic inquiries", withoutSEO: "Sporadic referrals only" },
            { feature: "Cost Per Lead", withSEO: "$30-60 per qualified lead", withoutSEO: "$150+ per lead via ads" },
            { feature: "Trust & Authority", withSEO: "Recognized mold expert", withoutSEO: "Unknown company" },
            { feature: "Health-Focused Clients", withSEO: "Attract concerned homeowners", withoutSEO: "Miss health-driven searches" },
            { feature: "Long-term Growth", withSEO: "Compound organic growth", withoutSEO: "Stagnant business" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Mold Remediation"
          caseStudy={{
            title: "Full-Service Mold Remediation Company",
            industry: "Mold Remediation",
            results: [
              { metric: "Organic Leads", value: "450%", change: "increase in inquiries" },
              { metric: "Website Traffic", value: "11x", change: "more monthly visitors" },
              { metric: "Google Rankings", value: "#1", change: "for 48+ keywords" },
              { metric: "Revenue Growth", value: "320%", change: "year over year" }
            ],
            testimonial: "We became the go-to mold expert in our area. Homeowners now find us first when they're worried about mold in their homes.",
            clientName: "Mold Remediation Business Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Mold Remediation"
          customItems={[
            { icon: <FaTrophy className="w-6 h-6" />, title: "IICRC Mold Certified", description: "Industry-recognized mold remediation certification" },
            { icon: <FaCheckCircle className="w-6 h-6" />, title: "Licensed Contractors", description: "Fully licensed mold remediation professionals" },
            { icon: <FaLeaf className="w-6 h-6" />, title: "EPA Guidelines Compliant", description: "Following EPA mold remediation guidelines" },
            { icon: <FaClipboardList className="w-6 h-6" />, title: "Insurance Claim Support", description: "Assistance with mold damage insurance claims" },
            { icon: <FaWind className="w-6 h-6" />, title: "Air Quality Testing", description: "Professional indoor air quality assessment" },
            { icon: <FaShieldAlt className="w-6 h-6" />, title: "Safe Containment Procedures", description: "Proper containment to prevent spread" }
          ]}
        />

        <TopSEOServices />


        <IndustriesGrid />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What Our Mold Remediation Clients Say
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
              Ready to Dominate Mold Remediation Search Results?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free SEO audit and discover How I can help your mold remediation business grow
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
