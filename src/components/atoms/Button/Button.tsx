import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { ButtonProps, ButtonVariants } from "./types";

export const buttonVariants: Record<ButtonVariants, string> = {
  condensed: "bg-blue-500 text-white",
  "condensed-rounded": "bg-blue-500 text-white rounded-full",
  default: "text-blue-500 active:bg-blue-100/10",
  outline: "border border-blue-500 text-blue-500",
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
