import { render } from "@testing-library/react";

import { Logo, type LogoProps } from "./Logo";

describe("Logo", () => {
  const makeSut = ({ ...props }: Partial<LogoProps>) => {
    return render(<Logo {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
