import React from 'react';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  id?: string;
}

export default function SectionHeading({ label, title, description, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10">
      {label && <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">{label}</p>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] mb-4" style={{ fontFamily: "'Space Grotesk', 'Inter Tight', sans-serif" }}>{title}</h2>
      {description && <p className="text-[#94A3B8] max-w-xl leading-relaxed">{description}</p>}
    </div>
  );
}
