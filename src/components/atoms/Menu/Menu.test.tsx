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

  it("should render header correctly", () => {
    const { asFragment } = makeSut({ header: <p>Header</p> });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render footer correctly", () => {
    const { asFragment } = makeSut({ footer: <p>Footer</p> });

    expect(asFragment).toMatchSnapshot();
  });
});
