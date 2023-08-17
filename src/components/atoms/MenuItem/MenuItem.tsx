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
          "flex flex-row flex-nowrap gap-2 items-center justify-between p-3 cursor-pointer hover:bg-gray-100",
          focused &&
            "[&:not(&:hover)]:outline [&:not(&:hover)]:outline-1 [&:not(&:hover)]:outline-blue-400 transition-[50ms]",
          className
        )}
        {...props}
        ref={ref}
      >
        {prefix}
        <div className="grow">{children}</div>
        {suffix}
      </li>
    );
  }
);
