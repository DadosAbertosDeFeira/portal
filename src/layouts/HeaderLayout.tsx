import { Header } from "organisms/Header";
import type { ReactNode } from "react";
import React from "react";

export interface LayoutProps {
  children: ReactNode;
}
// eslint-disable-next-line import/no-default-export
export function HeaderLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
