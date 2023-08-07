import type { ComponentPropsWithRef } from "react";

export type InputVariants = "outline" | "default" | "shadowed";

export type InputProps = Omit<ComponentPropsWithRef<"input">, "prefix"> & {
  name: string;
  label: string;
  suffix?: React.ReactElement;
  hideLabel?: boolean;
  prefix?: React.ReactElement | false;
  errorText?: string;
  variant?: InputVariants;
  containerProps?: ComponentPropsWithRef<"label">;
  helperText?: string;
  filled?: boolean;
};
