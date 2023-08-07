import { useRouter } from "next/router";
import type { SearchDocumentFormHandler } from "organisms/SearchDocumentsForm";
import { SearchDocumentsForm } from "organisms/SearchDocumentsForm";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const handleSubmit: SearchDocumentFormHandler = (data) => {
    router.push({ pathname: "busca", query: data });
  };

  return (
    <div className="">
      <main>
        <SearchDocumentsForm
          categories={["abc", "cde", "fge"]}
          title="Transparência nas informações de Feira de Santana"
          suggestions={["abc", "cde", "fge"]}
          onSubmit={handleSubmit}
        />
        <section>
          <h1>O que acontece no meu bairro?</h1>
          <div>
            <ul>
              <li>35º. BI</li>
              <li>Aeroporto</li>
              <li>Asa Branca</li>
              <li>Aviário</li>
              <li>Baraúnas</li>
              <li>Brasília</li>
              <li>Calumbi</li>
              <li>Campo do Gado Novo</li>
              <li>Campo Limpo</li>
            </ul>
            <button>ver mais...</button>
          </div>
        </section>
      </main>
    </div>
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
