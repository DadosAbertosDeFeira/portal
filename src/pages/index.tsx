import { useRouter } from "next/router";
import { FilterSearch } from "organisms/FilterSearch";
import { Neighborhood } from "organisms/Neighborhood";
import { SearchDocuments } from "organisms/SearchDocuments";
import type { ReactElement } from "react";
import type { SubmitHandler } from "react-hook-form";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handleSubmit: SubmitHandler<any> = (data) => {
    router.push({ pathname: "busca", query: data });
  };

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

  return (
    <main className="bg-city-pattern bg-contain bg-no-repeat">
      <SearchDocuments
        className="p-2 py-20 tablet:pl-14 laptop:max-w-[60vw]"
        searchSuggestions={["Transparência em Feira de Santana"]}
        searchForm={
          <FilterSearch
            categoryItems={categoryItems}
            formOptions={{ mode: "onSubmit" }}
            onSubmit={handleSubmit}
          />
        }
      />
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
