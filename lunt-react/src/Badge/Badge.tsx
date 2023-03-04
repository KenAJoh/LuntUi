import cl from "../utils/clsx";
import React from "react";
import "./badge.scss";

export interface BadgeProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /**
   * @default "neutral"
   */
  theme?: "positive" | "danger" | "caution" | "info" | "neutral";
}

export const Badge = ({ children, theme, ...rest }: BadgeProps) => {
  return (
    <span {...rest} className={cl("l-badge", `l-badge--${theme}`)}>
      {children}
    </span>
  );
};
