import React from "react";
import type { Meta } from "@storybook/react";
import { Stack } from "./index";

export default {
  component: Stack,
} as Meta<typeof Stack>;

export const Default = () => {
  return (
    <Stack>
      <span>Stack</span>
      <span>Stack2</span>
      <span>Stack3</span>
    </Stack>
  );
};
