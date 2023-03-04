import cl from "../utils/clsx";
import React from "react";
import "./stack.scss";
import { cleanStyles } from "../utils/clean-styles";

export interface StackProps extends React.AriaAttributes {
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
  align?: "start" | "end" | "center";
  /** Makes children use full width */
  fullWidth?: boolean;
  /**
   * @default "div"
   */
  as?: "div" | "ol" | "ul" | "fieldset";
  /** */
  id?: string;
}

const alignT = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const Stack = ({
  children,
  gap = "4",
  align = "start",
  fullWidth,
  as: As = "div",
  ...rest
}: StackProps) => {
  const style = {
    "--lc-stack-align": align ? `${alignT[align]}` : null,
    "--lc-stack-gap": `var(--l-space-${gap})`,
  } as React.CSSProperties;

  return (
    <As
      {...rest}
      style={cleanStyles(style)}
      className={cl(
        "l-stack",
        fullWidth && "l-stack--full",
        As === "fieldset" && "l-stack--reset-fieldset",
        As === "ul" && "l-stack--reset-list",
        As === "ol" && "l-stack--reset-list"
      )}
    >
      {children}
    </As>
  );
};
