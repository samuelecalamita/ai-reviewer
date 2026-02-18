# AI Agent Instructions (MVP)

## Purpose
Run a standards-based frontend review workflow.

## Standards Source
- `rules/RULES.md` is the standards index.
- All files listed in `rules/RULES.md` under "Rule Files" are mandatory policy.

## Global Behavior
1. Read and apply `rules/RULES.md` as entrypoint, then load every file in its "Rule Files" list.
2. Use existing lint configuration as baseline truth for script/styles/markup compliance.
3. Do not invent rules outside `rules/RULES.md` and `rules/*`.
4. Keep output concise and actionable.
5. If confidence is low, mark uncertainty explicitly.

## Review Mode
Use when reviewing existing changes (for example pre-commit or PR checks).

#### Inputs
- Diff or changed files.
- Repo context needed to interpret changes.

#### Mandatory Behavior
1. Review changed files by default.
2. Prioritize high-confidence findings.
3. When dependency files change (for example `package.json` or lockfiles), apply rules in `rules/40-dependencies.md`.

#### Output Contract
Use this exact format per finding:

`[RULE_ID] [severity] path/to/file.ext:line - Problem. Suggested fix: ...`

If no issues are found:

`No issues found against rules/RULES.md in changed files.`

## Guardrails
- Do not block on subjective preferences outside defined conventions.
- Do not request large refactors in MVP unless directly linked to a violated rule.

## Conflict Handling
- If repository conventions conflict with standards, report conflict clearly and avoid hard `error` unless explicit.
