'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover)').matches) return;
    const el = ref.current;
    if (!el) return;
    let mx = -100, my = -100, x = -100, y = -100;
    let hovering = false;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      hovering = !!t?.closest('a, button, [data-cursor="link"], input, textarea, select, label');
    };
    const tick = () => {
      x += (mx - x) * 0.18;
      y += (my - y) * 0.18;
      el.style.transform = `translate3d(${x - (hovering ? 14 : 6)}px, ${y - (hovering ? 14 : 6)}px, 0) scale(${hovering ? 2.4 : 1})`;
      el.style.mixBlendMode = hovering ? 'difference' : 'normal';
      el.style.background = hovering ? '#F3E3F6' : '#B41FCF';
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden md:block"
      style={{
        width: '12px',
        height: '12px',
        borderRadius: '9999px',
        background: '#B41FCF',
        transition: 'background 0.2s, mix-blend-mode 0.2s',
      }}
    />
  );
}
