import type { SocialMediaType } from "@utils/social";
import { handleSocialMediaLink, lookupSocialMediaIcon } from "@utils/social";
import { Box, type BoxProps } from "atoms/Box";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import classNames from "classnames";
import React from "react";

export type SocialMediaCardProps = Omit<BoxProps, "ref"> & {
  type: SocialMediaType;
  user: string;
};

export function SocialMediaCard({
  type,
  user,
  className,
  ...props
}: SocialMediaCardProps) {
  return (
    <Box className={classNames(className, "mr-4")} {...props}>
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
