import type { InputProps } from "atoms/Input";

export type SearchBarProps = Omit<InputProps, "onSubmit"> & {
  onSubmit?: (value: string) => void;
  onClear?: () => void;
};
