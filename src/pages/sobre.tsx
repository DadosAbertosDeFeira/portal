import { Box } from "atoms/Box";
import { GroupSelect } from "atoms/GroupSelect";
import { Input } from "atoms/Input";
import { Menu } from "atoms/Menu";
import { MenuItem } from "atoms/MenuItem";
import { type ReactElement, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  const items = [
    { title: "prefeitura", options: ["Diário Oficial"] },
    { title: "Camara", options: ["Vereadores", "Ministros", "Defensoria"] },
    { title: "Shopping", options: ["Casacos", "Carros", "Mesas"] },
  ];

  const [value, setValue] = useState<string | null>("");

  return (
    <>
      <h1>Página sobre Dados Abertos de Feira</h1>
      <h2>Voltar para Home</h2>
      <Box className="mt-[340px]">input:</Box>
      <Box className="p-100">
        <GroupSelect
          items={items}
          selectedItem={value}
          onSelectedChange={(selectedItem) => {
            setValue(selectedItem);
          }}
          renderItem={({ label, key, ...props }) => (
            <MenuItem key={key} {...props}>
              {label}
            </MenuItem>
          )}
          renderSectionHeader={(title) => (
            <MenuItem
              className="cursor-default bg-[#DDE8EE]"
              suffix={<FiArrowDown size={40} />}
            >
              {title}
            </MenuItem>
          )}
          renderList={(props) => <Menu {...props} />}
          renderInput={(props, containerProps) => (
            <Input
              label="Selecione:"
              name="Selecione:"
              filled={false}
              containerProps={containerProps}
              {...props}
            />
          )}
        />
      </Box>
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
