import type { Meta, StoryObj } from "@storybook/web-components-vite";

import { componentNameTemplate } from "./component-name.template";
import "./component-name";
import "./component-name.scss";

const meta: Meta = {
  title: "Components/ComponentName",
  tags: ["autodocs"],
  render: () => componentNameTemplate(),
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};
