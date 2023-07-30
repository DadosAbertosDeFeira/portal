import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Headline } from "atoms/Headline";
import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import classNames from "classnames";
import type { StaticImageData } from "next/image";
import React from "react";

export type SupporterShowcaseItem = {
  id: string;
  image: string | StaticImageData;
  name: string;
  link: string;
};

export type SupporterShowcaseProps = BoxProps & {
  items: SupporterShowcaseItem[];
  title: string;
};

export function SupporterShowcase({
  title,
  items,
  className,
  ...props
}: SupporterShowcaseProps) {
  return (
    <Box
      className={classNames(
        "flex flex-col justify-center items-center",
        className
      )}
      {...props}
    >
      <Headline as="h2" className="m-lg tablet:m-xl">
        {title}
      </Headline>
      <Box className="flex  flex-col  items-center justify-center gap-2 tablet:flex-row tablet:flex-wrap">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="m-lg max-w-[200px] tablet:m-md"
              src={item.image}
              alt={item.name}
            />
          </Link>
        ))}
      </Box>
    </Box>
  );
}
