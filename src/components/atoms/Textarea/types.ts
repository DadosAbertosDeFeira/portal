import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

export type TextareaProps = ComponentPropsWithRef<"textarea"> & {
  name: string;
  label: string;
  hideLabel?: boolean;
  errorText?: string;
  containerProps?: ComponentPropsWithoutRef<"label">;
  helperText?: string;
  filled?: boolean;
};
