import type { ComponentPropsWithRef } from "react";
import type { SubmitHandler, UseFormProps } from "react-hook-form";

export type FilterSearchForm = {
  search: string;
};

export type FilterSearchProps = ComponentPropsWithRef<"form"> & {
  onSubmit?: SubmitHandler<FilterSearchForm>;
  formOptions?: Partial<UseFormProps<FilterSearchForm>>;
};
