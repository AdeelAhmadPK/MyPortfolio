'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { serviceTypes } from '@/config/services'
import { cmsPlatforms } from '@/data/cmsPlatforms'
import { industries } from '@/data/industries'

interface FlagColors {
  primary: string;
  secondary: string;
  accent?: string;
}

interface HeaderProps {
  flagColors?: FlagColors;
}

// Add keyframe animations
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes gradient-shift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  if (!document.head.querySelector('#header-animations')) {
    style.id = 'header-animations';
    document.head.appendChild(style);
  }
}

// Main services for dropdown
const mainServices = [
  { name: 'Technical SEO', slug: 'technical-seo' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'E-commerce SEO', slug: 'ecommerce-seo' },
  { name: 'Content SEO', slug: 'content-seo' },
  { name: 'Link Building', slug: 'link-building' },
  { name: 'On-Page SEO', slug: 'on-page-seo' },
  { name: 'Off-Page SEO', slug: 'off-page-seo' },
  { name: 'SEO Audit', slug: 'seo-audit' },
]

// Searchable items data
const searchableItems = [
  // SEO Services
  { name: 'Technical SEO', slug: 'technical-seo', category: 'SEO Services', path: '/services/technical-seo' },
  { name: 'Local SEO', slug: 'local-seo', category: 'SEO Services', path: '/services/local-seo' },
  { name: 'E-commerce SEO', slug: 'ecommerce-seo', category: 'SEO Services', path: '/services/ecommerce-seo' },
  { name: 'Content SEO', slug: 'content-seo', category: 'SEO Services', path: '/services/content-seo' },
  { name: 'Link Building', slug: 'link-building', category: 'SEO Services', path: '/services/link-building' },
  { name: 'On-Page SEO', slug: 'on-page-seo', category: 'SEO Services', path: '/services/on-page-seo' },
  { name: 'Off-Page SEO', slug: 'off-page-seo', category: 'SEO Services', path: '/services/off-page-seo' },
  { name: 'SEO Audit', slug: 'seo-audit', category: 'SEO Services', path: '/services/seo-audit' },
  { name: 'Keyword Research', slug: 'keyword-research', category: 'SEO Services', path: '/services/keyword-research' },
  { name: 'Competitor Analysis', slug: 'competitor-analysis', category: 'SEO Services', path: '/services/competitor-analysis' },
  
  // Industries
  { name: 'Plumbing SEO', slug: 'plumbing-seo', category: 'Industries', path: '/services/plumbing-seo' },
  { name: 'HVAC SEO', slug: 'hvac-seo', category: 'Industries', path: '/services/hvac-seo' },
  { name: 'Roofing SEO', slug: 'roofing-seo', category: 'Industries', path: '/services/roofing-seo' },
  { name: 'Electrician SEO', slug: 'electrician-seo', category: 'Industries', path: '/services/electrician-seo' },
  { name: 'Carpet Cleaning SEO', slug: 'carpet-cleaning-seo', category: 'Industries', path: '/services/carpet-cleaning-seo' },
  { name: 'Water Damage SEO', slug: 'water-damage-seo', category: 'Industries', path: '/services/water-damage-seo' },
  { name: 'Fire Damage SEO', slug: 'fire-damage-seo', category: 'Industries', path: '/services/fire-damage-seo' },
  { name: 'Pest Control SEO', slug: 'pest-control-seo', category: 'Industries', path: '/services/pest-control-seo' },
  { name: 'Garage Door SEO', slug: 'garage-door-seo', category: 'Industries', path: '/services/garage-door-seo' },
  { name: 'Kitchen Remodeling SEO', slug: 'kitchen-remodeling-seo', category: 'Industries', path: '/services/kitchen-remodeling-seo' },
  { name: 'Bathroom Remodeling SEO', slug: 'bathroom-remodeling-seo', category: 'Industries', path: '/services/bathroom-remodeling-seo' },
  { name: 'Flooring SEO', slug: 'flooring-seo', category: 'Industries', path: '/services/flooring-seo' },
  { name: 'Gutter SEO', slug: 'gutter-seo', category: 'Industries', path: '/services/gutter-seo' },
  { name: 'Siding SEO', slug: 'siding-seo', category: 'Industries', path: '/services/siding-seo' },
  { name: 'Appliance Repair SEO', slug: 'appliance-repair-seo', category: 'Industries', path: '/services/appliance-repair-seo' },
  { name: 'Self Storage SEO', slug: 'self-storage-seo', category: 'Industries', path: '/services/self-storage-seo' },
  { name: 'Home Security SEO', slug: 'home-security-seo', category: 'Industries', path: '/services/home-security-seo' },
  { name: 'Walk-In Tubs SEO', slug: 'walk-in-tubs-seo', category: 'Industries', path: '/services/walk-in-tubs-seo' },
  { name: 'Mold Remediation SEO', slug: 'mold-remediation-seo', category: 'Industries', path: '/services/mold-remediation-seo' },
  { name: 'Dumpster Rental SEO', slug: 'dumpster-rental-seo', category: 'Industries', path: '/services/dumpster-rental-seo' },
  
  // CMS Platforms
  { name: 'WordPress SEO', slug: 'wordpress-seo', category: 'CMS Platforms', path: '/services/wordpress-seo' },
  { name: 'Shopify SEO', slug: 'shopify-seo', category: 'CMS Platforms', path: '/services/shopify-seo' },
  { name: 'Wix SEO', slug: 'wix-seo', category: 'CMS Platforms', path: '/services/wix-seo' },
  { name: 'Squarespace SEO', slug: 'squarespace-seo', category: 'CMS Platforms', path: '/services/squarespace-seo' },
  { name: 'Webflow SEO', slug: 'webflow-seo', category: 'CMS Platforms', path: '/services/webflow-seo' },
  { name: 'Magento SEO', slug: 'magento-seo', category: 'CMS Platforms', path: '/services/magento-seo' },
  { name: 'Drupal SEO', slug: 'drupal-seo', category: 'CMS Platforms', path: '/services/drupal-seo' },
  { name: 'Joomla SEO', slug: 'joomla-seo', category: 'CMS Platforms', path: '/services/joomla-seo' },
  
  // Pages
  { name: 'Services', slug: 'services', category: 'Pages', path: '/services' },
  { name: 'About', slug: 'about', category: 'Pages', path: '/about' },
  { name: 'Contact', slug: 'contact', category: 'Pages', path: '/contact' },
  { name: 'Case Studies', slug: 'case-studies', category: 'Pages', path: '/case-studies' },
  { name: 'Industries', slug: 'industries', category: 'Pages', path: '/industries' },
];

