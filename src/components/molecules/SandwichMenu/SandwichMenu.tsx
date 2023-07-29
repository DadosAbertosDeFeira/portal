import { Button, type ButtonProps } from "atoms/Button";
import classNames from "classnames";
import React, { forwardRef } from "react";
import { BiMenu } from "react-icons/bi";

export interface SandwichMenuProps extends ButtonProps {
  isOpen: boolean;
}

export const SandwichMenu = forwardRef<HTMLButtonElement, SandwichMenuProps>(
  function SandwichMenu({ isOpen, className, ...props }, ref) {
    return (
      <Button
        {...props}
        aria-label="Menu"
        type="button"
        className={classNames(
          "transition-all duration-150",
          isOpen ? "rotate-[-90deg]" : "rotate-0",
          className
        )}
        ref={ref}
      >
        <BiMenu size={24} />
      </Button>
    );
  }
);
