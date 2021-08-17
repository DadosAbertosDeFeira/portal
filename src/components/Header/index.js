import React, { useRef, useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { animated, useTransition } from 'react-spring';
import Link from '../Link';

import styles from './styles.module.scss';
import SearchDropdown from '../SearchDropdown';

import logo from '../../assets/logo.svg';
import smallLogo from '../../assets/smallLogo.svg';

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
  const [searchOpened, setSearchOpened] = useState(false);

  // const [searchText, setSearchText] = useState('');

  const toggleMenu = () => {
    setMenuOpened((state) => !state);
  };

  // const openSearch = () => {
  //   setSearchOpened(true);
  // };

  const closeSearch = () => {
    setSearchOpened(false);
  };

  const searchTransition = useTransition(!searchOpened, null, {
    from: {
      transform: 'translateX(150%)',
    },
    enter: {
      position: 'static',
      transform: 'translateX(0)',
    },
    leave: {
      position: 'absolute',
      transform: 'translateX(-150%)',
    },
  });

  useEffect(() => {
    let isScrollingDown = false;

    const onScroll = () => {
      if (!navRef.current) {
        return;
      }
      const scrollTop = window.pageYOffset || navRef.scrollTop;
      if (scrollTop > 68) {
        if (isScrollingDown) {
          return;
        }
        isScrollingDown = true;
        navRef.current.classList.add(styles.decreasedSize);
        navRef.current.classList.remove(styles.defaultSize);
        closeSearch();
      } else {
        if (!isScrollingDown) {
          return;
        }
        isScrollingDown = false;
        navRef.current.classList.add(styles.defaultSize);
        navRef.current.classList.remove(styles.decreasedSize);
        closeSearch();
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [navRef]);

  return (
    <>
      <header id={styles.header} className={styles.defaultSize} ref={navRef}>
        <nav id={styles.desktop}>
          <div>
            <Link href="/">
              <img
                className={styles.logo}
                src={logo}
                alt="Logo Dados Abertos de Feira"
              />
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/#sobre">SOBRE</Link>
            </li>
            <li>
              <Link
                target="_blank"
                href="https://dadosabertosdefeira.medium.com"
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link href="/#colabore">COLABORE</Link>
            </li>
          </ul>
          <ul className={styles.social}>
            <li>
              <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}>
                <FaInstagram size={32} />
              </Link>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL}>
                <FaFacebook size={32} />
              </Link>
            </li>
            <li>
              <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
                <FaTwitter size={32} />
              </Link>
            </li>
          </ul>
          <form action="busca">
            {/* <BiSearchAlt2 size={32} />
            <input
              ref={(input) => input && input.focus()}
              name="search"
              placeholder="Pesquisar no Dados Abertos de Feira"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            /> */}
          </form>
        </nav>
        <nav id={styles.mobile}>
          {searchTransition.map(
            ({ item, key, props }) =>
              !item && (
                <animated.div key={key} style={props}>
                  <div>
                    <Link href="/">
                      <img
                        className={styles.searchImageSize}
                        src={smallLogo}
                        alt="Logo pequena Dados Abertos de Feira"
                      />
                    </Link>
                  </div>
                  <form action="busca">
                    {/* <BiSearchAlt2 size={24} />
                    <input
                      ref={(input) => input && input.focus()}
                      name="search"
                      placeholder="Digite aqui a sua busca"
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                    />
                    <button type="button" onClick={closeSearch}>
                      <MdClose size={24} />
                    </button> */}
                  </form>
                </animated.div>
              )
          )}
          {searchTransition.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props}>
                  {/* <button type="button" onClick={openSearch}>
                    <BiSearchAlt2 size={24} />
                  </button> */}
                  <div />
                  <div id={styles.reducedImageWithScroll}>
                    <Link href="/">
                      <img
                        src={logo}
                        alt="Logo Dados Abertos de Feira"
                        ref={imgRef}
                      />
                    </Link>
                  </div>
                  <button type="button" onClick={toggleMenu}>
                    <BiMenu size={24} />
                  </button>
                </animated.div>
              )
          )}
        </nav>
      </header>
      <div id={styles.menu} className={menuOpened ? styles.open : ''}>
        <SearchDropdown toggleMenu={toggleMenu} />
      </div>
    </>
  );
}
