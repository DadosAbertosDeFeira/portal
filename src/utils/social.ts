import Github from "@assets/icons/github.svg";
import Instagram from "@assets/icons/instagram.svg";
import LinkedIn from "@assets/icons/linkedin.svg";
import Twitter from "@assets/icons/twitter.svg";

export const SocialMediaIcons = {
  github: Github,
  instagram: Instagram,
  linkedin: LinkedIn,
  twitter: Twitter,
};

export type SocialMediaType = keyof typeof SocialMediaIcons;

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

export const lookupSocialMediaIcon = (type: SocialMediaType) => {
  return SocialMediaIcons[type];
};
