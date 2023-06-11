import { render } from "@testing-library/react";

import { Link, type LinkProps } from "./Link";

describe("Link", () => {
  const makeSut = ({ href = "", ...props }: Partial<LinkProps>) => {
    return render(<Link href={href} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
