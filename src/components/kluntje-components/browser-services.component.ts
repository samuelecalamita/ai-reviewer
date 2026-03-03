import { URLSearchParamsService, ViewportObserver } from "@kluntje/services";

export class LocalQueryParamsService {
  public get(param: string): string | null {
    return new URLSearchParams(window.location.search).get(param);
  }
}

export class LocalViewportService {
  public observe(_target: Element): void {
    return;
  }
}

export class BrowserContextService {
  public getParam(name: string): string | null {
    return URLSearchParamsService.get(name);
  }

  public observeInViewport(target: Element): void {
    const observer = ViewportObserver.getInstance();
    observer.observe(target);
  }
}
