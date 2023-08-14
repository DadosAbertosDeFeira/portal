import { Button } from "atoms/Button";
import { Input } from "atoms/Input";
import type { ArrowSelectProps } from "molecules/ArrowSelect";
import dynamic from "next/dynamic";
import type { FormEventHandler } from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import type { SearchBarProps, SearchBarSelectItem } from "./types";

const ArrowSelect = dynamic<ArrowSelectProps<SearchBarSelectItem>>(
  () => import("molecules/ArrowSelect").then((module) => module.ArrowSelect),
  { ssr: false }
);

export function SearchBar({
  className,
  items,
  onSubmit,
  ...props
}: SearchBarProps) {
  const [selectInputValue, setSelectInputValue] = useState<string | undefined>(
    ""
  );

  const [selectedValue, setSelectedValue] = useState<
    SearchBarSelectItem | undefined | null
  >(null);

  const [inputValue, setInputValue] = useState<string>("");

  const matches = useMediaQuery("(min-width: 576px)");

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    if (!selectedValue || !inputValue) return;

    if (onSubmit) onSubmit({ selectValue: selectedValue, inputValue });
  };

  return (
    <form
      {...props}
      className={twMerge(
        className,
        "flex flex-col flex-nowrap p-2 gap-2 sm:flex-row"
      )}
    >
      <ArrowSelect
        itemToString={(item) => item?.value ?? ""}
        inputValue={selectInputValue}
        onInputChange={(value) => setSelectInputValue(value)}
        onSelectedChange={(value) => setSelectedValue(value)}
        selectedItem={selectedValue}
        items={items}
      />
      <Input
        label="Pesquisa"
        name="search"
        value={inputValue}
        onChange={({ target: { value } }) => setInputValue(value)}
        placeholder="Digite sua pesquisa"
        containerProps={{ className: "w-full" }}
        prefix={!matches && <BiSearch fill="blue" />}
        hideLabel
      />
      <Button
        type="submit"
        className="w-full px-5 sm:max-w-[100px]"
        variant="condensed"
        onClick={handleSubmit}
      >
        Pesquisar
      </Button>
    </form>
  );
}
