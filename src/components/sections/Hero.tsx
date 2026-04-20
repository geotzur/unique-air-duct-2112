'use client';

import Image from 'next/image';
import Link from 'next/link';
import { content, phoneHref } from '@/lib/data';
import { getHeroImage } from '@/lib/images';
import PillButton from '@/components/PillButton';
import Swoosh from '@/components/Swoosh';
import { Star, Phone } from 'lucide-react';

export default function Hero() {
  const hero = content.home.hero;
  const heroImg = getHeroImage();

  // Split headline into three lines for the tilted ribbon stack
  const lines = ['Breathe Cleaner', 'Miami', 'Air'];

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden pt-24 md:pt-32 pb-20 md:pb-24">
      {/* Gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-hero-gradient-mobile md:bg-hero-gradient"
      />
      {/* Airflow swoosh layers */}
      <Swoosh
        variant={1}
        opacity={0.14}
        className="-left-40 top-[12%] w-[900px] animate-driftSwoosh"
      />
      <Swoosh
        variant={2}
        opacity={0.1}
        className="right-[-10%] top-[40%] w-[700px] animate-driftSwoosh"
        style={{ animationDelay: '-4s' }}
      />
      <Swoosh
        variant={3}
        opacity={0.12}
        className="-left-10 bottom-[5%] w-[800px] animate-driftSwoosh"
        style={{ animationDelay: '-8s' }}
      />
      <div className="noise" aria-hidden="true" />

      {/* Right-side hero photo with magenta-glow disk */}
      {heroImg && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[44%] h-[78%] pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 40% 50%, rgba(180,31,207,0.55) 0%, transparent 60%)',
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-[40px] overflow-hidden shadow-deep border-4 border-background/10">
            <Image
              src={heroImg}
              alt="Technician performing duct cleaning in a Miami home"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1024px) 44vw, 0px"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 40%, rgba(29,11,36,0.35) 100%)',
              }}
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-background/12 backdrop-blur-md border border-background/18 text-background/90 text-[12px] md:text-[13px] font-body font-semibold uppercase tracking-stamp">
            <span className="w-2 h-2 rounded-full bg-secondary animate-sparklePulse" />
            {hero.badge}
          </div>

          {/* 3 stacked tilted ribbons */}
          <div className="mt-7 md:mt-9 flex flex-col items-center lg:items-start gap-3 md:gap-4">
            {lines.map((line, i) => {
              const tilts = [-1.5, 1, -2];
              return (
                <div
                  key={i}
                  className="ribbon animate-ribbonIn max-w-full"
                  style={{
                    transform: `rotate(${tilts[i]}deg)`,
                    animationDelay: `${0.12 * i}s`,
                  }}
                >
                  <span className="font-heading font-black uppercase tracking-tight2 text-textPrimary leading-[0.95] text-[clamp(34px,8vw,96px)] block">
                    {line}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-7 md:mt-9 max-w-xl mx-auto lg:mx-0 text-background/85 font-body text-[16px] md:text-[18px] leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <PillButton href="/contact/" variant="primary">
              {hero.cta_primary}
            </PillButton>
            <PillButton href={phoneHref} variant="secondary">
              <Phone size={18} /> {hero.cta_secondary}
            </PillButton>
          </div>

          {/* Stats strip */}
          <div className="mt-10 inline-flex items-center flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 px-5 py-3 rounded-pill bg-background/92 shadow-whisper">
            <span className="flex items-center gap-2 font-body font-semibold text-textPrimary text-[13px] md:text-[14px] tracking-stamp uppercase">
              <span className="font-heading font-black text-primary text-[18px]">15+</span>
              Years
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="flex items-center gap-2 font-body font-semibold text-textPrimary text-[13px] md:text-[14px] tracking-stamp uppercase">
              <Star size={14} className="fill-accent text-accent" />
              4.9 on Google
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-body font-semibold text-textPrimary text-[13px] md:text-[14px] tracking-stamp uppercase">
              Same-Day Service
            </span>
          </div>
        </div>

        {/* Mobile photo */}
        {heroImg && (
          <div className="lg:hidden relative mt-4 mx-auto w-[90%] aspect-[4/5] rounded-[28px] overflow-hidden shadow-deep border-4 border-background/10">
            <Image
              src={heroImg}
              alt="Technician performing duct cleaning in a Miami home"
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="90vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent 45%, rgba(29,11,36,0.4) 100%)',
              }}
            />
          </div>
        )}
      </div>

      {/* Bottom vignette to soften into stats section */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 bottom-0 h-24"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(29,11,36,0.35))',
        }}
      />
    </section>
  );
}
