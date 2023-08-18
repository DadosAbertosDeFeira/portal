/* eslint-disable import/no-extraneous-dependencies */
import { Link } from "atoms/Link";
import { SearchResultItem } from "molecules/SearchResultItem";
import type { SearchBarSelectItem } from "organisms/SearchBar";
import { SearchBar } from "organisms/SearchBar";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const results: any[] = [];

results.unshift({
  date: "Sessão Ordinária Coletado em 30/06/2020 00:01",
  description: `A qual determina que as Sessões Ordinárias dos dias dezesseis a trinta de junho do
  url: "https://www.feiradesantana.ba.leg.br > atas",
  corrente ano ocorrerão por meio de videoconferências no Google Meet em razão do
  aumento do número de casos da Covid-19 no municípioo, sendo que esta medida visa
  reduzir a possibilidade de contágio e salvaguardar a saúde dos funcionários, servidores e
  vereadores durante a pandemia`,
  id: 2,
  title: "Ata da 44ª Sessão Ordinária 24/06/2020",
  url: "https://diariooficial.feiradesantana.ba.gov.br/atos/executivo/1P1I3X11082023.pdf",
});

results.unshift({
  date: "Sessão Ordinária Coletado em 30/06/2020 00:01",
  description: `A qual determina que as Sessões Ordinárias dos dias dezesseis a trinta de junho do
  url: "https://www.feiradesantana.ba.leg.br > atas",
  corrente ano ocorrerão por meio de videoconferências no Google Meet em razão do
  aumento do número de casos da Covid-19 no municípioo, sendo que esta medida visa
  reduzir a possibilidade de contágio e salvaguardar a saúde dos funcionários, servidores e
  vereadores durante a pandemia`,
  id: 1,
  title: "Ata da 44ª Sessão Ordinária 24/06/2020",
  url: "https://diariooficial.feiradesantana.ba.gov.br/atos/executivo/",
});

const searchBarItems: SearchBarSelectItem[] = [
  { value: "Vereadores - Agendas", id: 1 },
  { value: "Vereadores - Atas", id: 2 },
  { value: "Vereadores - Contratos", id: 3 },
  { value: "Vereadores - Despesas", id: 4 },
  { value: "Vereadores - Licitações", id: 5 },
  { value: "Vereadores - Listas de Presença", id: 6 },
  { value: "Vereadores - Receitas", id: 7 },
  { value: "Diários Oficiais", id: 8 },
  { value: "Prefeitura - Licitações", id: 9 },
  { value: "TCM-BA - Documentos", id: 10 },
];

const Search: NextPageWithLayout = () => {
  return (
    <main className="py-10">
      <h1 className="sr-only">Resultados para a busca</h1>
      <SearchBar
        items={searchBarItems}
        onSubmit={(v) => v}
        className="mx-5 mb-5 bg-white shadow-xl md:mx-10 md:mb-10 lg:ml-[10vw] lg:max-w-[65vw]"
      />
      <article className="mx-5 flex flex-col gap-8 md:mx-10 lg:ml-[10vw] lg:max-w-[65vw]">
        {results.map((result) => (
          <SearchResultItem {...result} key={result.id} />
        ))}
        <footer>
          <p className="text-sm">
            Não encontrou o que queria? Olhe na nossa{" "}
            <Link
              className="font-bold"
              href="https://mq.dadosabertosdefeira.com.br/painel/"
            >
              base de dados
            </Link>{" "}
            ou{" "}
            <Link
              className="font-bold"
              href="dadosabertosdefeira+site@gmail.com"
            >
              mande um email
            </Link>
            .
          </p>
        </footer>
      </article>
    </main>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout
        title="Busca"
        image="https://dadosabertosdefeira.github.io/portal/assets/dadosabertosdefeira.png"
        suffix
      >
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Search;
