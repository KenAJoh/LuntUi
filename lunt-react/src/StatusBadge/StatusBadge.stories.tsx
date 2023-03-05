import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Themed } from "../../.storybook/ThemeDecorator";

import { StatusBadge } from "./index";
import { Inline } from "../Inline";

const meta: Meta<typeof StatusBadge> = {
  title: "Notification/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const Demo: Story = {
  render: () => (
    <Inline gap="12">
      <Box>
        <StatusBadge position="top-left" theme="neutral">
          99
        </StatusBadge>
        <StatusBadge position="top-right" theme="info">
          99
        </StatusBadge>
        <StatusBadge position="bottom-left" theme="positive">
          99
        </StatusBadge>
        <StatusBadge position="bottom-right" theme="caution">
          99
        </StatusBadge>
      </Box>
      <Box>
        <StatusBadge position="top-left" theme="danger">
          99
        </StatusBadge>
        <StatusBadge position="top-right" theme="purple">
          99
        </StatusBadge>
        <StatusBadge position="bottom-left" theme="turquoise">
          99
        </StatusBadge>
        <StatusBadge position="bottom-right" theme="clay">
          99
        </StatusBadge>
      </Box>
      <Box>
        <StatusBadge position="top-left" theme="neutral" />
        <StatusBadge position="top-right" theme="info" />
        <StatusBadge position="bottom-left" theme="positive" />
        <StatusBadge position="bottom-right" theme="caution" />
      </Box>
      <Box>
        <StatusBadge position="top-left" theme="danger" />
        <StatusBadge position="top-right" theme="purple" />
        <StatusBadge position="bottom-left" theme="turquoise" />
        <StatusBadge position="bottom-right" theme="clay" />
      </Box>
      <Box>
        <StatusBadge pulse position="top-left" theme="danger">
          99
        </StatusBadge>
        <StatusBadge pulse position="top-right" theme="purple">
          99
        </StatusBadge>
        <StatusBadge pulse position="bottom-left" theme="turquoise">
          99
        </StatusBadge>
        <StatusBadge pulse position="bottom-right" theme="clay">
          99
        </StatusBadge>
      </Box>
      <Box>
        <StatusBadge pulse position="top-left" theme="neutral" />
        <StatusBadge pulse position="top-right" theme="info" />
        <StatusBadge pulse position="bottom-left" theme="positive" />
        <StatusBadge pulse position="bottom-right" theme="caution" />
      </Box>
    </Inline>
  ),
  decorators: [Themed],
};

const Box = ({ ...props }) => (
  <div
    style={{
      width: "3rem",
      height: "3rem",
      background: "var(--l-gray-200)",
      borderRadius: 4,
      position: "relative",
    }}
    {...props}
  />
);
