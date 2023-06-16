import { render } from "@testing-library/react";

import { Button, type ButtonProps } from "./Button";

describe("Button", () => {
  const makeSut = ({ ...props }: Partial<ButtonProps>) => {
    return render(<Button {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
