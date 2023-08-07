import PeopleRight from "@assets/peoples-right.svg";
import { Image } from "atoms/Image";
import { Text } from "atoms/Text";
import React from "react";
import { twMerge } from "tailwind-merge";

import type { SearchDocumentsProps } from "./types";

export function SearchDocuments({
  searchForm,
  searchSuggestions = [],
  className,
}: SearchDocumentsProps) {
  return (
    <section
      className={twMerge(
        "relative flex flex-col gap-4 p-3 tablet:pl-10 tablet:pt-10 bg-city-pattern bg-cover bg-no-repeat",
        className
      )}
    >
      <Image
        className="absolute -top-10 right-0 -z-10 w-[135px] tablet:w-[37.5vw] desktop:w-[300px]"
        alt=""
        src={PeopleRight}
      />
      <Text
        variant="h1"
        className="mr-[15vw] text-center font-black tablet:text-left tablet:text-[40px] tablet:leading-[1.25em] laptop:text-[50px] laptop:leading-[68.2px]"
      >
        Transparência nas Informações de Feira de Santana
      </Text>
      {searchForm}
      {searchSuggestions.length >= 1 ? (
        <Text className="flex flex-row flex-nowrap text-sm">
          <Text variant="span" className="font-bold">
            {searchSuggestions.length > 1 ? "Sugestões:" : "Sugestão:"}
          </Text>
          <Text variant="span" className="mx-2 font-light">
            {searchSuggestions.map(
              (suggestion, index, array) =>
                `${suggestion}${index === array.length - 1 ? "." : ", "}`
            )}
          </Text>
        </Text>
      ) : null}
    </section>
  );
}
