# Contributing

## Purpose

This repository defines standards for AI-assisted frontend code review. Contributions should keep rules clear, practical, and easy to apply.

## Branch Workflow

- `main`: stable branch for releases.
- `develop`: integration branch for day-to-day rule and documentation changes.
- `frontend`: sandbox branch with frontend code used to validate rules.

### Merge policy

- Allowed:
  - `feature/*`, `fix/*`, `docs/*`, `chore/*` -> `develop`
  - `develop` -> `main`
- Not allowed:
  - `frontend` -> `develop`
  - `frontend` -> `main`

`frontend` is a testing sandbox and should stay separate from release/integration history.

## Rule Change Checklist

When changing rules, update all relevant files:

1. `rules/RULES.md` (if index/order/conventions change).
2. The appropriate rule file in `rules/*`.
3. `rules/STANDARDS_OVERVIEW.md` (maintainer quick reference).
4. `README.md` / `AGENTS.md` only if workflow behavior changes.

## Rule Writing Standard

Each rule must include:

- `ID`
- `Title`
- `Why`
- `Detect`
- `Severity`
- `False Positive Guard`
- `Suggested Fix`
- `Examples` (`bad` and `good`)

Keep rules objective and actionable:

- align with repository lint configuration,
- avoid subjective preferences,
- use `error` only for blocking issues,
- include clear false-positive guards.

## Pull Request Process

1. Branch from `develop`:
   - `feature/<scope>`
   - `fix/<scope>`
   - `docs/<scope>`
   - `chore/<scope>`
2. Implement rule/docs changes.
3. Validate behavior against `frontend` code (or equivalent fixtures).
4. Ensure `rules/STANDARDS_OVERVIEW.md` is updated.
5. Open PR to `develop`.
6. Include in PR description:
   - what changed,
   - why it changed,
   - expected review impact,

## LLM-Assisted Authoring

LLMs (Codex, Cursor, Claude, Copilot, etc.) can help draft rules.

- Ask for proposals constrained to `AGENTS.md`, `rules/RULES.md`, and `rules/*`.
- Ask explicitly for `Detect` and `False Positive Guard`.
- Always review and edit generated text before merging.

Repository files remain the source of truth.
