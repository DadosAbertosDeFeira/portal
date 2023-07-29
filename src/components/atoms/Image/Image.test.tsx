import { render } from "@testing-library/react";

import ImageMock from "@/../public/assets/logo.svg";

import { Image, type ImageProps } from "./Image";

describe("Image", () => {
  const makeSut = ({
    alt = "Imagem de teste",
    src = ImageMock,
    ...props
  }: Partial<ImageProps>) => {
    return render(<Image alt={alt} src={src} {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
