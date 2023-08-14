import type { ComponentPropsWithoutRef } from "react";

export type NeighborhoodProps = ComponentPropsWithoutRef<"div"> & {
  items: string[];
};
