'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks, company, phoneHref } from '@/lib/data';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      const y = window.scrollY;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${y}px`;
      document.body.style.width = '100%';
      return () => {
        document.documentElement.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, y);
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 top-0 transition-all duration-500 ${
          scrolled ? 'pt-3' : 'pt-5'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            scrolled
              ? 'max-w-4xl rounded-pill bg-background/85 backdrop-blur-xl border border-border shadow-glow'
              : 'max-w-7xl'
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-4 md:px-6 ${
              scrolled ? 'h-14' : 'h-16 md:h-20'
            }`}
          >
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={company.name}>
              <span
                className={`inline-flex items-center justify-center rounded-md bg-background p-1 shadow-whisper ${
                  scrolled ? 'h-9' : 'h-10 md:h-12'
                }`}
              >
                <img
                  src="/logo.jpg"
                  alt={company.name}
                  className={`w-auto ${scrolled ? 'h-7' : 'h-8 md:h-10'}`}
                />
              </span>
              <span
                className={`font-heading font-extrabold uppercase tracking-tight2 leading-none ${
                  scrolled ? 'text-textPrimary text-[15px]' : 'text-background text-lg md:text-xl'
                }`}
              >
                Unique<span className="text-secondary">.</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-body font-semibold text-[15px] transition-colors duration-300 hover:text-secondary ${
                    scrolled ? 'text-textPrimary' : 'text-background'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href={phoneHref}
                className={`hidden lg:inline-flex items-center gap-2 font-body font-semibold text-[14px] transition-colors duration-300 ${
                  scrolled ? 'text-primaryDark hover:text-primary' : 'text-background/80 hover:text-background'
                }`}
              >
                <Phone size={16} /> {company.phone}
              </Link>
              <Link
                href="/contact/"
                className="btn-pill btn-pill-primary btn-pill-sm hidden md:inline-flex"
              >
                Book Service
              </Link>
              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                className={`md:hidden inline-flex items-center justify-center w-11 h-11 rounded-pill transition-colors ${
                  scrolled ? 'bg-surface text-textPrimary' : 'bg-background/15 text-background backdrop-blur-md'
                }`}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-surfaceDark"
            style={{
              backgroundImage:
                'radial-gradient(circle at 15% 20%, rgba(180,31,207,0.32) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(53,196,81,0.18) 0%, transparent 50%)',
            }}
          />
          <div className="relative h-full w-full flex flex-col">
            <div className="flex items-center justify-between h-16 px-5 border-b border-background/10">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-md bg-background p-1 h-9">
                  <img src="/logo.jpg" alt={company.name} className="h-7 w-auto" />
                </span>
                <span className="font-heading font-extrabold text-background uppercase text-lg">
                  Unique<span className="text-secondary">.</span>
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-11 h-11 rounded-pill bg-background/10 text-background"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-5">
              {navLinks.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-heading font-extrabold text-background text-3xl uppercase tracking-tight hover:text-secondary transition-colors"
                  style={{ animation: `springIn 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.05 * i + 0.1}s both` }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-8 border-t border-background/10 mt-4 flex flex-col gap-4">
                <Link
                  href={phoneHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 font-body font-semibold text-background/80"
                >
                  <Phone size={18} /> {company.phone}
                </Link>
                <Link
                  href="/contact/"
                  onClick={() => setOpen(false)}
                  className="btn-pill btn-pill-primary self-start"
                >
                  Book Service
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
