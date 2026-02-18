# Script (TypeScript) Rules

## T001

### Title

Component names must use PascalCase

### Why

Consistent naming improves readability and component discovery.

### Detect

Component identifiers not in `PascalCase`.

### Severity

`warning`

### False Positive Guard

Do not report non-component helpers or constants.

### Suggested Fix

Rename component identifiers to `PascalCase`.

### Examples

`bad`: `class loginForm extends LitElement {}`
`good`: `class LoginForm extends LitElement {}`

## T002

### Title

Frontend files must use kebab-case names

### Why

Consistent file naming simplifies navigation and conventions.

### Detect

Frontend file names not in `kebab-case`.

### Severity

`warning`

### False Positive Guard

Do not report third-party, tool-produced, or externally constrained file names.

### Suggested Fix

Rename files to `kebab-case` and update imports.

### Examples

`bad`: `LoginForm.ts`
`good`: `login-form.ts`

## T003

### Title

Prefer early return in functions

### Why

Early returns reduce nesting, improve readability, and make control flow easier to understand.

### Detect

Functions with avoidable nested `if/else` blocks where guard clauses could return early.

### Severity

`warning`

### False Positive Guard

Do not report when nesting is minimal and introducing early return would reduce clarity.

### Suggested Fix

Use guard clauses at the beginning of the function to exit early for invalid or edge-case conditions.

### Examples

`bad`: `if (isValid) { doWork(); } else { return; }`
`good`: `if (!isValid) return; doWork();`
