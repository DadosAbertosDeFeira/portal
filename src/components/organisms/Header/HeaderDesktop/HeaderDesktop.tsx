import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Link } from "atoms/Link";
import { Logo } from "atoms/Logo";
import React from "react";

export type HeaderDesktopProps = {};

const ListItem = ({ ...props }: BoxProps) => (
  <Box
    as="li"
    className="flex flex-row items-center justify-center"
    {...props}
  />
);

export function HeaderDesktop({ ...props }: HeaderDesktopProps) {
  return (
    <header
      className="flex h-20 flex-row flex-nowrap items-center gap-16 bg-white px-[5vw] py-3 shadow-3 tablet:px-[8vw]"
      {...props}
    >
      <Logo className="min-w-[120px]" width={120} height={120} />
      <nav className="grow">
        <ul className="flex h-full flex-row flex-nowrap gap-8 text-center text-sm font-semibold tablet:gap-14">
          <ListItem>
            <Link href="/sobre">Sobre nós</Link>
          </ListItem>
          <ListItem>
            <Link href="/contribua">Como Contribuir</Link>
          </ListItem>
          <ListItem>
            <Link href="https://dadosabertosdefeira.medium.com/">Blog</Link>
          </ListItem>
          <ListItem>
            <Link href="/analises">Análises</Link>
          </ListItem>
          <ListItem>
            <Link href="/alertas">Ative Alertas</Link>
          </ListItem>
        </ul>
      </nav>
    </header>
  );
}
