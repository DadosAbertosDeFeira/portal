import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import { IconButton, type IconButtonProps } from "./IconButton";

jest.mock("atoms/Image", () => ({
  Image: ({ src, ...props }: ImageProps) => (
    <img src={src as string} {...props} />
  ),
}));

describe("IconButton", () => {
  const makeSut = ({
    label = "test",
    icon = faker.image.url(),
    ...props
  }: Partial<IconButtonProps>) => {
    return render(<IconButton icon={icon} label={label} {...(props as {})} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render button correctly", () => {
    makeSut({ as: "button" });

    const button = screen.queryByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render link correctly", () => {
    makeSut({ as: "link", href: "https://link.com" });

    const link = screen.queryByRole("link");

    expect(link).toBeInTheDocument();
  });
});
