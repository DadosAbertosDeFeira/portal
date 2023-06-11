import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type ButtonProps = ComponentPropsWithRef<"button"> & {};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, type = "button", ...props }, ref) {
    return (
      <button type={type} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);
