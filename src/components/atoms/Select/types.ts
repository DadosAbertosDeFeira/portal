import type { ForwardedRef, ReactElement } from "react";

export type SelectChildrenProps = {
  label: string;
  key: string;
  getItemProps: () => Record<string, unknown>;
};

export type SelectRenderInput = (
  props: Record<string, unknown>,
  containerProps: Record<string, unknown>
) => ReactElement;

export type SelectRenderList = (
  props: Record<string, unknown>
) => ReactElement<{ children: never }>;

export type SelectProps<T> = {
  ref?: ForwardedRef<HTMLInputElement | null>;
  items: T[];
  itemToString?: T extends string ? undefined : (value: T | null) => string;
  renderInput: SelectRenderInput;
  renderList: SelectRenderList;
  children: (props: SelectChildrenProps) => ReactElement;
  selectedItem?: T;
  inputValue?: string;
  onInputChange?: (value: string) => void;
  onSelectedChange?: (value: T | null) => void;
  onMenuChange?: (isMenuOpen: boolean) => void;
};
