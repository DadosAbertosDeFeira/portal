import type { ButtonVariants } from "atoms/Button";
import { buttonVariants } from "atoms/Button";
import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";
import { forwardRef, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export type LinkProps = ComponentPropsWithRef<typeof NextLink> & {
  variant?: ButtonVariants;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { children, variant = "default", className, href, ...props },
  ref
) {
  const [isExternalURL, setExternalURL] = useState(false);

  useEffect(() => {
    try {
      const url = new URL(href as string);
      if (window) {
        setExternalURL(url.origin !== window.location.origin);
      }
    } catch (e) {
      setExternalURL(false);
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
