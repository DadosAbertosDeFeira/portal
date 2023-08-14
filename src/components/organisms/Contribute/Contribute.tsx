import PeopleContribute from "@assets/people-contribute.svg";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";

export function Contribute() {
  return (
    <div className="mt-10 grid justify-items-center gap-5 p-3 md:grid-cols-2">
      <Image
        className="w-[50vw] max-w-[500px]"
        src={PeopleContribute}
        alt="Uma mulher"
      />
      <div className="mx-[5vw] flex grow basis-[45%] flex-col flex-nowrap gap-y-10 hyphens-auto break-words text-justify leading-6">
        <section>
          <h2 className="mb-10">Seja um Voluntário</h2>
          <p>
            Seja para investigar uma obra, criar gráficos ou programas para
            raspar os dados: precisamos de pessoas que estejam dispostas a doar
            um pouco do seu tempo para criar o futuro onde Feira de Santana é
            uma cidade mais transparente. Se você tem interesse em entrar nessa
            com a gente, independente do seu conhecimento ou se tem muito ou
            pouco tempo, envie sua aplicação para voluntário do projeto{" "}
            <Link
              className="text-blue-500"
              href="https://forms.gle/w7P3BZAqEQJeN88eA"
            >
              aqui
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="mb-10">Doe para o Projeto</h2>
          <p>
            Dependemos de doações para manter os servidores do projeto rodando e
            os dados disponíveis para que todos os cidadãos tenham acesso fácil
            à informação. Além disso, iniciativas como o nosso podcast e
            investigações especiais requerem recursos para contratação de
            pessoas. Se você quiser apoiar o projeto financeiramente, entre em
            contato com a gente{" "}
            <Link
              className="text-blue-600"
              href="https://dadosabertosdefeira.com.br/#contato"
            >
              pelo nosso formulário
            </Link>
            .
          </p>
        </section>
        <section>
          <h2 className="mb-10">Contribua com código</h2>
          <p>
            Você é uma pessoa programadora ou analista de dados e quer ajudar a
            construir essa iniciativa? Então dá uma olhada em nossos
            repositórios no{" "}
            <Link
              className="text-blue-600"
              href="https://github.com/DadosAbertosDeFeira"
            >
              Github
            </Link>
            . Temos desde análise de dados e APIs a frontend e NLP.
          </p>
        </section>
      </div>
    </div>
  );
}
