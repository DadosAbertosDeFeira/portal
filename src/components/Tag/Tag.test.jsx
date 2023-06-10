import React from "react";
import { render, screen } from "@testing-library/react";

import Tag from "./Tag";

describe("<Tag />", () => {
  it("renders correctly", () => {
    render(<Tag>Twitter</Tag>);

    const container = screen.getByText("Twitter");

    expect(container).toBeInTheDocument();
  });

  it("renders correctly with className", () => {
    const { asFragment } = render(<Tag className="social">Twitter</Tag>);

    expect(asFragment()).toMatchSnapshot();
  });
});
