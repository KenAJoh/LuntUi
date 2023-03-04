import React from "react";
import { LuntProvider } from "../src/index";
import "../src/styles/themes/lunt.css";
import "../src/styles/themes/lunt-dark.css";

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
    <LuntProvider data-lunt-theme="lunt">
      <Story />
    </LuntProvider>
  ),
];
