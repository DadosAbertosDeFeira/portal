import { IconButton } from "atoms/IconButton";
import { Logo } from "atoms/Logo";
import { Text } from "atoms/Text";
import { type ReactElement } from "react";
import { BiSearch } from "react-icons/bi";

import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (
    <div>
      <IconButton
        href="https://www.google.com"
        variant="condensed"
        prefix={<Text>cu</Text>}
        icon={<BiSearch />}
      />{" "}
      <IconButton
        variant="outline"
        prefix={<Text>cu</Text>}
        icon={<BiSearch />}
      />{" "}
      <IconButton
        variant="default"
        prefix={<Text>cu</Text>}
        suffix={<Text>cu</Text>}
        icon={<BiSearch />}
      />{" "}
      <Logo />
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <SeoLayout title="Sobre" image="assets/dadosabertosdefeira.png" suffix>
      {page}
    </SeoLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default About;
