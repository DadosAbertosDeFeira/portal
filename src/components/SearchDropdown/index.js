import React from 'react';
import { MdBusiness, MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

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
    <div id={styles.menu}>
      <div id={styles.menuClose}>
        <button type="button" onClick={toggleMenu}>
          <MdClose size={24} />
        </button>
      </div>
      <ul className={styles.list}>
        <li>
          <div>
            <MdBusiness size={16} />
            <span>Prefeitura</span>
          </div>
          <ul className={styles.listItem}>
            <li>
              <span>Diário Oficial</span>
            </li>
            <li>
              <span>Licitações</span>
            </li>
          </ul>
        </li>

        <li>
          <div>
            <MdBusiness size={16} />
            <span>Câmara de Vereadores</span>
          </div>
          <ul className={styles.listItem}>
            <li>
              <span>Diário Oficial</span>
            </li>
            <li>
              <span>Atas das Sessões</span>
            </li>
            <li>
              <span>Lista de Presença</span>
            </li>
            <li>
              <span>Agenda das Sessões</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

SearchDropdown.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
