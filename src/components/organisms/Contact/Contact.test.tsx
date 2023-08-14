import { render } from "@testing-library/react";
import { BiSearch } from "react-icons/bi";

import type { ContactSocialMedia } from ".";
import { Contact, type ContactProps } from ".";

describe("Contact", () => {
  const socialMediasMock: ContactSocialMedia[] = [
    { icon: BiSearch, name: "Icon", url: "https://www.test.com" },
  ];

  const makeSut = ({
    socialMedias = socialMediasMock,
    ...props
  }: Partial<ContactProps>) => {
    return render(<Contact socialMedias={socialMedias} {...props} />);
  };

  it("should renders correctly", () => {
    const { asFragment } = makeSut({});
    expect(asFragment).toMatchSnapshot();
  });
});
