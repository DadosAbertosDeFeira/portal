import type { StaticImageData } from "next/image";
import ImageNext from "next/image";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type ImageProps = ComponentPropsWithRef<typeof ImageNext> & {
  alt: string;
  src: string | StaticImageData;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { src, ...props },
  ref
) {
  if (typeof src === "string") {
    return <ImageNext width={50} height={50} src={src} {...props} ref={ref} />;
  }

  return <ImageNext src={src} {...props} ref={ref} />;
});
