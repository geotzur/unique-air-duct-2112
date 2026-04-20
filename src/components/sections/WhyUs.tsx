'use client';

import { whyUs } from '@/lib/data';
import { getUtilityIcon } from '@/lib/images';
import SectionLabel from '@/components/SectionLabel';
import Swoosh from '@/components/Swoosh';
import Reveal from '@/components/Reveal';

// Extract first stat-like phrase from description for the "giant number" visual
function extractBigNumber(i: number): { num: string; sub: string } {
  const sets = [
    { num: '100%', sub: 'Photographed' },
    { num: '0.3μ', sub: 'HEPA Captured' },
    { num: '0', sub: 'Subcontractors' },
    { num: '1 DAY', sub: 'Start to Finish' },
  ];
  return sets[i] ?? sets[0];
}

export default function WhyUs() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-surfaceDark overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-section-mesh"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full animate-floatSlow"
        style={{
          background: 'radial-gradient(circle, rgba(180,31,207,0.45) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full animate-floatSlow"
        style={{
          background: 'radial-gradient(circle, rgba(53,196,81,0.32) 0%, transparent 70%)',
          animationDelay: '-10s',
        }}
      />
      <Swoosh variant={2} opacity={0.07} className="left-1/4 top-1/3 w-[700px]" />
      <div className="noise" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="06" text="Why Us" light />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-6 ribbon inline-block" style={{ transform: 'rotate(1deg)', padding: '16px 42px 16px 26px' }}>
            <h2 className="font-heading font-extrabold text-textPrimary text-3xl sm:text-4xl md:text-5xl leading-tight">
              Why Miami-Dade Chooses Us
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 relative">
          {whyUs.map((w, i) => {
            const big = extractBigNumber(i);
            const icon = getUtilityIcon(`why-${i + 1}`);
            return (
              <Reveal key={w.title} delay={i * 100}>
                <div className="group relative px-6 md:px-8 lg:pr-10 transition-all duration-500 hover:bg-background/5 hover:rounded-card py-6">
                  {/* vertical divider */}
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute left-0 top-4 bottom-4 w-px bg-background/14"
                    />
                  )}
                  {icon && (
                    <img
                      src={icon}
                      alt=""
                      aria-hidden="true"
                      width={40}
                      height={40}
                      className="mb-5 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                      style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                    />
                  )}
                  <div className="font-heading font-black text-background text-5xl md:text-6xl leading-none tracking-tight2 transition-transform duration-500 group-hover:scale-105">
                    {big.num}
                  </div>
                  <div className="mt-3 font-body font-semibold uppercase tracking-stamp text-secondary text-[12px]">
                    {big.sub}
                  </div>
                  <h3 className="mt-5 font-heading font-extrabold text-background text-lg md:text-xl leading-snug">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-background/75 text-[14px] leading-relaxed">
                    {w.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
