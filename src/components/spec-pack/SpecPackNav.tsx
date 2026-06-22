'use client';

import React, { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'schema-reference', label: '01 Schema Reference' },
  { id: 'toolplan-contract', label: '02 ToolPlan Contract' },
  { id: 'qa-gate-checklist', label: '03 QA Gate Checklist' },
  { id: 'job-envelope-spec', label: '04 JobEnvelope Spec' },
  { id: 'implementation-prompts', label: '05 Implementation Prompts' },
  { id: 'cmyo-color-model', label: '06 CMYO Color Model' },
];

export default function SpecPackNav() {
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
      <div className="pt-6">
        <a
          href="/case-studies/omni-loom"
          className="text-xs font-mono text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
        >
          ← Back to case study
        </a>
      </div>
    </nav>
  );
}
