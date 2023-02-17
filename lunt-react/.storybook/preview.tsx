import React from "react";
import { LuntProvider } from "../src/index";

export const parameters = {
  backgrounds: {
    default: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story: any) => (
    <LuntProvider>
      <Story />
    </LuntProvider>
  ),
];
