import { render } from "@testing-library/react";

import { HeaderDesktop, type HeaderDesktopProps } from ".";

describe("HeaderDesktop", () => {
  const makeSut = ({ anchors = [], ...props }: Partial<HeaderDesktopProps>) => {
    return render(<HeaderDesktop anchors={anchors} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
