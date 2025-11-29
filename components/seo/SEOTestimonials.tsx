'use client';

import React from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  results: string;
  rating: number;
}

interface SEOTestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Our organic traffic increased by 340% in just 8 months. The SEO strategy was comprehensive and the results speak for themselves. They understand the home services industry inside and out.",
    author: "Michael Reynolds",
    role: "Marketing Director",
    company: "Elite Roofing Solutions",
    industry: "Roofing",
    results: "+340% organic traffic",
    rating: 5
  },
  {
    quote: "After struggling with local SEO for years, they helped us dominate the local search results. We now rank #1 for all our target keywords in our service areas. Best SEO investment we've made.",
    author: "Jennifer Martinez",
    role: "CEO",
    company: "Comfort Zone HVAC",
    industry: "HVAC",
    results: "#1 rankings for 47 keywords",
    rating: 5
  },
  {
    quote: "The technical SEO audit revealed issues we didn't know existed. After implementing their recommendations, My e-commerce site saw a 200% increase in organic revenue. Absolutely game-changing.",
    author: "David Thompson",
    role: "E-commerce Manager",
    company: "Home Essentials Store",
    industry: "E-commerce",
    results: "+200% organic revenue",
    rating: 5
  },
  {
    quote: "Their content SEO strategy transformed our blog from a ghost town to a lead generation machine. We're now getting qualified leads directly from our educational content every single day.",
    author: "Sarah Williams",
    role: "Owner",
    company: "SafeGuard Pest Control",
    industry: "Pest Control",
    results: "50+ leads/month from content",
    rating: 5
  },
  {
    quote: "Working with this SEO team has been transformative for our plumbing business. We went from page 5 to page 1 for competitive keywords. Our phone hasn't stopped ringing since.",
    author: "Robert Anderson",
    role: "President",
    company: "Anderson & Sons Plumbing",
    industry: "Plumbing",
    results: "Page 5 to Page 1 rankings",
    rating: 5
  },
  {
    quote: "The link building campaign was exceptional. High-quality, relevant backlinks from authoritative sites in our niche. Our domain authority went from 15 to 42 in under a year.",
    author: "Lisa Chen",
    role: "Digital Marketing Manager",
    company: "Modern Electric Co.",
    industry: "Electrical",
    results: "DA increased from 15 to 42",
    rating: 5
  }
];

export function SEOTestimonials({ 
  testimonials = defaultTestimonials,
  title = "What My clients Say About My SEO Services",
  subtitle = "Real results from real businesses. See how My SEO strategies have helped companies across various industries achieve their organic search goals."
}: SEOTestimonialsProps) {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 text-sm font-semibold mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {title.split(' ').map((word, i, arr) => (
              <React.Fragment key={i}>
                {i >= arr.length - 2 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">{word} </span>
                ) : (
                  `${word} `
                )}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-green-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                {testimonial.results}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                    {testimonial.industry} Industry
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-green-100">Client Retention Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+ Years</div>
              <div className="text-green-100">SEO Experience</div>
            </div>
          </div>
        </div>

        {/* Industry Coverage */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
            Trusted by Businesses Across All Industries
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Pest Control', 'Water Damage', 'Garage Door', 'Flooring', 'Kitchen Remodeling', 'E-commerce', 'SaaS', 'Healthcare'].map((industry) => (
              <span 
                key={industry}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SEOTestimonials;
