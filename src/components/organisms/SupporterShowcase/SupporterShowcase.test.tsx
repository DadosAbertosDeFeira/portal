import { fakerPT_BR as faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import type { ImageProps } from "atoms/Image";

import type { SupporterShowcaseItem, SupporterShowcaseProps } from ".";
import { SupporterShowcase } from ".";

jest.mock("../../atoms/Image", () => ({
  Image: ({ src, ...props }: ImageProps) => (
    <img src={src as string} {...props} />
  ),
}));

describe("SupporterShowcase", () => {
  const mockData: SupporterShowcaseItem = {
    id: faker.string.uuid(),
    image: faker.image.url(),
    link: faker.internet.url(),
    name: faker.company.name(),
  };

  const makeSut = ({
    items = [],
    title = "",
    ...props
  }: Partial<SupporterShowcaseProps>) => {
    return render(<SupporterShowcase items={items} title={title} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render an img correctly", () => {
    makeSut({ items: [mockData] });

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
  });

  it("should render a heading correctly", () => {
    makeSut({ title: "title" });

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("title");
  });

  it("should render a link correctly", () => {
    makeSut({ items: [mockData] });

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", mockData.link);
  });
});
