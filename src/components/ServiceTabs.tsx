'use client';

import { useState } from 'react';
import type { Service } from '@/lib/data';

const TABS = ['Overview', "What's Included", 'Our Process'] as const;

export default function ServiceTabs({ service }: { service: Service }) {
  const [active, setActive] = useState<number>(0);

  return (
    <div>
      <div className="relative flex gap-8 border-b border-border overflow-x-auto no-scrollbar">
        {TABS.map((label, i) => {
          const isActive = active === i;
          return (
            <button
              key={label}
              onClick={() => setActive(i)}
              className={`relative pb-4 shrink-0 font-heading font-extrabold uppercase tracking-stamp text-[13px] md:text-[15px] transition-colors ${
                isActive ? 'text-primaryDark' : 'text-textLight hover:text-primaryDark'
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {label}
              <span
                className={`absolute left-0 right-0 -bottom-px h-[3px] rounded-full bg-secondary transition-transform duration-500 origin-left ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="mt-8 min-h-[300px]">
        {active === 0 && (
          <div className="space-y-5 animate-[springIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            {service.full_description.map((p, i) => (
              <p key={i} className="text-textSecondary text-[16px] md:text-[17px] leading-relaxed">{p}</p>
            ))}
          </div>
        )}
        {active === 1 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-[springIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-card bg-surface">
                <span className="w-6 h-6 rounded-full bg-primary text-background flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-textPrimary text-[15px] font-body font-semibold">{f}</span>
              </li>
            ))}
          </ul>
        )}
        {active === 2 && (
          <ol className="space-y-5 animate-[springIn_0.6s_cubic-bezier(0.34,1.56,0.64,1)_both]">
            {['Pre-Inspection', 'Preparation & Containment', 'Cleaning', 'Verification & Walkthrough'].map(
              (stage, i) => (
                <li key={stage} className="flex items-start gap-5 p-5 rounded-card bg-surface border border-border">
                  <span className="font-heading font-black text-primary text-3xl md:text-4xl leading-none w-14 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-extrabold text-textPrimary text-xl">{stage}</h3>
                    <p className="mt-2 text-textSecondary text-[15px] leading-relaxed">
                      {i === 0 &&
                        'Duct camera inspection with tablet viewing so you see exactly what we see before any work begins.'}
                      {i === 1 &&
                        'Floor protection, HEPA negative-air containment, and isolation of your HVAC trunk lines.'}
                      {i === 2 &&
                        'Hand-scrubbed coil, plenum, and blower; rotary brushes and compressed-air skipper balls through every duct branch.'}
                      {i === 3 &&
                        'Post-cleaning camera inspection, photo gallery delivered to your phone, and written workmanship guarantee.'}
                    </p>
                  </div>
                </li>
              )
            )}
          </ol>
        )}
      </div>
    </div>
  );
}
