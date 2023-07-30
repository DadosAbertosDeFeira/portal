import ImageNext from "next/image";
import type { ComponentPropsWithRef, ForwardedRef } from "react";
import { forwardRef } from "react";

export type ImageProps = ComponentPropsWithRef<typeof ImageNext> & {
  ref: ForwardedRef<HTMLImageElement | null>;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(function Image(
  { ...props },
  ref
) {
  return <ImageNext {...props} ref={ref} />;
});
