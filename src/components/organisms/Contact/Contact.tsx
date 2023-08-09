import type { LinkProps } from "atoms/Link";
import { Link } from "atoms/Link";
import { Text } from "atoms/Text";
import { ContactForm } from "organisms/ContactForm";
import React from "react";
import type { IconType } from "react-icons";

import type { ContactProps } from "./types";

const Tag = ({ children, icon, ...props }: LinkProps & { icon: IconType }) => (
  <Link
    className="flex h-full w-full items-center justify-center gap-x-2 rounded bg-blue-100 p-1"
    {...props}
  >
    {icon({ fill: "#0063B5", size: 22 })}
    <Text className="text-xs text-primary-dark" variant="span">
      {children}
    </Text>
  </Link>
);

export function Contact({ socialMedias }: ContactProps) {
  return (
    <div className="mx-auto grid max-w-[350px] grid-cols-1 gap-3 p-2 tablet:max-w-[960px] tablet:grid-cols-2 tablet:gap-10 laptop:grid-cols-3">
      <section className="flex flex-col gap-3">
        <Text variant="h1">Contato</Text>
        <iframe
          className="border-2 border-solid border-primary-dark"
          title="Feira de Santana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124770.06894749572!2d-39.00227599729459!3d-12.243901565793168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1624460355068!5m2!1spt-BR!2sbr"
          width="100%"
          height="212px"
          allowFullScreen
          loading="lazy"
        />
      </section>
      <section className="row-start-2 text-center tablet:row-end-3 tablet:text-left laptop:col-start-2 laptop:col-end-3 laptop:row-start-1 laptop:row-end-2 laptop:self-center">
        <Text className="text-base" variant="h1">
          Feira de Santana
        </Text>
        <Link
          className="text-xs tablet:text-sm"
          href="mailto:dadosabertosdefeira+site@gmail.com"
        >
          contato@dadosabertosdefeira.com.br
        </Link>
        <ul className="my-2 grid grid-cols-2 gap-4">
          {socialMedias.map(({ icon, name, url }) => (
            <li key={name}>
              <Tag icon={icon} href={url}>
                {name}
              </Tag>
            </li>
          ))}
        </ul>
      </section>
      <div className="tablet:col-start-2 tablet:col-end-3 tablet:row-start-1 tablet:row-end-3 laptop:col-start-3 laptop:col-end-4">
        <ContactForm />
      </div>
    </div>
  );
}
