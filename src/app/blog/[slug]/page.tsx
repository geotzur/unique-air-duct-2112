import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/sections/CTA';
import { blog, services, company } from '@/lib/data';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return blog.map(b => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = blog.find(x => x.slug === params.slug);
  if (!b) return {};
  const title = `${b.title} | ${company.name} Blog`;
  return {
    title: { absolute: title },
    description: b.excerpt,
    keywords: [
      b.category,
      'air duct cleaning',
      `${company.city} air quality`,
      'indoor air quality',
      'HVAC tips',
    ],
    alternates: { canonical: `/blog/${b.slug}/` },
    openGraph: {
      title,
      description: b.excerpt,
      url: `/blog/${b.slug}/`,
      type: 'article',
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const b = blog.find(x => x.slug === params.slug);
  if (!b) return notFound();
  const idx = blog.findIndex(x => x.slug === b.slug);
  const next = blog[(idx + 1) % blog.length];

  return (
    <>
      <ArticleJsonLd
        headline={b.title}
        description={b.excerpt}
        slug={b.slug}
        category={b.category}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog/' },
          { name: b.title, url: `/blog/${b.slug}/` },
        ]}
      />
      <PageHero
        label={b.category}
        section="BL"
        title={b.title}
        subtitle={b.excerpt}
      >
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 text-background/80 hover:text-secondary text-[14px] font-body font-semibold"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>
      </PageHero>

      <article className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8 space-y-6">
          {b.content.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-textSecondary text-[17px] md:text-[19px] leading-[1.75]">
                {p}
              </p>
            </Reveal>
          ))}

          <Reveal delay={300}>
            <div className="mt-12 p-7 md:p-9 rounded-bento bg-surface border border-border">
              <p className="section-label">Related Services</p>
              <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
                {services.slice(0, 4).map(s => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="group flex items-center justify-between gap-3 py-2 text-textPrimary hover:text-primary transition-colors"
                    >
                      <span className="font-body font-semibold">{s.name}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </article>

      {next && (
        <section className="relative py-14 bg-surface border-t border-border">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between gap-5 flex-wrap">
            <span className="text-[12px] font-body font-semibold uppercase tracking-stamp text-textLight">Read next</span>
            <Link
              href={`/blog/${next.slug}/`}
              className="group font-heading font-extrabold text-textPrimary text-xl md:text-2xl hover:text-primary transition-colors"
            >
              {next.title}
              <ArrowUpRight size={20} className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
