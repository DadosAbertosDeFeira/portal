import type { ComponentPropsWithRef } from "react";

export type ButtonVariants = "outline" | "condensed" | "default";

export type ButtonProps = ComponentPropsWithRef<"button"> & {
  variant: ButtonVariants;
};
