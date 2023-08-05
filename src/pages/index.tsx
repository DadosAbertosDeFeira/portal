import type { ReactElement } from "react";

import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Logo</li>
            <li>Sobre nós</li>
            <li>Participa cidadão</li>
            <li>Blog</li>
            <li>Análises</li>
            <li>Ative Alertas</li>
            <li>Amigos de Feira</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Transparência nas informações de Feira de Santana</h1>
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
    <SeoLayout
      title="Dados Abertos de Feira"
      image="assets/dadosabertosdefeira.png"
      suffix
    >
      {page}
    </SeoLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
