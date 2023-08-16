import { Image } from "atoms/Image";
import { Link } from "atoms/Link";
import { TitleSection } from "molecules/TitleSection";

import type { SupporterSectionProps } from "./types";

export function SupporterSection({ supporters, title }: SupporterSectionProps) {
  return (
    <TitleSection className="p-2 md:px-10" title={title}>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-10">
        {supporters.map(({ id, img, link, name }) => (
          <li key={id}>
            <Link href={link}>
              <Image className="w-[200px]" src={img} alt={name} />
            </Link>
          </li>
        ))}
      </ul>
    </TitleSection>
  );
}
