import { volunteers } from "@utils/volunteers";
import { Box } from "atoms/Box";
import { Input } from "atoms/Input";
import { Select } from "atoms/Select/Select";
import { type ReactElement, useState } from "react";
import { MdSearch } from "react-icons/md";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Página sobre Dados Abertos de Feira</h1>
      <h2>Voltar para Home</h2>
      <Box className="mt-[340px]">input:</Box>
      <Select
        items={volunteers}
        inputValue={value}
        itemToString={(volunter) => volunter?.name ?? ""}
        onInputChange={(v) => setValue(v)}
        renderInput={(props, labelProps) => (
          <Input
            variant="outline"
            suffix={<MdSearch />}
            name="Select"
            label="Selecione"
            containerProps={labelProps}
            {...props}
          />
        )}
        renderList={(props) => (
          <ul {...props} className="box-shadow-3 max-h-7 overflow-y-scroll" />
        )}
      >
        {({ getItemProps, key, label }) => (
          <Box as="li" key={key} {...getItemProps()}>
            {label}
          </Box>
        )}
      </Select>
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
