import { render } from "@testing-library/react";
import type { Project } from "@utils/projects";
import type { ImageProps } from "atoms/Image";

import { Projects } from "./Projects";
import type { ProjectsProps } from "./types";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Projects", () => {
  const projectsMock: Project[] = [
    {
      description:
        "Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.",
      img: {
        src: "https://test.com/image.png",
        alt: "Logo do Projeto Maria Quitéria",
      },
      link: "https://github.com/DadosAbertosDeFeira/maria-quiteria",
      name: "Maria Quitéria",
      type: ["raspagem de dados", "busca de dados"],
    },
    {
      description:
        "Tem a missão de libertar dados do município de Feira de Santana. Responsável pela raspagem e o armazenamento.",
      img: {
        src: null,
        alt: "Logo do Projeto Maria Quitéria",
      },
      link: "https://github.com/DadosAbertosDeFeira/maria-quiteria",
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
