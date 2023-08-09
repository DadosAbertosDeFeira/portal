import type { ComponentPropsWithoutRef } from "react";

type TitleSectionImgProps =
  | {
      src: string;
      alt: string;
    }
  | {
      src?: never;
      alt?: never;
    };

export type TitleSectionProps = ComponentPropsWithoutRef<"div"> &
  TitleSectionImgProps & {
    title: string;
  };
