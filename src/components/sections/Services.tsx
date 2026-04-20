'use client';

import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/data';
import { getServiceImage, getServiceIcon, fallbackGradient } from '@/lib/images';
import SectionLabel from '@/components/SectionLabel';
import Swoosh from '@/components/Swoosh';
import Reveal from '@/components/Reveal';
import { ArrowUpRight } from 'lucide-react';

function IconDisc({ slug }: { slug: string }) {
  const icon = getServiceIcon(slug);
  if (!icon) return null;
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primaryLight shadow-whisper transition-transform duration-500 group-hover:rotate-[8deg] group-hover:-translate-y-0.5">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        width={26}
        height={26}
        className="transition-transform duration-500 group-hover:-rotate-6"
        style={{ filter: 'brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(4050%) hue-rotate(282deg) brightness(82%) contrast(101%)' }}
      />
    </div>
  );
}

function FeaturedCell({ s }: { s: typeof services[number] }) {
  const img = getServiceImage(s.slug);
  return (
    <Link
      href={`/services/${s.slug}/`}
      className="group relative md:col-span-2 md:row-span-2 bg-background rounded-bento overflow-hidden shadow-whisper border border-border hover:shadow-glow transition-all duration-500"
    >
      <span className="sweep-border" aria-hidden="true" />
      {/* Image header */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt={s.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="transition-transform duration-[1200ms] group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ backgroundImage: fallbackGradient(s.slug) }}
          />
        )}
        <Swoosh
          variant={2}
          opacity={0.55}
          stroke="#35C451"
          className="-right-10 bottom-0 w-[500px] animate-driftSwoosh"
        />
      </div>
      <div className="relative p-7 md:p-9">
        <div className="flex items-center gap-3 mb-3">
          <IconDisc slug={s.slug} />
          <span className="inline-flex items-center gap-2 font-heading font-bold uppercase tracking-stamp text-[11px] text-primary">
            Featured · Most Requested
          </span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-textPrimary leading-tight">
          {s.name}
        </h3>
        <p className="mt-3 text-textSecondary text-[15px] leading-relaxed line-clamp-3">
          {s.short_description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 font-body font-bold text-primary text-[15px]">
          Learn more
          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}

function BentoCell({ s }: { s: typeof services[number] }) {
  const img = getServiceImage(s.slug);
  return (
    <Link
      href={`/services/${s.slug}/`}
      className="group relative bg-background rounded-card overflow-hidden shadow-whisper border border-border hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500 flex flex-col h-full"
    >
      <span className="sweep-border" aria-hidden="true" />
      {/* Image header */}
      <div className="relative h-36 sm:h-40 md:h-36 lg:h-40 overflow-hidden shrink-0">
        {img ? (
          <Image
            src={img}
            alt={s.name}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="transition-transform duration-[1200ms] group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ backgroundImage: fallbackGradient(s.slug) }}
          />
        )}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
        />
        <div className="absolute -bottom-6 left-5 z-10">
          <IconDisc slug={s.slug} />
        </div>
      </div>
      <div className="relative p-5 pt-9 md:p-6 md:pt-10 flex flex-col flex-1">
        <h3 className="font-heading font-extrabold text-lg md:text-xl text-textPrimary leading-tight">
          {s.name}
        </h3>
        <p className="mt-2 text-textSecondary text-[13px] md:text-[14px] leading-relaxed line-clamp-3">
          {s.short_description}
        </p>
        <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-body font-bold text-primary text-[14px]">
          Learn more
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 dot-pattern opacity-70"
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="02" text="Our Services" />
        </Reveal>
        <div className="mt-5 md:mt-7 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10">
          <Reveal>
            <div className="ribbon inline-block" style={{ transform: 'rotate(-1deg)', padding: '16px 42px 16px 26px' }}>
              <h2 className="font-heading font-extrabold text-textPrimary text-3xl sm:text-4xl md:text-5xl leading-tight">
                Services That Bring New Air
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-textSecondary text-[15px] md:text-[16px] leading-relaxed">
              Every home and business has its own story. From full-home duct cleanings to emergency mold
              remediation, here's the full menu of what our NADCA-certified crews do every day across Miami-Dade.
            </p>
          </Reveal>
        </div>

        {/* Bento grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-5">
          <div className="md:col-span-2 md:row-span-2">
            <FeaturedCell s={featured} />
          </div>
          {rest.map((s, i) => {
            // First 4 of rest go in the 2x2 to the right of the featured
            // Remaining go in the bottom rows
            return (
              <div key={s.slug} className="md:col-span-1 md:row-span-1">
                <Reveal delay={60 + i * 60}>
                  <BentoCell s={s} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
