import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { content, company, phoneHref, services } from '@/lib/data';
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from '@/components/JsonLd';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: `Contact ${company.name} | Free Estimates ${company.city}, ${company.state}`,
  },
  description: `Request a free air duct cleaning estimate anywhere in ${company.city} and ${company.state_full}. Same-day responses during business hours, 24/7 emergency remediation. Call ${company.phone}.`,
  keywords: [
    `contact ${company.name}`,
    `free air duct cleaning estimate ${company.city}`,
    `duct cleaning quote ${company.state_full}`,
    'emergency HVAC remediation',
    `${company.city} HVAC contact`,
  ],
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: `Contact ${company.name} | Free Estimates`,
    description: `Request a free air duct cleaning estimate across ${company.city} and ${company.state_full}.`,
    url: '/contact/',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact/' },
        ]}
      />
      <PageHero
        label="Talk to a Tech"
        section="01"
        title={content.contact.headline}
        subtitle={content.contact.subtitle}
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <Reveal>
              <SectionLabel number="02" text="Free Estimate Request" />
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-3xl md:text-4xl leading-tight">
                Tell us what you need — we'll take it from there.
              </h2>
            </Reveal>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              action="/thank-you/"
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label className="flex flex-col gap-2 text-[13px] font-body font-semibold uppercase tracking-stamp text-textLight">
                Your Name
                <input
                  type="text"
                  name="name"
                  required
                  className="h-12 px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:outline-none text-textPrimary text-[15px] font-body font-normal normal-case tracking-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-body font-semibold uppercase tracking-stamp text-textLight">
                Email Address
                <input
                  type="email"
                  name="email"
                  required
                  className="h-12 px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:outline-none text-textPrimary text-[15px] font-body font-normal normal-case tracking-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-body font-semibold uppercase tracking-stamp text-textLight">
                Phone
                <input
                  type="tel"
                  name="phone"
                  className="h-12 px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:outline-none text-textPrimary text-[15px] font-body font-normal normal-case tracking-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-[13px] font-body font-semibold uppercase tracking-stamp text-textLight">
                Service Interested In
                <select
                  name="service"
                  className="h-12 px-4 rounded-[8px] bg-background border border-border focus:border-primary focus:outline-none text-textPrimary text-[15px] font-body font-normal normal-case tracking-normal"
                >
                  <option>Not sure yet</option>
                  {services.map(s => (
                    <option key={s.slug}>{s.name}</option>
                  ))}
                </select>
              </label>
              <label className="md:col-span-2 flex flex-col gap-2 text-[13px] font-body font-semibold uppercase tracking-stamp text-textLight">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="px-4 py-3 rounded-[8px] bg-background border border-border focus:border-primary focus:outline-none text-textPrimary text-[15px] font-body font-normal normal-case tracking-normal resize-y"
                />
              </label>
              <div className="md:col-span-2">
                <button type="submit" className="btn-pill btn-pill-primary">
                  Send My Request
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="relative p-8 bg-surfaceDark text-background rounded-bento overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(180,31,207,0.5), transparent 60%)',
                  }}
                />
                <p className="section-label section-label-light">Reach Us Directly</p>
                <ul className="mt-6 space-y-5">
                  <li className="flex items-start gap-4">
                    <Phone size={20} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <div className="text-[12px] font-body font-semibold uppercase tracking-stamp text-background/60">Phone</div>
                      <Link href={phoneHref} className="text-background font-body font-bold text-lg hover:text-secondary">
                        {company.phone}
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail size={20} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <div className="text-[12px] font-body font-semibold uppercase tracking-stamp text-background/60">Email</div>
                      <Link href={`mailto:${company.email}`} className="text-background font-body font-bold hover:text-secondary break-all">
                        {company.email}
                      </Link>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin size={20} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <div className="text-[12px] font-body font-semibold uppercase tracking-stamp text-background/60">Office</div>
                      <div className="text-background/90">{content.contact.address}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock size={20} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <div className="text-[12px] font-body font-semibold uppercase tracking-stamp text-background/60">Hours</div>
                      <div className="text-background/90 text-[14px]">{content.contact.hours}</div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="p-8 bg-surface rounded-bento border border-border">
                <p className="section-label">Honest Promise</p>
                <p className="mt-4 text-textSecondary text-[15px] leading-relaxed">
                  A real, NADCA-certified technician will return your request — not a call center. We'll tell you
                  honestly whether your system needs service or just a filter change.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
