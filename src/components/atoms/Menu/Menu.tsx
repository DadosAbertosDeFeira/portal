import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuProps } from "./types";

export const Menu = forwardRef<HTMLDivElement, MenuProps>(function Menu(
  { children, header, footer, hideList, ...props },
  ref
) {
  return (
    <div
      className="flex flex-col flex-nowrap rounded-sm border bg-white shadow-3"
      {...props}
      ref={ref}
    >
      {header}
      <ul
        className={twMerge(
          "flex flex-col flex-nowrap",
          hideList && "h-0 max-h-0 overflow-hidden"
        )}
      >
        {children}
      </ul>
      {footer}
    </div>
  );
});
