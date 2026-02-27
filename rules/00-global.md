# Global Rules

## G001
### Title
Respect existing lint rules

### Why
Configured lint rules are the baseline contract for consistent code quality across scripts, styles, and markup.

### Detect
Code that would violate configured lint rules for TypeScript, SCSS, or markup templates.

### Severity
`error`

### False Positive Guard
Do not report if the rule is disabled in repository config for that file/path.

### Suggested Fix
Point to the violated lint rule and suggest a lint-compliant rewrite.

### Examples
`bad`: any code that fails project linting.
`good`: lint-clean code aligned with project config.

## G002
### Title
Prefer modern web standards with 2-version browser support

### Why
Using modern standards improves maintainability, but only when compatibility is guaranteed for target browsers.

### Detect
New HTML/CSS/JS APIs or syntax that are not supported in the latest 2 versions of Firefox, Chromium, and Safari, without fallback/polyfill.

### Severity
`error`

### False Positive Guard
Do not report if the feature is fully supported in target browsers or if a documented fallback/polyfill is included.

### Suggested Fix
Use a broadly supported standard alternative, or add a compatible fallback/polyfill for unsupported browsers.

### Examples
`bad`: introducing a browser-limited feature without fallback.
`good`: using a modern feature with full support or with a documented fallback/polyfill.

## G003
### Title
Keep code comments relevant and actionable

### Why
Stale or vague comments add noise, mislead reviewers, and hide real follow-up work.

### Detect
New or changed comments that are obsolete, too vague to act on, or inconsistent with current code behavior/context (including TODO/FIXME notes).

### Severity
`warning`

### False Positive Guard
Do not report comments that are still valid and clearly actionable (for example with concrete next step, owner, issue/task reference, or concise rationale for non-obvious code).

### Suggested Fix
Remove irrelevant comments. If a note is still needed, keep it short, specific, and tied to a real pending action or clear rationale.

### Examples
`bad`: `// this is important`
`bad`: `// TODO: maybe improve this later`
`bad`: `// FIXME temporary workaround` (already resolved but comment left behind)
`good`: `// Needed because API returns mixed date formats from legacy endpoint`
`good`: `// TODO(#1234): replace polling with websocket after backend endpoint is available`

## G004
### Title
Reuse existing UI components before creating new markup

### Why
Reusing shared components improves consistency, accessibility, and maintainability across the codebase.

### Detect
New or changed UI code that reimplements a component pattern already available in the project (for example modal, input, badge) instead of using the shared component.

### Severity
`warning`

### False Positive Guard
Do not report when:
- no equivalent shared component exists,
- the shared component cannot meet required behavior without risk/regression,
- native HTML usage is intentionally required by semantics or platform constraints,
- the deviation includes a short justification comment.

### Suggested Fix
Use the existing shared component. If it does not fit, extend the shared component or document why a local implementation is required.

### Examples
`bad`: custom dialog markup/CSS/JS reimplemented even though a shared `app-modal` component already exists
`good`: `<app-modal open heading="Delete item">...</app-modal>`
`good`: local modal implementation with short justification when `app-modal` cannot support a required behavior without regression
