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
import { FaFileAlt, FaPenNib, FaSearch, FaChartLine, FaRocket, FaCheckCircle, FaUsers, FaTags, FaBook, FaLightbulb, FaGlobe, FaBullseye, FaStar, FaCode, FaLink } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Content SEO Services | SEO Content Writing, Strategy & Topic Cluster Expert",
  description: "Expert content SEO services to create high-ranking, search-optimized content that drives organic traffic and establishes your authority. Professional SEO copywriting, topic cluster strategy, and semantic SEO optimization for sustainable rankings.",
  keywords: "content SEO, content SEO services, SEO content writing, content strategy, blog SEO, content marketing, semantic SEO, topic clusters, SEO copywriting, content optimization, SEO article writing, pillar content, content marketing SEO, E-A-T content, topical authority",
};

const seoFrameworkFaqs = [
  { question: "What is content SEO?", answer: "Content SEO combines high-quality content creation with search engine optimization—creating valuable, keyword-optimized content that ranks well and attracts organic traffic." },
  { question: "How is content SEO different from regular content writing?", answer: "Content SEO focuses on search intent, keyword research, semantic optimization, internal linking, and creating content that both users and search engines love—not just engaging copy." },
  { question: "How long does it take for content SEO to show results?", answer: "New content typically starts ranking in 2-4 weeks. Significant traffic growth usually takes 3-6 months as content gains authority and backlinks." },
  { question: "What types of content do you create?", answer: "I create blog posts, guides, pillar pages, case studies, how-to articles, product descriptions, landing pages, and any content that drives organic search traffic." },
  { question: "Do you write content for all industries?", answer: "Yes—I have writers experienced in B2B, B2C, healthcare, legal, finance, technology, e-commerce, and dozens of other industries. We match writers to your niche." },
  { question: "How do you ensure content ranks well?", answer: "We conduct keyword research, analyze search intent, optimize for semantic SEO, create comprehensive content, implement proper on-page SEO, and build internal links strategically." },
  { question: "What is semantic SEO and why does it matter?", answer: "Semantic SEO optimizes for topic clusters and related concepts, not just keywords. Google understands context and rewards comprehensive, authoritative content on topics." },
  { question: "How often should I publish new content?", answer: "Consistency matters more than frequency. I recommend 2-4 high-quality pieces per month for most businesses, focusing on depth and value over volume." },
  { question: "Can you optimize my existing content?", answer: "Absolutely. We audit existing content, identify optimization opportunities, update outdated information, improve keyword targeting, and enhance on-page SEO elements." },
  { question: "What is a content cluster strategy?", answer: "Content clusters organize content around pillar topics and supporting articles. This structure helps Google understand your expertise and improves rankings across related keywords." },
  { question: "How do you measure content SEO success?", answer: "We track organic traffic, keyword rankings, time on page, bounce rate, backlinks earned, social shares, and conversions from content—focusing on metrics that matter." },
  { question: "Do you handle content distribution?", answer: "While I focus on SEO-optimized creation, I can provide distribution strategies including social media promotion, email marketing, and outreach to earn backlinks." },
  { question: "What's the difference between content SEO and link building?", answer: "Content SEO creates valuable content that naturally attracts links. Link building actively seeks backlinks. Both work together—great content makes link building easier." },
  { question: "Can content SEO work for competitive industries?", answer: "Yes, but it requires more strategic approach—long-tail keywords, unique angles, comprehensive coverage, and building topical authority over time." }
];

const contentServices = [
  { icon: <FaPenNib />, title: "SEO Content Writing", description: "Keyword-optimized, engaging content that ranks and converts." },
  { icon: <FaBook />, title: "Content Strategy", description: "Data-driven content plans aligned with business goals and search opportunities." },
  { icon: <FaTags />, title: "Topic Cluster Development", description: "Pillar pages and supporting content that establishes topical authority." },
  { icon: <FaSearch />, title: "Keyword Research & Mapping", description: "Identify high-value keywords and map them to content pieces." },
  { icon: <FaCode />, title: "On-Page Content Optimization", description: "Optimize existing content for better rankings and user experience." },
  { icon: <FaLink />, title: "Internal Linking Strategy", description: "Strategic internal linking to distribute authority and improve rankings." }
];

