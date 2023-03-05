import React from "react";
import "./decorator.css";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="themed-decorator__tag">{children}</span>
);

export const Themed = (Story: any) => (
  <div className="themed-decorator">
    <div data-lunt-shape="sharp">
      <Tag>shape: sharp</Tag>
      <Story />
    </div>
    <div data-lunt-shape="regular">
      <Tag>shape: regular</Tag>
      <Story />
    </div>
    <div data-lunt-shape="soft">
      <Tag>shape: soft</Tag>
      <Story />
    </div>
    <div data-lunt-space="tight">
      <Tag>space: tight</Tag>
      <Story />
    </div>
    <div data-lunt-space="regular">
      <Tag>space: regular</Tag>
      <Story />
    </div>
    <div data-lunt-space="comfy">
      <Tag>space: comfy</Tag>
      <Story />
    </div>
    <div data-lunt-theme="lunt-dark" data-dark="true">
      <Tag>theme: dark</Tag>
      <Story />
    </div>
  </div>
);
