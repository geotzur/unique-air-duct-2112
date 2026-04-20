'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { services } from '@/lib/data';
import { getBeforeAfter } from '@/lib/images';
import SectionLabel from '@/components/SectionLabel';
import Swoosh from '@/components/Swoosh';
import Reveal from '@/components/Reveal';

export default function BeforeAfter() {
  // find the first service with a before/after pair
  const target = services.find(s => getBeforeAfter(s.slug));
  const pair = target ? getBeforeAfter(target.slug) : null;
  if (!pair || !target) return null;

  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const demoStarted = useRef(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting && !demoStarted.current) {
            demoStarted.current = true;
            // animate from 0 → 50 once for demo
            setPos(0);
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min((t - start) / 1000, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setPos(50 * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    let x = ((clientX - r.left) / r.width) * 100;
    x = Math.max(2, Math.min(98, x));
    // magnetic snap
    [25, 50, 75].forEach(snap => {
      if (Math.abs(x - snap) < 1.5) x = snap;
    });
    setPos(x);
  };

  return (
    <section className="relative py-12 md:py-20 lg:py-28 bg-surfaceDark overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 dot-pattern-dark opacity-60"
      />
      <Swoosh variant={1} opacity={0.08} className="-left-40 top-10 w-[900px] animate-driftSwoosh" />
      <Swoosh variant={3} opacity={0.08} className="-right-20 bottom-10 w-[700px] animate-driftSwoosh" style={{ animationDelay: '-6s' }} />

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <Reveal>
          <SectionLabel number="04" text="Proof, Not Promises" light />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-heading font-extrabold text-background text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl">
            See the Difference. <span className="text-secondary">Breathe the Difference.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-5 text-background/75 text-[15px] md:text-[17px] leading-relaxed max-w-2xl">
            Drag the handle to reveal a real Miami-Dade home's duct, before and after our team touched it.
            Every job, every time — we photograph what we clean.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            ref={wrapRef}
            className="relative mt-10 md:mt-14 w-full aspect-[16/9] rounded-bento overflow-hidden shadow-deep border-2 border-background/10 cursor-ew-resize select-none"
            onMouseDown={e => { setDragging(true); onMove(e.clientX); }}
            onMouseMove={e => dragging && onMove(e.clientX)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onTouchStart={e => { setDragging(true); onMove(e.touches[0].clientX); }}
            onTouchMove={e => dragging && onMove(e.touches[0].clientX)}
            onTouchEnd={() => setDragging(false)}
          >
            {/* After image (full) */}
            <Image
              src={pair.after}
              alt={`After ${target.name}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(min-width: 1024px) 1100px, 100vw"
            />
            {/* Before image clipped */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src={pair.before}
                alt={`Before ${target.name}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 1024px) 1100px, 100vw"
              />
            </div>

            {/* Labels */}
            <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-surfaceDark/70 backdrop-blur-sm text-secondary text-[12px] md:text-[13px] font-body font-bold uppercase tracking-stamp">
              Before
            </span>
            <span className="absolute bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-surfaceDark/70 backdrop-blur-sm text-secondary text-[12px] md:text-[13px] font-body font-bold uppercase tracking-stamp">
              After
            </span>

            {/* Divider line */}
            <div
              aria-hidden="true"
              className="absolute top-0 bottom-0 w-1 bg-secondary"
              style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            />
            {/* Drag handle */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary text-primary shadow-pillGreen flex items-center justify-center border-4 border-background transition-transform"
              style={{
                left: `${pos}%`,
                transform: `translate(-50%, -50%) scale(${dragging ? 1.15 : 1})`,
              }}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M15 6l-6 6 6 6" />
                <path d="M9 6l6 6-6 6" transform="translate(6,0)" />
              </svg>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-6 text-background/55 text-[13px] text-center md:text-left font-body">
            Real {target.name.toLowerCase()} job, photographed in {target.slug.split('-').join(' ')} — drag to compare.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
