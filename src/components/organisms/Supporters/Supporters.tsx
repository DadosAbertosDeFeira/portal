import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";
import React from "react";

import type { SupportersProps } from "./types";

export function Supporters({ title, items }: SupportersProps) {
  return (
    <TitleSection className="p-2 md:px-10" title={title}>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-10">
        {items.map(({ id, image, link, name }) => (
          <li key={id}>
            <Link href={link}>
              <Image className="max-w-[200px]" src={image} alt={name} />
            </Link>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
}
