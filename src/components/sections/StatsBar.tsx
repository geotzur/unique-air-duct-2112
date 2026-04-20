'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/data';

function parseTarget(v: string): { num: number; suffix: string; prefix: string } {
  const m = v.match(/^([^\d]*)([\d.,]+)([^\d]*)$/);
  if (!m) return { num: 0, suffix: v, prefix: '' };
  return {
    prefix: m[1] || '',
    num: parseFloat(m[2].replace(/,/g, '')) || 0,
    suffix: m[3] || '',
  };
}

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [animated, setAnimated] = useState(false);
  const [display, setDisplay] = useState(value); // SSR-safe: render final value by default
  const { num, suffix, prefix } = parseTarget(value);
  const showPlusAfter = suffix.includes('+');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !animated) {
            setAnimated(true);
            io.disconnect();
            const duration = 1800;
            const start = performance.now();
            const suffixClean = showPlusAfter ? suffix.replace('+', '') : suffix;
            const tick = (t: number) => {
              const p = Math.min((t - start) / duration, 1);
              // back.out(1.4)
              const eased = 1 + 2.4 * Math.pow(p - 1, 3) + 1.4 * Math.pow(p - 1, 2);
              const current = num * Math.max(0, Math.min(1, eased));
              const rounded =
                num >= 100 ? Math.round(current).toLocaleString() : current.toFixed(num % 1 ? 1 : 0);
              setDisplay(`${prefix}${rounded}${suffixClean}${showPlusAfter && p === 1 ? '+' : ''}`);
              if (p < 1) requestAnimationFrame(tick);
              else setDisplay(value); // snap to exact target
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [num, prefix, suffix, showPlusAfter, value, animated]);

  return (
    <div
      ref={ref}
      className="relative px-6 py-4 md:px-8 md:py-6 text-center md:text-left"
    >
      <div className="font-heading font-black text-primary leading-none text-5xl md:text-6xl lg:text-7xl">
        {display}
      </div>
      <div className="mt-3 font-body font-semibold uppercase tracking-stamp text-textSecondary text-[12px] md:text-[13px]">
        {label}
      </div>
      <span
        aria-hidden="true"
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-border last:hidden"
      />
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-background py-10 md:py-16 lg:py-20 border-b border-border">
      <div className="noise" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 items-stretch">
          {stats.map((s, i) => (
            <StatItem key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
