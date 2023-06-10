import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SocialContactButtons from "./SocialContactButtons";

describe("<SocialContactButtons />", () => {
  it("renders correctly all the buttons", () => {
    const { getByText, asFragment, getByAltText } = render(
      <SocialContactButtons />
    );

    expect(getByText("Twitter")).toBeInTheDocument();
    expect(getByText("Facebook")).toBeInTheDocument();
    expect(getByText("Instagram")).toBeInTheDocument();
    expect(getByText("Github")).toBeInTheDocument();

    expect(getByAltText("Twitter")).toBeInTheDocument();
    expect(getByAltText("Facebook")).toBeInTheDocument();
    expect(getByAltText("Instagram")).toBeInTheDocument();
    expect(getByAltText("Github")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  describe("behavior", () => {
    let focusMock;

    beforeEach(() => {
      focusMock = jest.fn();
      jest
        .spyOn(window, "open")
        .mockImplementation(() => ({ focus: focusMock }));
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("redirects to Twitter when user clicks on the button", () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId("twitter-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://twitter.com/DadosDeFeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Facebook when user clicks on the button", () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId("facebook-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://www.facebook.com/dadosabertosdefeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Instagram when user clicks on the button", () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId("instagram-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://www.instagram.com/dadosabertosdefeira/",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Github when user clicks on the button", () => {
      const { getByTestId } = render(<SocialContactButtons />);
      fireEvent.click(getByTestId("github-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://github.com/DadosAbertosDeFeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });
  });
});
