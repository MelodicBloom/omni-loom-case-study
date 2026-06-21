# Omni-Loom

A deterministic generative compiler for cyber-physical creativity.

## Thesis

As AI moves from content generation into cyber-physical production, creativity needs deterministic pipelines, not opaque improvisation.

## What This Is

A flagship portfolio case study and simulated browser demo. Architecture case study with interactive pipeline, QA gate visualization, and artifact manifest preview.

## What This Is Not

This is not an active fabrication dispatch system. Physical dispatch is intentionally disabled.

## Stack

Next.js (App Router), React, TypeScript, Tailwind CSS, shadcn/ui.

## Routes

- `/` — Home
- `/case-studies/omni-loom` — Flagship case study

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy to Vercel. Connect `main` branch for production.

## File Structure

```
src/
  app/
    case-studies/
      omni-loom/
        page.tsx          # Flagship case study route
  components/
    HeroCompilerThesis.tsx
    PipelineDiagram.tsx
    TraceabilityPanel.tsx
    FabricationOutputCards.tsx
    case-study/
      SectionHeading.tsx
      NarrativeBlock.tsx
      ArchitectureCard.tsx
      PipelineStepCard.tsx
    omni-loom/
      CompilerPipelineDiagram.tsx
      SystemSignalCard.tsx
      ArtifactOutputGrid.tsx
  content/
    omni-loom.case-study.json
  lib/
    caseStudySchema.ts
```

## Status

Case study website and simulated demo. Fabrication dispatch is intentionally disabled.

## License

To be determined.
