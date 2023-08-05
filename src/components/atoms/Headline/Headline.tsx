import classNames from "classnames";
import type { ComponentPropsWithRef, ReactNode } from "react";
import { createElement, forwardRef } from "react";

export type HeadlineProps = ComponentPropsWithRef<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: ReactNode;
};

export const Headline = forwardRef<HTMLHeadingElement, HeadlineProps>(
  function Headline({ as = "h1", children, className, ...props }, ref) {
    const classes = classNames(
      className,
      as === "h1" && "tablet:text-xl",
      "text-lg font-bold"
    );

    return createElement(as, { ...props, className: classes, ref }, children);
  }
);
