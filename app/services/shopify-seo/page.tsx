import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { industries } from '@/data/industries'
import { countries } from '@/data/locations'
import { serviceTypes } from '@/config/services'
import { getCitiesByCountry } from '@/config/service-locations'
import { Award, Clock, DollarSign, Target } from 'lucide-react'
import SEOFramework from '@/components/industries/SEOFramework'
import CountriesGrid from '@/components/industries/CountriesGrid'
import WhyChooseMe from '@/components/industries/WhyChooseMe'
import HireLocalSEO from '@/components/industries/HireLocalSEO'
import ServicesGrid from '@/components/industries/ServicesGrid'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import ProcessTimeline from '@/components/industries/ProcessTimeline'
import IndustryStats from '@/components/industries/IndustryStats'
import TrustSignals from '@/components/industries/TrustSignals'
import CompetitorComparison from '@/components/industries/CompetitorComparison'
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight'
import TopicClusterSection from '@/components/industries/TopicClusterSection'
import LocalSEOSignals from '@/components/industries/LocalSEOSignals'
import TopSEOServices from '@/components/services/TopSEOServices'

import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import FAQSection from '@/components/seo/FAQSection'
import { FaBell, FaBolt, FaBox, FaBullseye, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaGem, FaLink, FaMobileAlt, FaPlug, FaSearch, FaShoppingBag, FaTags, FaTrophy, FaWrench } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Shopify SEO Services | Increase Store Sales & Rankings',
  description: 'Expert Shopify SEO to boost your online store. Product optimization, technical improvements, and conversion strategies that drive sales and organic traffic.',
  keywords: 'Shopify SEO, Shopify SEO services, Shopify optimization, Shopify store SEO, Shopify product SEO, Shopify e-commerce SEO, Shopify technical SEO, Shopify SEO expert, Shopify SEO agency, Shopify rankings, Shopify organic traffic, Shopify SEO apps, Shopify SEO consultant',
}

