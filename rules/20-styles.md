# Styles (SCSS) Rules

## S001
### Title
SCSS classes must follow BEM

### Why
BEM keeps CSS naming predictable and easier to maintain.

### Detect
SCSS class naming not aligned with `block__element--modifier`.

### Severity
`warning`

### False Positive Guard
Do not report utility classes or third-party class names that are outside team control.

### Suggested Fix
Rename classes to BEM-compliant names and align related markup selectors.

### Examples
`bad`: `.buttonPrimary { ... }`
`good`: `.button--primary { ... }`

## S002
### Title
Avoid deep nesting in SCSS

### Why
Deep nesting makes selectors fragile, increases specificity issues, and reduces maintainability.

### Detect
Nested selectors deeper than 3 levels in SCSS (excluding state/pseudo selectors like `:hover`, `:focus`, `:focus-visible`).

### Severity
`warning`

### False Positive Guard
Do not report short, readable nesting that stays within 3 levels and does not create high-specificity chains.

### Suggested Fix
Flatten selectors, split into smaller blocks/elements, and rely on BEM classes instead of deeply nested descendant chains.

### Examples
`bad`: `.card { .header { .title { .icon { ... } } } }`
`good`: `.card { &__header {} &__title {} &__icon {} }`

## S003
### Title
Use block-root nesting for BEM in SCSS

### Why
Keeping elements and modifiers nested under the block root improves readability and keeps selectors consistent.

### Detect
BEM selectors written outside block-root nesting instead of SCSS parent references (`&__element`, `&--modifier`) under `.block`.

### Severity
`warning`

### False Positive Guard
Do not report when flat selectors are required by legacy code or tooling constraints documented in the file/module.

### Suggested Fix
Structure BEM selectors as:
`.block { &__element {} &--modifier {} }`.

### Examples
`bad`: `.card__title { ... } .card--featured { ... }`
`good`: `.card { &__title { ... } &--featured { ... } }`

## S004
### Title
Use cascade sparingly and prefer class-only selectors

### Why
AEM authoring can inject extra wrapper containers, so selectors that depend on DOM structure are fragile. Element selectors can also leak styles into authoring UI.

### Detect
- Selectors relying on parent > child or deep nested element structure for component styling.
- Over-specified selectors (for example combining element + class like `DIV.my-class`).
- Element-only selectors for component styles (for example `BUTTON { ... }`).

### Severity
`warning`

### False Positive Guard
Do not report simple semantic structures where cascade is stable and intentional (for example `ul > li`), or documented exceptions.

### Suggested Fix
Use class-only selectors for component styling. Avoid structural dependence on parent/child nesting. If an element selector is unavoidable, keep it lowercase and scoped inside a class selector.

### Examples
`bad`: `BUTTON { ... }`
`bad`: `DIV.my-m-class-name { ... }`
`warn`: `.my-m-class-name a { ... }`
`good`: `.my-m-class-name .my-e-anchor { ... }`
`good`: `.my-m-class-name::before { ... }`

## S005
### Title
Avoid `!important` (require explicit justification when used)

### Why
`!important` breaks predictable cascade behavior and makes styles harder to maintain and override.

### Detect
Any use of `!important` in SCSS/CSS declarations.

### Severity
`warning`

### False Positive Guard
Do not report when `!important` is required for a documented integration edge case and an adjacent comment explains why it is necessary.

### Suggested Fix
Remove `!important` and resolve specificity/cascade through proper selector design. If unavoidable, keep `!important` and add a short comment with the technical reason.

### Examples
`bad`: `.my-e-title { color: red !important; }`
`good`: `.my-e-title { color: red; }`
`good`: `.my-e-title { color: red !important; /* required to override third-party inline style in author mode */ }`
