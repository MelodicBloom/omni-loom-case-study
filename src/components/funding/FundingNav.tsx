'use client';

import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'thesis', label: 'Funding Thesis' },
  { id: 'pilot', label: 'Pilot Proposal' },
  { id: 'licensing', label: 'Licensing Model' },
  { id: 'impact', label: 'Open-Source Impact' },
  { id: 'metrics', label: 'Adoption Metrics' },
  { id: 'partners', label: 'Partner Outreach' },
];

export default function FundingNav() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="sticky top-8 space-y-1">
      <p className="text-[10px] font-mono tracking-[0.2em] text-[#94A3B8] uppercase mb-4">Contents</p>
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`block text-xs font-mono py-1.5 px-3 rounded transition-all ${
            active === id
              ? 'text-[#22D3EE] bg-[#22D3EE]/10 border-l-2 border-[#22D3EE]'
              : 'text-[#94A3B8] hover:text-[#F8FAFC] border-l-2 border-transparent'
          }`}
        >
          {label}
        </a>
      ))}
      <div className="pt-6 space-y-2">
        <a href="/spec-pack" className="block text-xs font-mono text-[#94A3B8] hover:text-[#22D3EE] transition-colors">
          Spec Pack →
        </a>
        <a href="/case-studies/omni-loom" className="block text-xs font-mono text-[#94A3B8] hover:text-[#22D3EE] transition-colors">
          ← Case Study
        </a>
      </div>
    </nav>
  );
}
