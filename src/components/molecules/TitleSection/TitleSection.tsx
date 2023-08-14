import { Image } from "atoms/Image";
import React from "react";
import { twMerge } from "tailwind-merge";

import type { TitleSectionProps } from ".";

export function TitleSection({
  src,
  alt,
  title,
  className,
  children,
  ...props
}: TitleSectionProps) {
  return (
    <section
      className={twMerge(
        "align-center mx-auto flex w-full flex-col justify-center gap-16",
        className
      )}
      {...props}
    >
      <header className="flex flex-col flex-nowrap items-center justify-center gap-5">
        <h2 className="text-center">{title}</h2>
        {src && <Image className="order-0" src={src} alt={alt} />}
      </header>
      {children}
    </section>
  );
}
