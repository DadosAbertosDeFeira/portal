import { render } from "@testing-library/react";

import { Projects } from "./Projects";

describe("Projects", () => {
  const makeSut = () => {
    return render(<Projects />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });
});
