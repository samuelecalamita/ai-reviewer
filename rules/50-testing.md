# Testing and Quality Rules

## Q001
### Title
Critical business logic must be covered by tests

### Why
Critical paths need protection against regressions.

### Detect
New or changed critical business logic without matching test coverage.

### Severity
`error`

### False Positive Guard
Do not report for trivial wiring changes that do not alter critical behavior.

### Suggested Fix
Add or update tests that cover key behavior and edge cases of the changed critical logic.

### Examples
`bad`: changes in critical calculation/auth flow without tests.
`good`: critical logic change with corresponding test updates.

