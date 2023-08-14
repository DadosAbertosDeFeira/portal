import type { ComponentPropsWithoutRef } from "react";

export type URLReferenceProps = ComponentPropsWithoutRef<"cite"> & {
  url: string;
};
