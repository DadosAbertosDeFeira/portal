import HandWithHeart from "@assets/icons/hand-with-hearth.svg";
import type { SocialMediaType } from "@utils/social";
import type { Volunteer } from "@utils/volunteers";
import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Headline } from "atoms/Headline";
import { Image } from "atoms/Image";
import { Text } from "atoms/Text";
import { SocialMediaCard } from "molecules/SocialMediaCard";
import React, { useMemo } from "react";

export type VolunteerShowcaseProps = BoxProps & {
  volunteers: Volunteer[];
};

export function VolunteerShowcase({
  volunteers = [],
  ...props
}: VolunteerShowcaseProps) {
  const sortedVolunteers = useMemo(() => {
    return volunteers.sort((person1, person2) => {
      return person1.name.localeCompare(person2.name);
    });
  }, [volunteers]);

  return (
    <Box className="text-sm" {...props}>
      <Box className="flex flex-col items-center">
        <Image
          className="max-h-[100px] max-w-[100px]"
          src={HandWithHeart}
          alt="Livro"
        />
        <Headline as="h2" className="m-lg tablet:m-xl">
          Voluntários
        </Headline>
      </Box>
      <Box className="mt-12 flex flex-wrap justify-center gap-4">
        {sortedVolunteers.map(({ picture, name, role, ...medias }) => (
          <Box
            key={name}
            className="flex w-full min-w-[288px] max-w-[390px] flex-row rounded-[4px] border-t-[3px] border-solid border-primary-dark bg-gray-lightest p-4 shadow"
          >
            <Image
              src={picture}
              alt={name}
              width={70}
              height={70}
              className="mr-4 rounded-[50%] bg-white"
            />
            <div className="ga-y-2 flex flex-col justify-between gap-y-2">
              <div className="flex flex-col">
                <Text className="">{name}</Text>
                <Text className="mt-[0.1rem] text-primary-dark">{role}</Text>
              </div>
              <div className="flex flex-row items-center gap-x-1">
                {Object.entries(medias).map(([key, value]) => {
                  if (value === undefined) return null;
                  return (
                    <SocialMediaCard
                      key={key}
                      type={key as SocialMediaType}
                      user={value}
                    />
                  );
                })}
              </div>
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
