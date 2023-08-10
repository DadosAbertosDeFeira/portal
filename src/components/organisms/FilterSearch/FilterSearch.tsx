import { Button } from "atoms/Button";
import { Input } from "atoms/Input";
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
        "flex flex-row items-center flex-nowrap gap-3 bg-white p-2",
        className
      )}
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <Controller
        name="search"
        defaultValue=""
        control={form.control}
        rules={{ required: "Não é possível pesquisar com esse campo vazio." }}
        render={({ field }) => (
          <Input
            containerProps={{ className: "grow" }}
            className="p-1"
            label="Digite sua busca aqui"
            hideLabel
            prefix={<BiSearch fill="#3793DF" size={24} />}
            {...field}
          />
        )}
      />
      <Button type="submit" variant="condensed">
        Pesquisar
      </Button>
    </form>
  );
}
