import Link from 'next/link'

interface TopSEOServicesProps {
  countryCode?: string;
  citySlug?: string;
}

export default function TopSEOServices({ countryCode, citySlug }: TopSEOServicesProps) {
  
  // Helper function to generate the correct href based on countryCode and citySlug
  const getHref = (serviceSlug: string) => {
    if (countryCode && citySlug) {
      // /pk/lahore/local-seo
      return `/${countryCode}/${citySlug}/${serviceSlug}`;
    }
    if (countryCode) {
      // /pk/local-seo
      return `/${countryCode}/${serviceSlug}`;
    }
    // /services/local-seo
    return `/services/${serviceSlug}`;
  };

  const services = [
    {
      href: getHref('technical-seo'),
      gradient: 'from-blue-600 to-cyan-600',
      hoverBorder: 'hover:border-blue-500 dark:hover:border-blue-400',
      hoverShadow: 'hover:shadow-blue-500/20',
      textColor: 'text-blue-600 dark:text-blue-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Technical SEO',
      description: 'Core Web Vitals, page speed, and technical optimization'
    },
    {
      href: getHref('local-seo'),
      slug: 'local-seo',
      gradient: 'from-cyan-600 to-blue-600',
      hoverBorder: 'hover:border-cyan-500 dark:hover:border-cyan-400',
      hoverShadow: 'hover:shadow-cyan-500/20',
      textColor: 'text-cyan-600 dark:text-cyan-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Local SEO',
      description: 'Google Business Profile and local search optimization'
    },
    {
      href: getHref('ecommerce-seo'),
      slug: 'ecommerce-seo',
      gradient: 'from-indigo-600 to-purple-600',
      hoverBorder: 'hover:border-indigo-500 dark:hover:border-indigo-400',
      hoverShadow: 'hover:shadow-indigo-500/20',
      textColor: 'text-indigo-600 dark:text-indigo-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'E-commerce SEO',
      description: 'Product and category page optimization'
    },
    {
      href: getHref('content-seo'),
      slug: 'content-seo',
      gradient: 'from-purple-600 to-pink-600',
      hoverBorder: 'hover:border-purple-500 dark:hover:border-purple-400',
      hoverShadow: 'hover:shadow-purple-500/20',
      textColor: 'text-purple-600 dark:text-purple-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: 'Content SEO',
      description: 'Content strategy and semantic optimization'
    },
    {
      href: getHref('link-building'),
      slug: 'link-building',
      gradient: 'from-emerald-600 to-teal-600',
      hoverBorder: 'hover:border-emerald-500 dark:hover:border-emerald-400',
      hoverShadow: 'hover:shadow-emerald-500/20',
      textColor: 'text-emerald-600 dark:text-emerald-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Link Building',
      description: 'White-hat backlink acquisition and authority building'
    },
    {
      href: getHref('on-page-seo'),
      slug: 'on-page-seo',
      gradient: 'from-orange-600 to-red-600',
      hoverBorder: 'hover:border-orange-500 dark:hover:border-orange-400',
      hoverShadow: 'hover:shadow-orange-500/20',
      textColor: 'text-orange-600 dark:text-orange-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'On-Page SEO',
      description: 'Meta tags, headers, and content optimization'
    },
    {
      href: getHref('off-page-seo'),
      slug: 'off-page-seo',
      gradient: 'from-rose-600 to-pink-600',
      hoverBorder: 'hover:border-rose-500 dark:hover:border-rose-400',
      hoverShadow: 'hover:shadow-rose-500/20',
      textColor: 'text-rose-600 dark:text-rose-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: 'Off-Page SEO',
      description: 'Brand building and online reputation management'
    },
    {
      href: getHref('seo-audit'),
      slug: 'seo-audit',
      gradient: 'from-amber-600 to-yellow-600',
      hoverBorder: 'hover:border-amber-500 dark:hover:border-amber-400',
      hoverShadow: 'hover:shadow-amber-500/20',
      textColor: 'text-amber-600 dark:text-amber-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'SEO Audit',
      description: 'Comprehensive site audit and recommendations'
    },
    {
      href: getHref('keyword-research'),
      slug: 'keyword-research',
      gradient: 'from-sky-600 to-blue-600',
      hoverBorder: 'hover:border-sky-500 dark:hover:border-sky-400',
      hoverShadow: 'hover:shadow-sky-500/20',
      textColor: 'text-sky-600 dark:text-sky-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Keyword Research',
      description: 'Search intent analysis and keyword mapping'
    },
    {
      href: getHref('competitor-analysis'),
      slug: 'competitor-analysis',
      gradient: 'from-violet-600 to-purple-600',
      hoverBorder: 'hover:border-violet-500 dark:hover:border-violet-400',
      hoverShadow: 'hover:shadow-violet-500/20',
      textColor: 'text-violet-600 dark:text-violet-400',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Competitor Analysis',
      description: 'Competitive intelligence and gap analysis'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-cyan-950/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">All Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Top <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">SEO Services</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our comprehensive range of SEO services to boost your online presence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 ${service.hoverBorder} ${service.hoverShadow} hover:shadow-2xl transition-all duration-500 animate-slide-up`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                {service.icon}
              </div>
              <h3 className={`text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:${service.textColor} transition-colors`}>
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {service.description}
              </p>
              <div className={`flex items-center gap-2 text-sm ${service.textColor} font-medium group-hover:gap-3 transition-all`}>
                <span>Learn More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
