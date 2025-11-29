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
import { FaFileAlt, FaTags, FaHeading, FaImage, FaLink, FaCode, FaSearch, FaChartLine, FaRocket, FaCheckCircle, FaUsers, FaStar, FaBullseye, FaEdit, FaList } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "On-Page SEO Services | Meta Tags, Headers & Content Optimization Expert",
  description: "Expert on-page SEO services to optimize titles, meta descriptions, headers, content, images, and internal links for maximum search visibility. Professional on-page SEO optimization, keyword placement, and content structure for improved Google rankings.",
  keywords: "on-page SEO, on-page SEO services, meta tags, title tags, header optimization, content optimization, image SEO, internal linking, schema markup, on-page SEO checklist, on-page SEO factors, on-page optimization, keyword optimization, on-page SEO agency, on-page SEO best practices",
};

const seoFrameworkFaqs = [
  { question: "What is on-page SEO?", answer: "On-page SEO optimizes elements on your website pages—titles, meta descriptions, headers, content, images, URLs, and internal links—to improve search rankings." },
  { question: "What's the difference between on-page and technical SEO?", answer: "On-page SEO focuses on content and HTML elements (titles, headers, keywords). Technical SEO focuses on site infrastructure (speed, crawlability, mobile-friendliness). Both are essential." },
  { question: "How important are title tags for SEO?", answer: "Title tags are one of the most important on-page factors. They appear in search results, influence click-through rates, and help Google understand page content." },
  { question: "What makes a good meta description?", answer: "Good meta descriptions are 150-160 characters, include target keywords, clearly describe page content, and entice users to click with compelling copy." },
  { question: "How should I structure headers (H1, H2, H3)?", answer: "Use one H1 per page with your main keyword, H2s for main sections, and H3s for subsections. Create a logical hierarchy that helps users and search engines understand content structure." },
  { question: "Do images need SEO optimization?", answer: "Yes—optimize image file names, add descriptive alt text, compress file sizes, and use appropriate formats. Images can rank in Google Images and improve overall page SEO." },
  { question: "What is internal linking and why does it matter?", answer: "Internal linking connects pages on your site. It helps distribute page authority, improves crawlability, enhances user experience, and helps Google understand site structure." },
  { question: "How do I optimize URLs for SEO?", answer: "Use descriptive, keyword-rich URLs that are short, readable, and include target keywords. Avoid long strings of numbers or parameters when possible." },
  { question: "Should every page target different keywords?", answer: "Yes—each page should target a primary keyword and related terms. Avoid keyword cannibalization by ensuring pages don't compete for the same keywords." },
  { question: "How often should I update on-page SEO?", answer: "Review and update on-page SEO quarterly, or when adding new content, changing page focus, or when rankings decline. Keep content fresh and optimized." },
  { question: "What is keyword density and does it matter?", answer: "Keyword density (keyword frequency) matters less now. Focus on natural keyword usage, semantic SEO, and comprehensive content that covers topics thoroughly." },
  { question: "Can on-page SEO alone improve rankings?", answer: "On-page SEO is essential but works best with technical SEO, quality content, and backlinks. It's a foundational element that must be done correctly." },
  { question: "How do I optimize for featured snippets?", answer: "Create clear, concise answers to questions, use proper header structure, include lists and tables, and format content to match snippet types (paragraph, list, table)." },
  { question: "What is semantic SEO?", answer: "Semantic SEO optimizes for topic understanding, not just keywords. It includes related terms, synonyms, and comprehensive coverage of topics to help Google understand context." }
];

const onPageServices = [
  { icon: <FaTags />, title: "Title & Meta Optimization", description: "Optimize title tags and meta descriptions for better rankings and click-through rates." },
  { icon: <FaHeading />, title: "Header Structure Optimization", description: "Proper H1-H6 hierarchy and keyword-optimized headers for better SEO." },
  { icon: <FaFileAlt />, title: "Content Optimization", description: "Optimize content for target keywords, search intent, and user experience." },
  { icon: <FaImage />, title: "Image SEO", description: "Optimize images with alt text, file names, compression, and proper formats." },
  { icon: <FaLink />, title: "Internal Linking Strategy", description: "Strategic internal linking to distribute authority and improve crawlability." },
  { icon: <FaCode />, title: "Schema Markup", description: "Implement structured data for rich snippets and enhanced search results." }
];

