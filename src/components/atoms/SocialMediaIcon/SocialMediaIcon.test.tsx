import { render } from "@testing-library/react";

import { SocialMediaIcon, type SocialMediaIconProps } from ".";

describe("SocialMediaIcon", () => {
  const makeSut = ({
    type = "facebook",
    ...props
  }: Partial<SocialMediaIconProps>) => {
    return render(<SocialMediaIcon type={type} {...props} />);
  };

  it("should render facebook type correctly", () => {
    const { asFragment } = makeSut({ type: "facebook" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render github type correctly", () => {
    const { asFragment } = makeSut({ type: "github" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render instagram type correctly", () => {
    const { asFragment } = makeSut({ type: "instagram" });

    expect(asFragment).toMatchSnapshot();
  });

  it("should render twitter type correctly", () => {
    const { asFragment } = makeSut({ type: "twitter" });

    expect(asFragment).toMatchSnapshot();
  });
});
