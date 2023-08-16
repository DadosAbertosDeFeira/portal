import type { ComponentPropsWithoutRef } from "react";

import type { Supporter } from "@/models/SupportersModel";

export interface SupportersModel {
  financial: Supporter[];
  institutional: Supporter[];
  regular: Supporter[];
}

export type SupportersProps = ComponentPropsWithoutRef<"div"> & {
  supporters: SupportersModel;
};
