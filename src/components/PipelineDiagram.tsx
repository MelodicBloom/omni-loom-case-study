import React from "react";
import { CaseStudy } from "@/lib/caseStudySchema";
import { ArrowRight } from "lucide-react";

interface Props {
  stages: CaseStudy["pipeline"];
}

export const PipelineDiagram: React.FC<Props> = ({ stages }) => {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
          Pipeline: Intent → Artifact
        </h3>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
          {stages.map((stage, idx) => (
            <React.Fragment key={stage.id}>
              <div className="flex flex-1 flex-col justify-between rounded-lg border border-border bg-card p-5 shadow-sm transition-colors hover:bg-accent/40">
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Stage {idx + 1}
                  </div>
                  <h4 className="mb-2 text-base font-semibold text-card-foreground">
                    {stage.name}
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
                <div className="mt-4 space-y-1 text-xs text-muted-foreground">
                  <div className="rounded bg-muted px-2 py-1">
                    <span className="font-medium text-foreground">In:</span> {stage.input}
                  </div>
                  <div className="rounded bg-muted px-2 py-1">
                    <span className="font-medium text-foreground">Out:</span> {stage.output}
                  </div>
                </div>
              </div>
              {idx < stages.length - 1 && (
                <div className="flex items-center justify-center py-2 md:py-0">
                  <ArrowRight className="h-5 w-5 rotate-90 text-muted-foreground md:rotate-0" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
