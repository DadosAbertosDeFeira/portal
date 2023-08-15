import type { SocialMediaType } from "@utils/social";
import { handleSocialMediaLink, lookupSocialMediaIcon } from "@utils/social";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import type { ComponentPropsWithoutRef } from "react";
import React from "react";

export type SocialMediaCardProps = ComponentPropsWithoutRef<"div"> & {
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
    <div className={className} {...props}>
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
    </div>
  );
}
