import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Adeel Ahmad - SEO Specialist',
  description: 'Terms of Service for Adeel Ahmad SEO services. Learn about the terms and conditions for using My services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-blue-500/10" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Please read these terms carefully before using My services.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
              Last Updated: November 29, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Agreement to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  By accessing or using the services provided by Adeel Ahmad SEO, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not access My services.
                </p>
              </div>

              {/* Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Services Provided
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  I provide professional SEO (Search Engine Optimization) services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>Technical SEO audits and optimization</li>
                  <li>On-page and off-page SEO strategies</li>
                  <li>Keyword research and competitive analysis</li>
                  <li>Content optimization and link building</li>
                  <li>Local SEO and e-commerce SEO</li>
                  <li>CMS platform optimization (WordPress, Shopify, etc.)</li>
                  <li>Industry-specific SEO solutions</li>
                </ul>
              </div>

              {/* User Obligations */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Your Obligations
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When using My services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use My services in compliance with all applicable laws</li>
                  <li>Not engage in any activity that could harm our reputation or services</li>
                  <li>Provide necessary access to your website and relevant accounts</li>
                  <li>Respond to our requests for information in a timely manner</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Payment and Billing
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Payment terms will be specified in your service agreement. Generally:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>Payments are due according to the agreed schedule</li>
                  <li>Services may be suspended for non-payment</li>
                  <li>Refunds are subject to the terms in your service agreement</li>
                  <li>All prices are in USD unless otherwise specified</li>
                  <li>You are responsible for any applicable taxes</li>
                </ul>
              </div>

              {/* Service Guarantees */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Service Guarantees and Disclaimers
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  While we strive to deliver excellent results:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>I cannot guarantee specific search engine rankings</li>
                  <li>Results vary based on competition, industry, and other factors</li>
                  <li>Search engine algorithms change frequently and are beyond our control</li>
                  <li>SEO is a long-term strategy and results take time to materialize</li>
                  <li>Past performance does not guarantee future results</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Intellectual Property Rights
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Ownership of deliverables and intellectual property:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>You retain ownership of your website and existing content</li>
                  <li>We retain ownership of our methodologies, tools, and processes</li>
                  <li>Content created for you becomes your property upon full payment</li>
                  <li>We may use anonymized data and case studies for marketing</li>
                  <li>Our website content and branding remain our intellectual property</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Confidentiality
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We treat all client information as confidential and will not disclose your business information, strategies, 
                  or data to third parties without your explicit consent, except as required by law or as necessary to provide 
                  My services.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid for services in the past 12 months</li>
                  <li>We are not responsible for third-party actions or search engine algorithm changes</li>
                  <li>You use My services at your own risk</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Termination
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  Either party may terminate services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>With written notice as specified in the service agreement</li>
                  <li>Immediately for breach of these terms</li>
                  <li>Upon completion of contracted services</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  Termination does not relieve you of payment obligations for services already rendered.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Changes to Terms
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
                  to our website. Your continued use of My services after changes constitutes acceptance of the modified terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Governing Law
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from 
                  these terms shall be resolved through binding arbitration or in the courts of the applicable jurisdiction.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Questions About These Terms?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  If you have any questions about these Terms of Service, please Contact Me:
                </p>
                <div className="space-y-3 text-slate-600 dark:text-slate-400">
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:hello@adeelahmad.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      hello@adeelahmad.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+1234567890" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +92 323 1458064
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12 text-center">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
