import cl from "../utils/clsx";
import React from "react";
import "./inline.scss";
import { cleanStyles } from "../utils/clean-styles";

export interface InlineProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /**
   * @default "4"
   */
  gap?:
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12";
  /** Makes children use full width */
  justify?:
    | "start"
    | "center"
    | "end"
    | "space-around"
    | "space-between"
    | "space-evenly";
  /**
   *
   */
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  /** */
  id?: string;
  /**
   * @default true
   */
  wrap?: boolean;
}

const justifyT = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-around": "space-around",
  "space-between": "space-between",
  "space-evenly": "space-evenly",
};

export const Inline = ({
  children,
  gap = "4",
  justify = "start",
  wrap = true,
  align,
  ...rest
}: InlineProps) => {
  const style = {
    "--lc-inline-justify": justify ? `${justifyT[justify]}` : null,
    "--lc-inline-align": align ? `${align}` : null,
    "--lc-inline-gap": `var(--l-space-${gap})`,
  } as React.CSSProperties;

  return (
    <div
      {...rest}
      style={cleanStyles(style)}
      className={cl("l-inline", {
        "l-inline--wrap": wrap,
      })}
    >
      {children}
    </div>
  );
};
