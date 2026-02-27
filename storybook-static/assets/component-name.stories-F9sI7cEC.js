import { b as l, i as m } from "./iframe-Cd29wfui.js";
import "./preload-helper-PPVm8Dsz.js";
const d = () => l`
  <component-name>
    <section class="component-name">
      <h2 class="component-name__title">Component Name</h2>
      <p class="component-name__text">Markup rendered with Lit HTML (Storybook-ready).</p>
      <button class="component-name__button" type="button" data-component-name-action>
        Trigger behavior
      </button>
      <p class="component-name__status" data-component-name-status>
        Waiting for interaction.
      </p>
    </section>
  </component-name>
`;
const b = (n) => (e, t) => {
  t !== void 0
    ? t.addInitializer(() => {
        customElements.define(n, e);
      })
    : customElements.define(n, e);
};
function h(n) {
  return (e, t) => {
    const o = typeof e == "function" ? e : e[t];
    Object.assign(o, n);
  };
}
const f = (n, e, t) => (
  (t.configurable = !0),
  (t.enumerable = !0),
  Reflect.decorate && typeof e != "object" && Object.defineProperty(n, e, t),
  t
);
function u(n, e) {
  return (t, o, a) => {
    const r = (s) => s.renderRoot?.querySelector(n) ?? null;
    return f(t, o, {
      get() {
        return r(this);
      },
    });
  };
}
var C = Object.defineProperty,
  _ = Object.getOwnPropertyDescriptor,
  p = (n, e, t, o) => {
    for (
      var a = o > 1 ? void 0 : o ? _(e, t) : e, r = n.length - 1, s;
      r >= 0;
      r--
    )
      (s = n[r]) && (a = (o ? s(e, t, a) : s(a)) || a);
    return (o && a && C(e, t, a), a);
  };
let c = class extends m {
  constructor() {
    (super(), (this.handleClick = this.handleClick.bind(this)));
  }
  createRenderRoot() {
    return this;
  }
  shouldUpdate() {
    return !1;
  }
  connectedCallback() {
    (super.connectedCallback(),
      this.button && this.button.addEventListener("click", this.handleClick));
  }
  disconnectedCallback() {
    (this.button && this.button.removeEventListener("click", this.handleClick),
      super.disconnectedCallback());
  }
  handleClick() {
    this.status &&
      (this.status.textContent =
        "Interaction handled by web component behavior.");
  }
  render() {
    return l``;
  }
};
p([u("[data-component-name-action]")], c.prototype, "button", 2);
p([u("[data-component-name-status]")], c.prototype, "status", 2);
p([h({ passive: !0 })], c.prototype, "handleClick", 1);
c = p([b("component-name")], c);
const k = {
    title: "Components/ComponentName",
    tags: ["autodocs"],
    render: () => d(),
  },
  i = {};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: { originalSource: "{}", ...i.parameters?.docs?.source },
  },
};
const g = ["Default"];
export { i as Default, g as __namedExportsOrder, k as default };
