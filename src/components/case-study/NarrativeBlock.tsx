import React from 'react';

interface NarrativeBlockProps {
  children: React.ReactNode;
  variant?: 'default' | 'thesis' | 'warning';
  className?: string;
}

export default function NarrativeBlock({ children, variant = 'default', className = '' }: NarrativeBlockProps) {
  const variants = {
    default: 'border-l-2 border-[#263244] pl-6 py-2 text-[#94A3B8]',
    thesis: 'border-l-2 border-[#8B5CF6] pl-6 py-2 text-[#F8FAFC]/80',
    warning: 'border-l-2 border-[#FB7185] pl-6 py-2 text-[#94A3B8] bg-[#FB7185]/5 pr-4 rounded-r',
  };

  return (
    <div className={`${variants[variant]} leading-relaxed text-base ${className}`}>
      {children}
    </div>
  );
}