export default function Header({ flagColors }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileSearchQuery, setMobileSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState<typeof searchableItems>([])
  const [mobileSuggestions, setMobileSuggestions] = useState<typeof searchableItems>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [cmsOpen, setCmsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileCmsOpen, setMobileCmsOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const cmsRef = useRef<HTMLDivElement>(null)
  const industriesRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const navItems = ['Home', 'About', 'Case Studies', 'Contact']

  // Generate gradient style based on flag colors
  const gradientStyle = flagColors 
    ? `linear-gradient(to right, ${flagColors.primary}, ${flagColors.secondary})`
    : 'linear-gradient(to right, #2563eb, #4f46e5)';

  const borderBottomStyle = flagColors
    ? { borderBottomColor: flagColors.primary, borderBottomWidth: '3px', borderBottomStyle: 'solid' as const }
    : {};

  // Handle search query changes (Desktop)
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([])
      setSelectedIndex(-1)
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = searchableItems.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.slug.includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 8) // Limit to 8 suggestions

    setSuggestions(filtered)
    setSelectedIndex(-1)
  }, [searchQuery])

  // Handle mobile search query changes
  useEffect(() => {
    if (mobileSearchQuery.trim() === '') {
      setMobileSuggestions([])
      return
    }

    const query = mobileSearchQuery.toLowerCase()
    const filtered = searchableItems.filter(item => 
      item.name.toLowerCase().includes(query) ||
      item.slug.includes(query) ||
      item.category.toLowerCase().includes(query)
    ).slice(0, 10) // Limit to 10 suggestions for mobile

    setMobileSuggestions(filtered)
  }, [mobileSearchQuery])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
        setSearchQuery('')
        setSuggestions([])
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [searchOpen])

  // Focus mobile input when mobile search opens
  useEffect(() => {
    if (mobileSearchOpen && mobileInputRef.current) {
      // Small delay to ensure the input is mounted
      setTimeout(() => {
        mobileInputRef.current?.focus()
      }, 100)
    }
  }, [mobileSearchOpen])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => Math.max(prev - 1, -1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        router.push(suggestions[selectedIndex].path)
        setSearchOpen(false)
        setSearchQuery('')
        setSuggestions([])
      }
    } else if (e.key === 'Escape') {
      setSearchOpen(false)
      setSearchQuery('')
      setSuggestions([])
    }
  }

  // Handle suggestion click (Desktop)
  const handleSuggestionClick = (path: string) => {
    router.push(path)
    setSearchOpen(false)
    setSearchQuery('')
    setSuggestions([])
  }

  // Handle mobile suggestion click
  const handleMobileSuggestionClick = (path: string) => {
    router.push(path)
    setMobileSearchOpen(false)
    setMobileSearchQuery('')
    setMobileSuggestions([])
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'SEO Services':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case 'Industries':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      case 'CMS Platforms':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      case 'Pages':
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <header 
      className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-700/50 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
      style={borderBottomStyle}
    >
      {/* Animated gradient border */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[2px] opacity-80"
        style={{ 
          background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)',
          animation: 'gradient-shift 3s ease infinite',
          backgroundSize: '200% 100%'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 md:h-28 flex items-center justify-between">
          <Link href="/" className="flex items-center select-none group relative">
            <div className="relative">
              {/* Animated ring around logo - Always visible with flag colors */}
              <div 
                className="absolute -inset-2 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ 
                  background: flagColors ? `conic-gradient(from 0deg, ${flagColors.primary}, ${flagColors.secondary}, ${flagColors.primary})` : 'conic-gradient(from 0deg, #2563eb, #7c3aed, #2563eb)',
                  animation: 'spin 4s linear infinite',
                  filter: 'blur(12px)'
                }}
              />
              <Image 
                src="/logo.webp" 
                alt="Adeel Ahmad - SEO Specialist" 
                width={200} 
                height={200} 
                className="relative w-[70px] h-[70px] md:w-[180px] md:h-[180px] object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl" 
              />
              {/* Glow effect - Always visible with flag colors */}
              <div 
                className="absolute inset-0 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-500" 
                style={{ 
                  backgroundColor: flagColors?.primary || '#2563eb',
                }}
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {navItems.map((item, index) => (
              <Link 
                key={item} 
                href={item==='Home'?'/':`/${item.toLowerCase().replace(/\s+/g,'-')}`} 
                className="relative text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group py-2 px-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item}</span>
                {/* Animated underline */}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full shadow-lg" 
                  style={{ 
                    background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    boxShadow: flagColors ? `0 0 10px ${flagColors.primary}50` : '0 0 10px rgba(37, 99, 235, 0.3)'
                  }}
                />
                {/* Hover background glow */}
                <span 
                  className="absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ 
                    background: flagColors ? `${flagColors.primary}15` : 'rgba(37, 99, 235, 0.08)'
                  }}
                />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div 
              ref={servicesRef} 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="relative text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group py-2 px-1 flex items-center gap-1"
              >
                <span className="relative z-10">Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full shadow-lg" 
                  style={{ 
                    background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    boxShadow: flagColors ? `0 0 10px ${flagColors.primary}50` : '0 0 10px rgba(37, 99, 235, 0.3)'
                  }}
                ></span>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-64">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-scale-in">
                    <div 
                      className="h-1"
                      style={{ background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
                    />
                    <div className="p-2 max-h-96 overflow-y-auto">
                      <Link 
                        href="/services" 
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="my-2 border-t border-slate-200 dark:border-slate-700" />
                      {mainServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CMS Dropdown */}
            <div 
              ref={cmsRef} 
              className="relative"
              onMouseEnter={() => setCmsOpen(true)}
              onMouseLeave={() => setCmsOpen(false)}
            >
              <button
                className="relative text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group py-2 px-1 flex items-center gap-1"
              >
                <span className="relative z-10">CMS</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${cmsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full shadow-lg" 
                  style={{ 
                    background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    boxShadow: flagColors ? `0 0 10px ${flagColors.primary}50` : '0 0 10px rgba(37, 99, 235, 0.3)'
                  }}
                ></span>
              </button>

              {cmsOpen && (
                <div className="absolute top-full left-0 w-64">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-scale-in">
                    <div 
                      className="h-1"
                      style={{ background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
                    />
                    <div className="p-2 max-h-96 overflow-y-auto">
                      {cmsPlatforms.map((platform) => (
                        <Link
                          key={platform.slug}
                          href={`/services/${platform.slug}`}
                          className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          {platform.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              ref={industriesRef} 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button
                className="relative text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group py-2 px-1 flex items-center gap-1"
              >
                <span className="relative z-10">Industries</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-[3px] group-hover:w-full transition-all duration-500 rounded-full shadow-lg" 
                  style={{ 
                    background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)',
                    boxShadow: flagColors ? `0 0 10px ${flagColors.primary}50` : '0 0 10px rgba(37, 99, 235, 0.3)'
                  }}
                ></span>
              </button>

              {industriesOpen && (
                <div className="absolute top-full left-0 w-64">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-scale-in">
                    <div 
                      className="h-1"
                      style={{ background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
                    />
                    <div className="p-2 max-h-96 overflow-y-auto">
                      <Link 
                        href="/industries" 
                        className="block px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        All Industries
                      </Link>
                      <div className="my-2 border-t border-slate-200 dark:border-slate-700" />
                      {industries.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/services/${industry.slug}`}
                          className="block px-4 py-2.5 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="relative p-3 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 group overflow-hidden"
                aria-label="Search"
              >
                {/* Background gradient on hover */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: flagColors ? `${flagColors.primary}10` : 'rgba(37, 99, 235, 0.06)'
                  }}
                />
                <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-3 w-96 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden animate-scale-in">
                  {/* Decorative gradient bar */}
                  <div 
                    className="h-1"
                    style={{ background: flagColors ? gradientStyle : 'linear-gradient(90deg, #2563eb, #7c3aed)' }}
                  />
                  
                  {/* Search Input */}
                  <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="relative group">
                      <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        ref={inputRef}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Search services..."
                        className="w-full pl-10 pr-4 py-3.5 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all font-medium"
                      />
                      {searchQuery && (
                        <button
                          onClick={() => {
                            setSearchQuery('')
                            setSuggestions([])
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div className="max-h-80 overflow-y-auto">
                    {suggestions.length > 0 ? (
                      <div className="p-2">
                        {suggestions.map((item, index) => (
                          <button
                            key={item.slug}
                            onClick={() => handleSuggestionClick(item.path)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                              index === selectedIndex
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span className={`flex-shrink-0 p-2 rounded-lg ${
                              index === selectedIndex
                                ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                            }`}>
                              {getCategoryIcon(item.category)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{item.name}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">{item.category}</div>
                            </div>
                            <svg className={`w-4 h-4 flex-shrink-0 ${index === selectedIndex ? 'text-blue-500' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        ))}
                      </div>
                    ) : searchQuery ? (
                      <div className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium">No results found</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">Try a different search term</p>
                      </div>
                    ) : (
                      <div className="p-4">
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 px-2">Popular Searches</p>
                        <div className="space-y-1">
                          {searchableItems.slice(0, 5).map((item) => (
                            <button
                              key={item.slug}
                              onClick={() => handleSuggestionClick(item.path)}
                              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all"
                            >
                              <span className="flex-shrink-0 p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                                {getCategoryIcon(item.category)}
                              </span>
                              <span className="font-medium">{item.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Keyboard hints */}
                  <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] font-mono">↑</kbd>
                        <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] font-mono">↓</kbd>
                        <span>Navigate</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] font-mono">Enter</kbd>
                        <span>Select</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-[10px] font-mono">Esc</kbd>
                        <span>Close</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/contact" 
              className="ml-3 relative px-8 py-3.5 rounded-xl text-white shadow-xl hover:shadow-2xl text-sm font-bold tracking-wide transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden group"
              style={{ background: gradientStyle }}
            >
              {/* Animated shimmer effect */}
              <span 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer 2s infinite',
                  backgroundSize: '200% 100%'
                }}
              />
              <span className="relative z-10 flex items-center gap-2">
                Get Free Audit
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Search"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay - Full Screen with Solid Background */}
        {mobileSearchOpen && (
          <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-slate-900" style={{ top: 0 }}>
            {/* Header with close button */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Search</h2>
              <button
                onClick={() => {
                  setMobileSearchOpen(false)
                  setMobileSearchQuery('')
                  setMobileSuggestions([])
                }}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Input */}
            <div className="p-4 bg-white dark:bg-slate-900">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  ref={mobileInputRef}
                  type="text"
                  value={mobileSearchQuery}
                  onChange={(e) => setMobileSearchQuery(e.target.value)}
                  placeholder="Search services, industries, pages..."
                  autoFocus
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  className="w-full pl-12 pr-12 py-4 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg border-0"
                  style={{ fontSize: '16px' }} // Prevents iOS zoom on focus
                />
                {mobileSearchQuery && (
                  <button
                    onClick={() => {
                      setMobileSearchQuery('')
                      setMobileSuggestions([])
                      mobileInputRef.current?.focus()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Results Area */}
            <div className="flex-1 overflow-y-auto bg-white dark:bg-slate-900 pb-safe" style={{ height: 'calc(100vh - 160px)' }}>
              <div className="px-4 pb-8">
                {mobileSuggestions.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                      {mobileSuggestions.length} Result{mobileSuggestions.length > 1 ? 's' : ''} Found
                    </p>
                    {mobileSuggestions.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => handleMobileSuggestionClick(item.path)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl text-left bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all active:scale-[0.98]"
                      >
                        <span className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 shadow-sm">
                          {getCategoryIcon(item.category)}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-base sm:text-lg truncate text-slate-900 dark:text-white">{item.name}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{item.category}</div>
                        </div>
                        <svg className="w-5 h-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    ))}
                  </div>
                ) : mobileSearchQuery ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-slate-900 dark:text-white font-medium text-lg">No results found</p>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Try searching for &quot;SEO&quot;, &quot;plumbing&quot;, or &quot;WordPress&quot;</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Popular Searches</p>
                    <div className="space-y-2">
                      {searchableItems.slice(0, 10).map((item) => (
                        <button
                          key={item.slug}
                          onClick={() => handleMobileSuggestionClick(item.path)}
                          className="w-full flex items-center gap-4 p-4 rounded-xl text-left bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all active:scale-[0.98]"
                        >
                          <span className="flex-shrink-0 p-3 rounded-xl bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-400 shadow-sm">
                            {getCategoryIcon(item.category)}
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 animate-scale-in max-h-[calc(100vh-120px)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link 
                  key={item} 
                  href={item==='Home'?'/':`/${item.toLowerCase().replace(/\s+/g,'-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-medium"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-2 mt-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-medium flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1 animate-scale-in">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2" />
                    {mainServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile CMS Dropdown */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-2">
                <button
                  onClick={() => setMobileCmsOpen(!mobileCmsOpen)}
                  className="w-full px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-medium flex items-center justify-between"
                >
                  <span>CMS</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${mobileCmsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileCmsOpen && (
                  <div className="ml-4 mt-2 space-y-1 animate-scale-in">
                    {cmsPlatforms.map((platform) => (
                      <Link
                        key={platform.slug}
                        href={`/services/${platform.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {platform.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Dropdown */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-2">
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className="w-full px-4 py-3 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors font-medium flex items-center justify-between"
                >
                  <span>Industries</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {mobileIndustriesOpen && (
                  <div className="ml-4 mt-2 space-y-1 animate-scale-in max-h-64 overflow-y-auto">
                    <Link
                      href="/industries"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      All Industries
                    </Link>
                    <div className="border-t border-slate-200 dark:border-slate-700 my-2" />
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/services/${industry.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-4 px-5 py-3 rounded-xl text-white shadow-lg text-sm font-semibold text-center transition-all duration-300"
                style={{ background: gradientStyle }}
              >
                Get Free Audit
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
