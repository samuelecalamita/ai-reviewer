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
