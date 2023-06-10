import classNames from "classnames";
import React, {
  type ComponentPropsWithRef,
  type ForwardedRef,
  forwardRef,
} from "react";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "outline" | "condensed";
}

export const Button = forwardRef(function Button(
  { type = "button", variant, className, children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      type={type}
      className={classNames(
        "font-semibold p-3 rounded transition ease-in-out flex justify-center items-center",
        variant === "outline" && "border border-primary-dark text-primary-dark",
        variant === "condensed" && "bg-primary-dark text-white",
        className
      )}
      {...props}
      ref={ref}
    >
      {children}
    </button>
  );
});
