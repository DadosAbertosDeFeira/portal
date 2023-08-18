import { render } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import type { VolunteerModel } from "@/models/VolunteerModel";

import { Volunteers, type VolunteersProps } from ".";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Volunteers", () => {
  const volunteersMock: VolunteerModel[] = [
    {
      medias: {
        facebook: "https://www.facebook.com",
        github: "https://github.com",
        instagram: "https://www.instagram.com/",
        linkedin: "https://www.linkedin.com/in",
        twitter: "https://twitter.com",
      },
      name: "Nome",
      picture: "https://picture.com/image.png",
      role: "Desenvolvedor",
    },
  ];

  const makeSut = ({
    volunteers = volunteersMock,
    ...props
  }: Partial<VolunteersProps>) => {
    return render(<Volunteers volunteers={volunteers} {...props} />);
  };

  it("should renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
