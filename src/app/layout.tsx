import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import CursorFollower from '@/components/CursorFollower';
import SmoothScroll from '@/components/SmoothScroll';
import MobileCallBar from '@/components/MobileCallBar';
import { company } from '@/lib/data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://uniqueairduct.com';

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state} | Free Estimates`,
    template: `%s | ${company.name} — ${company.city}, ${company.state}`,
  },
  description:
    'NADCA-certified air duct, dryer vent, and HVAC cleaning across Los Angeles and the greater California area. Photographed before-and-after on every job. Free estimates, same-day service.',
  keywords: [
    'air duct cleaning Los Angeles',
    'air duct cleaning California',
    'duct cleaning near me',
    'NADCA certified duct cleaner',
    'HVAC cleaning Los Angeles',
    'dryer vent cleaning California',
    'mold remediation air ducts',
    'indoor air quality Los Angeles',
    'residential duct cleaning LA',
    'commercial duct cleaning California',
    'chimney sweep Los Angeles',
    'UV air purification installation',
    'attic insulation replacement California',
    'coil and blower cleaning',
    'HVAC sanitization California',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  applicationName: company.name,
  category: 'Home Services',
  openGraph: {
    title: `${company.name} | ${company.type} in ${company.city}, ${company.state}`,
    description:
      'NADCA-certified duct, vent, and HVAC cleaning across Los Angeles and California. Before-and-after photos, same-day service, free estimates.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: company.name,
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: `${company.name} — ${company.type} in ${company.city}, ${company.state}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${company.name} | ${company.type} in ${company.city}, ${company.state}`,
    description:
      'NADCA-certified duct, vent, and HVAC cleaning across Los Angeles and California.',
    images: ['/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
  other: {
    'geo.region': `US-${company.state}`,
    'geo.placename': `${company.city}, ${company.state_full}`,
    'geo.position': '34.0522;-118.2437',
    ICBM: '34.0522, -118.2437',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-textPrimary min-h-screen">
        <SmoothScroll>
          <ScrollProgress />
          <CursorFollower />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <MobileCallBar />
        </SmoothScroll>
      </body>
    </html>
  );
}
