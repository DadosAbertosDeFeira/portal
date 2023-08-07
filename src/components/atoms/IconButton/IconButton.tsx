import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Button, type ButtonProps, buttonVariants } from "atoms/Button";
import { Link } from "atoms/Link";
import type { TextProps } from "atoms/Text";
import type { ForwardedRef, ReactElement, Ref } from "react";
import { forwardRef } from "react";
import type { IconBaseProps } from "react-icons";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = Omit<ButtonProps, "ref" | "prefix"> & {
  ref?: ForwardedRef<HTMLButtonElement | null>;
  icon: ReactElement<IconBaseProps>;
  prefix?: ReactElement<TextProps>;
  suffix?: ReactElement<TextProps>;
  href?: string;
  containerProps?: BoxProps;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      prefix,
      suffix,
      className,
      variant = "default",
      icon,
      href,
      containerProps,
      ...props
    },
    ref
  ) {
    const children = (
      <Box
        {...containerProps}
        className={twMerge(
          "flex flex-row items-center justify-between gap-2",
          containerProps?.className
        )}
      >
        {prefix}
        {icon}
        {suffix}
      </Box>
    );

    if (typeof href === "string") {
      return (
        <Link
          className={twMerge(
            "font-semibold p-3 rounded transition ease-in-out flex justify-center items-center w-min",
            className,
            buttonVariants[variant]
          )}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <Button variant={variant} className={className} {...props} ref={ref}>
        {children}
      </Button>
    );
  }
);