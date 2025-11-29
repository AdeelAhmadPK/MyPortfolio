import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroContactForm from '@/components/HeroContactForm'
import { countries } from '@/data/locations'
import { SemanticSEOSection, TopicCluster, EntityRelationship } from '@/components/seo'
import FAQSection from '@/components/seo/FAQSection'
import { FaBalanceScale, FaChartArea, FaHome, FaHospital, FaLaptop, FaShoppingCart, FaWrench } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'SEO Case Studies | Real Results & Success Stories',
  description: 'Proven SEO results with detailed metrics: 520% traffic growth, 720% ROI, and measurable business impact across 90+ countries. See real case studies and outcomes.',
  keywords: 'SEO case studies, SEO results, SEO success stories, SEO ROI, organic traffic growth, ranking improvements, SEO portfolio, client success stories, SEO before and after, proven SEO results',
  alternates: {
    canonical: 'https://adeelahmad.com/case-studies',
  },
  openGraph: {
    title: 'SEO Case Studies | Proven SEO Results & Success Stories',
    description: 'Real SEO success stories with detailed metrics: traffic growth, ranking improvements, lead generation, and ROI across multiple industries.',
    type: 'website',
    url: 'https://adeelahmad.com/case-studies',
  },
}

// Industry categories for filtering
const industries = [
  { id: 'all', name: 'All Industries', icon: <FaChartArea className="w-6 h-6" /> },
  { id: 'healthcare', name: 'Healthcare', icon: <FaHospital className="w-6 h-6" /> },
  { id: 'realestate', name: 'Real Estate', icon: <FaHome className="w-6 h-6" /> },
  { id: 'tech', name: 'Technology', icon: <FaLaptop className="w-6 h-6" /> },
  { id: 'homeservices', name: 'Home Services', icon: <FaWrench className="w-6 h-6" /> },
  { id: 'ecommerce', name: 'E-commerce', icon: <FaShoppingCart className="w-6 h-6" /> },
  { id: 'legal', name: 'Legal Services', icon: <FaBalanceScale className="w-6 h-6" /> },
];

