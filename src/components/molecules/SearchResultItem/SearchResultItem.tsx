import { Link } from "atoms/Link";
import { URLReference } from "atoms/URLReference";
import React from "react";

import type { SearchResultItemProps } from "./types";

export function SearchResultItem({
  url,
  title,
  description,
  date,
  ...props
}: SearchResultItemProps) {
  return (
    <section className="flex flex-col gap-2" {...props}>
      <header>
        <Link className="group" href={url}>
          <URLReference url={url} />
          <h2 className="text-sm font-bold text-blue-500 group-hover:underline md:text-base">
            {title}
          </h2>
        </Link>
      </header>
      <p className="leading-1 text-xs font-light text-gray-700 md:text-sm">
        {description}
      </p>
      <footer>
        <p className="text-xs text-gray-600 md:text-sm">{date}</p>
      </footer>
    </section>
  );
}
