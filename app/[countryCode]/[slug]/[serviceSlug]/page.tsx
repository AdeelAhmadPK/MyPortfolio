import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries } from '@/data/locations';
import { industries } from '@/data/industries';
import { seoServices, getSEOService } from '@/data/seoServices';
import { cmsPlatforms, getCMSPlatform } from '@/data/cmsPlatforms';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from '@/components/seo/FAQSection';
import SEOFramework from '@/components/industries/SEOFramework';
import WhyChooseMe from '@/components/industries/WhyChooseMe';
import HireLocalSEO from '@/components/industries/HireLocalSEO';
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
import { getFlagColors } from '@/data/flagColors';
import {
  FaCog, FaMapMarkerAlt, FaShoppingCart, FaFileAlt, FaLink, FaGlobe,
  FaClipboardCheck, FaKey, FaBolt, FaTachometerAlt, FaRobot, FaCode,
  FaMobileAlt, FaShieldAlt, FaSearch, FaChartLine, FaRocket, FaStar,
  FaStore, FaUsers, FaTags, FaPenNib, FaBook, FaHandshake, FaNewspaper,
  FaGraduationCap, FaNetworkWired, FaComments, FaBuilding, FaHeading,
  FaImage, FaEdit, FaList, FaExclamationTriangle, FaCheckCircle,
  FaBullseye, FaDatabase, FaAward, FaCertificate, FaTrophy
} from 'react-icons/fa';

interface PageProps {
  params: Promise<{
    countryCode: string;
    slug: string;
    serviceSlug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { countryCode, slug: citySlug, serviceSlug } = await params;
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());
  const cityData = country?.cities.find(c => c.slug === citySlug);

  if (!country || !cityData) {
    return { title: 'Page Not Found' };
  }

  const seoService = getSEOService(serviceSlug);
  if (seoService) {
    return {
      title: `${seoService.name} in ${cityData.name}, ${country.name} | Expert SEO`,
      description: `Professional ${seoService.name.toLowerCase()} in ${cityData.name}, ${country.name}. ${seoService.description}`,
    };
  }

  const cmsPlatform = getCMSPlatform(serviceSlug);
  if (cmsPlatform) {
    return {
      title: `${cmsPlatform.name} in ${cityData.name}, ${country.name} | Expert CMS`,
      description: `Professional ${cmsPlatform.name.toLowerCase()} in ${cityData.name}, ${country.name}.`,
    };
  }

  const industry = industries.find(i => i.slug === serviceSlug);
  if (industry) {
    return {
      title: `${industry.name} SEO in ${cityData.name}, ${country.name}`,
      description: `Professional ${industry.name.toLowerCase()} SEO in ${cityData.name}, ${country.name}.`,
    };
  }

  return { title: 'Page Not Found' };
}

// Return empty array to avoid stack overflow from generating
// country × city × service combinations. These routes won't be
// pre-generated in static export but the build will succeed.
export async function generateStaticParams(): Promise<Array<{
  countryCode: string;
  slug: string;
  serviceSlug: string;
}>> {
  return [];
}

export default async function CityServicePage({ params }: PageProps) {
  const { countryCode, slug: citySlug, serviceSlug } = await params;
  
  const country = countries.find(c => c.code.toLowerCase() === countryCode.toLowerCase());
  const cityData = country?.cities.find(c => c.slug === citySlug);

  if (!country || !cityData) {
    notFound();
  }

  const flagColors = getFlagColors(country.code);
  const seoService = getSEOService(serviceSlug);
  const cmsPlatform = getCMSPlatform(serviceSlug);
  const industry = industries.find(i => i.slug === serviceSlug);
  const serviceName = seoService?.name || cmsPlatform?.name || industry?.name;

  if (!serviceName) {
    notFound();
  }

  return (
    <>
      <Header flagColors={flagColors} />
      <main className="min-h-screen" style={{ backgroundColor: flagColors.darkBg || '#0f172a' }}>
        <section className="relative py-20" style={{ background: `linear-gradient(to bottom right, ${flagColors.primary}, ${flagColors.secondary})` }}>
          <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 text-white">{serviceName} in {cityData.name}, {country.name}</h1>
            <p className="text-xl text-white/90 mb-8">Expert services for businesses in {cityData.name}</p>
            <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition">
              Get Started in {cityData.name}
            </Link>
          </div>
        </section>
        <WhyChooseMe industry={serviceName} />
        <SEOFramework industry={serviceName} location={`${cityData.name}, ${country.name}`} />
        <IndustriesGrid currentIndustry={serviceSlug} countryCode={countryCode} />
        <TestimonialsSlider />
      </main>
      <Footer flagColors={flagColors} />
    </>
  );
}