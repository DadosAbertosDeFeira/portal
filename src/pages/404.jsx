import Image from 'next/image';
import Link from 'next/link';

import SEO from '../components/SEO';
import BodyText from '../components/BodyText';

export default function Error404() {
  return (
    <>
      <SEO title="404" />
      <section className="h-screen min-h-[500px] overflow-hidden relative flex justify-center items-center bg-404-background bg-center bg-no-repeat bg-cover">
        <Image
          className="absolute top-[40px] right-[-220px] rotate-[-35deg] h-[450px] opacity-50 md:static md:rotate-0 md:opacity-100"
          src="/assets/404-woman.svg"
          alt="Mulher com lupa na mão"
          width={400}
          height={400}
        />
        <div className="text-center flex flex-col gap-y-4 mx-12">
          <h1>Não encontramos esta página</h1>
          <BodyText>
            Aparentemente a página que você está tentando acessar não existe ou
            foi movida.
          </BodyText>
          <BodyText>
            Mas não tem problema!{' '}
            <Link className="underline" href="/">
              Clique aqui
            </Link>{' '}
            e volte para o site!
          </BodyText>
        </div>
      </section>
    </>
  );
}
