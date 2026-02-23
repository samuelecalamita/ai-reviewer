# Markup and Accessibility Rules

## M001
### Title
Form controls must have labels

### Why
Labels are required for accessibility and clarity.

### Detect
Missing label association for form fields.

### Severity
`error`

### False Positive Guard
Do not report when an equivalent accessible name is correctly provided (for example `aria-label`/`aria-labelledby`).

### Suggested Fix
Associate each control with a visible `<label>` or valid accessible label mechanism.

### Examples
`bad`: `<input id="email" />`
`good`: `<label for="email">Email</label><input id="email" />`

## M002
### Title
Interactive elements must be keyboard operable

### Why
Keyboard operability is required for WCAG AA-oriented accessibility.

### Detect
Clickable custom elements not keyboard reachable or not operable with keyboard.

### Severity
`error`

### False Positive Guard
Do not report standard semantic elements (`<button>`, `<a href=...>`) that are already keyboard-accessible by default.

### Suggested Fix
Use semantic interactive elements or add proper keyboard handlers and focusability.

### Examples
`bad`: `<div onclick="save()">Save</div>`
`good`: `<button type="button" onclick="save()">Save</button>`

## M003
### Title
Focus must remain visible

### Why
Visible focus indicators are necessary for keyboard navigation.

### Detect
Removed or hidden focus styles without accessible replacement.

### Severity
`error`

### False Positive Guard
Do not report when custom focus styles are present and clearly visible.

### Suggested Fix
Restore default focus outline or provide an accessible custom focus style.

### Examples
`bad`: `:focus { outline: none; }`
`good`: `:focus-visible { outline: 2px solid var(--focus-color); }`

## M004
### Title
Avoid hover-only interaction paths

### Why
Hover-only behavior excludes keyboard and touch users.

### Detect
Behavior available only on `:hover` without equivalent focus/click/keyboard path.

### Severity
`warning`

### False Positive Guard
Do not report decorative-only hover effects with no functional impact.

### Suggested Fix
Provide equivalent behavior on focus and/or explicit interaction.

### Examples
`bad`: submenu opens only on hover.
`good`: submenu opens on hover and keyboard focus/click.

## M005
### Title
Use semantic markup

### Why
Semantic HTML improves accessibility and maintainability.

### Detect
Non-semantic containers used where semantic elements are expected (buttons, lists, sections, headers, nav).

### Severity
`warning`

### False Positive Guard
Do not report when semantic replacement is not technically feasible and accessibility alternatives are implemented.

### Suggested Fix
Replace generic containers with semantic tags when they represent semantic roles.

### Examples
`bad`: `<div class="nav">...</div>`
`good`: `<nav class="nav">...</nav>`

## M006

### Title

Interactive elements with image-only content must have an accessible label

### Why

Icon-only or image-only interactive elements without an accessible name are not understandable for screen reader users.

### Detect

Interactive elements (for example `<a>`, `<button>`, or custom elements with interactive role) whose visible content is only an image/icon and that do not expose an accessible name (for example via visible text, screen-reader-only text, `aria-label`, `aria-labelledby`, or meaningful image `alt` text).

### Severity

`error`

### False Positive Guard

Do not report when the interactive element already has a valid accessible name through visible text, screen-reader-only text (for example `sr-only`/`visually-hidden`), `aria-label`, `aria-labelledby`, or non-empty meaningful `alt` on an informative image.

### Suggested Fix

Provide a clear accessible name on the interactive element with visible text, screen-reader-only text, or `aria-label`/`aria-labelledby`; if relying on the image, ensure the image has meaningful non-empty `alt` text.

### Examples

`bad`: `<a href="/home"><img src="/icons/home.svg" alt="" /></a>`
`good`: `<a href="/home" aria-label="Home"><img src="/icons/home.svg" alt="" /></a>`
`good`: `<a href="/home"><img src="/icons/home.svg" alt="Home" /></a>`
`good`: `<a href="/home"><img src="/icons/home.svg" alt="" /><span class="sr-only">Home</span></a>`
`bad`: `<button type="button"><img src="/icons/search.svg" alt="" /></button>`
`good`: `<button type="button" aria-label="Search"><img src="/icons/search.svg" alt="" /></button>`
