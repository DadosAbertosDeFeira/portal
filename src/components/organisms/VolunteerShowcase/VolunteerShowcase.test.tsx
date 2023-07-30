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
  const volunteerMock: Volunteer = {
    name: "name",
    role: "role",
    picture: faker.image.avatarGitHub(),
    github: "github",
    linkedin: "linkedin",
    twitter: "twitter",
    instagram: "instagram",
  };

  const makeSut = ({
    volunteers = [volunteerMock],
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
