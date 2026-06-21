import React from "react";
import caseStudy from "@/content/omni-loom.case-study.json";
import { HeroCompilerThesis } from "@/components/HeroCompilerThesis";
import { PipelineDiagram } from "@/components/PipelineDiagram";
import { TraceabilityPanel } from "@/components/TraceabilityPanel";
import { FabricationOutputCards } from "@/components/FabricationOutputCards";
import { ArrowRight } from "lucide-react";

const OmniLoomCaseStudy: React.FC = () => {
  const data = caseStudy;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroCompilerThesis data={data} />

      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            {data.problem.heading}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {data.problem.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {data.problem.highlights && (
            <ul className="mt-8 space-y-3">
              {data.problem.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <span className="mt-1.5 block h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            {data.architecture.heading}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {data.architecture.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <PipelineDiagram stages={data.pipeline} />
      <TraceabilityPanel entries={data.traceability} />
      <FabricationOutputCards entries={data.traceability} />

      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            {data.demo.title}
          </h3>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground">
            {data.demo.description}
          </p>
          <button className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            {data.demo.cta}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="border-b border-border px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            Portfolio Skills Evidence
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.skills.map((skill, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-5 shadow-sm transition-colors hover:bg-accent/40"
              >
                <h4 className="mb-3 text-base font-semibold text-card-foreground">
                  {skill.domain}
                </h4>
                <ul className="space-y-2">
                  {skill.artifacts.map((artifact, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 block h-1 w-1 rounded-full bg-primary" />
                      {artifact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
            Roadmap & Funding Pathways
          </h3>
          <div className="space-y-6">
            {data.roadmap.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.phase}
                  </div>
                  <div className="text-base font-medium text-card-foreground">
                    {item.objective}
                  </div>
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
};

export default OmniLoomCaseStudy;
