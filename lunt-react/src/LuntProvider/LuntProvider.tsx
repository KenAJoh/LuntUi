import React from "react";
import "./lunt-provider.scss";

export interface LuntProviderProps {
  children: React.ReactNode;
}

export const LuntProvider = ({ children, ...rest }: LuntProviderProps) => (
  <div {...rest}>{children}</div>
);
