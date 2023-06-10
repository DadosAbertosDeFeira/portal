import React from "react";
import { render } from "@testing-library/react";

import Supporters from "./Supporters";

describe("<Supporters />", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText } = render(<Supporters />);

    expect(getByText("Financiamento e Prêmios")).toBeInTheDocument();
    expect(getByText("Apoio Institucional")).toBeInTheDocument();
    expect(getByText("Apoio")).toBeInTheDocument();
    expect(getByAltText("Shuttleworth Foundation")).toBeInTheDocument();
    expect(getByAltText("Goethe Institut")).toBeInTheDocument();
    expect(
      getByAltText("Programa de Pós-Graduação em Ciência de computação da UEFS")
    ).toBeInTheDocument();
    expect(getByAltText("Absam")).toBeInTheDocument();
    expect(getByAltText("1Password")).toBeInTheDocument();
    expect(getByAltText("Netlify")).toBeInTheDocument();
    expect(getByAltText("Jetbrains")).toBeInTheDocument();
  });
});
