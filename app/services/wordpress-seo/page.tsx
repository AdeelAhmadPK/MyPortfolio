import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import ServiceFeatures from '@/components/services/ServiceFeatures'
import { industries } from '@/data/industries'
import { getCitiesByCountry } from '@/config/service-locations'
import { Award, Clock, DollarSign, Target } from 'lucide-react'
import CountriesGrid from '@/components/industries/CountriesGrid'
import { serviceTypes } from '@/config/services'
import SEOFramework from '@/components/industries/SEOFramework'
import WhyChooseMe from '@/components/industries/WhyChooseMe'
import HireLocalSEO from '@/components/industries/HireLocalSEO'
import ServicesGrid from '@/components/industries/ServicesGrid'
import IndustriesGrid from '@/components/industries/IndustriesGrid'
import { countries } from '@/data/locations'
import TestimonialsSlider from '@/components/home/TestimonialsSlider'
import FAQSection from '@/components/seo/FAQSection'
import ProcessTimeline from '@/components/industries/ProcessTimeline'
import IndustryStats from '@/components/industries/IndustryStats'
import TrustSignals from '@/components/industries/TrustSignals'
import CompetitorComparison from '@/components/industries/CompetitorComparison'
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight'
import TopicClusterSection from '@/components/industries/TopicClusterSection'
import LocalSEOSignals from '@/components/industries/LocalSEOSignals'
import TopSEOServices from '@/components/services/TopSEOServices'
import { FaBolt, FaChartArea, FaChartLine, FaCircle, FaClipboardList, FaCog, FaDollarSign, FaFileAlt, FaGlobe, FaLock, FaMap, FaMobileAlt, FaPencilAlt, FaPlug, FaRocket, FaSearch, FaShieldAlt, FaWrench } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'WordPress SEO Services | Speed, Plugins & Rankings',
  description: 'Expert WordPress SEO optimization for better rankings. Fast page speed, proper plugin setup (Yoast, Rank Math), and technical SEO improvements for WordPress sites.',
  keywords: 'WordPress SEO, WordPress SEO services, WordPress optimization, Yoast SEO, Rank Math SEO, WordPress plugins SEO, WordPress speed optimization, WordPress technical SEO, WordPress site optimization, WordPress SEO expert, WordPress SEO agency, WP SEO, WordPress SEO consultant',
}

