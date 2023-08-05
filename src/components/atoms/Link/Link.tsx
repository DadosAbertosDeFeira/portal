import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";
import { forwardRef, useMemo } from "react";

export type LinkProps = ComponentPropsWithRef<typeof NextLink> & {};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, href, ...props },
  ref
) {
  const isExternalURL = useMemo(() => {
    try {
      return new URL(href as string).origin !== window.location.origin;
    } catch (e) {
      return false;
    }
  }, [href]);

  return (
    <NextLink
      href={href}
      {...props}
      target={isExternalURL ? "_blank" : undefined}
      rel={isExternalURL ? "noreferrer" : undefined}
      ref={ref}
    >
      {children}
    </NextLink>
  );
});
