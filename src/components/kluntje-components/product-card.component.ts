import { Component, renderAsync } from "@kluntje/core";

import { productCardTemplate } from "./product-card.template";

export class ProductCardEagerComponent extends Component {
  protected renderComponent(): void {
    productCardTemplate();
  }
}

@renderAsync
export class ProductCardComponent extends Component {
  protected async renderAsync(): Promise<void> {
    const templateModule = await import("./product-card.template");
    templateModule.productCardTemplate();
  }
}
