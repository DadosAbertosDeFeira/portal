import { render } from "@testing-library/react";

import { Input, type InputProps } from "./Input";

describe("Input", () => {
  const makeSut = ({ ...props }: Partial<InputProps>) => {
    return render(<Input {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
