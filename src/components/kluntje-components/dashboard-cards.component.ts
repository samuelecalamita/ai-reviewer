import { Component, uiElement, uiElements, uiEvent } from "@kluntje/core";

export class DashboardCardsUnusedDecoratorBindingsComponent extends Component {
  @uiElement(".dashboard-cards__cta")
  private cta!: HTMLButtonElement;

  @uiElements(".dashboard-cards__card")
  private cards!: HTMLElement[];
}

export class DashboardCardsUnusedUiMapBindingsComponent extends Component {
  constructor() {
    super({ ui: { cta: ".dashboard-cards__cta :-one" } });
  }
}

export class DashboardCardsComponent extends Component {
  @uiElement(".dashboard-cards__cta")
  private cta!: HTMLButtonElement;

  @uiEvent("cta", "click")
  private handleClick(): void {
    this.setState({ clicked: true, hasButton: Boolean(this.cta) });
  }
}

export class DashboardCardsSharedContractComponent extends Component {
  constructor() {
    super({ ui: { _sharedCta: ".dashboard-cards__cta :-one" } });
  }
}
