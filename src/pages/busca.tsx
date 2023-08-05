import Link from "next/link";
import type { ReactElement } from "react";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Search: NextPageWithLayout = () => {
  return (
    <>
      <h1>Página de Busca</h1>
      <Link href="/">
        <h2>Voltar para Home</h2>
      </Link>
    </>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout title="Busca" image="assets/dadosabertosdefeira.png" suffix>
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Search;
