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
});
