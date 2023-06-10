import React from "react";
import { render, screen } from "@testing-library/react";

import Supporters from "./Supporters";

describe("<Supporters />", () => {
  it("renders correctly", () => {
    render(<Supporters />);

    expect(screen.getByText("Financiamento e Prêmios")).toBeInTheDocument();
    expect(screen.getByText("Apoio Institucional")).toBeInTheDocument();
    expect(screen.getByText("Apoio")).toBeInTheDocument();
    expect(screen.getByAltText("Shuttleworth Foundation")).toBeInTheDocument();
    expect(screen.getByAltText("Goethe Institut")).toBeInTheDocument();

    expect(
      screen.getByAltText(
        "Programa de Pós-Graduação em Ciência de computação da UEFS"
      )
    ).toBeInTheDocument();

    expect(screen.getByAltText("Absam")).toBeInTheDocument();
    expect(screen.getByAltText("1Password")).toBeInTheDocument();
    expect(screen.getByAltText("Netlify")).toBeInTheDocument();
    expect(screen.getByAltText("Jetbrains")).toBeInTheDocument();
  });
});
