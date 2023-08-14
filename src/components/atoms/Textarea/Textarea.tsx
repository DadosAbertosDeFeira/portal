import { inputVariants } from "atoms/Input";
import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { TextareaProps } from "./types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      name,
      id,
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
            <textarea
              className={twMerge(
                "bg-white p-3 placeholder:text-sm rounded-sm w-full h-full outline-none",
                inputVariants[variant],
                !!errorText && "border-red-600",
                className
              )}
              id={id}
              name={name}
              aria-errormessage={`input-${name}--error-message`}
              aria-describedby={`input-${name}--describedby`}
              placeholder={filled ? label : ""}
              {...props}
              ref={ref}
            />
          </div>
        </div>
        {handleBottomText}
      </div>
    );
  }
);
