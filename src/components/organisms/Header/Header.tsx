import React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import type { HeaderMenuItem } from "./types";

export function Header() {
  const anchors: HeaderMenuItem[] = [
    {
      href: "/sobre",
      label: "Sobre",
    },
    {
      href: "/contribua",
      label: "Contribua",
    },
    {
      href: "https://dadosabertosdefeira.medium.com/",
      label: "Blog",
    },
    {
      href: "https://anchor.fm/cidadesabertas/",
      label: "Podcast",
    },
  ];

  const matches = useMediaQuery("(min-width: 900px)");

  if (matches) return <HeaderDesktop anchors={anchors} />;
  return <HeaderMobile anchors={anchors} />;
}
