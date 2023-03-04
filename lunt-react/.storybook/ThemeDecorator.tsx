import React from "react";
import "./decorator.css";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="themed-decorator__tag">{children}</span>
);

export const Themed = (Story: any) => (
  <div className="themed-decorator">
    <div data-lunt-feel="sharp">
      <Story />
      <Tag>sharp</Tag>
    </div>
    <div data-lunt-feel="regular">
      <Story />
      <Tag>regular</Tag>
    </div>
    <div data-lunt-feel="soft">
      <Story />
      <Tag>soft</Tag>
    </div>
    <div data-lunt-space="tight">
      <Story />
      <Tag>tight</Tag>
    </div>
    <div data-lunt-space="regular">
      <Story />
      <Tag>regular</Tag>
    </div>
    <div data-lunt-space="comfy">
      <Story />
      <Tag>comfy</Tag>
    </div>
    <div data-lunt-theme="lunt-dark" data-dark="true">
      <Story />
      <Tag>dark</Tag>
    </div>
  </div>
);
