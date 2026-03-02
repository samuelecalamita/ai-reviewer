# Kluntje Library Rules

## K001
### Title
Update Kluntje state only through `setState`

### Why
`this.state` in Kluntje is read-only in practice. Direct mutation does not update internal state or trigger reactions.

### Detect
Assignments/mutations to `this.state` or nested `this.state.*` in Kluntje components.

### Severity
`error`

### False Positive Guard
Do not report read-only access, cloning, or local immutable transforms that end with a valid `setState(...)` call.

### Suggested Fix
Compute next values and call `this.setState({ ... })`.

### Examples
`bad`: `this.state.count += 1`
`bad`: `this.state = { initialized: true }`
`good`: `this.setState({ count: this.state.count + 1 })`
