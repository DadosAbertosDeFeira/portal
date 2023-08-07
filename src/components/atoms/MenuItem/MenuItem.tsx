import { Box } from "atoms/Box";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuItemProps } from "./types";

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(
    { focused = false, prefix, suffix, children, className, ...props },
    ref
  ) {
    return (
      <Box
        as="li"
        className={twMerge(
          "flex flex-row flex-nowrap gap-2 items-center justify-between p-3 cursor-pointer hover:bg-primary-light",
          focused && "outline outline-1 outline-primary",
          className
        )}
        {...props}
        tabIndex={0}
        ref={ref}
      >
        {prefix}
        <Box className="grow">{children}</Box>
        {suffix}
      </Box>
    );
  }
);
