import { render } from "@testing-library/react";

import { HeaderAnchors } from "./HeaderAnchors";

describe("HeaderAnchors", () => {
  const makeSut = () => {
    return render(<HeaderAnchors />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut();
  });
});
