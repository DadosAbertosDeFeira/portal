import { render } from "@testing-library/react";

import { Headline, type HeadlineProps } from "./Headline";

describe("Headline", () => {
  const makeSut = ({ ...props }: Partial<HeadlineProps>) => {
    return render(<Headline {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
