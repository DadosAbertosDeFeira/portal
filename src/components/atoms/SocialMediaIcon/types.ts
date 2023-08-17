import type { SocialMediaType } from "@utils/social";
import type { IconBaseProps } from "react-icons";

export type SocialMediaIconProps = IconBaseProps & {
  type: SocialMediaType;
};
