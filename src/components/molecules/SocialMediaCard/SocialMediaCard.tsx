import type { SocialMediaType } from "@utils/social";
import { handleSocialMediaLink, lookupSocialMediaIcon } from "@utils/social";
import { Box, type BoxProps } from "atoms/Box";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import React from "react";

export type SocialMediaCardProps = BoxProps & {
  type: SocialMediaType;
  user: string;
};

export function SocialMediaCard({
  type,
  user,
  ...props
}: SocialMediaCardProps) {
  return (
    <Box className="mr-4" {...props}>
      <Link
        href={handleSocialMediaLink(type, user)}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={20}
          height={20}
          src={lookupSocialMediaIcon(type)}
          alt={`${type} icon`}
        />
      </Link>
    </Box>
  );
}
