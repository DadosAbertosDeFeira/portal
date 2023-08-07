import type { BoxProps } from "atoms/Box";

type TitleSectionImgProps =
  | {
      src: string;
      alt: string;
    }
  | {
      src?: never;
      alt?: never;
    };

export type TitleSectionProps = Omit<BoxProps, "ref"> &
  TitleSectionImgProps & {
    title: string;
  };
