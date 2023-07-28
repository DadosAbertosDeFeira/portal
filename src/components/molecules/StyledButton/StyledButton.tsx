import type { ButtonProps } from "atoms/Button";
import { Button } from "atoms/Button";
import classNames from "classnames";
import React, { forwardRef } from "react";

export interface StyledButtonProps extends ButtonProps {
  variant?: "outline" | "condensed";
}

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  function StyledButton(
    { type = "button", variant, className, children, ...props },
    ref
  ) {
    return (
      <Button
        type={type}
        className={classNames(
          "font-semibold p-3 rounded transition ease-in-out flex justify-center items-center",
          variant === "outline" &&
            "border border-primary-dark text-primary-dark",
          variant === "condensed" && "bg-primary-dark text-white",
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
