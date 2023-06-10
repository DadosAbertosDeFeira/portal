import { fireEvent, render, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { Textarea } from "./Textarea";

describe("textarea", () => {
  const makeSut = ({
    useFormProps,
    rules,
    name = "textarea",
    label = "textarea",
  }) => {
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
    const { getByPlaceholderText, container } = makeSut({
      rules: { required: true },
      name: "username",
      label: "Username",
    });

    const input = getByPlaceholderText("Username");

    expect(container).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "username");
    expect(input).toBeInTheDocument();
  });

  it("should update value of Textarea component", () => {
    const { getByLabelText } = makeSut({
      rules: { required: true },
      label: "Password",
      name: "password",
    });

    const input = getByLabelText("Password");

    fireEvent.input(input, { target: { value: "password123" } });

    expect(input.value).toBe("password123");
  });

  it("should display error message of Textarea component", async () => {
    const { getByLabelText, getByText } = makeSut({
      useFormProps: { mode: "onBlur" },
      rules: { required: "email is required" },
      name: "email",
      label: "Email",
    });

    const input = getByLabelText("Email");

    await waitFor(() => fireEvent.blur(input));

    const errorMessage = getByText(/email is required/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it("should does not display error message when textarea is valid", async () => {
    const { getByPlaceholderText, queryByText } = makeSut({
      useFormProps: { mode: "onBlur" },
      rules: {
        validate: {
          min: (v) => parseInt(v, 10) >= 18 || "age must be at least 18",
        },
      },
      name: "age",
      label: "Age",
    });

    const input = getByPlaceholderText("Age");

    await waitFor(() => {
      fireEvent.change(input, { target: { value: "19" } });
      fireEvent.blur(input);
    });

    const errorMessage = queryByText(/age must be at least 18/i);

    expect(errorMessage).not.toBeInTheDocument();
  });

  it("should meet accessibility requirements of Textarea component", async () => {
    const { getByPlaceholderText } = makeSut({
      useFormProps: { mode: "onBlur" },
      rules: { required: "zipcode is required" },
      name: "zipcode",
      label: "Zipcode",
    });

    const input = getByPlaceholderText("Zipcode");

    expect(input).toHaveAttribute("aria-label", "Zipcode");
    expect(input).toHaveAttribute("aria-invalid", "false");

    await waitFor(() => fireEvent.blur(input));

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-errormessage", "zipcode is required");
  });
});
