import React from "react";
import "./lunt-provider.css";

export interface LuntproviderProps {
  children: React.ReactNode;
}

export const Luntprovider = ({ children }: LuntproviderProps) => <div>{children}</div>;
