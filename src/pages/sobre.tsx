import { projects } from "@utils/projects";
import { supporters } from "@utils/supporters";
import { volunteers } from "@utils/volunteers";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";
import { OurHistory } from "organisms/OurHistory";
import { Projects } from "organisms/Projects";
import { Volunteers } from "organisms/Volunteers";
import { type ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <main className="my-10 flex flex-col gap-20">
      <OurHistory />
      <TitleSection
        className="flex flex-row flex-wrap items-center justify-center gap-5"
        title="Financiamento e Prêmios"
      >
        {supporters.financial.map(({ id, image, link, name }) => (
          <Link key={id} href={link}>
            <Image className="max-w-[200px]" src={image} alt={name} />
          </Link>
        ))}
      </TitleSection>
      <TitleSection
        className="flex flex-row flex-wrap items-center justify-center gap-5"
        title="Apoio Institucional"
      >
        {supporters.institutional.map(({ id, image, link, name }) => (
          <Link key={id} href={link}>
            <Image className="max-w-[200px]" src={image} alt={name} />
          </Link>
        ))}
      </TitleSection>
      <TitleSection
        className="flex flex-row flex-wrap items-center justify-center gap-10"
        title="Apoio"
      >
        {supporters.regular.map(({ id, image, link, name }) => (
          <Link key={id} href={link}>
            <Image className="max-w-[200px]" src={image} alt={name} />
          </Link>
        ))}
      </TitleSection>
      <Volunteers volunteers={volunteers} />
      <Projects projects={projects} />
    </main>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <SeoLayout title="Sobre" image="assets/dadosabertosdefeira.png" suffix>
      <HeaderLayout>{page}</HeaderLayout>
    </SeoLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
