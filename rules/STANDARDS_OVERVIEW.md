# Standards Overview

Quick maintainer reference of rules defined in `rules/RULES.md` and linked rule files.

| ID | Severity | Area | Rule |
| --- | --- | --- | --- |
| G001 | error | Global | Respect existing lint rules |
| G002 | error | Global | Prefer modern web standards with 2-version browser support |
| G003 | warning | Global | Keep code comments relevant and actionable |
| G004 | warning | Global | Reuse existing UI components before creating new markup |
| M001 | error | Markup | Form controls must have labels |
| M002 | error | Markup | Interactive elements must be keyboard operable |
| M003 | error | Markup | Focus must remain visible |
| M004 | warning | Markup | Avoid hover-only interaction paths |
| M005 | warning | Markup | Use semantic markup |
| M006 | error | Markup | Interactive elements with image-only content must have an accessible label |
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
| T006 | warning | Scripts | Require explicit reason when overriding native event flow |
| T007 | warning | Scripts | Do not use optional chaining after a non-null guard |
| T008 | warning | Scripts | Query selector result type must match the selected element |
| T009 | warning | Scripts | Avoid timing hacks for control flow |
| T010 | warning | Scripts | Handle errors explicitly; do not fail silently |
| T011 | warning | Scripts | Call `super` when overriding inherited lifecycle methods |
| K001 | error | Kluntje | Update Kluntje state only through `setState` |
| K002 | error | Kluntje | Use Kluntje async rendering flow for async templates/data |
| K003 | warning | Kluntje | Prefer decorators over constructor `ui/events/props` in new Kluntje components |
| K004 | warning | Kluntje | Keep `@uiElement` / `@uiElements` typing consistent with single vs multiple bindings and selector intent |
| K005 | warning | Kluntje | Avoid unused local Kluntje UI bindings (decorators and constructor `ui` object) |
| K006 | warning | Kluntje | Prefer declaring UI selectors in subclass/wrapper when usage is local |
| K007 | warning | Kluntje | Prefer async template imports for CSR-heavy Kluntje components |
| K008 | warning | Kluntje | Prefer Kluntje component APIs over raw DOM/event wiring inside Kluntje components |
| D001 | warning | Dependencies | Avoid unnecessary new dependencies |
| D002 | warning | Dependencies | Use dependencies according to project standards |
| Q001 | error | Testing | Critical business logic must be covered by tests |

## Source of Truth

- `rules/RULES.md`
- `rules/00-global.md`
- `rules/10-markup.md`
- `rules/20-styles.md`
- `rules/30-scripts.md`
- `rules/35-kluntje.md`
- `rules/40-dependencies.md`
- `rules/50-testing.md`
