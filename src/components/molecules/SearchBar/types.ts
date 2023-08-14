import type { ComponentPropsWithoutRef } from "react";

export type SearchBarSelectItem = {
  value: string;
  id: string | number;
};

export type SearchBarSubmitHandler = (params: {
  selectValue: SearchBarSelectItem;
  inputValue: string;
}) => void;

export type SearchBarProps = Omit<
  ComponentPropsWithoutRef<"form">,
  "onSubmit"
> & {
  items: SearchBarSelectItem[];
  onSubmit: SearchBarSubmitHandler;
};
