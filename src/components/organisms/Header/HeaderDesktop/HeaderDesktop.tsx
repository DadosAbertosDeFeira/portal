import { Link } from "atoms/Link";
import { Logo } from "atoms/Logo";
import React from "react";

import type { HeaderDesktopProps } from "./types";

export function HeaderDesktop({ anchors, ...props }: HeaderDesktopProps) {
  return (
    <header
      className="z-10 flex flex-row flex-nowrap items-center gap-14 bg-white px-[5vw] py-2 shadow-xl md:px-[12vw]"
      {...props}
    >
      <Logo className="min-w-[120px]" width={120} height={120} />
      <nav className="grow">
        <ul className="flex h-full flex-row flex-nowrap gap-6 text-center text-sm font-semibold md:gap-14">
          {anchors.map(({ href, label }) => (
            <li
              className="flex flex-row items-center justify-center "
              key={label}
            >
              <Link className="text-md font-heading font-bold" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
