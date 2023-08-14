import type { ComponentPropsWithRef } from "react";

export type InputVariants = "outline" | "default" | "shadowed";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "prefix"> & {
  label?: string;
  suffix?: React.ReactElement;
  hideLabel?: boolean;
  prefix?: React.ReactElement | false;
  errorText?: string;
  variant?: InputVariants;
  containerProps?: ComponentPropsWithRef<"div">;
  labelProps?: ComponentPropsWithRef<"label">;
  helperText?: string;
  filled?: boolean;
};
