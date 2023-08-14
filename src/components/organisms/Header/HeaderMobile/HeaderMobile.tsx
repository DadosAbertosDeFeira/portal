import { Button } from "atoms/Button";
import { Link } from "atoms/Link";
import { Logo } from "atoms/Logo";
import { MenuItem } from "atoms/MenuItem";
import { Drawer } from "molecules/Drawer";
import { useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";

import type { HeaderMobileProps } from "./types";

export function HeaderMobile({ anchors }: HeaderMobileProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const sandwichRef = useRef<HTMLButtonElement | null>(null);

  useOnClickOutside(drawerRef, (event) => {
    const target = event.target as HTMLElement;
    const sandwich = sandwichRef.current;
    /* istanbul ignore if */
    if (sandwich === null) return;

    if (!sandwich.contains(target)) setMenuOpen(false);
  });

  return (
    <header className="flex h-16 items-center  bg-white p-3">
      <div className="flex h-full w-full items-center justify-between">
        <Button
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          data-testid="drawer-open-button"
          ref={sandwichRef}
        >
          <BiMenu
            fill="#0063B5"
            className={twMerge(
              "transition-all duration-150",
              isMenuOpen ? "rotate-[-90deg]" : "rotate-0"
            )}
            size={26}
          />
        </Button>
        <Logo className="min-w-[80px]" width={100} height={100} />
        <Drawer ref={drawerRef} isOpen={isMenuOpen}>
          <nav className="h-[100vh] bg-waved-banner bg-contain bg-no-repeat">
            <ul className="flex flex-col pt-16 font-bold">
              {anchors.map(({ href, label }) => {
                return (
                  <MenuItem key={label}>
                    <Link href={href}>{label}</Link>
                  </MenuItem>
                );
              })}
            </ul>
          </nav>
        </Drawer>
        <div />
      </div>
    </header>
  );
}
