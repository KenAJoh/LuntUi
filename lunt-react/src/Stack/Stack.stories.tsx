import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Stack } from "./index";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Stack>;

const elements = (
  <>
    <span>Info</span>
    <span>success</span>
    <span>error</span>
    <span>warning</span>
  </>
);

export const Demo: Story = {
  render: (props) => (
    <div style={{ width: "10rem" }}>
      <Stack {...props}>{elements}</Stack>
    </div>
  ),
};

export const Gap: Story = {
  render: () => (
    <Stack>
      <Stack gap="2">{elements}</Stack>
      <Stack gap="4">{elements}</Stack>
      <Stack gap="8">{elements}</Stack>
      <Stack gap="16">{elements}</Stack>
    </Stack>
  ),
};

export const Align: Story = {
  render: () => (
    <Stack>
      <Stack align="start">{elements}</Stack>
      <Stack align="center">{elements}</Stack>
      <Stack align="end">{elements}</Stack>
    </Stack>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div style={{ width: "10rem" }}>
      <Stack align="start" fullWidth>
        {elements}
      </Stack>
    </div>
  ),
};
