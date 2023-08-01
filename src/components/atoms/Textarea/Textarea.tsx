import { Box } from "atoms/Box";
import { Text } from "atoms/Text";
import { forwardRef, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import type { TextareaProps } from "./types";

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      name,
      label,
      hideLabel = false,
      errorText,
      helperText,
      className,
      containerProps,
      filled = true,
      ...props
    },
    ref
  ) {
    const handleBottomText = useMemo(() => {
      if (errorText) {
        return (
          <Text
            id={`input-${name}--error-message`}
            className="text-sm text-alert"
          >
            {errorText}
          </Text>
        );
      }
      if (helperText) {
        return (
          <Text id={`input-${name}--describedby`} className="text-sm">
            {helperText}
          </Text>
        );
      }

      return null;
    }, [helperText, errorText]);

    return (
      <label
        {...containerProps}
        className={twMerge(
          "flex cursor-pointer flex-col flex-nowrap",
          containerProps?.className
        )}
        htmlFor={name}
      >
        <span className={hideLabel ? "sr-only" : ""}>{label}</span>
        <Box className="flex flex-col flex-nowrap gap-y-1">
          <textarea
            className={twMerge(
              "w-full rounded border border-gray-2 bg-white p-2 pl-4 font-medium text-gray-dark",
              className
            )}
            id={name}
            name={name}
            aria-errormessage={`textarea-${name}--error-message`}
            aria-describedby={`textarea-${name}--describedby`}
            placeholder={filled ? label : ""}
            {...props}
            ref={ref}
          />
          {handleBottomText}
        </Box>
      </label>
    );
  }
);
