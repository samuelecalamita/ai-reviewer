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

## T004
### Title
Prefer class selectors in `querySelector` over ID or attribute selectors

### Why
Class selectors are more reusable, less brittle, and align better with component-level styling conventions.

### Detect
Use of `querySelector` / `querySelectorAll` with ID selectors (`#id`) or attribute selectors (`[data-*]`, `[id=...]`) when a class selector can be used safely.

### Severity
`warning`

### False Positive Guard
Do not report when ID/attribute selectors are required by accessibility linkage, third-party contracts, testing hooks, or documented platform constraints.

### Suggested Fix
Use class selectors (for example `.component-name__button`) for DOM queries and align them with BEM class names in markup.

### Examples
`bad`: `document.querySelector('#component-name')`
`bad`: `document.querySelector('[data-component-name-action]')`
`good`: `document.querySelector('.component-name__button')`

## T005

### Title

Avoid `any` in new or changed TypeScript code

### Why

`any` disables type safety and increases the chance of runtime bugs.

### Detect

New or modified code that introduces explicit `any` types or `as any` casts.

### Severity

`warning`

### False Positive Guard

Do not report when a temporary `any` is required by an external typing gap and includes a short inline justification comment.

### Suggested Fix

Use specific interfaces/types, or `unknown` with explicit narrowing at usage boundaries.

### Examples

`bad`: `const payload: any = response.data`
`bad`: `return value as any`
`good`: `const payload: ApiPayload = response.data`
`good`: `const payload: unknown = response.data`
