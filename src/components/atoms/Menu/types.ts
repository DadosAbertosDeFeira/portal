import type { BoxProps } from "atoms/Box";
import type { ForwardedRef, ReactElement } from "react";

export type MenuProps = BoxProps & {
  ref?: ForwardedRef<HTMLDivElement | null>;
  header?: ReactElement;
  footer?: ReactElement;
  hideList?: boolean;
};
