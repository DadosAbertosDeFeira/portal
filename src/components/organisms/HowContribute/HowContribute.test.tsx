import { render } from "@testing-library/react";

import { HowContribute } from "./HowContribute";

jest.mock("next/router");

describe("HowContribute", () => {
  const makeSut = () => {
    return render(<HowContribute />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut();
  });
});
