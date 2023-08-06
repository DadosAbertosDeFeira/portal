import type { ComponentPropsWithRef } from "react";

export type ButtonVariants =
  | "outline"
  | "condensed"
  | "default"
  | "condensed-rounded";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant?: ButtonVariants;
};
