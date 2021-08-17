import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Button from '../components/Button';
import Link from '../components/Link';
import VolunteersCard from '../components/VolunteersCard';

import volunteersList from '../utils/volunteers';
import styles from './index.module.scss';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <SEO
        title="Dados abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        shouldExcludeTitleSuffix
      />
      <Header />

      <div className={styles.rightImage}>
        <img src="/assets/peoples-right.svg" alt="Pessoas a Direita" />
      </div>

      <section className={styles.main}>
        <div className={styles.mainTexts}>
          <h1>Transparência nas informações de Feira de Santana</h1>
          <p>
            Nós como cidadões, temos o direito a informação de forma clara e
            transparente. Precisamos saber o que acontece em nossa cidade.
            <br />
            <strong>
              Se junte aos amigos de Feira e faça a diferença como cidadão!
            </strong>
          </p>
          <div>
            <Button
              onClick={() =>
                router.push('https://www.dadosabertosdefeira.com.br/painel/')
              }
            >
              Consultar a base de dados
            </Button>
            <Button outline onClick={() => router.push('/busca')}>
              Não encontrou o que queria?
            </Button>
          </div>
        </div>
      </section>

      <section id="sobre" className={styles.history}>
        <div className={styles.icon}>
          <img src="/assets/icons/book.svg" alt="Livro" />
          <h5>Nossa História</h5>
        </div>
        <div className={styles.historyTexts}>
          <p>
            A ideia de criar um espaço onde as pessoas possam buscar informações
            de maneira fácil sobre o município nasceu em 2019, quando a analista
            de sistemas Ana Paula Gomes tentou encontrar informações sobre
            quanto o município gastava com a merenda escolar, após ouvir uma
            denúncia feita por Rafael Velame no rádio sobre a falta de merenda
            em algumas escolas da cidade. Ao acessar o{' '}
            <Link href="http://www.transparencia.feiradesantana.ba.gov.br/">
              portal da transparência de Feira de Santana
            </Link>{' '}
            deparou-se com a dificuldade de fazer buscas na{' '}
            <Link href="http://www.transparencia.feiradesantana.ba.gov.br/index.php?view=licitacoes">
              página de licitações
            </Link>
            . Fez alguns pedidos de informação à Prefeitura, mas não foi
            respondida.
          </p>
          <p>
            Após a tentativa frustrada de conseguir informações da Prefeitura,
            Ana Paula foi até o site da Câmara Municipal de Feira de Santana e
            descobriu que a situação também não era boa. Informações simples,
            como a assiduidade dos vereadores, não estavam disponíveis. Você
            consegue se imaginar pagando um salário alto a um funcionário e não
            sabendo se ele compareceu ao trabalho ou se executou sua função como
            deveria?
          </p>

          <p>
            Diante da situação foram feitos novos pedidos de informação à
            Câmara, também sem respostas. Após meses de espera foi necessário
            acionar o Ministério Público para intermediar o processo e a partir
            daí o projeto ganhou projeção nas mídias locais, como no{' '}
            <Link href="http://g1.globo.com/bahia/batv/videos/t/tv-subae/v/batv-tv-subae-03022020-bloco-2/8292651/">BATV da TV Subaé</Link>,{' '}
            <Link href="https://www.acordacidade.com.br/noticias/222557/programadora-encontra-dificuldades-para-obter-informacoes-sobre-a-atuacao-dos-vereadores-de-feira.html">Acorda Cidade</Link>,{' '}
            <Link href="https://www.blogdovelame.com/presidente-reconhece-falta-de-transparencia-e-promete-divulgar-dados/">Blog do Velame</Link>, além de diversas
            participações nos programas da{' '}
            <Link href="https://www.facebook.com/blogdovelame/videos/750921745431854/">Rádio Globo Feira e Jovem Pan</Link>. Com a
            repercussão, o presidente da Câmara Municipal, José Carneiro, nos
            convidou para uma visita, marcando o início de uma colaboração com a
            Casa da Cidadania. A partir dessa data, a Câmara passou a divulgar a
            assiduidade dos vereadores e as atas das sessões da casa.
          </p>
          <p>
            Ainda estamos lutando para conseguir dados históricos de assiduidade
            dos vereadores e fazer com que os pedidos de informação sejam
            propriamente respondidos pela Prefeitura. Entendemos que a
            transparência tem grande impacto em coibir atos de corrupção e
            tornar o uso do dinheiro público mais eficiente. Lutar pela
            transparência é um trabalho de todos.
          </p>
        </div>
      </section>

      <section className={styles.volunteers}>
        <div className={styles.icon}>
          <img src="/assets/icons/hand-with-hearth.svg" alt="Livro" />
          <h5>Voluntários</h5>
        </div>
        <div className={styles.volunteersList}>
          {volunteersList.map((volunteer) => (
            <VolunteersCard
              key={`${volunteer.name}-${volunteer.role}`}
              name={volunteer.name}
              role={volunteer.role}
              picture={volunteer.picture}
              linkedin={volunteer.linkedin}
              instagram={volunteer.instagram}
              github={volunteer.github}
            />
          ))}
        </div>
      </section>

      <section id="colabore" className={styles.contribute}>
        <img src="/assets/people-contribute.svg" alt="Como contribuir" />
        <div>
          <h5>Como contribuir</h5>
          <p>
            Essa é uma iniciativa voluntária, feita a muitas mãos, e qualquer
            pessoa interessada pode fazer parte!
          </p>
          <Button onClick={() => router.push('/colabore')}>
            Veja como contribuir
          </Button>
        </div>
      </section>

      <section className={styles.bottom}>
        <div>
          <div className={styles.contact}>
            <strong className={styles.title}>Contato</strong>
            <div>
              <iframe
                title="FSA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124770.06894749572!2d-39.00227599729459!3d-12.243901565793168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1624460355068!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
              />
              <aside>
                <div>
                  <strong>Feira de Santana</strong>
                  <a href="mailto:dadosabertosdefeira+site@gmail.com">
                    contato@dadosabertosdefeira.com.br
                  </a>
                </div>
                <div className={styles.social}>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(process.env.NEXT_PUBLIC_TWITTER_URL)
                    }
                  >
                    <img src="/assets/icons/twitter.svg" alt="Twitter" />
                    <span>Twitter</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      router.push(process.env.NEXT_PUBLIC_FACEBOOK_URL)
                    }
                  >
                    <img src="/assets/icons/facebook.svg" alt="Facebook" />
                    <span>Facebook</span>
                  </button>
                </div>
              </aside>
            </div>
          </div>
          <div className={styles.talkus}>
            <strong className={styles.title}>Fale conosco</strong>
            <form name="contact" method="POST" data-netlify="true">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Mensagem" />
              <Button type="submit" outline>
                Enviar
              </Button>
            </form>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>© 2021 Todos os Direitos Reservados</span>
        </div>
      </section>
    </>
  );
}
