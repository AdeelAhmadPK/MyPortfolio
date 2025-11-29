import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Muhammad Adeel | Free SEO Consultation',
  description: 'Get a free SEO consultation and custom proposal. Expert SEO services to grow your organic traffic, improve rankings, and increase revenue. Let\'s discuss your goals.',
  keywords: 'contact SEO expert, free SEO consultation, SEO quote, SEO proposal, hire SEO consultant, SEO agency contact, get SEO help, SEO pricing, SEO services inquiry, schedule SEO call, SEO consultation booking, SEO expert contact form',
  openGraph: {
    title: 'Contact Muhammad Adeel | Free SEO Consultation',
    description: 'Get a free SEO consultation and custom proposal. Expert SEO services to grow your organic traffic and improve search rankings.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SEO Expert | Free SEO Consultation',
    description: 'Contact My SEO experts for a free consultation and custom SEO proposal.'
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
