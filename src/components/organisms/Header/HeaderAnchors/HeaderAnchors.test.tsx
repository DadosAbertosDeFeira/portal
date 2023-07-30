import { render } from "@testing-library/react";

import { HeaderAnchors } from "./HeaderAnchors";

describe("HeaderAnchors", () => {
  const makeSut = () => {
    return render(<HeaderAnchors />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });
});
