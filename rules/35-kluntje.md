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

## K002
### Title
Use Kluntje async rendering flow for async templates/data

### Why
Kluntje waits for async rendering only when async flow is enabled (`@renderAsync` or `asyncRendering: true`). If async work is triggered from sync rendering hooks, UI/event binding can run before markup is ready.

### Detect
Kluntje components that perform async rendering/data loading without enabling Kluntje async rendering flow, for example calling `this.renderAsync()` from `renderComponent()` without async flow enabled.

### Severity
`error`

### False Positive Guard
Do not report when rendering is fully synchronous, or when async flow is explicitly enabled and async work is implemented in `renderAsync()`.

### Suggested Fix
Move async rendering logic to `renderAsync()` and enable async flow using `@renderAsync` or `super({ asyncRendering: true })`.

### Examples
`bad`: `renderComponent() { this.renderAsync(); } // async flow not enabled`
`good`: `@renderAsync class MyComp extends Component { async renderAsync() { ... } }`
`good`: `constructor() { super({ asyncRendering: true }); } async renderAsync() { ... }`

## K003
### Title
Prefer decorators over constructor `ui/events/props` in new Kluntje components

### Why
Decorator-based bindings (`@uiElement`, `@uiElements`, `@uiEvent`, `@prop`) are the modern Kluntje style and keep selectors, handlers, and prop definitions close to class members. This usually gives clearer, safer typing because element and handler types are declared directly on typed fields/methods.

### Detect
In new Kluntje components (or substantial rewrites), constructor definitions that use `super({ ui: ..., events: ..., props: ... })` for static bindings that can be expressed with decorators.

### Severity
`warning`

### False Positive Guard
Do not report when:
- component code is legacy and not being substantially refactored,
- constructor options are used for features not covered by decorators (for example `initialStates`, `reactions`, `useShadowDOM`, `preserveChildren`, `asyncRendering`).

### Suggested Fix
Prefer `@uiElement` / `@uiElements` / `@uiEvent` / `@prop` for static UI, event, and prop bindings. Keep constructor options only where decorators are not applicable.

### Examples
`bad`: `super({ ui: { button: ".cta :-one" }, events: [{ event: "click", target: "button", handler: "onClick" }] })`
`good`: `@uiElement(".cta") button: HTMLButtonElement; @uiEvent("button", "click") onClick() {}`
`good`: `constructor() { super({ initialStates: { open: false } }); } // keep constructor for non-decorator options`
