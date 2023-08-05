import { render } from "@testing-library/react";

import { Textarea, type TextareaProps } from "./Textarea";

describe("Textarea", () => {
  const makeSut = ({ ...props }: Partial<TextareaProps>) => {
    return render(<Textarea {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
