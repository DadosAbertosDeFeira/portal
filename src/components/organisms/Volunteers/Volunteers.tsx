import Hand from "@assets/icons/hand-with-hearth.svg";
import type { SocialMediaType } from "@utils/social";
import { Box } from "atoms/Box";
import { Image } from "atoms/Image";
import { Text } from "atoms/Text";
import { SocialMediaCard } from "molecules/SocialMediaCard";
import { TitleSection } from "molecules/TitleSection";
import React from "react";

import type { VolunteersProps } from "./types";

export function Volunteers({ volunteers, ...props }: VolunteersProps) {
  return (
    <Box {...props}>
      <TitleSection
        as="ul"
        src={Hand}
        alt=""
        className="grid auto-rows-[115px] grid-cols-[repeat(auto-fill,_minmax(288px,_1fr))] items-center justify-items-center gap-8 p-5"
        title="Voluntários"
      >
        {volunteers.map(({ name, picture, role, ...medias }) => (
          <li
            className="flex h-full w-full rounded-[4px] border-t-[3px] border-solid border-primary-dark bg-gray-lightest p-4 shadow"
            key={name}
          >
            <Image
              src={picture}
              alt={name}
              width={70}
              height={70}
              className="mr-4 rounded-[50%] bg-white"
            />
            <div className="flex flex-col justify-between gap-2 overflow-hidden">
              <Text className="leading-tight">{name}</Text>
              <Text className="text-sm leading-tight text-primary-dark">
                {role}
              </Text>
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
      </TitleSection>
    </Box>
  );
}
