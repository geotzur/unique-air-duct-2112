import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CTA from '@/components/sections/CTA';
import { blog, company } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: `Blog | ${company.name} — Air Quality Insights for ${company.state_full}`,
  },
  description: `Guides, safety tips, and seasonal advice on indoor air quality from the NADCA-certified team at ${company.name}. Written for ${company.city} homeowners and property managers.`,
  keywords: [
    'air duct cleaning blog',
    'indoor air quality tips',
    'Florida HVAC advice',
    'dryer vent safety',
    'hurricane air quality',
    'mold in ducts',
  ],
  alternates: { canonical: '/blog/' },
  openGraph: {
    title: `Blog | ${company.name}`,
    description: `Indoor air quality guides and HVAC tips for ${company.city} homeowners.`,
    url: '/blog/',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog/' },
        ]}
      />
      <PageHero
        label="Field Notes"
        section="04"
        title={
          <>
            Honest guides from <br /><span className="text-secondary">the field.</span>
          </>
        }
        subtitle="What our technicians learn on Miami-Dade homes every week, written plainly for homeowners and property managers."
      />

      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8 space-y-6 md:space-y-8">
          {blog.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                href={`/blog/${post.slug}/`}
                className="group relative block bg-surface rounded-bento border border-border overflow-hidden hover:shadow-glow transition-all duration-500"
              >
                <span className="sweep-border" aria-hidden="true" />
                <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  <div className="shrink-0">
                    <div className="font-heading font-black text-primary text-5xl md:text-6xl leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-3 inline-flex px-3 py-1 rounded-pill bg-primaryLight text-primaryDark text-[11px] font-body font-semibold uppercase tracking-stamp">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading font-extrabold text-textPrimary text-xl md:text-3xl leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-textSecondary text-[15px] md:text-[16px] leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={28}
                    className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
