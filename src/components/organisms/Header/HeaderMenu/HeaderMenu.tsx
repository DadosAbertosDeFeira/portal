import type { BoxProps } from "atoms/Box";
import { Box } from "atoms/Box";
import { Link } from "atoms/Link";
import { MdClose, MdOpenInNew } from "react-icons/md";

export interface HeaderMenuProps extends BoxProps {
  closeMenu: () => void;
}

export function HeaderMenu({ closeMenu, ...props }: HeaderMenuProps) {
  return (
    <Box className="flex h-full flex-col bg-white shadow-md" {...props}>
      <div className="flex w-auto justify-end bg-waved-banner bg-cover bg-bottom bg-no-repeat p-md">
        <button type="button" onClick={closeMenu}>
          <MdClose size={24} />
        </button>
      </div>
      <ul className="m-md flex flex-col space-y-sm font-bold">
        <li>
          <Link href="/#sobre" onClick={closeMenu}>
            Nossa História
          </Link>
        </li>
        <li>
          <Link href="/#voluntarios" onClick={closeMenu}>
            Voluntários
          </Link>
        </li>
        <li>
          <Link href="/#projetos" onClick={closeMenu}>
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/#colabore" onClick={closeMenu}>
            Como contribuir
          </Link>
        </li>
        <li>
          <Link href="/#contato" onClick={closeMenu}>
            Contato
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="flex items-center"
            href="https://anchor.fm/cidadesabertas/"
            onClick={closeMenu}
          >
            <div>
              Podcast Cidades Abertas
              <MdOpenInNew className="ml-sm inline" size="16" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="flex items-center"
            onClick={closeMenu}
            href="https://dadosabertosdefeira.medium.com"
          >
            <div>
              Blog
              <MdOpenInNew className="ml-sm inline" size="16" />
            </div>
          </Link>
        </li>
      </ul>
    </Box>
  );
}
