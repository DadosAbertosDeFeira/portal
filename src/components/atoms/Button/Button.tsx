import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonProps, ButtonVariants } from "./types";

export const buttonVariants: Record<ButtonVariants, string> = {
  condensed: "bg-primary-dark text-white",
  "condensed-rounded": "bg-primary-dark text-white rounded-full",
  default: "",
  outline: "border border-primary-dark text-primary-dark",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant = "default", type = "button", className, ...props },
    ref
  ) {
    return (
      <button
        className={twMerge(
          "font-semibold p-3 rounded transition ease-in-out flex justify-center items-center",
          buttonVariants[variant],
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
