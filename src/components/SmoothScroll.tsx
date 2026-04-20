'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;
    let rafId: number;
    (async () => {
      try {
        const Lenis = (await import('lenis')).default;
        lenis = new Lenis({
          duration: 1.15,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          smoothWheel: true,
          wheelMultiplier: 1.0,
          touchMultiplier: 1.6,
        });
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        // fail gracefully
      }
    })();
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      try { lenis?.destroy(); } catch {}
    };
  }, []);
  return <>{children}</>;
}
