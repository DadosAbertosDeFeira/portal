import { render } from "@testing-library/react";

import { DidNotFound, type DidNotFoundProps } from ".";

describe("DidNotFound", () => {
  const makeSut = ({ ...props }: Partial<DidNotFoundProps>) => {
    return render(<DidNotFound {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
