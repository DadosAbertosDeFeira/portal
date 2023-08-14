import { render } from "@testing-library/react";

import { Image, type ImageProps } from "./Image";

jest.mock("next/image", () => ({ src, ...props }: ImageProps) => (
  <img src={src as string} {...props} />
));

describe("Image", () => {
  const makeSut = ({
    alt = "Imagem de teste",
    src = "https://image.domain.png",
    ...props
  }: Partial<ImageProps>) => {
    return render(
      <Image alt={alt} src={src} width={200} height={200} {...props} />
    );
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
