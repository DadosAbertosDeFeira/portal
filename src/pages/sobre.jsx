import Link from "next/link";
import SEO from "../components/SEO";
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <SEO title="Sobre" image="assets/dadosabertosdefeira.png" />
      <Header />
      <h1>Página sobre Dados Abertos de Feira</h1>
      <Link href="/">
        <h2>Voltar para Home</h2>
      </Link>
    </>
  );
}
