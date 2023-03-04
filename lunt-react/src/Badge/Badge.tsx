import cl from "../utils/clsx";
import React from "react";
import "./badge.scss";

export interface BadgeProps extends React.AriaAttributes {
  children?: React.ReactNode;
}

export const Badge = ({ children, ...rest }: BadgeProps) => {
  return (
    <span {...rest} className={cl("l-badge")}>
      {children}
    </span>
  );
};
