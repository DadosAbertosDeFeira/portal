import IconProject from "@assets/icons/icon-projects.svg";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

import type { ProjectsProps } from "./types";

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <TitleSection
      className="p-2 lg:px-20"
      title="Projetos"
      src={IconProject}
      alt=""
    >
      <ul className="grid auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] items-center justify-items-center gap-8 md:grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))]">
        {projects.map(({ name, description, link, type, logo }) => (
          <li className="h-full w-full" key={name}>
            <Link className="h-full w-full" href={link}>
              <section className="relative flex h-full w-full flex-row gap-2 overflow-hidden rounded shadow-lg">
                <Image
                  className="hidden h-[140px] max-h-[140px] min-h-[140px] w-[140px] min-w-[140px] max-w-[140px] object-cover md:block"
                  src={logo.path}
                  alt={logo.description}
                />
                <div className="mt-2 flex h-full flex-col gap-2 p-2">
                  <h3 className="pr-12 text-base">{name}</h3>
                  <p className="overflow-hidden text-xs leading-tight">
                    {description}
                  </p>
                  <ul className="mb-2 flex grow flex-row flex-wrap items-end gap-1 text-xs">
                    {type.map((item) => (
                      <li
                        className="shrink rounded bg-gray-50 p-1 capitalize text-gray-400"
                        key={item}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="absolute right-1 top-1 flex flex-row flex-nowrap items-center gap-1 text-sm text-blue-400">
                    Link
                    <BiLinkExternal fill="#3793df" />
                  </p>
                </div>
              </section>
            </Link>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
};
