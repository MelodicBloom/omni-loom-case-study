import React from "react";
import { CaseStudy } from "@/lib/caseStudySchema";
import { CheckCircle2, Clock, Hammer, ShieldCheck } from "lucide-react";

interface Props {
  entries: CaseStudy["traceability"];
}

const statusIcon = (status: CaseStudy["traceability"][number]["status"]) => {
  switch (status) {
    case "verified":
      return <ShieldCheck className="h-4 w-4 text-emerald-500" />;
    case "fabricated":
      return <Hammer className="h-4 w-4 text-amber-500" />;
    case "compiled":
      return <CheckCircle2 className="h-4 w-4 text-blue-500" />;
    default:
      return <Clock className="h-4 w-4 text-slate-400" />;
  }
};

const statusLabel = (status: CaseStudy["traceability"][number]["status"]) => {
  const map: Record<string, string> = {
    pending: "Pending",
    compiled: "Compiled",
    fabricated: "Fabricated",
    verified: "Verified",
  };
  return map[status] ?? status;
};

export const TraceabilityPanel: React.FC<Props> = ({ entries }) => {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
          Audit Trail / Traceability
        </h3>
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-6 gap-4 border-b border-border bg-muted px-4 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Job</div>
            <div className="col-span-1">Tool Plan</div>
            <div className="col-span-2">Geometry Hash</div>
            <div className="col-span-1">Timestamp</div>
          </div>
          <div className="divide-y divide-border">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="grid grid-cols-6 items-center gap-4 px-4 py-4 text-sm transition-colors hover:bg-accent/30"
              >
                <div className="col-span-1 flex items-center gap-2">
                  {statusIcon(entry.status)}
                  <span className="font-medium text-foreground">{statusLabel(entry.status)}</span>
                </div>
                <div className="col-span-1 font-mono text-foreground">{entry.jobId}</div>
                <div className="col-span-1 text-muted-foreground">{entry.toolPlan}</div>
                <div className="col-span-2 truncate font-mono text-xs text-muted-foreground">
                  {entry.geometryHash}
                </div>
                <div className="col-span-1 text-muted-foreground">
                  {new Date(entry.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
