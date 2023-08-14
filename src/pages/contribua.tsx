import { Contact } from "organisms/Contact";
import type { ContactSocialMedia } from "organisms/Contact/types";
import { Contribute } from "organisms/Contribute/Contribute";
import {
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiTwitterFill,
} from "react-icons/ri";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const Contribua: NextPageWithLayout = () => {
  const socialMedias: ContactSocialMedia[] = [
    {
      icon: RiTwitterFill,
      name: "Twitter",
      url: "https://twitter.com/DadosDeFeira",
    },
    {
      icon: RiInstagramFill,
      name: "Instagram",
      url: "https://www.instagram.com/dadosabertosdefeira/",
    },
    {
      icon: RiGithubFill,
      name: "GitHub",
      url: "https://github.com/DadosAbertosDeFeira",
    },
    {
      icon: RiFacebookFill,
      name: "Facebook",
      url: "https://www.facebook.com/dadosabertosdefeira",
    },
  ];

  return (
    <main className="my-10">
      <h1 className="sr-only">Contribua com o Projeto</h1>
      <Contribute />
      <div className="my-20 h-1 w-full bg-gray-300" />
      <Contact socialMedias={socialMedias} />
    </main>
  );
};

Contribua.getLayout = function getLayout(page) {
  return (
    <SeoLayout title="Contribua" image="assets/dadosabertosdefeira.png" suffix>
      <HeaderLayout>{page}</HeaderLayout>
    </SeoLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Contribua;
