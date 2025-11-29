import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { countries } from '@/data/locations'
import { FaQuoteLeft, FaRocket, FaLightbulb, FaHeart, FaGraduationCap, FaBriefcase, FaTrophy, FaUsers, FaChartLine, FaCode, FaSearch, FaPalette, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaCoffee, FaLaptopCode, FaBookOpen, FaMountain, FaStar, FaCheckCircle, FaGlobe, FaChartBar } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About Muhammad Adeel | Professional SEO Specialist',
  description: 'Meet Muhammad Adeel, expert SEO specialist with 8+ years helping 250+ businesses achieve top Google rankings. Specialized in semantic SEO and technical optimization.',
  keywords: 'Muhammad Adeel, Muhammad Adeel SEO, Muhammad Adeel SEO specialist, Muhammad Adeel SEO expert, Muhammad Adeel SEO consultant, Adeel Ahmad, Adeel Ahmad SEO, SEO specialist Muhammad Adeel, SEO expert Muhammad Adeel, professional SEO consultant Muhammad Adeel, about Muhammad Adeel, Muhammad Adeel biography, Muhammad Adeel experience, Muhammad Adeel background, semantic SEO specialist, technical SEO expert, local SEO consultant, international SEO expert, Koray method SEO, topical authority expert, entity optimization specialist, Google ranking expert, search engine optimization consultant, digital marketing expert Muhammad Adeel',
  alternates: {
    canonical: 'https://adeelahmad.com/about',
  },
  openGraph: {
    title: 'Muhammad Adeel - Expert SEO Specialist | Professional Background & Journey',
    description: 'Meet Muhammad Adeel - Professional SEO specialist with 8+ years helping 250+ businesses achieve top Google rankings. Expert in semantic SEO, technical optimization, and Koray method.',
    type: 'profile',
    url: 'https://adeelahmad.com/about',
    images: [{
      url: '/MuhammadAdeelSEO.jpg',
      width: 1200,
      height: 630,
      alt: 'Muhammad Adeel - Professional SEO Specialist and Search Engine Optimization Expert',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Adeel - SEO Specialist & Consultant',
    description: 'Professional SEO expert helping businesses grow through semantic SEO, technical optimization, and strategic search marketing.',
    images: ['/MuhammadAdeelSEO.jpg'],
  },
  authors: [{ name: 'Muhammad Adeel', url: 'https://adeelahmad.com' }],
}

// Core values
const coreValues = [
  {
    icon: <FaHeart className="w-8 h-8" />,
    title: 'Passion-Driven',
    description: 'Every project excites me. I genuinely love seeing businesses grow and reach their potential through strategic SEO.'
  },
  {
    icon: <FaLightbulb className="w-8 h-8" />,
    title: 'Always Learning',
    description: 'Google changes, I adapt. Staying ahead of algorithm updates isn\'t just my job—it\'s my obsession.'
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Your Success = My Success',
    description: 'I measure my achievements by your growth. When you win, I win. It\'s that simple.'
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: 'Honest & Transparent',
    description: 'No BS promises or fake guarantees. Just real strategies, honest timelines, and measurable results.'
  },
];

// Journey milestones
const journeyMilestones = [
  {
    year: '2017',
    title: 'The Spark',
    description: 'It all started with a simple question: "How do websites rank on Google?" What began as curiosity quickly turned into an obsession. I spent nights learning, testing, and understanding search algorithms.',
    icon: <FaBookOpen className="w-6 h-6" />
  },
  {
    year: '2019',
    title: 'First Major Win',
    description: 'Helped a struggling local business triple their organic traffic in 4 months. Watching them grow their customer base through my work was the most rewarding feeling ever. I knew this was my calling.',
    icon: <FaRocket className="w-6 h-6" />
  },
  {
    year: '2021',
    title: 'Going International',
    description: 'Started working with clients across different countries and realized SEO isn\'t just about keywords—it\'s about understanding cultures, markets, and user behavior in every region.',
    icon: <FaGlobe className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'Mastering Semantic SEO',
    description: 'Discovered Koray Tuğberk GÜBÜR\'s semantic SEO framework. This changed everything. Instead of chasing keywords, I learned to build true topical authority and contextual relevance.',
    icon: <FaLightbulb className="w-6 h-6" />
  },
  {
    year: '2025',
    title: 'Present Day',
    description: 'Working with 250+ businesses worldwide, constantly evolving my skills, and still as passionate about SEO as day one. The journey continues, and every day brings new challenges to solve.',
    icon: <FaTrophy className="w-6 h-6" />
  },
];

// What I love
const passions = [
  { icon: <FaCoffee className="w-5 h-5" />, text: 'Late-night strategy sessions with coffee' },
  { icon: <FaChartLine className="w-5 h-5" />, text: 'Watching rankings climb to page 1' },
  { icon: <FaLaptopCode className="w-5 h-5" />, text: 'Solving tricky technical SEO puzzles' },
  { icon: <FaBookOpen className="w-5 h-5" />, text: 'Reading about the latest algorithm updates' },
  { icon: <FaUsers className="w-5 h-5" />, text: 'Building genuine relationships with clients' },
  { icon: <FaMountain className="w-5 h-5" />, text: 'Helping underdogs beat big competitors' },
];

// Expertise areas
const expertiseAreas = [
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: 'Semantic SEO',
    description: 'Building topical authority through entity optimization, contextual relevance, and Koray Tuğberk GÜBÜR\'s methodology.',
    skills: ['Entity Optimization', 'Topic Clusters', 'Semantic Relationships', 'Content Networks']
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'Technical SEO',
    description: 'Resolving crawl issues, improving Core Web Vitals, and optimizing site architecture for maximum search visibility.',
    skills: ['Site Speed', 'Schema Markup', 'JavaScript SEO', 'Mobile Optimization']
  },
  {
    icon: <FaMapMarkerAlt className="w-8 h-8" />,
    title: 'Local SEO',
    description: 'Dominating local search results with Google Business Profile optimization and local citation strategies.',
    skills: ['GBP Optimization', 'Local Citations', 'Review Management', 'NAP Consistency']
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: 'Content Strategy',
    description: 'Creating comprehensive content ecosystems that satisfy user intent and establish domain authority.',
    skills: ['Content Planning', 'Keyword Research', 'User Intent', 'E-E-A-T Signals']
  },
];

