import { render } from "@testing-library/react";

import { Box, type BoxProps } from "./Box";

describe("Box", () => {
  const makeSut = ({ ...props }: Partial<BoxProps>) => {
    return render(<Box {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
