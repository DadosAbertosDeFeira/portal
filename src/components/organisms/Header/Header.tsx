import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Logo } from "atoms/Logo";
import { Drawer } from "molecules/Drawer";
import { SandwichMenu } from "molecules/SandwichMenu";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

import { HeaderAnchors } from "./HeaderAnchors";
import { HeaderMenu } from "./HeaderMenu";

export type HeaderProps = BoxProps & {};

export function Header(props: HeaderProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const sandwichRef = useRef<HTMLButtonElement | null>(null);
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    root.current = document.body;
  }, [root]);

  const [isOpen, setOpen] = useState(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useOnClickOutside(drawerRef, (event) => {
    const target = event.target as HTMLElement;
    const sandwich = sandwichRef.current;
    if (sandwich === null) return;

    if (!sandwich.contains(target)) setOpen(false);
  });

  const headerContent = useMemo(() => {
    if (matches) return <HeaderAnchors />;
    return (
      <SandwichMenu
        ref={sandwichRef}
        isOpen={isOpen}
        onClick={() => setOpen((oldState) => !oldState)}
      />
    );
  }, [matches, isOpen]);

  return (
    <Box
      className="fixed inset-x-0 top-0 z-20 flex h-[10vh] max-h-[80px] min-h-[60px] flex-row gap-3 bg-white px-6 shadow"
      {...props}
    >
      <Box className="flex w-[150px] grow items-center justify-center md:mr-10 md:w-[15vw] md:grow-0 md:justify-end">
        <Logo className="w-[150px]" />
      </Box>
      {headerContent}
      {root.current &&
        createPortal(
          <Drawer ref={drawerRef} isOpen={isOpen}>
            <HeaderMenu closeMenu={() => setOpen(false)} />
          </Drawer>,
          root.current
        )}
    </Box>
  );
}
