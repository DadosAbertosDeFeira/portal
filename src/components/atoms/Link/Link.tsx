import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type LinkProps = ComponentPropsWithRef<typeof NextLink> & {};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, ...props },
  ref
) {
  return (
    <NextLink {...props} ref={ref}>
      {children}
    </NextLink>
  );
});
