'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services, phoneHref, company } from '@/lib/data';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import { Plus, Phone } from 'lucide-react';

// Aggregate a master FAQ list — first 2 from each service, max 8
const faqs = services.flatMap(s => s.faq.slice(0, 1)).slice(0, 8);

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-background overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 stripe-pattern opacity-100" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <Reveal>
              <SectionLabel number="08" text="Honest Answers" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-heading font-extrabold text-textPrimary text-4xl md:text-5xl leading-tight">
                Questions We Hear All the Time
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-textSecondary text-[15px] md:text-[17px] leading-relaxed">
                If your question isn't here, call the number on the page — a real, certified technician will
                answer, not an answering service. We'd rather help you decide honestly than sell you a job.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Link
                href={phoneHref}
                className="mt-8 inline-flex items-center gap-3 font-body font-bold text-primary hover:text-primaryDark transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primaryLight group-hover:bg-primary group-hover:text-background transition-colors">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-[12px] uppercase tracking-stamp font-semibold text-textLight">Still curious? Call us</span>
                  <span className="block text-[18px]">{company.phone}</span>
                </span>
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-3 lg:pl-6">
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 60}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-6 md:py-7 flex items-start gap-5 md:gap-7 text-left group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-heading font-black text-3xl md:text-4xl leading-none tracking-tight2 w-14 md:w-16 shrink-0 transition-colors duration-300 ${
                          isOpen ? 'text-primaryDark' : 'text-primary'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1">
                        <span className="block font-heading font-bold text-textPrimary text-lg md:text-2xl leading-snug">
                          {f.question}
                        </span>
                        <span
                          className="grid overflow-hidden transition-all duration-500 ease-out"
                          style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                        >
                          <span className="min-h-0">
                            <span className="block mt-4 text-textSecondary text-[15px] md:text-[16px] leading-relaxed pb-1">
                              {f.answer}
                            </span>
                          </span>
                        </span>
                      </span>
                      <span
                        className={`shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
                          isOpen
                            ? 'bg-primary text-background rotate-45'
                            : 'bg-surface text-primary group-hover:bg-primary group-hover:text-background'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus size={18} />
                      </span>
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
