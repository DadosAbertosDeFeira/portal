import { Image } from "atoms/Image";
import type { LinkProps } from "atoms/Link";
import { Link } from "atoms/Link";
import classNames from "classnames";
import React from "react";

import DadosAbertosDeFeira from "../../../../public/assets/logo.svg";

export type LogoProps = Partial<LinkProps> & {};

export function Logo({ className, ...props }: LogoProps) {
  return (
    <Link
      href="/"
      className={classNames(" w-full max-w-[120px] h-full relative", className)}
      {...props}
    >
      <Image fill src={DadosAbertosDeFeira} alt="Logo Dados Abertos de Feira" />
    </Link>
  );
}
