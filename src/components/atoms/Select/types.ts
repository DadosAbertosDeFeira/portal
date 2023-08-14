import type { ForwardedRef, ReactElement } from "react";

export type SelectChildrenProps = {
  label: string;
  key: string;
  focused: boolean;
  getItemProps: () => Record<string, unknown>;
};

export type SelectStateProps = {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

export type SelectRenderList = (
  props: Record<string, unknown>
) => ReactElement<{ children: never }>;

export type SelectProps<T> = {
  ref?: ForwardedRef<HTMLInputElement | null>;
  items: T[];
  itemToString?: (value: T | null) => string;
  renderInput?: (
    params: {
      getInputProps: () => Record<string, unknown>;
      getLabelProps: () => Record<string, unknown>;
      getToggleButtonProps: () => Record<string, unknown>;
    },
    state: { isOpen: boolean }
  ) => ReactElement;
  renderList?: SelectRenderList;
  children: (props: SelectChildrenProps) => ReactElement;
  selectedItem?: T | null;
  inputValue?: string;
  onInputChange?: (value: string | undefined) => void;
  onSelectedChange?: (value: undefined | T | null) => void;
  onMenuChange?: (isMenuOpen: boolean) => void;
};
