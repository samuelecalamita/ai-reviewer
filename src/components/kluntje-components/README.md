# Kluntje Components

This folder contains Kluntje components with production-like naming and structure.

## Naming Pattern

- Component files: `<domain>.component.ts`
- Template files: `<domain>.template.ts`
- Class pattern: `<Domain><Variant>Component` (variant describes behavior, e.g. `RawDom`, `DirectMutation`, `UiObjectConfig`)

## Notes

- Components use real imports from `@kluntje/core`, `@kluntje/js-utils`, and `@kluntje/services`.
- Alternative variants use explicit behavior names so intent is clear during review.
