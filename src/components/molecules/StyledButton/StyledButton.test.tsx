/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import type { StyledButtonProps } from "./StyledButton";
import { StyledButton } from "./StyledButton";

describe("Button", () => {
  let user = userEvent.setup();

  beforeEach(() => {
    user = userEvent.setup();
  });

  const makeSut = ({
    children = "Click me",
    ...props
  }: Partial<StyledButtonProps>) => {
    return render(<StyledButton {...props}>{children}</StyledButton>);
  };

  it("should render children", async () => {
    makeSut({ children: "Naruto" });

    const children = screen.queryByText("Naruto");

    expect(children).toBeInTheDocument();
  });

  it("should call onClick when click in button", async () => {
    const onClick = jest.fn();

    makeSut({ onClick });

    const button = screen.getByRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders correctly with default properties", () => {
    const { asFragment } = makeSut({});
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly outline button", () => {
    makeSut({ variant: "outline" });
    const button = screen.getByRole("button");
    expect(button).toMatchSnapshot();
  });
});
