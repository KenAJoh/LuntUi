import React from "react";
import type { Meta } from "@storybook/react";
import { Stack } from "./index";

export default {
  title: "Layout/Stack",
  component: Stack,
  argTypes: {
    align: {
      control: {
        type: "radio",
        options: ["start", "end", "center"],
      },
    },
  },
} as Meta<typeof Stack>;

const elements = (
  <>
    <span>Info</span>
    <span>success</span>
    <span>error</span>
    <span>warning</span>
  </>
);

export const Default = (props) => (
  <div style={{ width: "10rem" }}>
    <Stack {...props}>{elements}</Stack>
  </div>
);

Default.args = {
  spacing: "4",
  fullWidth: false,
};

export const Spacing = () => (
  <Stack>
    <Stack spacing="1">{elements}</Stack>
    <Stack spacing="2">{elements}</Stack>
    <Stack spacing="3">{elements}</Stack>
    <Stack spacing="4">{elements}</Stack>
  </Stack>
);

export const align = () => (
  <Stack>
    <Stack align="start">{elements}</Stack>
    <Stack align="center">{elements}</Stack>
    <Stack align="end">{elements}</Stack>
  </Stack>
);

export const fullWidth = () => (
  <div style={{ width: "10rem" }}>
    <Stack align="start" fullWidth>
      {elements}
    </Stack>
  </div>
);