const faqs = [
  { question: "How much does content SEO cost?", answer: "Content SEO ranges from $2,000-$8,000/month depending on content volume, complexity, and industry. Most clients invest $3,000-$5,000/month for 2-4 pieces of high-quality content." },
  { question: "How long does it take to write SEO content?", answer: "Typical blog posts (1,500-2,500 words) take 5-7 business days including research, writing, optimization, and revisions. Comprehensive guides take 10-14 days." },
  { question: "Do you write in my brand voice?", answer: "Yes—we start with a brand voice guide and tone of voice document. Our writers adapt to match your style, whether professional, conversational, or technical." },
  { question: "Can you create content for my industry?", answer: "Absolutely. I have writers experienced across industries. For highly technical niches, I work with subject matter experts to ensure accuracy." },
  { question: "What's included in content SEO services?", answer: "Keyword research, content strategy, writing, on-page SEO optimization, internal linking recommendations, meta descriptions, and content performance tracking." },
  { question: "How do you ensure content quality?", answer: "All content goes through research, writing, SEO optimization, editing, fact-checking, and quality review before delivery. We maintain high standards for accuracy and value." }
];

export default function ContentSEOPage() {
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
                "@id": "https://adeelahmad.com/services/content-seo#service",
                "serviceType": "Content SEO Services",
                "name": "Content SEO Services",
                "description": "Expert content SEO services to create high-ranking, search-optimized content that drives organic traffic and establishes authority through SEO copywriting and topic cluster strategies.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Content SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/content-seo#webpage",
                "url": "https://adeelahmad.com/services/content-seo",
                "name": "Content SEO Services | SEO Content Writing & Topic Cluster Strategy",
                "description": "Expert content SEO services to create high-ranking, search-optimized content that drives organic traffic.",
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
                    "name": "Content SEO",
                    "item": "https://adeelahmad.com/services/content-seo"
                  }
                ]
              }
            ])
          }}
        />
        
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-xl mb-8">
                  <FaFileAlt className="text-3xl text-purple-400" />
                  <span className="font-semibold">Content SEO Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  Content SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Create high-ranking, search-optimized content that drives organic traffic and establishes your authority in your industry.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    Get Free Content Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-purple-400 mb-2">380%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-pink-400 mb-2">1,200+</div>
                    <div className="text-sm text-slate-300">Articles Published</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">95%</div>
                    <div className="text-sm text-slate-300">Client Satisfaction</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">4.2x</div>
                    <div className="text-sm text-slate-300">ROI Average</div>
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

        <SEOFramework industry="Content SEO" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="content-seo" industryIcon={<FaFileAlt />} />
        <WhyChooseMe industry="Content SEO" />
        <HireLocalSEO industry="Content SEO" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive Content SEO Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                From strategy to creation to optimization—we handle every aspect of content SEO to drive organic traffic.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-500">
                  <div className="text-5xl mb-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
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
          industry="Content SEO"
          stats={[
            { value: "380%", label: "Average organic traffic increase from content SEO", icon: <FaChartLine />, color: "from-purple-500 to-pink-500" },
            { value: "1,200+", label: "SEO-optimized articles published for clients", icon: <FaFileAlt />, color: "from-blue-500 to-cyan-500" },
            { value: "4.2x", label: "Average ROI from content marketing investments", icon: <FaBullseye />, color: "from-green-500 to-emerald-500" },
            { value: "95%", label: "Client satisfaction rate with content quality", icon: <FaStar />, color: "from-orange-500 to-red-500" }
          ]}
        />

        <ProcessTimeline 
          industry="Content SEO"
          steps={[
            { step: 1, title: "Content Audit & Strategy", description: "Analyze existing content, identify gaps, research keywords, and develop comprehensive content strategy.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Keyword Research & Mapping", description: "Identify high-value keywords, analyze search intent, and map keywords to content pieces.", icon: <FaTags />, duration: "Week 1-2" },
            { step: 3, title: "Content Creation", description: "Write SEO-optimized, engaging content that matches search intent and provides value to readers.", icon: <FaPenNib />, duration: "Week 2-4" },
            { step: 4, title: "On-Page Optimization", description: "Optimize titles, meta descriptions, headers, internal links, and semantic SEO elements.", icon: <FaCode />, duration: "Week 3-5" },
            { step: 5, title: "Content Promotion", description: "Distribute content, build backlinks, share on social media, and promote to relevant audiences.", icon: <FaRocket />, duration: "Week 4-6" },
            { step: 6, title: "Monitor & Optimize", description: "Track performance, update content, optimize based on data, and scale successful content.", icon: <FaChartLine />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="Content SEO"
          pillars={[
            { title: "Content Strategy", description: "Strategic content planning", topics: ["Content audits", "Keyword research", "Content calendars", "Topic clusters"], icon: <FaBook /> },
            { title: "SEO Writing", description: "Search-optimized content creation", topics: ["Blog posts", "Guides & tutorials", "Pillar pages", "Case studies"], icon: <FaPenNib /> },
            { title: "Content Optimization", description: "On-page SEO enhancement", topics: ["Meta tags", "Header optimization", "Internal linking", "Semantic SEO"], icon: <FaCode /> },
            { title: "Content Promotion", description: "Distribution and link building", topics: ["Social sharing", "Email marketing", "Outreach", "Backlink building"], icon: <FaRocket /> }
          ]}
        />

        <LocalSEOSignals 
          industry="Content SEO"
          signals={[
            { title: "Keyword Optimization", description: "Strategic keyword placement and semantic SEO", importance: "Critical", icon: <FaTags /> },
            { title: "Content Quality", description: "Comprehensive, valuable content that answers user queries", importance: "Critical", icon: <FaFileAlt /> },
            { title: "Internal Linking", description: "Strategic internal links to distribute authority", importance: "High", icon: <FaLink /> },
            { title: "Content Freshness", description: "Regular updates and new content publication", importance: "High", icon: <FaCheckCircle /> },
            { title: "User Engagement", description: "Low bounce rate, high time on page, social shares", importance: "Medium", icon: <FaUsers /> },
            { title: "Backlinks", description: "Natural backlinks earned from quality content", importance: "High", icon: <FaStar /> }
          ]}
        />

        <CompetitorComparison 
          industry="Content SEO"
          comparisons={[
            { feature: "Content Quality", withSEO: "Comprehensive, well-researched content", withoutSEO: "Thin, keyword-stuffed content" },
            { feature: "Search Rankings", withSEO: "Top rankings for target keywords", withoutSEO: "Low visibility in search results" },
            { feature: "Organic Traffic", withSEO: "Consistent growth from content", withoutSEO: "Stagnant or declining traffic" },
            { feature: "Authority Building", withSEO: "Established as industry thought leader", withoutSEO: "No clear expertise or authority" },
            { feature: "Content Strategy", withSEO: "Data-driven, strategic content plan", withoutSEO: "Random, unplanned content" },
            { feature: "ROI", withSEO: "Measurable ROI from content investment", withoutSEO: "No clear return on content spend" }
          ]}
        />

        <CaseStudyHighlight 
          industry="Content SEO"
          caseStudy={{
            title: "B2B SaaS: 380% Traffic Growth in 8 Months",
            industry: "Content SEO Campaign",
            results: [
              { metric: "Organic Traffic", value: "+380%", change: "in 8 months" },
              { metric: "Keyword Rankings", value: "850+ Page 1", change: "keywords ranking" },
              { metric: "Lead Generation", value: "+240%", change: "from organic content" },
              { metric: "Content ROI", value: "4.8x", change: "return on investment" }
            ],
            testimonial: "The content strategy transformed our organic presence. We went from struggling to rank to dominating our industry keywords. The quality and SEO expertise is unmatched.",
            clientName: "Marketing Director"
          }}
        />

        <TrustSignals 
          industry="Content SEO"
          customItems={[
            { icon: <FaPenNib />, title: "Expert Writers", description: "Experienced SEO content writers across industries" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 380% traffic increase from content" },
            { icon: <FaFileAlt />, title: "1,200+ Articles", description: "High-quality content published for clients" },
            { icon: <FaStar />, title: "95% Satisfaction", description: "Client satisfaction with content quality" },
            { icon: <FaSearch />, title: "Strategic Approach", description: "Data-driven content strategy and optimization" },
            { icon: <FaBullseye />, title: "ROI Focused", description: "Content that drives measurable business results" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/30 dark:to-pink-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="Content SEO Questions" />

        <section className="py-24 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Content That Ranks?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get a free content audit and discover how SEO-optimized content can transform your organic traffic.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-purple-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free Content Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}




