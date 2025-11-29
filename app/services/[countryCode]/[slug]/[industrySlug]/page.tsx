import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { seoServices, getSEOService } from '@/data/seoServices';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/seo/FAQSection';
import SEOFramework from '@/components/industries/SEOFramework';
import WhyChooseMe from '@/components/industries/WhyChooseMe';
import HireLocalSEO from '@/components/industries/HireLocalSEO';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import TopSEOServices from '@/components/services/TopSEOServices';
import IndustryStats from '@/components/industries/IndustryStats';
import IndustriesGrid from '@/components/industries/IndustriesGrid';
import CountriesGrid from '@/components/industries/CountriesGrid';
import { getFlagColors } from '@/data/flagColors';
import { 
  FaCog, FaMapMarkerAlt, FaShoppingCart, FaFileAlt, FaLink, FaGlobe, 
  FaClipboardCheck, FaKey, FaBolt, FaTachometerAlt, FaRobot, FaCode, 
  FaMobileAlt, FaShieldAlt, FaSearch, FaChartLine, FaRocket, FaStar, 
  FaStore, FaUsers, FaTags, FaPenNib, FaBook, FaHandshake, FaNewspaper, 
  FaGraduationCap, FaNetworkWired, FaComments, FaBuilding, FaHeading, 
  FaImage, FaList, FaExclamationTriangle, FaCheckCircle, 
  FaBullseye, FaDatabase
} from 'react-icons/fa';

// Return empty array to avoid stack overflow from generating
// country × city × industry combinations. These routes won't be
// pre-generated in static export but the build will succeed.
export async function generateStaticParams(): Promise<Array<{
  countryCode: string;
  slug: string;
  industrySlug: string;
}>> {
  return [];
}

interface PageProps {
  params: Promise<{
    countryCode: string;
    slug: string;
    industrySlug: string;
  }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { countryCode, slug: citySlug, industrySlug } = params;
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());
  const cityData = country?.cities.find(c => c.slug === citySlug);

  if (!country || !cityData) {
    return { title: 'Page Not Found' };
  }

  // Check if it's an SEO service
  const seoService = getSEOService(industrySlug);
  if (seoService) {
    return {
      title: `${seoService.name} SEO Services in ${cityData.name}, ${country.name} | Expert SEO Services`,
      description: `Professional ${seoService.name.toLowerCase()} SEO services in ${cityData.name}, ${country.name}. ${seoService.description} Tailored for ${cityData.name} businesses.`,
      openGraph: {
        title: `${seoService.name} SEO Services in ${cityData.name}, ${country.name}`,
        description: `Expert ${seoService.name.toLowerCase()} SEO services in ${cityData.name}`,
        type: 'website'
      }
    };
  }

  // Check if it's an industry
  const industry = industries.find(i => i.slug === industrySlug);
  if (industry) {
    return {
      title: `${industry.name} SEO in ${cityData.name}, ${country.name} | Local SEO Expert`,
      description: `Professional ${industry.name.toLowerCase()} SEO services in ${cityData.name}, ${country.name}. Get more local customers and dominate search results.`,
      openGraph: {
        title: `${industry.name} SEO in ${cityData.name}, ${country.name}`,
        description: `Expert ${industry.name.toLowerCase()} SEO services in ${cityData.name}`,
        type: 'website'
      }
    };
  }

  return { title: 'Page Not Found' };
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

