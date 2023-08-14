import { render } from "@testing-library/react";

import { Neighborhood, type NeighborhoodProps } from ".";

describe("Neighborhood", () => {
  const supportersMock = ["One", "Two", "Three", "Four"];

  const makeSut = ({
    items = supportersMock,
    ...props
  }: Partial<NeighborhoodProps>) => {
    return render(<Neighborhood items={items} {...props} />);
  };

  it("should renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
