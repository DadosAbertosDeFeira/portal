import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

describe("input", () => {
  const makeSut = ({
    useFormProps,
    rules,
    name = "input",
    label = "input",
  }) => {
    const App = () => {
      const form = useForm(useFormProps);
      return (
        <Input name={name} label={label} control={form.control} rules={rules} />
      );
    };

    return render(<App />);
  };

  it("should renders Input component with required props", () => {
    const { container } = makeSut({
      name: "username",
      label: "Username",
    });

    const input = screen.getByPlaceholderText("Username");

    expect(container).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "username");
    expect(input).toBeInTheDocument();
  });

  it("should update value of Input component", async () => {
    makeSut({
      name: "password",
      label: "Password",
      rules: { required: true },
    });

    const input = screen.getByLabelText("Password");

    fireEvent.input(input, { target: { value: "password123" } });

    await waitFor(() => {
      expect(input.value).toBe("password123");
    });
  });

  it("should display error message of Input component", async () => {
    makeSut({
      name: "email",
      label: "Email",
      rules: { required: "email is required" },
      useFormProps: { mode: "onBlur" },
    });

    const input = screen.getByLabelText("Email");
    fireEvent.blur(input);

    await waitFor(() => {
      const errorMessage = screen.getByText(/email is required/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should does not display error message when input is valid", async () => {
    makeSut({
      name: "age",
      label: "Age",
      rules: {
        validate: {
          min: (v) => parseInt(v, 10) >= 18 || "age must be at least 18",
        },
      },
    });

    const input = screen.getByPlaceholderText("Age");

    fireEvent.change(input, { target: { value: "19" } });
    fireEvent.blur(input);

    const errorMessage = screen.queryByText(/age must be at least 18/i);

    await waitFor(() => {
      expect(errorMessage).not.toBeInTheDocument();
    });
  });

  it("should meet accessibility requirements of Input component", async () => {
    makeSut({
      name: "zipcode",
      label: "Zipcode",
      rules: { required: "zipcode is required" },
      useFormProps: { mode: "onBlur" },
    });

    const input = screen.getByPlaceholderText("Zipcode");

    expect(input).toHaveAttribute("aria-label", "Zipcode");
    expect(input).toHaveAttribute("aria-invalid", "false");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(input).toHaveAttribute("aria-invalid", "true");
    });
    await waitFor(() => {
      expect(input).toHaveAttribute("aria-errormessage", "zipcode is required");
    });
  });
});
