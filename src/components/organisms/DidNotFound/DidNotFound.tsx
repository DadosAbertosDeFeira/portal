import { Link } from "atoms/Link";
import React from "react";
import { twMerge } from "tailwind-merge";

import type { DidNotFoundProps } from "./types";

export function DidNotFound({ className, ...props }: DidNotFoundProps) {
  const hrefs = [
    {
      label: "Portal da Prefeitura.",
      href: "http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=contato",
    },
    {
      label: "Camara dos Vereadores.",
      href: "https://www.transparencia.feiradesantana.ba.leg.br/index.php?view=contrato",
    },
  ];

  return (
    <section
      className={twMerge(
        "p-3 mt-3 max-w-[500px] sm:p-4 lg:p-6 sm:mt-0 flex flex-col gap-4 text-justify break-words hyphens-auto",
        className
      )}
      {...props}
    >
      <h2 className="my-3 text-left">Não encontrou o que queria?</h2>
      <p>
        Se você quer acompanhar a administração pública e ter acesso às
        informações registradas, pode fazer um pedido de informação. Esse
        direito é garantido por lei e pode ser exercido por qualquer cidadão.
        Para entender como funciona o processo, recomendamos a leitura do nosso
        artigo:{" "}
        <Link
          className="font-black hover:underline"
          href="https://medium.com/@dadosabertosdefeira/como-realizar-um-pedido-de-informa%C3%A7%C3%A3o-35b3cf4e5dbd"
        >
          Como realizar um pedido de informação pública
        </Link>
        , onde você encontrará informações detalhadas sobre o assunto e poderá
        acompanhar a administração pública de forma mais efetiva.
      </p>
      <h3 className="my-1">Links úteis:</h3>
      <nav>
        <ul className="flex flex-col gap-y-2">
          {hrefs.map(({ label, href }) => {
            return (
              <li key={href}>
                <Link className="underline" href={href}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
