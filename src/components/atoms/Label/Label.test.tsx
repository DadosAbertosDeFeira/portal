import { render } from "@testing-library/react";

import { Label, type LabelProps } from "./Label";

describe("Label", () => {
  const makeSut = ({ ...props }: Partial<LabelProps>) => {
    return render(<Label {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
