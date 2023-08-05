import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

// eslint-disable-next-line import/extensions
import { Text } from "@/components/atoms/Text";
import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Error404: NextPageWithLayout = () => {
  return (
    <section className="relative flex h-screen min-h-[500px] items-center justify-center overflow-hidden bg-404-background bg-cover bg-center bg-no-repeat">
      <Image
        className="absolute right-[-220px] top-[40px] h-[450px] rotate-[-35deg] opacity-50 md:static md:rotate-0 md:opacity-100"
        src="/assets/404-woman.svg"
        alt="Mulher com lupa na mão"
        width={400}
        height={400}
      />
      <div className="mx-12 flex flex-col gap-y-4 text-center">
        <h1>Não encontramos esta página</h1>
        <Text>
          Aparentemente a página que você está tentando acessar não existe ou
          foi movida.
        </Text>
        <Text>
          Mas não tem problema!{" "}
          <Link className="underline" href="/">
            Clique aqui
          </Link>{" "}
          e volte para o site!
        </Text>
      </div>
    </section>
  );
};

Error404.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout
        title="Página não encontrada"
        image="assets/dadosabertosdefeira.png"
        suffix
      >
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Error404;
