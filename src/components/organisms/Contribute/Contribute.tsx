import PeopleContribute from "@assets/people-contribute.svg";
import { Box } from "atoms/Box";
import { Image } from "atoms/Image";
import type { LinkProps } from "atoms/Link";
import { Link } from "atoms/Link";
import type { TextProps } from "atoms/Text";
import { Text } from "atoms/Text";
import { twMerge } from "tailwind-merge";

const Paragraph = ({
  children,
  className,
  ...props
}: Omit<TextProps, "ref">) => (
  <Text
    className={twMerge(
      "hyphens-auto break-words text-justify leading-6",
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
      "hyphens-auto break-words text-justify font-roboto leading-6 text-primary",
      className
    )}
    {...props}
  >
    {children}
  </Link>
);

export function Contribute() {
  return (
    <Box className="mt-10 grid justify-items-center gap-5 p-3 tablet:grid-cols-2">
      <Image className="w-[50vw] max-w-[500px]" src={PeopleContribute} alt="" />
      <Box className="mx-[5vw] flex grow basis-[45%] flex-col flex-nowrap gap-y-10">
        <section className=" text-justify">
          <Text className="mb-10" variant="h1">
            Seja um Voluntário
          </Text>
          <Paragraph>
            Seja para investigar uma obra, criar gráficos ou programas para
            raspar os dados: precisamos de pessoas que estejam dispostas a doar
            um pouco do seu tempo para criar o futuro onde Feira de Santana é
            uma cidade mais transparente. Se você tem interesse em entrar nessa
            com a gente, independente do seu conhecimento ou se tem muito ou
            pouco tempo, envie sua aplicação para voluntário do projeto{" "}
            <Anchor href="https://forms.gle/w7P3BZAqEQJeN88eA">aqui</Anchor>.
          </Paragraph>
        </section>
        <section>
          <Text className="mb-10" variant="h1">
            Doe para o Projeto
          </Text>
          <Paragraph>
            Dependemos de doações para manter os servidores do projeto rodando e
            os dados disponíveis para que todos os cidadãos tenham acesso fácil
            à informação. Além disso, iniciativas como o nosso podcast e
            investigações especiais requerem recursos para contratação de
            pessoas. Se você quiser apoiar o projeto financeiramente, entre em
            contato com a gente{" "}
            <Anchor href="https://dadosabertosdefeira.com.br/#contato">
              pelo nosso formulário
            </Anchor>
            .
          </Paragraph>
        </section>
        <section>
          <Text className="mb-10" variant="h1">
            Contribua com código
          </Text>
          <Paragraph>
            Você é uma pessoa programadora ou analista de dados e quer ajudar a
            construir essa iniciativa? Então dá uma olhada em nossos
            repositórios no{" "}
            <Anchor href="https://github.com/DadosAbertosDeFeira">
              Github
            </Anchor>
            . Temos desde análise de dados e APIs a frontend e NLP.
          </Paragraph>
        </section>
      </Box>
    </Box>
  );
}
