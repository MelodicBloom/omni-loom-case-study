'use client';

import React, { useState } from 'react';

interface SpecSectionProps {
  id: string;
  label: string;
  title: string;
  description: string;
  language: string;
  filename: string;
  content: string;
}

export default function SpecSection({
  id,
  label,
  title,
  description,
  language,
  filename,
  content,
}: SpecSectionProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  function handleDownload() {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <section id={id} className="scroll-mt-8">
      <div className="mb-6">
        <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-2">{label}</p>
        <h2
          className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h2>
        <p className="text-[#94A3B8] max-w-2xl leading-relaxed">{description}</p>
      </div>
      <div className="rounded border border-[#263244] bg-[#0D111A] overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#263244] bg-[#111827]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#94A3B8]">{filename}</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#263244] text-[#94A3B8]">
              {language}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="text-xs font-mono px-3 py-1.5 rounded border border-[#263244] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#94A3B8]/50 transition-all"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              className="text-xs font-mono px-3 py-1.5 rounded border border-[#263244] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all"
            >
              ↓ Download
            </button>
          </div>
        </div>
        <pre className="p-5 overflow-x-auto text-xs font-mono text-[#94A3B8] leading-relaxed whitespace-pre">
          <code>{content}</code>
        </pre>
      </div>
    </section>
  );
}
