import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import PillButton from '@/components/PillButton';
import { content, company, phoneHref } from '@/lib/data';
import { getAboutImage } from '@/lib/images';
import { BreadcrumbJsonLd, OrganizationJsonLd } from '@/components/JsonLd';
import { Phone } from 'lucide-react';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: {
    absolute: `About ${company.name} | ${company.city}'s Trusted Air Duct Cleaning Team`,
  },
  description: `Founded in ${company.year_established} by a father-and-son HVAC team. NADCA-certified technicians, no subcontractors, photographed before-and-after on every job. Serving ${company.city} and all of ${company.state_full}.`,
  keywords: [
    `about ${company.name}`,
    `${company.city} duct cleaning company`,
    'NADCA certified team',
    'family-owned HVAC',
    `${company.state_full} air duct cleaners`,
  ],
  alternates: { canonical: '/about/' },
  openGraph: {
    title: `About ${company.name} | NADCA-Certified ${company.state_full} Team`,
    description: `Family-founded in ${company.year_established}. NADCA-certified technicians serving ${company.city} and ${company.state_full}.`,
    url: '/about/',
    type: 'website',
  },
};

export default function AboutPage() {
  const img = getAboutImage();

  return (
    <>
      <OrganizationJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about/' },
        ]}
      />
      <PageHero
        label="Who We Are"
        section="01"
        title={
          <>
            About <br />
            <span className="text-secondary">Unique Air Duct.</span>
          </>
        }
        subtitle={content.about.paragraphs[0]}
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-3 space-y-6">
            <Reveal>
              <SectionLabel number="02" text="Our Story" />
            </Reveal>
            <Reveal delay={60}>
              <h2 className="font-heading font-extrabold text-textPrimary text-3xl md:text-4xl leading-tight">
                A standard we refuse to compromise on
              </h2>
            </Reveal>
            {content.about.paragraphs.slice(1).map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p className="text-textSecondary text-[16px] md:text-[17px] leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="lg:col-span-2 relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-primaryLight rounded-bento -rotate-2"
              />
              <div className="relative aspect-[4/5] rounded-bento overflow-hidden shadow-deep">
                {img ? (
                  <Image
                    src={img}
                    alt="The Unique Air Duct team"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-cta-gradient" />
                )}
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-background rounded-card shadow-glow px-5 py-4">
                <div className="font-heading font-black text-primary text-4xl leading-none">{company.year_established}</div>
                <div className="mt-1 text-[11px] font-body font-semibold uppercase tracking-stamp text-textLight">Founded</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <SectionLabel number="03" text="Our Values" />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-3xl md:text-5xl leading-tight max-w-3xl">
              What drives every decision we make on every job
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content.about.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="relative group bg-background rounded-bento p-8 md:p-10 border border-border hover:shadow-glow transition-all duration-500 h-full">
                  <span className="sweep-border" aria-hidden="true" />
                  <div className="font-heading font-black text-primary text-5xl leading-none opacity-30">
                    0{i + 1}
                  </div>
                  <h3 className="mt-5 font-heading font-extrabold text-textPrimary text-xl md:text-2xl leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-textSecondary text-[15px] md:text-[16px] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <PillButton href="/contact/" variant="primary">Get a Free Estimate</PillButton>
              <PillButton href={phoneHref} variant="ghost-dark"><Phone size={18} /> {company.phone}</PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
