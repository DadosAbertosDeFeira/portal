import { Input } from "atoms/Input";
import { ArrowSelect } from "molecules/ArrowSelect";
import React, { useRef } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import type { FilterSearchForm } from "./types";
import { type FilterSearchProps } from "./types";

export function FilterSearch({
  onSubmit,
  formOptions,
  categoryItems = [],
  className,
  ...props
}: FilterSearchProps) {
  const ref = useRef<HTMLFormElement>(null);
  const form = useForm<FilterSearchForm>(formOptions);

  const handleSubmit: SubmitHandler<FilterSearchForm> = (...params) => {
    if (onSubmit) onSubmit(...params);
  };

  return (
    <form
      ref={ref}
      {...props}
      className={twMerge(
        "flex flex-col flex-nowrap gap-3 tablet:flex-wrap",
        className
      )}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Controller
        name="category"
        defaultValue=""
        control={form.control}
        render={({ field }) => (
          <ArrowSelect
            containerProps={{ className: "grow" }}
            className="p-1"
            variant="shadowed"
            items={categoryItems}
            onSelectedChange={(selectedItem) => field.onChange(selectedItem)}
            label="Selecione Seção"
            hideLabel
            {...field}
          />
        )}
      />
      <Controller
        name="search"
        defaultValue=""
        control={form.control}
        rules={{ required: "Não é possível pesquisar com esse campo vazio." }}
        render={({ field, fieldState }) => (
          <Input
            containerProps={{ className: "grow" }}
            className="p-1"
            variant="shadowed"
            label="Digite sua busca aqui"
            hideLabel
            suffix={
              <BiSearch
                onClick={() => ref?.current?.requestSubmit()}
                size={24}
                fill="#0063B5"
              />
            }
            errorText={fieldState.error?.message}
            {...field}
          />
        )}
      />
    </form>
  );
}
