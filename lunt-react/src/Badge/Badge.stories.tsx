import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Themed } from "../../.storybook/ThemeDecorator";

import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  title: "Notification/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Demo: Story = {
  render: () => (
    <div style={{ width: "10rem" }}>
      <Badge>99</Badge>
    </div>
  ),
  decorators: [Themed],
};
