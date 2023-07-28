import type { ComponentPropsWithRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export interface BoxProps extends ComponentPropsWithRef<"div"> {}

export const Box = forwardRef(function Box(
  { children, ...props }: BoxProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
});
