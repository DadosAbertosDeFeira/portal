import { render } from "@testing-library/react";

import { Label, type LabelProps } from "./Label";

describe("Label", () => {
  const makeSut = ({ ...props }: Partial<LabelProps>) => {
    return render(<Label {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
