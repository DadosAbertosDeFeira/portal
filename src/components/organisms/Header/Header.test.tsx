import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Header, type HeaderProps } from "./Header";

describe("Header", () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  });

  const makeSut = ({ ...props }: Partial<HeaderProps>) => {
    return render(<Header {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render desktop menu correctly", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: true,
      media: "",
      onchange: null,
      addEventListener: jest.fn((_, handler) => handler({ matches: true })),
      removeEventListener: jest.fn(),
    }));

    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should drawer have left-0 when click in button", async () => {
    makeSut({});

    const button = screen.getByRole("button", { name: "Menu" });

    await act(async () => user.click(button));

    const drawer = screen.getByRole("navigation");

    expect(drawer).toHaveClass("left-0");
  });

  it("should close drawer menu when click outside", async () => {
    const { container } = makeSut({});

    const button = screen.getByRole("button", { name: "Menu" });

    await act(async () => user.click(button));
    await act(async () => user.click(container));

    const drawer = screen.getByRole("navigation");

    expect(drawer).toHaveClass("left-[-70vw]");
  });
});
