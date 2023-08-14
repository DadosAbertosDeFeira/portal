import { Footer } from "organisms/Footer";
import { Header } from "organisms/Header";
import type { ReactNode } from "react";
import React from "react";

export interface LayoutProps {
  children: ReactNode;
}
// eslint-disable-next-line import/no-default-export
export function HeaderLayout({ children }: LayoutProps) {
  return (
    <div className="flex max-h-[100%] min-h-[100vh] flex-col">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}
