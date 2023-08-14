import { render } from "@testing-library/react";

import { URLReference, type URLReferenceProps } from ".";

describe("URLReference", () => {
  const makeSut = ({
    url = "https://www.test.com/one/two/three.pdf",
    ...props
  }: Partial<URLReferenceProps>) => {
    return render(<URLReference url={url} {...props} />);
  };

  it("should renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should URL without path correctly", () => {
    const { asFragment } = makeSut({
      url: "https://www.google.com/",
    });

    expect(asFragment).toMatchSnapshot();
  });
});
