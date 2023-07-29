import { render } from "@testing-library/react";

import { Header, type HeaderProps } from "./Header";

describe("Header", () => {
  const makeSut = ({ ...props }: Partial<HeaderProps>) => {
    return render(<Header {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
