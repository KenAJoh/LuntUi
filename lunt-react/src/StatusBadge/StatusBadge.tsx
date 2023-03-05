import cl from "../utils/clsx";
import React from "react";
import "./statusbadge.scss";

export interface StatusBadgeProps {
  children?: React.ReactNode;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /**
   * @default false
   */
  pulse?: boolean;
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

export const StatusBadge = ({
  children,
  theme,
  themeOptions,
  nativeProps,
  position,
  pulse = false,
  ...rest
}: StatusBadgeProps) => {
  return (
    <span
      {...nativeProps}
      {...rest}
      className={cl("l-statusbadge", `l-statusbadge--${theme}`, {
        [`l-statusbadge--${position}`]: !!position,
        "l-statusbadge--pulse": pulse,
        "l-statusbadge--haschild": !!children,
      })}
      data-lunt-shape={themeOptions?.shape ?? undefined}
      data-lunt-space={themeOptions?.space ?? undefined}
    >
      {children}
    </span>
  );
};
