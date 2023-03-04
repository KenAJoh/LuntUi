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
      <Stack gap="12">{elements}</Stack>
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

const elements = (
  <>
    <Placeholder />
    <Placeholder />
    <Placeholder />
    <Placeholder />
  </>
);

function Placeholder({ ...props }) {
  return (
    <div
      {...props}
      style={{ width: "4rem", height: "2rem", background: "lightblue" }}
    />
  );
}
