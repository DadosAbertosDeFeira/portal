/* eslint-disable import/extensions */
import Book from "@assets/icons/book.svg";
import PeopleRight from "@assets/peoples-right.svg";
import { supporters } from "@utils/supporters";
import { volunteers } from "@utils/volunteers";
import Image from "next/image";
import { ContactForm } from "organisms/ContactForm";
import { HowContribute } from "organisms/HowContribute";
import { SupporterShowcase } from "organisms/SupporterShowcase";
import { VolunteerShowcase } from "organisms/VolunteerShowcase";
import type { ReactElement } from "react";

import { Text } from "@/components/atoms/Text";
import { HeaderLayout } from "@/layouts/HeaderLayout";
import { SeoLayout } from "@/layouts/SeoLayout";

import Projects from "../components/Projects";
import SocialContactButtons from "../components/SocialContactButtons";
import type { NextPageWithLayout } from "./_app";

// eslint-disable-next-line import/no-default-export
const Home: NextPageWithLayout = () => {
  return (
    <>
      <section className="flex flex-col bg-city-pattern bg-cover bg-bottom bg-no-repeat tablet:flex-row">
        <div className="flex grow justify-end tablet:order-last tablet:items-start">
          <Image
            className="w-1/2 min-w-5xl sm:w-[600px]"
            src={PeopleRight}
            alt="Pessoas a Direita"
            width={600}
            height={975}
            priority
          />
        </div>
        <div className="pl-md text-center tablet:py-48 tablet:pl-xl tablet:pr-5 desktop:w-1/2 desktop:pl-4xl desktop:pt-64 desktop:text-left large-desktop:pl-5xl">
          <h1>Mais transparência em Feira de Santana</h1>
          <Text className="py-5">
            Nós, cidadãos, temos o direito a informação de forma clara e
            transparente. Precisamos saber o que acontece em nossa cidade.
            <br />
            <strong>Junte-se a nós e faça a diferença!</strong>
          </Text>
          <div className="flex place-content-center py-5 large-desktop:place-content-start">
            <a
              className="rounded bg-primary-dark p-3 px-9 font-semibold text-white "
              href="https://mq.dadosabertosdefeira.com.br/painel/"
            >
              Consultar a base de dados
            </a>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="flex flex-col place-items-center gap-7 p-16"
      >
        <Image className="m-auto h-24 w-24" src={Book} alt="Livro" />
        <h2>Nossa História</h2>
        <div className="flex flex-col gap-y-6 text-center font-medium">
          <Text>
            A ideia de criar um espaço onde as pessoas possam buscar informações
            de maneira fácil sobre o município nasceu em 2019, quando a
            programadora Ana Paula Gomes tentou encontrar informações sobre
            quanto o município gastava com a merenda escolar. O interesse surgiu
            após ouvir uma denúncia feita por Rafael Velame no rádio sobre a
            falta de merenda em algumas escolas da cidade. Ao acessar o{" "}
            <a
              className="underline"
              href="http://www.transparencia.feiradesantana.ba.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              portal da transparência de Feira de Santana
            </a>{" "}
            deparou-se com a dificuldade de fazer buscas na{" "}
            <a
              className="underline"
              href="http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=licitacoes"
              target="_blank"
              rel="noreferrer"
            >
              página de licitações
            </a>
            . Fez alguns pedidos de informação à Prefeitura mas não foi
            respondida.
          </Text>
          <Text>
            Após a tentativa frustrada de conseguir informações da Prefeitura,
            Ana Paula foi até o site da Câmara Municipal de Feira de Santana e
            descobriu que a situação também não era boa. Informações simples,
            como a assiduidade dos vereadores, não estavam disponíveis. Você
            consegue se imaginar pagando um salário alto a um funcionário e não
            sabendo se ele compareceu ao trabalho ou se executou sua função como
            deveria?
          </Text>

          <Text>
            Diante da situação foram feitos novos pedidos de informação à Câmara
            - também sem respostas. Após meses de espera foi necessário acionar
            o Ministério Público da Bahia para intermediar o processo e, a
            partir daí, o projeto ganhou projeção nas mídias locais, como BATV
            da TV Subaé,{" "}
            <a
              className="underline"
              href="https://www.acordacidade.com.br/noticias/222557/programadora-encontra-dificuldades-para-obter-informacoes-sobre-a-atuacao-dos-vereadores-de-feira.html"
              target="_blank"
              rel="noreferrer"
            >
              Acorda Cidade
            </a>
            ,{" "}
            <a
              className="underline"
              href="https://www.blogdovelame.com/presidente-reconhece-falta-de-transparencia-e-promete-divulgar-dados/"
              target="_blank"
              rel="noreferrer"
            >
              Blog do Velame
            </a>
            , além de diversas participações nos programas da{" "}
            <a
              className="underline"
              href="https://www.facebook.com/blogdovelame/videos/750921745431854/"
              target="_blank"
              rel="noreferrer"
            >
              Rádio Globo Feira e Jovem Pan
            </a>
            . Com a repercussão, o presidente da Câmara Municipal, José
            Carneiro, nos convidou para uma visita, marcando o início de uma
            colaboração com a Casa da Cidadania. A partir dessa data, a Câmara
            passou a divulgar a assiduidade dos vereadores e as atas das sessões
            da casa.
          </Text>
          <Text>
            Ainda estamos lutando para conseguir vários dados diferentes e fazer
            com que os pedidos de informação sejam propriamente respondidos pela
            Prefeitura. Entendemos que a transparência tem grande impacto em
            coibir atos de corrupção e tornar o uso do dinheiro público mais
            eficiente. Lutar pela transparência é um trabalho de todos.
          </Text>
        </div>

        <SupporterShowcase
          items={supporters.financial}
          title="Financiamento e Prêmios"
        />
        <SupporterShowcase
          items={supporters.institutional}
          title="Apoio Institucional"
        />
        <SupporterShowcase items={supporters.regular} title="Apoio" />
      </section>

      <section id="voluntarios" className="bg-white p-32 xl:px-4 xl:py-16">
        <VolunteerShowcase volunteers={volunteers} />
      </section>

      <section
        id="projetos"
        className="flex justify-center pt-2xl tablet:space-x-md tablet:p-2xl"
      >
        <Projects />
      </section>

      <section id="colabore" className="px-lg py-2xl tablet:px-2xl">
        <HowContribute />
      </section>

      <section id="contato" className="border-t-2 pt-2xl tablet:space-x-md">
        <div className="flex flex-col justify-center tablet:flex-row">
          <div className="tablet:max-w-1/2 text-center tablet:m-md tablet:text-left">
            <h2>Contato</h2>
            <div className="my-lg flex w-full flex-col space-y-md desktop:flex-row desktop:space-y-0">
              <iframe
                title="Feira de Santana"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124770.06894749572!2d-39.00227599729459!3d-12.243901565793168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1624460355068!5m2!1spt-BR!2sbr"
                width="100%"
                height="212px"
                allowFullScreen
                loading="lazy"
              />
              <div className="mx-xl flex flex-col text-xs sm:text-base">
                <h3>Feira de Santana</h3>
                <a href="mailto:dadosabertosdefeira+site@gmail.com">
                  contato@dadosabertosdefeira.com.br
                </a>
                <SocialContactButtons />
              </div>
            </div>
          </div>
          <div className="mx-4 flex flex-col items-center tablet:m-md tablet:w-80 tablet:items-start">
            <ContactForm />
          </div>
        </div>
        <div className="m-xl text-center">
          <span>© 2021 Todos os Direitos Reservados</span>
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <HeaderLayout>
      <SeoLayout
        title="Dados Abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        suffix
      >
        {page}
      </SeoLayout>
    </HeaderLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
