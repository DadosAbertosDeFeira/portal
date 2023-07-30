import { render } from "@testing-library/react";

import { SupporterShowcase, type SupporterShowcaseProps } from ".";

describe("SupporterShowcase", () => {
  const makeSut = ({
    items = [],
    title = "",
    ...props
  }: Partial<SupporterShowcaseProps>) => {
    return render(<SupporterShowcase items={items} title={title} {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });
});
