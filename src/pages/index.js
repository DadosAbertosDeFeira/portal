import SEO from '../components/SEO';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <SEO
        title="Dados abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        shouldExcludeTitleSuffix
      />
      <Header />

      <h1>Página Principal</h1>
      <a href="/busca">
        <h2>Ir para busca</h2>
      </a>
      <a href="/sobre">
        <h2>Sobre nós</h2>
      </a>
      <a href="/colabore">
        <h2>Colabore conosco</h2>
      </a>
    </>
  );
}
