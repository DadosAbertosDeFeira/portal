/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render } from "@testing-library/react";
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
    const { asFragment, queryByAltText } = render(
      <VolunteersCard {...sharedProps} />
    );

    expect(queryByAltText("Twitter icon")).not.toBeInTheDocument();
    expect(queryByAltText("Linkedin icon")).not.toBeInTheDocument();
    expect(queryByAltText("Instagram icon")).not.toBeInTheDocument();
    expect(queryByAltText("Github icon")).not.toBeInTheDocument();
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
    const { asFragment, queryByAltText } = render(
      <VolunteersCard {...props} />
    );

    expect(queryByAltText("Twitter icon")).toBeInTheDocument();
    expect(queryByAltText("Linkedin icon")).toBeInTheDocument();
    expect(queryByAltText("Instagram icon")).toBeInTheDocument();
    expect(queryByAltText("Github icon")).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
