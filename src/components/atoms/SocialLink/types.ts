import type { SocialMediaType } from "@utils/social";
import type { ComponentPropsWithRef } from "react";

export type SocialLinkProps = ComponentPropsWithRef<"svg"> & {
  type: SocialMediaType;
  user: string;
};
