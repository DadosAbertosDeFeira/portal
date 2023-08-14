import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuProps } from "./types";

export const Menu = forwardRef<HTMLUListElement, MenuProps>(function Menu(
  { children, className, ...props },
  ref
) {
  return (
    <ul
      {...props}
      className={twMerge(
        "shadow-3 flex flex-col flex-nowrap rounded-sm border bg-white",
        className
      )}
      ref={ref}
    >
      {children}
    </ul>
  );
});
