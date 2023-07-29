import ImageNext from "next/image";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export type ImageProps = ComponentPropsWithoutRef<typeof ImageNext> & {
  ref?: ForwardedRef<HTMLImageElement>;
};

export const Image = forwardRef(function Image(
  { ...props }: ImageProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  return <ImageNext {...props} ref={ref} />;
});
