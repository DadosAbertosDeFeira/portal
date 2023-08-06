import { Text } from "atoms/Text";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="bg-peoples-right">
      <main>
        <section>
          <Text variant="h1">
            Transparência nas informações de Feira de Santana
          </Text>
          <form>
            <select />
            <input />
            <p />
          </form>
        </section>
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
      <footer>
        <p>@2020 Dados abertos de Feira. Todos os direitos reservados</p>
        <nav>
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </nav>
      </footer>
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
