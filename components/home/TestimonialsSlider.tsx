'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    initial: 'A',
    name: 'Amanda Foster',
    title: 'Practice Manager',
    company: 'Riverside Dental Group',
    industry: 'Healthcare',
    rating: 5,
    quote: "We struggled with local SEO for years. Within 3 months of working together, we were dominating our local market. New patient inquiries are up 180%. Best investment we've made in our practice.",
    result: '180% more patient inquiries',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    id: 2,
    initial: 'M',
    name: 'Michael Chen',
    title: 'CEO',
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    rating: 5,
    quote: "Our organic traffic tripled in just 4 months. The keyword strategy and content optimization were game-changers. We're now ranking #1 for our most valuable keywords.",
    result: '300% increase in organic traffic',
    gradient: 'from-blue-400 to-indigo-600'
  },
  {
    id: 3,
    initial: 'S',
    name: 'Sarah Williams',
    title: 'Marketing Director',
    company: 'Elite Law Firm',
    industry: 'Legal',
    rating: 5,
    quote: "Finally, an SEO expert who understands our industry. Lead quality improved dramatically, and we're seeing a 5x ROI. The transparency and reporting are exceptional.",
    result: '5x ROI on SEO investment',
    gradient: 'from-purple-400 to-pink-600'
  },
  {
    id: 4,
    initial: 'D',
    name: 'David Rodriguez',
    title: 'Owner',
    company: 'Premium Roofing Co',
    industry: 'Home Services',
    rating: 5,
    quote: "Local SEO was always a mystery to us. Now we dominate Google Maps in our area. Phone calls increased by 240% and we had to hire more crews to handle the demand.",
    result: '240% more phone inquiries',
    gradient: 'from-orange-400 to-red-600'
  },
  {
    id: 5,
    initial: 'J',
    name: 'Jennifer Thompson',
    title: 'Founder',
    company: 'Wellness Studio NYC',
    industry: 'Healthcare',
    rating: 5,
    quote: "The results speak for themselves. We went from page 3 to ranking in the top 3 for all our main keywords. Revenue from organic search is up 350%.",
    result: '350% revenue increase',
    gradient: 'from-teal-400 to-cyan-600'
  },
  {
    id: 6,
    initial: 'R',
    name: 'Robert Kim',
    title: 'VP Marketing',
    company: 'FinanceHub',
    industry: 'Finance',
    rating: 5,
    quote: "Most agencies overpromise and underdeliver. This was different. Clear strategy, measurable results, and constant communication. Our qualified leads doubled in 90 days.",
    result: '2x qualified leads in 90 days',
    gradient: 'from-emerald-400 to-green-600'
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      {/* Testimonial Card */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row gap-10">
            {/* Left side - Avatar and Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0">
              <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${currentTestimonial.gradient} flex items-center justify-center mb-6 shadow-2xl group/avatar`}>
                <span className="text-4xl font-black text-white relative z-10">{currentTestimonial.initial}</span>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${currentTestimonial.gradient} opacity-0 group-hover/avatar:opacity-100 blur-xl transition-opacity duration-500`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{currentTestimonial.name}</h3>
              <p className="text-sm text-slate-400 mb-2">{currentTestimonial.title}</p>
              <p className="text-sm text-emerald-400 font-bold mb-4">{currentTestimonial.company}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40 mb-4 backdrop-blur-sm">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xs font-bold text-green-400 uppercase tracking-wide">{currentTestimonial.industry}</span>
              </div>
              <div className="flex gap-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Right side - Testimonial Content */}
            <div className="flex-1">
              {/* Quote Icon */}
              <div className="relative mb-6">
                <svg className="w-16 h-16 text-green-400/20 absolute -top-2 -left-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <svg className="w-12 h-12 text-green-400/40 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-xl text-slate-100 leading-relaxed mb-8 italic font-medium relative z-10">
                "{currentTestimonial.quote}"
              </p>

              {/* Results Badge */}
              <div className="inline-flex flex-col p-6 rounded-2xl bg-gradient-to-br from-green-500/30 via-emerald-500/25 to-green-600/30 border border-green-500/40 backdrop-blur-sm shadow-xl group/result">
                <span className="text-xs font-bold text-green-300 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Measurable Results
                </span>
                <span className="text-3xl font-black text-white group-hover/result:scale-105 transition-transform duration-300">{currentTestimonial.result}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button 
            onClick={goToPrevious}
            className="w-12 h-12 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-100 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex gap-2.5 items-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 h-3 bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-500/50' 
                    : 'w-3 h-3 bg-slate-600 hover:bg-slate-500 hover:scale-125'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={goToNext}
            className="w-12 h-12 rounded-xl bg-slate-700/60 hover:bg-slate-700 border border-slate-600/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 active:scale-100 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
