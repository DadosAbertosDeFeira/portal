import PeopleContribute from "@assets/people-contribute.svg";
import { Button } from "atoms/Button";
import { Image } from "atoms/Image";
import React from "react";

import type { NeighborhoodProps } from "./types";

export function Neighborhood({ items, ...props }: NeighborhoodProps) {
  return (
    <section className="p-3" {...props}>
      <header className="my-5 flex flex-col items-center justify-center md:flex-row">
        <h2 className="m-auto text-center text-lg font-bold md:text-xl">
          O que acontece no meu bairro?
        </h2>
      </header>

      <div className="grid grid-cols-1 items-center px-10 md:grid-cols-2">
        <Image
          className="mx-auto max-w-[280px] lg:max-w-[500px]"
          src={PeopleContribute}
          loading="lazy"
          alt="Uma mulher"
        />
        <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">
          <h3 className="text-md text-gray-2 py-4 text-center font-semibold">
            Selecione o bairro abaixo
          </h3>
          <ul className="grid auto-rows-[42px] grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-3">
            {items.map((item) => (
              <li className="h-full w-full" key={item}>
                <Button
                  className="h-full w-full bg-blue-700"
                  variant="condensed"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button
          className="mx-auto mt-5 w-full md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3"
          variant="default"
        >
          ver mais...
        </Button>
      </div>
    </section>
  );
}