const faqs = [
  { question: "How much does on-page SEO cost?", answer: "On-page SEO ranges from $1,500-$5,000/month depending on site size and number of pages. One-time audits start at $2,000-$4,000 for comprehensive optimization." },
  { question: "How long does on-page SEO take?", answer: "Initial optimization can be completed in 2-4 weeks. Ongoing optimization continues as you add content and update pages. Results typically appear in 1-3 months." },
  { question: "Do you optimize all pages or just key pages?", answer: "We prioritize important pages (homepage, service pages, key landing pages) first, then optimize supporting pages. For large sites, I create optimization templates and processes." },
  { question: "Can you optimize my existing content?", answer: "Yes—we audit existing pages, identify optimization opportunities, update titles, meta descriptions, headers, content, and internal links to improve rankings." },
  { question: "What's included in on-page SEO services?", answer: "Title and meta tag optimization, header structure, content optimization, image SEO, internal linking, URL optimization, schema markup, and ongoing monitoring." },
  { question: "How do you measure on-page SEO success?", answer: "We track keyword rankings, organic traffic, click-through rates, time on page, bounce rate, and conversion improvements from optimized pages." }
];

export default function OnPageSEOPage() {
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
                "@id": "https://adeelahmad.com/services/on-page-seo#service",
                "serviceType": "On-Page SEO Services",
                "name": "On-Page SEO Services",
                "description": "Expert on-page SEO optimization including meta tags, headers, content, images, and internal links for maximum search visibility.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "On-Page SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/on-page-seo#webpage",
                "url": "https://adeelahmad.com/services/on-page-seo",
                "name": "On-Page SEO Services | Meta Tags, Headers & Content Optimization",
                "description": "Expert on-page SEO services to optimize titles, meta descriptions, headers, content, and images for improved Google rankings.",
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
                    "name": "On-Page SEO",
                    "item": "https://adeelahmad.com/services/on-page-seo"
                  }
                ]
              }
            ])
          }}
        />
        
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-xl mb-8">
                  <FaFileAlt className="text-3xl text-orange-400" />
                  <span className="font-semibold">On-Page SEO Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  On-Page SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Optimize titles, meta descriptions, headers, content, images, and internal links to maximize your search visibility and rankings.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                    Get Free On-Page Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-orange-400 mb-2">280%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-red-400 mb-2">1,500+</div>
                    <div className="text-sm text-slate-300">Pages Optimized</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-cyan-400 mb-2">92%</div>
                    <div className="text-sm text-slate-300">CTR Improvement</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-black text-blue-400 mb-2">650+</div>
                    <div className="text-sm text-slate-300">Keywords Ranking</div>
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

        <SEOFramework industry="On-Page SEO" faqs={seoFrameworkFaqs} />
        <CountriesGrid industrySlug="on-page-seo" industryIcon={<FaFileAlt />} />
        <WhyChooseMe industry="On-Page SEO" />
        <HireLocalSEO industry="On-Page SEO" />

        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Comprehensive On-Page SEO Services
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Optimize every on-page element to improve search rankings, click-through rates, and user experience.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {onPageServices.map((service, index) => (
                <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 dark:border-slate-700 hover:border-orange-500">
                  <div className="text-5xl mb-6 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
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
          industry="On-Page SEO"
          stats={[
            { value: "280%", label: "Average organic traffic increase from on-page optimization", icon: <FaChartLine />, color: "from-orange-500 to-red-500" },
            { value: "1,500+", label: "Pages optimized for clients across industries", icon: <FaFileAlt />, color: "from-blue-500 to-cyan-500" },
            { value: "92%", label: "Average click-through rate improvement", icon: <FaBullseye />, color: "from-green-500 to-emerald-500" },
            { value: "650+", label: "Keywords ranking on page 1 after optimization", icon: <FaSearch />, color: "from-purple-500 to-pink-500" }
          ]}
        />

        <ProcessTimeline 
          industry="On-Page SEO"
          steps={[
            { step: 1, title: "On-Page SEO Audit", description: "Analyze titles, meta descriptions, headers, content, images, URLs, and internal links across all pages.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Keyword Research & Mapping", description: "Identify target keywords for each page and map them to on-page elements strategically.", icon: <FaTags />, duration: "Week 1-2" },
            { step: 3, title: "Title & Meta Optimization", description: "Create compelling, keyword-optimized title tags and meta descriptions for better CTR.", icon: <FaEdit />, duration: "Week 2-3" },
            { step: 4, title: "Content & Header Optimization", description: "Optimize content structure, headers, keyword usage, and semantic SEO elements.", icon: <FaHeading />, duration: "Week 3-4" },
            { step: 5, title: "Image & Internal Link Optimization", description: "Optimize images with alt text, compress files, and implement strategic internal linking.", icon: <FaImage />, duration: "Week 4-5" },
            { step: 6, title: "Monitor & Refine", description: "Track rankings, CTR, and traffic. Continuously optimize based on performance data.", icon: <FaChartLine />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="On-Page SEO"
          pillars={[
            { title: "Meta Tags", description: "Title and description optimization", topics: ["Title tags", "Meta descriptions", "Open Graph tags", "Twitter cards"], icon: <FaTags /> },
            { title: "Content Structure", description: "Headers and content optimization", topics: ["H1-H6 headers", "Content optimization", "Keyword placement", "Semantic SEO"], icon: <FaHeading /> },
            { title: "Media Optimization", description: "Images and multimedia SEO", topics: ["Alt text", "Image compression", "File names", "Schema markup"], icon: <FaImage /> },
            { title: "Internal Linking", description: "Strategic page connections", topics: ["Link structure", "Anchor text", "Link placement", "Authority distribution"], icon: <FaLink /> }
          ]}
        />

        <LocalSEOSignals 
          industry="On-Page SEO"
          signals={[
            { title: "Title Tags", description: "Optimized, keyword-rich titles under 60 characters", importance: "Critical", icon: <FaTags /> },
            { title: "Meta Descriptions", description: "Compelling descriptions with keywords and CTAs", importance: "High", icon: <FaEdit /> },
            { title: "Header Structure", description: "Proper H1-H6 hierarchy with keywords", importance: "Critical", icon: <FaHeading /> },
            { title: "Content Quality", description: "Comprehensive, keyword-optimized content", importance: "Critical", icon: <FaFileAlt /> },
            { title: "Image Optimization", description: "Descriptive alt text and optimized file sizes", importance: "High", icon: <FaImage /> },
            { title: "Internal Linking", description: "Strategic links to related pages", importance: "High", icon: <FaLink /> }
          ]}
        />

        <CompetitorComparison 
          industry="On-Page SEO"
          comparisons={[
            { feature: "Title Tags", withSEO: "Optimized, compelling titles", withoutSEO: "Generic or missing titles" },
            { feature: "Meta Descriptions", withSEO: "Enticing descriptions that improve CTR", withoutSEO: "Auto-generated or missing descriptions" },
            { feature: "Content Optimization", withSEO: "Keyword-optimized, comprehensive content", withoutSEO: "Thin or unoptimized content" },
            { feature: "Header Structure", withSEO: "Proper hierarchy and keyword placement", withoutSEO: "Poor structure or missing headers" },
            { feature: "Image SEO", withSEO: "Optimized images with alt text", withoutSEO: "Unoptimized images hurting SEO" },
            { feature: "Internal Linking", withSEO: "Strategic links distributing authority", withoutSEO: "No internal linking strategy" }
          ]}
        />

        <CaseStudyHighlight 
          industry="On-Page SEO"
          caseStudy={{
            title: "E-commerce Site: 280% Traffic Growth",
            industry: "On-Page SEO Optimization",
            results: [
              { metric: "Organic Traffic", value: "+280%", change: "in 6 months" },
              { metric: "Click-Through Rate", value: "+92%", change: "from optimized titles" },
              { metric: "Keyword Rankings", value: "650+ Page 1", change: "keywords ranking" },
              { metric: "Pages Optimized", value: "1,200+", change: "product and category pages" }
            ],
            testimonial: "The on-page optimization transformed our search visibility. Every element was carefully optimized, and the results speak for themselves. Our organic traffic has never been higher.",
            clientName: "E-commerce Manager"
          }}
        />

        <TrustSignals 
          industry="On-Page SEO"
          customItems={[
            { icon: <FaFileAlt />, title: "1,500+ Pages Optimized", description: "Comprehensive on-page optimization experience" },
            { icon: <FaChartLine />, title: "Proven Results", description: "Average 280% traffic increase" },
            { icon: <FaCheckCircle />, title: "Best Practices", description: "Following Google's latest guidelines" },
            { icon: <FaStar />, title: "Quality Focus", description: "Thorough optimization of every element" },
            { icon: <FaSearch />, title: "Data-Driven", description: "Optimization based on performance data" },
            { icon: <FaBullseye />, title: "CTR Improvement", description: "92% average click-through rate increase" }
          ]}
        />

        <TopSEOServices />
        <IndustriesGrid />

        <section className="py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20 dark:from-slate-950 dark:via-orange-950/30 dark:to-red-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                What My clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title="On-Page SEO Questions" />

        <section className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your On-Page SEO?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get a free on-page SEO audit and discover how optimizing your pages can improve rankings and traffic.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white text-orange-600 font-bold text-lg shadow-2xl hover:scale-105 transition-all"
            >
              Get Your Free On-Page Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



