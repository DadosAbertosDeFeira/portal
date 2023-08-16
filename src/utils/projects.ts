import type { StaticImageData } from "next/image";

export type Project = {
  name: string;
  type: string[];
  description: string;
  link: string;
  img: {
    src: string | StaticImageData | null;
    alt: string;
  };
};
