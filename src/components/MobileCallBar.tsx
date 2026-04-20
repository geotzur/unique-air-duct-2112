import Link from 'next/link';
import { Phone } from 'lucide-react';
import { company, phoneHref } from '@/lib/data';

export default function MobileCallBar() {
  return (
    <Link
      href={phoneHref}
      className="md:hidden fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 h-12 px-5 rounded-pill bg-secondary text-surfaceDark font-body font-bold text-[15px] shadow-pillGreen"
      aria-label={`Call ${company.phone}`}
    >
      <Phone size={18} />
      <span>Call Now</span>
    </Link>
  );
}
