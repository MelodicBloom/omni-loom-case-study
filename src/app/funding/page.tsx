import React from 'react';
import {
  FUNDING_THESIS,
  PILOT_PROPOSAL,
  LICENSING_MODEL,
  OPEN_SOURCE_IMPACT,
  ADOPTION_METRICS,
  PARTNER_OUTREACH,
} from '@/lib/fundingContent';
import FundingNav from '@/components/funding/FundingNav';
import FundingSection from '@/components/funding/FundingSection';
import OutreachCopyButton from '@/components/funding/OutreachCopyButton';

export const metadata = {
  title: 'Omni-Loom Funding Package — Open-Source Pilot, Licensing & Impact',
  description:
    'Grant summary, pilot proposal, partner outreach, licensing model, and open-source adoption metrics for the Omni-Loom deterministic generative compiler.',
};

export default function FundingPage() {
  return (
    <div className="min-h-screen bg-[#080A0F] text-[#F8FAFC]" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* Header */}
      <header className="border-b border-[#263244] px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-3">
            <a href="/case-studies/omni-loom" className="hover:text-[#22D3EE]/80 transition-colors">← Omni-Loom</a>
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Funding Package
          </h1>
          <p className="text-[#94A3B8] max-w-2xl leading-relaxed">
            Grant summary, open-source pilot proposal, licensing model, partner outreach, and adoption metrics
            for the Omni-Loom deterministic generative compiler.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="/spec-pack" className="text-xs font-mono px-4 py-2 rounded border border-[#22D3EE]/30 text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-colors">
              Spec Pack →
            </a>
            <a href="/case-studies/omni-loom" className="text-xs font-mono px-4 py-2 rounded border border-[#263244] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#94A3B8]/40 transition-colors">
              Case Study →
            </a>
            <a href="/case-studies/omni-loom#demo" className="text-xs font-mono px-4 py-2 rounded border border-[#263244] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#94A3B8]/40 transition-colors">
              Live Demo →
            </a>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto flex gap-0 md:gap-10 px-6 py-12">

        <aside className="hidden md:block w-52 shrink-0">
          <FundingNav />
        </aside>

        <main className="flex-1 space-y-20 min-w-0">

          {/* 1. Thesis */}
          <FundingSection id="thesis" label={FUNDING_THESIS.label} title={FUNDING_THESIS.headline}>
            {FUNDING_THESIS.body.map((p, i) => (
              <p key={i} className="text-[#94A3B8] leading-relaxed">{p}</p>
            ))}
          </FundingSection>

          {/* 2. Pilot */}
          <FundingSection id="pilot" label={PILOT_PROPOSAL.label} title={PILOT_PROPOSAL.headline}>
            <div className="mb-6 p-5 rounded border border-[#22D3EE]/20 bg-[#22D3EE]/5">
              <p className="text-sm text-[#A5F3FC] leading-relaxed italic">{PILOT_PROPOSAL.summary}</p>
            </div>
            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Core Question</p>
            <p className="text-[#F8FAFC] font-medium mb-8 leading-relaxed">"{PILOT_PROPOSAL.question}"</p>

            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Deliverables</p>
            <div className="space-y-3 mb-10">
              {PILOT_PROPOSAL.deliverables.map((d) => (
                <div key={d.item} className="p-4 rounded border border-[#263244] bg-[#111827]">
                  <p className="text-sm font-bold text-[#22D3EE] mb-1">{d.item}</p>
                  <p className="text-sm text-[#94A3B8]">{d.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">12-Week Timeline</p>
            <div className="space-y-3 mb-10">
              {PILOT_PROPOSAL.timeline.map((t) => (
                <div key={t.weeks} className="flex gap-4 p-4 rounded border border-[#263244] bg-[#111827]">
                  <div className="shrink-0 w-28">
                    <p className="text-xs font-mono text-[#22D3EE]">{t.weeks}</p>
                    <p className="text-xs font-bold text-[#F8FAFC] mt-0.5">{t.label}</p>
                  </div>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Success Criteria</p>
            <ul className="space-y-2">
              {PILOT_PROPOSAL.successCriteria.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-[#94A3B8]">
                  <span className="text-[#34D399] shrink-0">✓</span>
                  {c}
                </li>
              ))}
            </ul>
          </FundingSection>

          {/* 3. Licensing */}
          <FundingSection id="licensing" label={LICENSING_MODEL.label} title={LICENSING_MODEL.headline}>
            <div className="p-5 rounded border border-[#263244] bg-[#111827] mb-6">
              <p className="text-sm text-[#94A3B8] leading-relaxed">{LICENSING_MODEL.statement}</p>
            </div>
            <div className="space-y-2 mb-8">
              {LICENSING_MODEL.model.map((row) => (
                <div key={row.layer} className="grid grid-cols-3 gap-4 p-4 rounded border border-[#263244] bg-[#0D111A] text-sm">
                  <p className="font-bold text-[#F8FAFC]">{row.layer}</p>
                  <p className="font-mono text-[#22D3EE]">{row.license}</p>
                  <p className="text-[#94A3B8]">{row.rationale}</p>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Principles</p>
            <ul className="space-y-2">
              {LICENSING_MODEL.principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-[#94A3B8]">
                  <span className="text-[#22D3EE] shrink-0">—</span>
                  {p}
                </li>
              ))}
            </ul>
          </FundingSection>

          {/* 4. Impact */}
          <FundingSection id="impact" label={OPEN_SOURCE_IMPACT.label} title={OPEN_SOURCE_IMPACT.headline}>
            {OPEN_SOURCE_IMPACT.body.map((p, i) => (
              <p key={i} className="text-[#94A3B8] leading-relaxed">{p}</p>
            ))}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {OPEN_SOURCE_IMPACT.layers.map((l) => (
                <div key={l.title} className="p-5 rounded border border-[#263244] bg-[#111827]">
                  <p className="text-sm font-bold text-[#F8FAFC] mb-2">{l.title}</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{l.description}</p>
                </div>
              ))}
            </div>
          </FundingSection>

          {/* 5. Metrics */}
          <FundingSection id="metrics" label={ADOPTION_METRICS.label} title={ADOPTION_METRICS.headline}>
            <p className="text-[#94A3B8] leading-relaxed mb-6">{ADOPTION_METRICS.intro}</p>
            <div className="space-y-2 mb-10">
              {ADOPTION_METRICS.funnel.map((row, i) => (
                <div key={row.stage} className="flex gap-4 p-4 rounded border border-[#263244] bg-[#111827] items-start">
                  <div className="shrink-0 w-6 h-6 rounded-full border border-[#263244] flex items-center justify-center text-[10px] font-mono text-[#94A3B8]">
                    {i + 1}
                  </div>
                  <div className="flex-1 grid sm:grid-cols-3 gap-2">
                    <p className="text-sm font-bold text-[#F8FAFC]">{row.stage}</p>
                    <p className="text-xs font-mono text-[#22D3EE]">{row.metric}</p>
                    <p className="text-sm text-[#94A3B8]">{row.why}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Priority Metrics for Omni-Loom</p>
            <ul className="space-y-2">
              {ADOPTION_METRICS.keyMetrics.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-[#94A3B8]">
                  <span className="text-[#FBBF24] shrink-0">▶</span>
                  {m}
                </li>
              ))}
            </ul>
          </FundingSection>

          {/* 6. Partners */}
          <FundingSection id="partners" label={PARTNER_OUTREACH.label} title={PARTNER_OUTREACH.headline}>
            <p className="text-[#94A3B8] leading-relaxed mb-6">{PARTNER_OUTREACH.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {PARTNER_OUTREACH.targets.map((t) => (
                <div key={t.type} className="p-5 rounded border border-[#263244] bg-[#111827]">
                  <p className="text-sm font-bold text-[#22D3EE] mb-2">{t.type}</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">{t.fit}</p>
                </div>
              ))}
            </div>
            <p className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">Outreach Template</p>
            <div className="rounded border border-[#263244] bg-[#0D111A] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#263244] bg-[#111827]">
                <span className="text-xs font-mono text-[#94A3B8]">partner-outreach-template.txt</span>
                <OutreachCopyButton content={PARTNER_OUTREACH.template} />
              </div>
              <pre className="p-5 overflow-x-auto text-xs font-mono text-[#94A3B8] leading-relaxed whitespace-pre-wrap">
                {PARTNER_OUTREACH.template}
              </pre>
            </div>
          </FundingSection>

          {/* CTA */}
          <div className="py-12 border-t border-[#263244]">
            <p className="text-xs font-mono tracking-[0.2em] text-[#22D3EE] uppercase mb-4">Next Steps</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Open source drives experimentation.<br />
              Experimentation drives trust.<br />
              Trust drives pilot funding.
            </h2>
            <p className="text-[#94A3B8] mb-8 max-w-xl leading-relaxed">
              The technical foundation is live. The spec pack is downloadable. The governance model is documented.
              The next step is a 12-week open pilot with a partner who needs a deterministic, auditable AI pipeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/spec-pack"
                className="px-6 py-3 rounded bg-[#22D3EE] text-[#080A0F] font-semibold text-sm hover:bg-[#22D3EE]/90 transition-colors"
              >
                Open Spec Pack
              </a>
              <a
                href="/case-studies/omni-loom#demo"
                className="px-6 py-3 rounded border border-[#263244] text-[#F8FAFC] font-semibold text-sm hover:border-[#22D3EE]/50 transition-colors"
              >
                Try the Demo
              </a>
              <a
                href="/case-studies/omni-loom"
                className="px-6 py-3 rounded border border-[#263244] text-[#94A3B8] font-semibold text-sm hover:border-[#22D3EE]/30 transition-colors"
              >
                View Case Study
              </a>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
