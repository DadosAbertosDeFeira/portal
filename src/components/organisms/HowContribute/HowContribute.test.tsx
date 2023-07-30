import { render } from "@testing-library/react";

import { HowContribute } from "./HowContribute";

jest.mock("next/router");

describe("HowContribute", () => {
  const makeSut = () => {
    return render(<HowContribute />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });
});
