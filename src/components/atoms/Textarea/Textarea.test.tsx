import { render, screen } from "@testing-library/react";

import { Textarea, type TextareaProps } from ".";

describe("Textarea", () => {
  const makeSut = ({ ...props }: Partial<TextareaProps>) => {
    return render(<Textarea {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should render placeholder when filled", () => {
    makeSut({ label: "textarea", filled: true });

    const input = screen.getByPlaceholderText("textarea");

    expect(input).toBeInTheDocument();
  });

  it("should render error variant correctly", () => {
    const { asFragment } = makeSut({ variant: "outline", errorText: "error" });

    expect(asFragment).toMatchSnapshot();
  });
});
