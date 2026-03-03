import { Component, uiElement, uiEvent } from "@kluntje/core";

export class NewsletterCtaRawDomComponent extends Component {
  protected connectedCallback(): void {
    super.connectedCallback();
    const button = this.querySelector<HTMLButtonElement>(".newsletter-cta__button");
    button?.addEventListener("click", this.handleClick);
  }

  private handleClick = (): void => {
    const count = Number(this.state.clickCount ?? 0);
    this.setState({ clickCount: count + 1 });
  };
}

export class NewsletterCtaComponent extends Component {
  @uiElement(".newsletter-cta__button")
  private button!: HTMLButtonElement;

  @uiEvent("button", "click")
  private handleClick(): void {
    const count = Number(this.state.clickCount ?? 0);
    this.setState({ clickCount: count + 1, hasButton: Boolean(this.button) });
  }
}
