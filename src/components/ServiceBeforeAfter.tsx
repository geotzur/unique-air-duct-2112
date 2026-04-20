'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

type Pair = { before: string; after: string };

export default function ServiceBeforeAfter({ pair, name }: { pair: Pair; name: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);

  const onMove = (cx: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = Math.max(2, Math.min(98, ((cx - r.left) / r.width) * 100));
    setPos(p);
  };

  return (
    <section className="relative py-10 md:py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="section-label">Real Job, Photographed</p>
        <h2 className="mt-4 font-heading font-extrabold text-textPrimary text-3xl md:text-4xl leading-tight">
          Before & after, drag to see.
        </h2>
        <div
          ref={wrapRef}
          className="relative mt-8 w-full aspect-[16/9] rounded-bento overflow-hidden shadow-deep cursor-ew-resize select-none border border-border"
          onMouseDown={e => { setDrag(true); onMove(e.clientX); }}
          onMouseMove={e => drag && onMove(e.clientX)}
          onMouseUp={() => setDrag(false)}
          onMouseLeave={() => setDrag(false)}
          onTouchStart={e => { setDrag(true); onMove(e.touches[0].clientX); }}
          onTouchMove={e => drag && onMove(e.touches[0].clientX)}
          onTouchEnd={() => setDrag(false)}
        >
          <Image src={pair.after} alt={`After ${name}`} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 900px, 100vw" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Image src={pair.before} alt={`Before ${name}`} fill style={{ objectFit: 'cover' }} sizes="(min-width: 1024px) 900px, 100vw" />
          </div>
          <div aria-hidden="true" className="absolute top-0 bottom-0 w-1 bg-secondary" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }} />
          <div
            aria-hidden="true"
            className="absolute top-1/2 w-14 h-14 rounded-full bg-secondary text-primary shadow-pillGreen flex items-center justify-center border-4 border-background"
            style={{ left: `${pos}%`, transform: `translate(-50%,-50%) scale(${drag ? 1.15 : 1})` }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M15 6l-6 6 6 6" />
              <path d="M9 6l6 6-6 6" transform="translate(6,0)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
