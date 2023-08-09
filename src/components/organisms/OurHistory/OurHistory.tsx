import Book from "@assets/icons/book.svg";
import type { LinkProps } from "atoms/Link";
import { Link } from "atoms/Link";
import type { TextProps } from "atoms/Text";
import { Text } from "atoms/Text";
import { TitleSection } from "molecules/TitleSection";
import React from "react";
import { twMerge } from "tailwind-merge";

import type { OurHistoryProps } from "./types";

const Paragraph = ({
  children,
  className,
  ...props
}: Omit<TextProps, "ref">) => (
  <Text
    className={twMerge(
      "hyphens-auto break-words text-justify mx-[5vw] leading-6 first-letter:ml-10",
      className
    )}
    {...props}
  >
    {children}
  </Text>
);

const Anchor = ({ children, className, ...props }: LinkProps) => (
  <Link
    className={twMerge(
      "hyphens-auto break-words text-justify font-roboto leading-6 underline",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);

export function OurHistory(props: OurHistoryProps) {
  return (
    <div {...props}>
      <TitleSection
        className="flex flex-col gap-5"
        src={Book}
        alt=""
        title="Nossa História"
      >
        <Paragraph>
          A ideia de criar um espaço onde as pessoas possam buscar informações
          de maneira fácil sobre o município nasceu em 2019, quando a
          programadora Ana Paula Gomes tentou encontrar informações sobre quanto
          o município gastava com a merenda escolar. O interesse surgiu após
          ouvir uma denúncia feita por Rafael Velame no rádio sobre a falta de
          merenda em algumas escolas da cidade. Ao acessar o{" "}
          <Anchor href="http://www.transparencia.feiradesantana.ba.gov.br/">
            portal da transparência de Feira de Santana
          </Anchor>{" "}
          deparou-se com a dificuldade de fazer buscas na{" "}
          <Anchor href="http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=licitacoes">
            página de licitações
          </Anchor>
          . Fez alguns pedidos de informação à Prefeitura mas não foi
          respondida.
        </Paragraph>
        <Paragraph>
          Após a tentativa frustrada de conseguir informações da Prefeitura, Ana
          Paula foi até o site da Câmara Municipal de Feira de Santana e
          descobriu que a situação também não era boa. Informações simples, como
          a assiduidade dos vereadores, não estavam disponíveis. Você consegue
          se imaginar pagando um salário alto a um funcionário e não sabendo se
          ele compareceu ao trabalho ou se executou sua função como deveria?
        </Paragraph>
        <Paragraph>
          Diante da situação foram feitos novos pedidos de informação à Câmara -
          também sem respostas. Após meses de espera foi necessário acionar o
          Ministério Público da Bahia para intermediar o processo e, a partir
          daí, o projeto ganhou projeção nas mídias locais, como BATV da TV
          Subaé,{" "}
          <Anchor href="https://www.acordacidade.com.br/noticias/222557/programadora-encontra-dificuldades-para-obter-informacoes-sobre-a-atuacao-dos-vereadores-de-feira.html">
            Acorda Cidade
          </Anchor>
          ,{" "}
          <Anchor href="https://www.blogdovelame.com/presidente-reconhece-falta-de-transparencia-e-promete-divulgar-dados/">
            Blog do Velame
          </Anchor>{" "}
          além de diversas participações nos programas da{" "}
          <Anchor href="https://www.facebook.com/blogdovelame/videos/750921745431854/">
            Rádio Globo Feira e Jovem Pan
          </Anchor>
          . Com a repercussão, o presidente da Câmara Municipal, José Carneiro,
          nos convidou para uma visita, marcando o início de uma colaboração com
          a Casa da Cidadania. A partir dessa data, a Câmara passou a divulgar a
          assiduidade dos vereadores e as atas das sessões da casa.
        </Paragraph>
        <Paragraph>
          Ainda estamos lutando para conseguir vários dados diferentes e fazer
          com que os pedidos de informação sejam propriamente respondidos pela
          Prefeitura. Entendemos que a transparência tem grande impacto em
          coibir atos de corrupção e tornar o uso do dinheiro público mais
          eficiente. Lutar pela transparência é um trabalho de todos.
        </Paragraph>
      </TitleSection>
    </div>
  );
}
