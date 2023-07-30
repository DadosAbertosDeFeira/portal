import { render } from "@testing-library/react";

import { Input, type InputProps } from "./Input";

describe("Input", () => {
  const makeSut = ({ ...props }: Partial<InputProps>) => {
    return render(<Input {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
