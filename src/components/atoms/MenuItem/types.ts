import type { ComponentPropsWithRef, ReactElement } from "react";

export type MenuItemProps = Omit<ComponentPropsWithRef<"li">, "prefix"> & {
  prefix?: ReactElement;
  suffix?: ReactElement;
  focused?: boolean;
};
