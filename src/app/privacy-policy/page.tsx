import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { content, company } from '@/lib/data';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: {
    absolute: `Privacy Policy | ${company.name}`,
  },
  description: `How ${company.name} collects, uses, and protects the information submitted through our site and contact forms.`,
  alternates: { canonical: '/privacy-policy/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacy Policy | ${company.name}`,
    description: `How ${company.name} collects, uses, and protects your information.`,
    url: '/privacy-policy/',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy/' },
        ]}
      />
      <PageHero
        label="Legal"
        section="06"
        title="Privacy Policy"
        subtitle="A clear summary of how we handle information you share with us through this site and our forms."
      />
      <section className="relative py-12 md:py-20 lg:py-28 bg-background">
        <div className="relative max-w-3xl mx-auto px-4 md:px-6 prose prose-lg prose-headings:font-heading prose-headings:text-textPrimary prose-p:text-textSecondary prose-li:text-textSecondary">
          <Reveal>
            <h2 className="font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">Who We Are</h2>
            <p className="mt-4 text-textSecondary text-[16px] leading-relaxed">
              This site is operated by {content.privacy.business_name}. Questions about this policy may be sent to
              <a href={`mailto:${content.privacy.email}`} className="text-primary font-semibold"> {content.privacy.email}</a>.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-10 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">Information We Collect</h2>
            <p className="mt-4 text-textSecondary text-[16px] leading-relaxed">{content.privacy.data_collected}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-10 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">How We Use It</h2>
            <p className="mt-4 text-textSecondary text-[16px] leading-relaxed">
              We use information you provide solely to respond to service requests, schedule appointments, send
              estimates, and follow up on completed work. We never sell, rent, or trade your personal information.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="mt-10 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">Third Parties</h2>
            <p className="mt-4 text-textSecondary text-[16px] leading-relaxed">{content.privacy.third_party}</p>
          </Reveal>
          <Reveal delay={240}>
            <h2 className="mt-10 font-heading font-extrabold text-textPrimary text-2xl md:text-3xl">Your Rights</h2>
            <p className="mt-4 text-textSecondary text-[16px] leading-relaxed">
              California residents may request a summary of information we hold, deletion of that information, or
              opt-out of marketing communications at any time by emailing us. We respond within 30 days.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
