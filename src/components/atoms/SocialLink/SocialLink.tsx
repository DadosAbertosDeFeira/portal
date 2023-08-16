import { Link } from "atoms/Link";
import React from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

import type { SocialLinkProps } from "./types";

export const SocialMediaIcons = {
  facebook: FiFacebook,
  github: FiGithub,
  instagram: FiInstagram,
  linkedin: FiLinkedin,
  twitter: FiTwitter,
};

export type SocialMediaType = keyof typeof SocialMediaIcons;

export const lookupSocialMediaIcon = (type: SocialMediaType) => {
  return SocialMediaIcons[type];
};

export const handleSocialMediaLink = (
  type: SocialMediaType,
  user: string
): string => {
  switch (type) {
    case "github":
      return `https://github.com/${user}`;
    case "instagram":
      return `https://www.instagram.com/${user}`;
    case "linkedin":
      return `https://www.linkedin.com/in/${user}`;
    case "twitter":
      return `https://www.twitter.com/${user}`;
    default:
      return "";
  }
};

export function SocialLink({ type, user, ...props }: SocialLinkProps) {
  const Icon = lookupSocialMediaIcon(type);

  return (
    <Link className="block" href={handleSocialMediaLink(type, user)}>
      <Icon {...props} />
    </Link>
  );
}
