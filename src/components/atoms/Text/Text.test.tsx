import { render } from "@testing-library/react";

import { Text, type TextProps } from "./Text";

describe("Text", () => {
  const makeSut = ({ ...props }: Partial<TextProps>) => {
    return render(<Text {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
