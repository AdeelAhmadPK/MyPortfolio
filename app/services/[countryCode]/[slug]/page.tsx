import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { seoServices, getSEOService } from '@/data/seoServices';
import { cmsPlatforms, getCMSPlatform } from '@/data/cmsPlatforms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroContactForm from '@/components/HeroContactForm';
import FAQSection from '@/components/seo/FAQSection';
import SEOFramework from '@/components/industries/SEOFramework';
import WhyChooseMe from '@/components/industries/WhyChooseMe';
import HireLocalSEO from '@/components/industries/HireLocalSEO';
import CitiesGridExpandable from '@/components/industries/CitiesGridExpandable';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import TopSEOServices from '@/components/services/TopSEOServices';
import IndustryStats from '@/components/industries/IndustryStats';
import ProcessTimeline from '@/components/industries/ProcessTimeline';
import TopicClusterSection from '@/components/industries/TopicClusterSection';
import LocalSEOSignals from '@/components/industries/LocalSEOSignals';
import CompetitorComparison from '@/components/industries/CompetitorComparison';
import CaseStudyHighlight from '@/components/industries/CaseStudyHighlight';
import TrustSignals from '@/components/industries/TrustSignals';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import CountriesGrid from '@/components/industries/CountriesGrid';
import { getFlagColors } from '@/data/flagColors';
import { FaBolt, FaBook, FaBuilding, FaBullseye, FaChartArea, FaChartLine, FaCheckCircle, FaClipboardCheck, FaClipboardList, FaCode, FaCog, FaComments, FaDatabase, FaDollarSign, FaExclamationTriangle, FaFileAlt, FaGlobe, FaGraduationCap, FaHandshake, FaHeading, FaHome, FaImage, FaKey, FaLightbulb, FaLink, FaList, FaMapMarkerAlt, FaMobileAlt, FaNetworkWired, FaNewspaper, FaPenNib, FaPhoneAlt, FaRobot, FaRocket, FaSearch, FaShieldAlt, FaShoppingCart, FaStar, FaStore, FaTachometerAlt, FaTags, FaUsers, FaWrench } from 'react-icons/fa';;;

interface PageProps {
  params: Promise<{
    countryCode: string;
    slug: string;
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { countryCode, slug } = params;
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

  if (!country) {
    return { title: 'Page Not Found' };
  }

  // Check if it's an SEO service
  const seoService = getSEOService(slug);
  if (seoService) {
    return {
      title: `${seoService.name} SEO Services in ${country.name} | Expert SEO Services`,
      description: `Professional ${seoService.name.toLowerCase()} SEO services in ${country.name}. ${seoService.description} Tailored for ${country.name} businesses.`,
      openGraph: {
        title: `${seoService.name} SEO Services in ${country.name}`,
        description: `Expert ${seoService.name.toLowerCase()} SEO services in ${country.name}`,
        type: 'website'
      }
    };
  }

  // Check if it's a CMS platform
  const cmsPlatform = getCMSPlatform(slug);
  if (cmsPlatform) {
    return {
      title: `${cmsPlatform.name} Services in ${country.name} | Expert CMS SEO`,
      description: `Professional ${cmsPlatform.name.toLowerCase()} services in ${country.name}. ${cmsPlatform.description} Tailored for ${country.name} businesses.`,
      openGraph: {
        title: `${cmsPlatform.name} Services in ${country.name}`,
        description: `Expert ${cmsPlatform.name.toLowerCase()} services in ${country.name}`,
        type: 'website'
      }
    };
  }

  // Check if it's an industry
  const industry = industries.find(i => i.slug === slug);
  if (industry) {
    return {
      title: `${industry.name} SEO Services in ${country.name} | Expert Local SEO Services`,
      description: `Professional ${industry.name.toLowerCase()} SEO services in ${country.name}. Get more customers, dominate local search, and grow your business.`,
      openGraph: {
        title: `${industry.name} SEO Services in ${country.name}`,
        description: `Expert ${industry.name.toLowerCase()} SEO services in ${country.name}`,
        type: 'website'
      }
    };
  }

  // Check if it's a city
  const city = country.cities.find(c => c.slug === slug);
  if (city) {
    return {
      title: `SEO Services in ${city.name}, ${country.name} | Local SEO Expert`,
      description: `Professional SEO services in ${city.name}, ${country.name}. Dominate local search and grow your business.`,
      openGraph: {
        title: `SEO Services in ${city.name}, ${country.name}`,
        description: `Expert local SEO services in ${city.name}`,
        type: 'website'
      }
    };
  }

  return { title: 'Page Not Found' };
}

export async function generateStaticParams() {
  const params: { countryCode: string; slug: string }[] = [];
  
  countries.forEach(country => {
    // Generate for all SEO services
    seoServices.forEach(service => {
      params.push({
        countryCode: country.code.toLowerCase(),
        slug: service.slug
      });
    });
    
    // Generate for all CMS platforms
    cmsPlatforms.forEach(platform => {
      params.push({
        countryCode: country.code.toLowerCase(),
        slug: platform.slug
      });
    });
    
    // Generate for all industries
    industries.forEach(industry => {
      params.push({
        countryCode: country.code.toLowerCase(),
        slug: industry.slug
      });
    });
    
    // Generate for all cities
    country.cities.forEach(city => {
      params.push({
        countryCode: country.code.toLowerCase(),
        slug: city.slug
      });
    });
  });

  return params;
}

// Helper function to get icon component
function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: any } = {
    'FaCog': FaCog,
    'FaMapMarkerAlt': FaMapMarkerAlt,
    'FaShoppingCart': FaShoppingCart,
    'FaFileAlt': FaFileAlt,
    'FaLink': FaLink,
    'FaGlobe': FaGlobe,
    'FaClipboardCheck': FaClipboardCheck,
    'FaKey': FaKey,
  };
  return iconMap[iconName] || FaCog;
}

