import type { AnchorsType } from "@utils/anchors";
import React from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";

export type HeaderProps = {
  anchors: AnchorsType;
};

export function Header({ anchors }: HeaderProps) {
  const matches = useMediaQuery("(min-width: 900px)");

  if (matches) return <HeaderDesktop />;
  return <HeaderMobile anchors={anchors} />;
}
