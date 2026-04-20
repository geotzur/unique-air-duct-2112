import Swoosh from '@/components/Swoosh';
import SectionLabel from '@/components/SectionLabel';

type Props = {
  label?: string;
  section?: string;
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
};

export default function PageHero({ label, section = '00', title, subtitle, children }: Props) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-hero-gradient">
      <Swoosh variant={1} opacity={0.13} className="-left-40 top-10 w-[900px] animate-driftSwoosh" />
      <Swoosh variant={3} opacity={0.1} className="-right-10 bottom-0 w-[700px] animate-driftSwoosh" style={{ animationDelay: '-6s' }} />
      <div className="noise" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {label && <SectionLabel number={section} text={label} light />}
        <h1 className="mt-5 font-heading font-black uppercase text-background text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight2 max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-background/85 text-[16px] md:text-[19px] leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
