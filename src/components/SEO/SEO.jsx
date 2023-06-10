import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

/**
 * Componente de SEO para gerenciar o seo, titulos e metastags
 *
 * @param props {{ title: string, description: string, image: string, shouldExcludeTitleSuffix: boolean, shouldIndexPage: boolean }}
 * @param {String} title: Título da página
 * @param {String} description: Descrição da página
 * @param {String} image: Imagem da página
 * @param {Boolean} shouldExcludeTitleSuffix: Retirar sufixo do titulo ("Página X | Dados abertos de Feira") => Suvixo é "| Dados abertos de Feira"
 * @param {Boolean} shouldIndexPage: Se os robos devem indexar a página
 *
 * @example
 * ```
 * import SEO from "../components/SEO";
 *
 * export default function Home() {
 *   return (
 *     <>
 *       <SEO title="Home" description="Dados Abertos Home" image="assets/dadosabertosdefeira.png" shouldExcludeTitleSuffix></SEO>
 *       <h1>Home Page</h1>
 *     </>
 *   )
 * }
 * ```
 */

export default function SEO({
  title,
  description,
  image,
  shouldExcludeTitleSuffix,
  shouldIndexPage,
}) {
  const pageTitle = `${title} ${
    !shouldExcludeTitleSuffix ? "| Dados abertos de Feira" : ""
  }`;
  const pageImage = image
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
    : null;

  return (
    <Head>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      {!shouldIndexPage && <meta name="robots" content="noindex,nofollow" />}
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#fff" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:image:secure_url" content={pageImage} />
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@DadosDeFeira" />
      <meta name="twitter:creator" content="@DadosDeFeira" />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:image:src" content={pageImage} />
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
}

SEO.defaultProps = {
  description: null,
  image: null,
  shouldExcludeTitleSuffix: false,
  shouldIndexPage: true,
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  shouldExcludeTitleSuffix: PropTypes.bool,
  shouldIndexPage: PropTypes.bool,
};
