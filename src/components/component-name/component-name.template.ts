import { html } from "lit";

export const componentNameTemplate = () => html`
  <component-name>
    <section class="component-name">
      <h2 class="component-name-title">Component Name</h2>
      <p class="component-name__text">Markup rendered with Lit HTML (Storybook-ready).</p>
      <button class="component-name__button" type="button" data-component-name-action>Trigger behavior</button>
      <p class="component-name__status" data-component-name-status>Waiting for interaction.</p>
    </section>
  </component-name>
`;
