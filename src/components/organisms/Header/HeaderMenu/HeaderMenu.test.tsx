import { render } from "@testing-library/react";

import { HeaderMenu, type HeaderMenuProps } from "./HeaderMenu";

describe("HeaderMenu", () => {
  const makeSut = ({
    closeMenu = jest.fn(),
    ...props
  }: Partial<HeaderMenuProps>) => {
    return render(<HeaderMenu closeMenu={closeMenu} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
