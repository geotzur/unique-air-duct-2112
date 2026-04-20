import type { Metadata } from 'next';
import { designConfig } from '@/design.config';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/sections/StatsBar';
import Services from '@/components/sections/Services';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ProcessSteps from '@/components/sections/ProcessSteps';
import WhyUs from '@/components/sections/WhyUs';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Areas from '@/components/sections/Areas';
import CTA from '@/components/sections/CTA';
import {
  LocalBusinessJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
} from '@/components/JsonLd';
import { company, services } from '@/lib/data';

const SECTION_MAP: Record<string, React.ComponentType> = {
  Hero,
  StatsBar,
  Services,
  BeforeAfter,
  ProcessSteps,
  WhyUs,
  Testimonials,
  FAQ,
  Areas,
  CTA,
};

export const metadata: Metadata = {
  title: {
    absolute: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state} | Free Estimates`,
  },
  description:
    'NADCA-certified air duct, dryer vent, and HVAC cleaning across Los Angeles and the greater California area. Photographed before-and-after on every job. Same-day service and free estimates.',
  alternates: { canonical: '/' },
  openGraph: {
    title: `${company.name} | Air Duct Cleaning in ${company.city}, ${company.state}`,
    description:
      'NADCA-certified duct, vent, and HVAC cleaning across Los Angeles and California. Photographed before-and-after proof on every job.',
    url: '/',
    type: 'website',
  },
};

export default function HomePage() {
  // Aggregate a few FAQs from services for the FAQPage schema
  const faqs = services.flatMap(s => s.faq.slice(0, 1)).slice(0, 8);

  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }]} />
      <FaqJsonLd faqs={faqs} />
      {designConfig.sectionOrder.map(name => {
        const S = SECTION_MAP[name];
        return S ? <S key={name} /> : null;
      })}
    </>
  );
}
