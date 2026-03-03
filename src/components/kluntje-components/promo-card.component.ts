import { Component, uiElement } from "@kluntje/core";

export class BaseCardSharedSelectorComponent extends Component {
  @uiElement(".promo-card__badge")
  protected badge!: HTMLElement;
}

export class PromoCardFromSharedSelectorBaseComponent extends BaseCardSharedSelectorComponent {
  public highlightBadge(): boolean {
    return Boolean(this.badge);
  }
}

export class BaseCardComponent extends Component {}

export class PromoCardComponent extends BaseCardComponent {
  @uiElement(".promo-card__badge")
  protected badge!: HTMLElement;

  public highlightBadge(): boolean {
    return Boolean(this.badge);
  }
}

export class SharedBadgeBaseComponent extends Component {
  @uiElement(".promo-card__badge")
  protected badge!: HTMLElement;
}

export class FeaturedPromoCardComponent extends SharedBadgeBaseComponent {}
export class SponsoredPromoCardComponent extends SharedBadgeBaseComponent {}
