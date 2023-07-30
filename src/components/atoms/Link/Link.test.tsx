import { render } from "@testing-library/react";

import { Link, type LinkProps } from "./Link";

describe("Link", () => {
  const makeSut = ({ href = "", ...props }: Partial<LinkProps>) => {
    return render(<Link href={href} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
