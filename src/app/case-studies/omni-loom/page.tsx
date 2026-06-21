import type { Metadata } from 'next';
import caseStudy from '@/content/omni-loom.case-study.json';
import { HeroCompilerThesis } from '@/components/HeroCompilerThesis';
import { PipelineDiagram } from '@/components/PipelineDiagram';
import { TraceabilityPanel } from '@/components/TraceabilityPanel';
import { FabricationOutputCards } from '@/components/FabricationOutputCards';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: `${caseStudy.title} — Case Study`,
  description: caseStudy.tagline,
};

export default function OmniLoomCaseStudy() {
  const data = caseStudy;
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* 1. Hero */}
      <HeroCompilerThesis data={data} />

      {/* 2. Problem */}
      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">The Gap in AI Creativity</h3>
          <p className="mb-6 text-base leading-relaxed text-muted-foreground">{data.problem}</p>
          <ul className="space-y-3">
            {[
              'No deterministic pipeline from intent to artifact',
              'Loss of auditability in generative workflows',
              'Cyber-physical gap: digital designs fail fabrication constraints',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. System Architecture prose */}
      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">System Architecture</h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            Omni-Loom is structured as a compiler: high-level creative intent is parsed,
            type-checked against fabrication constraints, and lowered into executable tool plans.
          </p>
        </div>
      </section>

      {/* 4. Interactive Architecture Diagram */}
      <ArchitectureDiagram />

      {/* 5. Pipeline */}
      <PipelineDiagram stages={data.pipeline} />

      {/* 6. Traceability */}
      <TraceabilityPanel entries={data.traceability} />

      {/* 7. Fabrication Outputs */}
      <FabricationOutputCards entries={data.traceability} />

      {/* 8. Demo CTA */}
      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight">{data.demo.title}</h3>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">{data.demo.description}</p>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            {data.demo.cta}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 9. Portfolio Skills */}
      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">Portfolio Skills Evidence</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(data.skills as string[]).map((skill) => (
              <div key={skill} className="rounded-lg border border-border bg-card p-5 shadow-sm hover:bg-accent/40 transition-colors">
                <p className="text-sm font-medium text-card-foreground">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Roadmap */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight">Roadmap & Funding Pathways</h3>
          <div className="space-y-4">
            {data.roadmap.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.phase}</div>
                  <div className="text-base font-medium">{item.objective}</div>
                </div>
                {item.fundingPath && (
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <span className="font-medium text-foreground">Funding:</span> {item.fundingPath}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
