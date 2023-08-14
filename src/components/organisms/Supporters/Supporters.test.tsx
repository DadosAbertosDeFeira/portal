import { render } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import { Supporters, type SupportersProps } from ".";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Supporters", () => {
  const supportersMock = [
    {
      id: "shuttleworth",
      image: "https://supporter.test/image.png",
      link: "https://shuttleworthfoundation.org/",
      name: "Shuttleworth Foundation",
    },
  ];

  const makeSut = ({
    title = "Supporters",
    items = supportersMock,
    ...props
  }: Partial<SupportersProps>) => {
    return render(<Supporters title={title} items={items} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
