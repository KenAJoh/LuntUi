import cl from "../utils/clsx";
import React from "react";
import "./badge.scss";

export interface BadgeProps {
  children?: React.ReactNode;
  /**
   * @default "neutral"
   */
  theme?:
    | "positive"
    | "danger"
    | "caution"
    | "info"
    | "neutral"
    | "purple"
    | "turquoise"
    | "clay";

  themeOptions?: {
    shape?: "soft" | "regular" | "sharp";
    space?: "tight" | "regular" | "comfy";
  };
  /**
   * HTMLSpanElement props
   */
  nativeProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const Badge = ({
  children,
  theme,
  themeOptions,
  nativeProps,
  ...rest
}: BadgeProps) => {
  return (
    <span
      {...nativeProps}
      {...rest}
      className={cl("l-badge", `l-badge--${theme}`)}
      data-lunt-shape={themeOptions?.shape ?? undefined}
      data-lunt-space={themeOptions?.space ?? undefined}
    >
      {children}
    </span>
  );
};
