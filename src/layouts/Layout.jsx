import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import SEO from "../components/SEO";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <SEO
        title="Dados Abertos de Feira"
        image="assets/dadosabertosdefeira.png"
        shouldExcludeTitleSuffix
      />
      {children}
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};

Layout.defaultProps = {
  children: null,
};
