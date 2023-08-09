import type { ButtonProps } from "atoms/Button";
import { Button, buttonVariants } from "atoms/Button";
import { Link } from "atoms/Link";
import type { TextProps } from "atoms/Text";
import type {
  ComponentPropsWithRef,
  ForwardedRef,
  ReactElement,
  Ref,
} from "react";
import { forwardRef } from "react";
import type { IconBaseProps } from "react-icons";
import { twMerge } from "tailwind-merge";

export type IconButtonProps = ButtonProps & {
  ref?: ForwardedRef<HTMLButtonElement | null>;
  icon: ReactElement<IconBaseProps>;
  prefix?: ReactElement<TextProps>;
  suffix?: ReactElement<TextProps>;
  href?: string;
  containerProps?: ComponentPropsWithRef<"div">;
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
      <div
        {...containerProps}
        className={twMerge(
          "flex flex-row items-center justify-between gap-2",
          containerProps?.className
        )}
      >
        {prefix}
        {icon}
        {suffix}
      </div>
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
