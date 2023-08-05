import { render } from "@testing-library/react";

import { Button, type ButtonProps } from "./Button";

describe("Button", () => {
  const makeSut = ({ ...props }: Partial<ButtonProps>) => {
    return render(<Button {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
