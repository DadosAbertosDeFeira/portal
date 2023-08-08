import { Link } from "atoms/Link";
import { Text } from "atoms/Text";
import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export type FooterProps = {};

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-4 bg-[#DBE6EF] p-5 text-gray-dark tablet:relative"
      {...props}
    >
      <Text className="grow text-center font-medium">
        @2020 Dados abertos de Feira. Todos os direitos reservados
      </Text>
      <nav className="right-8 tablet:absolute">
        <ul className="flex flex-row flex-nowrap gap-5">
          <li>
            <Link href="https://twitter.com/DadosDeFeira">
              <Text className="sr-only" as="span">
                Twitter
              </Text>
              <FiTwitter size={25} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dadosabertosdefeira/">
              <Text className="sr-only" as="span">
                Instagram{" "}
              </Text>
              <FiInstagram size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
