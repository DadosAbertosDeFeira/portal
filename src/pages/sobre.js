import SEO from '../components/SEO';
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <SEO title="Sobre" image="assets/dadosabertosdefeira.png" />
      <Header />
      <h1>Página sobre Dados Abertos de Feira</h1>
      <a href="/">
        <h2>Voltar para Home</h2>
      </a>
    </div>
  );
}
