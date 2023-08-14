import { useRouter } from "next/router";
import { Neighborhood } from "organisms/Neighborhood";
import type {
  SearchBarSelectItem,
  SearchBarSubmitHandler,
} from "organisms/SearchBar";
import { SearchBar } from "organisms/SearchBar";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

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

const neighborhood = [
  "35º. BI",
  "Aeroporto",
  "Asa Branca",
  "Aviário",
  "Baraúnas",
  "Brasília",
  "Calumbi",
  "Campo do Gado Novo",
  "Campo Limpo",
];

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handleSubmit: SearchBarSubmitHandler = async ({
    inputValue,
    selectValue,
  }) => {
    await router.push({
      pathname: "busca",
      query: { databaseId: selectValue.id, search: inputValue },
    });
  };

  return (
    <main className="bg-city-pattern bg-contain bg-no-repeat">
      <div className="lg:py-18 mx-3 md:ml-14 md:max-w-[80vw] md:py-16 lg:w-[65vw] lg:max-w-[800px]">
        <h1 className="py-10 text-center text-3xl font-black md:text-left md:text-[40px] md:leading-[1.25em] lg:pb-8 lg:text-[50px] lg:leading-[68.2px]">
          Transparência nas Informações de Feira de Santana
        </h1>
        <SearchBar
          className="bg-white shadow-lg"
          items={searchBarItems}
          onSubmit={handleSubmit}
        />
      </div>
      <Neighborhood className="py-20" items={neighborhood} />
    </main>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout
        title="Dados Abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        suffix
      >
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
