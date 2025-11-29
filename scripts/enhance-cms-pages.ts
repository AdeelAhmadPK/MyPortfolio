// Template for enhanced CMS pages - used to update remaining pages
// This file documents the structure used for WordPress and Shopify pages

export const cmsPageTemplate = {
  imports: `
import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { industries } from '@/data/industries'
import { getCitiesByCountry } from '@/config/service-locations'
import { Award, Clock, DollarSign, Target } from 'lucide-react'
  `,

  citiesSetup: `
  // Get cities from multiple countries
  const allCities = [
    ...getCitiesByCountry('united-states'),
    ...getCitiesByCountry('united-kingdom'),
    ...getCitiesByCountry('canada'),
    ...getCitiesByCountry('pakistan')
  ]
  `,

  whyChooseMeData: `
  const whyChooseMe = [
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Hundreds of successful sites ranking on page 1 of Google with measurable ROI.'
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
  `,

  sectionsOrder: [
    'Hero',
    'Features',
    'Benefits',
    'Process',
    'Industries (using real data from industries.ts)',
    'Why Choose Me',
    'Cities (using real data from service-locations.ts)',
    'Stats',
    'FAQs',
    'CTA'
  ]
}
