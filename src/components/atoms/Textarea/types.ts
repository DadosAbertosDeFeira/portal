import type { InputVariants } from "atoms/Input";
import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";

export type TextareaProps = ComponentPropsWithRef<"textarea"> & {
  label?: string;
  hideLabel?: boolean;
  errorText?: string;
  variant?: InputVariants;
  containerProps?: ComponentPropsWithoutRef<"div">;
  labelProps?: ComponentPropsWithoutRef<"label">;
  helperText?: string;
  filled?: boolean;
};
