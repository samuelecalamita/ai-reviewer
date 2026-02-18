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
