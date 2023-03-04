import React from "react";
import "./lunt-provider.scss";

export interface LuntProviderProps {
  children: React.ReactNode;
}

export const LuntProvider = ({ children }: LuntProviderProps) => (
  <div>{children}</div>
);
