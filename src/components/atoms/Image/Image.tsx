import type { AnyRef } from "models/AnyRef";
import ImageNext from "next/image";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export type ImageProps = ComponentPropsWithoutRef<typeof ImageNext> & {
  ref?: AnyRef<HTMLImageElement>;
};

export const Image = forwardRef(function Image(
  { ...props }: ImageProps,
  ref: ForwardedRef<HTMLImageElement>
) {
  return <ImageNext {...props} ref={ref} />;
});
