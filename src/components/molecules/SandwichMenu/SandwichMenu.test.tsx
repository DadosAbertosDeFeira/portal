import { render } from "@testing-library/react";

import { SandwichMenu, type SandwichMenuProps } from "./SandwichMenu";

describe("SandwichMenu", () => {
  const makeSut = ({
    isOpen = false,
    ...props
  }: Partial<SandwichMenuProps>) => {
    return render(<SandwichMenu isOpen={isOpen} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });

  // eslint-disable-next-line jest/expect-expect
  it("renders open correclty", () => {
    makeSut({ isOpen: true });
  });
});
