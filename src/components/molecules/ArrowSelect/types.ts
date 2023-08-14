import type { InputProps } from "atoms/Input";
import type { SelectProps } from "atoms/Select";

export type ArrowSelectProps<T> = Omit<InputProps, "value"> &
  Omit<SelectProps<T>, "children" | "renderInput" | "renderList"> & {};
