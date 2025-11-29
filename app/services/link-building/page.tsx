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
import { FaLink, FaGlobe, FaHandshake, FaNewspaper, FaGraduationCap, FaChartLine, FaRocket, FaSearch, FaCheckCircle, FaUsers, FaStar, FaBullseye, FaAward, FaTrophy, FaNetworkWired } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Link Building Services | White-Hat Backlink Acquisition & Domain Authority Expert",
  description: "Expert link building services to acquire high-quality, white-hat backlinks that boost domain authority, improve rankings, and drive organic traffic. Professional outreach, guest posting, and digital PR strategies.",
  keywords: "link building, link building services, backlinks, white hat SEO, link acquisition, domain authority, off-page SEO, guest posting, broken link building, backlink services, SEO backlinks, link building agency, quality backlinks, outreach SEO, digital PR, link building strategy",
};

const seoFrameworkFaqs = [
  { question: "What is link building and why is it important?", answer: "Link building is acquiring backlinks from other websites to your site. Google uses backlinks as a major ranking factor—high-quality links signal authority and trust, improving search rankings." },
  { question: "What makes a good backlink?", answer: "Good backlinks come from authoritative, relevant websites with high domain authority, are from editorial content (not paid), have relevant anchor text, and are from sites in your industry or related niches." },
  { question: "How long does link building take to show results?", answer: "Initial ranking improvements can appear in 2-4 weeks. Significant impact typically takes 3-6 months as Google recognizes your increased authority and trust signals." },
  { question: "What's the difference between white-hat and black-hat link building?", answer: "White-hat link building uses legitimate methods like creating valuable content, guest posting, partnerships, and earning natural links. Black-hat uses manipulative tactics like link farms, PBNs, and paid links—which can result in penalties." },
  { question: "How many links do I need?", answer: "Quality matters more than quantity. 10-20 high-quality links can outperform 1,000 low-quality links. I focus on earning links from authoritative, relevant sources." },
  { question: "What link building strategies do you use?", answer: "We use guest posting, broken link building, resource page outreach, HARO (Help a Reporter Out), digital PR, content partnerships, and creating linkable assets that naturally attract backlinks." },
  { question: "Can you guarantee specific backlinks?", answer: "We can't guarantee specific links, but we guarantee our outreach efforts and link acquisition process. I focus on earning links from relevant, high-quality sources." },
  { question: "How do you find link opportunities?", answer: "We use tools like Ahrefs, SEMrush, and manual research to find broken links, resource pages, guest post opportunities, and sites that link to competitors but not you." },
  { question: "What is a linkable asset?", answer: "Linkable assets are high-value resources like research studies, tools, calculators, comprehensive guides, or unique data that naturally attract backlinks from other sites." },
  { question: "Do you build links to all pages?", answer: "We prioritize important pages—homepage, key service pages, pillar content, and high-converting pages. We distribute links strategically to maximize SEO impact." },
  { question: "How do you measure link building success?", answer: "We track domain authority, referring domains, link quality metrics, keyword rankings, organic traffic, and most importantly—ranking improvements for target keywords." },
  { question: "What industries do you build links for?", answer: "I build links for all industries—B2B, B2C, healthcare, legal, finance, technology, e-commerce, and more. Each industry requires different link building strategies." },
  { question: "How much does link building cost?", answer: "Link building ranges from $1,500-$10,000/month depending on link quality, volume, and industry competitiveness. Most clients invest $2,500-$5,000/month." },
  { question: "Can you recover from a Google penalty?", answer: "Yes—we conduct penalty audits, identify toxic links, disavow harmful backlinks, and rebuild with quality links. Recovery typically takes 3-6 months." }
];

const linkBuildingServices = [
  { icon: <FaHandshake />, title: "Guest Posting", description: "High-quality guest posts on authoritative sites in your industry." },
  { icon: <FaLink />, title: "Broken Link Building", description: "Find and replace broken links with links to your content." },
  { icon: <FaNewspaper />, title: "Digital PR & Outreach", description: "Earn media mentions and backlinks through PR campaigns." },
  { icon: <FaGraduationCap />, title: "Resource Page Outreach", description: "Get listed on high-authority resource and directory pages." },
  { icon: <FaNetworkWired />, title: "Linkable Asset Creation", description: "Create valuable resources that naturally attract backlinks." },
  { icon: <FaGlobe />, title: "HARO & Journalist Outreach", description: "Connect with journalists and earn authoritative media links." }
];

