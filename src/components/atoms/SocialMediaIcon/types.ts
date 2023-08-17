import type { SocialMediaType } from "@utils/social";
import type { ComponentPropsWithRef } from "react";

export type SocialMediaIconProps = ComponentPropsWithRef<"svg"> & {
  type: SocialMediaType;
};
