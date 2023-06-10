import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import SocialContactButtons from "./SocialContactButtons";

describe("<SocialContactButtons />", () => {
  it("renders correctly all the buttons", () => {
    const { asFragment } = render(<SocialContactButtons />);

    expect(screen.getByText("Twitter")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("Github")).toBeInTheDocument();

    expect(screen.getByAltText("Twitter")).toBeInTheDocument();
    expect(screen.getByAltText("Facebook")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram")).toBeInTheDocument();
    expect(screen.getByAltText("Github")).toBeInTheDocument();

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
      render(<SocialContactButtons />);
      fireEvent.click(screen.getByTestId("twitter-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://twitter.com/DadosDeFeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Facebook when user clicks on the button", () => {
      render(<SocialContactButtons />);
      fireEvent.click(screen.getByTestId("facebook-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://www.facebook.com/dadosabertosdefeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Instagram when user clicks on the button", () => {
      render(<SocialContactButtons />);
      fireEvent.click(screen.getByTestId("instagram-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://www.instagram.com/dadosabertosdefeira/",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });

    it("redirects to Github when user clicks on the button", () => {
      render(<SocialContactButtons />);
      fireEvent.click(screen.getByTestId("github-button"));

      expect(window.open).toHaveBeenCalledWith(
        "https://github.com/DadosAbertosDeFeira",
        "_blank"
      );
      expect(focusMock).toHaveBeenCalledTimes(1);
    });
  });
});
