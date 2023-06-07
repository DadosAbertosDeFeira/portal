import Link from "next/link";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title="Colabore" image="assets/dadosabertosdefeira.png" />
      <h1>Página de Colaboração</h1>
      <Link href="/">
        <h2>Voltar para Home</h2>
      </Link>
    </>
  );
}
