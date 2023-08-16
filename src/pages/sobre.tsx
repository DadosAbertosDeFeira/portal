import type { Project } from "@utils/projects";
import type { Volunteer } from "@utils/volunteers";
import { OurHistory } from "organisms/OurHistory";
import { Projects } from "organisms/Projects";
import type { SupportersModel } from "organisms/Supporters";
import { Supporters } from "organisms/Supporters";
import { Volunteers } from "organisms/Volunteers";
import { type ReactElement } from "react";

import { useFetch } from "@/hooks/useFetch";
import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  const { data: volunteers } = useFetch<Volunteer[]>(
    "https://dadosabertosdefeira.github.io/portal/volunteers.json"
  );

  const { data: projects } = useFetch<Project[]>(
    "https://dadosabertosdefeira.github.io/portal/projects.json"
  );

  const { data: supporters } = useFetch<SupportersModel>(
    "https://dadosabertosdefeira.github.io/portal/supporters.json"
  );

  return (
    <main className="my-10 flex flex-col gap-20">
      <h1 className="sr-only">Sobre nós</h1>
      <OurHistory />
      {supporters && <Supporters supporters={supporters} />}
      {volunteers && <Volunteers volunteers={volunteers} />}
      {projects && <Projects projects={projects} />}
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
