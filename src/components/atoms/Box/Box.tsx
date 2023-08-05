import type { ComponentPropsWithRef, ForwardedRef, ReactHTML } from "react";
import { createElement, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div"> & {
  as?: keyof ReactHTML;
  ref?: ForwardedRef<HTMLDivElement | null>;
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box(
  { as = "div", children, ...props },
  ref
) {
  return createElement(as, { ...props, ref }, children);
});
