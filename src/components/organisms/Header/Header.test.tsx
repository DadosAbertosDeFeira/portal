import { render } from "@testing-library/react";

import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const makeSut = () => {
    return render(<Header />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });

  it("should render desktop menu correctly", () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      addEventListener: jest.fn((_, handler) => handler({ matches: true })),
      matches: true,
      media: "",
      onchange: null,
      removeEventListener: jest.fn(),
    }));

    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });
});
