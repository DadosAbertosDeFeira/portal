import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import MobileMenu from '../MobileMenu';

const DesktopHeader = () => {
  return (
    <nav className="bg-white fixed h-desktop-header top-0 z-20 xl:z-0 w-full flex-row shadow md:space-x-lg page-margin-align pr-xl hidden tablet:flex">
      <div className="my-auto mr-lg">
        <Link href="/">
          <img
            className="h-14 w-auto"
            src="/assets/logo.svg"
            alt="Logo Dados Abertos de Feira"
          />
        </Link>
      </div>
      <ul className="flex flex-row justify-start space-x-xl my-auto font-bold text-sm z-20">
        <li>
          <Link href="/#sobre">Sobre</Link>
        </li>
        <li>
          <Link href="/#voluntarios">Voluntários</Link>
        </li>
        <li>
          <Link href="/#projetos">Projetos</Link>
        </li>
        <li>
          <Link href="/#colabore">Colabore</Link>
        </li>
        <li>
          <Link href="/#contato">Contato</Link>
        </li>
        <li>
          <Link target="_blank" href="https://anchor.fm/cidadesabertas/">
            Podcast
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://dadosabertosdefeira.medium.com">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const MobileHeader = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((state) => !state);
  };

  const closeMenuIfOpened = () => {
    setMenuOpened((isOpen) => (isOpen ? false : isOpen));
  };

  return (
    <nav className="bg-white fixed top-0 h-mobile-header w-full z-10 flex-row px-lg shadow flex tablet:hidden">
      <div className="flex-grow flex place-content-center">
        <Link href="/" className="m-auto">
          <img
            src="/assets/logo.svg"
            className="h-14 w-auto"
            alt="Logo Dados Abertos de Feira"
          />
        </Link>
      </div>
      <button type="button" onClick={toggleMenu}>
        <BiMenu size={24} />
      </button>
      <aside
        className={`fixed top-0 left-0 z-20 h-full ease-in-out transition-all duration-300
          ${
            menuOpened ? 'visible translate-x-0' : 'invisible -translate-x-full'
          }`}
      >
        <MobileMenu handleClose={closeMenuIfOpened} />
      </aside>
    </nav>
  );
};

/**
 * Componente do Header
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
  return (
    <header>
      <DesktopHeader />
      <MobileHeader />
    </header>
  );
}
