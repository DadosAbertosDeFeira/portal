import React from "react";

export interface BoxProps extends React.HTMLProps<HTMLDivElement> {}

export function Box({ children, ...props }: BoxProps) {
  return <div {...props}>{children}</div>;
}
