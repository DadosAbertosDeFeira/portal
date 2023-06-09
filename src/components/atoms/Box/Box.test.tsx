import { render } from "@testing-library/react";

import { Box, type BoxProps } from "./Box";

describe("Box", () => {
  const makeSut = ({ ...props }: Partial<BoxProps>) => {
    return render(<Box {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
