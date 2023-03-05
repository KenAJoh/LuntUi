import cl from "../utils/clsx";
import React from "react";
import "./alert.scss";

export interface AlertProps {
  children?: React.ReactNode;
  heading?: React.ReactNode;
  /**
   * @default "neutral"
   */
  status?: "positive" | "danger" | "caution" | "info" | "neutral" | "blocked";

  iconOptions?: {
    inline?: boolean;
    hidden?: boolean;
  };

  themeOptions?: {
    shape?: "soft" | "regular" | "sharp";
    space?: "tight" | "regular" | "comfy";
  };
  /**
   * HTMLSpanElement props
   */
  nativeProps?: React.HTMLAttributes<HTMLSpanElement>;
}

export const Alert = ({
  children,
  heading,
  status = "neutral",
  iconOptions,
  themeOptions,
  nativeProps,
  ...rest
}: AlertProps) => {
  const Icon = selectIcon(status);
  return (
    <div
      {...nativeProps}
      {...rest}
      className={cl("l-alert", `l-alert--${status}`, {
        "l-alert--hasheading": heading,
        "l-alert--inline": iconOptions?.inline,
      })}
      data-lunt-shape={themeOptions?.shape ?? undefined}
      data-lunt-space={themeOptions?.space ?? undefined}
    >
      <div className="l-alert__heading">
        {Icon && !iconOptions?.hidden && <Icon className="l-alert__icon" />}
        {!iconOptions?.inline && heading}
      </div>
      <div>{children}</div>
    </div>
  );
};

function selectIcon(status: string) {
  switch (status) {
    case "positive":
      return SuccessIcon;
    case "danger":
      return ErrorIcon;
    case "caution":
      return WarningIcon;
    case "info":
      return InfoIcon;
    case "neutral":
      return null;
    case "blocked":
      return BlockedIcon;
    default:
      return null;
  }
}

function InfoIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5ZM9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H12C12.4142 9.75 12.75 10.0858 12.75 10.5V15.25H13.5C13.9142 15.25 14.25 15.5858 14.25 16C14.25 16.4142 13.9142 16.75 13.5 16.75H12H10.5C10.0858 16.75 9.75 16.4142 9.75 16C9.75 15.5858 10.0858 15.25 10.5 15.25H11.25V11.25H10.5C10.0858 11.25 9.75 10.9142 9.75 10.5ZM3.25 3.5C3.25 3.08579 3.58579 2.75 4 2.75H20C20.4142 2.75 20.75 3.08579 20.75 3.5V19.5C20.75 19.9142 20.4142 20.25 20 20.25H4C3.58579 20.25 3.25 19.9142 3.25 19.5V3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SuccessIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.5725 9.48446C16.8401 9.16825 16.8007 8.69502 16.4845 8.42746C16.1683 8.1599 15.695 8.19934 15.4275 8.51554L10.454 14.3933L8.03033 11.9697C7.73744 11.6768 7.26256 11.6768 6.96967 11.9697C6.67678 12.2626 6.67678 12.7374 6.96967 13.0303L9.96967 16.0303C10.118 16.1786 10.3216 16.2581 10.5312 16.2494C10.7407 16.2406 10.9371 16.1446 11.0725 15.9845L16.5725 9.48446Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WarningIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.9989 2.25C12.272 2.25 12.5235 2.3984 12.6555 2.63743L22.1818 19.8874C22.3101 20.1198 22.306 20.4026 22.1711 20.6312C22.0363 20.8597 21.7906 21 21.5252 21H2.47266C2.20726 21 1.96162 20.8597 1.82673 20.6312C1.69185 20.4026 1.68782 20.1198 1.81612 19.8874L11.3424 2.63743C11.4744 2.3984 11.7259 2.25 11.9989 2.25ZM11.999 9.25C12.4132 9.25 12.749 9.58579 12.749 10V14C12.749 14.4142 12.4132 14.75 11.999 14.75C11.5848 14.75 11.249 14.4142 11.249 14V10C11.249 9.58579 11.5848 9.25 11.999 9.25ZM11.999 15.5C11.4467 15.5 10.999 15.9477 10.999 16.5C10.999 17.0523 11.4467 17.5 11.999 17.5C12.5513 17.5 12.999 17.0523 12.999 16.5C12.999 15.9477 12.5513 15.5 11.999 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ErrorIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.27208 2.25C8.07317 2.25 7.8824 2.32902 7.74175 2.46967L2.46967 7.74175C2.32902 7.8824 2.25 8.07317 2.25 8.27208V15.7279C2.25 15.9268 2.32902 16.1176 2.46967 16.2583L7.74175 21.5303C7.8824 21.671 8.07316 21.75 8.27208 21.75H15.7279C15.9268 21.75 16.1176 21.671 16.2583 21.5303L21.5303 16.2583C21.671 16.1176 21.75 15.9268 21.75 15.7279V8.27208C21.75 8.07317 21.671 7.8824 21.5303 7.74175L16.2583 2.46967C16.1176 2.32902 15.9268 2.25 15.7279 2.25H8.27208ZM7.96967 7.96967C8.26256 7.67678 8.73744 7.67678 9.03033 7.96967L12 10.9393L14.9697 7.96967C15.2626 7.67678 15.7374 7.67678 16.0303 7.96967C16.3232 8.26256 16.3232 8.73744 16.0303 9.03033L13.0607 12L16.0303 14.9697C16.3232 15.2626 16.3232 15.7374 16.0303 16.0303C15.7374 16.3232 15.2626 16.3232 14.9697 16.0303L12 13.0607L9.03033 16.0303C8.73744 16.3232 8.26256 16.3232 7.96967 16.0303C7.67678 15.7374 7.67678 15.2626 7.96967 14.9697L10.9393 12L7.96967 9.03033C7.67678 8.73744 7.67678 8.26256 7.96967 7.96967Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlockedIcon({ ...props }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable={false}
      aria-hidden
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.53033 7.46967C8.23744 7.17678 7.76256 7.17678 7.46967 7.46967C7.17678 7.76256 7.17678 8.23744 7.46967 8.53033L15.4697 16.5303C15.7626 16.8232 16.2374 16.8232 16.5303 16.5303C16.8232 16.2374 16.8232 15.7626 16.5303 15.4697L8.53033 7.46967Z"
        fill="currentColor"
      />
    </svg>
  );
}
