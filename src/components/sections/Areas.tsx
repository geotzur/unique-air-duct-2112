'use client';

import Link from 'next/link';
import Image from 'next/image';
import { areas, services } from '@/lib/data';
import { getAreaImage, fallbackGradient } from '@/lib/images';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';

function AreaCard({
  a,
  hot = false,
  index,
}: {
  a: typeof areas[number];
  hot?: boolean;
  index: number;
}) {
  const img = getAreaImage(a.slug);
  const serviceCount = services.length;
  return (
    <Link
      href={`/areas/${a.slug}/`}
      className="group relative block overflow-hidden rounded-card aspect-[4/3] border border-background/14"
    >
      {img ? (
        <Image
          src={img}
          alt={`${a.name}, Florida`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundImage: fallbackGradient(a.slug) }}
        >
          <span className="font-heading font-black text-background/15 text-[14vw] uppercase leading-none select-none">
            {a.name.charAt(0)}
          </span>
        </div>
      )}
      {/* Soft vignette for text legibility without over-darkening */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-surfaceDark/70 via-surfaceDark/15 to-transparent"
      />
      {/* Corner-sweep border on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-card border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <div className="absolute bottom-5 left-5 right-5">
        <div className="flex items-center gap-2">
          <h3 className="font-heading font-extrabold text-background text-2xl md:text-3xl leading-none uppercase tracking-tight2">
            {a.name}
          </h3>
          {hot && <span aria-hidden="true" className="sparkle relative inline-block" style={{ position: 'relative' }} />}
        </div>
        <div className="mt-2 flex items-center gap-2 text-secondary text-[12px] font-body font-semibold uppercase tracking-stamp">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
          {serviceCount} services available
        </div>
      </div>
    </Link>
  );
}

export default function Areas() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-surfaceDark overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 dot-pattern-dark opacity-70" />
      <div className="noise" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="09" text="Where We Work" light />
        </Reveal>
        <Reveal delay={80}>
          <div
            className="mt-6 ribbon inline-block"
            style={{ transform: 'rotate(-1deg)', padding: '16px 42px 16px 26px' }}
          >
            <h2 className="font-heading font-extrabold text-textPrimary text-3xl sm:text-4xl md:text-5xl leading-tight">
              Service Areas Across Miami-Dade
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={i * 60}>
              <AreaCard a={a} hot={i === 0} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <div className="mt-12 text-center">
            <Link
              href="/areas/"
              className="inline-flex items-center gap-2 font-body font-bold text-secondary hover:text-background transition-colors"
            >
              View all Miami-Dade service areas →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
