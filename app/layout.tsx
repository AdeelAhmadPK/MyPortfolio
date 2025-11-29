import type { Metadata } from 'next'
import './globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'Professional SEO Services Worldwide | Expert SEO Consultant & Agency',
  description: 'Expert SEO consultant and agency serving 195+ countries. Professional SEO services including technical SEO, local SEO, e-commerce SEO, and link building. Proven search engine optimization strategies to dominate Google rankings.',
  keywords: 'SEO services, SEO consultant, SEO agency, search engine optimization, professional SEO, SEO expert, SEO company, digital marketing, organic traffic, Google rankings, local SEO, technical SEO, e-commerce SEO, link building, keyword research, SEO audit',
  icons: {
    icon: [
      { url: '/Favicon.webp', type: 'image/webp' },
    ],
    apple: [
      { url: '/Favicon.webp', type: 'image/webp' },
    ],
    shortcut: '/Favicon.webp',
  },
  openGraph: {
    title: 'Professional SEO Services Worldwide | Expert SEO Consultant & Agency',
    description: 'Expert SEO consultant and agency serving 195+ countries. Professional SEO services to dominate Google rankings and grow organic traffic.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional SEO Services Worldwide | Expert SEO Consultant',
    description: 'Expert SEO consultant and agency serving 195+ countries with proven SEO strategies.'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/Favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/Favicon.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SEO Expert" />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
