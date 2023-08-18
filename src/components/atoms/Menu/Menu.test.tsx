import { render } from "@testing-library/react";

import { Menu, type MenuProps } from ".";

describe("Menu", () => {
  const makeSut = ({ ...props }: Partial<MenuProps>) => {
    return render(<Menu {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
