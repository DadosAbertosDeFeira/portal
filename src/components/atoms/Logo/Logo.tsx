import LogoSVG from "@assets/logo.svg";
import SmallLogoSVG from "@assets/smallLogo.svg";
import { Image } from "atoms/Image";
import type { LinkProps } from "atoms/Link";
import { Link } from "atoms/Link";
import React from "react";

export type LogoProps = Partial<LinkProps> & {
  width?: number;
  height?: number;
  small?: boolean;
};

export function Logo({
  className,
  width = 50,
  height = 50,
  small = false,
  ...props
}: LogoProps) {
  return (
    <Link href="/" className={className} {...props}>
      {small ? (
        <Image
          width={width * 0.5}
          height={height * 0.5}
          src={SmallLogoSVG}
          alt="Logo Dados Abertos de Feira"
        />
      ) : (
        <Image
          width={width}
          height={height}
          src={LogoSVG}
          alt="Logo Dados Abertos de Feira"
        />
      )}
    </Link>
  );
}
