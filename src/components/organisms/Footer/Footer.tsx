import { Link } from "atoms/Link";
import React from "react";
import { FiInstagram, FiTwitter } from "react-icons/fi";

export type FooterProps = {};

export function Footer({ ...props }: FooterProps) {
  return (
    <footer
      className="flex flex-col items-center justify-center gap-4 bg-[#DBE6EF] p-5 text-gray-900 md:relative"
      {...props}
    >
      <p className="grow text-center font-medium">
        © {new Date().getFullYear()} Dados abertos de Feira. Todos os direitos
        reservados
      </p>
      <nav className="right-8 md:absolute">
        <ul className="flex flex-row flex-nowrap gap-5">
          <li>
            <Link href="https://twitter.com/DadosDeFeira">
              <span className="sr-only">Twitter</span>
              <FiTwitter size={25} />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dadosabertosdefeira/">
              <span className="sr-only">Instagram </span>
              <FiInstagram size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
