import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/sections/CTA';
import { testimonials, company } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: `Customer Reviews | ${company.name} ${company.city}, ${company.state}`,
  },
  description: `Real reviews from ${company.state_full} homeowners and property managers. Nearly 60% of our work comes from word of mouth — these are some of the stories behind that.`,
  keywords: [
    `${company.name} reviews`,
    `air duct cleaning reviews ${company.city}`,
    `customer testimonials ${company.state_full}`,
    'NADCA certified reviews',
  ],
  alternates: { canonical: '/testimonials/' },
  openGraph: {
    title: `Customer Reviews | ${company.name}`,
    description: `Real reviews from ${company.state_full} homeowners and property managers.`,
    url: '/testimonials/',
    type: 'website',
  },
};

export default function TestimonialsPage() {
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: testimonials.length,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map(t => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
      },
      author: { '@type': 'Person', name: t.author },
      reviewBody: t.text,
    })),
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Testimonials', url: '/testimonials/' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <PageHero
        label="Word of Mouth"
        section="05"
        title={
          <>
            Real homes. <br />
            <span className="text-secondary">Real reviews.</span>
          </>
        }
        subtitle="Nearly 60% of our work comes from neighbor-to-neighbor referrals. These are some of the stories behind that number."
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-surface overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 stripe-pattern opacity-100" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className={`relative p-7 md:p-10 rounded-bubble ${
                  i % 3 === 1
                    ? 'bg-cta-gradient text-background'
                    : 'bg-background text-textPrimary border border-border'
                }`}
                style={{ transform: `rotate(${i % 2 === 0 ? -0.5 : 0.5}deg)` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className={`text-[17px] md:text-[19px] leading-relaxed ${i % 3 === 1 ? 'text-background/95' : 'text-textPrimary'}`}>
                  "{t.text}"
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className={`font-body font-bold ${i % 3 === 1 ? 'text-secondary' : 'text-primaryDark'}`}>
                      {t.author}
                    </div>
                    <div className={`text-[13px] ${i % 3 === 1 ? 'text-background/70' : 'text-textLight'}`}>
                      {t.location}
                    </div>
                  </div>
                  <span
                    className={`inline-flex px-3 py-1.5 rounded-pill text-[11px] font-body font-semibold uppercase tracking-stamp ${
                      i % 3 === 1 ? 'bg-background/15 text-background' : 'bg-surface text-primaryDark'
                    }`}
                  >
                    {t.service}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
