import { render } from "@testing-library/react";

import { Tag, type TagProps } from "./Tag";

describe("Tag", () => {
  const makeSut = ({ children = "Tag", ...props }: Partial<TagProps>) => {
    return render(<Tag {...props}>{children}</Tag>);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment()).toMatchSnapshot();
  });
});
