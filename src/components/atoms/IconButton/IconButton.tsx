import { Button, type ButtonProps } from "atoms/Button";
import { Image } from "atoms/Image";
import { Link, type LinkProps } from "atoms/Link";
import { Text } from "atoms/Text";
import type { StaticImageData } from "next/image";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";

type IconButtonAsLink = Omit<LinkProps, "as"> & {
  as: "link";
};

type IconButtonAsButton = Omit<ButtonProps, "as"> & {
  as?: "button";
};

export type IconButtonProps = (IconButtonAsLink | IconButtonAsButton) & {
  icon: string | StaticImageData;
  label: string;
};

type HTMLButtonOrLinkElement = HTMLButtonElement | HTMLLinkElement;

export const IconButton = forwardRef<HTMLButtonOrLinkElement, IconButtonProps>(
  function IconButton(props: IconButtonProps, ref) {
    const { icon, label } = props;

    const children = (
      <>
        <Image src={icon} alt={label} />
        <Text className="text-sm text-primary-dark">{label}</Text>
      </>
    );

    if (props.as === "link") {
      return (
        <Link {...props} ref={ref as ForwardedRef<HTMLAnchorElement>}>
          {children}
        </Link>
      );
    }

    return (
      <Button {...props} ref={ref as ForwardedRef<HTMLButtonElement>}>
        {children}
      </Button>
    );
  }
);
