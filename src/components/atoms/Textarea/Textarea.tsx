import classNames from "classnames";
import type { ComponentPropsWithRef } from "react";
import React, { forwardRef } from "react";

export type TextareaProps = {} & ComponentPropsWithRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        className={classNames(
          "w-full rounded border border-gray-2 bg-white p-2 pl-4 font-medium text-gray-dark",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);
