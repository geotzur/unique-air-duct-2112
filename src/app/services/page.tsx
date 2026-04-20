import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/sections/CTA';
import { services, company } from '@/lib/data';
import { getServiceImage, fallbackGradient } from '@/lib/images';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: `All Services | Air Duct Cleaning in ${company.city}, ${company.state} | ${company.name}`,
  },
  description: `NADCA-certified air duct cleaning, dryer vent cleaning, HVAC sanitization, mold remediation, attic insulation, and chimney services across ${company.city} and ${company.state_full}. Ten specialty services with photographed before-and-after proof.`,
  keywords: [
    `air duct cleaning services ${company.city}`,
    `HVAC cleaning ${company.state_full}`,
    'NADCA certified services',
    'dryer vent cleaning Miami',
    'mold remediation Florida',
  ],
  alternates: { canonical: '/services/' },
  openGraph: {
    title: `All Services | ${company.name}`,
    description: `Ten NADCA-certified air duct and HVAC services across ${company.city} and ${company.state_full}.`,
    url: '/services/',
    type: 'website',
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
        ]}
      />
      <PageHero
        label="Full Service Menu"
        section="02"
        title={
          <>
            Every way we bring <br />
            <span className="text-secondary">new air</span> to Miami-Dade.
          </>
        }
        subtitle="Ten specialty services, all performed by full-time NADCA-certified employees — no subcontractors, no surprises, no shortcuts."
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => {
              const img = getServiceImage(s.slug);
              return (
                <Reveal key={s.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="group relative block bg-background rounded-bento overflow-hidden shadow-whisper border border-border hover:shadow-glow transition-all duration-500"
                  >
                    <span className="sweep-border" aria-hidden="true" />
                    <div className="relative h-48 overflow-hidden">
                      {img ? (
                        <Image
                          src={img}
                          alt={s.name}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ backgroundImage: fallbackGradient(s.slug) }}
                        >
                          <span className="font-heading font-black text-background/15 text-[12vw] uppercase leading-none select-none">
                            {s.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-heading font-extrabold text-textPrimary text-xl md:text-2xl leading-tight">
                        {s.name}
                      </h3>
                      <p className="mt-3 text-textSecondary text-[14px] leading-relaxed line-clamp-3">
                        {s.short_description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 font-body font-bold text-primary text-[14px]">
                        Learn more
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
