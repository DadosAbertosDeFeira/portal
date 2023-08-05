import type { ComponentPropsWithRef, ForwardedRef, ReactHTML } from "react";
import { createElement, forwardRef } from "react";

export type BoxProps = ComponentPropsWithRef<"div"> & {
  as?: keyof ReactHTML;
  ref: ForwardedRef<HTMLDivElement | null>;
};

export const Box = forwardRef(function Box(
  { as = "div", children, ...props }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return createElement(as, { ...props, ref }, children);
});
