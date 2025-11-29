import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";  import HeroContactForm from "@/components/HeroContactForm";
import SEOFramework from "@/components/industries/SEOFramework";
import FAQSection from "@/components/seo/FAQSection";
import CountriesGrid from "@/components/industries/CountriesGrid";
import WhyChooseMe from "@/components/industries/WhyChooseMe";
import HireLocalSEO from "@/components/industries/HireLocalSEO";
import IndustryStats from "@/components/industries/IndustryStats";
import ProcessTimeline from "@/components/industries/ProcessTimeline";
import TopicClusterSection from "@/components/industries/TopicClusterSection";
import LocalSEOSignals from "@/components/industries/LocalSEOSignals";
import CompetitorComparison from "@/components/industries/CompetitorComparison";
import CaseStudyHighlight from "@/components/industries/CaseStudyHighlight";
import TrustSignals from "@/components/industries/TrustSignals";
import TopSEOServices from '@/components/services/TopSEOServices'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import { FaGlobe, FaShareAlt, FaUsers, FaNewspaper, FaHandshake, FaStar, FaChartLine, FaRocket, FaSearch, FaCheckCircle, FaBullseye, FaAward, FaNetworkWired, FaComments, FaBuilding } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Off-Page SEO Services | Link Building, Brand Building & Reputation Management Expert",
  description: "Expert off-page SEO services including link building, brand building, online reputation management, digital PR, and external optimization to boost search rankings. Professional backlink acquisition and authority building strategies.",
  keywords: "off-page SEO, off-page SEO services, link building, backlinks, brand building, online reputation, social signals, brand mentions, citation building, digital PR, guest posting, outreach SEO, off-page SEO techniques, off-page optimization, authority building",
};

const seoFrameworkFaqs = [
  { question: "What is off-page SEO?", answer: "Off-page SEO refers to optimization activities done outside your website—backlinks, brand mentions, social signals, citations, and online reputation—that influence search rankings." },
  { question: "What's the difference between off-page and on-page SEO?", answer: "On-page SEO optimizes elements on your website. Off-page SEO focuses on external factors like backlinks, brand mentions, social signals, and online reputation that signal authority to Google." },
  { question: "How important are backlinks for off-page SEO?", answer: "Backlinks are a major off-page ranking factor. High-quality backlinks from authoritative sites signal trust and authority, significantly improving search rankings." },
  { question: "What are social signals and do they affect SEO?", answer: "Social signals include shares, likes, comments, and engagement on social media. While not direct ranking factors, they can drive traffic, increase brand awareness, and lead to backlinks." },
  { question: "How does brand building help SEO?", answer: "Strong brands earn more natural backlinks, brand searches, and mentions. Brand building improves domain authority, trust signals, and overall search visibility." },
  { question: "What is online reputation management?", answer: "ORM involves monitoring and managing how your brand appears online—reviews, mentions, social media, and search results. Positive reputation improves trust and can impact rankings." },
  { question: "Do brand mentions help SEO even without links?", answer: "Yes—brand mentions (even without links) can improve brand awareness, drive direct traffic, and signal authority. Google recognizes brand mentions as trust signals." },
  { question: "How do you build brand authority?", answer: "I build brand authority through quality content, thought leadership, PR campaigns, industry partnerships, speaking engagements, and earning mentions from authoritative sources." },
  { question: "What is citation building?", answer: "Citation building involves getting your business listed on directories, industry sites, and local platforms. Consistent citations improve local SEO and brand visibility." },
  { question: "Can social media impact SEO?", answer: "While social media isn't a direct ranking factor, it drives traffic, increases brand awareness, and can lead to backlinks. Active social presence supports overall SEO strategy." },
  { question: "How long does off-page SEO take to show results?", answer: "Initial improvements can appear in 1-2 months. Significant impact typically takes 3-6 months as you build authority, earn backlinks, and establish brand presence." },
  { question: "What's included in off-page SEO services?", answer: "Link building, brand building, online reputation management, social media optimization, citation building, PR campaigns, and monitoring brand mentions across the web." },
  { question: "How do you measure off-page SEO success?", answer: "We track domain authority, backlink profile, brand mentions, social signals, online reputation scores, and most importantly—organic traffic and ranking improvements." },
  { question: "Can off-page SEO work for new businesses?", answer: "Yes, but it takes time. I focus on building brand awareness, earning initial backlinks, establishing online presence, and gradually building authority over 6-12 months." }
];

const offPageServices = [
  { icon: <FaGlobe />, title: "Brand Building", description: "Build brand authority and awareness through strategic marketing and PR campaigns." },
  { icon: <FaShareAlt />, title: "Social Signals", description: "Optimize social media presence and engagement to support SEO efforts." },
  { icon: <FaUsers />, title: "Online Reputation Management", description: "Monitor and manage your brand's online reputation and reviews." },
  { icon: <FaNewspaper />, title: "PR & Media Relations", description: "Earn media coverage, press mentions, and authoritative backlinks." },
  { icon: <FaHandshake />, title: "Partnership Building", description: "Establish strategic partnerships that lead to backlinks and brand mentions." },
  { icon: <FaBuilding />, title: "Citation Building", description: "Build consistent business citations across directories and industry sites." }
];

