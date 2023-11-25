import React, { useEffect, useRef } from 'react';
import { MdClose, MdOpenInNew } from 'react-icons/md';

import PropTypes from 'prop-types';

import Link from 'next/link';

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
    document.addEventListener('touchend', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [wrapperRef, handleClose]);

  return (
    <div ref={wrapperRef} className="flex flex-col bg-white h-full shadow-md">
      <div className="flex justify-end w-auto px-md py-md bg-no-repeat bg-bottom bg-cover bg-waved-banner">
        <button type="button" onClick={handleClose}>
          <MdClose size={24} />
        </button>
      </div>
      <ul className="flex flex-col space-y-sm font-bold m-md">
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
          <Link href="/#projetos" onClick={handleClose}>
            Projetos
          </Link>
        </li>
        <li>
          <Link href="/#contato" onClick={handleClose}>
            Contato
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            className="flex items-center"
            href="https://anchor.fm/cidadesabertas/"
            onClick={handleClose}
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
            href="https://dadosabertosdefeira.medium.com"
            onClick={handleClose}
          >
            <div>
              Blog
              <MdOpenInNew className="ml-sm inline" size="16" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
