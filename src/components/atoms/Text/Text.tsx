import classNames from "classnames";
import React from "react";

export interface TextProps extends React.HTMLProps<HTMLParagraphElement> {}

export function Text({ children, ...props }: TextProps) {
  return (
    <p className={classNames("tablet:text-base")} {...props}>
      {children}
    </p>
  );
}
