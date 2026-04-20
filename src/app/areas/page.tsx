import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/sections/CTA';
import { areas, services, company } from '@/lib/data';
import { getAreaImage, fallbackGradient } from '@/lib/images';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: `Areas We Serve | ${company.name} ${company.city}, ${company.state}`,
  },
  description: `Full-service NADCA-certified air duct cleaning across ${company.city} and the greater ${company.state_full} area — Beverly Hills, Santa Monica, Pasadena, Long Beach, Burbank, Glendale, Hollywood, and Culver City.`,
  keywords: [
    `air duct cleaning ${company.city}`,
    `service areas ${company.state_full}`,
    'Beverly Hills duct cleaning',
    'Santa Monica duct cleaning',
    'Pasadena air duct cleaning',
    'Long Beach duct cleaning',
  ],
  alternates: { canonical: '/areas/' },
  openGraph: {
    title: `Service Areas | ${company.name}`,
    description: `NADCA-certified duct cleaning across ${company.city} and the greater ${company.state_full} area.`,
    url: '/areas/',
    type: 'website',
  },
};

export default function AreasIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Service Areas', url: '/areas/' },
        ]}
      />
      <PageHero
        label="Where We Work"
        section="03"
        title={
          <>
            Serving California,<br /><span className="text-secondary">neighborhood by neighborhood.</span>
          </>
        }
        subtitle="We live here too. Every area we serve gets a crew that knows its construction style, its climate, and its air."
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-surfaceDark overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 dot-pattern-dark opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {areas.map((a, i) => {
              const img = getAreaImage(a.slug);
              return (
                <Reveal key={a.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/areas/${a.slug}/`}
                    className="group relative block overflow-hidden rounded-bento aspect-[4/3] border border-background/10"
                  >
                    {img ? (
                      <Image
                        src={img}
                        alt={`${a.name}, California`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ backgroundImage: fallbackGradient(a.slug) }}
                      >
                        <span className="font-heading font-black text-background/15 text-[14vw] uppercase leading-none select-none">
                          {a.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-surfaceDark/85 via-surfaceDark/20 to-transparent"
                    />
                    <div className="absolute inset-x-5 bottom-5">
                      <h3 className="font-heading font-extrabold text-background text-2xl md:text-3xl uppercase tracking-tight2 leading-none">
                        {a.name}
                      </h3>
                      <div className="mt-2 text-secondary text-[12px] font-body font-semibold uppercase tracking-stamp">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mr-2 align-middle" />
                        {services.length} services · California
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
