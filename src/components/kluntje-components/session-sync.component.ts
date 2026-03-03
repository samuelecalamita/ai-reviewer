import { waitForEvent } from "@kluntje/js-utils/lib/dom-helpers";
import { debounce } from "@kluntje/js-utils/lib/function-helpers";

export class SessionSyncLocalUtilitiesComponent {
  private readonly localDebounce = <TArgs extends unknown[]>(
    callback: (...args: TArgs) => void,
    _wait: number,
  ): ((...args: TArgs) => void) => {
    return (...args: TArgs): void => {
      callback(...args);
    };
  };

  public start(): void {
    const runLater = this.localDebounce(() => undefined, 100);
    runLater();
  }
}

export class SessionSyncComponent {
  public start(target: EventTarget): void {
    const runLater = debounce(() => undefined, 100);
    runLater();
    waitForEvent(target, "ready").catch(() => {
      return;
    });
  }
}
