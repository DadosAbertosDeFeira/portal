/* eslint-disable import/no-extraneous-dependencies */
import { faker } from "@faker-js/faker";
import { Text } from "atoms/Text";
import { SearchResultItem } from "molecules/SearchResultItem";
import { useRouter } from "next/router";
import type { FilterSearchForm } from "organisms/FilterSearch";
import { FilterSearch } from "organisms/FilterSearch";
import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const results = Array.from(Array(10).keys()).map(() => {
  return {
    date: "Sessão Ordinária Coletado em 30/06/2020 00:01",
    description: faker.lorem.paragraph(),
    id: faker.string.uuid(),
    title: faker.company.buzzPhrase(),
    url: faker.internet.url(),
  };
});

results.unshift({
  date: "Sessão Ordinária Coletado em 30/06/2020 00:01",
  description: `A qual determina que as Sessões Ordinárias dos dias dezesseis a trinta de junho do
  url: "https://www.feiradesantana.ba.leg.br > atas",
  corrente ano ocorrerão por meio de videoconferências no Google Meet em razão do
  aumento do número de casos da Covid-19 no municípioo, sendo que esta medida visa
  reduzir a possibilidade de contágio e salvaguardar a saúde dos funcionários, servidores e
  vereadores durante a pandemia`,
  id: "h",
  title: "Ata da 44ª Sessão Ordinária 24/06/2020",
  url: faker.internet.url(),
});

const Search: NextPageWithLayout = () => {
  const router = useRouter();

  const categoryItems = [
    "Vereadores - Agendas",
    "Vereadores - Atas",
    "Vereadores - Contratos",
    "Vereadores - Despesas",
    "Vereadores - Licitações",
    "Vereadores - Listas de Presença",
    "Vereadores - Receitas",
    "Diários Oficiais",
    "Prefeitura - Licitações",
    "TCM-BA - Documentos",
  ];

  const handleSubmit: SubmitHandler<any> = (data) => {
    router.push({ pathname: "busca", query: data });
  };

  return (
    <main className="bg-[length:260px] bg-right-top bg-no-repeat laptop:bg-peoples-right">
      <Text className="bg-[#EEF6FF] p-2 laptop:pl-20" variant="p">
        Resultado da busca em {router.query.category}
      </Text>
      <section className="flex flex-col gap-10 p-5 tablet:p-10 laptop:max-w-[800px] laptop:pl-20">
        <FilterSearch
          onSubmit={handleSubmit}
          className="rounded shadow-md"
          categoryItems={categoryItems}
          formOptions={{ values: router.query as FilterSearchForm }}
        />
        <ul className="flex flex-col gap-10">
          {results.map((result) => (
            <SearchResultItem {...result} key={result.id} />
          ))}
        </ul>
      </section>
    </main>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout title="Busca" image="assets/dadosabertosdefeira.png" suffix>
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Search;