// Render country-specific SEO service page
function renderCountrySEOServicePage(
  country: any,
  seoService: any,
  flagColors: any,
  countryCode: string
) {
  const IconComponent = getIconComponent(seoService.icon);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: country.name, url: `/services/${countryCode}` },
    { name: seoService.name, url: `/services/${countryCode}/${seoService.slug}` }
  ];

  // Country-specific FAQs
  const faqs = [
    {
      question: `How can ${seoService.name} help my business in ${country.name}?`,
      answer: `Our ${seoService.name.toLowerCase()} services are specifically tailored for ${country.name} businesses. We understand the local market dynamics, search behavior, and competition in ${country.name}, ensuring your business achieves maximum visibility and rankings.`
    },
    {
      question: `What makes your ${seoService.name} different in ${country.name}?`,
      answer: `We combine international SEO expertise with deep local knowledge of ${country.name}'s digital landscape. Our strategies are customized for ${country.name}'s unique business environment, consumer behavior, and search patterns, ensuring maximum ROI.`
    },
    {
      question: `How long does it take to see results for ${seoService.name} in ${country.name}?`,
      answer: `Most businesses in ${country.name} see initial improvements within 30-60 days, with significant results by 90 days. Timeline varies based on competition levels in your specific city and industry within ${country.name}.`
    },
    {
      question: `Do you provide ${seoService.name} services across all cities in ${country.name}?`,
      answer: `Yes! We provide comprehensive ${seoService.name.toLowerCase()} services across all major cities and regions in ${country.name}. Our local expertise extends to ${country.cities.length}+ cities, ensuring effective SEO no matter where your business is located.`
    }
  ];

  // Service-specific content based on service type
  const getServiceContent = () => {
    switch (seoService.slug) {
      case 'technical-seo':
        return {
          services: [
            { icon: <FaBolt />, title: "Core Web Vitals Optimization", description: "Achieve perfect LCP, FID, and CLS scores for better rankings and user experience." },
            { icon: <FaTachometerAlt />, title: "Page Speed Optimization", description: "Reduce load times to under 2 seconds with image optimization, caching, and CDN setup." },
            { icon: <FaRobot />, title: "Crawlability & Indexation", description: "Fix robots.txt, XML sitemaps, and crawl errors to ensure Google finds all your pages." },
            { icon: <FaCode />, title: "Schema Markup Implementation", description: "Add structured data for rich snippets, FAQs, reviews, products, and local business info." },
            { icon: <FaMobileAlt />, title: "Mobile-First Optimization", description: "Responsive design, mobile speed, and touch-friendly interfaces for mobile-first indexing." },
            { icon: <FaShieldAlt />, title: "HTTPS & Security", description: "SSL certificate setup, mixed content fixes, and security headers for trust and rankings." }
          ],
          stats: [
            { value: "240%", label: "Average organic traffic increase after technical optimization", icon: <FaChartLine /> },
            { value: "67%", label: "Improvement in Core Web Vitals scores", icon: <FaTachometerAlt /> },
            { value: "3.8x", label: "Faster page load times on average", icon: <FaBolt /> },
            { value: "91%", label: "Increase in crawlable and indexed pages", icon: <FaRobot /> }
          ]
        };
      case 'local-seo':
        return {
          services: [
            { icon: <FaStore />, title: "Google Business Profile Optimization", description: "Complete GBP setup, optimization, and management for maximum local visibility." },
            { icon: <FaMapMarkerAlt />, title: "Local Citations & Directory Listings", description: "Build consistent NAP citations across 100+ high-authority local directories." },
            { icon: <FaStar />, title: "Review Generation & Management", description: "Systematic review generation and professional response management." },
            { icon: <FaUsers />, title: "Multi-Location SEO", description: "Optimize and manage multiple business locations with individual strategies." },
            { icon: <FaTags />, title: "Local Content Marketing", description: "Create location-specific content that ranks for local keywords and attracts nearby customers." },
            { icon: <FaSearch />, title: "Call Tracking & Conversion Optimization", description: "Track phone calls from local searches and optimize for maximum conversions." }
          ],
          stats: [
            { value: "420%", label: "Average increase in local search visibility", icon: <FaChartLine /> },
            { value: "87%", label: "Of clients ranking in local 3-pack within 6 months", icon: <FaMapMarkerAlt /> },
            { value: "5.8x", label: "More direction requests to business locations", icon: <FaUsers /> },
            { value: "340%", label: "Increase in phone calls from Google searches", icon: <FaSearch /> }
          ]
        };
      case 'ecommerce-seo':
        return {
          services: [
            { icon: <FaShoppingCart />, title: "Product Page Optimization", description: "Optimize titles, descriptions, images, and schema for every product to rank higher." },
            { icon: <FaTags />, title: "Category Page SEO", description: "Strategic category structure, optimized content, and internal linking for maximum visibility." },
            { icon: <FaStore />, title: "Shopping Feed Optimization", description: "Optimize Google Shopping feeds for better product visibility and higher click-through rates." },
            { icon: <FaChartLine />, title: "Conversion Rate Optimization", description: "SEO-driven improvements to boost add-to-cart rates and checkout completions." },
            { icon: <FaCog />, title: "Technical E-commerce SEO", description: "Fix faceted navigation, duplicate content, site speed, and mobile optimization issues." },
            { icon: <FaStore />, title: "Platform-Specific Optimization", description: "Specialized SEO for Shopify, Magento, WooCommerce, and BigCommerce stores." }
          ],
          stats: [
            { value: "420%", label: "Average Revenue Increase", icon: <FaChartLine /> },
            { value: "1,250+", label: "Keywords Ranking Page 1", icon: <FaSearch /> },
            { value: "4.8%", label: "Organic Conversion Rate", icon: <FaShoppingCart /> },
            { value: "98%", label: "Client Satisfaction", icon: <FaStar /> }
          ]
        };
      case 'content-seo':
        return {
          services: [
            { icon: <FaPenNib />, title: "SEO Content Writing", description: "Keyword-optimized, engaging content that ranks and converts." },
            { icon: <FaBook />, title: "Content Strategy", description: "Data-driven content plans aligned with business goals and search opportunities." },
            { icon: <FaTags />, title: "Topic Cluster Development", description: "Pillar pages and supporting content that establishes topical authority." },
            { icon: <FaSearch />, title: "Keyword Research & Mapping", description: "Identify high-value keywords and map them to content pieces." },
            { icon: <FaCode />, title: "On-Page Content Optimization", description: "Optimize existing content for better rankings and user experience." },
            { icon: <FaLink />, title: "Internal Linking Strategy", description: "Strategic internal linking to distribute authority and improve rankings." }
          ],
          stats: [
            { value: "380%", label: "Average organic traffic increase from content SEO", icon: <FaChartLine /> },
            { value: "1,200+", label: "SEO-optimized articles published for clients", icon: <FaFileAlt /> },
            { value: "4.2x", label: "Average ROI from content marketing investments", icon: <FaBullseye /> },
            { value: "95%", label: "Client satisfaction rate with content quality", icon: <FaStar /> }
          ]
        };
      case 'link-building':
        return {
          services: [
            { icon: <FaHandshake />, title: "Guest Posting", description: "High-quality guest posts on authoritative sites in your industry." },
            { icon: <FaLink />, title: "Broken Link Building", description: "Find and replace broken links with links to your content." },
            { icon: <FaNewspaper />, title: "Digital PR & Outreach", description: "Earn media mentions and backlinks through PR campaigns." },
            { icon: <FaGraduationCap />, title: "Resource Page Outreach", description: "Get listed on high-authority resource and directory pages." },
            { icon: <FaNetworkWired />, title: "Linkable Asset Creation", description: "Create valuable resources that naturally attract backlinks." },
            { icon: <FaGlobe />, title: "HARO & Journalist Outreach", description: "Connect with journalists and earn authoritative media links." }
          ],
          stats: [
            { value: "450+", label: "High-quality backlinks built for clients", icon: <FaLink /> },
            { value: "85%", label: "Average domain authority improvement", icon: <FaChartLine /> },
            { value: "320%", label: "Average organic traffic increase", icon: <FaRocket /> },
            { value: "100%", label: "White-hat link building methods only", icon: <FaCheckCircle /> }
          ]
        };
      case 'on-page-seo':
        return {
          services: [
            { icon: <FaTags />, title: "Title & Meta Optimization", description: "Optimize title tags and meta descriptions for better rankings and click-through rates." },
            { icon: <FaHeading />, title: "Header Structure Optimization", description: "Proper H1-H6 hierarchy and keyword-optimized headers for better SEO." },
            { icon: <FaFileAlt />, title: "Content Optimization", description: "Optimize content for target keywords, search intent, and user experience." },
            { icon: <FaImage />, title: "Image SEO", description: "Optimize images with alt text, file names, compression, and proper formats." },
            { icon: <FaLink />, title: "Internal Linking Strategy", description: "Strategic internal linking to distribute authority and improve crawlability." },
            { icon: <FaCode />, title: "Schema Markup", description: "Implement structured data for rich snippets and enhanced search results." }
          ],
          stats: [
            { value: "280%", label: "Average organic traffic increase from on-page optimization", icon: <FaChartLine /> },
            { value: "1,500+", label: "Pages optimized for clients across industries", icon: <FaFileAlt /> },
            { value: "92%", label: "Average click-through rate improvement", icon: <FaBullseye /> },
            { value: "650+", label: "Keywords ranking on page 1 after optimization", icon: <FaSearch /> }
          ]
        };
      case 'off-page-seo':
        return {
          services: [
            { icon: <FaGlobe />, title: "Brand Building", description: "Build brand authority and awareness through strategic marketing and PR campaigns." },
            { icon: <FaUsers />, title: "Social Signals", description: "Optimize social media presence and engagement to support SEO efforts." },
            { icon: <FaStar />, title: "Online Reputation Management", description: "Monitor and manage your brand's online reputation and reviews." },
            { icon: <FaNewspaper />, title: "PR & Media Relations", description: "Earn media coverage, press mentions, and authoritative backlinks." },
            { icon: <FaHandshake />, title: "Partnership Building", description: "Establish strategic partnerships that lead to backlinks and brand mentions." },
            { icon: <FaBuilding />, title: "Citation Building", description: "Build consistent business citations across directories and industry sites." }
          ],
          stats: [
            { value: "420%", label: "Average brand visibility increase", icon: <FaGlobe /> },
            { value: "280+", label: "Brand mentions earned per client", icon: <FaComments /> },
            { value: "95%", label: "Average online reputation score improvement", icon: <FaStar /> },
            { value: "3.5x", label: "Domain authority growth on average", icon: <FaChartLine /> }
          ]
        };
      case 'seo-audit':
        return {
          services: [
            { icon: <FaCog />, title: "Technical SEO Audit", description: "Site speed, mobile-friendliness, crawlability, indexation, and technical issues." },
            { icon: <FaFileAlt />, title: "On-Page SEO Audit", description: "Titles, meta descriptions, headers, content, images, and on-page optimization." },
            { icon: <FaLink />, title: "Off-Page SEO Audit", description: "Backlink profile, domain authority, brand mentions, and external signals." },
            { icon: <FaChartLine />, title: "Content Audit", description: "Content quality, keyword optimization, gaps, and content strategy analysis." },
            { icon: <FaMobileAlt />, title: "Mobile SEO Audit", description: "Mobile usability, mobile speed, responsive design, and mobile-first indexing." },
            { icon: <FaGlobe />, title: "Competitor Analysis", description: "Competitor SEO strategies, strengths, weaknesses, and opportunities." }
          ],
          stats: [
            { value: "500+", label: "Comprehensive SEO audits completed", icon: <FaClipboardCheck /> },
            { value: "150+", label: "Average issues identified per audit", icon: <FaExclamationTriangle /> },
            { value: "98%", label: "Client satisfaction with audit quality", icon: <FaStar /> },
            { value: "5-10 Days", label: "Average audit turnaround time", icon: <FaTachometerAlt /> }
          ]
        };
      case 'keyword-research':
        return {
          services: [
            { icon: <FaKey />, title: "Keyword Discovery", description: "Identify high-value keywords your audience searches for." },
            { icon: <FaChartLine />, title: "Search Intent Analysis", description: "Analyze search intent to match content with user needs." },
            { icon: <FaBullseye />, title: "Keyword Mapping", description: "Map keywords to pages for strategic site optimization." },
            { icon: <FaTags />, title: "Competitor Keyword Analysis", description: "Identify competitor keywords and find opportunities." },
            { icon: <FaList />, title: "Long-Tail Keyword Research", description: "Find specific, high-converting long-tail keywords." },
            { icon: <FaDatabase />, title: "Keyword Tracking & Reporting", description: "Monitor keyword performance and rankings over time." }
          ],
          stats: [
            { value: "500+", label: "Keywords identified per research project", icon: <FaKey /> },
            { value: "85%", label: "Keywords ranking on page 1 after optimization", icon: <FaBullseye /> },
            { value: "320%", label: "Average organic traffic increase from keyword targeting", icon: <FaChartLine /> },
            { value: "95%", label: "Client satisfaction with keyword research quality", icon: <FaStar /> }
          ]
        };
      default:
        return {
          services: [],
          stats: []
        };
    }
  };

  const serviceContent = getServiceContent();

  return (
    <>
      <Header flagColors={flagColors} />
      <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
        <section 
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 backdrop-blur-xl mb-8">
                  <span className="text-4xl">{country.flag}</span>
                  <IconComponent className="text-3xl" />
                  <span className="font-semibold">{seoService.name} SEO in {country.name}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  {seoService.name} SEO Services in {country.name}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {seoService.description} Tailored for {country.name} businesses to dominate search results and drive growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">300%</div>
                    <div className="text-sm text-white/80">Traffic Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Top 3</div>
                    <div className="text-sm text-white/80">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title={`Get Your Free ${seoService.shortName} SEO Audit`}
                  subtitle={`Discover how to dominate ${country.name} search results`}
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry={seoService.name} location={country.name} faqs={faqs} />
        <CountriesGrid industrySlug={seoService.slug} industryIcon={<IconComponent />} />
        <WhyChooseMe industry={seoService.name} />
        <HireLocalSEO industry={seoService.name} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                Comprehensive {seoService.name} Services for {country.name}
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                Everything you need to dominate search results in {country.name} with proven {seoService.name.toLowerCase()} strategies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceContent.services.map((service: any, index: number) => (
                <div 
                  key={index} 
                  className="group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2"
                  style={{
                    backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                    borderColor: index % 3 === 0 ? flagColors.primary : index % 3 === 1 ? flagColors.secondary : flagColors.accent || flagColors.primary
                  }}
                >
                  <div 
                    className="text-5xl mb-6 group-hover:scale-110 transition-transform"
                    style={{ color: flagColors.primary }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-white" style={{ opacity: 0.9 }}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {serviceContent.stats.length > 0 && (
          <IndustryStats 
            industry={seoService.name}
            stats={serviceContent.stats.map((stat: any, idx: number) => {
              // Use flag colors with Tailwind gradient classes
              const gradientColors = [
                flagColors.gradient || 'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500'
              ];
              return {
                ...stat,
                color: gradientColors[idx % gradientColors.length]
              };
            })}
          />
        )}

        <TopSEOServices countryCode={countryCode} />
        <IndustriesGrid countryCode={countryCode} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: flagColors.textOnLight }}>
                What Our {country.name} Clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title={`${seoService.name} Questions for ${country.name}`} />

        <section 
          className="py-24 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate {seoService.name} in {country.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free {seoService.name.toLowerCase()} audit and discover how we can transform your search visibility in {country.name}.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              style={{ color: flagColors.primary }}
            >
              Get Your Free {seoService.shortName} Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer flagColors={flagColors} />
    </>
  );
}

