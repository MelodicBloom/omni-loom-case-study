import React from "react";
import { CaseStudy } from "@/lib/caseStudySchema";

interface Props {
  data: Pick<CaseStudy, "title" | "subtitle" | "thesis">;
}

export const HeroCompilerThesis: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative flex min-h-[60vh] flex-col justify-center border-b border-border bg-background px-6 py-20 md:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Flagship Case Study
        </p>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
          {data.title}
        </h1>
        <h2 className="mb-8 text-xl font-medium text-foreground/80 md:text-2xl">
          {data.subtitle}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {data.thesis}
        </p>
      </div>
    </section>
  );
};
