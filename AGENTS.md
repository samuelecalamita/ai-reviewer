# AI Agent Instructions (MVP)

## Purpose
Provide a standards-driven workflow that is extensible to multiple engineering tasks.

## Standards Source
- `rules/RULES.md` is the standards index.
- All files listed in `rules/RULES.md` under "Rule Files" are mandatory policy.

## Global Behavior
1. Read and apply `rules/RULES.md` as entrypoint, then load every file in its "Rule Files" list.
2. Use existing lint configuration as baseline truth for script/styles/markup compliance.
3. Do not invent rules outside `rules/RULES.md` and `rules/*`.
4. Keep output concise and actionable.
5. If confidence is low, mark uncertainty explicitly.

## Task Modes

### review (active)
Use when reviewing existing changes (for example pre-commit or PR checks).

#### Quick Triggers
- `AGENTS review: full codebase` => review all source files in the repository.
- `AGENTS review: git diff` => review only staged + unstaged git diff files. (local changes)

#### Inputs
- Diff or changed files.
- Repo context needed to interpret changes.

#### Mandatory Behavior
1. Review changed files by default.
2. Prioritize high-confidence findings.
3. When dependency files change (for example `package.json` or lockfiles), apply rules in `rules/40-dependencies.md`.
4. For `AGENTS review: git diff`, always run repository linting (using project lint scripts/config) before final findings.
5. For `AGENTS review: git diff`, report findings on changed files by default; include out-of-diff findings only when they are global/blocking issues that fail lint/build quality gates.

#### Output Contract
Use this exact markdown table format for findings:

`| Rule | Severity | Location | Problem | Suggested fix | Lesson learned |`
`| --- | --- | --- | --- | --- | --- |`
`| G001 | error | \`./<relative-path>/<file>.ext:14:1\` | ... | ... | One short takeaway. |`

Rules:
- One row per finding.
- `Location` must use ``./path/to/file.ext:line:col`` and be wrapped in backticks in the table cell.
- `Lesson learned` must be short (max 1 sentence), practical, and tied to the violated rule.
- Keep findings concise and high-signal.

If no issues are found:

`No issues found against rules/RULES.md in changed files.`

### generate (future)
Reserved for future implementation.

### refactor (future)
Reserved for future implementation.

## Guardrails
- Do not block on subjective preferences outside defined conventions.
- Do not request large refactors in MVP unless directly linked to a violated rule.

## Conflict Handling
- If repository conventions conflict with standards, report conflict clearly and avoid hard `error` unless explicit.
