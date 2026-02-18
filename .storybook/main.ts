import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx|mjs)"],
  addons: [],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};

export default config;
