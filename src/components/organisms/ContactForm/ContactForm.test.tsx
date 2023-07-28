import { render } from "@testing-library/react";

import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  const makeSut = ({ ...props }: Partial<{}>) => {
    return render(<ContactForm {...props} />);
  };

  // eslint-disable-next-line jest/expect-expect
  it("renders correctly", () => {
    makeSut({});
  });
});
