import { Component } from "@kluntje/core";

export class CartCounterDirectMutationComponent extends Component {
  constructor() {
    super({ initialStates: { count: 0 } });
  }

  public increment(): void {
    const current = Number(this.state.count ?? 0);
    this.state.count = current + 1;
  }
}

export class CartCounterComponent extends Component {
  constructor() {
    super({ initialStates: { count: 0 } });
  }

  public increment(): void {
    const current = Number(this.state.count ?? 0);
    this.setState({ count: current + 1 });
  }
}
