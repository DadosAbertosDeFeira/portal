import { render } from "@testing-library/react";

import { Footer, type FooterProps } from "./Footer";

describe("Footer", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  const makeSut = ({ ...props }: Partial<FooterProps>) => {
    return render(<Footer {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
