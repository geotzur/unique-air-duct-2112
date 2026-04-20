import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, areas, phoneHref, company } from '@/lib/data';
import { getServiceImage, getServiceIcon, getBeforeAfter, fallbackGradient } from '@/lib/images';
import Reveal from '@/components/Reveal';
import PillButton from '@/components/PillButton';
import ServiceTabs from '@/components/ServiceTabs';
import ServiceBeforeAfter from '@/components/ServiceBeforeAfter';
import Swoosh from '@/components/Swoosh';
import {
  ServiceJsonLd,
  FaqJsonLd,
  BreadcrumbJsonLd,
} from '@/components/JsonLd';
import { ArrowUpRight, Phone } from 'lucide-react';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return {};
  const title = `${s.name} in ${company.city}, ${company.state} | ${company.name}`;
  const description = `${s.short_description} NADCA-certified ${s.name.toLowerCase()} serving ${company.city} and ${company.state_full} since ${company.year_established}.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      s.name,
      `${s.name} ${company.city}`,
      `${s.name} ${company.state_full}`,
      `${s.name} near me`,
      'NADCA certified',
      'air duct cleaning',
      'HVAC cleaning',
    ],
    alternates: { canonical: `/services/${s.slug}/` },
    openGraph: {
      title,
      description,
      url: `/services/${s.slug}/`,
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const s = services.find(x => x.slug === params.slug);
  if (!s) return notFound();
  const img = getServiceImage(s.slug);
  const icon = getServiceIcon(s.slug);
  const pair = getBeforeAfter(s.slug);

  return (
    <>
      <ServiceJsonLd
        name={s.name}
        description={s.full_description[0]}
        slug={s.slug}
      />
      <FaqJsonLd faqs={s.faq} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services/' },
          { name: s.name, url: `/services/${s.slug}/` },
        ]}
      />
      {/* split-color-image hero */}
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div className="grid lg:grid-cols-5 min-h-[560px] md:min-h-[620px]">
          {/* Left magenta-to-plum panel */}
          <div className="relative lg:col-span-2 bg-hero-gradient flex items-center overflow-hidden py-14 md:py-20">
            <Swoosh variant={1} opacity={0.14} className="-left-20 top-0 w-[600px] animate-driftSwoosh" />
            <div className="noise" aria-hidden="true" />
            <div className="relative z-10 w-full px-4 md:px-8 lg:px-12">
              <p className="section-label section-label-light">
                <span>CALIFORNIA · {s.name}</span>
              </p>
              <h1 className="mt-5 font-heading font-black uppercase text-background text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight2">
                {s.name}
              </h1>
              <p className="mt-6 text-background/85 text-[16px] md:text-[18px] leading-relaxed max-w-md">
                {s.short_description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PillButton href="/contact/" variant="primary">Get a Free Estimate</PillButton>
                <PillButton href={phoneHref} variant="secondary"><Phone size={16} /> Call</PillButton>
              </div>
            </div>
          </div>

          {/* Right service photograph */}
          <div className="relative lg:col-span-3 min-h-[320px] md:min-h-[420px]">
            {img ? (
              <Image
                src={img}
                alt={s.name}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ backgroundImage: fallbackGradient(s.slug) }}
              >
                <span className="font-heading font-black text-background/15 text-[14vw] uppercase leading-none select-none">
                  {s.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        {/* Floating icon mark at the bottom-left intersection */}
        {icon && (
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div
              aria-hidden="true"
              className="absolute -top-14 md:-top-16 left-4 md:left-12 w-24 h-24 md:w-28 md:h-28 rounded-full bg-primaryLight shadow-glow border-4 border-background flex items-center justify-center z-20"
            >
              <img
                src={icon}
                alt=""
                width={56}
                height={56}
                style={{ filter: 'brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(4050%) hue-rotate(282deg) brightness(82%) contrast(101%)' }}
              />
            </div>
          </div>
        )}
      </section>

      {/* Tabbed content */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
          <ServiceTabs service={s} />
        </div>
      </section>

      {/* Optional before/after */}
      {pair && <ServiceBeforeAfter pair={pair} name={s.name} />}

      {/* Features — icon-number-grid */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="section-label">What's Included</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-3xl md:text-5xl leading-tight max-w-3xl">
              Every {s.name.toLowerCase()} visit includes
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {s.features.map((f, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="relative bg-background rounded-bento p-7 md:p-9 border border-border overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="font-heading font-black text-[100px] leading-none absolute -top-4 -right-2 outline-num"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative flex items-start gap-4">
                    <span className="inline-flex w-10 h-10 rounded-full bg-primaryLight items-center justify-center text-primary shrink-0 mt-0.5">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <p className="text-textPrimary text-[15px] md:text-[16px] leading-relaxed font-body font-semibold">
                      {f}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ — qa-alternating full-width stripes */}
      <section className="relative bg-background">
        <div className="relative max-w-none mx-auto">
          <Reveal>
            <div className="py-14 md:py-20 bg-background">
              <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
                <p className="section-label">Common Questions</p>
                <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-3xl md:text-5xl leading-tight">
                  Answers, on the record.
                </h2>
              </div>
            </div>
          </Reveal>
          {s.faq.map((f, i) => (
            <div key={i}>
              <div className="bg-surfaceDark text-background py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex items-start gap-5">
                  <span className="font-heading font-black text-secondary text-2xl md:text-3xl leading-none shrink-0 mt-1">Q.</span>
                  <p className="font-heading font-bold text-background text-xl md:text-3xl leading-snug">
                    {f.question}
                  </p>
                </div>
              </div>
              <div className="bg-background py-10 md:py-14 border-b border-border">
                <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex items-start gap-5">
                  <span className="font-heading font-black text-primary text-2xl md:text-3xl leading-none shrink-0 mt-1">A.</span>
                  <p className="text-textSecondary text-[16px] md:text-[18px] leading-relaxed">
                    {f.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ribbon divider signature */}
      <section className="relative bg-surface py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <div
            className="ribbon inline-block"
            style={{ transform: 'rotate(-1deg)', padding: '16px 46px 16px 28px' }}
          >
            <span className="font-heading font-extrabold uppercase text-primaryDark text-xl md:text-2xl">
              Serving neighborhoods like yours →
            </span>
          </div>
        </div>
      </section>

      {/* Related areas — section-with-texture-bg */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-surfaceDark overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern-dark opacity-70" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="section-label section-label-light">Where We Handle This</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-heading font-extrabold text-background text-3xl md:text-5xl leading-tight max-w-2xl">
              Miami-Dade neighborhoods we serve for {s.name.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            {areas.map((a, i) => (
              <Reveal key={a.slug} delay={i * 40}>
                <Link
                  href={`/areas/${a.slug}/${s.slug}/`}
                  className="group flex items-center justify-between gap-4 py-5 md:py-6 border-b border-background/10 text-background hover:text-secondary transition-colors"
                >
                  <span className="font-heading font-extrabold text-2xl md:text-4xl uppercase tracking-tight2 leading-none">
                    {a.name}
                  </span>
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <PillButton href="/contact/" variant="primary">Book {s.name}</PillButton>
          </div>
        </div>
      </section>
    </>
  );
}