const faqs = [
  { question: "How much does link building cost?", answer: "Link building services range from $1,500-$10,000/month depending on link quality, volume, and industry. Most clients invest $2,500-$5,000/month for consistent, high-quality link acquisition." },
  { question: "How many links will I get per month?", answer: "I focus on quality over quantity. Typically 5-15 high-quality links per month, depending on your industry and budget. Quality links from authoritative sites are more valuable than many low-quality links." },
  { question: "Can you guarantee specific rankings?", answer: "We can't guarantee rankings, but we guarantee our link building process and quality. High-quality backlinks are a proven ranking factor, and we consistently improve client rankings." },
  { question: "What if I have a Google penalty?", answer: "I can help recover from penalties by auditing your backlink profile, disavowing toxic links, and rebuilding with quality links. Recovery typically takes 3-6 months." },
  { question: "Do you use PBNs or link farms?", answer: "No—we only use white-hat, legitimate link building methods. We never use private blog networks, link farms, or any tactics that violate Google's guidelines." },
  { question: "How do you ensure link quality?", answer: "We vet every link opportunity for domain authority, relevance, traffic, editorial quality, and spam score. We only pursue links from legitimate, authoritative sources." }
];

export default function LinkBuildingPage() {
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
                "@id": "https://adeelahmad.com/services/link-building#service",
                "serviceType": "Link Building Services",
                "name": "Link Building Services",
                "description": "Expert link building services to acquire high-quality, white-hat backlinks that boost domain authority, improve rankings, and drive organic traffic through professional outreach and digital PR.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Link Building Specialist"
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
                "@id": "https://adeelahmad.com/services/link-building#webpage",
                "url": "https://adeelahmad.com/services/link-building",
                "name": "Link Building Services | White-Hat Backlink Acquisition & Domain Authority",
                "description": "Expert link building services to acquire high-quality, white-hat backlinks that boost domain authority.",
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
                    "name": "Link Building",
                    "item": "https://adeelahmad.com/services/link-building"
                  }
                ]
              }
            ])
          }}
        />
        
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-xl mb-8">
                  <FaLink className="text-3xl text-emerald-400" />
                  <span className="font-semibold">Link Building Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Link Building Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Acquire high-quality, white-hat backlinks that boost domain authority, improve rankings, and drive sustainable organic traffic growth.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
                    Get Free Link Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-emerald-400 mb-2">450+</div>
                    <div className="text-sm text-slate-300">Links Built</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-teal-400 mb-2">85%</div>
                    <div className="text-sm text-slate-300">DA Improvement</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">320%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">100%</div>
                    <div className="text-sm text-slate-300">White-Hat Only</div>
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

        <SEOFramework industry="Link Building" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="link-building" industryIcon={<FaLink />} />
        <WhyChooseMe industry="Link Building" />
        <HireLocalSEO industry="Link Building" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Link Building Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                White-hat link building strategies to earn high-quality backlinks from authoritative, relevant sources.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {linkBuildingServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500">
                  <div className="text-5xl mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
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
          industry="Link Building"
          stats={[
            { value: "450+", label: "High-quality backlinks built for clients", icon: <FaLink />, color: "from-emerald-500 to-teal-500" },
            { value: "85%", label: "Average domain authority improvement", icon: <FaChartLine />, color: "from-blue-500 to-cyan-500" },
            { value: "320%", label: "Average organic traffic increase", icon: <FaRocket />, color: "from-purple-500 to-pink-500" },
            { value: "100%", label: "White-hat link building methods only", icon: <FaCheckCircle />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Link Building"
          steps={[
            { step: 1, title: "Link Profile Audit", description: "Analyze existing backlinks, identify toxic links, assess domain authority, and find link opportunities.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Link Opportunity Research", description: "Find guest post opportunities, broken links, resource pages, and sites linking to competitors.", icon: <FaGlobe />, duration: "Week 1-2" },
            { step: 3, title: "Outreach & Relationship Building", description: "Contact site owners, build relationships, pitch valuable content, and negotiate link placements.", icon: <FaHandshake />, duration: "Week 2-4" },
            { step: 4, title: "Content Creation & Placement", description: "Create high-quality content for guest posts, fix broken links, and secure link placements.", icon: <FaNewspaper />, duration: "Week 3-5" },
            { step: 5, title: "Link Quality Verification", description: "Verify link placement, check for follow/nofollow, ensure proper anchor text, and monitor link health.", icon: <FaCheckCircle />, duration: "Week 4-6" },
            { step: 6, title: "Monitor & Scale", description: "Track link performance, measure domain authority growth, identify new opportunities, and scale successful strategies.", icon: <FaChartLine />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Link Building"
          pillars={[
            { title: "Guest Posting", description: "High-quality guest content", topics: ["Outreach", "Content creation", "Publishing", "Relationship building"], icon: <FaHandshake /> },
            { title: "Broken Link Building", description: "Replace broken links", topics: ["Link research", "Outreach", "Content creation", "Link placement"], icon: <FaLink /> },
            { title: "Digital PR", description: "Media mentions and coverage", topics: ["Press releases", "Journalist outreach", "HARO", "Media relations"], icon: <FaNewspaper /> },
            { title: "Linkable Assets", description: "Resources that attract links", topics: ["Research studies", "Tools & calculators", "Comprehensive guides", "Infographics"], icon: <FaNetworkWired /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Link Building"
          signals={[
            { title: "Domain Authority", description: "High DA backlinks from authoritative sites", importance: "Critical", icon: <FaTrophy /> },
            { title: "Relevance", description: "Links from sites in your industry or related niches", importance: "Critical", icon: <FaBullseye /> },
            { title: "Link Quality", description: "Editorial, natural links (not paid or spam)", importance: "Critical", icon: <FaCheckCircle /> },
            { title: "Anchor Text Diversity", description: "Natural mix of branded, keyword, and generic anchors", importance: "High", icon: <FaLink /> },
            { title: "Link Velocity", description: "Steady, natural link acquisition rate", importance: "High", icon: <FaChartLine /> },
            { title: "Link Context", description: "Links within relevant, high-quality content", importance: "Medium", icon: <FaNewspaper /> }
          ]}
        />

        <CompetitorComparison 
          industry="Link Building"
          comparisons={[
            { feature: "Link Quality", withSEO: "High-authority, relevant backlinks", withoutSEO: "Low-quality or no backlinks" },
            { feature: "Domain Authority", withSEO: "Steady DA growth over time", withoutSEO: "Stagnant or declining authority" },
            { feature: "Search Rankings", withSEO: "Improved rankings from authority", withoutSEO: "Difficulty ranking without links" },
            { feature: "Link Strategy", withSEO: "Strategic, white-hat link building", withoutSEO: "No link building or risky tactics" },
            { feature: "Organic Traffic", withSEO: "Growing traffic from authority", withoutSEO: "Limited organic visibility" },
            { feature: "Brand Mentions", withSEO: "Earned mentions and citations", withoutSEO: "No brand visibility or mentions" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Link Building"
          caseStudy={{
            title: "B2B SaaS: 85% Domain Authority Increase",
            industry: "Link Building Campaign",
            results: [
              { metric: "Domain Authority", value: "+85%", change: "in 12 months" },
              { metric: "Backlinks", value: "+320", change: "high-quality links" },
              { metric: "Organic Traffic", value: "+320%", change: "from link building" },
              { metric: "Keyword Rankings", value: "+180", change: "Page 1 rankings" }
            ],
            testimonial: "The link building campaign transformed our authority. We went from struggling to rank to dominating our industry keywords. The quality and strategic approach is exceptional.",
            clientName: "Marketing Director"
          }}
        />

        <TrustSignals 
          industry="Link Building"
          customItems={[
            { icon: <FaLink />, title: "450+ Links Built", description: "High-quality backlinks for clients" },
            { icon: <FaTrophy />, title: "White-Hat Only", description: "100% legitimate link building methods" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 85% domain authority increase" },
            { icon: <FaStar />, title: "Quality Focus", description: "Quality over quantity approach" },
            { icon: <FaHandshake />, title: "Relationship Building", description: "Long-term partnerships with publishers" },
            { icon: <FaCheckCircle />, title: "Transparent Reporting", description: "Full visibility into link acquisition" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 dark:from-slate-950 dark:via-emerald-950/30 dark:to-teal-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Link Building Questions" />

        <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build High-Quality Backlinks?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get a free link profile audit and discover how strategic link building can boost your domain authority and rankings.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-emerald-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Link Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



