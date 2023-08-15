import { projects } from "@utils/projects";
import { supporters } from "@utils/supporters";
import { volunteers } from "@utils/volunteers";
import { OurHistory } from "organisms/OurHistory";
import { Projects } from "organisms/Projects";
import { Supporters } from "organisms/Supporters";
import { Volunteers } from "organisms/Volunteers";
import { type ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <main className="my-10 flex flex-col gap-20">
      <h1 className="sr-only">Sobre nós</h1>
      <OurHistory />
      <Supporters
        title="Financiamento e Prêmios"
        items={supporters.financial}
      />
      <Supporters
        title="Apoio Institucional"
        items={supporters.institutional}
      />
      <Supporters title="Apoio" items={supporters.regular} />
      <Volunteers volunteers={volunteers} />
      <Projects projects={projects} />
    </main>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <SeoLayout
      title="Quem somos"
      image="assets/dadosabertosdefeira.png"
      description="Somos uma iniciativa que visa disponibilizar dados públicos da cidade de Feira de Santana, na Bahia, de forma aberta, transparente e acessível."
      suffix
    >
      <HeaderLayout>{page}</HeaderLayout>
    </SeoLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
