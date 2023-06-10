import React from "react";
import { render, screen } from "@testing-library/react";
import MariaQuiteria from "../../../public/assets/maria-quiteria.png";

import ProjectCard from "./ProjectCard";

describe("<ProjectCard />", () => {
  const project = {
    name: "Maria Quitéria",
    type: ["raspagem de dados", "busca de dados"],
    description:
      "Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.",
    link: "",
    logo: {
      path: MariaQuiteria,
      description: "Logo do Projeto Maria Quitéria",
    },
  };

  it("renders correctly", () => {
    render(<ProjectCard project={project} />);

    expect(
      screen.getByAltText("Logo do Projeto Maria Quitéria")
    ).toBeInTheDocument();
    expect(screen.getByText("Maria Quitéria")).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(screen.getByText("raspagem de dados")).toBeInTheDocument();
    expect(screen.getByText("busca de dados")).toBeInTheDocument();
    expect(screen.getByText("Link")).toBeInTheDocument();
  });
});
