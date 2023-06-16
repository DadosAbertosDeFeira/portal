import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export type LabelProps = ComponentPropsWithRef<"label"> & {};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(
  { children, ...props },
  ref
) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...props} ref={ref}>
      {children}
    </label>
  );
});
