# Frontend Engineering Standards Index (MVP - Local)

## Goal

Define a model-agnostic and maintainable standards system for frontend code review.

## Scope
- Rule application scope: changed files in the current diff/PR.
- Source of truth for base quality: existing linter rules for script, styles, and markup.
- Dependency source of truth: infer active stack and tooling from `package.json` (`dependencies` and `devDependencies`) before applying rules.
- Browser compatibility baseline: latest 2 versions of Firefox, Chromium, and Safari.

## Rule Files (load in this order)

1. `rules/00-global.md`
2. `rules/10-markup.md`
3. `rules/20-styles.md`
4. `rules/30-scripts.md`
5. `rules/40-dependencies.md`
6. `rules/50-testing.md`

## ID Conventions

- `Gxxx`: global
- `Mxxx`: markup/accessibility
- `Sxxx`: styles/SCSS
- `Txxx`: scripts/TypeScript
- `Dxxx`: dependencies
- `Qxxx`: testing/quality

## Severity Model

- `error`: mandatory violation that should be fixed before merge.
- `warning`: important issue that should generally be fixed.
- `info`: optional improvement or low-confidence observation.

## Rule Template

Each rule must use this structure:

- `ID`
- `Title`
- `Why`
- `Detect`
- `Severity`
- `False Positive Guard`
- `Suggested Fix`
- `Examples` (`bad` and `good`)

## Consumption Model

- `rules/RULES.md` + `rules/*` define technical standards only.
- Review workflow behavior and output format are defined in `AGENTS.md`.

## Out of Scope (MVP)

- Full architecture enforcement (folder/module structure) for now.
- Micro-optimizations unless they introduce clear bugs or accessibility issues.
- Subjective preferences not backed by lint rules or explicit conventions.
