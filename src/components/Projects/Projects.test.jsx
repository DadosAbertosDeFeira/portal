import React from "react";
import { render, screen } from "@testing-library/react";

import Projects from "./Projects";

describe("<Projects />", () => {
  it("renders correctly", () => {
    render(<Projects />);

    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Maria Quitéria")).toBeInTheDocument();
  });
});