const caseStudies = [
  {
    id: 1,
    client: 'Urban Dental Care',
    industry: 'Healthcare - Dentistry',
    industryId: 'healthcare',
    location: 'New York, USA',
    countryCode: 'US',
    challenge: 'Low local visibility and competition from 200+ dental practices in Manhattan. The clinic had no first-page rankings despite excellent patient reviews.',
    solution: 'Implemented comprehensive local SEO strategy including Google Business Profile optimization, local citation building across 150+ directories, geo-targeted content for each service area, and semantic content clusters for dental procedures.',
    approach: [
      'Complete technical SEO audit and fixes',
      'GBP optimization with weekly posts',
      'Local citation building (150+ directories)',
      'Service-area page creation (12 neighborhoods)',
      'Schema markup implementation',
      'Review acquisition strategy'
    ],
    results: {
      traffic: '+385%',
      rankings: '15 keywords in top 3',
      leads: '+420%',
      roi: '680%',
    },
    testimonial: 'Our phone started ringing within weeks. Adeel\'s local SEO strategy completely transformed our practice visibility.',
    testimonialAuthor: 'Dr. Sarah Mitchell',
    duration: '8 months',
    image: '🦷',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    client: 'Elite Property Group',
    industry: 'Real Estate',
    industryId: 'realestate',
    location: 'Toronto, Canada',
    countryCode: 'CA',
    challenge: 'Struggling to compete with large real estate portals like Zillow and Realtor.ca with zero organic traffic and no keyword rankings.',
    solution: 'Developed content-driven SEO strategy with 50+ neighborhood guides, property listings optimization with real estate schema, strategic link building from local news sites and real estate publications.',
    approach: [
      'Neighborhood guide content strategy',
      'Real estate schema implementation',
      'IDX integration SEO optimization',
      'Local PR and link building',
      'Market analysis content creation',
      'Video SEO for property tours'
    ],
    results: {
      traffic: '+540%',
      rankings: '28 keywords in top 3',
      leads: '+310%',
      roi: '520%',
    },
    testimonial: 'We went from invisible to dominating Toronto real estate searches. The ROI has been incredible.',
    testimonialAuthor: 'Michael Chen, CEO',
    duration: '10 months',
    image: '🏠',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 3,
    client: 'TechFix Solutions',
    industry: 'IT Services',
    industryId: 'tech',
    location: 'London, UK',
    countryCode: 'GB',
    challenge: 'Poor online presence despite excellent service quality. No first-page rankings for key B2B terms and losing contracts to competitors with better visibility.',
    solution: 'Technical SEO overhaul fixing 200+ issues, industry-specific content hub creation, B2B link acquisition from tech publications and industry directories.',
    approach: [
      'Technical SEO audit (200+ issues fixed)',
      'Service page optimization',
      'Case study content strategy',
      'B2B link building campaign',
      'Local business SEO (5 office locations)',
      'Thought leadership content'
    ],
    results: {
      traffic: '+625%',
      rankings: '42 keywords in top 3',
      leads: '+380%',
      roi: '750%',
    },
    testimonial: 'The systematic approach to SEO completely changed our lead generation. We\'re now the go-to IT partner in London.',
    testimonialAuthor: 'James Thompson, Director',
    duration: '6 months',
    image: '💻',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    client: 'Green Leaf Landscaping',
    industry: 'Home Services',
    industryId: 'homeservices',
    location: 'Sydney, Australia',
    countryCode: 'AU',
    challenge: 'Seasonal business with inconsistent lead flow. Limited online presence with competitors dominating local searches during peak season.',
    solution: 'Year-round local SEO strategy with seasonal content planning, video optimization for project showcases, aggressive review management to build social proof.',
    approach: [
      'Seasonal content calendar',
      'Google Business Profile optimization',
      'Before/after portfolio pages',
      'Video SEO for YouTube',
      'Review generation campaign',
      'Local service area expansion'
    ],
    results: {
      traffic: '+470%',
      rankings: '23 keywords in top 3',
      leads: '+395%',
      roi: '640%',
    },
    testimonial: 'We used to struggle in off-season. Now I have consistent leads year-round thanks to the content strategy.',
    testimonialAuthor: 'David Green, Owner',
    duration: '7 months',
    image: '🌿',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    client: 'Fashion Forward Boutique',
    industry: 'E-commerce - Fashion',
    industryId: 'ecommerce',
    location: 'Paris, France',
    countryCode: 'FR',
    challenge: 'High competition in fashion e-commerce with minimal organic sales. Large inventory but poor product page optimization.',
    solution: 'E-commerce SEO overhaul with product page optimization, category structure refinement, fashion blog content hub, and influencer-driven link building.',
    approach: [
      'Product page SEO optimization (500+ products)',
      'Category taxonomy restructure',
      'Fashion blog content strategy',
      'Influencer link building',
      'International SEO (5 markets)',
      'Rich snippet implementation'
    ],
    results: {
      traffic: '+720%',
      rankings: '56 keywords in top 3',
      leads: '+890%',
      roi: '920%',
    },
    testimonial: 'Our organic revenue increased 10x. The category restructure alone improved our conversions dramatically.',
    testimonialAuthor: 'Marie Laurent, Founder',
    duration: '12 months',
    image: '👗',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 6,
    client: 'Prime Legal Associates',
    industry: 'Legal Services',
    industryId: 'legal',
    location: 'Dubai, UAE',
    countryCode: 'AE',
    challenge: 'New firm with zero online presence in highly competitive legal market. Large established firms dominated all key search terms.',
    solution: 'Authority-building SEO with comprehensive practice area content, legal guides targeting high-intent queries, strategic PR placements in legal publications.',
    approach: [
      'Practice area content hubs',
      'Legal guide creation (25+ guides)',
      'FAQ schema implementation',
      'PR link building campaign',
      'Multi-language SEO (Arabic/English)',
      'Lawyer profile optimization'
    ],
    results: {
      traffic: '+580%',
      rankings: '31 keywords in top 3',
      leads: '+450%',
      roi: '780%',
    },
    testimonial: 'From zero visibility to being found for competitive terms like "corporate lawyer Dubai". Game-changing results.',
    testimonialAuthor: 'Hassan Al-Rashid, Managing Partner',
    duration: '9 months',
    image: '⚖️',
    color: 'from-amber-500 to-orange-500',
  },
];

