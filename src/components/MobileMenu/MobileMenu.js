import React, { useEffect, useRef } from 'react';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import Link from '../Link';

/**
 * Componente do Menu Mobile
 *
 * @param props {{ handleClose: function }}
 * @param {function} handleClose: função callback para a ação de fechar
 *
 * @example
 * ```
 * import MobileMenu from "../components";
 *
 * export default function Page() {
 *   const [menuOpened, setMenuOpened] = useState(false);
 *
 *   const handleCloseMenu = () => {
 *     setMenuOpened((state) => !state);
 *   };
 *
 *   return (
 *     <>
 *       ...
 *       <MobileMenu handleClose={handleCloseMenu}/>
 *       ...
 *     </>
 *   )
 * }
 * ```
 */
export default function MobileMenu({ handleClose }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, handleClose]);

  return (
    <div
      ref={wrapperRef}
      className="flex flex-col w-5xl bg-white h-full shadow"
    >
      <div className="flex justify-end w-auto px-md py-md bg-no-repeat bg-bottom bg-cover bg-waved-banner">
        <button type="button" onClick={handleClose}>
          <MdClose size={24} />
        </button>
      </div>
      <ul className="flex flex-col space-y-sm font-bold mx-md">
        <li>
          <Link href="/#sobre" onClick={handleClose}>
            Nossa História
          </Link>
        </li>
        <li>
          <Link href="/#voluntarios" onClick={handleClose}>
            Voluntários
          </Link>
        </li>
        <li>
          <Link href="/#colabore" onClick={handleClose}>
            Como contribuir
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            href="https://dadosabertosdefeira.medium.com"
            onClick={handleClose}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link href="/#contato" onClick={handleClose}>
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
