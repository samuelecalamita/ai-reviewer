import { Component, prop, uiElement, uiEvent } from "@kluntje/core";

export class UserMenuUiObjectConfigComponent extends Component {
  constructor() {
    super({
      ui: { primaryAction: ".user-menu__action :-one" },
      events: [{ event: "click", target: "primaryAction", handler: "handlePrimaryAction" }],
      props: { open: { type: "boolean", defaultValue: false } },
    });
  }

  public handlePrimaryAction(): void {
    this.setState({ menuOpen: true });
  }
}

export class UserMenuComponent extends Component {
  @uiElement(".user-menu__action")
  private primaryAction!: HTMLButtonElement;

  @prop({ type: "boolean", defaultValue: false })
  private open = false;

  constructor() {
    super({ initialStates: { menuOpen: false } });
  }

  @uiEvent("primaryAction", "click")
  private handlePrimaryAction(): void {
    const nextOpen = !this.open;
    this.open = nextOpen;
    this.setState({ menuOpen: nextOpen, hasAction: Boolean(this.primaryAction) });
  }
}
