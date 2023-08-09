import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import type { MenuItemProps } from "./types";

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  function MenuItem(
    { focused = false, prefix, suffix, children, className, ...props },
    ref
  ) {
    return (
      <li
        className={twMerge(
          "flex flex-row flex-nowrap gap-2 items-center justify-between p-3 cursor-pointer hover:bg-primary-light",
          focused && "outline outline-1 outline-primary",
          className
        )}
        {...props}
        ref={ref}
      >
        {prefix}
        <li className="grow">{children}</li>
        {suffix}
      </li>
    );
  }
);
