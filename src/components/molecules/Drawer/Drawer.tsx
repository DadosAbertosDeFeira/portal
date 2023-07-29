import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import classNames from "classnames";
import React, { forwardRef } from "react";

export interface DrawerProps extends BoxProps {
  isOpen: boolean;
  direction?: "left" | "right";
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(function Drawer(
  { isOpen, direction = "left", children, ...props },
  ref
) {
  const directions = {
    left: {
      closed: "left-[-70vw]",
      open: "left-0",
    },

    right: {
      closed: "right-[-70vw]",
      open: "right-0",
    },
  };

  return (
    <Box
      className={classNames(
        directions[direction][isOpen ? "open" : "closed"],
        "z-50 border-red fixed w-[70vw] max-w-[325px] min-w-[280px] inset-y-0 bg-white transition-all duration-300 ease-in-out shadow-3"
      )}
      ref={ref}
      {...props}
    >
      {children}
    </Box>
  );
});
