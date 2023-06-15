import classNames from "classnames";
import type { ComponentPropsWithRef } from "react";
import React, { forwardRef } from "react";

export type InputProps = {} & ComponentPropsWithRef<"input">;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return (
    <input
      {...props}
      className={classNames(
        "w-full rounded border border-gray-2 bg-white p-2 pl-4 font-medium text-gray-dark",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
