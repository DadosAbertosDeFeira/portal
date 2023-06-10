import Link from "next/link";
import SEO from "../components/SEO";

export default function Search() {
  return (
    <>
      <SEO title="Busca" image="assets/dadosabertosdefeira.png" />
      <h1>Página de Busca</h1>
      <Link href="/">
        <h2>Voltar para Home</h2>
      </Link>
    </>
  );
}
