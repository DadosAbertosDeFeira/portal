import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import type { UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";

import type { TextareaProps } from "./Textarea";
import { Textarea } from "./Textarea";

describe("textarea", () => {
  const makeSut = ({
    useFormProps,
    rules = {},
    name = "textarea",
    label = "textarea",
  }: Partial<TextareaProps & { useFormProps: UseFormProps }>) => {
    const App = () => {
      const form = useForm(useFormProps);
      return (
        <Textarea
          name={name}
          label={label}
          control={form.control}
          rules={rules}
        />
      );
    };

    return render(<App />);
  };

  it("should renders Textarea component with required props", () => {
    const { container } = makeSut({
      rules: { required: true },
      name: "username",
      label: "Username",
    });

    const input = screen.getByPlaceholderText("Username");

    expect(container).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "username");
    expect(input).toBeInTheDocument();
  });

  it("should update value of Textarea component", async () => {
    makeSut({
      rules: { required: true },
      label: "Password",
      name: "password",
    });

    const input = screen.getByLabelText<HTMLTextAreaElement>("Password");

    fireEvent.input(input, { target: { value: "password123" } });

    await waitFor(() => {
      expect(input.value).toBe("password123");
    });
  });

  it("should display error message of Textarea component", async () => {
    makeSut({
      useFormProps: { mode: "onBlur" },
      rules: { required: "email is required" },
      name: "email",
      label: "Email",
    });

    const input = screen.getByLabelText("Email");

    fireEvent.blur(input);

    await waitFor(() => {
      const errorMessage = screen.getByText(/email is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should does not display error message when textarea is valid", async () => {
    makeSut({
      useFormProps: { mode: "onBlur" },
      rules: {
        validate: {
          min: (v) => parseInt(v, 10) >= 18 || "age must be at least 18",
        },
      },
      name: "age",
      label: "Age",
    });

    const input = screen.getByPlaceholderText("Age");
    fireEvent.change(input, { target: { value: "19" } });
    fireEvent.blur(input);

    const errorMessage = screen.queryByText(/age must be at least 18/i);

    await waitFor(() => {
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  it("should meet accessibility requirements of Textarea component", async () => {
    makeSut({
      useFormProps: { mode: "onBlur" },
      rules: { required: "zipcode is required" },
      name: "zipcode",
      label: "Zipcode",
    });

    const input = screen.getByPlaceholderText("Zipcode");

    fireEvent.blur(input);

    await waitFor(() => expect(input).toHaveAttribute("aria-invalid", "true"));

    await waitFor(() =>
      expect(input).toHaveAttribute(
        "aria-errormessage",
        `zipcode--error-message`
      )
    );
  });
});
