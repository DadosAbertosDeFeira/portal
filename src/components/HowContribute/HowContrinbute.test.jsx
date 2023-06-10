import React from "react";
import { render, screen } from "@testing-library/react";

import HowContribute from "./HowContribute";

jest.mock("next/router");

describe("<HowContribute />", () => {
  it("renders correctly", () => {
    render(<HowContribute />);

    expect(screen.getByText("Seja um Voluntário")).toBeInTheDocument();
    expect(screen.getByText("aqui")).toBeInTheDocument();
    expect(screen.getByText("Doe para o Projeto")).toBeInTheDocument();
    expect(screen.getByText("pelo nosso formulário")).toBeInTheDocument();
    expect(screen.getByText("Contribua com código")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();
  });
});
