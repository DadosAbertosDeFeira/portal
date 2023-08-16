import { render } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import type { Supporter } from "@/models/SupportersModel";

import type { SupporterSectionProps } from ".";
import { SupporterSection } from ".";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Supporters", () => {
  const supportersMock: Supporter = {
    id: "shuttleworth",
    img: "https://supporter.test/image.png",
    link: "https://shuttleworthfoundation.org/",
    name: "Shuttleworth Foundation",
  };

  const makeSut = ({
    title = "Apoio",
    supporters = [supportersMock],
    ...props
  }: Partial<SupporterSectionProps>) => {
    return render(
      <SupporterSection title={title} supporters={supporters} {...props} />
    );
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
