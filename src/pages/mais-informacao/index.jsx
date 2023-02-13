import React from 'react';
import Input from '../../components/form/Input/Input';
import Textarea from '../../components/form/Textarea/Textarea';

function MaisInformacao() {
  const hrefs = [
    {
      label: 'Portal da Prefeitura.',
      href:
        'http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=contato',
    },
    {
      label: 'Camara dos Vereadores.',
      href:
        'https://www.transparencia.feiradesantana.ba.leg.br/index.php?view=contrato',
    },
  ];

  return (
    <main className="mt-24 mb-14">
      <article className="mx-5 sm:mx-7 md:mx-auto flex flex-col gap-y-5  md:gap-y-10 max-w-2xl ">
        <section className="text-justify mt-4">
          <h1 className="mb-3 md:mb-6 sm:text-3xl">
            Não encontrou o que queria?
          </h1>
          <p>
            Se você quer acompanhar a administração pública e ter acesso às
            informações registradas, pode fazer um pedido de informação. Esse
            direito é garantido por lei e pode ser exercido por qualquer
            cidadão. Para entender como funciona o processo, recomendamos a
            leitura do nosso artigo:{' '}
            <a
              className="hover:underline font-bold"
              href="https://medium.com/@dadosabertosdefeira/como-realizar-um-pedido-de-informa%C3%A7%C3%A3o-35b3cf4e5dbd"
            >
              &quot;Como realizar um pedido de informação pública.&quot;
            </a>
            , onde você encontrará informações detalhadas sobre o assunto e
            poderá acompanhar a administração pública de forma mais efetiva.
          </p>
        </section>
        <section>
          <h1 className="mb-3 md:mb-6 sm:text-3xl">
            Contribua para a Fiscalização Pública!
          </h1>
          <p>
            Você pode ajudar a melhorar a qualidade das informações sobre a
            administração pública sugerindo novas fontes relevantes e úteis.
            Juntos, garantimos informações precisas para a fiscalização.
          </p>
          <form
            className="mt-5 flex flex-col gap-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input type="email" name="email" label="Email" required />
            <Textarea name="content" label="O que você procura?" />
            <button className="button-outline" type="submit">
              Enviar
            </button>
          </form>
        </section>
        <aside className="text-justify mt-2">
          <p>Links úteis:</p>
          <ul className="mt-3 mx-5 list-disc">
            {hrefs.map(({ label, href }) => {
              return (
                <li className="my-2" key={href}>
                  <a
                    className="cursor-pointer hover:underline"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </article>
    </main>
  );
}

export default MaisInformacao;
