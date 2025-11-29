import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { getCountryContent } from '@/data/countryContent';
import { getFlagColors } from '@/data/flagColors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SemanticSEOSection } from '@/components/seo/SemanticSEOSection';
import { TopicCluster } from '@/components/seo/TopicCluster';
import { EntityRelationship } from '@/components/seo/EntityRelationship';
import CitiesGridExpandable from '@/components/industries/CitiesGridExpandable';
import { CheckCircle, TrendingUp, Users, Award, Clock, Target, Zap, Shield } from 'lucide-react';
import { cmsPlatforms } from '@/data/cmsPlatforms';

import { FaBullseye, FaRocket } from 'react-icons/fa';;
interface PageProps {
  params: Promise<{
    countryCode: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: Array<{ countryCode: string }> = [];
  
  // Generate for all countries
  countries.forEach(country => {
    params.push({
      countryCode: country.slug
    });
  });
  
  // Generate for all industries (as standalone service pages)
  industries.forEach(industry => {
    params.push({
      countryCode: industry.slug
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  // Check if it's an industry first
  const industry = industries.find(i => i.slug === resolvedParams.countryCode);
  if (industry) {
    return {
      title: `${industry.name} SEO Services | Expert Local SEO for ${industry.name} Businesses`,
      description: `Professional SEO services for ${industry.name.toLowerCase()} businesses. Dominate local search results, attract more customers, and grow your business with proven SEO strategies.`,
      openGraph: {
        title: `${industry.name} SEO Services | Expert Local SEO`,
        description: `Professional SEO services for ${industry.name.toLowerCase()} businesses.`,
        type: 'website'
      }
    };
  }
  
  // Otherwise check for country
  const country = countries.find(c => c.slug === resolvedParams.countryCode);
  if (!country) {
    return {
      title: 'Page Not Found'
    };
  }

  const title = `SEO Services in ${country.name} | Local SEO Experts`;
  const description = `Professional SEO services across ${country.name}. We help businesses in ${country.cities.map(c => c.name).join(', ')} dominate local search results. Get a free consultation today!`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website'
    }
  };
}

export default async function CountryPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // Check if it's an industry page first
  const industry = industries.find(i => i.slug === resolvedParams.countryCode);
  if (industry) {
    // Render industry service page
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: industry.name, url: `/services/${industry.slug}` }
    ];

    const faqs = [
      {
        question: `How can ${industry.name} SEO help my business?`,
        answer: `${industry.name} SEO helps your business rank higher in local search results, making it easier for potential customers to find you. This leads to increased visibility, more qualified leads, and ultimately more customers.`
      },
      {
        question: `What makes your ${industry.name} SEO services different?`,
        answer: `Our services are specifically tailored to the unique needs of ${industry.name.toLowerCase()} businesses. We understand the competitive landscape, customer search behavior, and local market dynamics.`
      },
      {
        question: `How long does it take to see results?`,
        answer: `Most ${industry.name.toLowerCase()} businesses see initial improvements within 30-60 days, with significant results typically appearing within 3-6 months.`
      }
    ];

    return (
      <>
        <Header />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
          
          {/* Schema Markup for Industry Page */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": `${industry.name} SEO Services`,
                "provider": {
                  "@type": "Person",
                  "name": "Muhammad Adeel",
                  "jobTitle": "SEO Specialist"
                },
                "areaServed": "Worldwide",
                "description": `${industry.description}. Dominate local search results and grow your business with proven SEO strategies.`,
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock"
                }
              })
            }}
          />
          
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg mb-6">
                  <div className="text-3xl">{industry.icon}</div>
                  <span className="text-slate-600 dark:text-slate-300 font-medium">{industry.name}</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {industry.name} SEO Services
                </h1>
                
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  {industry.description}. Dominate local search results and grow your business with proven SEO strategies.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Get Started Today
                  </Link>
                  <Link href="/services" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 dark:border-slate-700">
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Worldwide</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  We provide {industry.name} SEO services across {countries.length}+ countries
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {countries.slice(0, 18).map((country) => (
                  <Link
                    key={country.code}
                    href={`/${country.slug}/${industry.slug}`}
                    className="group p-4 bg-white dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all text-center"
                  >
                    <div className="text-3xl mb-2">{country.flag}</div>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{country.name}</div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View All {countries.length} Countries →
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Dominate Search Results?</h2>
              <p className="text-xl mb-8">Get a free SEO audit and discover how we can help your {industry.name.toLowerCase()} business grow</p>
              <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Get Your Free Audit
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
  
  // Otherwise handle as country page
  const countryCode = resolvedParams.countryCode;
  const country = countries.find(c => c.slug === countryCode);

  if (!country) {
    notFound();
  }

  const content = getCountryContent(country.slug);
  const flagColors = getFlagColors(country.code);

  const benefits = [
    { icon: TrendingUp, title: 'Proven Results', desc: 'Average 300% increase in organic traffic within 6 months' },
    { icon: Users, title: 'Expert Team', desc: 'Dedicated SEO specialists with years of experience' },
    { icon: Award, title: 'Industry Recognition', desc: 'Award-winning SEO strategies and implementations' },
    { icon: Clock, title: 'Fast Turnaround', desc: 'See initial results within 30-60 days' },
    { icon: Target, title: 'Targeted Approach', desc: 'Customized strategies for your specific industry' },
    { icon: Shield, title: 'White-Hat SEO', desc: '100% Google-compliant optimization techniques' },
  ];

  const processSteps = [
    { step: '1', title: 'Discovery & Audit', desc: 'Comprehensive analysis of your current SEO performance' },
    { step: '2', title: 'Strategy Development', desc: 'Custom SEO roadmap tailored to your business goals' },
    { step: '3', title: 'Implementation', desc: 'Execute on-page, off-page, and technical optimizations' },
    { step: '4', title: 'Content Creation', desc: 'Develop high-quality, SEO-optimized content' },
    { step: '5', title: 'Link Building', desc: 'Acquire authoritative backlinks to boost rankings' },
    { step: '6', title: 'Monitor & Optimize', desc: 'Continuous tracking and refinement for best results' },
  ];
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: country.name, url: `/${country.slug}` }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .flag-border-hover:hover {
            border-color: ${flagColors.primary} !important;
          }
          .flag-border-hover-process:hover {
            border-color: ${flagColors.primary} !important;
          }
          .flag-testimonial-hover:hover {
            border-color: ${flagColors.primary} !important;
            box-shadow: 0 20px 25px -5px ${flagColors.primary}30 !important;
          }
          .flag-cta-hover:hover {
            background-color: white !important;
            color: ${flagColors.primary} !important;
          }
          .city-card-hover:hover h3 {
            color: #FFFFFF !important;
          }
          .city-card-hover:hover p {
            color: #FFFFFF !important;
            opacity: 0.95 !important;
          }
          .city-card-hover:hover .area-badge {
            background-color: rgba(255, 255, 255, 0.25) !important;
            color: #FFFFFF !important;
            border: 1px solid rgba(255, 255, 255, 0.3) !important;
          }
        `
      }} />
      <Header flagColors={flagColors} />
      <main className="min-h-screen bg-slate-950">
        
        {/* Schema Markup for Country Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": `SEO Services in ${country.name}`,
              "provider": {
                "@type": "Person",
                "name": "Muhammad Adeel",
                "jobTitle": "SEO Specialist"
              },
              "areaServed": {
                "@type": "Country",
                "name": country.name
              },
              "description": content.heroDescription,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        
        {/* Hero Section */}
        <section 
          className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
          style={{ background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }} />
          </div>

          {/* Animated Blobs - using flag colors */}
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-blob opacity-30" 
            style={{ backgroundColor: flagColors.primary }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-2000 opacity-30" 
            style={{ backgroundColor: flagColors.secondary }}
          />
          {flagColors.accent && (
            <div 
              className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-4000 opacity-30" 
              style={{ backgroundColor: flagColors.accent }}
            />
          )}

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold text-white shadow-lg">
                🚀 Premium SEO Services in {country.name}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              <span style={{ color: flagColors.heroText }}>
                SEO Services in {country.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg" style={{ color: flagColors.heroText, opacity: 0.95 }}>
              {content.heroDescription}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-full bg-white font-bold hover:shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                style={{ color: flagColors.primary }}
              >
                <span>Get Free SEO Audit</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-bold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white flex items-center justify-center gap-2"
              >
                <span>View Success Stories</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {content.stats.map((stat, index) => (
                <div key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: flagColors.heroText }}>{stat.value}</div>
                    <div className="text-sm font-medium" style={{ color: flagColors.heroText, opacity: 0.9 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
            >
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4">
              <span style={{ color: flagColors.textOnLight }}>
                {content.whyChoose.title}
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {content.whyChoose.points.map((point, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border dark:border-slate-800 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flag-border-hover"
                style={{ borderColor: `${flagColors.primary}40` }}
              >
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})` }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-lg leading-relaxed flex-1" style={{ color: flagColors.textOnLight }}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.darkBg}, ${flagColors.primary})` }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl" 
            style={{ backgroundColor: flagColors.primary }}
          />
          <div 
            className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl" 
            style={{ backgroundColor: flagColors.secondary }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold shadow-lg">Our Advantages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4" style={{ color: flagColors.text }}>
              Why Choose Our SEO Services?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: flagColors.text, opacity: 0.9 }}>
              We deliver measurable results that drive real business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="group relative overflow-hidden p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl" style={{ boxShadow: `0 20px 25px -5px ${flagColors.primary}20` }}>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" 
                    style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}20, ${flagColors.secondary}20)` }}
                  />
                  <div className="relative">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform"
                      style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 transition-colors" style={{ color: flagColors.text }}>{benefit.title}</h3>
                    <p className="leading-relaxed" style={{ color: flagColors.text, opacity: 0.8 }}>{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight }}>
              Our Proven SEO Process
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
              A systematic approach to dominate search rankings in {country.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((item, index) => (
              <div 
                key={index} 
                className="relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border-2 transition-all flag-border-hover-process"
                style={{ borderColor: `${flagColors.primary}30` }}
              >
                <div 
                  className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl"
                  style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})` }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 mt-2" style={{ color: flagColors.textOnLight }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: flagColors.textOnLight, opacity: 0.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
            >
              Industry Expertise
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4">
              <span style={{ color: flagColors.textOnLight }}>
                Industries We Serve in {country.name}
              </span>
            </h2>
            <p className="text-lg" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
              Specialized SEO strategies for your industry - Click to learn more
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.slice(0, 16).map((industry, index) => {
              const getIndustryDescription = () => {
                const descriptions = [
                  `Dominate local search for ${industry.name.toLowerCase()} businesses. Rank higher for "${industry.name.toLowerCase()} near me" in ${country.name}.`,
                  `Expert SEO for ${country.name} ${industry.name.toLowerCase()} companies. Drive more customers and increase visibility.`,
                  `Boost your ${industry.name.toLowerCase()} business in ${country.name}. Proven strategies for top rankings.`,
                  `Professional ${industry.name.toLowerCase()} SEO services. Help ${country.name} customers find your business first.`,
                  `Rank #1 for ${industry.name.toLowerCase()} searches in ${country.name}. Get more leads and grow faster.`,
                  `Specialized SEO for ${country.name}'s ${industry.name.toLowerCase()} sector. Outrank your competition today.`,
                  `Transform your ${industry.name.toLowerCase()} business with expert SEO. Dominate ${country.name} search results.`,
                  `Drive qualified leads for ${industry.name.toLowerCase()} services in ${country.name}. Local SEO that converts.`,
                  `Increase online visibility for your ${industry.name.toLowerCase()} business. Proven results in ${country.name}.`,
                  `Get found by ${country.name} customers searching for ${industry.name.toLowerCase()} services. Rank higher today.`,
                  `Strategic SEO for ${industry.name.toLowerCase()} businesses in ${country.name}. More traffic, more customers.`,
                  `Expert ${industry.name.toLowerCase()} SEO solutions. Help your ${country.name} business stand out online.`
                ];
                const hash = (country.name.charCodeAt(0) + index) % descriptions.length;
                return descriptions[hash];
              };

              return (
                <Link
                  key={industry.slug}
                  href={`/${countryCode}/${industry.slug}`}
                  className="group relative overflow-hidden p-6 rounded-2xl border-2 bg-white dark:bg-slate-900 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    borderColor: `${flagColors.primary}30`,
                    boxShadow: `0 20px 25px -5px ${flagColors.primary}20`
                  }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" 
                    style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}10, ${flagColors.secondary}10)` }}
                  />
                  <div className="relative">
                    <div 
                      className="w-14 h-14 mb-4 p-2 rounded-xl group-hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(to bottom right, ${flagColors.primary}20, ${flagColors.secondary}20)`,
                        color: flagColors.primary
                      }}
                    >
                      {industry.icon}
                    </div>
                    <h3 
                      className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-opacity-100 transition-colors"
                      style={{ color: flagColors.primary }}
                    >
                      {industry.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300">
                      {getIndustryDescription()}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CMS Platforms Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" 
            style={{ backgroundColor: flagColors.primary }}
          />
          <div 
            className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000" 
            style={{ backgroundColor: flagColors.secondary }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold shadow-lg">Platform Optimization</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-6 mb-4" style={{ color: flagColors.text }}>
              We Optimize All Major CMS Platforms
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: flagColors.text, opacity: 0.9 }}>
              Expert SEO services for your platform - Click to see platform-specific strategies
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cmsPlatforms.map((platform, index) => (
              <Link
                key={platform.slug}
                href={`/${country.slug}/${platform.slug}`}
                className="group relative overflow-hidden p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  boxShadow: `0 20px 25px -5px ${flagColors.primary}30`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})` }}
                ></div>
                <div className="relative z-10">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {platform.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center transition-all" style={{ color: flagColors.text }}>
                    {platform.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed text-center mb-4">
                    {platform.description}
                  </p>
                  <div className="flex items-center justify-center text-sm text-cyan-400 font-medium group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Semantic SEO Section - Topic Clusters */}
      <SemanticSEOSection
        id="seo-topic-clusters"
        title={`Comprehensive SEO Solutions for ${country.name}`}
        subtitle="Semantic SEO Framework"
        description={`Our holistic approach to search engine optimization in ${country.name} covers every aspect of your digital presence. From technical SEO to content strategy, we build interconnected topic clusters that establish your authority.`}
        entities={[
          { name: 'Local SEO', type: 'service', link: `/${country.slug}` },
          { name: 'Technical SEO', type: 'service' },
          { name: 'Content Strategy', type: 'concept' },
          { name: country.name, type: 'location', link: `/${country.slug}` },
          { name: 'E-commerce SEO', type: 'industry' },
          { name: 'Link Building', type: 'process' },
        ]}
        keywords={['SEO services', country.name, 'local SEO', 'search optimization', 'digital marketing']}
        relatedTopics={[
          { name: 'View All Industries', link: '/industries' },
          { name: 'Case Studies', link: '/case-studies' },
          { name: 'Contact Us', link: '/contact' },
        ]}
        backgroundColor={flagColors.lightBg}
        textColor={flagColors.textOnLight}
        accentColor={flagColors.primary}
      >
        <TopicCluster
          pillarTitle={`SEO Services in ${country.name}`}
          pillarDescription={`Master the search landscape in ${country.name} with our comprehensive SEO topic clusters. Each service area connects to form a powerful network of expertise.`}
          pillarLink={`/${country.slug}`}
          clusters={[
            {
              title: 'Local SEO Optimization',
              description: `Dominate local search results across ${country.cities.length} cities in ${country.name}`,
              link: `/${country.slug}`,
              type: 'pillar',
              keywords: ['local SEO', 'Google Business Profile', 'local rankings'],
            },
            {
              title: 'Technical SEO Audit',
              description: 'Comprehensive site analysis, speed optimization, and crawlability improvements',
              link: '/services',
              type: 'cluster',
              keywords: ['technical SEO', 'site audit', 'core web vitals'],
            },
            {
              title: 'Content Marketing',
              description: 'Strategic content creation that drives organic traffic and establishes authority',
              link: '/services',
              type: 'cluster',
              keywords: ['content strategy', 'blog optimization', 'semantic content'],
            },
            {
              title: 'Link Building',
              description: 'White-hat link acquisition strategies for sustainable ranking improvements',
              link: '/services',
              type: 'cluster',
              keywords: ['backlinks', 'digital PR', 'authority building'],
            },
            {
              title: 'E-commerce SEO',
              description: 'Specialized optimization for online stores and product pages',
              link: '/services/shopify-seo',
              type: 'supporting',
              keywords: ['product SEO', 'category optimization', 'conversion'],
            },
            {
              title: 'International SEO',
              description: `Multi-language and multi-region SEO strategies for ${country.name} businesses`,
              link: '/services',
              type: 'supporting',
              keywords: ['hreflang', 'geo-targeting', 'international expansion'],
            },
          ]}
          variant="hub"
          accentColor={flagColors.primary}
          textColor={flagColors.textOnLight}
        />
      </SemanticSEOSection>

      {/* Entity Relationships Section */}
      <SemanticSEOSection
        id="service-entities"
        title={`Our SEO Expertise Network in ${country.name}`}
        subtitle="Service Connections"
        description={`Discover how our interconnected services work together to deliver exceptional results for businesses across ${country.name}.`}
        backgroundColor={flagColors.darkBg}
        textColor={flagColors.text}
        accentColor={flagColors.secondary}
      >
        <EntityRelationship
          title="How Our Services Connect"
          description="Each service strengthens the others, creating a comprehensive SEO ecosystem"
          entities={[
            { id: 'local-seo', name: 'Local SEO', type: 'service', description: `Optimize for ${country.name} local searches`, link: `/${country.slug}` },
            { id: 'technical', name: 'Technical SEO', type: 'service', description: 'Site architecture and performance' },
            { id: 'content', name: 'Content Strategy', type: 'concept', description: 'Topic clusters and semantic content' },
            { id: 'links', name: 'Link Building', type: 'service', description: 'Authority and trust signals' },
            { id: 'analytics', name: 'Analytics', type: 'concept', description: 'Data-driven optimization' },
            { id: 'conversion', name: 'CRO', type: 'service', description: 'Turn traffic into customers' },
            ...country.cities.slice(0, 4).map(city => ({
              id: city.slug,
              name: city.name,
              type: 'location' as const,
              description: `SEO services in ${city.name}`,
              link: `/${country.slug}/${city.slug}`,
            })),
          ]}
          relations={[
            { from: 'local-seo', to: 'technical', relationship: 'requires' },
            { from: 'local-seo', to: 'content', relationship: 'includes' },
            { from: 'content', to: 'links', relationship: 'relatedTo' },
            { from: 'analytics', to: 'conversion', relationship: 'relatedTo' },
          ]}
          centralEntity="local-seo"
          variant="cards"
          accentColor={flagColors.secondary}
          textColor={flagColors.text}
          maxDisplay={10}
        />
      </SemanticSEOSection>

      {/* Testimonials Section */}
      <section className="py-20" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
            >
              Client Success Stories
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4">
              <span style={{ color: flagColors.textOnLight }}>
                Success Stories from {country.name}
              </span>
            </h2>
            <p className="text-lg" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
              Real results from businesses we've helped grow
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: 'Local Home Services', result: '385% Traffic Growth', time: '6 Months', quote: 'Our phone has been ringing non-stop since implementing their SEO strategy!' },
              { company: 'E-commerce Store', result: '$250K Revenue Increase', time: '8 Months', quote: 'We went from page 3 to ranking #1 for our most important keywords.' },
              { company: 'Professional Services', result: '12x Lead Generation', time: '5 Months', quote: 'The ROI has been incredible. Best investment we\'ve made in our business.' },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden p-8 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:scale-105 flag-testimonial-hover"
                style={{ 
                  borderColor: `${flagColors.primary}30`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" 
                  style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}05, ${flagColors.secondary}05)` }}
                />
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="pt-6" style={{ borderTop: `2px solid ${flagColors.primary}30` }}>
                    <p className="font-bold text-slate-900 dark:text-white mb-2 text-lg">{testimonial.company}</p>
                    <p 
                      className="text-3xl font-bold mb-2"
                      style={{ 
                        background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {testimonial.result}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">✨ in {testimonial.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-20" style={{ backgroundColor: flagColors.lightBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span 
              className="px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg"
              style={{ background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})` }}
            >
              Local Coverage
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-6 mb-4">
              <span style={{ color: flagColors.textOnLight }}>
                Cities We Serve in {country.name}
              </span>
            </h2>
            <p className="text-lg" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
              Select your city to view local SEO services and industries
            </p>
          </div>

          <CitiesGridExpandable 
            cities={country.cities}
            countrySlug={country.slug}
            flagColors={flagColors}
            initialCount={10}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{ background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.darkBg}, ${flagColors.primary})` }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute top-10 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse" 
            style={{ backgroundColor: flagColors.secondary }}
          />
          <div 
            className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse animation-delay-2000" 
            style={{ backgroundColor: flagColors.primary }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ color: flagColors.text }}>
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-semibold shadow-lg">🎯 Ready to Get Started?</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 drop-shadow-2xl" style={{ color: flagColors.heroText }}>
            Ready to Dominate Search Results in {country.name}?
          </h2>
          <p className="text-xl md:text-2xl mb-10 drop-shadow-lg" style={{ color: flagColors.heroText, opacity: 0.9 }}>
            Get a free SEO audit and discover how we can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white font-bold shadow-2xl hover:shadow-white/50 transition-all duration-300 hover:scale-110 transform"
              style={{ color: flagColors.primary }}
            >
              <span className="text-lg">Get Your Free Audit</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border-2 border-white font-bold backdrop-blur-sm transition-all duration-300 hover:scale-110 transform flag-cta-hover"
              style={{ 
                color: flagColors.text,
                borderColor: `${flagColors.text}80`
              }}
            >
              <span className="text-lg">View Case Studies</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer flagColors={flagColors} />
    </>
  );
}
