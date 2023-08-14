import { render } from "@testing-library/react";
import type { Project } from "@utils/projects";

import { Projects } from "./Projects";
import type { ProjectsProps } from "./types";

describe("Projects", () => {
  const projectsMock: Project[] = [
    {
      description:
        "Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.",
      link: "https://github.com/DadosAbertosDeFeira/maria-quiteria",
      logo: {
        path: "https://test.com/image.png",
        description: "Logo do Projeto Maria Quitéria",
      },
      name: "Maria Quitéria",
      type: ["raspagem de dados", "busca de dados"],
    },
  ];

  const makeSut = ({ projects = projectsMock }: Partial<ProjectsProps>) => {
    return render(<Projects projects={projects} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
