import React from "react";
import { render, screen } from "@testing-library/react";

import Volunteers from "./Volunteers";

describe("<Volunteers />", () => {
  it("renders correctly the component", () => {
    const { asFragment } = render(<Volunteers />);

    const container = screen.getByText("Voluntários");
    expect(container).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
