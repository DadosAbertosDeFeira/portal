import { render } from "@testing-library/react";

import { Headline, type HeadlineProps } from "./Headline";

describe("Headline", () => {
  const makeSut = ({ ...props }: Partial<HeadlineProps>) => {
    return render(<Headline {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("renders h1 correctly", () => {
    const { asFragment } = makeSut({ as: "h1" });

    expect(asFragment).toMatchSnapshot();
  });
});