export default function ShopifySEOPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Shopify SEO', url: '/services/shopify-seo' }
  ];

  // Get all locations for display
  const allLocations = countries.flatMap(country =>
    country.cities.flatMap(city =>
      city.areas.map(area => ({
        country,
        city,
        area
      }))
    )
  );

  // SEO Framework FAQs (15+ comprehensive questions)
  const seoFrameworkFaqs = [
    {
      question: 'Why is Shopify good for SEO compared to other platforms?',
      answer: 'Shopify offers built-in SEO features including automatic sitemaps, customizable URLs, fast hosting with CDN, mobile-first design, and robust technical infrastructure. While WordPress has more plugins, Shopify\'s clean code, automatic security updates, and optimized performance make it excellent for SEO without technical complexity.'
    },
    {
      question: 'How do I optimize Shopify product pages for search engines?',
      answer: 'Optimize product titles with primary keywords naturally, write unique 300+ word descriptions, use high-quality images with descriptive alt text, implement product schema markup, create SEO-friendly URLs, and add customer reviews. Focus on solving customer problems rather than just listing features.'
    },
    {
      question: 'Can Shopify stores rank as well as custom websites?',
      answer: 'Yes! Many Shopify stores rank #1 for competitive keywords. Success depends on content quality, technical optimization, backlinks, and user experience - not the platform. Shopify\'s fast hosting, mobile optimization, and clean code actually give you SEO advantages over poorly-built custom sites.'
    },
    {
      question: 'What are the biggest Shopify SEO mistakes to avoid?',
      answer: 'Common mistakes include duplicate content from manufacturer descriptions, thin product pages with minimal content, missing alt text on images, slow page speed from too many apps, poor internal linking structure, and neglecting collection page optimization. We fix all these systematically.'
    },
    {
      question: 'How important is site speed for Shopify SEO?',
      answer: 'Critical! Page speed directly impacts rankings and conversions. Every 1-second delay reduces conversions by 7%. I optimize images, minimize apps, implement lazy loading, use Shopify\'s CDN effectively, and optimize theme code to achieve sub-2-second load times.'
    },
    {
      question: 'Should I use Shopify apps for SEO?',
      answer: 'Selectively, yes. Essential apps include schema markup tools (like JSON-LD for SEO), image optimization (TinyIMG), SEO management (Plug in SEO), and review apps (Judge.me). However, too many apps slow your store. We choose only necessary, well-coded apps that add real value.'
    },
    {
      question: 'How do I rank for product-specific keywords?',
      answer: 'Create detailed product pages targeting long-tail keywords like "organic cotton baby onesies" instead of just "baby clothes". Include keyword-rich titles, comprehensive descriptions, customer Q&A, reviews, size guides, and related products. Build backlinks to top product pages.'
    },
    {
      question: 'Can blog content help my Shopify store rank?',
      answer: 'Absolutely! Blogging is crucial for ranking informational keywords that drive traffic to your store. Create buying guides, how-to content, product comparisons, and industry tips. Link blog posts to relevant products. This builds topical authority and captures customers at different buying stages.'
    },
    {
      question: 'How do I optimize Shopify collection pages?',
      answer: 'Collection pages are powerful for ranking category keywords. Write unique 300+ word descriptions, use keyword-rich collection titles, create custom collection images, implement breadcrumb navigation, add filters for user experience, and build internal links from blog content to collections.'
    },
    {
      question: 'What about duplicate content on Shopify?',
      answer: 'Duplicate content is common when using manufacturer descriptions or multiple variants. We write unique product descriptions, use canonical tags correctly, implement proper variant handling, create unique meta descriptions, and differentiate your content to stand out from competitors selling the same products.'
    },
    {
      question: 'How long does Shopify SEO take to show results?',
      answer: 'Typically 3-6 months for significant improvements. Product pages may rank faster (60-90 days) for long-tail keywords. Competitive terms require more time and backlinks. E-commerce SEO is ongoing - we continuously optimize based on performance data.'
    },
    {
      question: 'Do I need backlinks for Shopify SEO?',
      answer: 'Yes, backlinks remain a major ranking factor. I build links through content marketing, influencer partnerships, product reviews, guest posts on industry blogs, digital PR, and creating shareable content. Quality matters more than quantity - one authoritative link beats 100 spammy ones.'
    },
    {
      question: 'How do I compete with Amazon and big retailers?',
      answer: 'Focus on niche keywords where you can win, provide superior content and customer experience, build a strong brand story, leverage user-generated content, optimize for local searches if applicable, and create content that big retailers won\'t bother with. Specialization beats generalization.'
    },
    {
      question: 'Should I hire an agency or in-house for Shopify SEO?',
      answer: 'Depends on your budget and goals. Agencies offer specialized expertise and proven processes. In-house gives you dedicated focus but requires training and management. As a specialized Shopify SEO consultant, I offer the expertise of an agency with the dedicated attention of in-house.'
    },
    {
      question: 'How do reviews and ratings impact Shopify SEO?',
      answer: 'Reviews are crucial! They provide fresh content, include natural keywords, increase time on site, improve conversion rates, and star ratings show in search results attracting clicks. I implement review apps, create review request systems, and optimize review schema markup.'
    },
    {
      question: 'Can I track ROI from Shopify SEO?',
      answer: 'Yes! We set up proper tracking to measure organic traffic, conversion rates, revenue from organic search, keyword rankings, and customer lifetime value. You\'ll see exactly which keywords and pages drive sales, allowing data-driven optimization decisions.'
    }
  ];

  // Regular FAQs for FAQ Section
  const faqs = [
    {
      question: 'Is Shopify good for SEO?',
      answer: 'Yes, Shopify has strong built-in SEO features including automatic sitemaps, customizable URLs, meta tags, and fast hosting. With proper optimization, it can rank very well.',
    },
    {
      question: 'How do I optimize Shopify products for SEO?',
      answer: 'Optimize product titles with keywords, write unique descriptions, use alt text for images, implement product schema markup, and create SEO-friendly URLs.',
    },
    {
      question: 'Which Shopify SEO apps are best?',
      answer: 'Top apps include Plug in SEO, SEO Manager, Smart SEO, and Schema Plus for structured data. Choose based on your specific needs and budget.',
    },
    {
      question: 'How long does Shopify SEO take to show results?',
      answer: 'Typically 3-6 months for significant improvements. Product pages may rank faster than blogs. Competitive niches require more time and ongoing optimization.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-950">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "@id": "https://adeelahmad.com/services/shopify-seo#service",
                "serviceType": "Shopify SEO Services",
                "name": "Shopify SEO Services",
                "description": "Expert Shopify SEO optimization to increase organic traffic, improve product rankings, and drive e-commerce sales through technical SEO and content optimization.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Shopify SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/shopify-seo#webpage",
                "url": "https://adeelahmad.com/services/shopify-seo",
                "name": "Shopify SEO Services | E-commerce Optimization Expert",
                "description": "Expert Shopify SEO optimization to increase organic traffic and drive e-commerce sales.",
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
                    "name": "Shopify SEO",
                    "item": "https://adeelahmad.com/services/shopify-seo"
                  }
                ]
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
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-12 h-12 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.373 4.618c-.356-.139-.634-.185-.973-.185-.046 0-.092.046-.139.046l-.047-.092c-.277-.51-.695-.741-1.204-.741-.602 0-1.25.37-1.85.973-.509.51-.927 1.157-1.157 1.805-.695.231-1.157.37-1.204.37-.37.139-.37.139-.417.51 0 .047-.047.463-.092 1.157-.185 0-.324.046-.509.046-1.065.093-1.85.879-2.083 1.944-.232 1.018.278 1.944 1.25 2.547.185.139.417.277.648.37-.093.51-.139.973-.139 1.528 0 3.426 2.13 6.388 5.324 7.406 1.065.324 2.222.463 3.333.463 4.213 0 7.5-2.824 7.5-6.48 0-2.222-1.296-3.611-3.38-3.611-.973 0-1.758.324-2.361.973-.556.556-.834 1.389-.695 2.222.093.602.324 1.018.695 1.481.231.277.51.51.88.741-.417.602-1.25.973-2.13.973-1.806 0-3.24-1.574-3.24-3.61 0-.231.046-.509.093-.787.463-1.574 1.25-2.592 2.268-2.916.185-.046.417-.046.602-.046l.093.046c.463.232.834.37 1.297.37.463 0 .834-.139 1.157-.417.324-.277.51-.695.556-1.157.093-.695-.185-1.343-.741-1.805-.185-.139-.417-.278-.695-.417zm-.88 2.732c-.046.046-.092.092-.139.092-.092 0-.185 0-.324-.046-.046 0-.139-.046-.231-.092l-.046-.046c.046-.232.139-.51.277-.787.046-.092.092-.185.139-.277.046-.046.092-.092.139-.139.046-.046.092-.092.139-.092.046 0 .092 0 .139.046.046 0 .092.046.139.092.092.092.139.185.139.324 0 .092-.046.185-.092.277-.046.046-.139.139-.185.185z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Shopify Platform</span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">Shopify SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-4 drop-shadow-lg">
                  E-commerce SEO strategies to boost sales, rankings, and revenue
                </p>
                <p className="text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Specialized Shopify Plus optimization including product page SEO, collection optimization, liquid template enhancement, app configuration, and conversion-focused strategies to turn organic traffic into loyal customers.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Get Free Store Audit
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
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

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Shopify E-commerce" />

        {/* Section 3: Why Choose Me */}
        <WhyChooseMe industry="Shopify" />

        {/* Section 4: Custom Service Grid */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-600/20 dark:border-green-400/20 mb-6">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-green-600 dark:text-green-400">Comprehensive Services</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Our Shopify <span className="gradient-text">SEO Services</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Comprehensive SEO solutions designed specifically for Shopify e-commerce stores
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Product Page Optimization",
                  description: "Optimize product titles, descriptions, images, and schema markup to rank for buying keywords and increase conversions",
                  icon: <FaShoppingBag className="w-6 h-6" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Collection SEO Strategy",
                  description: "Create keyword-rich collection pages with unique content to rank for category searches and drive qualified traffic",
                  icon: <FaBox className="w-6 h-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Technical Store Audit",
                  description: "Comprehensive technical SEO audit including speed optimization, mobile responsiveness, and Core Web Vitals improvements",
                  icon: <FaCog className="w-6 h-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Shopify App Optimization",
                  description: "Strategic selection and configuration of essential SEO apps without slowing down your store performance",
                  icon: <FaPlug className="w-6 h-6" />,
                  color: "from-orange-500 to-red-500"
                },
                {
                  title: "Content Marketing for E-commerce",
                  description: "Create buying guides, product comparisons, and how-to content that drives traffic and builds topical authority",
                  icon: <FaEdit className="w-6 h-6" />,
                  color: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Conversion Rate Optimization",
                  description: "A/B testing, UX improvements, and checkout optimization to turn organic traffic into paying customers",
                  icon: <FaChartLine className="w-6 h-6" />,
                  color: "from-teal-500 to-green-500"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-scale-in relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{service.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Shopify E-commerce" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Shopify" 
          stats={[
            { value: "93%", label: "of online buyers search for products before purchasing", icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "$5.8B", label: "annual Shopify gross merchandise volume growth", icon: <FaChartLine className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "81%", label: "higher conversion from organic vs paid traffic", icon: <FaGem className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "14x", label: "SEO return on investment vs paid advertising", icon: <FaDollarSign className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
          ]}
        />

        {/* E-commerce SEO Process */}
        <ProcessTimeline 
          industry="Shopify" 
          steps={[
            { step: 1, title: "Store Audit", description: "Technical SEO analysis of your Shopify store structure, speed, and indexing", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Keyword Research", description: "Product and category keyword mapping with commercial intent analysis", icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "On-Page Optimization", description: "Product titles, descriptions, meta tags, and collection page optimization", icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
            { step: 4, title: "Technical SEO", description: "Schema markup, canonical tags, URL structure, and crawlability improvements", icon: <FaWrench className="w-6 h-6" />, duration: "Weeks 3-6" },
            { step: 5, title: "Content Strategy", description: "Blog content, buying guides, and product comparison pages", icon: <FaEdit className="w-6 h-6" />, duration: "Ongoing" },
            { step: 6, title: "Link Building", description: "E-commerce link acquisition through product PR and influencer outreach", icon: <FaLink className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Shopify" 
          pillars={[
            { title: "Product SEO", description: "Product page optimization, titles, descriptions, images, and rich snippets for maximum visibility", topics: ["Product pages", "Titles optimization", "Image SEO", "Rich snippets"], icon: <FaShoppingBag className="w-6 h-6" /> },
            { title: "Collection Optimization", description: "Category page SEO, faceted navigation, filters, and collection structure for crawlability", topics: ["Collection pages", "Navigation", "Filters SEO", "Structure"], icon: "📁" },
            { title: "Technical E-commerce", description: "Site speed, mobile optimization, checkout SEO, and Shopify-specific technical improvements", topics: ["Site speed", "Mobile optimization", "Checkout SEO", "Technical fixes"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Content Commerce", description: "Blog integration, buying guides, product comparisons, and content-driven sales strategies", topics: ["Blog content", "Buying guides", "Comparisons", "Content strategy"], icon: <FaEdit className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Shopify"
          signals={[
            { title: "Product Schema", description: "Rich product snippets with price, availability, and reviews", importance: "Critical", icon: <FaTags className="w-6 h-6" /> },
            { title: "Site Speed", description: "Core Web Vitals optimization for e-commerce experience", importance: "Critical", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Mobile UX", description: "Mobile-first shopping experience optimization", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Content Quality", description: "Unique product descriptions avoiding manufacturer copy", importance: "High", icon: <FaEdit className="w-6 h-6" /> },
            { title: "Technical Health", description: "Crawlability, indexing, and duplicate content prevention", importance: "High", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Internal Linking", description: "Product relationships, upsells, and category structure", importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Shopify"
          comparisons={[
            { feature: "Google Visibility", withSEO: "Page 1-3 for product keywords", withoutSEO: "Buried beyond page 5" },
            { feature: "Organic Traffic", withSEO: "Consistent free traffic growth", withoutSEO: "100% reliance on paid ads" },
            { feature: "Customer Acquisition", withSEO: "$5-15 per customer", withoutSEO: "$50-100+ per customer" },
            { feature: "Brand Authority", withSEO: "Industry-leading presence", withoutSEO: "Unknown brand status" },
            { feature: "Conversion Rate", withSEO: "3-6% organic conversion", withoutSEO: "1-2% paid traffic only" },
            { feature: "Long-term Growth", withSEO: "Compound traffic growth", withoutSEO: "Flat or declining sales" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Shopify"
          caseStudy={{
            title: "Fashion Boutique Shopify Store",
            industry: "Shopify",
            results: [
              { metric: "Organic Revenue", value: "680%", change: "increase in sales" },
              { metric: "Organic Traffic", value: "12x", change: "more monthly visitors" },
              { metric: "Google Rankings", value: "#1", change: "for 450+ keywords" },
              { metric: "Conversion Rate", value: "4.2%", change: "from organic traffic" }
            ],
            testimonial: "Our Shopify store went from invisible to dominating our niche. Organic traffic now drives 80% of our revenue.",
            clientName: "E-commerce Store Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Shopify"
          customItems={[
            { icon: <FaShoppingBag className="w-6 h-6" />, title: "Shopify Partner Certified", description: "Official Shopify partner with proven expertise" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "E-commerce SEO Expert", description: "Specialized in product and catalog optimization" },
            { icon: <FaTrophy className="w-6 h-6" />, title: "500+ Store Optimizations", description: "Track record of successful Shopify SEO projects" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI-Focused Strategy", description: "Every action designed to increase revenue" },
            { icon: <FaBullseye className="w-6 h-6" />, title: "Conversion Optimization", description: "SEO that drives sales, not just traffic" },
            { icon: <FaCog className="w-6 h-6" />, title: "Technical SEO Specialist", description: "Deep Shopify technical knowledge" }
          ]}
        />

        <TopSEOServices />

        {/* Section 7: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="shopify-seo" />

        {/* Section 8: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-emerald-50/20 dark:from-slate-950 dark:via-green-950/30 dark:to-emerald-950/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-600/20 dark:border-yellow-400/20 mb-6">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">Client Success Stories</span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                Real results from real businesses that trusted us with their SEO
              </p>
            </div>

            <TestimonialsSlider />
          </div>
        </section>

        {/* Section 9: FAQs */}
        <FAQSection faqs={faqs} title="Common Questions About Shopify SEO" />



        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Boost Your Shopify Store Sales?</h2>
            <p className="text-xl text-green-100 mb-8">Get a comprehensive store audit and conversion-focused SEO strategy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-green-600 font-bold hover:bg-green-50 transition-all shadow-xl hover:scale-105"
              >
                Start Your Free Consultation
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
