'use client';

import { useEffect, useState } from 'react';
import { testimonials } from '@/lib/data';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { Star } from 'lucide-react';

// Organic placement (desktop) — each bubble gets its own offset
const placements = [
  { top: '0%', left: '2%', tilt: -2, width: '46%' },
  { top: '6%', left: '52%', tilt: 1.5, width: '44%' },
  { top: '34%', left: '8%', tilt: 1, width: '42%' },
  { top: '42%', left: '56%', tilt: -1.5, width: '40%', anchor: true },
  { top: '68%', left: '30%', tilt: 2, width: '48%' },
];

function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('');
  return (
    <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-primaryLight text-primary font-heading font-extrabold text-[14px]">
      {initials}
    </span>
  );
}

function Bubble({ t, tilt, anchor = false }: { t: typeof testimonials[number]; tilt: number; anchor?: boolean }) {
  return (
    <div
      className={`relative p-6 md:p-7 rounded-bubble shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow ${
        anchor
          ? 'bg-cta-gradient text-background'
          : 'bg-background text-textPrimary'
      }`}
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* chat tail */}
      <span
        aria-hidden="true"
        className="absolute -bottom-2 left-8 w-4 h-4 rotate-45"
        style={{ background: anchor ? '#1D0B24' : '#FDF9F5' }}
      />
      <div className="flex items-center gap-3">
        <div className={anchor ? 'relative' : ''}>
          {anchor && <span className="absolute inset-0 rounded-full animate-ringPulse" aria-hidden="true" />}
          <Avatar name={t.author} />
        </div>
        <div className="flex">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={14} className="fill-accent text-accent" />
          ))}
        </div>
      </div>
      <p className={`mt-4 text-[15px] leading-relaxed ${anchor ? 'text-background/95' : 'text-textPrimary'}`}>
        "{t.text}"
      </p>
      <div className="mt-5 flex items-center justify-between gap-3">
        <div>
          <div className={`font-body font-bold text-[14px] ${anchor ? 'text-secondary' : 'text-primaryDark'}`}>
            {t.author}
          </div>
          <div className={`text-[12px] ${anchor ? 'text-background/70' : 'text-textLight'}`}>
            {t.location}
          </div>
        </div>
        <span
          className={`inline-flex items-center gap-1 text-[11px] font-body font-semibold uppercase tracking-stamp px-3 py-1 rounded-pill ${
            anchor ? 'bg-background/15 text-background' : 'bg-surface text-primaryDark'
          }`}
        >
          {t.service.split(' ').slice(0, 2).join(' ')}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Only use 5 bubbles on desktop (organic), all on mobile (stack)
  const desktopBubbles = testimonials.slice(0, 5);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 10%, rgba(180,31,207,0.08), transparent 35%), radial-gradient(circle at 85% 70%, rgba(53,196,81,0.06), transparent 40%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="07" text="Voices of Miami-Dade" />
        </Reveal>
        <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10">
          <Reveal>
            <h2 className="font-heading font-extrabold text-textPrimary text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xl">
              Real Homes.<br /> <span className="text-primary">Real Reviews.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-textSecondary text-[15px] md:text-[16px] leading-relaxed">
              Nearly 60% of our work comes from word of mouth. Here's what Miami-Dade neighbors are saying about
              the air they breathe now.
            </p>
          </Reveal>
        </div>

        {/* Desktop organic layout */}
        {isDesktop ? (
          <div className="relative mt-14 h-[1100px]">
            {desktopBubbles.map((t, i) => {
              const p = placements[i];
              return (
                <div
                  key={i}
                  className="absolute"
                  style={{ top: p.top, left: p.left, width: p.width }}
                >
                  <Reveal delay={i * 120}>
                    <Bubble t={t} tilt={p.tilt} anchor={!!p.anchor} />
                  </Reveal>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <Bubble t={t} tilt={i % 2 === 0 ? -1 : 1} anchor={i === 3} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
