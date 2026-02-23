# Standards Overview

Quick maintainer reference of rules defined in `rules/RULES.md` and linked rule files.

| ID | Severity | Area | Rule |
| --- | --- | --- | --- |
| G001 | error | Global | Respect existing lint rules |
| G002 | error | Global | Prefer modern web standards with 2-version browser support |
| M001 | error | Markup | Form controls must have labels |
| M002 | error | Markup | Interactive elements must be keyboard operable |
| M003 | error | Markup | Focus must remain visible |
| M004 | warning | Markup | Avoid hover-only interaction paths |
| M005 | warning | Markup | Use semantic markup |
| S001 | warning | Styles | SCSS classes must follow BEM |
| S002 | warning | Styles | Avoid deep nesting in SCSS |
| S003 | warning | Styles | Use block-root nesting for BEM in SCSS |
| S004 | warning | Styles | Use cascade sparingly and prefer class-only selectors |
| S005 | warning | Styles | Avoid `!important` (require explicit justification when used) |
| T001 | warning | Scripts | Component names must use PascalCase |
| T002 | warning | Scripts | Frontend files must use kebab-case names |
| T003 | warning | Scripts | Prefer early return in functions |
| T004 | warning | Scripts | Prefer class selectors in `querySelector` over ID or attribute selectors |
| T005 | warning | Scripts | Avoid `any` in new or changed TypeScript code |
| D001 | warning | Dependencies | Avoid unnecessary new dependencies |
| D002 | warning | Dependencies | Use dependencies according to project standards |
| Q001 | error | Testing | Critical business logic must be covered by tests |

## Source of Truth

- `rules/RULES.md`
- `rules/00-global.md`
- `rules/10-markup.md`
- `rules/20-styles.md`
- `rules/30-scripts.md`
- `rules/40-dependencies.md`
- `rules/50-testing.md`
