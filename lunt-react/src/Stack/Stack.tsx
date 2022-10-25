import React from "react";
import "./stack.css";

export interface StackProps {
  children: React.ReactNode;
}

export const Stack = ({ children }: StackProps) => {
  return <div className="l-stack">{children}</div>;
};
