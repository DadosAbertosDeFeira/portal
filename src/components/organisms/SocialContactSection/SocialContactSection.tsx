import type { SocialMediaType } from "@utils/social";
import { lookupSocialMediaIcon } from "@utils/social";
import { IconButton } from "atoms/IconButton";
import { Text } from "atoms/Text";
import React from "react";

const medias = {
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
};

export function SocialContactSection() {
  return (
    <section className="mt-md grid auto-cols-auto grid-flow-col grid-cols-2 grid-rows-2 gap-md self-center tablet:self-start">
      {Object.entries(medias).map(([key, value]) => {
        return (
          <IconButton
            key={key}
            className="pa-md flex h-xl w-4xl items-center justify-center space-x-sm rounded bg-blue-100 px-sm capitalize"
            href={value}
            icon={lookupSocialMediaIcon(key as SocialMediaType)}
            suffix={<Text>{key}</Text>}
          />
        );
      })}
    </section>
  );
}
