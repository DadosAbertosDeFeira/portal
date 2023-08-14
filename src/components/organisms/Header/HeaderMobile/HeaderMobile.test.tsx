import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { HeaderMobile, type HeaderMobileProps } from ".";

describe("HeaderMobile", () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  });

  const makeSut = ({ anchors = [], ...props }: Partial<HeaderMobileProps>) => {
    return render(<HeaderMobile anchors={anchors} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should drawer have left-0 when click in button", async () => {
    makeSut({});

    const button = screen.getByTestId("drawer-open-button");

    await user.click(button);

    const drawer = screen.getByTestId("drawer");

    expect(drawer).toHaveClass("left-0");
  });

  it("should close drawer menu when click outside", async () => {
    const { container } = makeSut({});

    const button = screen.getByTestId("drawer-open-button");

    await user.click(button);
    await user.click(container);

    const drawer = screen.getByTestId("drawer");

    expect(drawer).toHaveClass("left-[-70vw]");
  });
});
