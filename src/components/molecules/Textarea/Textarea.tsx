import type { ComponentPropsWithoutRef } from "react";
import React from "react";
import { type Control, useController } from "react-hook-form";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
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

export function Textarea({
  name,
  defaultValue = "",
  label,
  control,
  rules,
  ...props
}: TextareaProps) {
  const { field: input, fieldState: state } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <label htmlFor={name}>
      <textarea
        className="w-full rounded border border-gray-2 bg-white p-2 pl-4 font-medium text-gray-dark"
        placeholder={label}
        id={name}
        aria-errormessage={`${name}--error-message`}
        aria-invalid={state.invalid}
        aria-label={label}
        {...props}
        {...input}
      />

      {state.error && (
        <span
          id={`${name}--error-message`}
          key={state.error.message}
          className="anima-input-error-message text-sm text-alert"
        >
          {state.error.message}
        </span>
      )}
    </label>
  );
}