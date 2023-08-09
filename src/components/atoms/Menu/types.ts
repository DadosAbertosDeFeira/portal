import type { ComponentPropsWithRef, ReactElement } from "react";

export type MenuProps = ComponentPropsWithRef<"div"> & {
  header?: ReactElement;
  footer?: ReactElement;
  hideList?: boolean;
};
