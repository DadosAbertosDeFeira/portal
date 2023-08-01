import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonProps, ButtonVariants } from "./types";

const variants: Record<ButtonVariants, string> = {
  outline: "border border-primary-dark text-primary-dark",
  condensed: "bg-primary-dark text-white",
  default: "",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant, type = "button", className, ...props },
    ref
  ) {
    return (
      <button
        className={twMerge(
          "font-semibold p-3 rounded transition ease-in-out flex justify-center items-center",
          variants[variant],
          className
        )}
        type={type}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
