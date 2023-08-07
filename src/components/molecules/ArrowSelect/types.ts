import type { InputProps } from "atoms/Input";
import type { SelectProps } from "atoms/Select";
import type { ForwardedRef } from "react";

export type ArrowSelectProps = Omit<
  SelectProps<string>,
  "children" | "renderInput" | "renderList" | "itemToString" | "onMenuChange"
> &
  Omit<InputProps, "onChange"> & {
    ref: ForwardedRef<HTMLInputElement | null>;
  };