// Get service content (reuse from country page logic)
function getServiceContent(seoServiceSlug: string) {
  switch (seoServiceSlug) {
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
}

// Render city-specific SEO service page
function renderCitySEOServicePage(
  country: any,
  cityData: any,
  seoService: any,
  flagColors: any,
  countryCode: string,
  citySlug: string
) {
  const IconComponent = getIconComponent(seoService.icon);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: country.name, url: `/${countryCode}` },
    { name: cityData.name, url: `/${countryCode}/${citySlug}` },
    { name: seoService.name, url: `/${countryCode}/${citySlug}/${seoService.slug}` }
  ];

  // City-specific FAQs
  const faqs = [
    {
      question: `How can ${seoService.name} help my business in ${cityData.name}?`,
      answer: `Our ${seoService.name.toLowerCase()} services are specifically tailored for ${cityData.name} businesses. We understand the local ${cityData.name} market dynamics, search behavior, and competition, ensuring your business achieves maximum visibility in ${cityData.name} search results.`
    },
    {
      question: `What makes your ${seoService.name} different in ${cityData.name}?`,
      answer: `We combine international SEO expertise with hyperlocal knowledge of ${cityData.name}'s digital landscape. Our strategies are customized for ${cityData.name}'s unique business environment, consumer behavior, and search patterns, ensuring maximum ROI for ${cityData.name} businesses.`
    },
    {
      question: `How long does it take to see results for ${seoService.name} in ${cityData.name}?`,
      answer: `Most ${cityData.name} businesses see initial improvements within 30-60 days, with significant results by 90 days. Timeline varies based on competition levels in ${cityData.name} and your specific industry.`
    },
    {
      question: `Do you provide ${seoService.name} services in all areas of ${cityData.name}?`,
      answer: `Yes! We provide comprehensive ${seoService.name.toLowerCase()} services across all areas of ${cityData.name}. Our local expertise covers ${cityData.areas?.length || 10}+ areas, ensuring effective SEO no matter where your business is located in ${cityData.name}.`
    }
  ];

  const serviceContent = getServiceContent(seoService.slug);

  return (
    <>
      <Header flagColors={flagColors} />
      <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
        <section 
          className="relative py-24 overflow-hidden"
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
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 border border-white/30 backdrop-blur-xl mb-8">
              <span className="text-4xl">{country.flag}</span>
              <IconComponent className="text-3xl" />
              <span className="font-semibold">{seoService.name} SEO in {cityData.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {seoService.name} SEO Services in {cityData.name}, {country.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              {seoService.description} Tailored for {cityData.name} businesses to dominate local search results and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                style={{ color: flagColors.primary }}
              >
                Get Free {seoService.shortName} Audit
                <FaRocket />
              </Link>
              <Link 
                href="/case-studies" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                View Case Studies
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {serviceContent.stats.slice(0, 4).map((stat: any, index: number) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SEOFramework industry={seoService.name} location={`${cityData.name}, ${country.name}`} />
        <WhyChooseMe industry={seoService.name} />
        <HireLocalSEO industry={seoService.name} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                Comprehensive {seoService.name} Services for {cityData.name}
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                Everything you need to dominate search results in {cityData.name} with proven {seoService.name.toLowerCase()} strategies.
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

        {cityData.areas && cityData.areas.length > 0 && (
          <section 
            className="py-20"
            style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                  {seoService.name} Services Across {cityData.name} Areas
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                  We provide {seoService.name.toLowerCase()} services in all areas of {cityData.name}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cityData.areas.map((area: any) => (
                  <div
                    key={area.slug}
                    className="group p-4 rounded-xl hover:shadow-lg transition-all duration-300 border-2"
                    style={{
                      backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                      borderColor: flagColors.primary + '40'
                    }}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold transition-colors text-white">
                        {area.name}
                      </h3>
                      <p className="text-sm mt-1 text-white" style={{ opacity: 0.9 }}>
                        {seoService.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
                What Our {cityData.name} Clients Say
              </h2>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title={`${seoService.name} Questions for ${cityData.name}`} />

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
              Ready to Dominate {seoService.name} in {cityData.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a free {seoService.name.toLowerCase()} audit and discover how we can transform your search visibility in {cityData.name}.
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

export default async function CityIndustryPage(props: PageProps) {
  const params = await props.params;
  const { countryCode, slug: citySlug, industrySlug } = params;
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());
  const cityData = country?.cities.find(c => c.slug === citySlug);

  if (!country || !cityData) {
    notFound();
  }

  const flagColors = getFlagColors(country.code);

  // Check if it's an SEO service
  const seoService = getSEOService(industrySlug);
  if (seoService) {
    return renderCitySEOServicePage(country, cityData, seoService, flagColors, countryCode, citySlug);
  }

  // Check if it's an industry
  const industry = industries.find(i => i.slug === industrySlug);
  if (!industry) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: country.name, url: `/${countryCode}` },
    { name: cityData.name, url: `/${countryCode}/${citySlug}` },
    { name: `${industry.name} SEO`, url: `/${countryCode}/${citySlug}/${industrySlug}` }
  ];

  const faqs = [
    {
      question: `How can ${industry.name} SEO help my business in ${cityData.name}?`,
      answer: `Our ${industry.name.toLowerCase()} SEO services are specifically designed for ${cityData.name} businesses. We understand the local ${cityData.name} market, competition, and customer search behavior.`
    },
    {
      question: `What makes your ${industry.name} SEO different in ${cityData.name}?`,
      answer: `We combine international SEO expertise with hyperlocal knowledge of ${cityData.name}'s market, ensuring maximum visibility in ${cityData.name} search results.`
    },
    {
      question: `How long does it take to see ${industry.name} SEO results in ${cityData.name}?`,
      answer: `Most ${cityData.name} businesses see initial improvements within 30-60 days, with significant results by 90 days.`
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
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl border border-white/30 px-4 py-2 rounded-full shadow-lg mb-6">
                <span className="text-4xl">{country.flag}</span>
                <span className="text-white font-medium">{cityData.name}, {country.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                {industry.name} SEO in {cityData.name}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Expert {industry.name.toLowerCase()} SEO services for {cityData.name} businesses. 
                Dominate local {cityData.name} search results and grow your business.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary})`
                  }}
                >
                  Get {industry.name} SEO in {cityData.name}
                </Link>
                <Link
                  href={`/${countryCode}/${industrySlug}`}
                  className="px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 border text-white"
                  style={{
                    backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                    borderColor: flagColors.primary
                  }}
                >
                  View {country.name} {industry.name} SEO
                </Link>
              </div>
            </div>
          </div>
        </section>

        <WhyChooseMe industry={`${industry.name} SEO`} />
        <SEOFramework industry={`${industry.name} SEO`} location={`${cityData.name}, ${country.name}`} />

        {cityData.areas && cityData.areas.length > 0 && (
          <section 
            className="py-20"
            style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                  {industry.name} SEO Services Across {cityData.name} Areas
                </h2>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                  We provide {industry.name.toLowerCase()} SEO services in all areas of {cityData.name}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cityData.areas.map((area) => (
                  <div
                    key={area.slug}
                    className="group p-4 rounded-xl hover:shadow-lg transition-all duration-300 border-2"
                    style={{
                      backgroundColor: flagColors.darkBg || 'rgba(15, 23, 42, 0.8)',
                      borderColor: flagColors.primary + '40'
                    }}
                  >
                    <div className="text-center">
                      <h3 className="font-semibold transition-colors text-white">
                        {area.name}
                      </h3>
                      <p className="text-sm mt-1 text-white" style={{ opacity: 0.9 }}>
                        {industry.name} SEO
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        <HireLocalSEO industry={`${industry.name} SEO`} />

        <section 
          className="py-20"
          style={{ backgroundColor: flagColors.lightBg || 'rgba(15, 23, 42, 0.5)' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: flagColors.textOnLight || '#ffffff' }}>
                What Our {cityData.name} Clients Say
              </h2>
              <p className="text-lg" style={{ color: flagColors.textOnLight || '#e2e8f0', opacity: 0.9 }}>
                Success stories from businesses in {cityData.name}
              </p>
            </div>
            <TestimonialsSlider />
          </div>
        </section>

        <FAQSection faqs={faqs} title={`${industry.name} SEO in ${cityData.name} FAQs`} />

        <section 
          className="py-20"
          style={{
            background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary}, ${flagColors.accent})`
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for {industry.name} SEO in {cityData.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's grow your {cityData.name} {industry.name.toLowerCase()} business with proven SEO strategies
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              style={{ color: flagColors.primary }}
            >
              Get Your Free {industry.name} SEO Audit
            </Link>
          </div>
        </section>
      </main>

      <Footer flagColors={flagColors} />
    </>
  );
}
