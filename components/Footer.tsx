'use client'

import Link from 'next/link'
import Image from 'next/image'

interface FlagColors {
  primary: string;
  secondary: string;
  accent?: string;
}

interface FooterProps {
  flagColors?: FlagColors;
}

export default function Footer({ flagColors }: FooterProps) {
  const currentYear = new Date().getFullYear()

  // Generate colors based on flag colors or use defaults
  const primaryColor = flagColors?.primary || '#2563eb';
  const secondaryColor = flagColors?.secondary || '#4f46e5';
  const accentColor = flagColors?.accent;

  return (
    <>
      {flagColors && (
        <style dangerouslySetInnerHTML={{
          __html: `
            .footer-link-hover:hover {
              color: ${primaryColor} !important;
            }
            .footer-link-hover:hover .link-dot {
              opacity: 1 !important;
              background-color: ${primaryColor} !important;
            }
            .footer-link-hover:hover .link-underline {
              background-color: ${primaryColor} !important;
            }
            .footer-social-hover:hover {
              background: linear-gradient(135deg, ${primaryColor}, ${secondaryColor}) !important;
              transform: translateY(-4px) scale(1.05) !important;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes pulse-glow {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 0.8; }
            }
          `
        }} />
      )}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black text-slate-300 border-t-2 overflow-hidden"
        style={{
          borderImageSource: flagColors ? `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${accentColor || primaryColor})` : 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)',
          borderImageSlice: 1
        }}
      >
        {/* Animated background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ 
              backgroundColor: primaryColor,
              animation: 'float 6s ease-in-out infinite, pulse-glow 4s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse"
            style={{ 
              backgroundColor: secondaryColor,
              animation: 'float 8s ease-in-out infinite reverse, pulse-glow 5s ease-in-out infinite'
            }}
          />
          {accentColor && (
            <div 
              className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl animate-pulse"
              style={{ 
                backgroundColor: accentColor,
                animation: 'float 7s ease-in-out infinite, pulse-glow 6s ease-in-out infinite'
              }}
            />
          )}
        </div>

        {/* Decorative top gradient line */}
        <div 
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ 
            background: flagColors ? `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${accentColor || primaryColor})` : 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)',
            boxShadow: flagColors ? `0 0 20px ${primaryColor}50` : '0 0 20px rgba(37, 99, 235, 0.3)'
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center mb-8 group">
                <div className="relative">
                  {/* Animated ring around logo */}
                  <div 
                    className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ 
                      background: flagColors ? `conic-gradient(from 0deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})` : 'conic-gradient(from 0deg, #2563eb, #7c3aed, #2563eb)',
                      filter: 'blur(12px)'
                    }}
                  />
                  <Image 
                    src="/WhiteLogo.webp" 
                    alt="Adeel Ahmad - SEO Specialist" 
                    width={200} 
                    height={200} 
                    className="relative w-44 h-44 object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-2xl" 
                  />
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 font-medium">
                Hi! I'm <span className="text-white font-bold">Muhammad Adeel</span>, an Expert SEO Specialist delivering results-driven digital marketing solutions worldwide. 🚀
              </p>
              <div className="space-y-2 mb-6">
                <p className="text-sm text-slate-400">
                  <span className="text-slate-500">📧 Email:</span> <a href="mailto:hello@adeelahmad.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello@adeelahmad.com</a>
                </p>
                <p className="text-sm text-slate-400">
                  <span className="text-slate-500">📱 WhatsApp:</span> <a href="https://wa.me/+923231458064" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">+92 323 1458064</a>
                </p>
              </div>
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/m-adeeliqbal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ${flagColors ? 'footer-social-hover' : 'hover:from-blue-600 hover:to-blue-700'} flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/AdeelAhmad064" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ${flagColors ? 'footer-social-hover' : 'hover:from-blue-400 hover:to-blue-500'} flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.facebook.com/m.adeeliqbal644" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 ${flagColors ? 'footer-social-hover' : 'hover:from-blue-600 hover:to-blue-700'} flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group`}
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

          {/* Quick Links */}
          <div>
            <h3 className="relative text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span 
                className="w-1 h-6 rounded-full"
                style={{ background: flagColors ? `linear-gradient(180deg, ${primaryColor}, ${secondaryColor})` : 'linear-gradient(180deg, #2563eb, #7c3aed)' }}
              />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: '/', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                { href: '/services', label: 'Services', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
                { href: '/case-studies', label: 'Case Studies', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
                { href: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
                { href: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`text-sm text-slate-400 ${flagColors ? 'footer-link-hover' : 'hover:text-blue-400'} transition-all duration-300 flex items-center gap-3 group hover:translate-x-1`}
                  >
                    <span 
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{ 
                        backgroundColor: flagColors ? `${primaryColor}20` : 'rgba(37, 99, 235, 0.12)',
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                      </svg>
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="relative text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span 
                className="w-1 h-6 rounded-full"
                style={{ background: flagColors ? `linear-gradient(180deg, ${primaryColor}, ${secondaryColor})` : 'linear-gradient(180deg, #2563eb, #7c3aed)' }}
              />
              Popular Services
            </h3>
            <ul className="space-y-4">
              {['Local SEO', 'E-commerce SEO', 'Healthcare SEO', 'Real Estate SEO', 'Legal SEO'].map((service, index) => (
                <li key={service}>
                  <Link 
                    href="/services" 
                    className={`text-sm text-slate-400 ${flagColors ? 'footer-link-hover' : 'hover:text-blue-400'} transition-all duration-300 flex items-center gap-3 group hover:translate-x-1`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span 
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                      style={{ 
                        backgroundColor: flagColors ? primaryColor : '#60a5fa',
                        boxShadow: flagColors ? `0 0 10px ${primaryColor}` : '0 0 10px rgba(96, 165, 250, 0.5)'
                      }}
                    />
                    <span className="font-medium">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="relative text-white font-bold mb-8 text-lg flex items-center gap-2">
              <span 
                className="w-1 h-6 rounded-full"
                style={{ background: flagColors ? `linear-gradient(180deg, ${primaryColor}, ${secondaryColor})` : 'linear-gradient(180deg, #2563eb, #7c3aed)' }}
              />
              Get In Touch
            </h3>
            <ul className="space-y-5">
              <li>
                <div className="flex items-start gap-4 group">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{ 
                      background: flagColors ? `linear-gradient(135deg, ${primaryColor}30, ${secondaryColor}30)` : 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))',
                      boxShadow: flagColors ? `0 0 20px ${primaryColor}30` : '0 0 20px rgba(37, 99, 235, 0.2)'
                    }}
                  >
                    <svg 
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                      style={{ color: flagColors ? primaryColor : '#60a5fa' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Email</span>
                    <a 
                      href="mailto:hello@adeelahmad.com" 
                      className={`text-sm text-slate-300 ${flagColors ? 'footer-link-hover' : 'hover:text-blue-400'} transition-colors block font-medium hover:underline`}
                    >
                      hello@adeelahmad.com
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-4 group">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                    style={{ 
                      background: flagColors ? `linear-gradient(135deg, ${primaryColor}30, ${secondaryColor}30)` : 'linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.2))',
                      boxShadow: flagColors ? `0 0 20px ${primaryColor}30` : '0 0 20px rgba(37, 99, 235, 0.2)'
                    }}
                  >
                    <svg 
                      className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24"
                      style={{ color: flagColors ? primaryColor : '#60a5fa' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">WhatsApp</span>
                    <a 
                      href="https://wa.me/+923231458064" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm text-slate-300 ${flagColors ? 'footer-link-hover' : 'hover:text-blue-400'} transition-colors block font-medium hover:underline`}
                    >
                      +92 323 1458064
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with enhanced design */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-400 flex items-center gap-2">
              <span>© {currentYear}</span>
              <span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: flagColors ? primaryColor : '#60a5fa' }}
              />
              <span className="text-white font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Muhammad Adeel</span>
              <span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: flagColors ? secondaryColor : '#a78bfa' }}
              />
              <span>All rights reserved.</span>
            </p>
            <div className="flex flex-wrap gap-8 justify-center items-center">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/sitemap-page', label: 'Sitemap' }
              ].map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-sm text-slate-400 ${flagColors ? 'footer-link-hover' : 'hover:text-blue-400'} transition-all duration-300 relative group font-medium`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {link.label}
                  <span 
                    className="link-underline absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-500 rounded-full"
                    style={{ 
                      background: flagColors ? `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})` : 'linear-gradient(90deg, #60a5fa, #a78bfa)',
                      boxShadow: flagColors ? `0 0 10px ${primaryColor}` : '0 0 10px rgba(96, 165, 250, 0.5)'
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Decorative bottom accent */}
          <div className="mt-10 flex justify-center">
            <div 
              className="w-24 h-1 rounded-full"
              style={{ 
                background: flagColors ? `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${accentColor || primaryColor})` : 'linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)',
                boxShadow: flagColors ? `0 0 15px ${primaryColor}50` : '0 0 15px rgba(37, 99, 235, 0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
