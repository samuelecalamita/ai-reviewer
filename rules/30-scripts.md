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

## T006

### Title

Require explicit reason when overriding native event flow

### Why

Overriding native event behavior (`preventDefault` / propagation control) is often unnecessary and can introduce hidden side effects.

### Detect

Calls to `event.preventDefault()`, `event.stopPropagation()`, or `event.stopImmediatePropagation()` without an adjacent comment that explains both:
- why the override is required in this handler
- what behavior/side effect is being prevented or controlled

Generic comments (for example `needed`, `fix`, `prevent default`) are treated as missing justification.

### Severity

`warning`

### False Positive Guard

Do not report when an adjacent inline or previous-line comment is specific to the handler and describes the technical reason and impact of overriding native behavior.

### Suggested Fix

Keep native behavior unless override is required. If override is required, add a short, specific comment that states the reason and expected impact.

### Examples

`bad`: `event.preventDefault();`
`bad`: `event.preventDefault(); // needed`
`bad`: `event.preventDefault(); // prevent default`
`good`: `event.preventDefault(); // block native form submit to keep SPA state and run async validation first`
`good`: `event.stopPropagation(); // avoid duplicate parent click analytics event`

## T007

### Title

Do not use optional chaining after a non-null guard

### Why

Use 2 coherent styles, not 3 mixed styles:
- required value: no early return, fail fast if missing (`!` / `throw`)
- optional value: use early return or `?.`

The incoherent pattern is `if (!value) return` and then `value?.` in the same flow.
After that guard, you already chose "if missing, exit", so the remaining code should treat the value as present.

### Detect

In the same local flow:
- a value is checked with a guard such as `if (!value) return`
- then the same value is used with optional chaining (`value?.method()`, `value?.prop`)

### Severity

`warning`

### False Positive Guard

Do not report when optional behavior is intentional (for example optional callbacks), or when there is no explicit local non-null guard.

### Suggested Fix

Choose one intent and keep it consistent:
- required value: no early return; fail fast if missing (`!` / `throw`)
- optional value: use early return or `?.`, but not both on the same value in the same flow

### Examples

`bad`: `if (!button) return; button?.addEventListener("click", onClick);`
`bad`: `if (!panel) return; panel?.classList.add("is-open");`
`good`: `button!.addEventListener("click", onClick);`
`good`: `if (!panel) return; panel.classList.add("is-open");`
`good`: `onClick?.(event); // callback is intentionally optional`
