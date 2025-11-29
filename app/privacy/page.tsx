import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Adeel Ahmad - SEO Specialist',
  description: 'Privacy Policy for Adeel Ahmad SEO services. Learn How I collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines How I collect, use, and protect your information.
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
                  Introduction
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  At Adeel Ahmad SEO, I am committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains How I collect, use, disclose, and safeguard your information when you visit our website 
                  or use My services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Personal Information</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>Fill out contact forms or request a free SEO audit</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Engage with My services or make inquiries</li>
                  <li>Communicate with us via email, phone, or social media</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  This information may include: name, email address, phone number, company name, website URL, and any other 
                  information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  When you visit our website, we automatically collect certain information about your device and browsing activity, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>IP address and geographic location</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information and screen resolution</li>
                </ul>
              </div>

              {/* How I Use Your Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  How I Use Your Information
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>To provide and improve My SEO services</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To analyze website usage and improve user experience</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                  <li>To comply with legal obligations and enforce our terms</li>
                  <li>To personalize your experience on our website</li>
                </ul>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. 
                  Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or to 
                  indicate when a cookie is being sent.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on 
                  your device until deleted or expired) for various purposes including analytics, personalization, and marketing.
                </p>
              </div>

              {/* Data Sharing and Disclosure */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Data Sharing and Disclosure
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  I do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and delivering services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Data Security
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  I implement appropriate technical and organizational security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or 
                  electronic storage is 100% secure, and I cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Your Rights
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400 ml-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request restriction of processing your personal information</li>
                  <li>Request transfer of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-slate-600 dark:text-slate-400 mt-4">
                  To exercise these rights, please Contact Me using the information provided below.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Children's Privacy
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  My services are not directed to individuals under the age of 18. I do not knowingly collect personal information 
                  from children. If you are a parent or guardian and believe your child has provided us with personal information, 
                  please Contact Me to have it removed.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  Changes to This Privacy Policy
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy 
                  Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically 
                  for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Me
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please Contact Me:
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
