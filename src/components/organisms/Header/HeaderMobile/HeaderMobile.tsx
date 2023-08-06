import type { AnchorsType } from "@utils/anchors";
import { Box } from "atoms/Box";
import { IconButton } from "atoms/IconButton";
import { Link } from "atoms/Link";
import { Logo } from "atoms/Logo";
import { MenuItem } from "atoms/MenuItem";
import { Drawer } from "molecules/Drawer";
import { SearchBar } from "molecules/SearchBar";
import { useRef, useState } from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";

export type HeaderMobileProps = {
  anchors: AnchorsType;
};

export function HeaderMobile({ anchors }: HeaderMobileProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const drawerRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const sandwichRef = useRef<HTMLButtonElement | null>(null);

  const handleOpenSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchRef.current?.focus());
  };

  useOnClickOutside(drawerRef, (event) => {
    const target = event.target as HTMLElement;
    const sandwich = sandwichRef.current;
    if (sandwich === null) return;

    if (!sandwich.contains(target)) setMenuOpen(false);
  });

  return (
    <header className="flex h-16 items-center  bg-white p-3">
      {isSearchOpen ? (
        <Box className="flex h-full w-full items-center justify-between gap-1">
          <Logo small className="min-w-[50px]" width={80} height={80} />
          <SearchBar
            ref={searchRef}
            className="grow"
            label="Digite aqui a sua busca"
            hideLabel
            onBlur={() => setSearchOpen(false)}
            name="search"
          />
        </Box>
      ) : (
        <Box className="flex h-full w-full items-center justify-between">
          <IconButton
            ref={sandwichRef}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            icon={
              <BiMenu
                fill="#0063B5"
                className={twMerge(
                  "transition-all duration-150",
                  isMenuOpen ? "rotate-[-90deg]" : "rotate-0"
                )}
                size={26}
              />
            }
          />
          <Logo className="min-w-[80px]" width={100} height={100} />
          <IconButton
            icon={
              <BiSearch onClick={handleOpenSearch} fill="#0063B5" size={26} />
            }
          />
          <Drawer ref={drawerRef} isOpen={isMenuOpen}>
            <nav className="h-[100vh] bg-waved-banner bg-contain bg-no-repeat">
              <ul className="flex flex-col pt-16 font-bold">
                {Object.entries(anchors).map(([key, { href, label }]) => {
                  return (
                    <MenuItem key={key}>
                      <Link href={href}>{label}</Link>
                    </MenuItem>
                  );
                })}
              </ul>
            </nav>
          </Drawer>
        </Box>
      )}
    </header>
  );
}
