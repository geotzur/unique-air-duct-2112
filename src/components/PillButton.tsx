'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost-dark';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: 'md' | 'sm';
  magnetic?: boolean;
  className?: string;
  onRipple?: boolean;
};

export default function PillButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  magnetic = true,
  className = '',
  onRipple = true,
}: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!magnetic) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < 80) {
        const pull = 0.25;
        el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
      } else {
        el.style.transform = 'translate(0,0)';
      }
    };
    const onLeave = () => { el.style.transform = 'translate(0,0)'; };
    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [magnetic]);

  const click = (e: React.MouseEvent) => {
    if (!onRipple) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.style.position = 'absolute';
    ripple.style.left = `${e.clientX - r.left}px`;
    ripple.style.top = `${e.clientY - r.top}px`;
    ripple.style.width = ripple.style.height = '10px';
    ripple.style.borderRadius = '9999px';
    ripple.style.background = 'rgba(253,249,245,0.55)';
    ripple.style.transform = 'translate(-50%,-50%) scale(1)';
    ripple.style.pointerEvents = 'none';
    ripple.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
    el.appendChild(ripple);
    requestAnimationFrame(() => {
      ripple.style.transform = 'translate(-50%,-50%) scale(40)';
      ripple.style.opacity = '0';
    });
    setTimeout(() => ripple.remove(), 700);
  };

  const variantCls =
    variant === 'primary'
      ? 'btn-pill-primary'
      : variant === 'secondary'
        ? 'btn-pill-secondary'
        : 'btn-pill-ghost-dark';
  const sizeCls = size === 'sm' ? 'btn-pill-sm' : '';

  return (
    <Link
      href={href}
      ref={ref as any}
      className={`btn-pill ${variantCls} ${sizeCls} ${className}`}
      onClick={click}
    >
      {children}
    </Link>
  );
}
