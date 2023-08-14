import { render } from "@testing-library/react";
import type { Volunteer } from "@utils/volunteers";

import { Volunteers, type VolunteersProps } from ".";

describe("Volunteers", () => {
  const volunteersMock: Volunteer[] = [
    {
      github: "alvarogfn",
      instagram: "alvarogfn",
      linkedin: "alvarogfn",
      name: "Alvaro Guimarães",
      picture: "/assets/volunteers/anapaulagomes.jpeg",
      role: "Desenvolvedor",
      twitter: "alvarogfn",
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
