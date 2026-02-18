import { LitElement, html } from "lit";
import { customElement, query } from "lit/decorators.js";
import { eventOptions } from "lit/decorators/event-options.js";

@customElement("component-name")
export class ComponentName extends LitElement {
  @query("[data-component-name-action]")
  private readonly button!: HTMLButtonElement;

  @query("[data-component-name-status]")
  private readonly status!: HTMLElement;

  private readonly clickListener = (event: Event): void => {
    this.handleClick(event);
  };

  protected createRenderRoot(): this {
    return this;
  }

  protected shouldUpdate(): boolean {
    return false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.button) {
      return;
    }

    this.button.addEventListener("click", this.clickListener);
  }

  disconnectedCallback() {
    if (this.button) {
      this.button.removeEventListener("click", this.clickListener);
    }

    super.disconnectedCallback();
  }

  @eventOptions({ passive: true })
  private handleClick(_event: Event): void {
    if (!this.status) {
      return;
    }

    this.status.textContent = "Interaction handled by web component behavior.";
  }

  render() {
    return html``;
  }
}