// Certifications
const certifications = [
  { name: 'Google Analytics 4 Certified', org: 'Google', year: '2024' },
  { name: 'Google Ads Search Certified', org: 'Google', year: '2024' },
  { name: 'SEMrush SEO Toolkit', org: 'SEMrush', year: '2023' },
  { name: 'HubSpot Content Marketing', org: 'HubSpot', year: '2023' },
  { name: 'Yoast SEO Academy', org: 'Yoast', year: '2022' },
  { name: 'Ahrefs SEO Essentials', org: 'Ahrefs', year: '2022' },
];

// Tools expertise
  const tools = [
    { name: 'Google Search Console', category: 'Analytics' },
    { name: 'Google Analytics 4', category: 'Analytics' },
    { name: 'SEMrush', category: 'SEO' },
    { name: 'Ahrefs', category: 'SEO' },
    { name: 'Screaming Frog', category: 'Technical' },
    { name: 'Moz Pro', category: 'SEO' },
    { name: 'Surfer SEO', category: 'Content' },
    { name: 'Clearscope', category: 'Content' },
    { name: 'GTmetrix', category: 'Technical' },
    { name: 'PageSpeed Insights', category: 'Technical' },
    { name: 'Google Tag Manager', category: 'Analytics' },
    { name: 'Looker Studio', category: 'Analytics' },
  ];

  // Top countries for display
  const topCountries = [
    { code: 'US', name: 'United States', slug: 'us', cities: countries.find(c => c.code === 'us')?.cities || [] },
    { code: 'GB', name: 'United Kingdom', slug: 'uk', cities: countries.find(c => c.code === 'uk')?.cities || [] },
    { code: 'CA', name: 'Canada', slug: 'ca', cities: countries.find(c => c.code === 'ca')?.cities || [] },
    { code: 'AU', name: 'Australia', slug: 'au', cities: countries.find(c => c.code === 'au')?.cities || [] },
    { code: 'DE', name: 'Germany', slug: 'de', cities: countries.find(c => c.code === 'de')?.cities || [] },
    { code: 'FR', name: 'France', slug: 'fr', cities: countries.find(c => c.code === 'fr')?.cities || [] },
    { code: 'JP', name: 'Japan', slug: 'jp', cities: countries.find(c => c.code === 'jp')?.cities || [] },
    { code: 'IN', name: 'India', slug: 'in', cities: countries.find(c => c.code === 'in')?.cities || [] },
    { code: 'AE', name: 'UAE', slug: 'ae', cities: countries.find(c => c.code === 'ae')?.cities || [] },
    { code: 'SG', name: 'Singapore', slug: 'sg', cities: countries.find(c => c.code === 'sg')?.cities || [] },
    { code: 'NL', name: 'Netherlands', slug: 'nl', cities: countries.find(c => c.code === 'nl')?.cities || [] },
    { code: 'ES', name: 'Spain', slug: 'es', cities: countries.find(c => c.code === 'es')?.cities || [] },
  ];export default function AboutPage() {
  const topCountries = countries.slice(0, 12);
  
  // Enhanced Person Schema with complete information
  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    "@id": "https://adeelahmad.com/about#muhammad-adeel",
    "name": "Muhammad Adeel",
    "alternateName": ["Adeel Ahmad", "Muhammad Adeel SEO", "Adeel Ahmad SEO"],
    "description": "Muhammad Adeel is a professional SEO specialist and search engine optimization consultant with 8+ years of experience helping businesses achieve top Google rankings through semantic SEO, technical optimization, and strategic digital marketing.",
    "url": "https://adeelahmad.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://adeelahmad.com/MuhammadAdeelSEO.jpg",
      "caption": "Muhammad Adeel - Professional SEO Specialist",
      "width": "1200",
      "height": "630"
    },
    "jobTitle": "SEO Specialist & Digital Marketing Consultant",
    "worksFor": {
      "@type": "Organization",
      "name": "Muhammad Adeel SEO Consulting",
      "url": "https://adeelahmad.com"
    },
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "SEO Specialist",
        "description": "Expert in search engine optimization, semantic SEO, and technical website optimization",
        "occupationalCategory": "15-1299.09",
        "skills": "Semantic SEO, Technical SEO, Local SEO, E-commerce SEO, Link Building, Content Strategy, Keyword Research, Google Analytics, Entity Optimization, Topical Authority, Core Web Vitals",
        "responsibilities": "Improving search engine rankings, increasing organic traffic, technical SEO audits, content strategy, link building campaigns"
      },
      {
        "@type": "Occupation",
        "name": "SEO Consultant",
        "description": "Professional SEO consultant helping businesses improve online visibility and search rankings",
        "skills": "SEO Strategy, Competitor Analysis, Market Research, Algorithm Updates, Google Search Console, SEMrush, Ahrefs"
      },
      {
        "@type": "Occupation",
        "name": "Digital Marketing Expert",
        "description": "Digital marketing specialist focusing on organic search growth and conversion optimization",
        "skills": "Digital Marketing Strategy, Conversion Rate Optimization, Content Marketing, Analytics"
      }
    ],
    "knowsAbout": [
      "Search Engine Optimization",
      "Semantic SEO",
      "Technical SEO",
      "Local SEO",
      "E-commerce SEO",
      "International SEO",
      "Mobile SEO",
      "Voice Search Optimization",
      "Content Strategy",
      "Link Building",
      "Digital PR",
      "Entity Optimization",
      "Topical Authority",
      "Koray Tuğberk GÜBÜR Semantic SEO Method",
      "Google Algorithm Updates",
      "Schema Markup",
      "Core Web Vitals",
      "JavaScript SEO",
      "Page Speed Optimization",
      "Keyword Research",
      "Competitor Analysis",
      "Google Analytics",
      "Google Search Console",
      "Content Marketing",
      "Conversion Rate Optimization"
    ],
    "knowsLanguage": ["English", "Urdu"],
    "email": "hello@adeelahmad.com",
    "telephone": "+923231458064",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923231458064",
      "contactType": "Customer Service",
      "email": "hello@adeelahmad.com",
      "availableLanguage": ["English", "Urdu"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.linkedin.com/in/m-adeeliqbal",
      "https://www.facebook.com/m.adeeliqbal644",
      "https://wa.me/+923231458064"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Professional SEO Training and Certifications"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Analytics 4 Certified",
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Ads Search Certified",
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "SEMrush SEO Toolkit Certified",
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": "SEMrush Academy"
        }
      }
    ],
    "award": "Top-Rated SEO Specialist",
    "seeks": {
      "@type": "Demand",
      "description": "SEO consulting projects, technical SEO audits, semantic SEO implementation, local SEO services, e-commerce optimization, and international SEO campaigns"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Consulting Services",
          "description": "Professional SEO consulting for businesses looking to improve search rankings and organic traffic"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Technical SEO Audit",
          "description": "Comprehensive technical SEO analysis and optimization recommendations"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Semantic SEO Services",
          "description": "Advanced semantic SEO implementation using Koray method for topical authority"
        }
      }
    ],
    "areaServed": countries.map(c => ({
      "@type": "Country",
      "name": c.name
    })),
    "serviceArea": {
      "@type": "GeoShape",
      "name": "Global - 90+ Countries"
    },
    "numberOfEmployees": "1",
    "foundingDate": "2017",
    "slogan": "Helping Businesses Dominate Search Results Through Strategic SEO"
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
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
        "name": "About Muhammad Adeel",
        "item": "https://adeelahmad.com/about"
      }
    ]
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@id": "https://adeelahmad.com/about#muhammad-adeel"
    },
    "datePublished": "2017-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "author": {
      "@id": "https://adeelahmad.com/about#muhammad-adeel"
    },
    "publisher": {
      "@id": "https://adeelahmad.com/about#muhammad-adeel"
    },
    "name": "About Muhammad Adeel - Professional SEO Specialist",
    "description": "Learn about Muhammad Adeel's journey as a professional SEO specialist, expertise areas, and how he helps businesses achieve top search rankings."
  };

  // FAQPage Schema
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Muhammad Adeel different from other SEO specialists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammad Adeel focuses on semantic SEO and entity optimization using the Koray Tuğberk GÜBÜR method, combining technical excellence with deep content strategy. With 8+ years of experience and 250+ successful projects, he delivers sustainable, long-term results rather than quick fixes."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see SEO results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial improvements typically appear within 30-60 days. Significant ranking improvements occur within 3-6 months, depending on competition and current site health. SEO is a long-term strategy, but the results are worth the investment."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Muhammad Adeel works with clients across 90+ countries including the United States, United Kingdom, Canada, Australia, UAE, and many more. He is experienced with international SEO, multi-language optimization, and local SEO for various markets."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Muhammad Adeel specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammad Adeel has experience with 30+ industries including e-commerce, healthcare, legal, real estate, home services, technology, finance, and more. Each strategy is customized based on the specific industry's competitive landscape and search behavior."
        }
      },
      {
        "@type": "Question",
        "name": "What tools does Muhammad Adeel use for SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammad Adeel uses premium SEO tools including Google Search Console, Google Analytics 4, SEMrush, Ahrefs, Screaming Frog, Moz Pro, Surfer SEO, Clearscope, GTmetrix, and more. Having access to the best tools allows comprehensive insights and strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Does Muhammad Adeel offer SEO audits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Muhammad Adeel provides comprehensive SEO audits covering technical SEO, on-page optimization, content analysis, backlink profile review, competitor analysis, and actionable recommendations. Contact for a free initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What is semantic SEO and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Semantic SEO focuses on topic relevance and entity relationships rather than just keywords. It helps Google understand your content's context and establish your website as an authority on specific topics. This approach delivers more sustainable rankings and captures long-tail search opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Muhammad Adeel's SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply contact Muhammad Adeel through email (hello@adeelahmad.com), WhatsApp (+92-323-1458064), or LinkedIn. He will schedule a free consultation to understand your business goals, review your current SEO situation, and create a customized strategy for your success."
        }
      }
    ]
  };
  
  return (
    <>
      <Header />
      
      {/* Enhanced Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
        
        {/* Hero Section - Personal Introduction */}
        <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text Content */}
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-200/50 dark:border-green-800/50 mb-6 backdrop-blur-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-green-700 dark:text-green-300">Available for Projects</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-slate-900 dark:text-white mb-3">Hey there! 👋</span>
                  <span className="block text-slate-900 dark:text-white mb-2">I'm</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Muhammad Adeel
                  </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  <p className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300">
                    SEO Specialist Who Actually Cares
                  </p>
                </div>
                
                <div className="relative mb-8 p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-slate-700">
                  <FaQuoteLeft className="absolute top-4 left-4 w-6 h-6 text-blue-500/30" />
                  <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed pl-8">
                    <strong className="text-blue-600 dark:text-blue-400">Let me be honest with you:</strong> I didn't choose SEO because it was trendy. I fell in love with it because there's something magical about connecting people with exactly what they're searching for. Over the past <strong>8 years</strong>, I've helped <strong>250+ businesses</strong> grow by making their websites visible to the right people at the right time.
                  </p>
                </div>

                {/* Quick Highlights */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 rounded-xl p-4 text-center shadow-md border border-blue-100 dark:border-blue-900">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">8+</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Years Dedicated</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 rounded-xl p-4 text-center shadow-md border border-indigo-100 dark:border-indigo-900">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">250+</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Happy Clients</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 rounded-xl p-4 text-center shadow-md border border-purple-100 dark:border-purple-900">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">90+</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">Countries</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <span>Let's Talk SEO</span>
                    <FaRocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center justify-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-600 px-8 py-4 rounded-xl font-bold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FaTrophy className="w-5 h-5 text-yellow-500" />
                    <span>See My Work</span>
                  </Link>
                </div>
              </div>

              {/* Image with Creative Design */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl animate-pulse" />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse animation-delay-2000" />
                  
                  <div className="relative z-10 w-80 h-80 sm:w-96 sm:h-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-spin-slow opacity-75" style={{ animationDuration: '8s' }} />
                    <div className="absolute inset-2 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                      <Image
                        src="/MuhammadAdeelSEO.jpg"
                        alt="Muhammad Adeel - SEO Specialist"
                        fill
                        className="object-cover scale-110 hover:scale-125 transition-transform duration-500"
                        priority
                        sizes="(max-width: 640px) 320px, 384px"
                      />
                    </div>

                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl font-bold text-sm flex items-center gap-2 animate-bounce-slow">
                      <FaTrophy className="w-4 h-4" />
                      <span>Top Rated</span>
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full shadow-xl font-bold text-sm flex items-center gap-2">
                      <FaHeart className="w-4 h-4 animate-pulse" />
                      <span>98% Happy Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Story - Humanized */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold mb-4">
                <FaBookOpen className="w-4 h-4" />
                My Journey
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                How I Got Here
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                It wasn't a straight path, but every twist and turn taught me something valuable
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full hidden md:block" />
              
              <div className="space-y-8">
                {journeyMilestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative pl-0 md:pl-24"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-black shadow-lg hidden md:flex">
                      {milestone.icon}
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-800/50 dark:to-blue-950/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full text-white font-black md:hidden">
                          {milestone.icon}
                        </span>
                        <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-bold mb-4">
                <FaHeart className="w-4 h-4" />
                What Drives Me
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                My Core Values
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                These aren't just words on a wall – they're principles I live by every single day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                  </div>
                  <div className="pt-8">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What I Love */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+')]" />
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-bold mb-4">
                <FaCoffee className="w-4 h-4" />
                Beyond Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
                What I Love About SEO
              </h2>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                These are the little things that make me jump out of bed excited every morning
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white">
                    {passion.icon}
                  </div>
                  <span className="font-semibold text-white">{passion.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-sm font-bold mb-4">
                <FaRocket className="w-4 h-4" />
                What I Do Best
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                My Expertise Areas
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Specialized skills that help your business dominate search results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Tools */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Certifications */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-3xl p-8 shadow-xl border border-blue-100 dark:border-blue-900">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <FaTrophy className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Certifications
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Continuous learning and official certifications from industry leaders
                </p>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <FaCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-bold text-slate-900 dark:text-white">
                          {cert.name}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                          <span>{cert.org}</span>
                          <span className="w-1 h-1 bg-slate-400 rounded-full" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-3xl p-8 shadow-xl border border-purple-100 dark:border-purple-900">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <FaLaptopCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    Tools I Master
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  Premium SEO tools and software I use to deliver exceptional results
                </p>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-default ${
                        tool.category === 'Analytics'
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                          : tool.category === 'SEO'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                          : tool.category === 'Technical'
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300'
                          : 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      }`}
                    >
                      {tool.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 text-sm font-bold mb-4">
                <FaGlobe className="w-4 h-4" />
                International Reach
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Working Globally
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                From local businesses to international enterprises across {countries.length}+ countries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
              {topCountries.map((country, index) => (
                <Link
                  key={index}
                  href={`/${country.slug}`}
                  className="group flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <span className="text-4xl group-hover:scale-110 transition-transform">
                    {country.code === 'US' ? '🇺🇸' : 
                     country.code === 'GB' ? '🇬🇧' : 
                     country.code === 'CA' ? '🇨🇦' : 
                     country.code === 'AU' ? '🇦🇺' :
                     country.code === 'DE' ? '🇩🇪' :
                     country.code === 'FR' ? '🇫🇷' :
                     country.code === 'JP' ? '🇯🇵' :
                     country.code === 'IN' ? '🇮🇳' :
                     country.code === 'AE' ? '🇦🇪' :
                     country.code === 'SG' ? '🇸🇬' :
                     country.code === 'NL' ? '🇳🇱' :
                     country.code === 'ES' ? '🇪🇸' : '🌍'}
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-300 text-center text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {country.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    {country.cities.length} cities
                  </span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaGlobe className="w-5 h-5" />
                <span>Explore All {countries.length}+ Countries</span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-700 dark:text-amber-300 text-sm font-bold mb-4">
                <FaQuoteLeft className="w-4 h-4" />
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Everything you need to know about working with me
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "What makes Muhammad Adeel different from other SEO specialists?",
                  answer: "I focus on semantic SEO and entity optimization using the Koray Tuğberk GÜBÜR method, combining technical excellence with deep content strategy. With 8+ years of experience and 250+ successful projects, I deliver sustainable, long-term results rather than quick fixes."
                },
                {
                  question: "How long does it take to see SEO results?",
                  answer: "Initial improvements typically appear within 30-60 days. Significant ranking improvements occur within 3-6 months, depending on competition and current site health. SEO is a long-term strategy, but the results are worth the investment."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients across 90+ countries including the United States, United Kingdom, Canada, Australia, UAE, and many more. I'm experienced with international SEO, multi-language optimization, and local SEO for various markets."
                },
                {
                  question: "What industries does Muhammad Adeel specialize in?",
                  answer: "I have experience with 30+ industries including e-commerce, healthcare, legal, real estate, home services, technology, finance, and more. Each strategy is customized based on your specific industry's competitive landscape and search behavior."
                },
                {
                  question: "What tools do you use for SEO?",
                  answer: "I use premium SEO tools including Google Search Console, Google Analytics 4, SEMrush, Ahrefs, Screaming Frog, Moz Pro, Surfer SEO, Clearscope, GTmetrix, and more. Having access to the best tools allows me to provide comprehensive insights and strategies."
                },
                {
                  question: "Do you offer SEO audits?",
                  answer: "Yes! I provide comprehensive SEO audits covering technical SEO, on-page optimization, content analysis, backlink profile review, competitor analysis, and actionable recommendations. Contact me for a free initial consultation."
                },
                {
                  question: "What is semantic SEO and why is it important?",
                  answer: "Semantic SEO focuses on topic relevance and entity relationships rather than just keywords. It helps Google understand your content's context and establish your website as an authority on specific topics. This approach delivers more sustainable rankings and captures long-tail search opportunities."
                },
                {
                  question: "How can I get started with your SEO services?",
                  answer: "Simply contact me through email (hello@adeelahmad.com), WhatsApp (+92-323-1458064), or LinkedIn. I'll schedule a free consultation to understand your business goals, review your current SEO situation, and create a customized strategy for your success."
                }
              ].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <summary className="cursor-pointer px-6 py-4 font-bold text-slate-900 dark:text-white flex items-center justify-between hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-colors">
                    <span className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">Q:</span>
                      <span>{faq.question}</span>
                    </span>
                    <svg className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 py-4 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed">
                    <div className="flex gap-3 border-t border-slate-200 dark:border-slate-700 pt-4">
                      <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">A:</span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Let's Connect */}
        <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-950/50 rounded-3xl p-8 md:p-12 shadow-2xl border border-blue-100 dark:border-blue-900">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">
                Let's Connect!
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you want to discuss SEO strategies, need help with your rankings, or just want to chat about the latest Google update – I'm here! Let's grab a virtual coffee and talk about how I can help your business grow.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="https://www.linkedin.com/in/m-adeeliqbal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/+923231458064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:hello@adeelahmad.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <FaEnvelope className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 rounded-xl font-black text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Start Your SEO Journey</span>
                <FaRocket className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
