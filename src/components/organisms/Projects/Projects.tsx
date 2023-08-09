import IconProject from "@assets/icons/icon-projects.svg";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { Text } from "atoms/Text";
import { TitleSection } from "molecules/TitleSection";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import type { ProjectsProps } from "./types";

export const Projects = ({ projects = [] }: ProjectsProps) => {
  return (
    <TitleSection title="Projetos" src={IconProject} alt="">
      <ul className="grid auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] items-center justify-items-center gap-8 p-5 tablet:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))]">
        {projects.map(({ name, description, link, type, logo }) => (
          <li className="h-full w-full" key={name}>
            <section className="relative flex h-full w-full flex-row gap-2 overflow-hidden rounded shadow-3">
              <Image
                className="hidden object-cover tablet:block"
                src={logo.path}
                alt={logo.description}
              />
              <div className="mt-2 flex h-full flex-col gap-2 p-2">
                <Text variant="h1" className="text-base">
                  {name}
                </Text>
                <Text className="overflow-hidden text-sm leading-tight">
                  {description}
                </Text>
                <ul className="mb-2 flex grow flex-row flex-wrap items-end gap-1 text-xs">
                  {type.map((item) => (
                    <li
                      className="shrink rounded bg-gray-50 p-1 capitalize text-gray-700"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={link}
                  className="absolute right-1 top-1 flex flex-row flex-nowrap items-center gap-1 text-sm"
                >
                  Link
                  <BiLinkExternal fill="#3793df" />
                </Link>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
};
