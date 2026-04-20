import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { company, navLinks, services, areas, phoneHref, content } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative bg-surfaceDark text-background overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 dot-pattern-dark opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(180,31,207,0.22) 0%, transparent 60%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center rounded-md bg-background p-1.5 shadow-whisper">
                <img src="/logo.jpg" alt={company.name} className="h-8 md:h-10 w-auto" />
              </span>
              <span className="font-heading font-extrabold text-xl uppercase tracking-tight2">
                {company.name}<span className="text-secondary">.</span>
              </span>
            </div>
            <p className="mt-3 font-heading italic font-bold text-secondary text-[17px]">
              New Air Quality.
            </p>
            <p className="mt-5 text-background/70 text-[15px] leading-relaxed">
              {content.footer.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {company.certifications.map(c => (
                <span
                  key={c}
                  className="inline-flex items-center text-[11px] font-body font-semibold uppercase tracking-wider px-3 py-1.5 rounded-pill bg-background/8 border border-background/14 text-background/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="section-label section-label-light">Services</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map(s => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-background/70 hover:text-secondary text-[15px] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-secondary text-[15px] font-semibold">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label section-label-light">Areas We Serve</p>
            <ul className="mt-5 space-y-3">
              {areas.slice(0, 6).map(a => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}/`}
                    className="text-background/70 hover:text-secondary text-[15px] transition-colors"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas/" className="text-secondary text-[15px] font-semibold">
                  All service areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="section-label section-label-light">Reach Us</p>
            <ul className="mt-5 space-y-4 text-[15px] text-background/80">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
                <span>{content.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary mt-0.5 shrink-0" />
                <Link href={phoneHref} className="hover:text-secondary">
                  {company.phone}
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
                <Link href={`mailto:${company.email}`} className="hover:text-secondary">
                  {company.email}
                </Link>
              </li>
              <li className="pt-2 text-[13px] text-background/60">{content.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[13px] text-textLight">
          <span>© 2026 {company.name} · Licensed · Insured · {company.state_full}</span>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy/" className="hover:text-secondary">Privacy Policy</Link>
            <Link href="/sitemap-page/" className="hover:text-secondary">Sitemap</Link>
            <Link href="/testimonials/" className="hover:text-secondary">Reviews</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
