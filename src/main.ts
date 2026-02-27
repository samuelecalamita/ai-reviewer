import { render } from "lit";

import { componentNameTemplate } from "./components/component-name/component-name.template";
import "./components/component-name/component-name";
import "./components/component-name/component-name.scss";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  render(componentNameTemplate(), app);
}
