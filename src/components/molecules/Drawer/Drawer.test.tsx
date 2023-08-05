import { render } from "@testing-library/react";

import { Drawer, type DrawerProps } from "./Drawer";

describe("Drawer", () => {
  const makeSut = ({ isOpen = false, ...props }: Partial<DrawerProps>) => {
    return render(<Drawer isOpen={isOpen} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  // eslint-disable-next-line jest/expect-expect
  it("renders open correctly", () => {
    const { asFragment } = makeSut({ isOpen: true });

    expect(asFragment).toMatchSnapshot();
  });
});
