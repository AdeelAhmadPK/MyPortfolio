import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
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
import { FaBolt, FaBuilding, FaBullseye, FaChartArea, FaChartLine, FaClipboardList, FaCog, FaDollarSign, FaEdit, FaGlobe, FaLaptop, FaMobileAlt, FaPalette, FaSearch, FaWrench } from 'react-icons/fa';;

export const metadata: Metadata = {
  title: 'Wix SEO Services | Optimize Your Wix Website Rankings',
  description: 'Professional Wix SEO to improve visibility and rankings. Technical optimization, Wix Turbo speed setup, and SEO best practices for Wix websites.',
  keywords: 'Wix SEO, Wix SEO services, Wix optimization, Wix website SEO, Wix technical SEO, Wix speed optimization, Wix SEO expert, Wix SEO agency, Wix site optimization, Wix rankings, Wix SEO settings, Wix SEO consultant, Wix organic traffic',
}

export default function WixSEOPage() {
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
      question: 'Is Wix really bad for SEO or is that a myth?',
      answer: 'It\'s a myth from Wix\'s early days! Modern Wix has excellent SEO capabilities including clean HTML5, customizable meta tags, automatic sitemaps, mobile optimization, and fast hosting with CDN. The "Wix is bad for SEO" reputation is outdated. With proper optimization, Wix sites rank competitively against WordPress and custom sites.'
    },
    {
      question: 'How do I use Wix SEO Wiz effectively?',
      answer: 'SEO Wiz creates a customized checklist based on your industry and goals. Complete all steps including keyword research, connecting Google Search Console, optimizing site structure, adding business info, and implementing technical SEO. We enhance SEO Wiz recommendations with advanced strategies for maximum impact.'
    },
    {
      question: 'Can Wix sites rank on Google\'s first page?',
      answer: 'Absolutely! We\'ve helped dozens of Wix sites reach #1 rankings for competitive keywords. Success depends on content quality, technical optimization, user experience, and backlinks - not the platform. Wix\'s modern infrastructure, combined with expert SEO, delivers excellent results. Platform matters less than optimization quality.'
    },
    {
      question: 'What are Wix\'s main SEO limitations I should know?',
      answer: 'Main limitations include less URL customization than WordPress, limited control over site architecture with many pages, slower speeds than optimized custom sites, and fewer third-party integrations. However, these are manageable with proper strategy. I work within Wix\'s framework to maximize results despite limitations.'
    },
    {
      question: 'How do I improve Wix site speed for better SEO?',
      answer: 'Compress all images before uploading (use TinyPNG), minimize installed apps (each slows the site), enable Wix Turbo in site settings, use Wix\'s image optimization tools, minimize custom code, choose performance-focused templates, implement lazy loading, and leverage the built-in CDN. Speed optimization is crucial for Wix SEO.'
    },
    {
      question: 'Should I use Wix ADI or Wix Editor for better SEO?',
      answer: 'Wix Editor gives more SEO control. ADI (Artificial Design Intelligence) is faster but limits customization. For serious SEO, use Wix Editor or Velo (advanced development platform) which allow custom meta tags, code injection, and fine-tuned optimization. I recommend Editor for all SEO-focused projects.'
    },
    {
      question: 'How do I optimize Wix page speed when using multiple apps?',
      answer: 'Minimize apps to only essentials - each app adds code and slows loading. Choose well-coded apps from verified developers. Test speed before/after installing apps. Use app alternatives when possible (native Wix features over apps). Prioritize speed-critical pages by limiting apps. We audit all apps for performance impact.'
    },
    {
      question: 'Can blog content help my Wix site rank better?',
      answer: 'Yes! Wix\'s blog feature is excellent for SEO. Create keyword-targeted posts, use categories and tags strategically, implement internal linking to services, optimize blog post URLs, add images with alt text, and update old posts regularly. Consistent blogging builds topical authority and drives qualified traffic.'
    },
    {
      question: 'How do I handle mobile optimization on Wix?',
      answer: 'Wix automatically creates mobile versions, but you must optimize separately. Check mobile editor for layout issues, ensure text is readable without zooming, optimize mobile load speed, test touch targets (buttons/links), verify forms work properly, and check mobile preview in SEO Wiz. Mobile-first is critical for rankings.'
    },
    {
      question: 'What about Wix template limitations for SEO?',
      answer: 'Templates vary in SEO quality. Choose templates with clean structure, fast loading, proper heading hierarchy, and mobile responsiveness. You can customize any template for SEO, but starting with a good foundation saves time. We evaluate templates before selection and optimize the structure for search engines.'
    },
    {
      question: 'How long does Wix SEO take to show results?',
      answer: 'Typically 3-6 months for significant improvements. Wix sites may take slightly longer than WordPress initially due to platform perception, but catch up quickly with proper optimization. Local businesses see results faster (60-90 days). Competitive industries require 4-6 months. Consistency and quality content accelerate results.'
    },
    {
      question: 'Do I need backlinks for Wix SEO?',
      answer: 'Yes, backlinks are crucial for any platform. I build links through content marketing, business directories, industry publications, guest posting, digital PR, and partnerships. Quality links signal authority to Google. One authoritative link from a major publication beats 100 low-quality directory links.'
    },
    {
      question: 'How do I compete against WordPress sites with my Wix site?',
      answer: 'Focus on Wix\'s advantages: easier maintenance, built-in hosting, automatic updates, and designer-friendly interface. Create superior content, optimize for user experience, build quality backlinks, target long-tail keywords, and leverage local SEO. Success comes from execution, not platform. We\'ve beaten WordPress sites with Wix repeatedly.'
    },
    {
      question: 'Should I migrate from Wix to WordPress for better SEO?',
      answer: 'Usually not necessary! Migration is risky, expensive, and time-consuming. Modern Wix handles SEO well. Only migrate if you need specific WordPress features unrelated to SEO. We\'ve consistently improved Wix sites without migration. Fix SEO issues rather than changing platforms - it\'s more cost-effective.'
    },
    {
      question: 'How do reviews and ratings impact Wix SEO?',
      answer: 'Reviews are powerful! They provide fresh content, include natural keywords, improve conversion rates, build trust, and review schema shows star ratings in search results. Use Wix\'s review apps or third-party solutions like Trustpilot. I implement review systems and optimize schema markup for maximum visibility.'
    },
    {
      question: 'Can I track ROI from Wix SEO?',
      answer: 'Absolutely! We set up Google Analytics 4, conversion tracking, form submission tracking, phone call tracking, and goal funnels. You\'ll see exactly which keywords drive conversions, ROI from organic traffic, customer journey analysis, and revenue attribution. Data-driven optimization maximizes your investment.'
    },
    {
      question: 'How do I optimize Wix e-commerce stores for SEO?',
      answer: 'Optimize product titles with keywords, write unique 300+ word descriptions, use high-quality images with alt text, implement product schema markup, create category pages with unique content, add customer reviews, optimize checkout flow, and create content that links to products. Wix e-commerce has strong SEO potential.'
    }
  ];

  const features = [
    'Wix site SEO audit and analysis',
    'Wix SEO Wiz configuration',
    'Page speed and performance optimization',
    'Mobile responsiveness enhancement',
    'Wix app integration for SEO',
    'Custom code injection for advanced SEO',
  ]

  const benefits = [
    { icon: <FaPalette className="w-6 h-6" />, title: 'Drag & Drop SEO', desc: 'Optimize Wix sites with visual builder advantages' },
    { icon: <FaBolt className="w-6 h-6" />, title: 'Wix Turbo Speed', desc: 'Leverage Wix Turbo for lightning-fast load times' },
    { icon: <FaWrench className="w-6 h-6" />, title: 'SEO Wiz Setup', desc: 'Expert configuration of Wix SEO Wiz for best results' },
    { icon: <FaMobileAlt className="w-6 h-6" />, title: 'Mobile Perfect', desc: 'Dual optimization for desktop and mobile versions' },
    { icon: <FaBullseye className="w-6 h-6" />, title: 'App Integration', desc: 'SEO apps and tools configured for maximum impact' },
    { icon: <FaDollarSign className="w-6 h-6" />, title: 'ROI Focused', desc: 'Strategies that drive conversions and revenue' },
  ]

  const process = [
    { step: '1', title: 'Wix Site Audit', desc: 'Comprehensive analysis of your Wix site and SEO Wiz setup' },
    { step: '2', title: 'SEO Wiz Config', desc: 'Optimize Wix SEO Wiz and built-in SEO features' },
    { step: '3', title: 'Speed Optimization', desc: 'Implement Wix Turbo, image optimization, and performance tweaks' },
    { step: '4', title: 'Content Optimization', desc: 'Optimize page content, headings, and meta tags for keywords' },
    { step: '5', title: 'Technical SEO', desc: 'Fix technical issues, implement schema markup, improve structure' },
    { step: '6', title: 'Ongoing Monitoring', desc: 'Monthly tracking, updates, and continuous improvement' },
  ]

  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful Wix sites ranking on page 1 of Google with measurable ROI.'
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
      question: 'Is Wix bad for SEO?',
      answer: 'No longer! Wix has dramatically improved its SEO capabilities. With proper optimization, Wix sites can rank well. However, it requires more manual work than WordPress.',
    },
    {
      question: 'Can Wix sites rank on Google?',
      answer: 'Yes, Wix sites can and do rank well on Google. Success depends on proper SEO setup, quality content, and ongoing optimization efforts.',
    },
    {
      question: 'How do I improve Wix site speed?',
      answer: 'Compress images, minimize apps, use Wix Turbo, enable lazy loading, optimize code, and choose performance-focused templates.',
    },
    {
      question: 'What are Wix SEO limitations?',
      answer: 'Limited control over URL structure, slower speeds compared to some platforms, and fewer advanced SEO plugin options than WordPress.',
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
                "@id": "https://adeelahmad.com/services/wix-seo#service",
                "serviceType": "Wix SEO Services",
                "name": "Wix SEO Services",
                "description": "Professional Wix SEO optimization including SEO Wiz configuration, Wix Turbo speed setup, mobile optimization, and technical SEO to improve visibility and rankings for Wix websites.",
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "Wix SEO Specialist"
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
                "@id": "https://adeelahmad.com/services/wix-seo#webpage",
                "url": "https://adeelahmad.com/services/wix-seo",
                "name": "Wix SEO Services | Optimize Your Wix Website Rankings",
                "description": "Professional Wix SEO to improve visibility and rankings. Technical optimization, Wix Turbo speed setup, and SEO best practices for Wix websites.",
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
                    "name": "Wix SEO",
                    "item": "https://adeelahmad.com/services/wix-seo"
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                  <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.444 6.838l1.087-2.535a.536.536 0 01.986 0l1.087 2.535 2.535 1.088a.536.536 0 010 .986l-2.535 1.087-1.087 2.535a.536.536 0 01-.986 0l-1.087-2.535-2.535-1.087a.536.536 0 010-.986l2.535-1.088zM4.917 15.001l1.358-3.168a.67.67 0 011.231 0l1.358 3.168 3.168 1.359a.67.67 0 010 1.231l-3.168 1.358-1.358 3.168a.67.67 0 01-1.231 0l-1.358-3.168-3.168-1.358a.67.67 0 010-1.231l3.168-1.359zM16.277 15.001l1.358-3.168a.67.67 0 011.231 0l1.358 3.168 3.168 1.359a.67.67 0 010 1.231l-3.168 1.358-1.358 3.168a.67.67 0 01-1.231 0l-1.358-3.168-3.168-1.358a.67.67 0 010-1.231l3.168-1.359z"/>
                  </svg>
                  <span className="text-sm font-bold text-white">Wix Platform</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">Wix SEO</span> <span className="text-white">Services</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-4 drop-shadow-lg">
                  Professional Wix optimization for better search rankings and visibility
                </p>
                <p className="text-base md:text-lg text-slate-300 mb-8 drop-shadow-lg">
                  Expert Wix Studio and Editor X optimization including Corvid/Velo code implementation, dynamic page SEO, Wix Stores enhancement, and platform-specific strategies to overcome Wix's SEO limitations and achieve top rankings.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">320%</div>
                    <div className="text-sm text-slate-300">Traffic Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Top 5</div>
                    <div className="text-sm text-slate-300">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title="Get Your Free Wix SEO Audit"
                  subtitle="Discover how to dominate Wix search results"
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: SEO Framework with 15+ FAQs */}
        <SEOFramework faqs={seoFrameworkFaqs} industry="Wix Website Building" />

        {/* Section 3: Why Choose Me */}
        <WhyChooseMe industry="Wix" />

        {/* Section 4: Custom Service Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-950/30 to-pink-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <svg className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
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
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Wix SEO?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Unlock the full SEO potential of your Wix website with expert optimization</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Hire Best LOCAL SEO Specialist */}
        <HireLocalSEO industry="Wix Website Building" />

        {/* Industry Stats Section */}
        <IndustryStats 
          industry="Wix" 
          stats={[
            { value: "200M+", label: "websites created on Wix platform globally", icon: <FaGlobe className="w-6 h-6" />, color: "from-purple-500 to-pink-500" },
            { value: "91%", label: "of small businesses use website builders like Wix", icon: <FaBuilding className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
            { value: "76%", label: "of Wix sites lack proper SEO optimization", icon: <FaSearch className="w-6 h-6" />, color: "from-yellow-500 to-orange-500" },
            { value: "3.8x", label: "higher traffic with expert Wix SEO", icon: <FaDollarSign className="w-6 h-6" />, color: "from-green-500 to-emerald-500" }
          ]}
        />

        {/* Wix SEO Process */}
        <ProcessTimeline 
          industry="Wix" 
          steps={[
            { step: 1, title: "Wix Site Audit", description: "Complete analysis of your Wix site and SEO Wiz setup", icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
            { step: 2, title: "SEO Wiz Config", description: "Optimize Wix SEO Wiz and built-in features", icon: <FaWrench className="w-6 h-6" />, duration: "Week 2" },
            { step: 3, title: "Speed Optimization", description: "Implement Wix Turbo and performance tweaks", icon: <FaBolt className="w-6 h-6" />, duration: "Weeks 2-3" },
            { step: 4, title: "Content Optimization", description: "Optimize pages, headings, and meta tags", icon: <FaEdit className="w-6 h-6" />, duration: "Weeks 3-5" },
            { step: 5, title: "Mobile Optimization", description: "Perfect mobile experience for rankings", icon: <FaMobileAlt className="w-6 h-6" />, duration: "Weeks 5-6" },
            { step: 6, title: "Track & Improve", description: "Monitor rankings and continuous optimization", icon: <FaChartArea className="w-6 h-6" />, duration: "Ongoing" }
          ]}
        />

        {/* Topic Cluster Section */}
        <TopicClusterSection 
          industry="Wix" 
          pillars={[
            { title: "Wix Technical SEO", description: "Technical optimization within Wix platform", topics: ["SEO Wiz setup", "Meta tags", "URL structure", "Sitemap config"], icon: <FaCog className="w-6 h-6" /> },
            { title: "Speed & Performance", description: "Optimize Wix site loading times", topics: ["Wix Turbo", "Image compression", "App optimization", "Lazy loading"], icon: <FaBolt className="w-6 h-6" /> },
            { title: "Content Optimization", description: "SEO-friendly content for Wix pages", topics: ["Page SEO", "Blog optimization", "Heading structure", "Internal linking"], icon: <FaEdit className="w-6 h-6" /> },
            { title: "Mobile & UX", description: "Mobile optimization and user experience", topics: ["Mobile editor", "Touch targets", "Mobile speed", "Responsive design"], icon: <FaMobileAlt className="w-6 h-6" /> }
          ]}
        />

        {/* Local SEO Signals */}
        <LocalSEOSignals 
          industry="Wix"
          signals={[
            { title: "SEO Wiz Configuration", description: "Properly configured Wix SEO Wiz settings", importance: "Critical", icon: <FaWrench className="w-6 h-6" /> },
            { title: "Page Speed", description: "Optimized loading with Wix Turbo enabled", importance: "Critical", icon: <FaBolt className="w-6 h-6" /> },
            { title: "Mobile Optimization", description: "Perfect mobile experience and editing", importance: "High", icon: <FaMobileAlt className="w-6 h-6" /> },
            { title: "Content Structure", description: "Proper headings and meta tags", importance: "High", icon: <FaEdit className="w-6 h-6" /> },
            { title: "Schema Markup", description: "Custom code for structured data", importance: "High", icon: <FaLaptop className="w-6 h-6" /> },
            { title: "App Optimization", description: "Minimal, well-chosen Wix apps", importance: "Medium", icon: <FaClipboardList className="w-6 h-6" /> }
          ]}
        />

        {/* Competitor Comparison */}
        <CompetitorComparison 
          industry="Wix"
          comparisons={[
            { feature: "Search Visibility", withSEO: "Competitive rankings against WordPress", withoutSEO: "Buried behind optimized competitors" },
            { feature: "SEO Wiz Setup", withSEO: "Expert configuration of all settings", withoutSEO: "Default or incomplete setup" },
            { feature: "Site Speed", withSEO: "Fast loading with Wix Turbo", withoutSEO: "Slow due to unoptimized content" },
            { feature: "Mobile Rankings", withSEO: "Optimized mobile experience", withoutSEO: "Poor mobile performance" },
            { feature: "Content Quality", withSEO: "Targeted, keyword-optimized pages", withoutSEO: "Generic, unfocused content" },
            { feature: "Lead Generation", withSEO: "Organic traffic driving sales", withoutSEO: "Zero organic visibility" }
          ]}
        />

        {/* Case Study Highlight */}
        <CaseStudyHighlight 
          industry="Wix"
          caseStudy={{
            title: "Small Business Wix Website",
            industry: "Wix",
            results: [
              { metric: "Organic Traffic", value: "275%", change: "increase in visitors" },
              { metric: "Keyword Rankings", value: "38", change: "first page keywords" },
              { metric: "Page Speed", value: "2.4s", change: "load time (from 7s)" },
              { metric: "Phone Inquiries", value: "165%", change: "increase in calls" }
            ],
            testimonial: "Everyone said Wix was bad for SEO, but now my site outranks my competitors. Proper optimization makes all the difference.",
            clientName: "Small Business Owner"
          }}
        />

        {/* Trust Signals */}
        <TrustSignals 
          industry="Wix"
          customItems={[
            { icon: <FaPalette className="w-6 h-6" />, title: "Wix SEO Expert", description: "Deep expertise in Wix platform optimization" },
            { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Results", description: "Track record of ranking Wix sites" },
            { icon: <FaBolt className="w-6 h-6" />, title: "Speed Specialist", description: "Expert in Wix Turbo and performance" },
            { icon: <FaMobileAlt className="w-6 h-6" />, title: "Mobile Expert", description: "Perfect mobile optimization" },
            { icon: <FaWrench className="w-6 h-6" />, title: "SEO Wiz Master", description: "Expert configuration of Wix tools" },
            { icon: <FaDollarSign className="w-6 h-6" />, title: "ROI Focused", description: "Strategies that drive business results" }
          ]}
        />

        <TopSEOServices />

        {/* Section 7: Other Industries */}
        <IndustriesGrid industries={industries} currentIndustry="wix-seo" />

        {/* Section 8: Testimonials */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:from-slate-950 dark:via-purple-950/30 dark:to-pink-950/20">
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
        <FAQSection faqs={faqs} title="Common Questions About Wix SEO" />



        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Dominate with Wix SEO?</h2>
            <p className="text-xl text-purple-100 mb-8">Get a comprehensive Wix SEO audit and custom strategy tailored to your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-purple-600 font-bold hover:bg-purple-50 transition-all shadow-xl hover:scale-105"
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
