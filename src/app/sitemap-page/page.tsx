import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { services, areas, blog, company } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: `Sitemap | ${company.name}`,
  },
  description: `Every page on the ${company.name} site — services, service areas, blog articles, and more — organized for quick navigation.`,
  alternates: { canonical: '/sitemap-page/' },
  openGraph: {
    title: `Sitemap | ${company.name}`,
    description: `Every page on the ${company.name} site, organized for quick navigation.`,
    url: '/sitemap-page/',
    type: 'website',
  },
};

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <p className="section-label">{title}</p>
      <ul className="mt-5 space-y-2.5">
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className="text-textSecondary hover:text-primary transition-colors text-[15px]">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SitemapPage() {
  const mainLinks = [
    { href: '/', label: 'Home' },
    { href: '/about/', label: 'About' },
    { href: '/services/', label: 'All Services' },
    { href: '/areas/', label: 'Service Areas' },
    { href: '/blog/', label: 'Blog' },
    { href: '/testimonials/', label: 'Testimonials' },
    { href: '/contact/', label: 'Contact' },
    { href: '/privacy-policy/', label: 'Privacy Policy' },
  ];
  const serviceLinks = services.map(s => ({ href: `/services/${s.slug}/`, label: s.name }));
  const areaLinks = areas.map(a => ({ href: `/areas/${a.slug}/`, label: a.name }));
  const blogLinks = blog.map(b => ({ href: `/blog/${b.slug}/`, label: b.title }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Sitemap', url: '/sitemap-page/' },
        ]}
      />
      <PageHero
        label="Site Index"
        section="07"
        title="Sitemap"
        subtitle="Every corner of the Unique Air Duct site, one click away."
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <Reveal><Column title="Main Pages" links={mainLinks} /></Reveal>
          <Reveal delay={60}><Column title="Services" links={serviceLinks} /></Reveal>
          <Reveal delay={120}><Column title="Service Areas" links={areaLinks} /></Reveal>
          <Reveal delay={180}><Column title="Blog" links={blogLinks} /></Reveal>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16">
          <Reveal>
            <h2 className="font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">
              Area + Service Coverage
            </h2>
            <p className="mt-2 text-textSecondary text-[14px]">
              Every service we offer × every area we serve = a dedicated local page.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map(a => (
              <div key={a.slug}>
                <div className="font-heading font-extrabold text-primaryDark uppercase tracking-stamp text-[13px] mb-3">
                  {a.name}
                </div>
                <ul className="space-y-1.5">
                  {services.map(s => (
                    <li key={s.slug}>
                      <Link
                        href={`/areas/${a.slug}/${s.slug}/`}
                        className="text-textSecondary hover:text-primary transition-colors text-[13px]"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
