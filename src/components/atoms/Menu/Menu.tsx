import { Box } from "atoms/Box";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuProps } from "./types";

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, header, footer, hideList, ...props },
  ref
) {
  return (
    <Box
      className="flex flex-col flex-nowrap rounded-sm border bg-white shadow-3"
      {...props}
      ref={ref}
    >
      {header}
      <Box
        className={twMerge(
          "flex flex-col flex-nowrap",
          hideList && "h-0 max-h-0 overflow-hidden"
        )}
        as="ul"
      >
        {children}
      </Box>
      {footer}
    </Box>
  );
});
