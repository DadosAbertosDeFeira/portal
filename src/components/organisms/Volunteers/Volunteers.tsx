import Hand from "@assets/icons/hand-with-hearth.svg";
import type { SocialMediaType } from "@utils/social";
import { Image } from "atoms/Image";
import { SocialMediaCard } from "molecules/SocialMediaCard";
import { TitleSection } from "molecules/TitleSection";
import React from "react";

import type { VolunteersProps } from "./types";

export function Volunteers({ volunteers }: VolunteersProps) {
  return (
    <TitleSection
      src={Hand}
      className="p-2 md:px-10"
      alt="Mão com um coração"
      title="Voluntários"
    >
      <ul className="grid auto-rows-[115px] grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] items-center justify-items-center gap-8">
        {volunteers.map(({ name, picture, role, ...medias }) => (
          <li
            className="flex h-full w-full rounded-[4px] border-t-[3px] border-solid border-blue-500 p-4 shadow-lg"
            key={name}
          >
            <Image
              src={picture}
              alt={name}
              width={70}
              height={70}
              className="mr-4 h-[70px] w-[70px] self-center rounded-[50%] bg-white"
            />
            <div className="flex flex-col justify-between gap-2 overflow-hidden">
              <h3 className="font-normal leading-tight text-black">{name}</h3>
              <p className="text-md truncate leading-tight text-blue-500">
                {role}
              </p>
              <ul className="flex flex-row items-center gap-x-1">
                {Object.entries(medias).map(([key, value]) => {
                  return (
                    <SocialMediaCard
                      key={key}
                      type={key as SocialMediaType}
                      user={value}
                    />
                  );
                })}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
}
