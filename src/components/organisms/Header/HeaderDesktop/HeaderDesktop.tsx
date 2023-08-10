import { Link } from "atoms/Link";
import { Logo } from "atoms/Logo";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";

import type { HeaderDesktopProps } from "./types";

const ListItem = ({ ...props }: ComponentPropsWithoutRef<"li">) => (
  <li className="flex flex-row items-center justify-center" {...props} />
);

export function HeaderDesktop({ anchors, ...props }: HeaderDesktopProps) {
  return (
    <header
      className="flex h-20 flex-row flex-nowrap items-center gap-16 bg-white px-[5vw] py-3 shadow-3 tablet:px-[8vw]"
      {...props}
    >
      <Logo className="min-w-[120px]" width={120} height={120} />
      <nav className="grow">
        <ul className="flex h-full flex-row flex-nowrap gap-8 text-center text-sm font-semibold tablet:gap-14">
          {Object.entries(anchors).map(([key, { href, label }]) => (
            <ListItem key={key}>
              <Link href={href}>{label}</Link>
            </ListItem>
          ))}
        </ul>
      </nav>
    </header>
  );
}
