import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { InputProps, InputVariants } from "./types";

export const inputVariants: Record<InputVariants, string> = {
  default: "outline-none",
  shadowed: "shadow-lg rounded bg-white",
  outline:
    "rounded border border-gray-2 bg-white font-normal text-gray-900 focus:border-blue-500 transition-all",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    suffix,
    id,
    prefix,
    label,
    hideLabel = false,
    variant = "default",
    errorText,
    helperText,
    className,
    filled = true,
    containerProps = {},
    labelProps = {},
    ...props
  },
  ref
) {
  const handleBottomText = useMemo(() => {
    if (errorText) {
      return (
        <p
          id={`input-${id}--error-message`}
          className="absolute inset-x-2 bottom-0 text-sm text-red-500"
        >
          {errorText}
        </p>
      );
    }
    if (helperText) {
      return (
        <p
          id={`input-${id}--describedby`}
          className="absolute inset-x-2 bottom-0 text-sm text-gray-500"
        >
          {helperText}
        </p>
      );
    }

    return null;
  }, [helperText, errorText, id]);

  return (
    <div
      {...containerProps}
      className={twMerge(
        "relative",
        !!handleBottomText && "pb-6",
        containerProps.className
      )}
    >
      <label
        {...labelProps}
        className={twMerge(labelProps.className, hideLabel ? "sr-only" : "")}
        htmlFor={id}
      >
        {label}
      </label>
      <div>
        <div className="relative">
          {prefix && (
            <div className="absolute inset-y-0 left-1 flex w-9 items-center justify-center overflow-hidden p-1">
              {prefix}
            </div>
          )}
          <input
            className={twMerge(
              "bg-white p-3 placeholder:text-sm w-full h-full outline-none",
              !!prefix && "pl-10",
              !!suffix && "pr-10",
              inputVariants[variant],
              !!errorText && "border-red-600",
              className
            )}
            id={id}
            aria-errormessage={`input-${name}--error-message`}
            aria-describedby={`input-${name}--describedby`}
            placeholder={filled ? label : ""}
            {...props}
            ref={ref}
          />
          {suffix && (
            <div className="absolute inset-y-0 right-1 flex w-9 items-center justify-center overflow-hidden p-1">
              {suffix}
            </div>
          )}
        </div>
      </div>
      {handleBottomText}
    </div>
  );
});
