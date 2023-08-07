import type React from "react";
import { createElement, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TextVariants = "h1" | "h2" | "h3" | "p" | "span";

const variants: Record<TextVariants, string> = {
  h1: "font-montserrat text-dark text-lg font-extrabold",
  h2: "",
  h3: "",
  p: "font-roboto leading-10",
  span: "font-roboto",
};

export interface TextProps extends React.HTMLProps<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
}

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = "p", className, children, ...props },
  ref
) {
  const classes = twMerge(variants[variant], className);
  return createElement(
    variant,
    { className: classes, ...props, ref },
    children
  );
});