// Render country-specific CMS platform page
function renderCountryCMSPlatformPage(
  country: any,
  cmsPlatform: any,
  flagColors: any,
  countryCode: string
) {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: country.name, url: `/services/${countryCode}` },
    { name: cmsPlatform.name, url: `/services/${countryCode}/${cmsPlatform.slug}` }
  ];

  // Country-specific FAQs for CMS platforms
  const faqs = [
    {
      question: `How can ${cmsPlatform.name} help my business in ${country.name}?`,
      answer: `Our ${cmsPlatform.name.toLowerCase()} services are specifically tailored for ${country.name} businesses. We understand the local market dynamics, search behavior, and competition in ${country.name}, ensuring your ${cmsPlatform.name.toLowerCase()} site achieves maximum visibility and rankings.`
    },
    {
      question: `What makes your ${cmsPlatform.name} different in ${country.name}?`,
      answer: `We combine international SEO expertise with deep local knowledge of ${country.name}'s digital landscape. Our ${cmsPlatform.name.toLowerCase()} strategies are customized for ${country.name}'s unique business environment, consumer behavior, and search patterns, ensuring maximum ROI.`
    },
    {
      question: `How long does it take to see results for ${cmsPlatform.name} in ${country.name}?`,
      answer: `Most businesses in ${country.name} see initial improvements within 30-60 days, with significant results by 90 days. Timeline varies based on competition levels in your specific city and industry within ${country.name}.`
    },
    {
      question: `Do you provide ${cmsPlatform.name} services across all cities in ${country.name}?`,
      answer: `Yes! We provide comprehensive ${cmsPlatform.name.toLowerCase()} services across all major cities and regions in ${country.name}. Our local expertise extends to ${country.cities.length}+ cities, ensuring effective SEO no matter where your business is located.`
    }
  ];

  return (
    <>
      <Header flagColors={flagColors} />
      <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
        <section 
          className="relative py-24 md:py-32 overflow-hidden"
          style={{
            background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1 text-white animate-fade-in">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 backdrop-blur-xl mb-8">
                  <span className="text-4xl">{country.flag}</span>
                  <div className="text-cyan-400">
                    {cmsPlatform.icon}
                  </div>
                  <span className="font-semibold">{cmsPlatform.name} in {country.name}</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  {cmsPlatform.name} Services in {country.name}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-8">
                  {cmsPlatform.description} Tailored for {country.name} businesses to dominate search results and drive growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">350%</div>
                    <div className="text-sm text-white/80">Traffic Growth</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">Top 3</div>
                    <div className="text-sm text-white/80">Rankings</div>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2 animate-fade-in">
                <HeroContactForm 
                  title={`Get Your Free ${cmsPlatform.name} SEO Audit`}
                  subtitle={`Discover how to dominate ${country.name} search results`}
                  buttonText="Get Free Audit"
                />
              </div>
            </div>
          </div>
        </section>

        <SEOFramework industry={cmsPlatform.name} location={country.name} />
        <CountriesGrid industrySlug={cmsPlatform.slug} industryIcon={cmsPlatform.icon} />
        <WhyChooseMe industry={cmsPlatform.name} />
        <HireLocalSEO industry={cmsPlatform.name} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                Comprehensive {cmsPlatform.name} Services for {country.name}
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                Everything you need to dominate search results in {country.name} with proven {cmsPlatform.name.toLowerCase()} strategies.
              </p>
            </div>
          </div>
        </section>

        <TopSEOServices countryCode={countryCode} />
        <IndustriesGrid countryCode={countryCode} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight }}>
                What Our {country.name} Clients Say
              </h2>
              <p className="text-lg" style={{ color: flagColors.textOnLight, opacity: 0.8 }}>
                Success stories from businesses across {country.name}
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title={`${cmsPlatform.name} Questions for ${country.name}`} />

        <section 
          className="py-24 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
          }}
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate {cmsPlatform.name} in {country.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free {cmsPlatform.name.toLowerCase()} audit and discover how we can transform your search visibility in {country.name}.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-white font-bold text-lg shadow-2xl hover:scale-105 transition-all"
              style={{ color: flagColors.primary }}
            >
              Get Your Free {cmsPlatform.name} Audit
              <FaRocket />
            </Link>
          </div>
        </section>
      </main>
      <Footer flagColors={flagColors} />
    </>
  );
}

