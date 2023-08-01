import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input, type InputProps } from ".";

describe("Input", () => {
  const user = userEvent.setup();

  const makeSut = ({
    label = "label",
    name = "name",
    ...props
  }: Partial<InputProps>) => {
    return render(<Input name={name} label={label} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should call onChange when user types", async () => {
    const text = "this is an input";
    const onChange = jest.fn();
    makeSut({ label: "input", onChange });

    const input = screen.getByLabelText("input");

    await user.type(input, text);

    expect(onChange).toHaveBeenCalledTimes(text.length);
  });

  it("should render helperText", () => {
    makeSut({ helperText: "this is an input" });

    const helperText = screen.queryByText("this is an input");

    expect(helperText).toBeInTheDocument();
  });
});
