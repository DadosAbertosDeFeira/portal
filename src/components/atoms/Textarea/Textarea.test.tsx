import { render } from "@testing-library/react";

import { Textarea, type TextareaProps } from "./Textarea";

describe("Textarea", () => {
  const makeSut = ({ ...props }: Partial<TextareaProps>) => {
    return render(<Textarea {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
