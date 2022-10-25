import cl from "clsx";
import React from "react";
import "./stack.css";

export interface StackProps {
  children: React.ReactNode;
  /**
   * @default "4"
   */
  spacing?:
    | "32"
    | "24"
    | "20"
    | "18"
    | "16"
    | "14"
    | "12"
    | "11"
    | "10"
    | "9"
    | "8"
    | "7"
    | "6"
    | "5"
    | "4"
    | "3"
    | "2"
    | "1";
  /** Makes children use full width */
  align?: "start" | "end" | "center";
  /** Makes children use full width */
  fullWidth?: boolean;
}

const alignT = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const Stack = ({
  children,
  spacing = "4",
  align = "start",
  fullWidth,
}: StackProps) => {
  const style = {
    "--lc-stack-align": align ? `${alignT[align]}` : "",
    "--lc-stack-spacing": `var(--l-space-${spacing})`,
  } as React.CSSProperties;

  return (
    <div style={style} className={cl("l-stack", fullWidth && "l-stack--full")}>
      {children}
    </div>
  );
};
