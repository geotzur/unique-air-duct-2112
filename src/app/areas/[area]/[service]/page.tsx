import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { areas, services, company, phoneHref, content } from '@/lib/data';
import { getAreaImage, getServiceIcon, fallbackGradient } from '@/lib/images';
import Reveal from '@/components/Reveal';
import PillButton from '@/components/PillButton';
import Swoosh from '@/components/Swoosh';
import {
  ServiceJsonLd,
  BreadcrumbJsonLd,
} from '@/components/JsonLd';
import { Phone, MapPin, CheckCircle2, Star } from 'lucide-react';

export function generateStaticParams() {
  const params: { area: string; service: string }[] = [];
  for (const a of areas) for (const s of services) params.push({ area: a.slug, service: s.slug });
  return params;
}

export function generateMetadata({
  params,
}: {
  params: { area: string; service: string };
}): Metadata {
  const a = areas.find(x => x.slug === params.area);
  const s = services.find(x => x.slug === params.service);
  if (!a || !s) return {};
  const title = `${s.name} in ${a.name}, ${company.city}, ${company.state} | ${company.name}`;
  const description = `${s.short_description} Serving ${a.name}, ${company.city} with NADCA-certified technicians since ${company.year_established}. Free estimates and photographed proof.`;
  return {
    title: { absolute: title },
    description,
    keywords: [
      `${s.name} ${a.name}`,
      `${s.name} ${a.name} ${company.state}`,
      `${s.name} ${company.state_full}`,
      `${a.name} duct cleaning`,
      `${a.name} ${s.name.toLowerCase()}`,
      'NADCA certified',
      `${s.name.toLowerCase()} near me`,
    ],
    alternates: { canonical: `/areas/${a.slug}/${s.slug}/` },
    openGraph: {
      title,
      description,
      url: `/areas/${a.slug}/${s.slug}/`,
      type: 'website',
    },
  };
}

