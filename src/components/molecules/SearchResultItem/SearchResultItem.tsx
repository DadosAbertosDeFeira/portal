import { Link } from "atoms/Link";
import { Text } from "atoms/Text";
import React, { useMemo } from "react";

import type { SearchResultItemProps } from "./types";

export function SearchResultItem({
  url,
  title,
  description,
  date,
  ...props
}: SearchResultItemProps) {
  const urlPaths = useMemo(() => {
    const { origin, pathname } = new URL(url);
    const paths = pathname.replaceAll("/", " > ");
    return `${origin}${paths}`;
  }, [url]);

  return (
    <section className="flex flex-col gap-2" {...props}>
      <header>
        <Link className="text-[#3793DF]" href={url}>
          {urlPaths}
        </Link>
        <Text
          variant="h2"
          className="font-roboto text-[18px] font-medium text-primary-dark"
        >
          {title}
        </Text>
      </header>
      <Text className="leading-1 text-[14px] font-light text-[#444545]">
        {description}
      </Text>
      <footer>
        <Text className="text-xs tablet:text-base">{date}</Text>
      </footer>
    </section>
  );
}
