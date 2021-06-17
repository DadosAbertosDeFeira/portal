import SEO from '../components/SEO';
import Header from '../components/Header';

export default function Search() {
  return (
    <>
      <SEO title="Busca" image="assets/dadosabertosdefeira.png" />
      <Header />
      <h1>Página de Busca</h1>
      <a href="/">
        <h2>Voltar para Home</h2>
      </a>
    </>
  );
}
