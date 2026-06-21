# Omni-Loom — Flagship Case Study

> A deterministic generative compiler for cyber-physical creativity.

## Overview

This repository contains the production case study website for **Omni-Loom**, presenting the system architecture, pipeline, traceability model, and portfolio skills evidence for a deterministic generative compiler that bridges AI creativity and physical fabrication.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** + CSS custom properties for theming
- **shadcn/ui** conventions (class-variance-authority, clsx, tailwind-merge)
- **lucide-react** for icons

## Path Aliases

All imports use `@/` mapped to `./src/`:

```ts
import { CaseStudy } from '@/lib/caseStudySchema';
import caseStudy from '@/content/omni-loom.case-study.json';
```

## Route

`/case-studies/omni-loom` — main case study page

The root `/` redirects automatically to `/case-studies/omni-loom`.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run typecheck # tsc --noEmit
npm run lint      # eslint
npm run build     # production build
```

## Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Stable, reviewed, approved |
| `feature/omni-loom-case-study-architecture` | Initial scaffold (PR #1) |
| `feature/app-shell-and-routing` | App shell, routing, tsconfig, runtime foundation |
| `feature/content-schema-foundation` | Simplified schema + structured JSON |

## Approval Gate

All commits and merges require **Jennipher's explicit approval** before push.
