import { render } from "@testing-library/react";

import { SocialMediaCard, type SocialMediaCardProps } from "./SocialMediaCard";

describe("SocialMediaCard", () => {
  const makeSut = (props: SocialMediaCardProps) => {
    return render(<SocialMediaCard {...props} />);
  };

  it("should render github card correctly", () => {
    const { asFragment } = makeSut({ type: "github", user: "teste" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render instagram card correctly", () => {
    const { asFragment } = makeSut({ type: "instagram", user: "teste" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render linkedin card correctly", () => {
    const { asFragment } = makeSut({ type: "linkedin", user: "teste" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render twitter card correctly", () => {
    const { asFragment } = makeSut({ type: "twitter", user: "teste" });

    expect(asFragment).toMatchSnapshot();
  });
});
