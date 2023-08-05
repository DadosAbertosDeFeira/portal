import { Box } from "atoms/Box";
import { Input } from "atoms/Input";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <>
      <h1>Página sobre Dados Abertos de Feira</h1>
      <h2>Voltar para Home</h2>
      <Box className="mt-[340px]">input:</Box>
      <Input label="hehe" id="input" variant="filled" hideLabel />
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout title="Sobre" image="assets/dadosabertosdefeira.png" suffix>
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
