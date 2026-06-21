import React from "react";
import { CaseStudy } from "@/lib/caseStudySchema";
import { FileCode2, Image, Layers, Package } from "lucide-react";

interface Props {
  entries: CaseStudy["traceability"];
}

const formatIcon = (ref: string) => {
  if (ref.endsWith(".svg")) return <Image className="h-5 w-5 text-foreground" />;
  if (ref.endsWith(".gcode")) return <FileCode2 className="h-5 w-5 text-foreground" />;
  if (ref.endsWith(".stl") || ref.endsWith(".obj")) return <Layers className="h-5 w-5 text-foreground" />;
  return <Package className="h-5 w-5 text-foreground" />;
};

const formatLabel = (ref: string) => {
  if (ref.endsWith(".svg")) return "Vector Cut Sheet";
  if (ref.endsWith(".gcode")) return "CNC Toolpath";
  if (ref.endsWith(".stl")) return "Mesh Model";
  if (ref.endsWith(".obj")) return "Geometry Object";
  return "Artifact";
};

export const FabricationOutputCards: React.FC<Props> = ({ entries }) => {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h3 className="mb-12 text-2xl font-semibold tracking-tight text-foreground">
          Fabrication Outputs
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="flex flex-col rounded-lg border border-border bg-card p-5 shadow-sm transition-colors hover:bg-accent/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted">
                  {formatIcon(entry.artifactRef)}
                </div>
                <div className="text-sm font-medium text-card-foreground">
                  {formatLabel(entry.artifactRef)}
                </div>
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                Artifact Ref
              </div>
              <div className="mb-4 truncate font-mono text-xs text-foreground">
                {entry.artifactRef}
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                Geometry Hash
              </div>
              <div className="truncate font-mono text-xs text-muted-foreground">
                {entry.geometryHash}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