export default function WordPressSEOPage() {
  // Get cities from multiple countries
  const allCities = [
    ...getCitiesByCountry('united-states'),
    ...getCitiesByCountry('united-kingdom'),
    ...getCitiesByCountry('canada'),
    ...getCitiesByCountry('pakistan')
  ]

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
      question: 'Why is WordPress the best platform for SEO?',
      answer: 'WordPress powers 43% of the web for good reason: clean semantic HTML, customizable permalinks, extensive SEO plugins (Yoast, Rank Math), easy content management, flexible architecture, and massive developer community. While it requires more setup than drag-and-drop builders, WordPress offers unmatched SEO flexibility and control.'
    },
    {
      question: 'Should I use Yoast SEO or Rank Math for my WordPress site?',
      answer: 'Both are excellent. Yoast SEO is user-friendly, comprehensive, and trusted by millions with excellent support. Rank Math offers more advanced features, better performance, and includes features Yoast charges extra for. For beginners, Yoast. For advanced users wanting more control, Rank Math. We\'re experts in both.'
    },
    {
      question: 'Can WordPress sites rank on Google\'s first page?',
      answer: 'Absolutely! WordPress sites dominate Google\'s first page across industries. With proper optimization - quality content, technical SEO, speed optimization, and backlinks - WordPress sites consistently outrank custom-coded sites. The platform is proven at enterprise scale with sites like TechCrunch, The New Yorker, and Sony Music.'
    },
    {
      question: 'What are the biggest WordPress SEO mistakes to avoid?',
      answer: 'Common mistakes: too many plugins slowing the site, poor hosting affecting speed and uptime, neglecting security leading to hacks, not optimizing images, duplicate content issues, thin content pages, poor internal linking, ignoring mobile optimization, outdated themes/plugins, and no regular backups. We audit and fix all these systematically.'
    },
    {
      question: 'How do I speed up my WordPress site for better SEO?',
      answer: 'Use quality managed WordPress hosting (WP Engine, Kinsta), implement caching (WP Rocket, W3 Total Cache), optimize images (Smush, EWWW), use a CDN (Cloudflare, StackPath), minimize plugins, choose lightweight themes (GeneratePress, Astra), optimize database, enable lazy loading, and minify CSS/JS. Speed is a major ranking factor.'
    },
    {
      question: 'Which WordPress theme is best for SEO?',
      answer: 'Best themes are lightweight, fast-loading, and semantically coded: GeneratePress, Astra, Kadence, Hello (for Elementor), or StudioPress themes. Avoid bloated page builders and themes with excessive features. Theme speed, mobile responsiveness, schema markup support, and clean code matter more than aesthetics. I recommend themes based on your needs.'
    },
    {
      question: 'How many WordPress plugins should I use for SEO?',
      answer: 'Minimize plugins while covering essentials. Core SEO stack: 1 SEO plugin (Yoast/Rank Math), 1 caching plugin (WP Rocket), 1 security plugin (Wordfence), 1 backup plugin, 1 image optimization plugin. That\'s ~5-10 total plugins. Each additional plugin adds code and potential slowdown. Quality over quantity always.'
    },
    {
      question: 'Can blogging help my WordPress site rank better?',
      answer: 'Blogging is essential for WordPress SEO! Create in-depth guides (2000+ words), how-to content, industry insights, case studies, and answer common questions. Consistent blogging builds topical authority, captures long-tail keywords, earns backlinks naturally, and keeps content fresh. I create content strategies that drive rankings and conversions.'
    },
    {
      question: 'How do I handle WordPress security for SEO?',
      answer: 'Security directly impacts SEO - hacked sites get deindexed. Use strong passwords, install security plugins (Wordfence, Sucuri), keep WordPress/plugins updated, use SSL certificates, limit login attempts, disable file editing, use two-factor authentication, choose secure hosting, and maintain regular backups. I implement comprehensive security protocols.'
    },
    {
      question: 'What about duplicate content on WordPress?',
      answer: 'WordPress can create duplicate content with archives, categories, tags, and pagination. Use canonical tags correctly, set proper permalink structure, configure SEO plugin to noindex archives/author pages, create unique content for all important pages, and avoid thin content. We configure WordPress to prevent duplicate content issues.'
    },
    {
      question: 'How long does WordPress SEO take to show results?',
      answer: 'Typically 3-6 months for significant improvements. WordPress\'s technical advantages can accelerate results - proper optimization might show improvements in 60-90 days. New sites take longer than established sites. Competitive industries require 4-6 months. Local businesses often see results in 2-3 months. Consistency is key.'
    },
    {
      question: 'Do I need backlinks for WordPress SEO?',
      answer: 'Yes, backlinks remain crucial! I build links through guest posting on industry blogs, creating linkable assets (infographics, studies), digital PR, business directories, industry associations, podcast appearances, and broken link building. One quality link from an authority site beats 100 spam links. I focus on quality link building.'
    },
    {
      question: 'How do I compete with enterprise WordPress sites?',
      answer: 'Target long-tail keywords they ignore, create superior content for niche topics, optimize for local search if applicable, build relationships in your industry, focus on user experience, leverage social proof, and provide unique value. David beats Goliath with better strategy and execution. Specialization beats generalization.'
    },
    {
      question: 'Should I hire a WordPress SEO agency or specialist?',
      answer: 'Agencies offer teams but may assign junior staff to your account. Specialists provide dedicated expertise and personal attention. As a WordPress SEO specialist with 15+ years experience, I offer agency-level expertise with dedicated service. You get senior-level strategy without junior-level execution or agency overhead.'
    },
    {
      question: 'How do page builders (Elementor, Divi) affect WordPress SEO?',
      answer: 'Page builders can slow sites if not optimized properly. Elementor is better for SEO than Divi or older builders. Use builders strategically on landing pages, not entire sites. Combine with lightweight themes (Hello theme + Elementor works well). Optimize builder-created pages aggressively. We make page builders SEO-friendly.'
    },
    {
      question: 'Can I track ROI from WordPress SEO?',
      answer: 'Absolutely! I implement Google Analytics 4, conversion tracking, event tracking, form submission monitoring, phone call tracking, and revenue attribution. You\'ll see which keywords drive conversions, ROI from organic traffic, user behavior analysis, and customer journey mapping. Data-driven optimization maximizes your investment.'
    },
    {
      question: 'How do I optimize WordPress WooCommerce stores for SEO?',
      answer: 'Optimize product titles with keywords, write unique 300+ word descriptions, use high-quality images with alt text, implement product schema markup, create category pages with unique content, add customer reviews, optimize checkout flow, improve site speed, create buying guides linking to products, and build quality backlinks. WooCommerce SEO drives e-commerce success.'
    }
  ];

  const features = [
    'Complete WordPress site audit and optimization',
    'Yoast SEO and Rank Math configuration',
    'Page speed optimization and caching',
    'Schema markup and structured data',
    'WordPress security and best practices',
    'Mobile responsiveness optimization',
  ]

  const benefits = [
    { icon: <FaRocket className="w-6 h-6" />, title: 'Lightning Fast Sites', desc: 'Optimize WordPress for Google Core Web Vitals' },
    { icon: <FaWrench className="w-6 h-6" />, title: 'Plugin Optimization', desc: 'Expert configuration of all major SEO plugins' },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: 'Mobile-First', desc: 'Perfect mobile experience for better rankings' },
    { icon: <FaLock className="w-6 h-6" />, title: 'Secure & Safe', desc: 'Security hardening and best practices' },
    { icon: <FaChartLine className="w-6 h-6" />, title: 'Data-Driven', desc: 'Analytics and tracking implementation' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'ROI Focused', desc: 'Strategies that drive revenue growth' },
  ]

  const process = [
    { step: '1', title: 'Site Analysis', desc: 'Complete WordPress audit and performance review' },
    { step: '2', title: 'Plugin Setup', desc: 'Configure Yoast SEO or Rank Math for optimal results' },
    { step: '3', title: 'Speed Optimization', desc: 'Implement caching, CDN, and image optimization' },
    { step: '4', title: 'Content Optimization', desc: 'Optimize existing pages and posts for target keywords' },
    { step: '5', title: 'Technical SEO', desc: 'Fix crawl errors, implement schema, improve site structure' },
    { step: '6', title: 'Ongoing Support', desc: 'Monthly monitoring, updates, and strategy refinements' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful WordPress sites ranking on page 1 of Google with measurable ROI.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'See initial improvements within 30 days. Full campaigns deliver results in 90-120 days.'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or long-term contracts. Clear pricing and month-to-month flexibility.'
    },
    {
      icon: Target,
      title: 'Direct Access',
      description: 'Work directly with me, not junior staff. Personalized strategy and dedicated support.'
    }
  ]

  const faqs = [
    {
      question: 'Why is WordPress good for SEO?',
      answer: 'WordPress is inherently SEO-friendly with clean code, customizable permalinks, and extensive SEO plugins like Yoast and Rank Math that make optimization easier.',
    },
    {
      question: 'Which SEO plugin is best for WordPress?',
      answer: 'Yoast SEO and Rank Math are the top choices. Yoast is user-friendly and comprehensive, while Rank Math offers more advanced features and better performance.',
    },
    {
      question: 'How do I optimize WordPress site speed for SEO?',
      answer: 'Use caching plugins (WP Rocket, W3 Total Cache), optimize images, use a CDN, minimize CSS/JS, choose lightweight themes, and use quality hosting.',
    },
    {
      question: 'Do WordPress themes affect SEO?',
      answer: 'Yes! Theme speed, mobile responsiveness, clean code, and schema markup support all impact SEO. Choose well-coded, lightweight themes from reputable developers.',
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
                "@id": "https://adeelahmad.com/services/wordpress-seo#service",
                "serviceType": "WordPress SEO Services",
                "name": "WordPress SEO Services",
                "description": "Expert WordPress SEO optimization including Yoast and Rank Math configuration, page speed optimization, schema markup, and WooCommerce SEO to achieve higher rankings and traffic.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "WordPress SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/wordpress-seo#webpage",
                "url": "https://adeelahmad.com/services/wordpress-seo",
                "name": "WordPress SEO Services | Yoast & Rank Math Expert",
                "description": "Expert WordPress SEO optimization including plugin configuration and page speed optimization.",
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
                    "name": "WordPress SEO",
                    "item": "https://adeelahmad.com/services/wordpress-seo"
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
        {/* Hero Section */}
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

          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
              {/* Left Content - 3 columns */}
              <div className="lg:col-span-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-12 h-12 text-cyan-400" viewBox="0 0 122.52 122.523" fill="currentColor">
                    <g>
                      <path d="M8.708,61.26c0,20.802,12.089,38.779,29.619,47.298L11.354,33.331C9.674,41.833,8.708,50.729,8.708,61.26z"/>
                      <path d="M96.74,58.608c0-6.495-2.333-10.993-4.334-14.494c-2.664-4.329-5.161-7.995-5.161-12.324c0-4.831,3.664-9.328,8.825-9.328c0.233,0,0.454,0.029,0.681,0.042c-9.35-8.566-21.807-13.796-35.489-13.796c-18.36,0-34.513,9.42-43.91,23.688c1.233,0.037,2.395,0.063,3.382,0.063c5.497,0,14.006-0.667,14.006-0.667c2.833-0.167,3.167,3.994,0.337,4.329c0,0-2.847,0.335-6.015,0.501l19.138,56.925l11.501-34.493l-8.188-22.434c-2.83-0.166-5.511-0.501-5.511-0.501c-2.832-0.166-2.5-4.496,0.332-4.329c0,0,8.679,0.667,13.843,0.667c5.496,0,14.006-0.667,14.006-0.667c2.835-0.167,3.168,3.994,0.337,4.329c0,0-2.853,0.335-6.015,0.501l18.992,56.494l5.242-17.517C95.719,73.773,96.74,64.537,96.74,58.608z"/>
                      <path d="M62.184,65.857l-15.768,45.819c4.708,1.384,9.687,2.141,14.846,2.141c6.12,0,11.989-1.058,17.452-2.979c-0.141-0.225-0.269-0.464-0.374-0.724L62.184,65.857z"/>
                      <path d="M107.376,36.046c0.226,1.674,0.354,3.471,0.354,5.404c0,5.333-0.996,11.328-3.996,18.824l-16.053,46.413c15.624-9.111,26.133-26.038,26.133-45.426C113.814,51.994,111.465,43.494,107.376,36.046z"/>
                    </g>
                  </svg>
                  <span className="text-sm font-bold text-white">WordPress Platform</span>
                </div>

                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">WordPress SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-4 drop-shadow-lg">
                  Professional WordPress optimization to dominate search rankings and drive organic traffic
                </p>
                <p className="text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Expert configuration of Yoast SEO, RankMath, and All in One SEO plugins. Advanced theme optimization, speed enhancement, schema markup implementation, and technical SEO mastery for WooCommerce, Elementor, and Gutenberg sites.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/contact"
                    className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Get Free WordPress Audit
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
        <SEOFramework faqs={seoFrameworkFaqs} industry="WordPress Development" />

        {/* Section 3: Why Choose Me */}
        <WhyChooseMe industry="WordPress" />

        {/* Section 4: Features Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950/30 to-indigo-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <svg className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose WordPress SEO?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">WordPress powers 40%+ of all websites. Optimize it correctly and dominate your niche.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="WordPress Development" />

        {/* Industry Statistics */}
        <IndustryStats 
          industry="WordPress"
          stats={[
            { value: "43%", label: "of all websites worldwide are powered by WordPress", icon: <FaGlobe className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "65%", label: "of WordPress sites have untapped SEO potential", icon: <FaChartLine className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
            { value: "2.5x", label: "faster ranking improvements with proper WordPress optimization", icon: <FaBolt className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "89%", label: "of WordPress SEO issues come from plugin conflicts or themes", icon: <FaWrench className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
          ]}
        />

        {/* My process */}
        <ProcessTimeline 
          industry="WordPress"
          steps={[
            { step: 1, title: "WordPress Site Audit", description: "We analyze your WordPress installation, theme, plugins, database, and current SEO settings to identify optimization opportunities.", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "Technical Optimization", description: "We fix WordPress-specific issues: plugin conflicts, theme SEO settings, permalink structure, XML sitemaps, and robots.txt configuration.", icon: <FaCog className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Speed Optimization", description: "I optimize Core Web Vitals through caching, image compression, database cleanup, and CDN implementation.", icon: <FaBolt className="w-6 h-6" />, duration: "Weeks 2-3" },
            { step: 4, title: "On-Page SEO Setup", description: "We configure Yoast/RankMath, optimize meta tags, implement schema markup, and structure internal linking.", icon: <FaFileAlt className="w-6 h-6" />, duration: "Weeks 3-4" },
            { step: 5, title: "Content Strategy", description: "I develop a content plan leveraging WordPress's blogging power for topic clusters and semantic SEO.", icon: <FaPencilAlt className="w-6 h-6" />, duration: "Weeks 4-8" },
            { step: 6, title: "Monitor & Maintain", description: "We track rankings, monitor plugin updates, and ensure ongoing WordPress security and SEO performance.", icon: <FaChartArea className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Clusters */}
        <TopicClusterSection 
          industry="WordPress"
          pillars={[
            { title: "Technical WordPress SEO", description: "Core optimization for WordPress architecture and settings", topics: ["Plugin configuration", "Theme optimization", "Database cleanup", "Security hardening"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Speed & Performance", description: "Page speed optimization critical for WordPress rankings", topics: ["Caching setup", "Image optimization", "CDN integration", "Core Web Vitals"], icon: <FaBolt className="w-6 h-6" /> },
            { title: "Content & Blogging", description: "Leveraging WordPress's content management strengths", topics: ["Blog strategy", "Category structure", "Internal linking", "Content updates"], icon: <FaPencilAlt className="w-6 h-6" /> },
            { title: "Plugin Ecosystem", description: "Maximizing SEO plugins without conflicts or bloat", topics: ["SEO plugin setup", "Schema plugins", "Speed plugins", "Analytics integration"], icon: <FaPlug className="w-6 h-6" /> }
          ]}
        />

        {/* Technical SEO Signals for WordPress */}
        <LocalSEOSignals 
          industry="WordPress"
          signals={[
            { title: "Yoast/RankMath Setup", description: "Proper configuration of WordPress SEO plugins for maximum effectiveness", importance: "Critical", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Core Web Vitals", description: "Optimizing LCP, FID, and CLS scores for WordPress sites", importance: "Critical", icon: <FaBolt className="w-6 h-6" /> },
            { title: "XML Sitemap Generation", description: "Dynamic sitemaps that update with new WordPress content", importance: "High", icon: <FaMap className="w-6 h-6" /> },
            { title: "Schema Markup", description: "Structured data implementation using WordPress plugins", importance: "High", icon: <FaClipboardList className="w-6 h-6" /> },
            { title: "Mobile Responsiveness", description: "Ensuring WordPress themes are fully mobile-optimized", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Security & SSL", description: "HTTPS implementation and WordPress security hardening", importance: "Medium", icon: <FaLock className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="WordPress"
          comparisons={[
            { feature: "Technical SEO", withSEO: "Fully optimized WordPress architecture", withoutSEO: "Default settings hurting rankings" },
            { feature: "Page Speed", withSEO: "Sub-2 second load times", withoutSEO: "Slow, bloated WordPress site" },
            { feature: "Plugin Conflicts", withSEO: "Streamlined, conflict-free setup", withoutSEO: "SEO plugins fighting each other" },
            { feature: "Content Strategy", withSEO: "Topic clusters driving traffic", withoutSEO: "Random blog posts with no strategy" },
            { feature: "Search Visibility", withSEO: "Properly indexed and ranking", withoutSEO: "Pages blocked or de-indexed" },
            { feature: "Maintenance", withSEO: "Regular updates without breaking SEO", withoutSEO: "Updates causing ranking drops" }
          ]}
        />

        {/* Case Study */}
        <CaseStudyHighlight 
          industry="WordPress"
          caseStudy={{
            title: "WordPress Site SEO Transformation",
            industry: "WordPress",
            results: [
              { metric: "Organic Traffic", value: "425%", change: "increase in 5 months" },
              { metric: "Page Speed", value: "92", change: "Google PageSpeed score" },
              { metric: "Keywords Ranked", value: "150+", change: "on first page" },
              { metric: "Revenue Growth", value: "287%", change: "from organic traffic" }
            ],
            testimonial: "Our WordPress site went from barely ranking to dominating our niche. The technical optimization alone doubled our traffic before content changes even kicked in.",
            clientName: "WordPress Site Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="WordPress"
          customItems={[
            { icon: <FaCircle className="w-6 h-6" />, title: "WordPress Expert Since 2012", description: "Over a decade of WordPress-specific SEO experience" },
            { icon: <FaPlug className="w-6 h-6" />, title: "Plugin Ecosystem Mastery", description: "Deep knowledge of SEO, caching, and performance plugins" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Speed Optimization Specialist", description: "Proven ability to achieve 90+ PageSpeed scores" },
            { icon: <FaWrench className="w-6 h-6" />, title: "Technical WordPress SEO", description: "Expertise in WordPress architecture and database optimization" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Content Strategy Focus", description: "Leveraging WordPress blogging power for SEO dominance" },
            { icon: <FaLock className="w-6 h-6" />, title: "Security-First Approach", description: "SEO improvements that don't compromise site security" }
          ]}
        />

        <TopSEOServices />

        {/* Section 7: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="wordpress-seo" />

        {/* Section 8: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-cyan-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About WordPress SEO" />



        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with WordPress SEO?</h2>
            <p className="text-xl text-blue-100 mb-8">Get a comprehensive WordPress SEO audit and custom strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all shadow-xl hover:scale-105"
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
