# AI Reviewer Guide

This repository defines a model-agnostic review workflow using:
- `AGENTS.md`
- `rules/RULES.md`
- all rule files referenced by `rules/RULES.md`

## How to use with any LLM
1. Share `AGENTS.md` and the full `rules/` folder with the LLM.
2. Ask the LLM to review your code using only those policies.
3. Require strict output format for findings.

## Prompt: Review Entire Codebase
```text
Review the entire codebase in AGENTS mode.

Mandatory policy files:
- AGENTS.md
- rules/RULES.md
- all files referenced in rules/RULES.md

Scope:
- review all source files in the repository (not only changed files)

Constraints:
- do not invent rules outside these files
- use only concrete evidence from code
- prioritize high-confidence findings

Required output format per finding:
[RULE_ID] [severity] path/to/file.ext:line - Problem. Suggested fix: ...

If no issues are found, output exactly:
No issues found against rules/RULES.md in changed files.
```

## Prompt: Review Git Diff Only
```text
Review only the current git diff in AGENTS mode.

Mandatory policy files:
- AGENTS.md
- rules/RULES.md
- all files referenced in rules/RULES.md

Scope:
- review only changed files from git diff (staged + unstaged)

Constraints:
- do not invent rules outside these files
- use only concrete evidence from code
- prioritize high-confidence findings

Required output format per finding:
[RULE_ID] [severity] path/to/file.ext:line - Problem. Suggested fix: ...

If no issues are found, output exactly:
No issues found against rules/RULES.md in changed files.
```

## Notes
- Works with ChatGPT and other LLMs.
- Keep rules in `rules/` as the single source of truth.