const faqs = [
  { question: "How much does off-page SEO cost?", answer: "Off-page SEO ranges from $2,000-$8,000/month depending on scope—link building, PR, reputation management, and brand building activities. Most clients invest $3,500-$5,500/month." },
  { question: "How long does off-page SEO take?", answer: "Initial brand building and link acquisition can show results in 2-3 months. Significant authority building and reputation improvements typically take 6-12 months." },
  { question: "What's the difference between off-page SEO and link building?", answer: "Link building is one component of off-page SEO. Off-page SEO also includes brand building, reputation management, social signals, and overall external optimization." },
  { question: "Do you handle negative reviews?", answer: "Yes—we monitor reviews, respond professionally, implement review generation strategies, and when appropriate, work to remove fake or violating reviews." },
  { question: "Can off-page SEO help with local SEO?", answer: "Absolutely. Local citations, local backlinks, and local brand mentions are crucial for local SEO success and Google Business Profile rankings." },
  { question: "How do you measure off-page SEO success?", answer: "We track domain authority, backlink profile growth, brand mentions, social engagement, reputation scores, and most importantly—organic traffic and ranking improvements." }
];

export default function OffPageSEOPage() {
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
                "@id": "https://adeelahmad.com/services/off-page-seo#service",
                "serviceType": "Off-Page SEO Services",
                "name": "Off-Page SEO Services",
                "description": "Expert off-page SEO services including link building, brand building, online reputation management, and digital PR to boost search rankings and authority.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Off-Page SEO Specialist"
                },
                "areaServed": "Global",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "priceRange": "$$-$$$"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "@id": "https://adeelahmad.com/services/off-page-seo#webpage",
                "url": "https://adeelahmad.com/services/off-page-seo",
                "name": "Off-Page SEO Services | Link Building, Brand Building & Reputation Management",
                "description": "Expert off-page SEO services including link building, brand building, and reputation management.",
                "isPartOf": {
                  "@id": "https://adeelahmad.com/#website"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://adeelahmad.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://adeelahmad.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Off-Page SEO",
                    "item": "https://adeelahmad.com/services/off-page-seo"
                  }
                ]
              }
            ])
          }}
        />
        
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(244, 63, 94, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(244, 63, 94, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose-500/20 border border-rose-400/30 backdrop-blur-xl mb-8">
                  <FaGlobe className="text-3xl text-rose-400" />
                  <span className="font-semibold">Off-Page SEO Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Off-Page SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Build brand authority, manage online reputation, and earn external signals that boost your search rankings and establish industry leadership.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/50 transition-all">
                    Get Free Brand Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-rose-400 mb-2">420%</div>
                    <div className="text-sm text-slate-300">Brand Visibility</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-pink-400 mb-2">280+</div>
                    <div className="text-sm text-slate-300">Brand Mentions</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">95%</div>
                    <div className="text-sm text-slate-300">Reputation Score</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">3.5x</div>
                    <div className="text-sm text-slate-300">Authority Growth</div>
                  </div>
                </div>
              </div>

              {/* Right Content - 2 columns with HeroContactForm */}
              <div className="lg:col-span-2">
                <HeroContactForm 
                  title="Get Your Free SEO Audit"
                  subtitle="Discover what's holding your website back from page 1 rankings"
                  buttonText="Get Free Consultation"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry="Off-Page SEO" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="off-page-seo" industryIcon={<FaGlobe />} />
        <WhyChooseMe industry="Off-Page SEO" />
        <HireLocalSEO industry="Off-Page SEO" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Off-Page SEO Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Build brand authority, manage reputation, and earn external signals that improve search rankings.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offPageServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-rose-500">
                  <div className="text-5xl mb-6 text-rose-600 dark:text-rose-400 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IndustryStats 
          industry="Off-Page SEO"
          stats={[
            { value: "420%", label: "Average brand visibility increase", icon: <FaGlobe />, color: "from-rose-500 to-pink-500" },
            { value: "280+", label: "Brand mentions earned per client", icon: <FaComments />, color: "from-blue-500 to-cyan-500" },
            { value: "95%", label: "Average online reputation score improvement", icon: <FaStar />, color: "from-green-500 to-emerald-500" },
            { value: "3.5x", label: "Domain authority growth on average", icon: <FaChartLine />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Off-Page SEO"
          steps={[
            { step: 1, title: "Brand Audit & Analysis", description: "Analyze current brand presence, reputation, mentions, backlinks, and identify opportunities.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Brand Building Strategy", description: "Develop comprehensive brand building plan including PR, partnerships, and thought leadership.", icon: <FaGlobe />, duration: "Week 1-2" },
            { step: 3, title: "Reputation Management", description: "Monitor reviews, manage online reputation, respond to feedback, and build positive presence.", icon: <FaStar />, duration: "Week 2-4" },
            { step: 4, title: "Link & Mention Acquisition", description: "Earn backlinks and brand mentions through PR, partnerships, content, and outreach.", icon: <FaHandshake />, duration: "Week 3-6" },
            { step: 5, title: "Social Signal Optimization", description: "Optimize social media presence, increase engagement, and build social authority.", icon: <FaShareAlt />, duration: "Week 4-8" },
            { step: 6, title: "Monitor & Scale", description: "Track brand mentions, reputation, authority growth, and scale successful strategies.", icon: <FaChartLine />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Off-Page SEO"
          pillars={[
            { title: "Brand Building", description: "Establish brand authority", topics: ["PR campaigns", "Thought leadership", "Industry partnerships", "Media relations"], icon: <FaGlobe /> },
            { title: "Reputation Management", description: "Manage online reputation", topics: ["Review monitoring", "Reputation building", "Crisis management", "Brand protection"], icon: <FaStar /> },
            { title: "Social Signals", description: "Social media optimization", topics: ["Social engagement", "Content sharing", "Community building", "Social authority"], icon: <FaShareAlt /> },
            { title: "External Signals", description: "Backlinks and mentions", topics: ["Link building", "Brand mentions", "Citation building", "Partnership links"], icon: <FaNetworkWired /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Off-Page SEO"
          signals={[
            { title: "Backlinks", description: "High-quality backlinks from authoritative sites", importance: "Critical", icon: <FaNetworkWired /> },
            { title: "Brand Mentions", description: "Earned mentions across web and media", importance: "High", icon: <FaComments /> },
            { title: "Online Reputation", description: "Positive reviews and reputation scores", importance: "High", icon: <FaStar /> },
            { title: "Social Signals", description: "Social engagement and sharing", importance: "Medium", icon: <FaShareAlt /> },
            { title: "Domain Authority", description: "Growing domain authority over time", importance: "Critical", icon: <FaAward /> },
            { title: "Brand Searches", description: "Increasing branded search queries", importance: "High", icon: <FaSearch /> }
          ]}
        />

        <CompetitorComparison 
          industry="Off-Page SEO"
          comparisons={[
            { feature: "Brand Authority", withSEO: "Established industry thought leader", withoutSEO: "No clear brand presence or authority" },
            { feature: "Online Reputation", withSEO: "Positive reviews and reputation", withoutSEO: "Poor or unmanaged reputation" },
            { feature: "Backlinks", withSEO: "Quality backlinks from authoritative sites", withoutSEO: "Few or low-quality backlinks" },
            { feature: "Brand Mentions", withSEO: "Earned mentions across media and web", withoutSEO: "No brand visibility or mentions" },
            { feature: "Social Presence", withSEO: "Active, engaged social media presence", withoutSEO: "Inactive or no social presence" },
            { feature: "Domain Authority", withSEO: "Growing authority and trust signals", withoutSEO: "Stagnant or low domain authority" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Off-Page SEO"
          caseStudy={{
            title: "B2B Company: 420% Brand Visibility Growth",
            industry: "Off-Page SEO Campaign",
            results: [
              { metric: "Brand Visibility", value: "+420%", change: "in 12 months" },
              { metric: "Brand Mentions", value: "+280", change: "earned mentions" },
              { metric: "Domain Authority", value: "+3.5x", change: "authority growth" },
              { metric: "Organic Traffic", value: "+350%", change: "from brand building" }
            ],
            testimonial: "The off-page SEO strategy transformed our brand presence. We went from being unknown to a recognized industry leader. The reputation management and brand building efforts have been exceptional.",
            clientName: "Marketing Director"
          }}
        />

        <TrustSignals 
          industry="Off-Page SEO"
          customItems={[
            { icon: <FaGlobe />, title: "Brand Building Experts", description: "Proven strategies for brand authority" },
            { icon: <FaStar />, title: "Reputation Management", description: "95% average reputation score improvement" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 420% brand visibility increase" },
            { icon: <FaHandshake />, title: "Strategic Partnerships", description: "Building relationships that drive results" },
            { icon: <FaNewspaper />, title: "PR & Media Relations", description: "Earning authoritative media coverage" },
            { icon: <FaCheckCircle />, title: "Comprehensive Approach", description: "Full-spectrum off-page optimization" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50/30 to-pink-50/20 dark:from-slate-950 dark:via-rose-950/30 dark:to-pink-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Off-Page SEO Questions" />

        <section className="py-24 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Brand Authority?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Get a free brand audit and discover how off-page SEO can transform your online presence and search rankings.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-rose-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Brand Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



