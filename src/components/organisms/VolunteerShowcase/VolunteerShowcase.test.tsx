import { fakerPT_BR as faker } from "@faker-js/faker";
import { render } from "@testing-library/react";
import type { Volunteer } from "@utils/volunteers";
import type { ImageProps } from "atoms/Image";

import {
  VolunteerShowcase,
  type VolunteerShowcaseProps,
} from "./VolunteerShowcase";

jest.mock("atoms/Image", () => ({
  Image: ({ src, ...props }: ImageProps) => (
    <img src={src as string} {...props} alt="" />
  ),
}));

describe("VolunteerShowcase", () => {
  const volunteersMock: Volunteer[] = [
    {
      github: "github",
      instagram: "instagram",
      linkedin: "linkedin",
      name: "name",
      picture: faker.image.avatarGitHub(),
      role: "role",
      twitter: "twitter",
    },
    {
      github: "github",
      instagram: "instagram",
      linkedin: "linkedin",
      name: "name2",
      picture: faker.image.avatarGitHub(),
      role: "role2",
      twitter: "twitter",
    },
  ];

  const makeSut = ({
    volunteers = volunteersMock,
    ...props
  }: Partial<VolunteerShowcaseProps>) => {
    return render(<VolunteerShowcase volunteers={volunteers} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
