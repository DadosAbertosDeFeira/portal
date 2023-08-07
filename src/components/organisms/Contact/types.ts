import type { IconType } from "react-icons";

export type ContactSocialMedia = {
  url: string;
  icon: IconType;
  name: string;
};

export type ContactProps = {
  socialMedias: ContactSocialMedia[];
};
