import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";

export interface InputProps {
  name: string;
  label?: string;
  defaultValue?: string;
  control: Control<any>;
  rules: Partial<{
    validate: {
      [k: string]: (v: string) => string | boolean;
    };
    required: boolean | string;
  }>;
}

export function Input({
  name,
  control,
  label,
  rules,
  defaultValue = "",
  ...props
}: InputProps) {
  const { field: input, fieldState: state } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <label htmlFor={name}>
      <input
        className="w-full rounded border border-gray-2 bg-white p-2 pl-4 font-medium text-gray-dark"
        placeholder={label}
        aria-errormessage={state.error?.message}
        aria-labelledby={`${name}-input--error-message`}
        aria-invalid={state.invalid}
        aria-label={label}
        {...props}
        {...input}
      />

      {state.error && (
        <span
          key={state.error.message}
          id={`${name}-input--error-message`}
          className="anima-input-error-message text-sm text-alert"
        >
          {state.error.message}
        </span>
      )}
    </label>
  );
}
