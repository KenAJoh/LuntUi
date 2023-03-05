import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Themed } from "../../.storybook/ThemeDecorator";

import { Alert } from "./index";
import { Inline } from "../Inline";

const meta: Meta<typeof Alert> = {
  title: "Notification/Alert",
  component: Alert,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, eligendi alias
quidem in voluptas eveniet facere similique officia officiis vero
repellendus quo placeat.`;

export const Demo: Story = {
  render: () => (
    <Inline>
      <Alert status="neutral">{lorem}</Alert>
      <Alert status="info">{lorem}</Alert>
      <Alert status="positive">{lorem}</Alert>
      <Alert status="caution">{lorem}</Alert>
      <Alert status="danger">{lorem}</Alert>
      <Alert status="blocked">{lorem}</Alert>
      <Alert status="info" heading="Lorem ipsum dolor sit amet">
        {lorem}
      </Alert>
      <Alert status="neutral" heading="Lorem ipsum dolor sit amet">
        {lorem}
      </Alert>
      <Alert status="info">{lorem}</Alert>
      <Alert status="info" iconOptions={{ inline: true }}>
        {lorem}
      </Alert>
      <Alert status="neutral" themeOptions={{ elevated: "sm" }}>
        {lorem}
      </Alert>
      <Alert status="neutral" themeOptions={{ elevated: "md" }}>
        {lorem}
      </Alert>
      <Alert status="neutral" themeOptions={{ elevated: "lg" }}>
        {lorem}
      </Alert>
    </Inline>
  ),
  decorators: [Themed],
};
