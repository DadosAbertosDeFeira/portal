import React, { useRef, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Link from '../Link';

import SearchDropdown from '../SearchDropdown';

import logo from '../../assets/logo.svg';

/**
 * Componente do Dropdown de Pesquisa
 *
 * @param props {}
 *
 * @example
 * ```
 * import Header from "../components/Header";
 *
 * export default function Page() {
 *
 *   return (
 *     <>
 *       ...
 *       <Header />
 *       ...
 *     </>
 *   )
 * }
 * ```
 */

export default function Header() {
  const navRef = useRef(null);
  const imgRef = useRef(null);

  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((state) => !state);
  };

  return (
    <>
      <header ref={navRef}>
        <nav className="bg-white absolute top-0 h-desktop-header z-20 lg:z-0 w-screen lg:w-desktop-header flex flex-row shadow md:space-x-lg pl-md md:pl-xl lg:pl-2xl xl:pl-4xl pr-2xl invisible sm:visible">
          <div className="my-auto mr-lg">
            <Link href="/">
              <img
                className="h-14 w-auto"
                src={logo}
                alt="Logo Dados Abertos de Feira"
              />
            </Link>
          </div>
          <ul className="flex flex-row justify-start space-x-xl my-auto font-bold text-sm z-20">
            <li className="my-auto">
              <Link href="/#sobre">Sobre</Link>
            </li>
            <li className="my-auto">
              <Link href="/#voluntarios">Voluntários</Link>
            </li>
            <li className="my-auto">
              <Link href="/#colabore">Colabore</Link>
            </li>
            <li className="my-auto">
              <Link
                target="_blank"
                href="https://dadosabertosdefeira.medium.com"
              >
                Blog
              </Link>
            </li>
            <li className="my-auto">
              <Link href="/#contato">Contato</Link>
            </li>
          </ul>
        </nav>
        <nav className="bg-white fixed top-0 h-mobile-header w-mobile-header z-10 flex flex-row px-lg shadow visible sm:invisible">
          <div className="flex-grow flex place-content-center">
            <Link href="/" className="m-auto">
              <img src={logo} alt="Logo Dados Abertos de Feira" ref={imgRef} />
            </Link>
          </div>
          <button type="button" onClick={toggleMenu}>
            <BiMenu size={24} />
          </button>
        </nav>
      </header>
      <aside
        className={`absolute top-0 z-20 h-screen transform ease-in-out transition-all duration-300
          ${
            menuOpened ? 'visible translate-x-0' : 'invisible -translate-x-full'
          }`}
      >
        <SearchDropdown toggleMenu={toggleMenu} />
      </aside>
    </>
  );
}