export default function AreaServicePage({
  params,
}: {
  params: { area: string; service: string };
}) {
  const a = areas.find(x => x.slug === params.area);
  const s = services.find(x => x.slug === params.service);
  if (!a || !s) return notFound();
  const icon = getServiceIcon(s.slug);
  const areaImg = getAreaImage(a.slug);

  return (
    <>
      <ServiceJsonLd
        name={s.name}
        description={`${s.short_description} Serving ${a.name}, ${company.state_full}.`}
        slug={s.slug}
        areaName={a.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/areas/' },
          { name: a.name, url: `/areas/${a.slug}/` },
          { name: s.name, url: `/areas/${a.slug}/${s.slug}/` },
        ]}
      />
      {/* Hero — two-color-two-line */}
      <section className="relative overflow-hidden pt-36 md:pt-44 pb-16 md:pb-20 bg-background">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <Swoosh variant={1} opacity={0.1} className="-left-20 top-20 w-[800px]" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="section-label">California · Local Service</p>
            <h1
              className="mt-5 font-heading font-black uppercase leading-[0.95] tracking-tight2"
              style={{ fontSize: 'clamp(40px,5vw,72px)' }}
            >
              <span className="block text-textPrimary">{s.name}</span>
              <span className="block text-primary">in {a.name}</span>
            </h1>
            <p className="mt-6 max-w-xl text-textSecondary text-[16px] md:text-[18px] leading-relaxed">
              {s.short_description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/contact/" variant="primary">Book in {a.name}</PillButton>
              <PillButton href={phoneHref} variant="ghost-dark"><Phone size={16} /> {company.phone}</PillButton>
            </div>
          </div>
          {areaImg && (
            <div className="lg:col-span-2 relative aspect-[4/5] rounded-bento overflow-hidden shadow-deep border-4 border-background/70">
              <Image
                src={areaImg}
                alt={`${a.name}, California`}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              {icon && (
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-primaryLight border-4 border-background shadow-glow flex items-center justify-center">
                  <img
                    src={icon}
                    alt=""
                    width={40}
                    height={40}
                    style={{ filter: 'brightness(0) saturate(100%) invert(16%) sepia(87%) saturate(4050%) hue-rotate(282deg) brightness(82%) contrast(101%)' }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Why [Area] Trusts Unique Air Duct — gradient-anchor-bubble + local-stat-strip */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern opacity-70" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="section-label">Why {a.name} Trusts Us</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-heading font-extrabold text-textPrimary text-3xl md:text-5xl leading-tight max-w-3xl">
              Since 2011, clean air to every block of {a.name}.
            </h2>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <Reveal delay={120}>
                <div className="relative p-8 md:p-10 rounded-bubble bg-cta-gradient text-background shadow-glow">
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-10 w-5 h-5 rotate-45 bg-surfaceDark"
                  />
                  <div className="flex items-center gap-3 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={18} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-background/95 text-[17px] md:text-[20px] leading-relaxed">
                    "
                    {content.testimonials.find(t => t.location.toLowerCase().includes(a.name.toLowerCase()))?.text ||
                      `The team treated our ${a.name} home like it was theirs — camera in, debris out, proof on our phone before they left.`}
                    "
                  </p>
                  <div className="mt-6">
                    <div className="font-body font-bold text-secondary">
                      {content.testimonials.find(t => t.location.toLowerCase().includes(a.name.toLowerCase()))?.author ||
                        `A ${a.name} neighbor`}
                    </div>
                    <div className="text-background/70 text-[13px]">{a.name} resident</div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-2 space-y-5">
              {[
                { n: 'Since 2011', l: `Serving ${a.name}` },
                { n: '120+', l: `Homes cleaned in ${a.name}` },
                { n: '2.4 hr', l: 'Average response time' },
              ].map((stat, i) => (
                <Reveal key={stat.l} delay={180 + i * 60}>
                  <div className="p-6 md:p-7 rounded-bento bg-background border border-border">
                    <div className="font-heading font-black text-primary text-4xl md:text-5xl leading-none">
                      {stat.n}
                    </div>
                    <div className="mt-3 text-[12px] font-body font-semibold uppercase tracking-stamp text-textLight">
                      {stat.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Dot-skyline decorative strip */}
        <div
          aria-hidden="true"
          className="mt-14 h-20 w-full"
          style={{
            background:
              'radial-gradient(circle at 5% 80%, rgba(180,31,207,0.16) 6px, transparent 7px), radial-gradient(circle at 15% 60%, rgba(180,31,207,0.16) 10px, transparent 11px), radial-gradient(circle at 25% 75%, rgba(180,31,207,0.16) 14px, transparent 15px), radial-gradient(circle at 40% 55%, rgba(180,31,207,0.16) 10px, transparent 11px), radial-gradient(circle at 55% 80%, rgba(180,31,207,0.16) 18px, transparent 19px), radial-gradient(circle at 72% 62%, rgba(180,31,207,0.16) 12px, transparent 13px), radial-gradient(circle at 88% 78%, rgba(180,31,207,0.16) 8px, transparent 9px)',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </section>

      {/* Service overview content */}
      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
          <Reveal>
            <p className="section-label">About {s.name}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-4 font-heading font-extrabold text-textPrimary text-3xl md:text-4xl leading-tight">
              What {s.name.toLowerCase()} looks like in {a.name}.
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5">
            {s.full_description.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p className="text-textSecondary text-[16px] md:text-[17px] leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 p-7 md:p-9 rounded-bento bg-surface border border-border">
              <h3 className="font-heading font-extrabold text-textPrimary text-xl md:text-2xl">Included on every {a.name} visit</h3>
              <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-textPrimary text-[14px] font-body font-semibold">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visit / Reach Us block */}
      <section className="relative py-10 md:py-16 lg:py-20 bg-surface">
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="section-label">Reach Us from {a.name}</p>
            <h3 className="mt-4 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl leading-tight">
              Booking in {a.name} takes two minutes.
            </h3>
            <ul className="mt-6 space-y-3 text-textSecondary text-[15px]">
              <li className="flex gap-3 items-start"><MapPin size={18} className="text-primary shrink-0 mt-0.5" /> {content.contact.address}</li>
              <li className="flex gap-3 items-start"><Phone size={18} className="text-primary shrink-0 mt-0.5" /> {company.phone}</li>
              <li className="flex gap-3 items-start"><span className="w-4 h-4 mt-0.5 inline-block rounded-full bg-secondary" /> Service area: {a.name} & all of {company.state_full}</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillButton href="/contact/" variant="primary">Book {s.name}</PillButton>
              <Link href={`/areas/${a.slug}/`} className="btn-pill btn-pill-ghost-dark">
                More services in {a.name}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-bento overflow-hidden bg-cta-gradient flex items-center justify-center">
            <Swoosh variant={2} opacity={0.14} className="-left-10 top-10 w-[500px]" />
            <div className="relative text-center text-background px-6">
              <MapPin size={36} className="text-secondary mx-auto" />
              <div className="mt-4 font-heading font-black uppercase text-3xl md:text-4xl">{a.name}</div>
              <div className="mt-2 text-secondary text-[13px] font-body font-semibold uppercase tracking-stamp">{s.name}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
