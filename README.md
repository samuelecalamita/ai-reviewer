# AI Reviewer Guide

This repository defines a model-agnostic review workflow using:
- `AGENTS.md`
- `rules/RULES.md`
- all rule files referenced by `rules/RULES.md`

## Quick Prompts
Use these short prompts with any LLM:

- `AGENTS review: full codebase`
- `AGENTS review: git diff`

## What the LLM must do
- Use only `AGENTS.md`, `rules/RULES.md`, and referenced `rules/*` files.
- Do not invent extra rules.
- For `AGENTS review: git diff`, run repository linting before reporting findings.
- For `AGENTS review: git diff`, keep findings focused on changed files unless a global/blocking issue fails lint/build gates.
- Use this output format:

`| Rule | Severity | Location | Problem | Suggested fix | Lesson learned |`
`| --- | --- | --- | --- | --- | --- |`
`| G001 | error | ./src/components/component-name/component-name.scss:14:1 | ... | ... | One short takeaway for a jr/mid developer. |`
``
`Quick open`
`- ./src/components/component-name/component-name.scss:14:1`

If no issues are found:

`No issues found against rules/RULES.md in changed files.`

## Notes
- Designed to work with Codex, Cursor, Claude, Copilot, and other LLM-based coding assistants.
- Keep rules in `rules/` as the single source of truth.
