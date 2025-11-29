import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; import HeroContactForm from '@/components/HeroContactForm';
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
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import TopSEOServices from '@/components/services/TopSEOServices'
import { FaShoppingCart, FaBox, FaTags, FaCreditCard, FaChartLine, FaStore, FaRocket, FaSearch, FaCog, FaStar, FaMobileAlt, FaShieldAlt, FaDatabase, FaFileAlt, FaUsers, FaBullseye, FaCertificate, FaAward } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "E-commerce SEO Services | Boost Product Rankings & Sales",
  description: "Expert e-commerce SEO for Shopify, Magento, and WooCommerce stores. Product optimization, technical SEO, and strategies to increase online sales and revenue.",
  keywords: "ecommerce SEO, e-commerce SEO services, Shopify SEO, Magento SEO, WooCommerce SEO, product optimization, category page SEO, shopping feed optimization, online store SEO, e-commerce SEO agency, ecommerce SEO expert, product page SEO, Amazon SEO, BigCommerce SEO, conversion rate optimization",
};

const seoFrameworkFaqs = [
  { question: "What is e-commerce SEO?", answer: "E-commerce SEO optimizes online stores for search engines—improving product pages, category pages, site structure, and technical elements to drive organic traffic and sales." },
  { question: "How is e-commerce SEO different from regular SEO?", answer: "E-commerce SEO focuses on product discovery, conversion optimization, managing thousands of SKUs, duplicate content challenges, and platform-specific technical considerations." },
  { question: "How long does it take to see results from e-commerce SEO?", answer: "Initial improvements appear in 1-2 months. Significant traffic and revenue growth typically takes 3-6 months as product pages gain authority and rankings improve." },
  { question: "Which e-commerce platforms do you work with?", answer: "I specialize in Shopify, Magento, WooCommerce, BigCommerce, Wix eCommerce, Squarespace Commerce, and custom platforms—each with unique SEO requirements." },
  { question: "How do you optimize product pages for SEO?", answer: "I optimize titles, descriptions, images, schema markup, internal linking, user-generated content, and ensure unique, keyword-rich content for every product." },
  { question: "Can SEO help reduce my paid advertising costs?", answer: "Absolutely. As organic rankings improve, you'll capture free traffic for high-intent keywords, reducing dependency on Google Shopping and paid ads—improving profit margins." },
  { question: "How do you handle duplicate product descriptions?", answer: "We rewrite manufacturer descriptions with unique, SEO-optimized content, use canonical tags correctly, and create category-specific variations to avoid duplicate content penalties." },
  { question: "What is faceted navigation and how does it affect SEO?", answer: "Faceted navigation (filters like size, color, price) can create duplicate content and crawl budget issues. I implement proper canonicalization and parameter handling to protect SEO." },
  { question: "Do you optimize for Google Shopping results?", answer: "Yes—I optimize product feeds, implement proper schema markup, and ensure your products appear in Google Shopping results with rich product information." },
  { question: "How important are product reviews for SEO?", answer: "Critical. Reviews generate fresh content, provide keywords, improve click-through rates, and review schema markup displays star ratings in search results—boosting trust and clicks." },
  { question: "Can you help with international e-commerce SEO?", answer: "Yes—I implement hreflang tags, optimize for multiple currencies/languages, manage country-specific product variations, and handle international shipping considerations." },
  { question: "What's the ROI of e-commerce SEO?", answer: "E-commerce SEO typically delivers 400-800% ROI within 6-12 months. Unlike paid ads, organic rankings compound over time, driving sustainable revenue growth." },
  { question: "How do you optimize category pages?", answer: "We add keyword-rich introductory content, optimize navigation, create logical hierarchies, implement breadcrumbs, and ensure proper internal linking to distribute authority." },
  { question: "Should every product have unique content?", answer: "Yes, especially for high-value products. Unique descriptions improve rankings and conversions. For massive catalogs, we prioritize top sellers and category pages strategically." },
  { question: "Do you provide ongoing e-commerce SEO services?", answer: "Yes—I offer monthly optimization for new products, content updates, technical monitoring, backlink building, and continuous testing to scale your organic revenue." }
];

const ecommerceServices = [
  { icon: <FaBox />, title: "Product Page Optimization", description: "Optimize titles, descriptions, images, and schema for every product to rank higher." },
  { icon: <FaTags />, title: "Category Page SEO", description: "Strategic category structure, optimized content, and internal linking for maximum visibility." },
  { icon: <FaShoppingCart />, title: "Shopping Feed Optimization", description: "Optimize Google Shopping feeds for better product visibility and higher click-through rates." },
  { icon: <FaCreditCard />, title: "Conversion Rate Optimization", description: "SEO-driven improvements to boost add-to-cart rates and checkout completions." },
  { icon: <FaCog />, title: "Technical E-commerce SEO", description: "Fix faceted navigation, duplicate content, site speed, and mobile optimization issues." },
  { icon: <FaStore />, title: "Platform-Specific Optimization", description: "Specialized SEO for Shopify, Magento, WooCommerce, and BigCommerce stores." }
];

