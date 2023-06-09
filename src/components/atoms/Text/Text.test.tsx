import { render } from "@testing-library/react";

import { Text, type TextProps } from "./Text";

describe("Text", () => {
  const makeSut = ({ ...props }: Partial<TextProps>) => {
    return render(<Text {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
