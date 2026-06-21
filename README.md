# Omni-Loom — Flagship Case Study

> A deterministic generative compiler for cyber-physical creativity.

## Thesis

As AI moves from content generation into cyber-physical production, creativity needs deterministic pipelines, not opaque improvisation.

## What This Is

A flagship portfolio case study and simulated browser demo. Architecture case study with interactive pipeline, QA gate visualization, and artifact manifest preview.

## What This Is Not

This is not an active fabrication dispatch system. Physical dispatch is intentionally disabled.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** + CSS custom properties
- **lucide-react** for icons
- **clsx** + **tailwind-merge** for class composition

## Path Aliases

`@/*` maps to `./src/*` via `tsconfig.json`.

## Routes

- `/` — Home (redirects to case study)
- `/case-studies/omni-loom` — Flagship case study page

## File Structure

```
src/
  app/
    case-studies/
      omni-loom/
        page.tsx                  # Flagship case study route
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

## Dev

```bash
npm install
npm run dev        # localhost:3000
npm run typecheck  # tsc --noEmit
npm run lint
npm run build
```

## Merge Order

| PR | Branch | Purpose |
|---|---|---|
| #1 ✅ | `feature/omni-loom-case-study-architecture` | Component scaffold |
| #4 | `feature/runtime-foundation` | App shell + routing |
| #3 | `feature/architecture-diagram` | Interactive SVG diagram |
| #5 ✅ | `feature/omni-loom-case-study-architecture` | Full case study Runs 1–5 |

## Status

Case study website and simulated demo. Fabrication dispatch is intentionally disabled.

## Approval Gate

All merges require **Jennipher's explicit approval**.

## License

To be determined.
