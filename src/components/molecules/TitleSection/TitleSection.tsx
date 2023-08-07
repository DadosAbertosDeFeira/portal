import { Box } from "atoms/Box";
import { Image } from "atoms/Image";
import { Text } from "atoms/Text";
import React from "react";

import type { TitleSectionProps } from ".";

export function TitleSection({
  src,
  alt,
  title,
  children,
  ...props
}: TitleSectionProps) {
  return (
    <section className="align-center mx-auto flex flex-col justify-center gap-5">
      <header className="flex flex-col flex-nowrap items-center justify-center gap-5">
        <Text className="order-1" variant="h1">
          {title}
        </Text>
        {src && <Image className="order-0" src={src} alt={alt} />}
      </header>
      <Box {...props}>{children}</Box>
    </section>
  );
}
