import { render } from "@testing-library/react";

import { Contribute } from ".";

describe("Contribute", () => {
  const makeSut = () => {
    return render(<Contribute />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut();
    expect(asFragment).toMatchSnapshot();
  });
});
