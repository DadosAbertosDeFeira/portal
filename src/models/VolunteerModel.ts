import type { SocialMediasType } from "./SocialMediasModel";

export type VolunteerModel = {
  name: string;
  role: string;
  picture: string;
  medias: Partial<Record<SocialMediasType, string>>;
};
