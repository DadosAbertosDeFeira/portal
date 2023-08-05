import { render } from "@testing-library/react";

import { SocialContactSection } from "./SocialContactSection";

describe("SocialContactSection", () => {
  const makeSut = () => {
    return render(<SocialContactSection />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut();

    expect(asFragment).toMatchSnapshot();
  });
});
