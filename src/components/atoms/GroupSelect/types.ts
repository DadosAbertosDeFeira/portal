import type { BoxProps } from "atoms/Box";
import type { ForwardedRef, ReactElement } from "react";

export type GroupSelectChildrenProps = {
  label: string;
  key: string;
  getItemProps: () => Record<string, unknown>;
};

export type GroupSelectRenderInput = (
  props: Record<string, unknown>,
  containerProps: Record<string, unknown>
) => ReactElement;

export type GroupSelectRenderList = (
  props: Record<string, unknown>
) => ReactElement<{ children: never }>;

export type GroupSelectItemType<T> = {
  title: string;
  options: Array<T>;
};

export type GroupSelectRenderItemProps = {
  label: string;
  key: string;
  [k: string]: unknown;
};

export type GroupSelectProps<T> = BoxProps & {
  items: GroupSelectItemType<T>[];
  ref?: ForwardedRef<HTMLInputElement | null>;
  itemToString?: T extends string ? undefined : (value: T | null) => string;
  renderInput: GroupSelectRenderInput;
  renderSectionHeader: (title: string) => ReactElement;
  renderItem: (props: GroupSelectRenderItemProps) => ReactElement;
  renderList: GroupSelectRenderList;
  selectedItem?: T;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  onSelectedChange?: (value: T | null) => void;
  onMenuChange?: (isMenuOpen: boolean) => void;
};
