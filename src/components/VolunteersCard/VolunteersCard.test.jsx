/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, screen } from "@testing-library/react";
import VolunteersCard from ".";

describe("<VolunteersCard />", () => {
  let sharedProps;

  beforeEach(() => {
    sharedProps = {
      name: "Scooby Doo",
      role: "Detective",
      picture: "https://scoobydoo.com/profile.jpeg",
    };
  });

  it("renders correctly without social network links", () => {
    const { asFragment } = render(<VolunteersCard {...sharedProps} />);

    expect(screen.queryByAltText("Twitter icon")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Linkedin icon")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Instagram icon")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Github icon")).not.toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with social network links", () => {
    const props = {
      ...sharedProps,
      twitter: "scoobydoo",
      github: "scoobydoo",
      instagram: "scoobydoo_detective",
      linkedin: "scoobydoo_engineer",
    };
    const { asFragment } = render(<VolunteersCard {...props} />);

    expect(screen.getByAltText("Twitter icon")).toBeInTheDocument();
    expect(screen.getByAltText("Linkedin icon")).toBeInTheDocument();
    expect(screen.getByAltText("Instagram icon")).toBeInTheDocument();
    expect(screen.getByAltText("Github icon")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
