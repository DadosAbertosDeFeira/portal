import React from "react";

import { SupporterSection } from "../../molecules/SupporterSection";
import type { SupportersProps } from "./types";

export function Supporters({ supporters }: SupportersProps) {
  return (
    <div className="flex flex-col flex-nowrap gap-20">
      <SupporterSection
        supporters={supporters.financial}
        title="Financiamento e Prêmios"
      />
      <SupporterSection
        supporters={supporters.institutional}
        title="Apoio Institucional"
      />
      <SupporterSection supporters={supporters.regular} title="Apoio" />
    </div>
  );
}
