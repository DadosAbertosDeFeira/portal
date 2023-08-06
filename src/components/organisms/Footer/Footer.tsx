import { Link } from "atoms/Link";
import { Text } from "atoms/Text";
import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export type FooterProps = {};

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-4 bg-primary-light p-5 tablet:relative"
      {...props}
    >
      <Text className="grow text-center font-semibold">
        @2020 Dados abertos de Feira. Todos os direitos reservados
      </Text>
      <nav className="right-8 tablet:absolute">
        <ul className="flex flex-row flex-nowrap gap-5">
          <li>
            <Link href="/" className="sr-only">
              Twitter
            </Link>
            <FiTwitter size={25} />
          </li>
          <li>
            <Link href="/" className="sr-only">
              Instagram
            </Link>
            <FiInstagram size={25} />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
