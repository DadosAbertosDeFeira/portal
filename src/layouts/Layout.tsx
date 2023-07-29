import { Header } from "organisms/Header";
import type { ReactNode } from "react";
import React from "react";

import SEO from "../components/SEO";

export interface LayoutProps {
  children: ReactNode;
}
// eslint-disable-next-line import/no-default-export
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <SEO
        title="Dados Abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        shouldExcludeTitleSuffix
      />
      {children}
    </>
  );
}
