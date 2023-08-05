import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { ContactForm } from "./ContactForm";

jest.mock("react-toastify", () => ({
  __esModule: true,
  toast: {
    loading: jest.fn(),
    update: jest.fn(),
  },
}));

describe("ContactForm", () => {
  const fetch = jest.fn().mockResolvedValue({});

  beforeEach(() => {
    global.fetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const makeSut = ({ ...props }: Partial<{}>) => {
    return render(<ContactForm {...props} />);
  };

  it("renders correctly", () => {
    const { asFragment } = makeSut({});

    expect(asFragment).toMatchSnapshot();
  });

  it("should submit form", async () => {
    const mockForm = {
      "form-name": "contact",
      name: "name",
      email: "name@domain.com",
      message: "Exercitation adipisicing sunt est cupidatat enim",
    };

    makeSut({});

    const name = await screen.findByLabelText("Nome");
    fireEvent.input(name, { target: { value: mockForm.name } });

    const email = await screen.findByLabelText("Email");
    fireEvent.input(email, { target: { value: mockForm.email } });

    const message = await screen.findByLabelText("Mensagem");
    fireEvent.input(message, { target: { value: mockForm.message } });

    const button = await screen.findByRole("button");

    fireEvent.click(button);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(mockForm).toString(),
      });
    });
  });
});
