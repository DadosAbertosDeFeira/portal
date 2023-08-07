import PeoplesRight from "@assets/peoples-right.svg";
import { Button } from "atoms/Button";
import { Image } from "atoms/Image";
import { Input } from "atoms/Input";
import { Text } from "atoms/Text";
import { ArrowSelect } from "molecules/ArrowSelect";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import type { SearchDocumentForm, SearchDocumentsFormProps } from ".";

export function SearchDocumentsForm({
  title,
  suggestions,
  className,
  categories,
  onSubmit,
  ...props
}: SearchDocumentsFormProps) {
  const matches = useMediaQuery("(min-width: 1024px)");

  const form = useForm<SearchDocumentForm>({
    shouldUseNativeValidation: true,
    defaultValues: {
      category: categories[0],
      search: "",
    },
  });

  return (
    <section
      className={twMerge(
        "relative overflow-hidden bg-city-pattern bg-cover bg-no-repeat",
        className
      )}
      {...props}
    >
      <Image
        className="absolute -top-10 right-0 w-[20vw] tablet:w-[35vw] tablet:max-w-[250px]"
        alt=""
        src={PeoplesRight}
      />
      <Text
        variant="h1"
        className="relative z-10 mx-[10vw] mb-5 pt-52 text-center font-extrabold tablet:ml-[15vw] tablet:max-w-[40vw] tablet:pt-10 tablet:text-left tablet:text-lg"
      >
        {title}
      </Text>
      <form
        className="mx-[10vw] flex flex-row flex-wrap gap-3 py-3 pb-0 tablet:ml-[15vw] tablet:max-w-[40vw] tablet:p-0 laptop:max-w-[700px] laptop:flex-nowrap laptop:items-center laptop:bg-white laptop:p-2 laptop:shadow-3"
        onSubmit={onSubmit && form.handleSubmit(onSubmit)}
      >
        <Controller
          name="category"
          control={form.control}
          render={({ field }) => (
            <ArrowSelect
              containerProps={{ className: "grow" }}
              className="cursor-pointer p-2"
              items={categories}
              readOnly
              onSelectedChange={(v) => field.onChange(v)}
              variant={matches ? "default" : "outline"}
              label="Categoria"
              hideLabel
              selectedItem={field.value}
              inputValue={field.value}
              {...field}
            />
          )}
        />
        <Controller
          name="search"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <Input
              containerProps={{ className: "grow" }}
              className="p-2"
              prefix={<BiSearch size={24} />}
              variant={matches ? "default" : "outline"}
              required
              errorText={error?.message}
              label="O que você procura?"
              hideLabel
              {...field}
            />
          )}
        />
        <Button
          className="h-full w-full p-4 laptop:max-w-[180px]"
          variant="condensed"
          type="submit"
        >
          Pesquisar
        </Button>
      </form>
      {suggestions.length > 1 ? (
        <Text className="mx-[10vw] flex flex-row flex-wrap pt-2 tablet:ml-[15vw] tablet:max-w-[40vw]">
          <Text as="span" className="font-bold">
            {suggestions.length > 1 ? "Sugestões:" : "Sugestão:"}
          </Text>
          <Text className="mx-2 font-light">
            {suggestions.map(
              (suggestion, index, array) =>
                `${suggestion}${index === array.length - 1 ? "." : ", "}`
            )}
          </Text>
        </Text>
      ) : null}
    </section>
  );
}
