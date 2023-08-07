import type { BoxProps } from "atoms/Box";
import type { ReactElement } from "react";

export type MenuItemProps = Omit<BoxProps, "prefix"> & {
  prefix?: ReactElement;
  suffix?: ReactElement;
  focused?: boolean;
};
