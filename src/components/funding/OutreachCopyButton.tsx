'use client';

import React, { useState } from 'react';

export default function OutreachCopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs font-mono px-3 py-1.5 rounded border border-[#263244] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#94A3B8]/50 transition-all"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}
