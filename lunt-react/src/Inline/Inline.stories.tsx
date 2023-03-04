import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Inline } from "./index";

const meta: Meta<typeof Inline> = {
  title: "Layout/Inline",
  component: Inline,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Inline>;

export const Demo: Story = {
  render: (props) => (
    <div>
      <Inline {...props}>{elements}</Inline>
    </div>
  ),
};

export const Gap: Story = {
  render: () => (
    <div>
      <Inline gap="2">{elements}</Inline>
      <Inline gap="4">{elements}</Inline>
      <Inline gap="8">{elements}</Inline>
      <Inline gap="12">{elements}</Inline>
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
    <div>
      <Inline justify="start">{elements}</Inline>
      <Inline justify="center">{elements}</Inline>
      <Inline justify="end">{elements}</Inline>
      <Inline justify="space-around">{elements}</Inline>
      <Inline justify="space-between">{elements}</Inline>
      <Inline justify="space-evenly">{elements}</Inline>
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
      style={{ width: "2rem", height: "2rem", background: "lightblue" }}
    />
  );
}
