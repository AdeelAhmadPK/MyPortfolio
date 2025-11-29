'use client';

import React from 'react';
import Link from 'next/link';

interface CMSPlatform {
  name: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const cmsPlatforms: CMSPlatform[] = [
  {
    name: "WordPress SEO",
    slug: "wordpress-seo",
    description: "WordPress powers over 40% of all websites, and our WordPress SEO services help you maximize its SEO potential. I optimize your WordPress site with proper plugin configuration, theme optimization, and content strategies tailored for the world's most popular CMS.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.812 14.897l-3.06-8.39c.512-.018 1.027-.043 1.027-.043.483-.054.426-.77-.057-.743 0 0-1.455.114-2.395.114-.168 0-.366-.004-.579-.013A7.984 7.984 0 0112 4.016c2.104 0 4.023.81 5.458 2.135-.035-.002-.07-.006-.106-.006-.852 0-1.455.743-1.455 1.542 0 .715.413 1.319.855 2.034.332.577.719 1.318.719 2.389 0 .741-.284 1.6-.662 2.798l-.868 2.898-3.143-9.357c.509-.017.967-.052.967-.052.457-.055.403-.728-.054-.702 0 0-1.375.108-2.265.108-.163 0-.354-.003-.557-.01l3.064 9.108zm5.975-2.096l-2.274 6.591a7.99 7.99 0 004.043-5.22 8.017 8.017 0 00.265-1.371h-.034z"/>
      </svg>
    ),
    features: ["Yoast/RankMath optimization", "Theme SEO audit", "Speed optimization", "Plugin configuration"]
  },
  {
    name: "Shopify SEO",
    slug: "shopify-seo",
    description: "Shopify is the leading e-commerce platform, and our Shopify SEO experts know how to optimize your store for maximum organic traffic. I optimize product pages, collections, and store structure to help you rank for commercial keywords and drive more sales.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.74a.276.276 0 00-.24-.24c-.092-.013-1.808-.08-1.808-.08s-1.199-1.174-1.327-1.307a.394.394 0 00-.273-.106c-.071 0-.132.02-.187.053l-.584.179a4.825 4.825 0 00-.329-.803c-.486-.964-1.196-1.473-2.058-1.473l-.107.002a1.6 1.6 0 00-.143-.153c-.39-.372-.893-.555-1.496-.543-1.163.024-2.323.876-3.265 2.398-.663 1.068-1.167 2.407-1.311 3.443l-2.256.698c-.663.206-.684.226-.77.855-.065.478-1.877 14.456-1.877 14.456l14.908 2.789.532-1.124z"/>
      </svg>
    ),
    features: ["Product page optimization", "Collection SEO", "App integration", "Schema markup"]
  },
  {
    name: "Magento SEO",
    slug: "magento-seo",
    description: "Magento (Adobe Commerce) is the preferred choice for enterprise e-commerce, and our Magento SEO services help you unlock its full SEO potential. We address Magento-specific challenges like duplicate content, faceted navigation, and complex URL structures.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 24l-4.243-2.451V9.166L12 6.715l4.243 2.451v12.383L12 24zm0-2.209l2.924-1.692V10.47L12 8.778 9.076 10.47v9.629L12 21.791zM12 0L0 6.931v10.138l4.243 2.451V7.283L12 4.028l7.757 4.485V8.16L12 4.832l-7.757 4.485v10.138L0 17.069V6.931L12 0z"/>
      </svg>
    ),
    features: ["Layered navigation SEO", "Enterprise optimization", "Multi-store SEO", "Performance tuning"]
  },
  {
    name: "WooCommerce SEO",
    slug: "woocommerce-seo",
    description: "WooCommerce is the most popular WordPress e-commerce plugin, and My WooCommerce SEO services combine the best of WordPress and e-commerce optimization. I help you rank products, categories, and content for maximum organic revenue.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.47 5.48A2.4 2.4 0 002.4 7.93h.05l1.16 9.05a2.64 2.64 0 002.6 2.32h12.98a2.64 2.64 0 002.6-2.25l1.3-8.5a.83.83 0 00-.82-.97H4.87l-.26-1.52a2.4 2.4 0 00-2.37-2.06H.5a.5.5 0 000 1h1.63a1.4 1.4 0 011.38 1.2l1.46 8.52.12.73a1.64 1.64 0 001.62 1.43h12.98a1.64 1.64 0 001.62-1.4l1.3-8.5H4.98l.1.6z"/>
        <circle cx="8.5" cy="21.5" r="1.5"/>
        <circle cx="17.5" cy="21.5" r="1.5"/>
      </svg>
    ),
    features: ["Product optimization", "Category structure", "Checkout SEO", "Plugin optimization"]
  },
  {
    name: "Drupal SEO",
    slug: "drupal-seo",
    description: "Drupal is the CMS of choice for complex, enterprise-level websites, and our Drupal SEO services help you leverage its powerful capabilities for search visibility. I optimize content architecture, implement technical best practices, and maximize your organic reach.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 0c-.523 2.23-2.044 3.49-3.637 4.819-1.644 1.37-3.524 2.926-4.259 5.655-.785 2.916.096 6.065 2.214 8.184 1.62 1.62 3.803 2.51 6.15 2.51 2.346 0 4.53-.89 6.148-2.51 2.084-2.085 2.965-5.192 2.214-8.113-.706-2.748-2.586-4.322-4.23-5.707C14.964 3.49 13.443 2.23 12.921.001h-.92z"/>
      </svg>
    ),
    features: ["Module configuration", "Content architecture", "Enterprise SEO", "Performance optimization"]
  },
  {
    name: "Squarespace SEO",
    slug: "squarespace-seo",
    description: "Squarespace offers beautiful design templates, and our Squarespace SEO services ensure your site looks great AND ranks well. I work within Squarespace's framework to optimize your content, structure, and technical elements for better search visibility.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 23.5 18.351 23.5 12 18.351.5 12 .5zM6.96 16.96l-2.63-2.63a.883.883 0 010-1.25l5.66-5.66a.883.883 0 011.25 0l2.63 2.63c.35.35.35.9 0 1.25l-5.66 5.66a.883.883 0 01-1.25 0zm10.71-4.34l-5.66 5.66a.883.883 0 01-1.25 0l-2.63-2.63a.883.883 0 010-1.25l5.66-5.66a.883.883 0 011.25 0l2.63 2.63c.35.35.35.9 0 1.25z"/>
      </svg>
    ),
    features: ["Template optimization", "SEO settings config", "Content optimization", "Analytics setup"]
  },
  {
    name: "Joomla SEO",
    slug: "joomla-seo",
    description: "Joomla offers flexibility for complex websites, and our Joomla SEO services help you take advantage of its powerful features for search engine optimization. We configure SEF URLs, optimize extensions, and implement best practices for maximum visibility.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.586 3.469a2.38 2.38 0 00-3.406.078 2.38 2.38 0 00.078 3.406l4.618 4.398a2.38 2.38 0 01.078 3.406 2.38 2.38 0 01-3.406.078L.586 10.867a2.38 2.38 0 00-3.406.078 2.38 2.38 0 00.078 3.406l3.962 3.768a7.152 7.152 0 0010.211-.234 7.152 7.152 0 00-.234-10.211L6.586 3.469z"/>
      </svg>
    ),
    features: ["SEF URL setup", "Extension optimization", "Content SEO", "Technical fixes"]
  },
  {
    name: "Wix SEO",
    slug: "wix-seo",
    description: "Wix has significantly improved its SEO capabilities, and our Wix SEO services help you maximize your site's potential. I optimize your Wix site's structure, content, and settings to compete effectively in search results despite platform limitations.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.75 4.5a3 3 0 00-3 3v9a3 3 0 003 3h.75l3-4.5-3-4.5h3l3 4.5-3 4.5h6.75a3 3 0 003-3v-9a3 3 0 00-3-3h-10.5z"/>
      </svg>
    ),
    features: ["SEO Wiz optimization", "URL structure", "Mobile SEO", "Page optimization"]
  }
];

export function CMSPlatformsSEO() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-semibold mb-4">
            CMS & Platform SEO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            SEO Services for Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Platform</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Whether you're on WordPress, Shopify, Magento, or any other platform, My SEO experts know how to optimize your specific CMS for maximum search visibility and organic traffic growth.
          </p>
        </div>

        {/* CMS Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cmsPlatforms.map((platform, index) => (
            <div 
              key={platform.slug}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {platform.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                {platform.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {platform.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-500">
                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Platform-Agnostic SEO Expertise
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                No matter what content management system or e-commerce platform you use, My SEO consultants have the expertise to optimize it for maximum search visibility. I've worked with hundreds of platforms and know the specific technical requirements, limitations, and opportunities each one presents. From WordPress SEO to Shopify SEO, from enterprise Magento optimization to Squarespace SEO for small businesses, I deliver tailored solutions that work within your platform's framework.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Platforms Supported", value: "50+" },
                { label: "Sites Optimized", value: "1,000+" },
                { label: "Avg Traffic Increase", value: "200%" },
                { label: "Client Satisfaction", value: "98%" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-white dark:bg-slate-800/50">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CMSPlatformsSEO;
