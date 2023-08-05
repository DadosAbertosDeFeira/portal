import { render } from "@testing-library/react";

import { SandwichMenu, type SandwichMenuProps } from "./SandwichMenu";

describe("SandwichMenu", () => {
  const makeSut = ({
    isOpen = false,
    ...props
  }: Partial<SandwichMenuProps>) => {
    return render(<SandwichMenu isOpen={isOpen} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render open correctly", () => {
    const { asFragment } = makeSut({ isOpen: true });

    expect(asFragment).toMatchSnapshot();
  });
});
