import React from 'react';

interface FundingSectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

export default function FundingSection({ id, label, title, children }: FundingSectionProps) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-8">
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-2">{label}</p>
        <h2
          className="text-2xl md:text-3xl font-bold text-[#F8FAFC]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
