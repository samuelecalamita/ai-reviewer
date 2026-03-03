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

## K004
### Title
Keep `@uiElement` / `@uiElements` typing consistent with single vs multiple bindings and selector intent

### Why
Kluntje decorators bind different shapes:
- `@uiElement(...)` binds one element
- `@uiElements(...)` binds multiple elements (array-like result)

Wrong typing hides runtime issues and weakens TypeScript safety for UI access.

### Detect
In Kluntje components:
- `@uiElement(...)` fields typed as arrays/lists,
- `@uiElements(...)` fields typed as a single element,
- clearly incompatible element types for explicit tag selectors (for example `@uiElement("input")` typed as `HTMLButtonElement`).

### Severity
`warning`

### False Positive Guard
Do not report when the field is intentionally typed as `Element`/`HTMLElement` and then safely narrowed before element-specific API usage (for example with `instanceof`, `tagName`, or `matches` checks).

### Suggested Fix
Align decorator and field type:
- `@uiElement` -> single element type (`HTMLInputElement`, `HTMLElement | null`, etc.)
- `@uiElements` -> collection type (`Array<HTMLInputElement>`, `HTMLElement[]`, etc.)
Also keep element type coherent with explicit selector intent.

### Examples
`bad`: `@uiElement(".item") items: HTMLDivElement[];`
`bad`: `@uiElements(".item") item: HTMLDivElement;`
`bad`: `@uiElement(".input") inputField: HTMLButtonElement;`
`good`: `@uiElement(".input") inputField: HTMLInputElement;`
`good`: `@uiElements(".item") items: HTMLDivElement[];`

## K005
### Title
Avoid unused local Kluntje UI bindings (decorators and constructor `ui` object)

### Why
Unused local UI bindings are often stale selectors left after refactors. They add noise, hide markup drift, and make component intent harder to read.

### Detect
In Kluntje components, report UI bindings not used in the same class:
- `@uiElement` / `@uiElements` fields not read/written and not referenced by `@uiEvent("<fieldName>", ...)`,
- `super({ ui: { ... } })` keys not used as `this.ui.<key>` and not referenced by constructor events `target: "<key>"`.

### Severity
`warning`

### False Positive Guard
Do not report when access is dynamic or not statically analyzable (for example `this[key]`, mixins/base classes, framework-external integrations).

### Suggested Fix
Remove unused bindings, or wire them to real behavior in the same class.
If the binding is intentionally exposed to subclasses/wrappers, follow the extension conventions:
- decorator fields as `protected`,
- constructor `ui` keys prefixed with something like `_exposed...`.

### Examples
`bad`: `@uiElement(".cta") cta: HTMLButtonElement; // never used`
`bad`: `@uiElements(".card") cards: HTMLElement[]; // never used`
`bad`: `super({ ui: { cta: ".cta :-one" } }); // cta never used`
`good`: `@uiElement(".cta") cta: HTMLButtonElement; @uiEvent("cta", "click") onClick() {}`
`good`: `@uiElements(".card") cards: HTMLElement[]; highlight() { this.cards.forEach(...) }`
`good`: `super({ ui: { _exposedCta: ".cta :-one" } }); // intentionally exposed key`

## K006
### Title
Prefer declaring UI selectors in subclass/wrapper when usage is local

### Why
When a selector is used only by a specific subclass/wrapper, declaring it there reduces coupling with the base component and makes ownership clearer.

### Detect
Base components declaring decorator/UI-object selectors that are not used in base-class behavior and are consumed only by subclasses/wrappers.

### Severity
`warning`

### False Positive Guard
Do not report when the selector is part of a shared extension contract used by multiple subclasses, or when centralizing the selector in base avoids harmful duplication and is clearly intentional.

### Suggested Fix
Move selector declarations to the subclass/wrapper that uses them.
Keep selectors in base only for shared extension points, and mark them explicitly:
- `protected` for decorator fields,
- `_exposed...` for constructor `ui` keys.

### Examples
`bad`: `BaseCard` defines `@uiElement(".badge") badge`, used only in `PromoCard`
`good`: `PromoCard` declares its own `@uiElement(".badge") badge`
`good`: `BaseCard` keeps `protected @uiElement(".badge") badge` because multiple subclasses rely on it
