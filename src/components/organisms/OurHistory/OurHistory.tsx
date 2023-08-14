import Book from "@assets/icons/book.svg";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";
import React from "react";

export function OurHistory() {
  return (
    <TitleSection
      className="px-[5vw]"
      src={Book}
      alt="Livro"
      title="Nossa História"
    >
      <div className="flex w-full flex-col gap-5 hyphens-auto break-words text-justify leading-6 first-letter:ml-10">
        <p>
          A ideia de criar um espaço onde as pessoas possam buscar informações
          de maneira fácil sobre o município nasceu em 2019, quando a
          programadora Ana Paula Gomes tentou encontrar informações sobre quanto
          o município gastava com a merenda escolar. O interesse surgiu após
          ouvir uma denúncia feita por Rafael Velame no rádio sobre a falta de
          merenda em algumas escolas da cidade. Ao acessar o{" "}
          <Link
            className="underline"
            href="http://www.transparencia.feiradesantana.ba.gov.br/"
          >
            portal da transparência de Feira de Santana
          </Link>{" "}
          deparou-se com a dificuldade de fazer buscas na{" "}
          <Link
            className="underline"
            href="http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=licitacoes"
          >
            página de licitações
          </Link>
          . Fez alguns pedidos de informação à Prefeitura mas não foi
          respondida.
        </p>
        <p>
          Após a tentativa frustrada de conseguir informações da Prefeitura, Ana
          Paula foi até o site da Câmara Municipal de Feira de Santana e
          descobriu que a situação também não era boa. Informações simples, como
          a assiduidade dos vereadores, não estavam disponíveis. Você consegue
          se imaginar pagando um salário alto a um funcionário e não sabendo se
          ele compareceu ao trabalho ou se executou sua função como deveria?
        </p>
        <p>
          Diante da situação foram feitos novos pedidos de informação à Câmara -
          também sem respostas. Após meses de espera foi necessário acionar o
          Ministério Público da Bahia para intermediar o processo e, a partir
          daí, o projeto ganhou projeção nas mídias locais, como BATV da TV
          Subaé,{" "}
          <Link
            className="underline"
            href="https://www.acordacidade.com.br/noticias/222557/programadora-encontra-dificuldades-para-obter-informacoes-sobre-a-atuacao-dos-vereadores-de-feira.html"
          >
            Acorda Cidade
          </Link>
          ,{" "}
          <Link
            className="underline"
            href="https://www.blogdovelame.com/presidente-reconhece-falta-de-transparencia-e-promete-divulgar-dados/"
          >
            Blog do Velame
          </Link>{" "}
          além de diversas participações nos programas da{" "}
          <Link
            className="underline"
            href="https://www.facebook.com/blogdovelame/videos/750921745431854/"
          >
            Rádio Globo Feira e Jovem Pan
          </Link>
          . Com a repercussão, o presidente da Câmara Municipal, José Carneiro,
          nos convidou para uma visita, marcando o início de uma colaboração com
          a Casa da Cidadania. A partir dessa data, a Câmara passou a divulgar a
          assiduidade dos vereadores e as atas das sessões da casa.
        </p>
        <p>
          Ainda estamos lutando para conseguir vários dados diferentes e fazer
          com que os pedidos de informação sejam propriamente respondidos pela
          Prefeitura. Entendemos que a transparência tem grande impacto em
          coibir atos de corrupção e tornar o uso do dinheiro público mais
          eficiente. Lutar pela transparência é um trabalho de todos.
        </p>
      </div>
    </TitleSection>
  );
}
