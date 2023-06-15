import { Text } from "atoms/Text";
import { Textarea } from "atoms/Textarea";
import React from "react";
import { type Control, useController } from "react-hook-form";

export interface TextareaFormProps {
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

export function TextareaForm({
  name,
  defaultValue = "",
  label,
  control,
  rules,
}: TextareaFormProps) {
  const { field: input, fieldState: state } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <label htmlFor={name}>
      <Textarea
        placeholder={label}
        id={name}
        aria-errormessage={`${name}--error-message`}
        aria-invalid={state.invalid}
        aria-label={label}
        {...input}
      />

      {state.error && (
        <Text
          id={`${name}--error-message`}
          key={state.error.message}
          className="anima-input-error-message inline text-sm text-alert"
        >
          {state.error.message}
        </Text>
      )}
    </label>
  );
}
