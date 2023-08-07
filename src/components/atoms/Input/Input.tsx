import { Box } from "atoms/Box";
import { Text } from "atoms/Text";
import type { FocusEventHandler } from "react";
import { forwardRef, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

import type { InputProps, InputVariants } from "./types";

const variants: Record<InputVariants, string> = {
  default: "outline-none",
  outline:
    "rounded border border-gray-2 bg-white font-medium text-gray-dark focus:border-primary-dark transition-all",
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
    onFocus,
    onBlur,
    containerProps,
    filled = true,
    ...props
  },
  ref
) {
  const [hasFocus, setFocus] = useState(false);

  const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocus(true);
    if (onFocus) onFocus(event);
  };

  const handleblur: FocusEventHandler<HTMLInputElement> = (event) => {
    setFocus(false);
    if (onBlur) onBlur(event);
  };

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
  }, [helperText, errorText, name]);

  return (
    <label
      {...containerProps}
      className={twMerge(
        "flex cursor-pointer flex-col flex-nowrap bg-white",
        containerProps?.className
      )}
      htmlFor={id}
    >
      <span className={hideLabel ? "sr-only" : ""}>{label}</span>
      <Box className="flex flex-col flex-nowrap gap-y-1">
        <Box
          className={twMerge(
            "flex w-full flex-row flex-nowrap items-center gap-2 p-2 border-2 border-transparent",
            variants[variant],
            variant === "outline" && hasFocus && "border-primary"
          )}
          onFocus={handleFocus}
          onBlur={handleblur}
        >
          {prefix}
          <input
            className={twMerge("grow outline-none w-full", className)}
            id={id}
            name={name}
            aria-errormessage={`input-${name}--error-message`}
            aria-describedby={`input-${name}--describedby`}
            placeholder={filled ? label : ""}
            {...props}
            ref={ref}
          />
          {suffix}
        </Box>
        {handleBottomText}
      </Box>
    </label>
  );
});
