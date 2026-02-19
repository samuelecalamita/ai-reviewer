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
- Use this output format:

`[RULE_ID] [severity] path/to/file.ext:line - Problem. Suggested fix: ...`

If no issues are found:

`No issues found against rules/RULES.md in changed files.`

## Notes
- Works with ChatGPT and other LLMs.
- Keep rules in `rules/` as the single source of truth.