export default function CaseStudiesPage() {
  const topCountries = countries.slice(0, 8);
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/30" itemScope itemType="https://schema.org/CollectionPage">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-slate-500 hover:text-blue-600 transition-colors">Home</Link></li>
                <li><span className="text-slate-400">/</span></li>
                <li><span className="text-blue-600 font-medium">Case Studies</span></li>
              </ol>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200/50 dark:border-blue-800/50 mb-6 backdrop-blur-sm">
                <span className="text-2xl">📊</span>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Real Results, Verified Metrics</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6" itemProp="name">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  SEO Success Stories
                </span>
                <br />
                <span className="text-slate-900 dark:text-white text-3xl sm:text-4xl">That Deliver Real Business Impact</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed" itemProp="description">
                Discover how businesses across <strong>{countries.length}+ countries</strong> have achieved remarkable growth through 
                strategic SEO. Each case study includes detailed methodology, timeline, and verified results.
              </p>

              {/* Stats Overview - Enhanced */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">250+</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Projects Completed</div>
                </div>
                <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">520%</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Avg. Traffic Growth</div>
                </div>
                <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">98%</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Client Satisfaction</div>
                </div>
                <div className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                  <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">720%</div>
                  <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Average ROI</div>
                </div>
              </div>

              {/* Industry Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
                  >
                    <span>{industry.icon}</span>
                    <span>{industry.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <HeroContactForm 
              title="Get Your Free SEO Audit"
              subtitle="Discover what's holding your website back from page 1 rankings"
              buttonText="Get Free Consultation"
            />
          </div>
        </section>

        {/* Case Studies Grid - Redesigned */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.id}
                  className="group relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 dark:border-slate-800"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.color}`} />
                  
                  {/* Card Header */}
                  <div className="relative p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className={`text-6xl p-4 rounded-2xl bg-gradient-to-br ${study.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                          {study.image}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                            {study.client}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{study.industry}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-500 dark:text-slate-400 text-sm">{study.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`bg-gradient-to-r ${study.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {study.duration}
                      </div>
                    </div>

                    {/* Results Grid - Featured */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {study.results.traffic}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Traffic</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
                          {study.results.rankings}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Rankings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                          {study.results.leads}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-pink-600 to-pink-800 bg-clip-text text-transparent">
                          {study.results.roi}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-1">ROI</div>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <div className="space-y-4">
                      <details className="group/details">
                        <summary className="cursor-pointer list-none">
                          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-slate-700 dark:text-slate-300">Challenge</span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-open/details:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>
                        <div className="mt-2 p-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {study.challenge}
                        </div>
                      </details>

                      <details className="group/details">
                        <summary className="cursor-pointer list-none">
                          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="font-semibold text-slate-700 dark:text-slate-300">Solution & Approach</span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-open/details:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>
                        <div className="mt-2 p-4 space-y-3">
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{study.solution}</p>
                          <ul className="space-y-2">
                            {study.approach.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>

                      <details className="group/details">
                        <summary className="cursor-pointer list-none">
                          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                </svg>
                              </div>
                              <span className="font-semibold text-slate-700 dark:text-slate-300">Client Testimonial</span>
                            </div>
                            <svg className="w-5 h-5 text-slate-400 group-open/details:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </summary>
                        <div className="mt-2 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl">
                          <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed mb-3">
                            "{study.testimonial}"
                          </p>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">
                            — {study.testimonialAuthor}
                          </p>
                        </div>
                      </details>
                    </div>

                    {/* CTA Button */}
                    <button className={`mt-6 w-full bg-gradient-to-r ${study.color} text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-[1.02]`}>
                      <span>Read Complete Case Study</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Semantic SEO Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <SemanticSEOSection
              id="case-studies-semantic"
              title="SEO Case Studies and Success Stories"
              description="Comprehensive collection of verified SEO case studies demonstrating proven strategies, measurable outcomes, and real business impact across multiple industries and markets."
              keywords={[
                'Local SEO',
                'E-commerce SEO',
                'Technical SEO',
                'Content Marketing',
                'Link Building',
                'Conversion Rate Optimization',
                'Google Business Profile',
                'Organic Traffic Growth',
                'Keyword Rankings',
                'ROI Measurement'
              ]}
            />
          </div>
        </section>

        {/* Topic Clusters Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TopicCluster
              pillarTitle="SEO Success Measurement"
              pillarDescription="Comprehensive metrics and KPIs used to measure SEO campaign success, from traffic growth to revenue impact"
              clusters={[
                {
                  title: 'Traffic Growth Metrics',
                  description: 'Organic traffic analysis, user engagement metrics, traffic quality assessment, conversion tracking, and revenue attribution',
                  link: '/services',
                  type: 'cluster',
                  keywords: ['Organic traffic', 'User engagement', 'Conversions']
                },
                {
                  title: 'Ranking Performance',
                  description: 'Keyword position tracking, SERP feature visibility, competitor ranking analysis, local pack rankings, and featured snippet capture',
                  link: '/services',
                  type: 'cluster',
                  keywords: ['Rankings', 'SERP features', 'Local pack']
                },
                {
                  title: 'Business Impact',
                  description: 'Lead generation growth, revenue increase, ROI calculation, customer acquisition cost, and lifetime value optimization',
                  link: '/services',
                  type: 'cluster',
                  keywords: ['ROI', 'Revenue', 'Lead generation']
                },
                {
                  title: 'Technical Improvements',
                  description: 'Core Web Vitals optimization, crawl efficiency, index coverage, mobile performance, and site architecture',
                  link: '/services',
                  type: 'cluster',
                  keywords: ['Core Web Vitals', 'Technical SEO', 'Site speed']
                }
              ]}
            />
          </div>
        </section>

        {/* Entity Relationships */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-950/30 dark:to-indigo-950/30">
          <div className="max-w-7xl mx-auto">
            <EntityRelationship
              title="SEO Expertise & Services"
              description="Comprehensive SEO services and expertise demonstrated through proven case studies"
              entities={[
                { id: 'consultant', name: 'Professional SEO Consultant', type: 'person', description: 'Expert SEO specialist with proven track record', link: '/about' },
                { id: 'analysis', name: 'Case Study Analysis', type: 'service', description: 'Detailed performance analysis and reporting', link: '/case-studies' },
                { id: 'metrics', name: 'Performance Metrics', type: 'concept', description: 'Key performance indicators and success metrics' },
                { id: 'strategy', name: 'SEO Strategy', type: 'service', description: 'Comprehensive SEO strategy development', link: '/services' },
                { id: 'growth', name: 'Business Growth', type: 'concept', description: 'Measurable business impact and revenue growth' },
                { id: 'success', name: 'Client Success', type: 'concept', description: 'Client satisfaction and long-term success' },
                { id: 'expertise', name: 'Industry Expertise', type: 'concept', description: 'Deep knowledge across multiple industries', link: '/industries' },
                { id: 'results', name: 'Proven Results', type: 'concept', description: 'Documented success stories and outcomes' },
                { id: 'roi', name: 'ROI Optimization', type: 'service', description: 'Maximizing return on investment', link: '/services' }
              ]}
              centralEntity="consultant"
              variant="cards"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FAQSection
              faqs={[
                {
                  question: 'How do you measure the success of SEO campaigns?',
                  answer: 'SEO success is measured through multiple KPIs including organic traffic growth, keyword ranking improvements, lead generation increase, conversion rate optimization, and ultimately revenue impact. Each case study includes detailed metrics tracked through Google Analytics, Search Console, and ranking tools, providing transparent visibility into campaign performance.'
                },
                {
                  question: 'What industries do your case studies cover?',
                  answer: 'Our case studies span diverse industries including healthcare (dentistry, medical practices), legal services, real estate, home services (HVAC, plumbing, roofing), e-commerce, technology, B2B services, and more. Each industry requires unique SEO strategies based on competitive landscape, user intent, and search behavior patterns.'
                },
                {
                  question: 'How long does it typically take to see SEO results?',
                  answer: 'Most clients see initial improvements within 30-60 days, with significant results appearing in 3-6 months. The timeline varies based on factors like current site health, competition level, implementation speed, and strategy scope. Our case studies demonstrate realistic timelines from 6-12 months for substantial business impact.'
                },
                {
                  question: 'What makes your SEO approach different from competitors?',
                  answer: 'My approach follows Koray Tuğberk GÜBÜR\'s Semantic SEO methodology, focusing on topical authority, entity optimization, and comprehensive content networks rather than outdated keyword tactics. This results in more sustainable rankings, better user engagement, and stronger business outcomes as demonstrated in our case studies.'
                },
                {
                  question: 'Do you provide ongoing support after initial optimization?',
                  answer: 'Yes, SEO requires continuous optimization. All case study clients receive ongoing monthly support including performance monitoring, algorithm update adjustments, content strategy refinement, technical maintenance, and competitive analysis. This ensures sustained growth and adaptation to market changes.'
                },
                {
                  question: 'Can you guarantee specific ranking positions or traffic increases?',
                  answer: 'While I cannot guarantee specific positions due to search engine algorithm variability, our case studies demonstrate consistent patterns of significant traffic growth (average 520%), improved rankings, and strong ROI (average 720%). I focus on sustainable, white-hat strategies that deliver long-term business value.'
                },
                {
                  question: 'How do you handle different international markets?',
                  answer: 'International SEO requires understanding local search behaviors, language nuances, and cultural contexts. Our case studies from 90+ countries demonstrate expertise in hreflang implementation, localized content strategy, international link building, and region-specific technical optimization.'
                },
                {
                  question: 'What information do you need to create a custom SEO strategy?',
                  answer: 'We start with a comprehensive SEO audit analyzing your current site performance, competitive landscape, target audience, business goals, and existing marketing efforts. This includes technical analysis, content evaluation, backlink profile assessment, and keyword research to develop a data-driven strategy tailored to your specific needs.'
                }
              ]}
            />
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Serving Clients Worldwide
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our case studies represent success stories from businesses across {countries.length}+ countries. 
                Proven SEO strategies adapted for local markets, languages, and competitive landscapes.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {topCountries.map((country) => (
                <Link
                  key={country.code}
                  href={`/${country.code.toLowerCase()}`}
                  className="group relative bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 dark:border-slate-700"
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {country.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <span>See All Countries</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss How I can help you achieve similar results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Get Your Free SEO Audit
                </Link>
                <Link
                  href="/services"
                  className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 border-2 border-white/20"
                >
                  Explore My services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
