import React from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import Link from '../Link';

/**
 * Componente do Dropdown de Pesquisa
 *
 * @param props {{ toggleMenu: function }}
 * @param {function} toggleMenu: Título da página
 *
 * @example
 * ```
 * import SearchDropdown from "../components/SEO";
 *
 * export default function Page() {
 *   const [searchDropdownOpened, setSearchDropdownOpened] = useState(false);
 *
 *   const toggleSearchDropdownMenu = () => {
 *     setSearchDropdownOpened((state) => !state);
 *   };
 *
 *   return (
 *     <>
 *       ...
 *       <SearchDropdown toggleMenu={toggleSearchDropdownMenu}/>
 *       ...
 *     </>
 *   )
 * }
 * ```
 */
export default function SearchDropdown({ toggleMenu }) {
  return (
    <div className="flex flex-col w-5xl bg-white h-full shadow">
      <div className="flex justify-end w-auto px-md py-md bg-no-repeat bg-bottom bg-cover bg-waved-banner">
        <button type="button" onClick={toggleMenu}>
          <MdClose size={24} />
        </button>
      </div>
      <ul className="flex flex-col space-y-sm font-bold mx-md">
        <li>
          <Link href="/#sobre" onClick={toggleMenu}>
            Nossa História
          </Link>
        </li>
        <li>
          <Link href="/#voluntarios" onClick={toggleMenu}>
            Voluntários
          </Link>
        </li>
        <li>
          <Link href="/#colabore" onClick={toggleMenu}>
            Como contribuir
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://dadosabertosdefeira.medium.com"
            onClick={toggleMenu}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link href="/#contato" onClick={toggleMenu}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

SearchDropdown.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
