import Link from "next/link";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Collaborate: NextPageWithLayout = () => {
  return (
    <>
      <h1>Página de Colaboração</h1>
      <Link href="/">
        <h2>Voltar para Home</h2>
      </Link>
    </>
  );
};

Collaborate.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout title="Colabore" image="assets/dadosabertosdefeira.png" suffix>
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Collaborate;
