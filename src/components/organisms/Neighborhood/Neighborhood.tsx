import PeopleContribute from "@assets/people-contribute.svg";
import { Box, type BoxProps } from "atoms/Box";
import { Button } from "atoms/Button";
import { Image } from "atoms/Image";
import { Text } from "atoms/Text";
import React from "react";

export type NeighborhoodProps = Omit<BoxProps, "ref"> & {
  items: string[];
};

export function Neighborhood({ items, ...props }: NeighborhoodProps) {
  return (
    <section className="p-3" {...props}>
      <header className="my-5 flex flex-col items-center justify-center tablet:flex-row">
        <Text
          variant="h2"
          className="m-auto text-center text-lg font-bold tablet:text-xl"
        >
          O que acontece no meu bairro?
        </Text>
      </header>

      <Box className="grid grid-cols-1 items-center px-10 tablet:grid-cols-2">
        <Image
          className="mx-auto max-w-[280px] laptop:max-w-[500px]"
          src={PeopleContribute}
          alt=""
        />
        <Box className="tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-2">
          <Text className="text-md py-4 text-center font-semibold text-gray-2">
            Selecione o bairro abaixo
          </Text>
          <ul className="grid auto-rows-[42px] grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-3">
            {items.map((item) => (
              <li className="h-full w-full" key={item}>
                <Button
                  className="h-full w-full bg-[#3793DF]"
                  variant="condensed"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </Box>
        <Button
          className="mx-auto mt-5 w-full tablet:col-start-2 tablet:col-end-3 tablet:row-start-2 tablet:row-end-3"
          variant="default"
        >
          ver mais...
        </Button>
      </Box>
    </section>
  );
}
