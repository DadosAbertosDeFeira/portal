import { render } from "@testing-library/react";

import { Logo, type LogoProps } from "./Logo";

describe("Logo", () => {
  const makeSut = ({ ...props }: Partial<LogoProps>) => {
    return render(<Logo {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("renders with sizes correctly", () => {
    const { asFragment } = makeSut({ width: 40, height: 40 });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render small version correctly", () => {
    const { asFragment } = makeSut({ small: true });

    expect(asFragment).toMatchSnapshot();
  });
});
