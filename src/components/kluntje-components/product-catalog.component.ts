import { Component, renderAsync } from "@kluntje/core";

export class ProductCatalogManualAsyncTriggerComponent extends Component {
  protected renderComponent(): void {
    this.renderAsync().catch(() => {
      return;
    });
  }

  protected async renderAsync(): Promise<void> {
    await Promise.resolve();
  }
}

@renderAsync
export class ProductCatalogAsyncDecoratorComponent extends Component {
  protected async renderAsync(): Promise<void> {
    await Promise.resolve();
  }
}

export class ProductCatalogAsyncOptionComponent extends Component {
  constructor() {
    super({ asyncRendering: true });
  }

  protected async renderAsync(): Promise<void> {
    await Promise.resolve();
  }
}
