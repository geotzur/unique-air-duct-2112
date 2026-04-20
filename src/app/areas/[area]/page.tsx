import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas, services, company, phoneHref } from '@/lib/data';
import { getAreaImage, getServiceIcon, fallbackGradient } from '@/lib/images';
import Reveal from '@/components/Reveal';
import PillButton from '@/components/PillButton';
import Swoosh from '@/components/Swoosh';
import CTA from '@/components/sections/CTA';
import {
  LocalBusinessJsonLd,
  BreadcrumbJsonLd,
} from '@/components/JsonLd';
import { ArrowUpRight, Phone, MapPin } from 'lucide-react';

export function generateStaticParams() {
  return areas.map(a => ({ area: a.slug }));
}

export function generateMetadata({ params }: { params: { area: string } }): Metadata {
  const a = areas.find(x => x.slug === params.area);
  if (!a) return {};
  const title = `Air Duct Cleaning in ${a.name}, ${company.city} | ${company.name}`;
  const description = `${a.description} NADCA-certified duct and HVAC cleaning in ${a.name}, ${company.state_full}. Free estimates and same-day service.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `air duct cleaning ${a.name}`,
      `duct cleaning ${a.name} ${company.state}`,
      `HVAC cleaning ${a.name}`,
      `dryer vent cleaning ${a.name}`,
      `${a.name} air quality`,
      'NADCA certified',
      'same-day service',
    ],
    alternates: { canonical: `/areas/${a.slug}/` },
    openGraph: {
      title,
      description,
      url: `/areas/${a.slug}/`,
      type: 'website',
    },
  };
}

export default function AreaDetailPage({ params }: { params: { area: string } }) {
  const a = areas.find(x => x.slug === params.area);
  if (!a) return notFound();
  const img = getAreaImage(a.slug);

  return (
    <>
      <LocalBusinessJsonLd areaName={a.name} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/areas/' },
          { name: a.name, url: `/areas/${a.slug}/` },
        ]}
      />
      {/* city-name-bold hero */}
      <section className="relative overflow-hidden bg-background pt-32 md:pt-40 pb-16 md:pb-24">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <Swoosh variant={2} opacity={0.08} className="-left-20 top-40 w-[800px]" />
        <Swoosh variant={3} opacity={0.08} className="right-0 bottom-0 w-[700px]" />

        {/* Giant background city name */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span
            className="font-heading font-black uppercase text-primaryLight leading-none select-none whitespace-nowrap"
            style={{ fontSize: 'clamp(120px, 22vw, 360px)', letterSpacing: '-0.02em' }}
          >
            {a.name}
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <p className="section-label">Miami-Dade · Service Area</p>
          <h1 className="mt-5 font-heading font-extrabold text-textPrimary text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight2 max-w-3xl">
            Air Duct Cleaning in <span className="text-primary">{a.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-textSecondary text-[16px] md:text-[19px] leading-relaxed">
            {a.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href="/contact/" variant="primary">Get Free Estimate</PillButton>
            <PillButton href={phoneHref} variant="ghost-dark"><Phone size={16} /> {company.phone}</PillButton>
          </div>
        </div>

        {/* Area photo frame */}
        {img && (
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 mt-12">
            <div className="relative aspect-[21/9] rounded-bento overflow-hidden shadow-deep border-4 border-background/50">
              <Image
                src={img}
                alt={`${a.name}, Florida`}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
            </div>
          </div>
        )}
      </section>

      {/* Local highlights */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-surface">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-50" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="section-label">What {a.name} Homeowners Ask Us About</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {a.highlights.map((h, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="relative p-7 rounded-bento bg-background border border-border h-full">
                  <div className="font-heading font-black text-primary text-3xl leading-none opacity-30">
                    0{i + 1}
                  </div>
                  <p className="mt-4 text-textPrimary text-[15px] md:text-[16px] leading-relaxed font-body font-semibold">
                    {h}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services — horizontal-drag-strip on desktop */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="section-label">Services available in {a.name}</p>
              <h2 className="mt-4 font-heading font-extrabold text-textPrimary text-3xl md:text-5xl leading-tight">
                Everything we do for <span className="text-primary">{a.name}</span>.
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-pill bg-primaryLight text-primaryDark text-[12px] font-body font-bold uppercase tracking-stamp">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              Drag to Explore
            </div>
          </div>
        </div>
        <div className="mt-10 max-w-[100vw] overflow-x-auto no-scrollbar">
          <div className="flex gap-5 md:gap-6 px-4 md:px-12 pb-6 min-w-max">
            {services.map(s => {
              const icon = getServiceIcon(s.slug);
              return (
                <Link
                  key={s.slug}
                  href={`/areas/${a.slug}/${s.slug}/`}
                  className="group relative w-[280px] md:w-[320px] shrink-0 bg-surface rounded-bento border border-border p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="sweep-border" aria-hidden="true" />
                  {icon && (
                    <span className="inline-flex w-12 h-12 rounded-full bg-primaryLight items-center justify-center">
                      <img
                        src={icon}
                        alt=""
                        aria-hidden="true"
                        width={26}
                        height={26}
                        style={{ filter: 'brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(4050%) hue-rotate(282deg) brightness(82%) contrast(101%)' }}
                      />
                    </span>
                  )}
                  <h3 className="mt-5 font-heading font-extrabold text-textPrimary text-xl leading-tight">
                    {s.name}
                  </h3>
                  <p className="mt-3 text-textSecondary text-[14px] leading-relaxed line-clamp-3">
                    {s.short_description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-body font-bold text-primary text-[13px]">
                    In {a.name}
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit/Reach Us block */}
      <section className="relative py-10 md:py-16 lg:py-20 bg-surface">
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-label">Visit / Reach Us</p>
            <h3 className="mt-4 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl leading-tight">
              We come to {a.name} — fast.
            </h3>
            <ul className="mt-6 space-y-3 text-textSecondary text-[15px]">
              <li className="flex gap-3 items-start"><MapPin size={18} className="text-primary shrink-0 mt-0.5" /> Dispatched from: 8432 NW 36th Street, Miami, FL</li>
              <li className="flex gap-3 items-start"><Phone size={18} className="text-primary shrink-0 mt-0.5" /> {company.phone}</li>
              <li className="flex gap-3 items-start"><span className="w-4 h-4 mt-0.5 inline-block rounded-full bg-secondary" /> Average response in {a.name}: under 3 hours</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-bento overflow-hidden bg-hero-gradient flex items-center justify-center">
            <Swoosh variant={1} opacity={0.14} className="-left-10 top-10 w-[500px]" />
            <div className="relative text-center text-background px-6">
              <MapPin size={36} className="text-secondary mx-auto" />
              <div className="mt-4 font-heading font-black uppercase text-3xl md:text-4xl">{a.name}</div>
              <div className="mt-1 text-background/75 text-[13px] font-body font-semibold uppercase tracking-stamp">Florida</div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
