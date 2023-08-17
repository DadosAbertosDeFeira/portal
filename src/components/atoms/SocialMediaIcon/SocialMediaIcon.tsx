import React from "react";
import type { IconType } from "react-icons";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

import type { SocialMediasType } from "@/models/SocialMediasModel";

import type { SocialMediaIconProps } from "./types";

export const Icons: Record<SocialMediasType, IconType> = {
  facebook: AiFillFacebook,
  github: AiFillGithub,
  instagram: AiFillInstagram,
  linkedin: AiFillLinkedin,
  twitter: AiFillTwitterSquare,
};

export function SocialMediaIcon({ type, ...props }: SocialMediaIconProps) {
  const Icon = Icons[type];
  return <Icon {...props} />;
}
