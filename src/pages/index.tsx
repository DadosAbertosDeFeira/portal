import PeopleRight from "@assets/peoples-right.svg";
import { Box } from "atoms/Box";
import { Image } from "atoms/Image";
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
    <main>
      <Box className="relative">
        <Image
          className="absolute -top-10 right-0 -z-10 w-[135px] tablet:w-[37.5vw] desktop:w-[300px]"
          alt=""
          src={PeopleRight}
        />
        <SearchDocuments
          className="pt-40 "
          onSubmit={handleSubmit}
          searchSuggestions={["Transparência em Catuti"]}
          searchForm={
            <FilterSearch
              className="min-[900px]:flex-row min-[900px]:flex-nowrap min-[900px]:bg-white"
              categoryItems={categoryItems}
              formOptions={{
                mode: "onSubmit",
                defaultValues: {
                  category: categoryItems[0],
                },
              }}
            />
          }
        />
      </Box>
      <Neighborhood items={neighborhood} />
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
