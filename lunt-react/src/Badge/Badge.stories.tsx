import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Themed } from "../../.storybook/ThemeDecorator";

import { Badge } from "./index";
import { Inline } from "../Inline";

const meta: Meta<typeof Badge> = {
  title: "Notification/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Demo: Story = {
  render: () => (
    <Inline>
      <Badge theme="neutral">99</Badge>
      <Badge theme="info">99</Badge>
      <Badge theme="positive">99</Badge>
      <Badge theme="caution">99</Badge>
      <Badge theme="danger">99</Badge>
      <Badge theme="purple">99</Badge>
      <Badge theme="turquoise">99</Badge>
      <Badge theme="clay">99</Badge>
    </Inline>
  ),
  decorators: [Themed],
};
