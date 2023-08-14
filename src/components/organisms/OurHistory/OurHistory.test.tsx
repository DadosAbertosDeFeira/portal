import { render } from "@testing-library/react";

import { OurHistory, type OurHistoryProps } from ".";

describe("OurHistory", () => {
  const makeSut = ({ ...props }: Partial<OurHistoryProps>) => {
    return render(<OurHistory {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});
    expect(asFragment).toMatchSnapshot();
  });
});
