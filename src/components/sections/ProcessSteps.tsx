'use client';

import { processSteps } from '@/lib/data';
import { getUtilityIcon } from '@/lib/images';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';

export default function ProcessSteps() {
  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="05" text="How We Work" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            How We Clean Your Air
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-textSecondary text-[15px] md:text-[17px] leading-relaxed max-w-2xl">
            A four-step process engineered to give you proof at every checkpoint — not a receipt and a promise.
          </p>
        </Reveal>

        {/* Dashed airflow connector — desktop horizontal */}
        <div className="relative mt-14 md:mt-20">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="hidden md:block absolute top-16 left-0 right-0 h-10 w-full"
          >
            <path
              d="M 40 30 C 240 -10, 440 50, 640 20 S 1040 50, 1160 20"
              stroke="#35C451"
              strokeWidth="3"
              strokeDasharray="8 10"
              strokeLinecap="round"
              fill="none"
              opacity="0.45"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative">
            {processSteps.map((step, i) => {
              const iconPath = getUtilityIcon(`step-${step.step}`);
              return (
                <Reveal key={step.step} delay={i * 120}>
                  <div className="group relative">
                    <div className="relative h-32 md:h-36 mb-1 overflow-visible">
                      <span className="outline-num text-[120px] md:text-[140px] select-none absolute left-0 top-0 leading-none">
                        {String(step.step).padStart(2, '0')}
                      </span>
                      {iconPath && (
                        <img
                          src={iconPath}
                          alt=""
                          aria-hidden="true"
                          width={44}
                          height={44}
                          className="absolute right-2 top-3 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
                          style={{ filter: 'brightness(0) saturate(100%) invert(64%) sepia(73%) saturate(466%) hue-rotate(74deg) brightness(96%) contrast(85%)' }}
                        />
                      )}
                    </div>
                    <h3 className="font-heading font-extrabold text-textPrimary text-xl md:text-2xl leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-textSecondary text-[14px] leading-relaxed">
                      {step.description}
                    </p>
                    {step.step === 4 && (
                      <span aria-hidden="true" className="sparkle" style={{ top: '10px', left: '110px' }} />
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
