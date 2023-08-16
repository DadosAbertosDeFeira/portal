import { render } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import type { SupportersModel } from ".";
import { Supporters, type SupportersProps } from ".";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Supporters", () => {
  const supportersMock: SupportersModel = {
    financial: [
      {
        id: "shuttleworth",
        img: "https://supporter.test/image.png",
        link: "https://shuttleworthfoundation.org/",
        name: "Shuttleworth Foundation",
      },
    ],
    institutional: [
      {
        id: "shuttleworth",
        img: "https://supporter.test/image.png",
        link: "https://shuttleworthfoundation.org/",
        name: "Shuttleworth Foundation",
      },
    ],
    regular: [
      {
        id: "shuttleworth",
        img: "https://supporter.test/image.png",
        link: "https://shuttleworthfoundation.org/",
        name: "Shuttleworth Foundation",
      },
    ],
  };

  const makeSut = ({
    supporters = supportersMock,
    ...props
  }: Partial<SupportersProps>) => {
    return render(<Supporters supporters={supporters} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
