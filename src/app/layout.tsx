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
    'NADCA-certified air duct, dryer vent, and HVAC cleaning across Miami-Dade County and South Florida. Photographed before-and-after on every job. Free estimates, same-day service.',
  keywords: [
    'air duct cleaning Miami',
    'air duct cleaning Miami-Dade',
    'duct cleaning near me',
    'NADCA certified duct cleaner',
    'HVAC cleaning Miami',
    'dryer vent cleaning Florida',
    'mold remediation air ducts',
    'indoor air quality Miami',
    'residential duct cleaning Miami-Dade',
    'commercial duct cleaning Florida',
    'chimney sweep Miami',
    'UV air purification installation',
    'attic insulation replacement Florida',
    'coil and blower cleaning',
    'HVAC sanitization Florida',
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
      'NADCA-certified duct, vent, and HVAC cleaning across Miami-Dade and South Florida. Before-and-after photos, same-day service, free estimates.',
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
      'NADCA-certified duct, vent, and HVAC cleaning across Miami-Dade and South Florida.',
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
    'geo.position': '25.7617;-80.1918',
    ICBM: '25.7617, -80.1918',
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
