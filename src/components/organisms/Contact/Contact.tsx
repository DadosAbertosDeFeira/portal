import { Link } from "atoms/Link";
import { ContactForm } from "organisms/ContactForm";
import React from "react";

import type { ContactProps } from "./types";

export function Contact({ socialMedias }: ContactProps) {
  return (
    <div className="mx-auto grid max-w-[350px] grid-cols-1 gap-3 px-3 sm:max-w-[1100px] sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
      <section className="flex flex-col gap-3">
        <h2>Contato</h2>
        <iframe
          className="border-2 border-solid border-blue-300"
          title="Feira de Santana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124770.06894749572!2d-39.00227599729459!3d-12.243901565793168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1624460355068!5m2!1spt-BR!2sbr"
          width="100%"
          height="212px"
          allowFullScreen
          loading="lazy"
        />
      </section>
      <section className="row-start-2 text-center sm:row-end-3 sm:px-[5vw] sm:text-left md:px-0 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:self-center">
        <h2 className="text-base">Feira de Santana</h2>
        <Link
          className="text-xs font-light sm:text-sm"
          href="mailto:dadosabertosdefeira+site@gmail.com"
        >
          contato@dadosabertosdefeira.com.br
        </Link>
        <ul className="my-2 grid grid-cols-2 gap-4">
          {socialMedias.map(({ icon, name, url }) => (
            <li key={name}>
              <Link
                className="flex h-full w-full items-center justify-center gap-x-2 rounded bg-blue-200 p-1 text-blue-400"
                href={url}
              >
                {icon({ fill: "#0063B5", size: 22 })}
                <span className="text-xs text-blue-900">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3 lg:col-start-3 lg:col-end-4">
        <ContactForm />
      </div>
    </div>
  );
}