const faqs = [
  { question: "How much does e-commerce SEO cost?", answer: "E-commerce SEO ranges from $3,000-$15,000/month depending on product catalog size, competition, and scope. Most stores start at $4,000-$6,000/month." },
  { question: "Can SEO help my new online store?", answer: "Yes, but expect 6-12 months for significant results. I recommend combining SEO with paid ads initially, then scaling organic as rankings improve." },
  { question: "How do you handle out-of-stock products?", answer: "I implement strategic 301 redirects, temporary 'notify me' pages, or soft 404s depending on whether products will return—preserving SEO equity and user experience." },
  { question: "Will SEO work for my niche products?", answer: "Absolutely. Niche products often have less competition and highly targeted search intent—ideal for SEO. Long-tail keywords can drive qualified buyers." },
  { question: "Do you help with Amazon SEO too?", answer: "While I focus on owned e-commerce sites, I can provide Amazon SEO strategy including keyword optimization, A+ content, and review management guidance." },
  { question: "How do you measure e-commerce SEO success?", answer: "We track organic traffic, keyword rankings, organic revenue, conversion rates, product page impressions, and ROI—focusing on metrics that directly impact your bottom line." }
];

export default function EcommerceSEOPage() {
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
                "serviceType": "E-commerce SEO Services",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": "Expert e-commerce SEO for Shopify, Magento, and WooCommerce stores. Product optimization, technical SEO, and strategies to increase online sales and revenue."
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ])
          }}
        />
        <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left text-white">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-indigo-500/20 border border-indigo-400/30 backdrop-blur-xl mb-8">
                  <FaShoppingCart className="text-3xl text-indigo-400" />
                  <span className="font-semibold">E-commerce SEO Services</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                  E-commerce SEO Services
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-8">
                  Drive more organic traffic and revenue with expert SEO for Shopify, Magento, WooCommerce, and custom e-commerce platforms.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all">
                    Get Free Store Audit
                    <FaRocket />
                  </Link>
                  <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                    View Case Studies
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-indigo-400 mb-1">420%</div>
                    <div className="text-sm text-slate-300">Avg Revenue Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-purple-400 mb-1">850+</div>
                    <div className="text-sm text-slate-300">Products Optimized</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-pink-400 mb-1">65%</div>
                    <div className="text-sm text-slate-300">Less Ad Spend</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">3.2x</div>
                    <div className="text-sm text-slate-300">Organic Traffic</div>
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

        <SEOFramework industry="E-commerce" faqs={seoFrameworkFaqs} />
        
        <TopSEOServices />

        <CountriesGrid industrySlug="ecommerce-seo" industryIcon={<FaShoppingCart />} />
        <WhyChooseMe industry="E-commerce" />
        <HireLocalSEO industry="E-commerce SEO" />

        <IndustryStats 
          industry="E-commerce"
          stats={[
            { icon: <FaChartLine />, label: "Average Revenue Increase", value: "420%", color: "from-green-500 to-emerald-500" },
            { icon: <FaSearch />, label: "Keywords Ranking Page 1", value: "1,250+", color: "from-blue-500 to-cyan-500" },
            { icon: <FaShoppingCart />, label: "Organic Conversion Rate", value: "4.8%", color: "from-purple-500 to-pink-500" },
            { icon: <FaStar />, label: "Client Satisfaction", value: "98%", color: "from-yellow-500 to-orange-500" }
          ]}
        />

        <ProcessTimeline 
          industry="E-commerce SEO"
          steps={[
            { step: 1, title: "Store Audit & Analysis", description: "Comprehensive technical audit, product page analysis, competitor research, and keyword opportunity identification.", icon: <FaSearch />, duration: "Week 1" },
            { step: 2, title: "Technical Foundation", description: "Fix site speed, mobile issues, faceted navigation, duplicate content, and implement proper schema markup.", icon: <FaCog />, duration: "Weeks 2-3" },
            { step: 3, title: "Product Optimization", description: "Optimize product titles, descriptions, images, and create unique content for top-performing products.", icon: <FaBox />, duration: "Weeks 4-6" },
            { step: 4, title: "Category Strategy", description: "Develop keyword-optimized category pages with strategic content and internal linking structure.", icon: <FaTags />, duration: "Weeks 7-8" },
            { step: 5, title: "Authority Building", description: "Earn quality backlinks through product reviews, partnerships, PR, and industry relationships.", icon: <FaShieldAlt />, duration: "Weeks 9-12" },
            { step: 6, title: "Scale & Optimize", description: "Continuous testing, new product optimization, seasonal campaigns, and revenue scaling strategies.", icon: <FaRocket />, duration: "Ongoing" }
          ]}
        />

        <TopicClusterSection 
          industry="E-commerce SEO"
          pillars={[
            { title: "Product SEO", description: "Optimize every product page for maximum search visibility and conversions", icon: <FaBox />, topics: ["Product titles & descriptions", "Image optimization & alt tags", "Product schema markup", "User-generated content", "Product variations", "Cross-selling opportunities"] },
            { title: "Category Optimization", description: "Strategic category pages that rank for high-value commercial keywords", icon: <FaTags />, topics: ["Category page content", "Filter & faceted navigation", "Breadcrumb structure", "Category hierarchy", "Internal linking", "Collection pages"] },
            { title: "Technical E-commerce", description: "Fix technical issues that prevent search engines from crawling and indexing your store", icon: <FaCog />, topics: ["Site speed optimization", "Mobile responsiveness", "Duplicate content solutions", "Pagination handling", "XML sitemaps", "Canonical tags"] },
            { title: "Conversion & Authority", description: "Build trust and authority to drive both rankings and sales", icon: <FaChartLine />, topics: ["Shopping feed optimization", "Review generation", "Link building strategies", "Brand mentions", "PR & partnerships", "Trust signals"] }
          ]}
        />

        <LocalSEOSignals 
          industry="E-commerce"
          signals={[
            { icon: <FaFileAlt />, title: "Unique Content", description: "Original product descriptions and category content", importance: "Critical" },
            { icon: <FaStar />, title: "Product Reviews", description: "Customer reviews with star ratings", importance: "High" },
            { icon: <FaCog />, title: "Technical SEO", description: "Fast load times and mobile optimization", importance: "Critical" },
            { icon: <FaShieldAlt />, title: "Trust Signals", description: "Secure checkout and trust badges", importance: "High" },
            { icon: <FaDatabase />, title: "Schema Markup", description: "Product, review, and breadcrumb schema", importance: "High" },
            { icon: <FaMobileAlt />, title: "Mobile Experience", description: "Seamless mobile shopping experience", importance: "Critical" }
          ]}
        />

        <CompetitorComparison 
          industry="E-commerce SEO"
          comparisons={[
            { feature: "Product Page Optimization", withSEO: "Complete optimization", withoutSEO: "Partial" },
            { feature: "Category Content Strategy", withSEO: "Strategic content", withoutSEO: "Rarely" },
            { feature: "Shopping Feed Optimization", withSEO: "Fully optimized", withoutSEO: "No" },
            { feature: "Platform-Specific Expertise", withSEO: "Platform specialists", withoutSEO: "Generic" },
            { feature: "Conversion Optimization Focus", withSEO: "Conversion-focused", withoutSEO: "Traffic Only" },
            { feature: "Ongoing Product Updates", withSEO: "Continuous updates", withoutSEO: "One-time" }
          ]}
        />

        <CaseStudyHighlight 
          industry="E-commerce Store"
          caseStudy={{
            title: "Fashion Retailer: 420% Revenue Growth in 8 Months",
            industry: "E-commerce",
            results: [
              { metric: "Organic Revenue", value: "+420%", change: "increase" },
              { metric: "Product Page Rankings", value: "1,250", change: "page 1 rankings" },
              { metric: "Organic Traffic", value: "+380%", change: "increase" },
              { metric: "Conversion Rate", value: "+58%", change: "improvement" }
            ],
            testimonial: "SEO transformed our business. We went from 90% paid traffic to 70% organic—dramatically improving profit margins while scaling revenue. Best investment we've made.",
            clientName: "Sarah Chen, E-commerce Director"
          }}
        />

        <TrustSignals 
          industry="E-commerce SEO"
          customItems={[
            { icon: <FaStar />, title: "98% Client Satisfaction", description: "Consistently exceeding revenue goals" },
            { icon: <FaShoppingCart />, title: "500+ Stores Optimized", description: "Proven results across all platforms" },
            { icon: <FaCertificate />, title: "Google Partner", description: "Certified in Google Shopping & Analytics" },
            { icon: <FaAward />, title: "Industry Awards", description: "Recognized for e-commerce SEO excellence" },
            { icon: <FaUsers />, title: "Dedicated Team", description: "Experts in every e-commerce platform" },
            { icon: <FaChartLine />, title: "Proven ROI", description: "Average 400-800% ROI within 12 months" }
          ]}
        />

        <TestimonialsSlider />

        <FAQSection faqs={faqs} />

        <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Scale your e-commerce Revenue?</h2>
            <p className="text-xl mb-8 text-indigo-100">
              Get a free store audit and discover how much organic revenue you're leaving on the table
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all">
                Get Free Store Audit
                <FaRocket />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                View Success Stories
              </Link>
            </div>
          </div>
        </section>

        <IndustriesGrid />
      </main>
      <Footer />
    </>
  );
}