export default async function CountrySlugPage(props: PageProps) {
  const params = await props.params;
  const { countryCode, slug } = params;
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());

  if (!country) {
    notFound();
  }

  const flagColors = getFlagColors(country.code);

  // Check if it's an SEO service
  const seoService = getSEOService(slug);
  if (seoService) {
    return renderCountrySEOServicePage(country, seoService, flagColors, countryCode);
  }

  // Check if it's a CMS platform
  const cmsPlatform = getCMSPlatform(slug);
  if (cmsPlatform) {
    return renderCountryCMSPlatformPage(country, cmsPlatform, flagColors, countryCode);
  }

  // Check if it's an industry
  const industry = industries.find(i => i.slug === slug);
  if (industry) {
    // Render industry page
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: country.name, url: `/services/${countryCode}` },
      { name: industry.name, url: `/services/${countryCode}/${slug}` }
    ];

    const faqs = [
      {
        question: `How can ${industry.name} help my business in ${country.name}?`,
        answer: `Our ${industry.name.toLowerCase()} services are specifically designed for ${country.name} businesses. We understand the local market, competition, and customer search behavior in ${country.name}, ensuring your business ranks high in local searches and attracts more customers.`
      },
      {
        question: `What makes your ${industry.name} different in ${country.name}?`,
        answer: `We combine international SEO expertise with deep local knowledge of ${country.name}'s market. Our strategies are tailored to ${country.name}'s unique business environment, consumer behavior, and search patterns, ensuring maximum visibility and ROI.`
      },
      {
        question: `How long does it take to see results for ${industry.name} in ${country.name}?`,
        answer: `Most businesses in ${country.name} see initial improvements within 30-60 days, with significant results by 90 days. Timeline varies based on competition levels in your specific city and industry niche within ${country.name}.`
      },
      {
        question: `Do you provide ${industry.name} services across all cities in ${country.name}?`,
        answer: `Yes! We provide comprehensive ${industry.name.toLowerCase()} services across all major cities and regions in ${country.name}. Our local expertise extends to ${country.cities.length}+ cities, ensuring effective local SEO no matter where your business is located.`
      }
    ];

    return (
      <>
        <Header flagColors={flagColors} />
        
        <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
          <section 
            className="relative py-20 overflow-hidden"
            style={{
              background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
            }}
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full shadow-lg mb-6">
                  <span className="text-4xl">{country.flag}</span>
                  <span className="text-white font-medium">{country.name}</span>
                </div>
                
                <h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
                >
                  {industry.name} SEO Services in {country.name}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Expert {industry.name.toLowerCase()} services for businesses across {country.name}. 
                  Get more customers, dominate local search results, and grow your business with proven SEO strategies 
                  tailored to {country.name}'s market.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                    style={{
                      background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary})`
                    }}
                  >
                    Get Started Today
                  </Link>
                  <Link
                    href={`/${countryCode}`}
                    className="px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border text-white"
                    style={{
                      backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                      borderColor: flagColors.primary
                    }}
                  >
                    View All Services in {country.name}
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <WhyChooseMe industry={industry.name} />
          <SEOFramework industry={industry.name} location={country.name} />

          {/* Industry Statistics */}
          <IndustryStats 
            industry={industry.name}
            stats={[
              { value: "87%", label: `of consumers in ${country.name} search online for local ${industry.name.toLowerCase()} services`, icon: <FaSearch className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
              { value: "76%", label: `of local searches in ${country.name} result in a same-day service call`, icon: <FaPhoneAlt className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
              { value: "92%", label: `of customers in ${country.name} read reviews before choosing a service`, icon: "⭐", color: "from-yellow-500 to-orange-500" },
              { value: "3.8x", label: `higher conversion rate from organic search vs paid ads in ${country.name}`, icon: <FaDollarSign className="w-6 h-6" />, color: "from-purple-500 to-pink-500" }
            ]}
          />

          {/* Process Timeline */}
          <ProcessTimeline 
            industry={industry.name}
            steps={[
              { step: 1, title: `${industry.name} SEO Audit`, description: `We analyze your current online presence, local rankings in ${country.name}, competitor landscape, and identify opportunities to capture more local searches.`, icon: <FaSearch className="w-6 h-6" />, duration: "Week 1" },
              { step: 2, title: "Keyword & Content Strategy", description: `We map out target keywords including location-specific terms, service-based queries, and ${country.name} modifiers that drive qualified leads.`, icon: <FaClipboardList className="w-6 h-6" />, duration: "Week 2" },
              { step: 3, title: "Technical & GBP Optimization", description: `We optimize your website speed, implement ${industry.name.toLowerCase()} schema markup, and fully optimize your Google Business Profile for ${country.name} visibility.`, icon: <FaCog className="w-6 h-6" />, duration: "Weeks 2-4" },
              { step: 4, title: "Service & Location Pages", description: `We create optimized pages for each city and service area in ${country.name} to capture specific search intent.`, icon: <FaMapMarkerAlt className="w-6 h-6" />, duration: "Weeks 3-6" },
              { step: 5, title: "Citation & Review Strategy", description: `We build citations on ${country.name} directories and implement review generation systems to boost your local authority.`, icon: "⭐", duration: "Ongoing" },
              { step: 6, title: "Monitor & Scale", description: `We track rankings, calls, and conversions in ${country.name}, continuously optimizing to capture more local opportunities.`, icon: <FaChartLine className="w-6 h-6" />, duration: "Ongoing" }
            ]}
          />

          {/* Topic Cluster Section */}
          <TopicClusterSection 
            industry={industry.name}
            pillars={[
              { title: "Service Type Content", description: `Comprehensive pages for different ${industry.name.toLowerCase()} services in ${country.name}`, topics: [`${industry.name} services`, "Service areas", "Service types", "Specialized services"], icon: <FaWrench className="w-6 h-6" /> },
              { title: "Location Authority Content", description: `Dedicated pages for major cities in ${country.name} to capture location-specific searches`, topics: ["City service pages", "Neighborhood targeting", "Service area optimization", "Near me rankings"], icon: <FaTags className="w-6 h-6" /> },
              { title: "Problem-Solution Content", description: `Troubleshooting guides that capture customers researching their needs in ${country.name}`, topics: ["Common problems", "Solution guides", "How-to content", "FAQ pages"], icon: <FaLightbulb className="w-6 h-6" /> },
              { title: "Local Service Content", description: `Geo-targeted pages for cities, neighborhoods, and service areas across ${country.name}`, topics: ["City service pages", "Neighborhood targeting", "Service area optimization", "Local rankings"], icon: <FaMapMarkerAlt className="w-6 h-6" /> }
            ]}
          />

          {/* Local SEO Signals */}
          <LocalSEOSignals 
            industry={industry.name}
            signals={[
              { title: "Google Business Profile", description: `Optimized GBP with ${industry.name.toLowerCase()} categories, service areas in ${country.name}, photos, and customer testimonials`, importance: "Critical", icon: <FaMapMarkerAlt className="w-6 h-6" /> },
              { title: `${country.name} Citations`, description: `Listings on ${country.name} directories, local business platforms, and industry-specific directories`, importance: "Critical", icon: <FaClipboardList className="w-6 h-6" /> },
              { title: "Customer Reviews", description: `5-star reviews mentioning ${industry.name.toLowerCase()} services in ${country.name} for relevance signals`, importance: "High", icon: "⭐" },
              { title: "Service Area Pages", description: `Individual pages for each city and neighborhood in ${country.name} within your service territory`, importance: "High", icon: <FaHome className="w-6 h-6" /> },
              { title: "Local Schema Markup", description: `LocalBusiness and Service schema highlighting ${industry.name.toLowerCase()} specialties in ${country.name}`, importance: "High", icon: <FaWrench className="w-6 h-6" /> },
              { title: "Local Backlinks", description: `Links from ${country.name} business sites, local news, and community organizations`, importance: "Medium", icon: <FaLink className="w-6 h-6" /> }
            ]}
          />

          {/* Competitor Comparison */}
          <CompetitorComparison 
            industry={industry.name}
            comparisons={[
              { feature: "Local Search Visibility", withSEO: `Appear first for '${industry.name.toLowerCase()} in ${country.name}' searches`, withoutSEO: "Competitors capture local searches" },
              { feature: "City-Specific Searches", withSEO: `Rank for searches in all major cities across ${country.name}`, withoutSEO: "Miss high-intent city searches" },
              { feature: "Cost Per Lead", withSEO: "Free organic leads that compound", withoutSEO: "$50-150+ per lead from ads" },
              { feature: "Customer Trust", withSEO: "Organic results = higher trust", withoutSEO: "Paid ads often get skipped" },
              { feature: "Local Pack Presence", withSEO: `Dominate the map 3-pack in ${country.name}`, withoutSEO: "Invisible to local searchers" },
              { feature: "24/7 Lead Generation", withSEO: "Leads come while you sleep", withoutSEO: "Only referrals and repeat customers" }
            ]}
          />

          {/* Case Study Highlight */}
          <CaseStudyHighlight 
            industry={industry.name}
            caseStudy={{
              title: `${industry.name} Business Transformation in ${country.name}`,
              industry: industry.name,
              results: [
                { metric: "Organic Traffic", value: "380%", change: "increase in 6 months" },
                { metric: "Service Calls", value: "4x", change: "more monthly calls" },
                { metric: "Google Rankings", value: "#1", change: `for 25+ keywords in ${country.name}` },
                { metric: "Revenue Growth", value: "156%", change: "year over year" }
              ],
              testimonial: `We went from getting a few calls a week to having to hire more staff to handle the volume in ${country.name}. The SEO investment paid for itself in the first month.`,
              clientName: `${industry.name} Business Owner in ${country.name}`
            }}
          />

          {/* Trust Signals */}
          <TrustSignals 
            industry={industry.name}
            customItems={[
              { icon: <FaWrench className="w-6 h-6" />, title: `${industry.name} Industry Expertise`, description: `Deep understanding of how customers in ${country.name} search for ${industry.name.toLowerCase()} services` },
              { icon: <FaChartLine className="w-6 h-6" />, title: "Proven Local SEO Results", description: `Track record of getting ${industry.name.toLowerCase()} businesses to #1 in local search across ${country.name}` },
              { icon: <FaBolt className="w-6 h-6" />, title: "Country-Specific Focus", description: `Specialized strategies for capturing local searches in ${country.name}` },
              { icon: <FaBullseye className="w-6 h-6" />, title: "City-Level Targeting", description: `Expertise ranking for services in all major cities across ${country.name}` },
              { icon: <FaChartArea className="w-6 h-6" />, title: "Transparent ROI Tracking", description: `Clear reporting showing calls, leads, and revenue from SEO efforts in ${country.name}` },
              { icon: <FaHandshake className="w-6 h-6" />, title: "Dedicated Support", description: "Direct access to your SEO specialist for questions and strategy discussions" }
            ]}
          />

          <section 
            className="py-20"
            style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                  Serving Cities Worldwide
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                  We provide {industry.name.toLowerCase()} services in all major cities across {country.name}
                </p>
              </div>
              
              <CitiesGridExpandable 
                cities={country.cities}
                countrySlug={countryCode}
                flagColors={flagColors}
                initialCount={10}
                serviceSlug={slug}
              />
            </div>
          </section>

          <TopSEOServices countryCode={countryCode} />

          <HireLocalSEO industry={industry.name} />

          <section 
            className="py-20"
            style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                  What Our {country.name} Clients Say
                </h2>
                <p className="text-lg" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                  Success stories from businesses across {country.name}
                </p>
              </div>
              <TestimonialsSlider />
            </div>
          </section>

          <FAQSection faqs={faqs} />

          <section 
            className="py-20"
            style={{
              background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}, ${flagColors.accent})`
            }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Dominate {industry.name} SEO in {country.name}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's grow your business across {country.name} with proven SEO strategies
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{ color: flagColors.primary }}
              >
                Start Your {country.name} SEO Journey
              </Link>
            </div>
          </section>
        </main>

        <Footer flagColors={flagColors} />
      </>
    );
  }

  // Check if it's a city
  const city = country.cities.find(c => c.slug === slug);
  if (city) {
    // Render city landing page (you can customize this)
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: country.name, url: `/services/${countryCode}` },
      { name: city.name, url: `/services/${countryCode}/${slug}` }
    ];

    return (
      <>
        <Header flagColors={flagColors} />
        
        <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
          <section 
            className="relative py-20 overflow-hidden"
            style={{
              background: flagColors.gradientStyle || `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}${flagColors.accent ? `, ${flagColors.accent}` : ''})`
            }}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full shadow-lg mb-6">
                <span className="text-4xl">{country.flag}</span>
                <span className="text-white font-medium">{city.name}, {country.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                SEO Services in {city.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Professional SEO services for businesses in {city.name}, {country.name}
              </p>
            </div>
          </section>

          <section 
            className="py-20"
            style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: flagColors.textOnLight || '#ffffff' }}>Industries We Serve in {city.name}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.slice(0, 12).map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/${countryCode}/${city.slug}/${industry.slug}`}
                    className="p-6 rounded-xl hover:shadow-xl transition-all"
                    style={{ 
                      backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                      border: `2px solid ${flagColors.primary}40`
                    }}
                  >
                    <h3 className="font-bold text-lg mb-2" style={{ color: flagColors.textOnLight || '#ffffff' }}>{industry.name}</h3>
                    <p className="text-sm" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.8 }}>{industry.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer flagColors={flagColors} />
      </>
    );
  }

  // Neither city nor industry found
  notFound();
}
