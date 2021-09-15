import SEO from '../components/SEO';
import Header from '../components/Header';
import BodyText from '../components/BodyText';
import Link from '../components/Link';

import styles from './404.module.scss';

export default function Error404() {
  return (
    <>
      <SEO title="404" />
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <img src="/assets/404-woman.svg" alt="Mulher com lupa na mão" />
          <div className={styles.texts}>
            <h1>Não encontramos esta página</h1>
            <BodyText>
              Aparentemente a página que você está tentando acessar não existe
              ou foi movida.
            </BodyText>
            <BodyText>
              Mas não tem problema! <Link href="/">Clique aqui</Link> e volte
              para o site!
            </BodyText>
          </div>
        </div>
      </div>
    </>
  );
}
