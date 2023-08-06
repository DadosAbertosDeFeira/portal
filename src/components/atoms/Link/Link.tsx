import type { ButtonVariants } from "atoms/Button";
import { buttonVariants } from "atoms/Button";
import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";
import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export type LinkProps = ComponentPropsWithRef<typeof NextLink> & {
  variant?: ButtonVariants;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, variant = "default", className, href, ...props },
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
      className={(twMerge(buttonVariants[variant]), className)}
      target={isExternalURL ? "_blank" : undefined}
      rel={isExternalURL ? "noreferrer" : undefined}
      ref={ref}
    >
      {children}
    </NextLink>
  );
});
