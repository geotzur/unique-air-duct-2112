'use client';

import { content, phoneHref, company } from '@/lib/data';
import PillButton from '@/components/PillButton';
import Swoosh from '@/components/Swoosh';
import Reveal from '@/components/Reveal';
import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-24 lg:py-32"
      style={{
        background: 'linear-gradient(160deg, #63176F 0%, #B41FCF 60%, #1D0B24 100%)',
        clipPath: 'polygon(0 24px, 100% 0, 100% 100%, 0 100%)',
      }}
    >
      <Swoosh
        variant={1}
        opacity={0.16}
        className="-left-20 top-0 w-[1100px] animate-driftSwoosh"
      />
      <Swoosh
        variant={3}
        opacity={0.12}
        className="-right-20 bottom-0 w-[900px] animate-driftSwoosh"
        style={{ animationDelay: '-7s' }}
      />
      <div className="noise" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
        <Reveal>
          <p className="section-label section-label-light justify-center">
            <span>SECTION 10 · YOUR TURN</span>
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-heading font-black uppercase text-background text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight2">
            Ready for<br /><span className="text-secondary">Cleaner Air?</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 text-background/85 text-[16px] md:text-[20px] leading-relaxed">
            {content.cta.subtext}
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PillButton href="/contact/" variant="primary">
              {content.cta.button_text}
            </PillButton>
            <PillButton href={phoneHref} variant="secondary">
              <Phone size={18} /> {company.phone}
            </PillButton>
          </div>
        </Reveal>
        <Reveal delay={340}>
          <p className="mt-8 text-background/60 text-[13px] font-body uppercase tracking-stamp">
            No obligation · Same-day booking available · Licensed & insured
          </p>
        </Reveal>
      </div>
    </section>
  );
}
